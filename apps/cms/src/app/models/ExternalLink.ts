import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess, isAdmin } from '../access';
import { relationship, text } from '@keystone-6/core/fields';

export const ExternalLink: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    label: text({
      validation: {
        isRequired: true,
      },
    }),
    url: relationship({
      ref: 'Url',
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'description', 'url', 'owner'],
        inlineCreate: {
          fields: ['title', 'description', 'url'],
        },
        inlineConnect: true,
        inlineEdit: {
          fields: ['url'],
        },
      },
    }),
  },
});
