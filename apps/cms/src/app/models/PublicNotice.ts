import { list, ListConfig } from '@keystone-6/core';
import { basePage } from '../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import { relationship, timestamp } from '@keystone-6/core/fields';
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
    parks: relationship({
      ref: 'Park',
      many: true,
    }),
    services: relationship({
      ref: 'Service',
      many: true,
    }),
    orgUnits: relationship({
      ref: 'OrgUnit',
      many: true,
    }),
    facilities: relationship({
      ref: 'Facility',
      many: true,
    }),
    trails: relationship({
      ref: 'Trail',
      many: true,
    }),
    communities: relationship({
      ref: 'Community',
      many: true,
    }),
    assemblyDistricts: relationship({
      ref: 'AssemblyDistrict',
      many: true,
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
