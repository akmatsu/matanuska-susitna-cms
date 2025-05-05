import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess, isContributor } from '../access';
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
      validation: {
        isRequired: true,
      },
      options: [
        { label: 'Unpublished', value: 'unpublished' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'unpublished',
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

    versions: relationship({
      ref: 'TestModelVersion.original',
      many: true,
      ui: {
        // hideCreate: true,
        views: './src/components/customFields/versions/views',
      },
    }),

    currentVersion: relationship({
      ref: 'TestModelVersion.isLive',
      ui: {
        hideCreate: true,
        itemView: {
          fieldMode: 'hidden',
        },
        listView: {
          fieldMode: 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
  },
  hooks: {
    afterOperation: async ({ operation, item, context, originalItem }) => {
      if (operation === 'update') {
        if (item.status === 'published') {
          const { title, ...res } = await context.query.TestModel.findOne({
            where: {
              id: item.id.toString(),
            },
            query: `id heroImage title description reviewDate owner {id} unpublishAt body tags {id} userGroups {id} contacts {id} __typename`,
          });

          const now = new Date();

          await context.db.TestModelVersion.createOne({
            data: mapDataFields(
              res,
              {
                title: `${title} --- ${now.toISOString()}`,
                original: {
                  connect: {
                    id: item.id.toString(),
                  },
                },
                isLive: {
                  connect: {
                    id: item.id.toString(),
                  },
                },
              },
              'create',
            ),
          });

          const count = await context.db.TestModelVersion.count({
            where: {
              original: {
                id: {
                  equals: item.id.toString(),
                },
              },
            },
          });

          // If more than max, delete all versions older than 1 year
          if (count > 20) {
            const versionsToDelete = await context.db.TestModelVersion.findMany(
              {
                where: {
                  original: {
                    id: {
                      equals: item.id.toString(),
                    },
                  },
                  createdAt: {
                    // more than 1 year old
                    lte: new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000),
                  },
                },
              },
            );

            const idsToDelete = versionsToDelete.map((version) => ({
              id: version.id.toString(),
            }));

            await context.db.TestModelVersion.deleteMany({
              where: idsToDelete,
            });
          }
        }

        if (
          originalItem.status === 'unpublished' &&
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

export const TestModelVersion: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: {
      update: () => false,
    },
  },
  ui: {
    hideCreate: true,
    isHidden: true,
  },
  fields: {
    original: relationship({
      ref: 'TestModel.versions',
      many: false,
      ui: { hideCreate: true },
    }),
    ...basePage('TestModelVersions', {
      titleAndDescriptionOpts: {
        title: {
          required: false,
          lengthMin: 0,
        },
        isUnique: false,
      },
      noSlug: true,
    }),
    ...titleAndDescription,
    isLive: relationship({
      ref: 'TestModel.currentVersion',
      many: false,
      ui: { hideCreate: true },
    }),
    republish: publishDraft({
      ui: {
        query: `
          id heroImage original {id} title description reviewDate owner {id} unpublishAt body tags {id} userGroups {id} contacts {id} __typename
        `,
        listName: 'TestModel',
        views: './src/components/customFields/republishVersion/views',
      },
    }),
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
            data: mapDataFields(
              currentItem,
              {
                status: 'published',
                publishAt: new Date().toISOString(),
              },
              'update',
            ),
          });

          await context.db.TestModelDraft.deleteOne({
            where: { id: item.id.toString() },
          });
        }
      }
    },
  },
});
