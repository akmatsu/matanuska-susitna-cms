import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess } from '../access';
import { basePage, titleAndDescription } from '../fieldUtils';
import { relationship, select } from '@keystone-6/core/fields';
import { mapDataFields } from '../../utils/draftUtils';
import { publishDraft } from '../../components/customFields/publishDraft';

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
    hideCreate: true,
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
          lengthMin: 0,
        },
        isUnique: false,
      },
      noSlug: true,
    }),
    publish: publishDraft({
      ui: {
        query: `
          id heroImage original {id} title description reviewDate owner {id} unpublishAt body tags {id} userGroups {id} contacts {id} __typename
        `,
        listName: 'TestModel',
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
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'update') {
        const currentItem = await context.query.TestModelDraft.findOne({
          where: {
            id: item.id.toString(),
          },
          query:
            'id heroImage title description reviewDate owner {id} unpublishAt body tags {id} userGroups {id} contacts {id} __typename original {id}',
        });

        if (item.status === 'published') {
          await context.db.TestModel.updateOne({
            where: { id: item.originalId as string },
            data: mapDataFields(currentItem, {
              status: 'published',
              publishAt: new Date().toISOString(),
            }),
          });

          await context.db.TestModelDraft.deleteOne({
            where: { id: item.id.toString() },
          });
        }
      }
    },
  },
});
