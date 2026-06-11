import type {
  CommonContext,
  RequestController,
  RequestControllerWithContext,
} from './types';
import {
  COLLECTIONS,
  noHitSearchConfiguration,
  noHitSearchRuleName,
  PAGE_TYPES,
  popularSearchConfiguration,
  popularSearchRuleName,
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
  TYPESENSE_NL_SEARCH_MODEL_CONFIGURATION,
} from '../utils/typesense';
import { logger } from '../configs/logger';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import { getSearchDataMany, ModelDelegateKey } from '../utils/draftUtils';
import v from 'voca';

const TYPESENSE_BATCH_SIZE = 250;
const _runningTasks = new Set<string>();

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

      logger.info('Checking Analytics rules...');
      const popularQueryRule = await TYPESENSE_CLIENT.analytics
        .rules()
        .retrieve(popularSearchRuleName);
      if (!popularQueryRule.length) {
        await TYPESENSE_CLIENT.analytics
          .rules()
          .upsert(popularSearchRuleName, popularSearchConfiguration);
        logger.info('Rules for popular searches created successfully');
      } else {
        logger.info('Rules for popular searches already exist. Skipping...');
      }

      const noHitQueryRule = await TYPESENSE_CLIENT.analytics
        .rules()
        .retrieve(noHitSearchRuleName);
      if (!noHitQueryRule.length) {
        await TYPESENSE_CLIENT.analytics
          .rules()
          .upsert(noHitSearchRuleName, noHitSearchConfiguration);
        logger.info('Rules for no-hit searches created successfully');
      } else {
        logger.info('Rules for no-hit searches already exist. Skipping...');
      }

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
      const started = _runAsyncTask('typesense-import-pages', async () => {
        await _indexAllPages(context);
      });

      if (!started)
        return res
          .status(409)
          .json({ message: 'A typesense page import is already running.' });

      return res.status(202).json({ message: 'Page import started.' });
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
      const started = _runAsyncTask('typesense-reindex', async () => {
        await _forEachCollection(async (collection) => {
          logger.info(`Starting reindex on ${collection.name}...`);
          await _coordinateCollectionReset(collection, { recreate: true });
          logger.info(`Successfully reset collection ${collection.name}...`);
          await _indexAllPages(context);
          logger.info(
            `Successfully reindexed collection ${collection.name}...`,
          );
        });

        logger.info('Successfully reindexed all collections...');
      });

      if (!started)
        return res
          .status(409)
          .json({ message: 'A typesense reindex is already running.' });

      return res.status(202).json({ message: 'Typesense reindex started.' });
    } catch (error: any) {
      logger.error(error, 'Error reindexing Typesense');
      return res.status(500).json({ error: 'Failed to reindex Typesense' });
    }
  };

/**
 * Retrieves popular search queries from Typesense analytics collection.
 */
export const getPopularSearches: RequestController = () => async (req, res) => {
  logger.info('Retrieving popular searches from Typesense...');
  try {
    const limit = Number(req.query.limit ?? 50);
    const perPage = Number.isFinite(limit)
      ? Math.min(Math.max(limit, 1), 250)
      : 50;

    const results = await TYPESENSE_CLIENT.collections('popular_queries')
      .documents()
      .search({
        q: '',
        query_by: 'q',
        sort_by: 'count:desc',
        per_page: perPage,
        page: 1,
      });

    logger.info(results, 'Raw results from Typesense for popular searches');

    const searches = (results.hits ?? []).map((hit: any) => ({
      query: hit?.document?.q ?? '',
      count: Number(hit?.document?.count ?? 0),
    }));

    return res.status(200).json({ searches });
  } catch (error: any) {
    logger.error(error, 'Error retrieving popular searches');
    return res
      .status(500)
      .json({ message: 'Failed to retrieve popular searches' });
  }
};

/**
 * Retrieves no-hit search queries from Typesense analytics collection.
 */
export const getNoHitSearches: RequestController = () => async (req, res) => {
  logger.info('Retrieving no-hit searches from Typesense...');
  try {
    const limit = Number(req.query.limit ?? 50);
    const perPage = Number.isFinite(limit)
      ? Math.min(Math.max(limit, 1), 250)
      : 50;

    const results = await TYPESENSE_CLIENT.collections('no_hits_queries')
      .documents()
      .search({
        q: '',
        query_by: 'q',
        sort_by: 'count:desc',
        per_page: perPage,
        page: 1,
      });

    logger.info(results, 'Raw results from Typesense for no-hit searches');

    const searches = (results.hits ?? []).map((hit: any) => ({
      query: hit?.document?.q ?? '',
      count: Number(hit?.document?.count ?? 0),
    }));

    return res.status(200).json({ searches });
  } catch (error: any) {
    logger.error(error, 'Error retrieving no-hit searches');
    return res
      .status(500)
      .json({ message: 'Failed to retrieve no-hit searches' });
  }
};

/**
 * Creates or updates a Typesense natural language search model using environment variables.
 */
export const createNaturalLanguageSearchModel: RequestController =
  () => async (_, res) => {
    try {
      const modelConfig = TYPESENSE_NL_SEARCH_MODEL_CONFIGURATION;

      if (!modelConfig?.id)
        return res.status(400).json({
          message:
            'Missing Typesense NL model config. Set id/model_name in src/utils/typesense/index.ts.',
        });

      const { id, ...updateSchema } = modelConfig;

      const exists = await TYPESENSE_CLIENT.nlSearchModels(id)
        .retrieve()
        .then(() => true)
        .catch((error: any) => {
          if (error?.httpStatus === 404) return false;
          throw error;
        });

      if (exists) {
        await TYPESENSE_CLIENT.nlSearchModels(id).update(updateSchema);
        logger.info(`Updated Typesense NL search model ${id}`);
        return res.status(200).json({ message: `Model ${id} updated.` });
      }

      await TYPESENSE_CLIENT.nlSearchModels().create(modelConfig);
      logger.info(`Created Typesense NL search model ${id}`);
      return res.status(201).json({ message: `Model ${id} created.` });
    } catch (error: any) {
      logger.error(error, 'Error creating/updating Typesense NL search model');
      return res.status(500).json(error);
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
    const listName = v.camelCase(pageType) as ModelDelegateKey;

    const items = await getSearchDataMany(listName, context);
    if (!items || items?.length === 0) return;

    const type =
      pageType === 'ElectionsPage' || pageType === 'BoardPage'
        ? 'Topic'
        : pageType;

    const appendId =
      pageType === 'ElectionsPage'
        ? '-elections'
        : pageType === 'BoardPage'
          ? '-boards'
          : undefined;

    const docs = items.map((item) => toSearchableObj(item, type, appendId));

    await _addDocsToCollectionInBatches(TYPESENSE_COLLECTIONS.PAGES, docs);
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

async function _addDocsToCollectionInBatches(
  name: string,
  docs: unknown[],
  batchSize = TYPESENSE_BATCH_SIZE,
) {
  for (let i = 0; i < docs.length; i += batchSize) {
    const batch = docs.slice(i, i + batchSize);
    await _addDocsToCollection(name, batch);
  }
}

function _runAsyncTask(taskName: string, task: () => Promise<void>) {
  if (_runningTasks.has(taskName)) return false;

  // TYPESENSE_CLIENT.analytics.rules().upsert(popularSearchRuleName,);

  _runningTasks.add(taskName);
  void Promise.resolve()
    .then(task)
    .catch((error) => {
      logger.error(error, `Error while running async task ${taskName}`);
    })
    .finally(() => {
      _runningTasks.delete(taskName);
    });

  return true;
}

function _deleteCollection(name: string) {
  return TYPESENSE_CLIENT.collections(name).delete();
}

function _forEachCollection(
  cb: (collection: CollectionCreateSchema) => Promise<any>,
) {
  return Promise.all(COLLECTIONS.map(cb));
}

async function _forEachPageType(cb: (pageType: string) => Promise<any>) {
  return Promise.all(PAGE_TYPES.map(cb));
}
