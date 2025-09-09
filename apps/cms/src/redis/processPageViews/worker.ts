import { getContext } from '@keystone-6/core/context';
import { logger } from '../../configs/logger';
import { REDIS_CONNECTION } from '../config';
import config from '../../../keystone';
import * as PrismaModule from '.prisma/client';
import Redis from 'ioredis';
import { Worker } from 'bullmq';

async function processPageViews(redis: Redis) {
  const ctx = getContext(config, PrismaModule);
  // Get yesterday's date in YYYY-MM-DD format
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const pattern = `pageViews:*:*:${yesterday}`;

  let cursor = '0';
  const updates: Array<{
    pageId: string;
    pageType: string;
    date: string;
    views: number;
  }> = [];

  try {
    logger.info('Starting page views aggregation for ' + yesterday);
    do {
      const [nextCursor, keys] = await redis.scan(
        cursor,
        'MATCH',
        pattern,
        'COUNT',
        500,
      );
      cursor = nextCursor;

      if (keys.length > 0) {
        const counts = await redis.mget(...keys);

        keys.forEach((key, index) => {
          const parts = key.split(':'); // [page, pageType, pageId, views, date]
          const pageType = parts[1];
          const pageId = parts[2];
          const views = parseInt(counts[index] || '0', 10);

          if (views > 0) {
            updates.push({ pageId, pageType, date: yesterday, views });
          }
        });
      }
    } while (cursor !== '0');

    logger.info(
      `Aggregated ${updates.length} page view records for ${yesterday}`,
    );

    const sudo = ctx.sudo();

    await sudo.db.PageView.createMany({
      data: updates.map((u) => ({
        pageId: u.pageId,
        pageType: u.pageType,
        date: new Date(`${u.date}T00:00:00.000Z`),
        views: u.views,
      })),
    });

    // This needs to be in ISO8601 format
    const ninetyDaysAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

    const viewsToDelete = await sudo.db.PageView.findMany({
      where: {
        date: {
          lt: ninetyDaysAgo,
        },
      },
    });

    if (viewsToDelete.length > 0) {
      await sudo.db.PageView.deleteMany({
        where: viewsToDelete.map((v) => ({ id: v.id })),
      });
    }
  } catch (error) {
    logger.error('Error aggregating page views: ' + error);
  }
}

const processPageViewsWorker = async () => {
  return new Worker(
    'processPageViews',
    async () => {
      await processPageViews(REDIS_CONNECTION);
    },
    { connection: REDIS_CONNECTION, concurrency: 3 },
  );
};

if (require.main === module) {
  processPageViewsWorker();
  logger.info('Process Page Views Worker Started');
}
