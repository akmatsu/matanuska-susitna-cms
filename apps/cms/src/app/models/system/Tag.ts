import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { isAdmin } from '../../access/roles';
import { generalOperationAccess } from '../../access';

export const Tag = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    name: text(),
    // communities: relationship({
    //   ref: 'Community.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // documents: relationship({
    //   ref: 'Document.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // images: relationship({
    //   ref: 'Image.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // documentCollections: relationship({
    //   ref: 'DocumentCollection.tags',
    //   many: true,
    // }),
    // orgUnits: relationship({
    //   ref: 'OrgUnit.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // facilities: relationship({
    //   ref: 'Facility.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // parks: relationship({
    //   ref: 'Park.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // trails: relationship({
    //   ref: 'Trail.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // assemblyDistricts: relationship({
    //   ref: 'AssemblyDistrict.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
    // publicNotices: relationship({
    //   ref: 'PublicNotice.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),

    // testModels: relationship({
    //   ref: 'TestModel.tags',
    //   many: true,
    //   ui: { createView: { fieldMode: 'hidden' } },
    // }),
  },
});
