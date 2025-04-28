import { list, ListConfig } from '@keystone-6/core';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import { checkbox, relationship } from '@keystone-6/core/fields';

export const OrgUnit: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('OrgUnit'),
    filter: filterByPubDates,
  },
  fields: {
    ...basePage('orgUnits'),
    showPage: checkbox({
      defaultValue: true,
      ui: { itemView: { fieldPosition: 'sidebar' } },
    }),
    // services: services('orgUnits'),
    children: relationship({ ref: 'OrgUnit.parent', many: true }),
    parent: relationship({ ref: 'OrgUnit.children', many: false }),
  },
  hooks: {
    async beforeOperation(args) {
      await typesenseDelete(args);
    },
    async afterOperation(args) {
      await typesenseUpsert(
        'orgUnit',
        'id title slug description body publishAt tags {name}',
        args,
      );
    },
  },
});
