import { list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import { basePage, timestamps, titleAndDescription } from '../fieldUtils';
import { relationship, select, timestamp } from '@keystone-6/core/fields';

const listPlural = 'testModels';

export const TestModel: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  fields: {
    ...basePage(listPlural),
    ...titleAndDescription,
    status: select({
      options: [
        { label: 'Unpublished', value: 'Unpublished' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    drafts: relationship({
      ref: 'TestModelDraft.original',
      many: true,
      // ui: {
      //   displayMode: 'cards',
      //   cardFields: ['title'],
      //   linkToItem: true,
      //   inlineCreate: {
      //     fields: ['title'],
      //   },
      // },
      ui: {
        views: './src/components/customFields/drafts/views',
      },
    }),
  },
  hooks: {
    afterOperation: async ({ operation, item, context, originalItem }) => {
      if (operation === 'update') {
        if (
          originalItem.status === 'draft' &&
          item.status === 'published' &&
          !item.publishAt
        ) {
          await context.db.TestModel.updateOne({
            where: { id: item.id.toString() },
            data: {
              publishAt: new Date().toISOString(),
            },
          });
        }
      }
    },
  },
});

const draftListName = `TestModelDrafts`;
export const TestModelDraft: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    original: relationship({
      ref: 'TestModel.drafts',
      many: false,
      ui: { hideCreate: true },
    }),
    ...basePage(draftListName, {
      titleAndDescriptionOpts: {
        title: {
          required: false,
        },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
  },
  hooks: {
    // afterOperation: async ({ operation, item, context, originalItem }) => {
    //   if (operation === 'update') {
    //     if (
    //       originalItem.status === 'draft' &&
    //       item.status === 'published' &&
    //       !item.publishAt
    //     ) {
    //       await context.db.TestModel.updateOne({
    //         where: { id: item.id.toString() },
    //         data: {
    //           publishAt: new Date().toISOString(),
    //         },
    //       });
    //     }
    //   }
    // },
    afterOperation: async ({ operation, context, item, originalItem }) => {
      if (operation === 'update') {
        console.log(item);
        // const originalItem = await context.db.TestModel.findOne({
        //   where: { id: resolvedData.original.id.toString() },
        // });
        // if (originalItem) {
        //   console.log('Original item found:', originalItem);
        // }
      }
    },
  },
});
