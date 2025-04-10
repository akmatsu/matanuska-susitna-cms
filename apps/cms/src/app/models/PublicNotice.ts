import { list, ListConfig } from '@keystone-6/core';
import { basePage } from '../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import { timestamp } from '@keystone-6/core/fields';
import { createAndSendBulletin } from '../../utils/emailUtils';

const listPlural = 'publicNotices';

export const PublicNotice: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('PublicNotice'),
    filter: filterByPubDates,
  },

  fields: {
    ...basePage(listPlural, { actions: true, documents: true }),
    effectiveDate: timestamp({
      db: {
        isNullable: true,
      },
      ui: {
        views: './src/components/customFields/datetime/views.tsx',
      },
    }),
    endDate: timestamp({
      db: {
        isNullable: true,
      },
      ui: {
        views: './src/components/customFields/datetime/views.tsx',
      },
    }),
  },

  hooks: {
    afterOperation: {
      async create({ item }) {
        await createAndSendBulletin(
          item.title as string,
          item.description as string,
          'public-notices',
          item.slug as string,
          item.heroImage as string | undefined | null,
        );
      },
    },
  },
});
