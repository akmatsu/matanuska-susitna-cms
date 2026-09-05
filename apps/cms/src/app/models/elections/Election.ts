import {
  integer,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import {
  DraftAndVersionsFactory,
  mapRelationShip,
  relationshipController,
} from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import {
  owner,
  publishable,
  slug,
  tags,
  timestamps,
  titleAndDescription,
  userGroups,
} from '../../fieldUtils';
import { group, list } from '@keystone-6/core';
import {
  filterByPubStatus,
  generalOperationAccess,
  isElectionUser,
  isNotElectionUser,
} from '../../access';
import { customText } from '../../../components/customFields/Markdown';

const listKey = 'Election';

const Proposition = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    hideNavigation: true,
  },
  fields: {
    title: text(),
    order: integer({
      defaultValue: 0,
      validation: { isRequired: true },
      access: {
        read: { item: allowAll, filter: allowAll, order: allowAll },
      },
      isIndexed: true,
    }),
    document: relationship({
      ref: 'Document',
      many: false,
    }),
    description: customText(),
    election: relationship({
      ref: 'Election.propositions',
      many: false,
      hooks: {
        afterOperation: async ({ operation, item, context }) => {
          if (operation === 'update') {
            if (!item?.electionId) {
              const sudo = context.sudo();
              await sudo.db.Proposition.deleteOne({
                where: { id: item.id.toString() },
              });
            }
          }
        },
      },
    }),
  },
});

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
        access: {
          read: { item: allowAll, filter: allowAll, order: allowAll },
        },
        validation: {
          isRequired: true,
        },
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),

      ...group({
        label: 'Voter Information',
        fields: {
          voterRegistrationDeadline: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          voterInfoBody: customText(),
        },
      }),

      ...group({
        label: 'Early & Absentee Voting Information',
        fields: {
          absenteeVotingApplication: relationship({
            ref: 'Document',
            many: false,
          }),
          earlyVotingStartDate: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          absenteeApplicationDeadline: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          absenteeVotingBody: customText(),
        },
      }),

      ...group({
        label: 'Candidate Filing Information',
        fields: {
          candidateFilingDocuments: relationship({
            ref: 'Document',
            many: true,
          }),
          candidatePacketAvailability: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          candidateFilingStartDate: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          candidateFilingDeadline: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          officesToBeFilled: customText(),
          candidateBody: customText(),
        },
      }),

      ...group({
        label: 'Election Official Information',
        fields: {
          electionOfficialApplication: relationship({
            ref: 'Document',
            many: false,
          }),

          electionOfficialApplicationDeadline: timestamp({
            access: {
              read: { item: allowAll, filter: allowAll, order: allowAll },
            },
            ui: {
              views: './src/components/customFields/datetime/views.tsx',
            },
          }),
          electionOfficialBody: customText(),
        },
      }),

      candidates: relationship({
        ref: 'Document',
        many: false,
      }),

      documents: relationship({
        ref: 'Document',
        many: true,
      }),

      propositions: relationshipController({
        ref: 'Proposition',
        listName: 'election',
        many: true,
        opts,
      }),

      electionBrochure: relationship({
        ref: 'Document',
        many: false,
      }),

      electionBallots: relationship({
        ref: 'Document',
        many: true,
      }),

      result: mapRelationShip(
        'ElectionResult',
        listKey,
        {
          many: false,
        },
        opts,
      ),

      tags: tags(listNamePlural),
      userGroups: userGroups(),

      ...timestamps,
      body: customText(),
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
      hideNavigation: isNotElectionUser,
    },
    versionLimit: 20,
    versionAgeDays: 365,
  },
);

export default {
  Election,
  ElectionVersion,
  ElectionDraft,
  Proposition,
};
