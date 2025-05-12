import { Queue, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';
import { logger } from '../configs/logger';

export const REDIS_CONNECTION = new IORedis({
  host: '127.0.0.1',
  port: 6379,
  maxRetriesPerRequest: null,
});

export const publishQueue = new Queue('publish', {
  connection: REDIS_CONNECTION,
});

export const publishQueueEvents = new QueueEvents('publish', {
  connection: REDIS_CONNECTION,
});
publishQueueEvents.on('added', ({ jobId }) => {
  logger.info(`🔔 Job ${jobId} has been added to the queue`);
});
publishQueueEvents.on('completed', ({ jobId }) => {
  logger.info(`✅ Job ${jobId} has completed`);
});
publishQueueEvents.on('failed', ({ jobId, failedReason }) => {
  logger.error(`❌ Job ${jobId} failed: ${failedReason}`);
});
