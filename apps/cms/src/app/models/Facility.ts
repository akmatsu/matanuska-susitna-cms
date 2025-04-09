import { list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';

const listPlural = 'facilities';

export const Facility: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Facility'),
  },
  fields: {
    ...basePage(listPlural, {
      address: true,
    }),
    services: services(listPlural),
    park: relationship({ ref: 'Park.facilities', many: false }),
  },

  hooks: {
    beforeOperation(args) {
      typesenseDelete(args);
    },
    async afterOperation(args) {
      typesenseUpsert(
        'facility',
        'id title description body slug liveUrl publishAt tags {name} owner {name} services {title}',
        args,
      );
    },
  },
});
