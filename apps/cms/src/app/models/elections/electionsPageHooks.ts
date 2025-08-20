import { ListHooks } from '@keystone-6/core/types';
import { logger } from '../../../configs/logger';
import { parseElectionsPage } from '../../../utils/typesense';
import { docDelete, docUpsert } from '../../fieldUtils';

export const electionsPageHooks = {
  async beforeOperation(args) {
    try {
      docDelete(`${args.item?.id.toString()}-elections`);
    } catch (error) {
      logger.error(error, 'Error deleting elections page typesense document');
    }
  },
  async afterOperation({ context }) {
    try {
      const doc = await parseElectionsPage(context, false);
      docUpsert(doc);
    } catch (error) {
      logger.error(error, 'Error updating elections page typesense document');
    }
  },
} satisfies ListHooks<any>;
