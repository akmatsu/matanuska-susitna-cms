import { list, ListConfig } from '@keystone-6/core';
import { basePage } from '../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import { timestamp } from '@keystone-6/core/fields';

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
        // itemView: {
        //   fieldPosition: 'sidebar',
        // },
      },
    }),
    endDate: timestamp({
      db: {
        isNullable: true,
      },
      ui: {
        views: './src/components/customFields/datetime/views.tsx',
        // itemView: {
        //   fieldPosition: 'sidebar',
        // },
      },
    }),
  },
});
