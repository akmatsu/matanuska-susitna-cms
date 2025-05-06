import { BaseFields, list, ListConfig } from '@keystone-6/core';
import pluralize, { plural } from 'pluralize';
import { generalOperationAccess } from './access';
import { relationship, select } from '@keystone-6/core/fields';
import {
  BaseItem,
  BaseListTypeInfo,
  KeystoneContextFromListTypeInfo,
} from '@keystone-6/core/types';
import { mapDataFields } from '../utils/draftUtils';
import { publishDraft } from '../components/customFields/publishDraft';

interface Options {
  versionLimit?: number;
  versionAgeDays?: number;
  query?: string;
}

export function DraftAndVersionsFactory<TFields extends BaseFields<any>>(
  listKey: string,
  coreFields: TFields,
  opts: Options = {},
): { Main: ListConfig<any>; Version: ListConfig<any>; Draft: ListConfig<any> } {
  const { versionLimit = 10, versionAgeDays = 365, query = '' } = opts;

  const publishQuery = `${query} original { id}`;

  return {
    Main: list({
      access: {
        operation: generalOperationAccess,
      },
      fields: {
        ...coreFields,
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
          ref: `${listKey}Draft.original`,
          many: true,

          ui: {
            views: './src/components/customFields/drafts/views',
          },
        }),

        versions: relationship({
          ref: `${listKey}Version.original`,
          many: true,
          ui: {
            views: './src/components/customFields/versions/views',
          },
        }),

        currentVersion: relationship({
          ref: `${listKey}Version.isLive`,
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
        async afterOperation(args) {
          await createVersion(
            listKey,
            query,
            versionAgeDays,
            versionLimit,
            args,
          );
        },
      },
    }),

    Version: list({
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
          ref: `${listKey}.versions`,
          many: false,
          ui: { hideCreate: true },
        }),
        ...coreFields,
        isLive: relationship({
          ref: `${listKey}.currentVersion`,
          many: false,
          ui: { hideCreate: true },
        }),
        republish: publishDraft({
          ui: {
            query: publishQuery,
            listName: 'TestModel',
            views: './src/components/customFields/republishVersion/views',
          },
        }),
      },
    }),

    Draft: list({
      access: {
        operation: generalOperationAccess,
      },
      ui: {
        isHidden: true,
        hideCreate: true,
      },
      fields: {
        original: relationship({
          ref: `${listKey}.drafts`,
          many: false,
          ui: { hideCreate: true },
        }),
        ...coreFields,
        publish: publishDraft({
          ui: {
            query: publishQuery,
            listName: 'TestModel',
          },
        }),
      },
    }),
  };
}

async function createVersion(
  listKey: string,
  query: string,
  versionAgeDays: number,
  versionLimit: number,
  {
    operation,
    item,
    originalItem,
    context,
  }: {
    operation: 'create' | 'update' | 'delete';
    item?: BaseItem;
    originalItem?: BaseItem;
    context: KeystoneContextFromListTypeInfo<BaseListTypeInfo>;
  },
) {
  if (operation === 'update' && item && item?.status === 'published') {
    const { title, ...res } = await context.query[listKey].findOne({
      where: { id: item.id.toString() },
      query,
    });

    const now = new Date();

    // Create a new version
    await context.db[listKey + 'Version'].createOne({
      data: mapDataFields(
        res,
        {
          title: `${title} --- ${now.toISOString()}`,
          original: { connect: { id: item.id.toString() } },
          isLive: { connect: { id: item.id.toString() } },
        },
        'create',
      ),
    });

    // Clean up old versions
    const count = await context.db[listKey + 'Version'].count({
      where: {
        original: { id: { equals: item.id.toString() } },
      },
    });

    // If more than max, delete all versions older maximum age
    if (count > versionLimit) {
      const cutoff = new Date(
        now.getTime() - versionAgeDays * 24 * 60 * 60 * 1000,
      );

      const oldVersions = await context.db[listKey + 'Version'].findMany({
        where: {
          original: { id: { equals: item.id.toString() } },
          createdAt: { lte: cutoff },
        },
      });

      await context.db[listKey + 'Version'].deleteMany({
        where: oldVersions.map((v) => ({ id: v.id.toString() })),
      });
    }
  }
}
