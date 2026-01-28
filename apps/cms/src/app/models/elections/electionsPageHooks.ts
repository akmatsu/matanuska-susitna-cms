import { ListHooks } from '@keystone-6/core/types';
import { logger } from '../../../configs/logger';
import { docDelete, typesenseUpsert } from '../../fieldUtils';

export const electionsPageHooks = {
  async beforeOperation(args) {
    try {
      docDelete(`${args.item?.id.toString()}-elections`);
    } catch (error) {
      logger.error(error, 'Error deleting elections page typesense document');
    }
  },
  async afterOperation(args) {
    try {
      await typesenseUpsert({
        listNameSingular: 'electionsPage',
        opArgs: args,
        typeOverride: 'Topic',
        appendId: '-elections',
        isSingleton: true,
      });
    } catch (error) {
      logger.error(error, 'Error updating elections page typesense document');
    }
  },
} satisfies ListHooks<any>;
