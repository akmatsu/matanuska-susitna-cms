import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess, isContentManager } from '../../access';
import {
  owner,
  timestamps,
  titleAndDescription,
  urlRegex,
} from '../../fieldUtils';
import { select, text } from '@keystone-6/core/fields';

export const Url: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isContentManager(args)),
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
    indexInSearchEngine: select({
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    }),
    owner,
    ...timestamps,
  },
});
