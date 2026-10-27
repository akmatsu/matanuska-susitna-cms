/**
 * Unpublish Expired Items Worker
 *
 * This worker unpublishes published items whose unpublishAt date has passed.
 *
 * - Finds every list that has both an unpublishAt and a status field.
 * - For each of those lists, finds published items with unpublishAt <= now.
 * - Sets each of those items to 'unpublished' through the Keystone DB API, so the
 *   normal list hooks run (this removes the item from the TypeSense index).
 * - Designed to be idempotent and safe to run as often as needed.
 */

import { getContext } from '@keystone-6/core/context';
import { KeystoneContext } from '@keystone-6/core/types';
import { logger } from '../../configs/logger';
import { REDIS_CONNECTION } from '../config';
import config from '../../../keystone';
import { lists } from '../../app';
import * as PrismaModule from '.prisma/client';
import { Worker } from 'bullmq';

// Draft and version lists point back at their main item through `original`.
// They are never shown to the public, so only main lists get unpublished.
const EXPIRABLE_LIST_KEYS = Object.entries(lists)
  .filter(
    ([, list]) =>
      'unpublishAt' in list.fields &&
      'status' in list.fields &&
      !('original' in list.fields),
  )
  .map(([listKey]) => listKey);

async function unpublishExpired() {
  // Sudo, because there is no user session and every item must be reachable.
  // The list keys are only known at runtime, so use the untyped DB API.
  const db = getContext(config, PrismaModule).sudo()
    .db as unknown as KeystoneContext['db'];
  const now = new Date().toISOString();

  for (const listKey of EXPIRABLE_LIST_KEYS) {
    const expiredItems = await db[listKey].findMany({
      where: {
        status: { equals: 'published' },
        unpublishAt: { lte: now },
      },
    });

    for (const item of expiredItems) {
      const id = item.id.toString();
      try {
        // Use the DB API instead of Prisma so list hooks run, the same as
        // when an editor sets the item to Unpublished in the admin UI.
        await db[listKey].updateOne({
          where: { id },
          data: { status: 'unpublished' },
        });
        logger.info(`Unpublished expired ${listKey} ${id}`);
      } catch (error) {
        // Keep going so one bad item doesn't block the rest
        logger.error(error, `Error unpublishing expired ${listKey} ${id}`);
      }
    }
  }
}

// Worker entry point: starts the BullMQ worker to unpublish expired items
const unpublishExpiredWorker = async () => {
  if (EXPIRABLE_LIST_KEYS.length === 0) {
    throw new Error(
      'No lists with unpublishAt and status fields found. Check the list definitions.',
    );
  }
  logger.info(`Unpublish expired lists: ${EXPIRABLE_LIST_KEYS.join(', ')}`);

  return new Worker(
    'unpublishExpired',
    async () => {
      await unpublishExpired();
    },
    // One at a time, so two runs never try to unpublish the same items
    { connection: REDIS_CONNECTION, concurrency: 1 },
  );
};

// If this file is run directly, start the worker
if (require.main === module) {
  unpublishExpiredWorker();
  logger.info('Unpublish Expired Worker Started');
}
