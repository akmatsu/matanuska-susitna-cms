import { BaseFields, list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess } from './access';
import {
  relationship,
  RelationshipFieldConfig,
  select,
} from '@keystone-6/core/fields';
import {
  BaseItem,
  BaseListTypeInfo,
  KeystoneContextFromListTypeInfo,
  ListAccessControl,
  ListHooks,
} from '@keystone-6/core/types';
import { mapDataFields } from '../utils/draftUtils';
import { publishDraft } from '../components/customFields/publishDraft';
import { BasePageOptions } from './fieldUtils';
import { isPlural, plural, singular } from 'pluralize';
import { deepMerge, lowercaseFirstLetter } from '../utils';
import { getPublishQueue } from '../redis';
import { createDrafts } from '../components/customFields/drafts';
import { logger } from '../configs/logger';
import v from 'voca';

interface Options {
  versionLimit?: number;
  versionAgeDays?: number;
  query?: string;
  mainBasePageOptions?: BasePageOptions;
  draftBasePageOptions?: BasePageOptions;
  versionBasePageOptions?: BasePageOptions;
  mainAccess?: ListAccessControl<any>;
  /** Hooks that only run on main model, not draft or versions */
  mainHooks?: ListHooks<BaseListTypeInfo>;
  /** Hooks that run on all models, including draft and versions*/
  hooks?: ListHooks<BaseListTypeInfo>;
  mainGraphqlOptions?: ListConfig<any>['graphql'];
  mainUI?: ListConfig<any>['ui'];
}

export type CoreFieldsFunction<TFields extends BaseFields<any>> = (
  listNamePlural: string,
  opts?: BasePageOptions,
) => TFields;

export function relationshipController<ListTypeInfo extends BaseListTypeInfo>({
  ref,
  listName,
  opts,
  ...config
}: {
  /** The name of the field on the model you are connect to */
  listName: string;
  opts?: BasePageOptions;
} & RelationshipFieldConfig<ListTypeInfo>) {
  const listNameSingular = isPlural(listName) ? singular(listName) : listName;

  return relationship({
    ref:
      ref !== listNameSingular
        ? !opts?.isDraft && !opts?.isVersion
          ? `${ref}.${v.camelCase(listName)}`
          : ref
        : ref,
    ...config,
  });
}

export function DraftAndVersionsFactory<TFields extends BaseFields<any>>(
  listKey: string,
  coreFields: CoreFieldsFunction<TFields>,
  opts: Options = {},
): { Main: ListConfig<any>; Version: ListConfig<any>; Draft: ListConfig<any> } {
  const { versionLimit = 10, versionAgeDays = 365, query = '' } = opts;

  const publishQuery = `${query} original { id }`;

  const defaultDraftAndVersionOpts: BasePageOptions = {
    titleAndDescriptionOpts: {
      title: {
        required: false,
        lengthMin: 0,
      },
      isUnique: false,
    },
    noSlug: true,
  };

  const defaultDraftOpts: BasePageOptions = {
    ...defaultDraftAndVersionOpts,
    isDraft: true,
  };
  const defaultVersionOpts: BasePageOptions = {
    ...defaultDraftAndVersionOpts,
    isVersion: true,
  };

  return {
    Main: list({
      access: {
        operation: generalOperationAccess,
        ...(opts?.mainAccess && opts.mainAccess),
      },
      ui: opts.mainUI,
      graphql: {},
      fields: {
        ...coreFields(plural(listKey), opts.mainBasePageOptions),
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
            hideCreate: true,
            displayMode: 'select',

            itemView: {
              fieldMode: 'read',
            },

            createView: {
              fieldMode: 'hidden',
            },
          },
        }),

        makeDrafts: createDrafts({
          ui: {
            query,
            listName: listKey,
            createView: {
              fieldMode: 'hidden',
            },
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
        ...(opts.hooks && opts.hooks),
        ...(opts.mainHooks && opts.mainHooks),
        async beforeOperation(args) {
          const it: BaseItem | undefined = args.item as BaseItem | undefined;
          if (args.operation === 'delete' && it?.id) {
            const sudoCtx = args.context.sudo();
            const id = it.id.toString();

            const versions = await sudoCtx.db[listKey + 'Version'].findMany({
              where: {
                original: { id: { equals: id } },
              },
            });

            const drafts = await sudoCtx.db[listKey + 'Draft'].findMany({
              where: {
                original: { id: { equals: id } },
              },
            });

            // Delete all versions and drafts
            await sudoCtx.db[listKey + 'Version'].deleteMany({
              where: versions.map((v) => ({ id: v.id.toString() })),
            });
            await sudoCtx.db[listKey + 'Draft'].deleteMany({
              where: drafts.map((v) => ({ id: v.id.toString() })),
            });

            const userHook = opts.mainHooks?.beforeOperation;
            if (typeof userHook === 'function') {
              await userHook(args);
            } else if (
              typeof userHook === 'object' &&
              userHook[args.operation]
            ) {
              await userHook[args.operation]!(args as any);
            }
          }
        },

        async afterOperation(args) {
          try {
            await createVersion(
              listKey,
              query,
              versionAgeDays,
              versionLimit,
              args,
            );

            const userHook = opts.mainHooks?.afterOperation;
            if (typeof userHook === 'function') {
              await userHook(args);
            } else if (
              typeof userHook === 'object' &&
              userHook[args.operation]
            ) {
              await userHook[args.operation]!(args as any);
            }
          } catch (error) {
            logger.error(error, 'Error in afterOperation hook');
          }
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
        ...coreFields(
          `${listKey}Versions`,
          deepMerge(defaultVersionOpts, opts.versionBasePageOptions),
        ),
        isLive: relationship({
          ref: `${listKey}.currentVersion`,
          many: false,
          ui: { hideCreate: true },
        }),
        republish: publishDraft({
          ui: {
            query: publishQuery,
            listName: listKey,
            views: './src/components/customFields/republishVersion/views',
          },
        }),
      },
      hooks: opts.hooks,
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
        ...coreFields(
          `${listKey}Drafts`,
          deepMerge(defaultDraftOpts, opts.draftBasePageOptions),
        ),
        publish: publishDraft({
          ui: {
            query: publishQuery,
            listName: listKey,
          },
        }),
      },
      hooks: {
        ...(opts.hooks && opts.hooks),
        async beforeOperation({ operation, item }) {
          if (operation === 'delete') {
            const publishQueue = getPublishQueue();
            const id = item.id.toString();

            // Find and remove any existing publish jobs
            const jobId = `publish:${listKey}Draft:${id}`;
            const existingJob = await publishQueue.getJob(jobId);
            if (existingJob) await existingJob.remove();
          }
        },
        async afterOperation(args) {
          if (args.operation === 'update') {
            // If a new publishAt date is set, schedule a publish job
            if (
              args.item.publishAt &&
              args.item.publishAt !== args.originalItem.publishAt
            ) {
              const publishQueue = getPublishQueue();
              // Determine the delay until the publishAt date
              const publishAtDate = new Date(args.item.publishAt);
              const now = Date.now();
              let delay = publishAtDate.getTime() - now;
              if (delay < 0) delay = 0;

              // Find and remove any existing publish jobs
              const jobId = `publish:${listKey}Draft:${args.item.id.toString()}`;
              const existingJob = await publishQueue.getJob(jobId);
              if (existingJob) await existingJob.remove();

              // Schedule a new publish job
              await publishQueue.add(
                'publish',
                {
                  itemId: args.item.id.toString(),
                  listKey: listKey,
                  originalId: args.item.originalId,
                  query: publishQuery,
                  operation: 'publish',
                },
                {
                  jobId,
                  delay,
                  removeOnComplete: true,
                  attempts: 3,
                },
              );
              logger.info('Scheduled publish job');
            }

            // If publishAt is removed, remove any existing publish job
            if (!args.item.publishAt && args.originalItem.publishAt) {
              const publishQueue = getPublishQueue();
              const jobId = `publish:${listKey}Draft:${args.item.id.toString()}`;
              const existingJob = await publishQueue.getJob(jobId);
              if (existingJob) await existingJob.remove();
            }
          }
        },
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
    context,
    originalItem,
  }: {
    operation: 'create' | 'update' | 'delete';
    item?: BaseItem;
    context: KeystoneContextFromListTypeInfo<BaseListTypeInfo>;
    originalItem?: BaseItem;
  },
) {
  if (operation === 'update') {
    const originalVersionId = (originalItem as any).currentVersionId;
    const newVersionId = (item as any).currentVersionId;

    if (originalVersionId !== newVersionId) {
      return;
    }
  }
  if (
    (operation === 'update' || operation === 'create') &&
    item &&
    item?.status === 'published'
  ) {
    const sudoCtx = context.sudo();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, id, ...rest } = await sudoCtx.query[listKey].findOne({
      where: { id: item.id.toString() },
      query,
    });

    const now = new Date();

    const baseData = mapDataFields(rest, {}, 'create');

    const versionData = {
      ...baseData,
      title: `${title} --- ${now.toLocaleString()}`,
      original: { connect: { id: item.id.toString() } },
      isLive: { connect: { id: item.id.toString() } },
    };

    // Create a new version
    await sudoCtx.prisma[lowercaseFirstLetter(listKey) + 'Version'].create({
      data: versionData,
    });

    const count = await sudoCtx.query[listKey + 'Version'].count({
      where: {
        original: { id: { equals: item.id.toString() } },
      },
    });

    // If more than max, delete all versions older maximum age
    if (count > versionLimit) {
      const cutoff = new Date(
        now.getTime() - versionAgeDays * 24 * 60 * 60 * 1000,
      );

      const oldVersions = await sudoCtx.query[listKey + 'Version'].findMany({
        where: {
          original: { id: { equals: item.id.toString() } },
          createdAt: { lte: cutoff },
        },
        query: 'id',
      });

      await sudoCtx.query[listKey + 'Version'].deleteMany({
        where: oldVersions.map((v) => ({ id: v.id.toString() })),
      });
    }
  }
}

export function mapRelationShip<
  T extends { isDraft?: boolean; isVersion?: boolean },
>(
  modelRef: string,
  currentModelName: string,
  config: Omit<RelationshipFieldConfig<BaseListTypeInfo>, 'ref'>,
  opts?: T,
) {
  return relationship({
    ref:
      !opts?.isDraft && !opts?.isVersion
        ? `${modelRef}.${v.camelCase(currentModelName)}`
        : modelRef,
    ...config,
  } as RelationshipFieldConfig<BaseListTypeInfo>);
}
