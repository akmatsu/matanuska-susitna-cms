import { ListHooks } from '@keystone-6/core/types';
import { Lists } from '.keystone/types';
import { docDelete, docUpsert } from '../../fieldUtils';
import { logger } from '../../../configs/logger';
import { parseBoardPage } from '../../../utils/typesense';

export const boardsPageHooks = {
  async beforeOperation(args) {
    try {
      docDelete(`${args.item?.id.toString()}-boards`);
    } catch (err) {
      logger.error(err, 'Error deleting boards page typesense document');
    }
  },

  async afterOperation({ context }) {
    const doc = await parseBoardPage(context, false);
    docUpsert(doc);
  },
} satisfies ListHooks<Lists.BoardPage.TypeInfo>;
