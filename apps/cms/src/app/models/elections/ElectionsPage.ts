import { group, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  generalOperationAccess,
  isElectionUser,
  isNotElectionUser,
} from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import {
  docDelete,
  owner,
  tags,
  timestamps,
  titleAndDescription,
  typesenseUpsert,
  userGroups,
} from '../../fieldUtils';
import { customText } from '../../../components/customFields/Markdown';
import { checkbox, integer, relationship, text } from '@keystone-6/core/fields';
import { logger } from '../../../configs/logger';

export const EarlyVotingLocation = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    hideNavigation: true,
  },
  fields: {
    order: integer({
      defaultValue: 0,
      validation: { isRequired: true },
      access: {
        read: { item: allowAll, filter: allowAll, order: allowAll },
      },
      ui: {
        description: 'Order of the early voting locations',
      },
    }),
    title: text({
      validation: { isRequired: true },
      ui: {
        description: 'Title of the early voting location',
      },
    }),
    address: relationship({
      ref: 'Location',
      many: false,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),
    hours: relationship({
      ref: 'OperatingHour',
      many: true,
    }),
  },
});

const ElectionsPage = list({
  access: {
    operation: {
      query: () => true,
      create: isElectionUser,
      update: isElectionUser,
      delete: isElectionUser,
    },
    item: {
      update: isElectionUser,
      delete: isElectionUser,
      create: isElectionUser,
    },
  },
  isSingleton: true,
  ui: {
    hideNavigation: isNotElectionUser,
    hideCreate: isNotElectionUser,
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    howElectionsWork: customText(),
    owner,
    userGroups: userGroups(),
    tags: tags(),

    electionOfficialApplicationUrl: relationship({
      ref: 'ExternalLink',
      ui: {
        description: 'Link to web based election official application',
      },
      many: false,
    }),

    ...group({
      label: 'Polling Places & Precincts',
      fields: {
        pollingPlacesLink: relationship({
          ref: 'InternalLink',
          many: false,
        }),
        pollingPlaceBody: customText(),
      },
    }),

    stateElectionContact: relationship({
      ref: 'Contact',
      many: false,
    }),

    boroughElectionContact: relationship({
      ref: 'Contact',
      many: false,
    }),

    referendumProcessDocument: relationship({
      ref: 'Document',
      many: false,
    }),

    hideEarlyVotingLocations: checkbox({
      defaultValue: false,

      ui: {
        description:
          'Toggle to hide or show the early voting locations on the frontend',
      },
    }),

    earlyVotingLocations: relationship({
      ref: 'EarlyVotingLocation',
      many: true,
    }),

    ...timestamps,
  },
  hooks: {
    async beforeOperation(args) {
      try {
        docDelete(`${args.item?.id.toString()}-elections`);
      } catch (error) {
        logger.error(error, 'Error deleting elections page typesense document');
      }
    },
    async afterOperation(args) {
      typesenseUpsert({
        listNameSingular: 'electionsPage',
        opArgs: args,
        typeOverride: 'Topic',
        appendId: '-elections',
        isSingleton: true,
      });
    },
  },
});

export default ElectionsPage;
