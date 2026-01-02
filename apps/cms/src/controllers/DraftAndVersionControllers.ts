import type { RequestControllerWithContext } from './types';
import {
  createNewCopy,
  getModelKeys,
  getUpdatedData,
  handleDraftPublish,
  publishUpdatedData,
} from '../utils/draftUtils';

import { logger } from '../configs/logger';

export const createDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const [modelKey, draftKey] = getModelKeys(list, 'draft');
      const original = await getUpdatedData(modelKey, id, context);

      if (!original) {
        return res.status(404).json({ error: 'Original item not found' });
      }

      const newDraft = await createNewCopy(draftKey, original, context);

      if (!newDraft) {
        return res.status(500).json({ error: 'Failed to create draft' });
      }

      return res.status(201).json({
        message: `Draft created successfully with id ${newDraft.id}`,
        draftId: newDraft.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error creating draft');
      return res.status(500).json({ error: 'Failed to create draft' });
    }
  };

export const publishDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const published = await handleDraftPublish(list, id, context);

      return res.status(200).json({
        message: `Draft ${id} published successfully`,
        publishedId: published.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error publishing draft');

      if (error.message === 'Draft not found') {
        return res.status(404).json({ error: error.message });
      }

      if (error.message === 'Could not find original item') {
        return res.status(404).json({ error: error.message });
      }

      if (error.message) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Failed to publish draft' });
    }
  };

export const republishVersion: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const [modelKey, versionKey] = getModelKeys(list, 'version');

      const version = await getUpdatedData(versionKey, id, context);
      const published = await publishUpdatedData(modelKey, version, context, {
        currentVersion: {
          connect: {
            id,
          },
        },
      });

      if (!published) {
        return res.status(404).json({ error: 'Could not find original item' });
      }

      return res.status(200).json({
        message: `Version ${id} republished successfully`,
        publishedId: published.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error republishing version');
      return res.status(500).json({ error: 'Failed to republish version' });
    }
  };
