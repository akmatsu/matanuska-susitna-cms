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

export async function connectRedis(): Promise<void> {
  try {
    await REDIS_CONNECTION.connect();
    logger.info('✅ Connected to Redis');
  } catch (error) {
    logger.error(error, '🚨 Error connecting to Redis');
  }
}
