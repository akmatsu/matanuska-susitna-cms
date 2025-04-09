import { list, ListConfig } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import { basePage, typesenseDelete, typesenseUpsert } from '../fieldUtils';

import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access/utils';
import {
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from '../../utils/typesense';

export const Service: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Service'),
    filter: filterByPubDates,
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    ...basePage('services', {
      primaryAction: true,
      secondaryActions: true,
      primaryContact: true,
    }),

    communities: relationship({
      ref: 'Community.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        hideCreate: true,
      },
    }),

    orgUnits: relationship({
      ref: 'OrgUnit.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),

    trails: relationship({
      ref: 'Trail.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),

    parks: relationship({
      ref: 'Park.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),

    facilities: relationship({
      ref: 'Facility.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),

    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
  hooks: {
    async beforeOperation(args) {
      typesenseDelete(args);
    },

    async afterOperation(args) {
      typesenseUpsert(
        'service',
        `id title description body slug owner {name} actionLabel publishAt tags {name} districts {title} orgUnits {title} communities {title}`,
        args,
      );
    },
  },
});
