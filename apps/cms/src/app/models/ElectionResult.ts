import { list } from '@keystone-6/core';
import { generalOperationAccess } from '../access';
import { checkbox, relationship } from '@keystone-6/core/fields';

export const ElectionResult = list({
  access: {
    operation: generalOperationAccess,
  },
  fields: {
    election: relationship({
      ref: 'Election.result',
      many: false,
    }),

    document: relationship({
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

    isOfficial: checkbox(),
  },
});
