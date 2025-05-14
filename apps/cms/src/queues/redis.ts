import { Queue, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';
import { logger } from '../configs/logger';
import 'dotenv/config';

const isAws = process.env.USE_REDIS_CLUSTER === 'true';

export const REDIS_CONNECTION = isAws
  ? new IORedis.Cluster(
      [
        {
          host: process.env.REDIS_HOST || '127.0.0.1',
          port: process.env.REDIS_PORT
            ? parseInt(process.env.REDIS_PORT)
            : 6379,
        },
      ],
      {
        dnsLookup: (address, callback) => callback(null, address),
        redisOptions: {
          tls: {},
        },
      },
    )
  : new IORedis({
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
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
