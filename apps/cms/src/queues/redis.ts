import { Queue, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';

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
  console.log(`🔔 Job ${jobId} has been added to the queue`);
});
publishQueueEvents.on('completed', ({ jobId }) => {
  console.log(`✅ Job ${jobId} has completed`);
});
publishQueueEvents.on('failed', ({ jobId, failedReason }) => {
  console.error(`❌ Job ${jobId} failed: ${failedReason}`);
});
