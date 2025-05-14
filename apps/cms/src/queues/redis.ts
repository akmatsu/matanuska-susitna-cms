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

export async function connectRedis(): Promise<void> {
  try {
    await REDIS_CONNECTION.connect();
    logger.info('✅ Connected to Redis');
  } catch (error) {
    logger.error('🚨 Error connecting to Redis:', error);
  }
}
