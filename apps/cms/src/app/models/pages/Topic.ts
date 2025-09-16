import { relationship } from '@keystone-6/core/fields';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../DraftAndVersionsFactory';
import {
  basePage,
  basePageQuery,
  typesenseDelete,
  typesenseUpsert,
} from '../../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';

const {
  Main: Topic,
  Version: TopicVersion,
  Draft: TopicDraft,
} = DraftAndVersionsFactory(
  'Topic',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        actions: true,
        documents: true,
      }),

      boards: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Board.topics' : 'Board',
        many: true,
      }),

      communities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Community.topics' : 'Community',
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
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Facility.topics' : 'Facility',
        many: true,
      }),

      orgUnits: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.topics' : 'OrgUnit',
        many: true,
      }),

      highlights: relationshipController({
        ref: 'Highlight',
        listName: listNamePlural,
        many: true,
        opts,
      }),
    };
  },
  {
    versionLimit: 20,
    versionAgeDays: 365,
    query: `${basePageQuery} highlights { id } boards { id } services { id } communities { id } districts { id } parks { id } trails { id } facilities { id } orgUnits { id } publicNotices { id }`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Topic'),
      filter: filterByPubDates,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },

      async afterOperation(args) {
        await typesenseUpsert(
          'topic',
          'id title description body slug owner { name } publishAt tags { name } orgUnits { title } communities { title } services { title } assemblyDistricts {title} parks { title } trails { title } facilities { title } contacts {name} actions {label} documents { title }',
          args,
        );
      },
    },
  },
);

export default {
  Topic,
  TopicVersion,
  TopicDraft,
};
