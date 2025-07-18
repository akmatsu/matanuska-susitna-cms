import { list } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess, isAdmin } from '../access';
import { checkbox, relationship } from '@keystone-6/core/fields';

export const ElectionResult = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('ElectionResult'),
  },
  ui: {
    isHidden: async (args) => {
      const isadmin = await isAdmin(args);
      if (isadmin) {
        return false;
      }

      if (args.session?.id) {
        const hasAccess = await args.context.query.User.count({
          where: {
            AND: [
              { id: { equals: args.session.id } },
              {
                groups: {
                  some: { id: { equals: 'electionsUser' } },
                },
              },
            ],
          },
        });
        return !hasAccess;
      }
      return true;
    },
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
