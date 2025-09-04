import { list } from '@keystone-6/core';
import { owner, timestamps, userGroups } from '../../fieldUtils';
import { relationship, select, text } from '@keystone-6/core/fields';
import {
  generalItemAccess,
  generalOperationAccess,
  isAdmin,
} from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';

export const Highlight = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Highlight'),
  },
  ui: {
    hideCreate: false,
  },
  graphql: {
    maxTake: 100,
  },

  fields: {
    title: text({
      validation: {
        isRequired: true,
        length: {
          max: 100,
          min: 2,
        },
      },
      ui: {
        displayMode: 'input',
      },
      isIndexed: 'unique',
    }),

    image: blueHarvestImage({
      notBanner: true,
    }),
    owner,
    userGroups: userGroups(),
    priority: select({
      type: 'integer',
      defaultValue: 4,

      ui: {
        displayMode: 'select',
        description:
          'Currently only admins can change the priority. Contact a site administrator for assistance.',
        itemView: {
          async fieldMode(args) {
            const canEdit = await isAdmin(args);

            return canEdit ? 'edit' : 'read';
          },
        },
        createView: {
          async fieldMode(args) {
            const canEdit = await isAdmin(args);

            return canEdit ? 'edit' : 'hidden';
          },
        },
      },
      options: [
        { label: 'Highest', value: 1 },
        { label: 'High', value: 2 },
        { label: 'Medium', value: 3 },
        { label: 'Normal', value: 4 },
        { label: 'Low', value: 5 },
        { label: 'Lowest', value: 6 },
      ],
    }),

    message: text({ ui: { displayMode: 'textarea' } }),
    linkedItem: relationship({
      ref: 'InternalLink',
      ui: {
        displayMode: 'cards',
        cardFields: ['label', 'item'],
        inlineCreate: { fields: ['label', 'selectItem'] },
        inlineEdit: { fields: ['label', 'selectItem'] },
      },
      hooks: {
        async beforeOperation({ context, operation, item }) {
          if (operation === 'delete') {
            if (item.linkedItemId) {
              const sudoCtx = context.sudo();
              sudoCtx.db.InternalLink.deleteOne({
                where: { id: item.linkedItemId as string },
              });
            }
          }
        },

        async afterOperation({ context, operation, item, originalItem }) {
          if (operation === 'update') {
            if (
              originalItem.linkedItemId &&
              item.linkedItemId !== originalItem.linkedItemId
            ) {
              const sudoCtx = context.sudo();
              sudoCtx.db.InternalLink.deleteOne({
                where: { id: originalItem.linkedItemId as string },
              });
            }
          }
        },
      },
    }),
    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    ...timestamps,
  },
});
