import { BaseFields, graphql } from '@keystone-6/core';
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
import { checkbox, relationship, virtual } from '@keystone-6/core/fields';
import { belongsToGroup, isContentManager, isOwner } from '../access';
import { singular } from 'pluralize';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { customText } from '../../components/customFields/Markdown';
import { relationshipController } from '../draftAndVersionFactory/DraftAndVersionsFactory';
// import { Checkbox } from '@keystone-6/core/fields';

export function basePage(
  listNamePlural: string,
  opts?: BasePageOptions,
): BaseFields<any> {
  return {
    canEdit: virtual({
      label: 'Insufficient Access',
      ui: {
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
      field: graphql.field({
        type: graphql.String,
        resolve() {
          return 'You do not have permission to edit this page. Any changes you make will not be saved. Please contact support to get access to this page';
        },
      }),
    }),
    heroImage: blueHarvestImage(opts?.heroImageConfig),
    ...titleAndDescription(opts?.titleAndDescriptionOpts),
    ...publishable({ isDraft: opts?.isDraft, isVersion: opts?.isVersion }),
    liveUrl: liveUrl(listNamePlural),
    ...(!opts?.noSlug && !opts?.isVersion && !opts?.isDraft && { slug }),
    owner,
    body: customText(opts?.customTextOpts),
    tags: tags(listNamePlural),
    userGroups: userGroups(),

    ...(opts?.primaryAction && {
      primaryAction: relationship({
        ref: 'ExternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
          inlineConnect: true,
          inlineEdit: {
            fields: ['label', 'url'],
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
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
          inlineConnect: true,
          inlineEdit: {
            fields: ['label', 'url'],
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
          displayMode: 'cards',
          cardFields: ['label', 'item'],
          inlineCreate: { fields: ['label', 'selectItem'] },
          inlineEdit: { fields: ['label', 'selectItem'] },
        },
        many: true,
      }),
    }),

    ...(opts?.documents && {
      documents: relationship({
        ref: 'Document',
        many: true,
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
          inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
        },
      }),
    }),

    ...(opts?.address && {
      address: relationship({
        ref: 'Location',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
          inlineCreate: {
            fields: ['title', 'lineOne', 'lineTwo', 'city', 'state', 'zip'],
          },
          inlineEdit: {
            fields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
          },
          inlineConnect: true,
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
        ui: {
          displayMode: 'cards',
          cardFields: ['day', 'open', 'close'],
          inlineCreate: {
            fields: ['day', 'open', 'close'],
          },
          inlineEdit: {
            fields: ['day', 'open', 'close'],
          },
        },
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

      label: 'Hide Side Navigation',
      ui: {
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
