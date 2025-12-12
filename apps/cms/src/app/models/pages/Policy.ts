import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';
import { basePage, typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';

const {
  Main: Policy,
  Version: PolicyVersion,
  Draft: PolicyDraft,
} = DraftAndVersionsFactory(
  'Policy',
  (listNamePlural, opts) => {
    return {
      ...basePage('Policy', {
        ...opts,
        disableDefaultRelationships: true,
        documents: true,
        actions: true,
      }),
      policies: relationship({
        ref: 'Policy',
        many: true,
      }),
    };
  },
  {
    versionLimit: 20,
    versionAgeDays: 365,
    query: `title description body heroImage {id} tags {id} userGroups {id} actions {id} documents {id} contacts {id}`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Policy'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },

      async afterOperation(args) {
        await typesenseUpsert(
          'policy',
          `id title description body slug owner {name} publishAt tags {name} userGroups {name} actions {label} documents {title} contacts {name}`,
          args,
        );
      },
    },
  },
);

export default {
  Policy,
  PolicyVersion,
  PolicyDraft,
};
