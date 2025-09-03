import { group, list } from '@keystone-6/core';
import { timestamps, titleAndDescription } from '../../fieldUtils';
import { elevatedOperationAccess, isContentManager } from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import { relationship } from '@keystone-6/core/fields';

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
    ...group({
      label: 'Toolbelt',
      fields: {
        toolbeltOne: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        toolbeltTwo: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        toolbeltThree: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        toolbeltFour: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
      },
    }),
    ...group({
      label: 'Highlights',
      fields: {
        highlightOne: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        highlightTwo: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        highlightThree: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
      },
    }),
    ...timestamps,
  },
  hooks: {
    beforeOperation: async ({ operation, item, context }) => {
      if (operation === 'delete') {
        const sudoCtx = context.sudo();
        if (item.highlightOneId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.highlightOneId as string },
          });
        }
        if (item.highlightThreeId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.highlightThreeId as string },
          });
        }
        if (item.highlightTwoId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.highlightTwoId as string },
          });
        }
        if (item.toolbeltOneId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.toolbeltOneId as string },
          });
        }
        if (item.toolbeltTwoId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.toolbeltTwoId as string },
          });
        }
        if (item.toolbeltThreeId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.toolbeltThreeId as string },
          });
        }
        if (item.toolbeltFourId) {
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: item.toolbeltFourId as string },
          });
        }
      }
    },
    async afterOperation({ operation, item, originalItem, context }) {
      if (operation === 'update') {
        const sudoCtx = context.sudo();
        if (
          originalItem.highlightOneId &&
          item.highlightOneId !== originalItem?.highlightOneId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem?.highlightOneId as string },
          });

        if (
          originalItem.highlightTwoId &&
          item.highlightTwoId !== originalItem?.highlightTwoId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem?.highlightTwoId as string },
          });

        if (
          originalItem.highlightThreeId &&
          item.highlightThreeId !== originalItem?.highlightThreeId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem?.highlightThreeId as string },
          });

        // Delete first toolbelt item
        if (
          originalItem.toolbeltOneId &&
          item.toolbeltOneId !== originalItem?.toolbeltOneId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem.toolbeltOneId as string },
          });
        // Delete second toolbelt item
        if (
          originalItem.toolbeltTwoId &&
          item.toolbeltTwoId !== originalItem?.toolbeltTwoId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem.toolbeltTwoId as string },
          });

        // Delete third toolbelt item
        if (
          originalItem.toolbeltThreeId &&
          item.toolbeltThreeId !== originalItem?.toolbeltThreeId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem.toolbeltThreeId as string },
          });

        // Delete fourth toolbelt item
        if (
          originalItem.toolbeltFourId &&
          item.toolbeltFourId !== originalItem?.toolbeltFourId
        )
          await sudoCtx.db.Highlight.deleteOne({
            where: { id: originalItem.toolbeltFourId as string },
          });
      }
    },
  },
});

export default HomePage;
