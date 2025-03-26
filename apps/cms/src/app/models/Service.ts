import { group, list, ListConfig } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import {
  liveUrl,
  owner,
  publishable,
  slug,
  tags,
  timestamps,
  titleAndDescription,
  urlRegex,
  userGroups,
} from '../fieldUtils';
import { customText } from '../../components/customFields/Markdown';

import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access/utils';
import {
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
  TypeSensePageDocument,
} from '../../utils/typesense';

export function serviceToSearchableObj(item: any): TypeSensePageDocument {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    body: item.body,
    slug: item.slug,
    action_label: item.actionLabel,
    published_at: item.publishAt
      ? Math.floor(new Date(item.publishAt).getTime() / 1000)
      : undefined,
    tags: item.tags.map((tag: { name: string }) => tag.name || ''),
    type: 'service',
  };
}

export const Service: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Service'),
    filter: filterByPubDates,
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    ...titleAndDescription(),
    ...publishable,
    liveUrl: liveUrl('services'),
    slug,
    owner,
    body: customText(),

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

    ...group({
      label: 'Primary Action',
      description:
        'Deprecated, made readonly for now. Will be removed eventually.',
      fields: {
        actionLabel: text({
          validation: {
            length: {
              max: 100,
            },
          },
          db: {
            isNullable: true,
          },
          ui: {
            itemView: {
              fieldPosition: 'sidebar',
              fieldMode: 'read',
            },
            createView: {
              fieldMode: 'hidden',
            },
          },
        }),

        actionUrl: text({
          validation: {
            match: {
              regex: urlRegex,
            },
          },
          db: {
            isNullable: true,
          },
          ui: {
            itemView: {
              fieldPosition: 'sidebar',
              fieldMode: 'read',
            },
            createView: {
              fieldMode: 'hidden',
            },
          },
        }),
      },
    }),

    tags: tags('services'),
    userGroups: userGroups('services'),
    primaryContact: relationship({
      ref: 'Contact.primaryServices',
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),

    contacts: relationship({
      ref: 'Contact.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),

    communities: relationship({
      ref: 'Community.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        hideCreate: true,
      },
    }),

    orgUnits: relationship({
      ref: 'OrgUnit.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),

    trails: relationship({
      ref: 'Trail.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),
    parks: relationship({
      ref: 'Park.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),
    facilities: relationship({
      ref: 'Facility.services',
      many: true,
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
        createView: {
          fieldMode: 'hidden',
        },
        hideCreate: true,
      },
    }),

    ...timestamps,
    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
  hooks: {
    async beforeOperation({ operation, context, item }) {
      if (operation === 'delete') {
        try {
          TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents(item.id.toString())
            .delete();
        } catch (error: any) {
          console.error('Error deleting Typesense document', error);
        }
      }
    },

    async afterOperation({ operation, context, item }) {
      if (operation === 'update' || operation === 'create') {
        try {
          const service = await context.query.Service.findOne({
            where: { id: item.id.toString() },
            query:
              'id title description body slug owner {name} actionLabel publishAt tags {name} districts {title} orgUnits {title} communities {title}',
          });

          const document = toSearchableObj(service, 'service');

          await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents()
            .upsert(document);
        } catch (error: any) {
          console.error('Error updating Typesense document:', error);
        }
      }
    },
  },
});
