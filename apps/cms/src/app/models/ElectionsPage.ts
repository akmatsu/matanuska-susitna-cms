import { list } from '@keystone-6/core';
import { generalOperationAccess } from '../access';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { timestamps, titleAndDescription } from '../fieldUtils';
import { customText } from '../../components/customFields/Markdown';
import { relationship } from '@keystone-6/core/fields';

export const ElectionsPage = list({
  access: {
    operation: generalOperationAccess,
  },
  isSingleton: true,
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    howElectionsWork: customText(),
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

    ...timestamps,
  },
});
