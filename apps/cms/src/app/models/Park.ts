import { group, list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import {
  contacts,
  liveUrl,
  owner,
  services,
  slug,
  tags,
  timestamps,
  titleAndDescription,
  userGroups,
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';
import { customText } from '../../components/customFields/Markdown';

const listPlural = 'parks';

export const Park: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess,
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
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
});
