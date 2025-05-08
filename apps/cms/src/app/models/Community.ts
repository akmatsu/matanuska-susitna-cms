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
import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';
import { lowercaseFirstLetter } from '../../utils';

export const {
  Main: Community,
  Version: CommunityVersion,
  Draft: CommunityDraft,
} = DraftAndVersionsFactory(
  'Community',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, opts),
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Service.${lowercaseFirstLetter(listNamePlural)}`
            : 'Service',
        many: true,
      }),

      districts: relationship({
        ref: 'AssemblyDistrict',
        many: true,
        ui: {
          hideCreate: true,
          inlineConnect: true,
        },
      }),
    };
  },
  {
    query:
      'id title description body tags {id} owner {id} contacts {id} services {id} ',
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Community'),
      filter: filterByPubDates,
    },

    mainHooks: {
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
  },
);
