import { list, ListConfig } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import { isAdmin } from '../access/roles';
import { generalOperationAccess } from '../access';

export const Tag: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    name: text(),
    services: relationship({ ref: 'Service.tags', many: true }),
    communities: relationship({ ref: 'Community.tags', many: true }),
    documents: relationship({ ref: 'Document.tags', many: true }),
    images: relationship({ ref: 'Image.tags', many: true }),
    documentCollections: relationship({
      ref: 'DocumentCollection.tags',
      many: true,
    }),
    orgUnits: relationship({ ref: 'OrgUnit.tags', many: true }),
    facilities: relationship({ ref: 'Facility.tags', many: true }),
    parks: relationship({ ref: 'Park.tags', many: true }),
    trails: relationship({ ref: 'Trail.tags', many: true }),
  },
});
