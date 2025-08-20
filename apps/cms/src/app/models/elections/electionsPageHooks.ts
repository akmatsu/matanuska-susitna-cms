import { FieldHooks, ListHooks } from '@keystone-6/core/types';
import { Lists } from '.keystone/types';
import { logger } from '../../../configs/logger';
import {
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from '../../../utils/typesense';

export const electionsPageHooks = {
  async beforeOperation(args) {
    try {
      TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
        .documents(`${args.item?.id.toString()}-`)
        .delete();
    } catch (error) {
      logger.error(error, 'Error deleting elections page typesense document');
    }
  },
  async afterOperation({ context, item, operation }) {
    try {
      const sudoCtx = context.sudo();
      const doc = await sudoCtx.prisma.electionsPage.findFirst();
    } catch (error) {
      logger.error(error, 'Error updating elections page typesense document');
    }
  },
} satisfies ListHooks<Lists.ElectionsPage.TypeInfo>;
