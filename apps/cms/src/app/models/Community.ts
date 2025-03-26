import { list, ListConfig } from '@keystone-6/core';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
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
import { relationship, text } from '@keystone-6/core/fields';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import {
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from '../../utils/typesense';

/*
TODO: Fields to add
Topics
Department(s)?
Assembly District
  District Rep (bio? contact?)
Related Legislation
Boards
Related District(s)
RSA(s)
FSA(s)
SSA(s)
SPUD(s)
*/

const pluralFieldKey = 'communities';

export const Community: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Community'),
    filter: filterByPubDates,
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    ...publishable,
    liveUrl: liveUrl(pluralFieldKey),
    slug,
    owner,
    mapId: text({
      label: 'Map ID',
      ui: {
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),
    tags: tags(pluralFieldKey),
    userGroups: userGroups(pluralFieldKey),
    contacts: contacts(pluralFieldKey),
    services: services(pluralFieldKey),
    districts: relationship({
      ref: 'AssemblyDistrict',
      many: true,
      ui: {
        hideCreate: true,
        inlineConnect: true,
      },
    }),
    ...timestamps,
  },
  hooks: {
    async beforeOperation({ operation, item, context }) {
      if (operation === 'delete') {
        try {
          await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents(item.id.toString())
            .delete();
        } catch (error) {
          console.error('Error deleting from Typesense index:', error);
        }
      }
    },

    async afterOperation({ operation, item, context }) {
      if (operation === 'create' || operation === 'update') {
        try {
          const service = await context.query.Community.findOne({
            where: { id: item.id.toString() },
            query: `
              id
              title
              slug
              description
              publishAt
              tags {
                name
              }
              districts {
                title
              }
            `,
          });
          const formatted = toSearchableObj(service, 'community');
          await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
            .documents()
            .upsert(formatted);
        } catch (error) {
          console.error('Error updating Typesense index:', error);
        }
      }
    },
  },
});
