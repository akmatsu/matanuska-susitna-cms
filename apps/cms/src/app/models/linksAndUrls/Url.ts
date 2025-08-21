import { list } from '@keystone-6/core';
import { generalOperationAccess, isContentManager } from '../../access';
import {
  docDelete,
  owner,
  timestamps,
  titleAndDescription,
  typesenseDelete,
  urlRegex,
} from '../../fieldUtils';
import { select, text } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';
import { ListHooks } from '@keystone-6/core/types';

export const Url = list({
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
  hooks: {
    async beforeOperation(args) {
      await typesenseDelete(args);
    },

    async afterOperation({ operation, item, originalItem }) {
      if (operation === 'update') {
        if (
          (item.indexInSearchEngine === 'no' ||
            item.indexInSearchEngine === null) &&
          originalItem.indexInSearchEngine === 'yes'
        ) {
          docDelete(item.id.toString());
        }
      }
    },
  },
});
