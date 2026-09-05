import { BaseFields, g } from '@keystone-6/core';
import {
  BasePageOptions,
  contactRelationship,
  contacts,
  liveUrl,
  owner,
  publishable,
  slug,
  tags,
  timestamps,
  titleAndDescription,
  userGroups,
} from '../fieldUtils';
import {
  checkbox,
  json,
  relationship,
  text,
  virtual,
} from '@keystone-6/core/fields';
import { belongsToGroup, isContentManager, isOwner } from '../access';
import { singular } from 'pluralize';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { customText } from '../../components/customFields/Markdown';
import { relationshipController } from '../draftAndVersionFactory/DraftAndVersionsFactory';
import { markdownToTipTapJson } from '../../utils/toTipTap/markdownToTipTapJson';

export function basePage(
  listNamePlural: string,
  opts?: BasePageOptions,
): BaseFields<any> {
  return {
    canEdit: virtual({
      ui: {
        label: 'Insufficient Access',
        createView: {
          fieldMode: 'hidden',
        },
        listView: {
          fieldMode: 'hidden',
        },
        itemView: {
          async fieldMode(args) {
            const res =
              (await isContentManager(args)) ||
              (await isOwner(args)) ||
              (await belongsToGroup(args, singular(listNamePlural)));

            return res ? 'hidden' : 'read';
          },
        },
        views: './src/components/customFields/InsufficientAccessField.tsx',
      },
      field: g.field({
        type: g.String,
        resolve() {
          return 'You do not have permission to edit this page. Any changes you make will not be saved. Please contact support to get access to this page';
        },
      }),
    }),
    heroImage: blueHarvestImage(opts?.heroImageConfig),
    ...titleAndDescription(opts?.titleAndDescriptionOpts),
    ...publishable({
      isDraft: opts?.isDraft,
      isVersion: opts?.isVersion,
      unPublishRequired: opts?.unPublishRequired,
    }),
    liveUrl: liveUrl(listNamePlural),
    ...(!opts?.noSlug && !opts?.isVersion && !opts?.isDraft && { slug }),
    ...((opts?.isVersion || opts?.isDraft) && {
      slug: text({
        ui: {
          createView: {
            fieldMode: 'hidden',
          },
          itemView: {
            fieldMode: opts.isDraft ? 'edit' : 'read',
            fieldPosition: 'sidebar',
          },
        },
      }),
    }),

    owner,
    // body: customText(opts?.customTextOpts),
    body: customText({
      ...opts?.customTextOpts,
      hooks: {
        ...opts?.customTextOpts?.hooks,
        afterOperation: async (args) => {
          const userHook = opts?.customTextOpts?.hooks?.afterOperation;
          if (typeof userHook === 'function') {
            await userHook(args);
          } else if (
            typeof userHook === 'object' &&
            userHook[args.operation]
          ) {
            await userHook[args.operation]!(args as any);
          }
          const markdown = args.item?.body as string | undefined | null;
          if (!markdown) return;
          const json = await markdownToTipTapJson(markdown as string);

          await args.context.sudo().db[args.listKey].updateOne({
            where: { id: args.item?.id.toString() },
            data: {
              content: json,
            },
          });
        },
      },
    }),
    content: json({
      ui: {
        itemView: {
          fieldMode: 'read',
        },
        createView: {
          fieldMode: 'hidden',
        },
        listView: {
          fieldMode: 'hidden',
        },
      },
    }),
    tags: tags(listNamePlural),
    userGroups: userGroups(),

    ...(opts?.primaryAction && {
      primaryAction: relationship({
        ref: 'ExternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
        many: false,
      }),
    }),

    ...(opts?.secondaryActions && {
      secondaryActions: relationship({
        ref: 'ExternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
        many: true,
      }),
    }),

    ...(opts?.actions && {
      actions: relationship({
        ref: 'InternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
        many: true,
      }),
    }),

    ...(opts?.documents && {
      documents: relationship({
        ref: 'Document',
        many: true,
      }),
    }),

    ...(opts?.address && {
      address: relationship({
        ref: 'Location',
        many: false,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
      }),
    }),

    ...(opts?.primaryContact && {
      primaryContact: contactRelationship(),
    }),

    contacts: contacts(),
    ...(opts?.hours && {
      hours: relationship({
        ref: 'OperatingHour',
        many: true,
      }),
    }),

    ...(!opts?.disableDefaultRelationships && {
      redirect: relationship({
        ref: 'Redirect',
        many: false,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          labelField: 'from',
        },
      }),

      events: relationshipController({
        ref: 'Event',
        listName: listNamePlural,
        opts,
        many: true,
        ui: {
          itemView: {
            fieldMode: listNamePlural === 'Events' ? 'hidden' : 'edit',
          },
          createView: {
            fieldMode: listNamePlural === 'Events' ? 'hidden' : 'edit',
          },
        },
      }),

      topics: relationshipController({
        ref: 'Topic',
        listName: listNamePlural,
        opts,
        many: true,
      }),

      publicNotices: relationshipController({
        ref: 'PublicNotice',
        many: true,
        listName: listNamePlural,
        opts,
      }),

      communities: relationshipController({
        ref: 'Community',
        many: true,
        listName: listNamePlural,
        opts,
        ui: {
          itemView: {
            fieldMode: listNamePlural === 'Communities' ? 'hidden' : 'edit',
          },
          createView: {
            fieldMode: listNamePlural === 'Communities' ? 'hidden' : 'edit',
          },
        },
      }),

      orgUnits: relationshipController({
        ref: 'OrgUnit',
        many: true,
        listName: listNamePlural,
        opts,
        ui: {
          itemView: {
            fieldMode: listNamePlural === 'OrgUnits' ? 'hidden' : 'edit',
          },
          createView: {
            fieldMode: listNamePlural === 'OrgUnits' ? 'hidden' : 'edit',
          },
        },
      }),

      assemblyDistricts: relationshipController({
        ref: 'AssemblyDistrict',
        many: true,
        listName: listNamePlural,
        opts,
        ui: {
          itemView: {
            fieldMode:
              listNamePlural === 'AssemblyDistricts' ? 'hidden' : 'edit',
          },
          createView: {
            fieldMode:
              listNamePlural === 'AssemblyDistricts' ? 'hidden' : 'edit',
          },
        },
      }),

      services: relationshipController({
        ref: 'Service',
        many: true,
        listName: listNamePlural,
        opts,
        ui: {
          itemView: {
            fieldMode: listNamePlural === 'Services' ? 'hidden' : 'edit',
          },
          createView: {
            fieldMode: listNamePlural === 'Services' ? 'hidden' : 'edit',
          },
        },
      }),

      plans: relationshipController({
        ref: 'Plan',
        many: true,
        listName: listNamePlural,
        opts,
        ui: {
          itemView: {
            fieldMode: listNamePlural === 'Plans' ? 'hidden' : 'edit',
          },
          createView: {
            fieldMode: listNamePlural === 'Plans' ? 'hidden' : 'edit',
          },
        },
      }),
    }),

    hideSideNav: checkbox({
      defaultValue: false,

      ui: {
        label: 'Hide Side Navigation',
        description:
          'If checked, the side navigation will be hidden on the front-end for this page.',
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),

    ...timestamps,
  };
}
