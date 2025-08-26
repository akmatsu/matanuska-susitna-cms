import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { basePage, typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import { relationship } from '@keystone-6/core/fields';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../DraftAndVersionsFactory';
import { lowercaseFirstLetter } from '../../../utils';

const {
  Main: Community,
  Version: CommunityVersion,
  Draft: CommunityDraft,
} = DraftAndVersionsFactory(
  'Community',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Service.${lowercaseFirstLetter(listNamePlural)}`
            : 'Service',
        many: true,
      }),

      boards: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Board.${lowercaseFirstLetter(listNamePlural)}`
            : 'Board',
        many: true,
      }),

      facilities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Facility.${lowercaseFirstLetter(listNamePlural)}`
            : 'Facility',
        many: true,
      }),

      parks: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Park.${lowercaseFirstLetter(listNamePlural)}`
            : 'Park',
        many: true,
      }),

      trails: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Trail.${lowercaseFirstLetter(listNamePlural)}`
            : 'Trail',
        many: true,
      }),
      plans: relationshipController({
        ref: 'Plan',
        listName: 'communities',
        many: true,
        opts,
      }),
    };
  },
  {
    query:
      'id title description body tags {id} userGroups {id} contacts {id} services {id} actions {id} documents {id}',
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Community'),
      filter: filterByPubStatus,
    },

    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'community',
          'id title slug description publishAt tags {name} assemblyDistricts {title}',
          args,
        );
      },
    },
  },
);

export default {
  Community,
  CommunityVersion,
  CommunityDraft,
};
