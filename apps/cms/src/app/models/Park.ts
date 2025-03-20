import { group, list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import {
  contacts,
  liveUrl,
  owner,
  publishable,
  services,
  slug,
  tags,
  timestamps,
  titleAndDescription,
  userGroups,
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';
import { customText } from '../../components/customFields/Markdown';
import { TYPESENSE_CLIENT, TYPESENSE_COLLECTIONS } from '../../utils/typesense';

const listPlural = 'parks';

export function parkToSearchableObj(item: any) {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    body: item.body,
    slug: item.slug,
    published_at: item.publishAt
      ? Math.floor(new Date(item.publishAt).getTime() / 1000)
      : undefined,
    tags: item.tags.map((tag: { name: string }) => tag.name || ''),
    services: item.services.map(
      (service: { title: string }) => service.title || '',
    ),
    trails: item.trails.map((trail: { title: string }) => trail.title || ''),
    facilities: item.facilities.map(
      (facility: { title: string }) => facility.title || '',
    ),
    type: 'park',
  };
}

export const Park: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Park'),
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    ...publishable,
    liveUrl: liveUrl(listPlural),
    slug,
    owner,
    body: customText(),
    tags: tags(listPlural),
    userGroups: userGroups(listPlural),
    address: relationship({
      ref: 'Location',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
        inlineCreate: {
          fields: ['title', 'lineOne', 'lineTwo', 'city', 'state', 'zip'],
        },
        inlineEdit: { fields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'] },
        inlineConnect: true,
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),
    contacts: contacts(listPlural),
    services: services(listPlural),
    trails: relationship({ ref: 'Trail.park', many: true }),
    facilities: relationship({ ref: 'Facility.park', many: true }),
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
    ...timestamps,
  },
  hooks: {
    beforeOperation: {
      async delete({ item }) {
        try {
          TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents(item.id.toString())
            .delete();
        } catch (e) {
          console.error('Error deleting Typesense document', e);
        }
      },
    },
    async afterOperation({ operation, context, item }) {
      if (operation === 'update' || operation === 'create') {
        try {
          const park = await context.query.Park.findOne({
            where: { id: item.id.toString() },
            query:
              'id title description body slug liveUrl publishAt owner {name} tags {name} services {title} trails {title} facilities {title}',
          });
          const searchableObj = parkToSearchableObj(park);
          await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents()
            .upsert(searchableObj);
        } catch (e: any) {
          console.error('Error updating Typesense document', e);
        }
      }
    },
  },
});
