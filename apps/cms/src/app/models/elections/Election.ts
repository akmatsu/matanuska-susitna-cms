import { relationship, timestamp } from '@keystone-6/core/fields';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import {
  DraftAndVersionsFactory,
  mapRelationShip,
} from '../../DraftAndVersionsFactory';
import {
  owner,
  publishable,
  slug,
  tags,
  timestamps,
  titleAndDescription,
  userGroups,
} from '../../fieldUtils';
import { group } from '@keystone-6/core';
import {
  filterByPubStatus,
  isElectionUser,
  isNotElectionUser,
} from '../../access';
import { customText } from '../../../components/customFields/Markdown';

const listKey = 'Election';

const {
  Main: Election,
  Version: ElectionVersion,
  Draft: ElectionDraft,
} = DraftAndVersionsFactory(
  listKey,
  (listNamePlural, opts) => {
    return {
      heroImage: blueHarvestImage(),
      ...titleAndDescription(),
      ...(!opts?.noSlug && !opts?.isVersion && !opts?.isDraft && { slug }),
      ...publishable(opts),

      owner,

      electionDate: timestamp({
        isFilterable: true,
        isOrderable: true,
        validation: {
          isRequired: true,
        },
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),

      earlyVotingStartDate: timestamp({
        isFilterable: true,
        isOrderable: true,
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),

      voterRegistrationDeadline: timestamp({
        isFilterable: true,
        isOrderable: true,
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),

      ...group({
        label: 'Candidate Filing Information',
        fields: {
          candidateFilingDocuments: relationship({
            ref: 'Document',
            many: true,
            ui: {
              displayMode: 'cards',
              inlineConnect: true,
              cardFields: ['title', 'description', 'file', 'tags'],
              inlineCreate: {
                fields: ['title', 'description', 'file', 'tags'],
              },
              inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
            },
          }),
          candidatePacketAvailability: timestamp({
            isFilterable: true,
            isOrderable: true,
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          candidateFilingStartDate: timestamp({
            isFilterable: true,
            isOrderable: true,
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          candidateFilingDeadline: timestamp({
            isFilterable: true,
            isOrderable: true,
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          officesToBeFilled: customText(),
        },
      }),

      ...group({
        label: 'Absentee Voting Information',
        fields: {
          absenteeVotingApplication: relationship({
            ref: 'Document',
            many: false,
            ui: {
              displayMode: 'cards',
              inlineConnect: true,
              cardFields: ['title', 'description', 'file', 'tags'],
              inlineCreate: {
                fields: ['title', 'description', 'file', 'tags'],
              },
              inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
            },
          }),
          absenteeApplicationDeadline: timestamp({
            isFilterable: true,
            isOrderable: true,
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
        },
      }),

      ...group({
        label: 'Election Official Information',
        fields: {
          electionOfficialApplication: relationship({
            ref: 'Document',
            many: false,
            ui: {
              displayMode: 'cards',
              inlineConnect: true,
              cardFields: ['title', 'description', 'file', 'tags'],
              inlineCreate: {
                fields: ['title', 'description', 'file', 'tags'],
              },
              inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
            },
          }),

          electionOfficialApplicationDeadline: timestamp({
            isFilterable: true,
            isOrderable: true,
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
        },
      }),

      candidates: relationship({
        ref: 'Document',
        many: false,
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
          inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
        },
      }),

      propositions: relationship({
        ref: 'Document',
        many: true,
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
          inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
        },
      }),

      electionBrochure: relationship({
        ref: 'Document',
        many: false,
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
          inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
        },
      }),

      electionBallots: relationship({
        ref: 'Document',
        many: true,
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
          inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
        },
      }),

      result: mapRelationShip(
        'ElectionResult',
        listKey,
        {
          many: false,
          ui: {
            displayMode: 'cards',
            cardFields: ['document', 'isOfficial'],
            inlineCreate: { fields: ['document', 'isOfficial'] },
            inlineConnect: true,
          },
        },
        opts,
      ),

      tags: tags(listNamePlural),
      userGroups: userGroups(),

      ...timestamps,
    };
  },
  {
    mainAccess: {
      operation: {
        query: () => true,
        create: isElectionUser,
        update: isElectionUser,
        delete: isElectionUser,
      },
      filter: filterByPubStatus,
      item: {
        update: isElectionUser,
        delete: isElectionUser,
        create: isElectionUser,
      },
    },
    mainUI: {
      hideCreate: isNotElectionUser,
      isHidden: isNotElectionUser,
    },
    versionLimit: 20,
    versionAgeDays: 365,
    query:
      'id heroImage title description tags {id} userGroups {id} candidateFilingDocuments {id} candidateFilingStartDate candidateFilingDeadline absenteeVotingDocuments {id} absenteeApplicationDeadline electionOfficialDocuments {id} electionOfficialApplicationDeadline candidates {id} propositions {id} electionBrochure {id} electionBallots {id} result {id}',
  },
);

export default {
  Election,
  ElectionVersion,
  ElectionDraft,
};
