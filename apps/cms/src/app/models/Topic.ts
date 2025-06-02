import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';
import { basePage } from '../fieldUtils';

export const {
  Main: Topic,
  Version: TopicVersion,
  Draft: TopicDraft,
} = DraftAndVersionsFactory('Topic', (listNamePlural, opts) => {
  return {
    ...basePage(listNamePlural, {
      ...opts,
      actions: true,
      documents: true,
    }),

    highlights: relationship({
      ref: 'Highlight',
      many: true,

      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'description', 'image', 'message', 'linkedItem'],
        inlineConnect: false,
      },
    }),

    boards: relationship({
      ref: 'Board.topics',
      many: true,
    }),

    services: relationship({
      ref: 'Service.topics',
      many: true,
    }),

    communities: relationship({
      ref: 'Community.topics',
      many: true,
    }),

    districts: relationship({
      ref: 'District.topics',
      many: true,
    }),

    parks: relationship({
      ref: 'Park.topics',
      many: true,
    }),

    trails: relationship({
      ref: 'Trail.topics',
      many: true,
    }),

    facilities: relationship({
      ref: 'Facility.topics',
      many: true,
    }),

    departments: relationship({
      ref: 'OrgUnit.topics',
      many: true,
    }),

    publicNotices: relationship({
      ref: 'PublicNotice.topics',
      many: true,
    }),
  };
});
