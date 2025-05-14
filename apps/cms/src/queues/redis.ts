import { Queue, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';
import { logger } from '../configs/logger';
import 'dotenv/config';

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

export const REDIS_CONNECTION = new IORedis({
  host: REDIS_HOST || '127.0.0.1',
  port: REDIS_PORT ? parseInt(REDIS_PORT) : 6379,
  password: REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  lazyConnect: true,
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
