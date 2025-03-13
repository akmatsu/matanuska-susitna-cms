import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess, isAdmin } from '../access';
import { titleAndDescription, urlRegex } from '../fieldUtils';
import { text } from '@keystone-6/core/fields';

export const ExternalLink: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    ...titleAndDescription(),
    url: text({
      isIndexed: 'unique',
      validation: {
        isRequired: true,
        match: {
          regex: urlRegex,
          explanation: 'Must be a valid URL.',
        },
      },
    }),
  },
});
