import * as PrismaModule from '.prisma/client';
import config from '../../../keystone';
import { Worker, Job } from 'bullmq';
import { getContext } from '@keystone-6/core/context';
import { REDIS_CONNECTION } from '../redis';
import { mapDataFields } from '../../utils/draftUtils';
import { logger } from '../../configs/logger';

export const publishWorker = async () => {
  const keystoneContext = getContext(config, PrismaModule);

  return new Worker(
    'publish',
    async (job: Job) => {
      try {
        const { originalId, itemId, operation, listKey, query } = job.data as {
          itemId: string;
          originalId: string;
          operation: 'publish' | 'unpublish';
          query: string;
          listKey: keyof typeof keystoneContext.query;
        };

        const sudoCtx = keystoneContext.sudo();

        logger.info(`🔔 Processing ${operation} for ${itemId}...`);

        const { original, title, ...draft } = await sudoCtx?.query[
          `${listKey}Draft` as typeof listKey
        ].findOne({
          where: {
            id: itemId,
          },
          query,
        });

        sudoCtx?.query[listKey].updateOne({
          where: {
            id: originalId,
          },

          data: mapDataFields(
            draft,
            {
              title: title.split(' ---')[0],
              status: 'published',
            },
            'update',
          ),
        });

        sudoCtx?.query[`${listKey}Draft` as typeof listKey].deleteOne({
          where: {
            id: itemId,
          },
        });
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
