import { list } from '@keystone-6/core';
import { password, relationship, select, text } from '@keystone-6/core/fields';
import { timestamps } from '../../fieldUtils';
import { isAdmin, ROLES } from '../../access/roles';
import { internalMaxOperationAccess } from '../../access';
import { allowAll } from '@keystone-6/core/access';

export const User = list({
  // access: {
  //   operation: internalMaxOperationAccess,
  // },

  access: allowAll,

  ui: {
    hideCreate: async (args) => !(await isAdmin(args)),
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    authId: text({
      isIndexed: 'unique',
      defaultValue: null,
      ui: {
        itemView: { fieldMode: 'read' },
        createView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'hidden' },
      },
      db: {
        isNullable: true,
      },
    }),
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: false },
      isIndexed: 'unique',
    }),
    password: password({
      validation: { isRequired: false },
      db: { isNullable: true },
    }),

    role: select({
      type: 'integer',
      options: [
        {
          label: 'Admin',
          value: ROLES.ADMIN,
        },
        {
          label: 'Content Manager',
          value: ROLES.CONTENT_MANAGER,
        },
        {
          label: 'Contributor',
          value: ROLES.CONTRIBUTOR,
        },
        {
          label: 'Collaborator',
          value: ROLES.COLLABORATOR,
        },
      ],
      defaultValue: ROLES.COLLABORATOR,
    }),
    groups: relationship({
      ref: 'UserGroup.users',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),

    ...timestamps,
  },
});
