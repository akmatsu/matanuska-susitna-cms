import { list } from '@keystone-6/core';
import { iconSelect, timestamps, titleAndDescription } from '../../fieldUtils';
import {
  elevatedOperationAccess,
  generalOperationAccess,
  isContentManager,
} from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import { integer, relationship, select } from '@keystone-6/core/fields';

const featuredItem = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    order: integer({
      validation: { isRequired: true },
      defaultValue: 1,
      isIndexed: true,
    }),
    icon: iconSelect,
    linkedItem: relationship({
      ref: 'InternalLink',
      ui: {
        displayMode: 'cards',
        cardFields: ['label', 'item'],
        inlineCreate: { fields: ['label', 'selectItem'] },
        inlineEdit: { fields: ['label', 'selectItem'] },
      },
    }),
  },
  hooks: {
    beforeOperation: async ({ operation, item, context }) => {
      if (operation === 'delete' && item?.linkedItemId) {
        const sudoCtx = context.sudo();
        await sudoCtx.db.InternalLink.deleteOne({
          where: { id: item.linkedItemId as string },
        });
      }
    },

    afterOperation: async ({ operation, item, context, originalItem }) => {
      if (operation === 'update') {
        if (
          originalItem?.linkedItemId &&
          item.linkedItemId !== originalItem.linkedItemId
        ) {
          const sudoCtx = context.sudo();
          await sudoCtx.db.InternalLink.deleteOne({
            where: { id: originalItem.linkedItemId as string },
          });
        }
      }
    },
  },
});

const HomePage = list({
  isSingleton: true,
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isContentManager(args)),
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    featuredItems: relationship({
      ref: 'featuredItem',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['linkedItem', 'order', 'icon'],
        inlineEdit: { fields: ['linkedItem', 'order', 'icon'] },
        inlineCreate: { fields: ['linkedItem', 'order', 'icon'] },
      },
    }),
    ...timestamps,
  },
});

export default {
  HomePage,
  featuredItem,
};
