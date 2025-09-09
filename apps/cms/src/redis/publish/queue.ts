import { Queue, QueueEvents } from 'bullmq';
import { REDIS_CONNECTION } from '../config';
import { logger } from '../../configs/logger';

let publishQueue: Queue | null = null;
let publishEvents: QueueEvents | null = null;

export const getPublishQueue = () => {
  if (!publishQueue) {
    publishQueue = new Queue('publish', {
      connection: REDIS_CONNECTION,
    });
  }
  return publishQueue;
};

export const getPublishQueueEvents = (): QueueEvents => {
  if (!publishEvents) {
    publishEvents = new QueueEvents('publish', {
      connection: REDIS_CONNECTION,
    });
    publishEvents.on('added', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} added`),
    );
    publishEvents.on('removed', ({ jobId }) =>
      logger.info(`🔔 Job ${jobId} removed`),
    );
    publishEvents.on('completed', ({ jobId }) =>
      logger.info(`✅ Job ${jobId} done`),
    );
    publishEvents.on('failed', ({ jobId, failedReason }) =>
      logger.error(`❌ Job ${jobId} failed: ${failedReason}`),
    );
  }
  return publishEvents;
};
