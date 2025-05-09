import type { RequestController, RequestControllerWithContext } from './types';
import {
  COLLECTIONS,
  PAGE_TYPES,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from '../utils/typesense';

export const createTypesenseCollections: RequestController =
  () => async (req, res) => {
    try {
      await Promise.all(
        COLLECTIONS.map(async (collection) => {
          const exists = await TYPESENSE_CLIENT.collections(
            collection.name,
          ).exists();
          if (!exists) {
            await TYPESENSE_CLIENT.collections().create(collection);
            console.log(`Collection ${collection.name} created successfully`);
          } else {
            console.log(
              `Collection ${collection.name} already exists. Skipping...`,
            );
          }
        }),
      );

      return res.status(200).json({ message: 'Collections created.' });
    } catch (error: any) {
      return res.status(500).json(error);
    }
  };

export const updateTypesenseSchema: RequestController =
  () => async (req, res) => {
    try {
      await Promise.all(
        COLLECTIONS.map(async (collection) => {
          const exists = await TYPESENSE_CLIENT.collections(
            collection.name,
          ).exists();
          if (exists) {
            const existingDocs = await TYPESENSE_CLIENT.collections(
              collection.name,
            )
              .documents()
              .export();
            await TYPESENSE_CLIENT.collections(collection.name).delete();
            await TYPESENSE_CLIENT.collections().create(collection);
            await TYPESENSE_CLIENT.collections(collection.name)
              .documents()
              .import(existingDocs, { action: 'upsert' });

            console.log(`Collection ${collection.name} updated successfully`);
          } else {
            console.log(
              `Collection ${collection.name} does not exist. Skipping...`,
            );
          }
        }),
      );

      return res.status(200).json({ message: 'Schema updated.' });
    } catch (error: any) {
      return res.status(500).json(error);
    }
  };

export const importPages: RequestControllerWithContext =
  (context) => async (_, res) => {
    try {
      await Promise.all(
        PAGE_TYPES.map(async (pageType) => {
          const items = await pageType.getItems(context);
          console.log(pageType.type, items);

          await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents()
            .import(items, { action: 'upsert' });
        }),
      );
      return res.status(200).json({ message: 'Pages imported.' });
    } catch (error: any) {
      return res.status(500).json(error);
    }
  };

export const removeCollection: RequestController = () => async (req, res) => {
  try {
    const collection: string = req.body.collection;

    if (!collection) {
      return res.status(400).json({ message: 'Collection name is required' });
    }

    if (!(await TYPESENSE_CLIENT.collections(collection).exists())) {
      return res
        .status(404)
        .json({ message: `Collection ${collection} does not exist.` });
    }

    await TYPESENSE_CLIENT.collections(collection).delete();

    return res
      .status(204)
      .json({ message: `Collection ${collection} removed successfully` });
  } catch (error: any) {
    return res.status(500).json(error);
  }
};
