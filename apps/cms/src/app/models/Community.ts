import { list, ListConfig } from '@keystone-6/core';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { relationship, text } from '@keystone-6/core/fields';

/*
TODO: Fields to add
Topics
Department(s)?
Assembly District
  District Rep (bio? contact?)
Related Legislation
Boards
Related District(s)
RSA(s)
FSA(s)
SSA(s)
SPUD(s)
*/

const listPlural = 'communities';

export const Community: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Community'),
    filter: filterByPubDates,
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    ...basePage(listPlural),
    mapId: text({
      label: 'Map ID',
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),
    services: services(listPlural),
    districts: relationship({
      ref: 'AssemblyDistrict',
      many: true,
      ui: {
        hideCreate: true,
        inlineConnect: true,
      },
    }),
  },
  hooks: {
    async beforeOperation(args) {
      await typesenseDelete(args);
    },

    async afterOperation(args) {
      await typesenseUpsert(
        'community',
        'id title slug description publishAt tags {name} districts {title}',
        args,
      );
    },
  },
});
