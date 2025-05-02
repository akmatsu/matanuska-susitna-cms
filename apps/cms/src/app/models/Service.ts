import { list, ListConfig } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import { basePage, typesenseDelete, typesenseUpsert } from '../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access/utils';

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
      await typesenseDelete(args);
    },

    async afterOperation(args) {
      await typesenseUpsert(
        'service',
        `id title description body slug owner {name} publishAt tags {name} orgUnits {title} communities {title}`,
        args,
      );
    },
  },
});
