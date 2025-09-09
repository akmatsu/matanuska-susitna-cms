import { logger } from '../configs/logger';
import { REDIS_CONNECTION } from '../redis';
import { RequestControllerWithContext } from './types';

export const countPageView: RequestControllerWithContext =
  () => async (req, res) => {
    try {
      const { pageId } = req.body;
      const { pageType } = req.body;

      if (!pageId && !pageType)
        return res
          .status(400)
          .json({ error: 'pageId and pageType are required' });

      if (!pageId) return res.status(400).json({ error: 'pageId is required' });

      if (!pageType)
        return res.status(400).json({ error: 'pageType is required' });

      const redisKey = `pageViews:${pageType}:${pageId}:${new Date().toISOString().slice(0, 10)}`;

      await REDIS_CONNECTION.incr(redisKey);

      await REDIS_CONNECTION.expire(redisKey, 60 * 60 * 24 * 90); // expire in 90 days

      return res.status(204).end(); // No content
    } catch (error: any) {
      logger.error(error, 'Error counting page view');
      return res.status(500).json({ error: 'Failed to count page view' });
    }
  };
