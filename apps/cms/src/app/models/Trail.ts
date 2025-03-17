import { group, list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
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
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { checkbox, relationship, select, text } from '@keystone-6/core/fields';
import { customText } from '../../components/customFields/Markdown';
import { TYPESENSE_CLIENT, TYPESENSE_COLLECTIONS } from '../../utils/typesense';

const listPlural = 'trails';

export function trailToSearchableObj(item: any) {
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
    type: 'trail',
  };
}

export const Trail: ListConfig<any> = list({
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
    open: checkbox({ defaultValue: false }),
    ...group({
      label: 'Seasons',
      fields: {
        summer: checkbox({ defaultValue: false }),
        fall: checkbox({ defaultValue: false }),
        winter: checkbox({ defaultValue: false }),
        spring: checkbox({ defaultValue: false }),
      },
    }),
    ...group({
      label: 'Uses',
      fields: {
        hiking: checkbox({ defaultValue: false }),
        biking: checkbox({ defaultValue: false }),
        horsebackRiding: checkbox({ defaultValue: false }),
        crossCountrySkiing: checkbox({ defaultValue: false }),
        snowshoeing: checkbox({ defaultValue: false }),
        frisbeeGolf: checkbox({ defaultValue: false }),
        dogWalking: checkbox({ defaultValue: false }),
        running: checkbox({ defaultValue: false }),
        snowMachining: checkbox({ defaultValue: false }),
        atv: checkbox({ defaultValue: false }),
        dirtBiking: checkbox({ defaultValue: false }),
        mushing: checkbox({ defaultValue: false }),
      },
    }),
    difficulty: select({
      options: ['Easy', 'Moderate', 'Difficult', 'Extreme'],
    }),
    length: text(),
    elevationChange: text(),
    groomed: checkbox({ defaultValue: false }),
    contacts: contacts(listPlural),
    services: services(listPlural),
    park: relationship({ ref: 'Park.trails', many: false }),
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
          const trail = await context.query.Trail.findOne({
            where: { id: item.id.toString() },
            query:
              'id title description body slug liveUrl publishAt owner {name} tags {name} services {title}',
          });
          const searchableObj = trailToSearchableObj(trail);
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
