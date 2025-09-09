/**
 * Page Views Aggregation Queue Setup
 *
 * This file sets up the BullMQ queue and event listeners for processing page view aggregation jobs.
 *
 * - Provides functions to get or create the BullMQ queue and event listeners for the 'processPageViews' job.
 * - Schedules a recurring cron job to aggregate page views daily at 3AM.
 * - Logs job lifecycle events (added, removed, completed, failed) for monitoring.
 */

import { Queue, QueueEvents } from 'bullmq';
import { REDIS_CONNECTION } from '../config';
import { logger } from '../../configs/logger';

// Singleton instances for the queue and its event listeners
let processPageViewsQueue: Queue | null = null;
let processPageViewsEvents: QueueEvents | null = null;

/**
 * Returns the singleton BullMQ queue for processing page views.
 * Creates it if it doesn't exist yet.
 */
export function getProcessPageViewsQueue(): Queue {
  if (!processPageViewsQueue) {
    processPageViewsQueue = new Queue('processPageViews', {
      connection: REDIS_CONNECTION,
    });
  }
  return processPageViewsQueue;
}

/**
 * Returns the singleton BullMQ event listener for the processPageViews queue.
 * Sets up logging for job lifecycle events (added, removed, completed, failed).
 */
export function getProcessPageViewsEvents(): QueueEvents {
  if (!processPageViewsEvents) {
    processPageViewsEvents = new QueueEvents('processPageViews', {
      connection: REDIS_CONNECTION,
    });
    // Log when a job is added to the queue
    processPageViewsEvents.on('added', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} added`),
    );
    // Log when a job is removed from the queue
    processPageViewsEvents.on('removed', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} removed`),
    );
    // Log when a job completes successfully
    processPageViewsEvents.on('completed', ({ jobId }) =>
      logger.info(`✅ Job ${jobId} done`),
    );
    // Log when a job fails
    processPageViewsEvents.on('failed', ({ jobId, failedReason }) =>
      logger.error(`❌ Job ${jobId} failed: ${failedReason}`),
    );
  }
  return processPageViewsEvents;
}

/**
 * Schedules a recurring cron job to process page views aggregation every day at 3AM.
 * Uses BullMQ's upsertJobScheduler to ensure only one scheduled job exists.
 * Configures job options for retries and cleanup.
 */
export async function scheduleProcessPageViewsJob() {
  try {
    const q = getProcessPageViewsQueue();

    logger.info('🗓️  Scheduling processPageViews cron job...');

    await q.upsertJobScheduler(
      'processPageViews',
      {
        pattern: '0 3 * * *', // Every day at 3AM
      },
      {
        name: 'processPageViewsJob',
        opts: {
          removeOnComplete: true, // Remove job from queue when done
          removeOnFail: 500, // Keep last 500 failed jobs for inspection
          backoff: 3, // Retry failed jobs with backoff
          attempts: 5, // Retry up to 5 times
        },
      },
    );
    logger.info('🗓️  Scheduled aggregatePageViews cron job');
  } catch (error) {
    logger.error(error, 'Error scheduling aggregatePageViews cron job');
  }
}
