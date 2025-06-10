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
        cardFields: ['title', 'image', 'message', 'linkedItem'],
        inlineConnect: false,
      },
    }),

    boards: relationship({
      ref: !opts?.isDraft && !opts?.isVersion ? 'Board.topics' : 'Board',
      many: true,
    }),

    services: relationship({
      ref: !opts?.isDraft && !opts?.isVersion ? 'Service.topics' : 'Service',
      many: true,
    }),

    communities: relationship({
      ref:
        !opts?.isDraft && !opts?.isVersion ? 'Community.topics' : 'Community',
      many: true,
    }),

    districts: relationship({
      ref:
        !opts?.isDraft && !opts?.isVersion
          ? 'AssemblyDistrict.topics'
          : 'AssemblyDistrict',
      many: true,
    }),

    parks: relationship({
      ref: !opts?.isDraft && !opts?.isVersion ? 'Park.topics' : 'Park',
      many: true,
    }),

    trails: relationship({
      ref: !opts?.isDraft && !opts?.isVersion ? 'Trail.topics' : 'Trail',
      many: true,
    }),

    facilities: relationship({
      ref: !opts?.isDraft && !opts?.isVersion ? 'Facility.topics' : 'Facility',
      many: true,
    }),

    orgUnits: relationship({
      ref: !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.topics' : 'OrgUnit',
      many: true,
    }),

    publicNotices: relationship({
      ref:
        !opts?.isDraft && !opts?.isVersion
          ? 'PublicNotice.topics'
          : 'PublicNotice',
      many: true,
    }),
  };
});
