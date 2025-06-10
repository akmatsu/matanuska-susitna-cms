import {
  basePage,
  basePageQuery,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import { checkbox, relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';

export const {
  Main: OrgUnit,
  Version: OrgUnitVersion,
  Draft: OrgUnitDraft,
} = DraftAndVersionsFactory(
  'OrgUnit',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
      showPage: checkbox({
        defaultValue: true,
        ui: { itemView: { fieldPosition: 'sidebar' } },
      }),
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Service.orgUnits' : 'Service',
        many: true,
      }),
      children: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.parent' : 'OrgUnit',
        many: true,
      }),
      parent: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.children' : 'OrgUnit',
        many: false,
      }),
      topics: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Topic.orgUnits' : 'Topic',
        many: true,
      }),
    };
  },
  {
    query: `${basePageQuery} services {id} parent {id} children {id} showPage actions {id} documents {id}`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('OrgUnit'),
      filter: filterByPubStatus,
    },
    mainHooks: {
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
  },
);
