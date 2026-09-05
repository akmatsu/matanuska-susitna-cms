import { list } from '@keystone-6/core';
import { generalOperationAccess, isAdmin } from '../../access';
import { relationship, text } from '@keystone-6/core/fields';

export const ExternalLink = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    hideNavigation: async (args) => !(await isAdmin(args)),
  },
  fields: {
    label: text({
      ui: {
        description:
          'The text that will be displayed for the link. If not provided, the URL title will be used.',
      },
    }),
    url: relationship({
      ref: 'Url',
    }),
  },
});
