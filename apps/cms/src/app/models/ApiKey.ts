import { list, ListConfig } from '@keystone-6/core';
import { adminOnlyOperationAccess, isAdmin } from '../access';
import { text, timestamp } from '@keystone-6/core/fields';
import { owner } from '../fieldUtils';
import { randomBytes } from 'node:crypto';

export const ApiKey: ListConfig<any> = list({
  access: {
    operation: adminOnlyOperationAccess,
  },
  ui: {
    isHidden: ({ session, context }) => !isAdmin(session, context),
  },

  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
    token: text({
      isIndexed: 'unique',
      ui: {
        createView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'hidden' },
      },
      hooks: {
        resolveInput({ operation, resolvedData, fieldKey }) {
          if (operation === 'create') {
            const key = randomBytes(32).toString('hex');
            return key;
          }
          return resolvedData?.[fieldKey];
        },
      },
    }),
    user: owner,
    expiresAt: timestamp({ validation: { isRequired: true } }),
  },
});
