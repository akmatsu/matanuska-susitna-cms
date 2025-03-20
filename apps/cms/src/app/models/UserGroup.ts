import { list, ListConfig } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import { owner } from '../fieldUtils';
import { generalItemAccess, generalOperationAccess } from '../access';

export const UserGroup: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('UserGroup'),
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    owner,
    description: text({ ui: { displayMode: 'textarea' } }),
    users: relationship({ ref: 'User.groups', many: true }),
    services: relationship({ ref: 'Service.userGroups', many: true }),
    parks: relationship({ ref: 'Park.userGroups', many: true }),
    trails: relationship({ ref: 'Trail.userGroups', many: true }),
    facilities: relationship({ ref: 'Facility.userGroups', many: true }),
    communities: relationship({ ref: 'Community.userGroups', many: true }),
    documentCollections: relationship({
      ref: 'DocumentCollection.userGroups',
      many: true,
    }),
  },
});
