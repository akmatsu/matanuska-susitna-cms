import { list } from '@keystone-6/core';
import {
  generalOperationAccess,
  isElectionUser,
  isNotElectionUser,
} from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import {
  owner,
  timestamps,
  titleAndDescription,
  userGroups,
} from '../../fieldUtils';
import { customText } from '../../../components/customFields/Markdown';
import { integer, relationship, text } from '@keystone-6/core/fields';
import { electionsPageHooks } from './electionsPageHooks';

export const EarlyVotingLocation = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    order: integer({
      defaultValue: 0,
      validation: { isRequired: true },
      isOrderable: true,
      isFilterable: true,
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
        displayMode: 'cards',
        cardFields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
        inlineCreate: {
          fields: ['title', 'lineOne', 'lineTwo', 'city', 'state', 'zip'],
        },
        inlineEdit: {
          fields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
        },
        inlineConnect: true,
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),
    hours: relationship({
      ref: 'OperatingHour',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['day', 'open', 'close'],
        inlineCreate: {
          fields: ['day', 'open', 'close'],
        },
        inlineEdit: {
          fields: ['day', 'open', 'close'],
        },
      },
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
    isHidden: isNotElectionUser,
    hideCreate: isNotElectionUser,
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    howElectionsWork: customText(),
    owner,
    userGroups: userGroups(),
    stateElectionContact: relationship({
      ref: 'Contact',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'title', 'phone', 'email'],
        inlineConnect: true,
        inlineCreate: {
          fields: ['name', 'title', 'phone', 'email'],
        },
      },
    }),

    boroughElectionContact: relationship({
      ref: 'Contact',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'title', 'phone', 'email'],
        inlineConnect: true,
        inlineCreate: {
          fields: ['name', 'title', 'phone', 'email'],
        },
      },
    }),

    referendumProcessDocument: relationship({
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

    earlyVotingLocations: relationship({
      ref: 'EarlyVotingLocation',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['order', 'title', 'address', 'hours'],
        inlineConnect: false,
        inlineEdit: {
          fields: ['order', 'title', 'address', 'hours'],
        },
        inlineCreate: {
          fields: ['order', 'title', 'address', 'hours'],
        },
      },
    }),

    ...timestamps,
  },
  hooks: electionsPageHooks,
});

export default ElectionsPage;
