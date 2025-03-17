import { list, ListConfig } from '@keystone-6/core';
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

const listPlural = 'facilities';

export function facilityToSearchableObj(item: any) {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    body: item.body,
    slug: item.slug,
    published_at: item.publishAt
      ? Math.floor(new Date(item.publishAt).getTime() / 1000)
      : undefined,
    tags: item.tags?.map((tag: { name: string }) => tag.name || ''),
    type: 'facility',
  };
}

export const Facility: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess,
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
        cardFields: ['title', 'lineOne', 'lineTwo', 'city', 'state', 'zip'],
        inlineCreate: {
          fields: ['title', 'lineOne', 'lineTwo', 'city', 'state', 'zip'],
        },
        inlineConnect: true,
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),
    contacts: contacts(listPlural),
    services: services(listPlural),
    park: relationship({ ref: 'Park.facilities', many: false }),
    hours: relationship({ ref: 'OperatingHour', many: true }),
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
          console.error('Error deleting from Typesense', e);
        }
      },
    },
    async afterOperation({ operation, item, context }) {
      if (operation === 'update' || operation === 'create') {
        const trail = await context.query.Facility.findOne({
          where: { id: item.id.toString() },
          query:
            'id title description body slug liveUrl publishAt tags {name} owner {name} services {title}',
        });
        try {
          await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents()
            .upsert(facilityToSearchableObj(item));
        } catch (e) {
          console.error('Error upserting to Typesense', e);
        }
      }
    },
  },
});
