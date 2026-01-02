import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import { basePage } from '../basePage';
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

    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Policy'),
      filter: filterByPubStatus,
    },
  },
);

export default {
  Policy,
  PolicyVersion,
  PolicyDraft,
};
