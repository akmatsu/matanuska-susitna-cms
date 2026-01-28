import { ListHooks } from '@keystone-6/core/types';
import { docDelete, typesenseUpsert } from '../../fieldUtils';
import { logger } from '../../../configs/logger';

export const boardsPageHooks = {
  async beforeOperation(args) {
    try {
      docDelete(`${args.item?.id.toString()}-boards`);
    } catch (err) {
      logger.error(err, 'Error deleting boards page typesense document');
    }
  },

  async afterOperation(args) {
    await typesenseUpsert({
      listNameSingular: 'boardPage',
      opArgs: args,
      typeOverride: 'Topic',
      appendId: '-boards',
      isSingleton: true,
    });
  },
} satisfies ListHooks<any>;
