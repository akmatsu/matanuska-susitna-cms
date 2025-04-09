import { list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';

const listPlural = 'parks';

export const Park: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Park'),
  },
  fields: {
    ...basePage(listPlural, {
      address: true,
      hours: true,
    }),

    services: services(listPlural),
    trails: relationship({ ref: 'Trail.park', many: true }),
    facilities: relationship({ ref: 'Facility.park', many: true }),
  },
  hooks: {
    async beforeOperation(args) {
      await typesenseDelete(args);
    },
    async afterOperation(args) {
      await typesenseUpsert(
        'park',
        'id title description body slug liveUrl publishAt owner {name} tags {name} services {title} trails {title} facilities {title}',
        args,
      );
    },
  },
});
