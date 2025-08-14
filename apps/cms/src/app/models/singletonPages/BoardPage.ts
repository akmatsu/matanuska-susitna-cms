import { list, ListConfig } from '@keystone-6/core';
import { elevatedOperationAccess, isContentManager } from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import {
  contacts,
  owner,
  timestamps,
  titleAndDescription,
} from '../../fieldUtils';
import { customText } from '../../../components/customFields/Markdown';
import { relationship } from '@keystone-6/core/fields';

const BoardPage: ListConfig<any> = list({
  isSingleton: true,
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isContentManager(args)),
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    owner,
    body: customText(),

    actions: relationship({
      ref: 'InternalLink',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        displayMode: 'cards',
        cardFields: ['label', 'item'],
        inlineCreate: { fields: ['label', 'selectItem'] },
        inlineEdit: { fields: ['label', 'selectItem'] },
        inlineConnect: false,
      },
    }),

    documents: relationship({
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

    // newDocuments: documentRelationshipMany(),

    vacancyReport: relationship({
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

    applicationForm: relationship({
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
    ParliTrainingLink: relationship({
      ref: 'ExternalLink',
      ui: {
        displayMode: 'cards',
        inlineConnect: true,
        cardFields: ['label', 'url'],
        inlineCreate: { fields: ['label', 'url'] },
        inlineEdit: { fields: ['label', 'url'] },
      },
    }),
    contacts: contacts(),
    // newContacts: contactRelationshipMany(),

    ...timestamps,
  },
});

export default BoardPage;
