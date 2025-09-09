import { Queue, QueueEvents } from 'bullmq';
import { REDIS_CONNECTION } from '../config';
import { logger } from '../../configs/logger';

let processPageViewsQueue: Queue | null = null;
let processPageViewsEvents: QueueEvents | null = null;

export function getProcessPageViewsQueue(): Queue {
  if (!processPageViewsQueue) {
    processPageViewsQueue = new Queue('processPageViews', {
      connection: REDIS_CONNECTION,
    });
  }
  return processPageViewsQueue;
}

export function getProcessPageViewsEvents(): QueueEvents {
  if (!processPageViewsEvents) {
    processPageViewsEvents = new QueueEvents('processPageViews', {
      connection: REDIS_CONNECTION,
    });
    processPageViewsEvents.on('added', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} added`),
    );
    processPageViewsEvents.on('removed', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} removed`),
    );
    processPageViewsEvents.on('completed', ({ jobId }) =>
      logger.info(`✅ Job ${jobId} done`),
    );
    processPageViewsEvents.on('failed', ({ jobId, failedReason }) =>
      logger.error(`❌ Job ${jobId} failed: ${failedReason}`),
    );
  }
  return processPageViewsEvents;
}

export async function scheduleProcessPageViewsJob() {
  try {
    const q = getProcessPageViewsQueue();

    logger.info('🗓️  Scheduling processPageViews cron job...');

    await q.upsertJobScheduler(
      'processPageViews',
      {
        pattern: '0 3 * * *', // Every day at 3 AM
      },
      {
        name: 'processPageViewsJob',
        opts: {
          removeOnComplete: true,
          removeOnFail: 1000,
          backoff: 3,
          attempts: 5,
        },
      },
    );
    logger.info('🗓️  Scheduled aggregatePageViews cron job');
  } catch (error) {
    logger.error(error, 'Error scheduling aggregatePageViews cron job');
  }
}
