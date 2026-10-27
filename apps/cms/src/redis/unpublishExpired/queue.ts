/**
 * Unpublish Expired Items Queue Setup
 *
 * This file sets up the BullMQ queue and event listeners for the job that unpublishes
 * items whose unpublishAt date has passed.
 *
 * - Provides functions to get or create the BullMQ queue and event listeners for the 'unpublishExpired' job.
 * - Schedules a recurring cron job to check for expired items every 5 minutes.
 * - Logs job lifecycle events (added, removed, completed, failed) for monitoring.
 */

import { Queue, QueueEvents } from 'bullmq';
import { REDIS_CONNECTION } from '../config';
import { logger } from '../../configs/logger';

// Singleton instances for the queue and its event listeners
let unpublishExpiredQueue: Queue | null = null;
let unpublishExpiredEvents: QueueEvents | null = null;

/**
 * Returns the singleton BullMQ queue for unpublishing expired items.
 * Creates it if it doesn't exist yet.
 */
export function getUnpublishExpiredQueue(): Queue {
  if (!unpublishExpiredQueue) {
    unpublishExpiredQueue = new Queue('unpublishExpired', {
      connection: REDIS_CONNECTION,
    });
  }
  return unpublishExpiredQueue;
}

/**
 * Returns the singleton BullMQ event listener for the unpublishExpired queue.
 * Sets up logging for job lifecycle events (added, removed, completed, failed).
 */
export function getUnpublishExpiredEvents(): QueueEvents {
  if (!unpublishExpiredEvents) {
    unpublishExpiredEvents = new QueueEvents('unpublishExpired', {
      connection: REDIS_CONNECTION,
    });
    unpublishExpiredEvents.on('added', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} added`),
    );
    unpublishExpiredEvents.on('removed', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} removed`),
    );
    unpublishExpiredEvents.on('completed', ({ jobId }) =>
      logger.info(`✅ Job ${jobId} done`),
    );
    unpublishExpiredEvents.on('failed', ({ jobId, failedReason }) =>
      logger.error(`❌ Job ${jobId} failed: ${failedReason}`),
    );
  }
  return unpublishExpiredEvents;
}

/**
 * Schedules a recurring cron job that unpublishes expired items every 5 minutes.
 * Passing an unpublishAt date is not a save event, so no list hook can catch it.
 * This job is what makes unpublishAt take effect.
 * Uses BullMQ's upsertJobScheduler to ensure only one scheduled job exists.
 */
export async function scheduleUnpublishExpiredJob() {
  try {
    const q = getUnpublishExpiredQueue();

    logger.info('🗓️  Scheduling unpublishExpired cron job...');

    await q.upsertJobScheduler(
      'unpublishExpired',
      {
        pattern: '*/5 * * * *', // Every 5 minutes
      },
      {
        name: 'unpublishExpiredJob',
        opts: {
          removeOnComplete: true, // Remove job from queue when done
          removeOnFail: 500, // Keep last 500 failed jobs for inspection
          backoff: 3, // Retry failed jobs with backoff
          attempts: 5, // Retry up to 5 times
        },
      },
    );
    logger.info('🗓️  Scheduled unpublishExpired cron job');
  } catch (error) {
    logger.error(error, 'Error scheduling unpublishExpired cron job');
  }
}
