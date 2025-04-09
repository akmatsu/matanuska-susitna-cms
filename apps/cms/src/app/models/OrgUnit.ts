import { list, ListConfig } from '@keystone-6/core';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { generalItemAccess, generalOperationAccess } from '../access';
import { checkbox, relationship } from '@keystone-6/core/fields';
import {
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
  TypeSensePageDocument,
} from '../../utils/typesense';

export function orgUnitToSearchableObj(item: any): TypeSensePageDocument {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    description: item.description,
    type: 'department',
    tags: item.tags.map((tag: { name: string }) => tag?.name || ''),
    published_at: item.publishAt
      ? Math.floor(new Date(item.publishAt).getTime() / 1000)
      : Math.floor(new Date().getTime() / 1000),
  };
}

export const OrgUnit: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('OrgUnit'),
  },
  fields: {
    ...basePage('orgUnits'),
    showPage: checkbox({
      defaultValue: true,
      ui: { itemView: { fieldPosition: 'sidebar' } },
    }),
    services: services('orgUnits'),
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
