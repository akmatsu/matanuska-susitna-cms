/**
 * Page Views Aggregation Worker
 *
 * This worker aggregates daily page view counts from Redis and upserts them into the CMS database.
 *
 * - Scans Redis for keys matching the previous day's page views.
 * - Aggregates view counts for each page (by pageType, pageId, date).
 * - Upserts (inserts or updates) the aggregated counts into the database using a unique pageKey.
 * - Cleans up old page view records in the database (older than 90 days).
 * - Designed to be idempotent and safe to run multiple times per day.
 */

import { getContext } from '@keystone-6/core/context';
import { logger } from '../../configs/logger';
import { REDIS_CONNECTION } from '../config';
import config from '../../../keystone';
import * as PrismaModule from '.prisma/client';
import Redis from 'ioredis';
import { Worker } from 'bullmq';
import { subDays, format, parseISO } from 'date-fns';

async function processPageViews(redis: Redis) {
  // Get a Keystone context with Prisma client
  const ctx = getContext(config, PrismaModule);

  // Calculate the date string for yesterday (format: yyyy-MM-dd)
  const yesterdayDate = subDays(new Date(), 1);
  const yesterday = format(yesterdayDate, 'yyyy-MM-dd');

  // Redis key pattern for yesterday's page views
  // Example key: pageViews:article:123:2025-09-08
  const pattern = `pageViews:*:*:${yesterday}`;

  let cursor = '0';
  // Collects all updates to be made to the DB
  const updates: Array<{
    pageId: string;
    pageType: string;
    date: string;
    views: number;
    pageKey: string;
  }> = [];

  try {
    logger.info('Starting page views aggregation for ' + yesterday);
    // Scan Redis for all keys matching the pattern, in batches of 500
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
        // Get the view counts for all found keys
        const counts = await redis.mget(...keys);

        // For each key, extract pageType, pageId, and aggregate the view count
        keys.forEach((key, index) => {
          // Key format: pageViews:pageType:pageId:date
          const parts = key.split(':');
          const pageType = parts[1];
          const pageId = parts[2];
          const views = parseInt(counts[index] || '0', 10);
          const date = yesterday;
          // Composite unique key for deduplication
          const pageKey = `${pageType}:${pageId}:${date}`;

          if (views > 0) {
            updates.push({ pageId, pageType, date, views, pageKey });
          }
        });
      }
    } while (cursor !== '0');

    logger.info(
      `Aggregated ${updates.length} page view records for ${yesterday}`,
    );

    // Get a sudo context for privileged DB access
    const sudo = ctx.sudo();

    // Upsert each page view record into the DB using the unique pageKey
    // This ensures no duplicates and allows safe re-processing
    await Promise.all(
      updates.map(
        async (update) =>
          await sudo.prisma.pageView.upsert({
            where: { pageKey: update.pageKey },
            update: {
              views: {
                set: update.views,
              },
            },
            create: {
              pageId: update.pageId,
              pageType: update.pageType,
              date: parseISO(update.date),
              views: update.views,
              pageKey: update.pageKey,
            },
          }),
      ),
    );

    // Clean up old page view records in the DB (older than 90 days)
    // This keeps the DB lean and performant
    const ninetyDaysAgo = subDays(new Date(), 90).toISOString();

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
    // Log any errors that occur during aggregation
    logger.error('Error aggregating page views: ' + error);
  }
}

// Worker entry point: starts the BullMQ worker to process page views
const processPageViewsWorker = async () => {
  return new Worker(
    'processPageViews',
    async () => {
      await processPageViews(REDIS_CONNECTION);
    },
    { connection: REDIS_CONNECTION, concurrency: 3 },
  );
};

// If this file is run directly, start the worker
if (require.main === module) {
  processPageViewsWorker();
  logger.info('Process Page Views Worker Started');
}
