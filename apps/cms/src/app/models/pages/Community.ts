import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import { relationship, select } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { lowercaseFirstLetter } from '../../../utils';
import { basePage } from '../basePage';

const {
  Main: Community,
  Version: CommunityVersion,
  Draft: CommunityDraft,
} = DraftAndVersionsFactory(
  'Community',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
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

      type: select({
        options: [
          {
            label: 'City',
            value: 'city',
          },
          {
            label: 'Community',
            value: 'community',
          },
        ],
      }),
    };
  },
  {
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
        await typesenseUpsert('community', args);
      },
    },
  },
);

export default {
  Community,
  CommunityVersion,
  CommunityDraft,
};
