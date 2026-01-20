import * as PrismaModule from '.prisma/client';
import config from '../../../keystone';
import { Worker, Job } from 'bullmq';
import { getContext } from '@keystone-6/core/context';
import { REDIS_CONNECTION } from '../config';
import { handleDraftPublish } from '../../utils/draftUtils';
import { logger } from '../../configs/logger';

const publishWorker = async () => {
  const keystoneContext = getContext(config, PrismaModule);

  return new Worker(
    'publish',
    async (job: Job) => {
      try {
        const { originalId, itemId, operation, listKey } = job.data as {
          itemId: string;
          originalId: string;
          operation: 'publish' | 'unpublish';
          listKey: keyof typeof keystoneContext.query;
        };

        logger.info(`🔔 Processing ${operation} for ${originalId}...`);
        const published = await handleDraftPublish(
          listKey,
          itemId,
          keystoneContext,
        );

        logger.info(
          `${operation} completed for ${originalId}, published ID: ${published.id}`,
        );
      } catch (error) {
        logger.error(error, `Error processing job ${job.id}`);
      }
    },
    {
      connection: REDIS_CONNECTION,
      // you can tune concurrency, lockDuration, etc. here
      concurrency: 5,
    },
  );
};

if (require.main === module) {
  publishWorker();
  logger.info('Publish Worker Started');
}
