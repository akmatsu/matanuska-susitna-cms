import type {
  CommonContext,
  RequestController,
  RequestControllerWithContext,
} from './types';
import {
  COLLECTIONS,
  PAGE_TYPES,
  PageType,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from '../utils/typesense';
import { logger } from '../configs/logger';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

/** Create all registered typesense collections */
export const createTypesenseCollections: RequestController =
  () => async (_, res) => {
    try {
      await _forEachCollection(async (collection) => {
        if (await _checkIfCollectionExists(collection.name))
          return logger.info(
            `Collection ${collection.name} already exists. Skipping...`,
          );

        await _createCollection(collection);
        logger.info(`Collection ${collection.name} created successfully`);
      });

      return res.status(200).json({ message: 'Collections created.' });
    } catch (error: any) {
      logger.error(error, 'Error creating typesense collections:');
      return res.status(500).json(error);
    }
  };

/** Updates typesense schema without data loss */
export const updateTypesenseSchema: RequestController =
  () => async (_, res) => {
    try {
      await _forEachCollection(async (collection) =>
        _coordinateCollectionReset(collection, { updateSchema: true }),
      );

      return res.status(200).json({ message: 'Schema updated.' });
    } catch (error: any) {
      logger.error(error, 'Error updating typesense schema');
      return res.status(500).json(error);
    }
  };

/** Indexes pages in the typesense search engine */
export const importPages: RequestControllerWithContext =
  (context) => async (_, res) => {
    try {
      await _indexAllPages(context);
      return res.status(200).json({ message: 'Pages imported.' });
    } catch (error: any) {
      logger.error(error, 'Error importing typesense pages collection');
      return res.status(500).json(error);
    }
  };

/**
 * Removes a collection from Typesense
 */
export const removeCollection: RequestController = () => async (req, res) => {
  try {
    const collection: string = req.body.collection;

    if (!collection)
      return res.status(400).json({ message: 'Collection name is required' });

    const exists = await _checkIfCollectionExists(collection);
    if (!exists)
      return res
        .status(404)
        .json({ message: `Collection ${collection} does not exist.` });

    await _deleteCollection(collection);

    return res
      .status(204)
      .json({ message: `Collection ${collection} removed successfully` });
  } catch (error: any) {
    logger.error(error, 'Error removing typesense collection');
    return res.status(500).json(error);
  }
};

/**
 * Resets the collection Schema and triggers a fresh import of all data
 */
export const reindexTypesense: RequestControllerWithContext =
  (context) => async (_, res) => {
    try {
      await _forEachCollection(async (collection) => {
        logger.info(`Starting reindex on ${collection.name}...`);
        await _coordinateCollectionReset(collection, { recreate: true });
        logger.info(`Successfully reset collection ${collection.name}...`);
        await _indexAllPages(context);
        logger.info(`Successfully reindexed collection ${collection.name}...`);
      });

      logger.info('Successfully reindexed all collections...');

      return res
        .status(200)
        .json({ message: 'Successfully reindexed all collections.' });
    } catch (error: any) {
      logger.error(error, 'Error reindexing Typesense');
      return res.status(500).json({ error: 'Failed to reindex Typesense' });
    }
  };

/**
 * Handles collection resets and deletions in Typesense
 */
async function _coordinateCollectionReset(
  collection: CollectionCreateSchema,
  opts?: {
    /** If this is true, will update the schema and reimport existing documents. If this and recreate are false the collection will simply be deleted. */
    updateSchema?: boolean;
    /** If this is true, will recreate the collection without reimporting existing documents If this and recreate are false the collection will simply be deleted. */
    recreate?: boolean;
  },
) {
  const exists = await _checkIfCollectionExists(collection.name);
  if (!exists) logger.info(`Collection ${collection.name} does not exist.`);

  let existingDocs: string | undefined;
  if (opts?.updateSchema)
    existingDocs = await _getExistingDocs(collection.name);

  await _deleteCollection(collection.name);
  if (opts?.recreate || opts?.updateSchema) await _createCollection(collection);
  if (opts?.updateSchema && existingDocs)
    await _addDocsToCollection(collection.name, existingDocs);

  logger.info(`Collection ${collection.name} deleted successfully`);
}

/** Indexes all registered page types in the typesense search engine */
async function _indexAllPages(context: CommonContext) {
  return _forEachPageType(async (pageType) => {
    const items = await pageType.getItems(context);
    if (!items || items?.length === 0) return;

    await _addDocsToCollection(TYPESENSE_COLLECTIONS.PAGES, items);
  });
}

function _checkIfCollectionExists(name: string) {
  return TYPESENSE_CLIENT.collections(name).exists();
}

function _getExistingDocs(name: string) {
  return TYPESENSE_CLIENT.collections(name).documents().export();
}

function _createCollection(collection: CollectionCreateSchema) {
  return TYPESENSE_CLIENT.collections().create(collection);
}

function _addDocsToCollection(name: string, docs: any) {
  return TYPESENSE_CLIENT.collections(name)
    .documents()
    .import(docs, { action: 'upsert' });
}

function _deleteCollection(name: string) {
  return TYPESENSE_CLIENT.collections(name).delete();
}

function _forEachCollection(
  cb: (collection: CollectionCreateSchema) => Promise<any>,
) {
  return Promise.all(COLLECTIONS.map(cb));
}

async function _forEachPageType(cb: (pageType: PageType) => Promise<any>) {
  return Promise.all(PAGE_TYPES.map(cb));
}
