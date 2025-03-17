import { group, list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import {
  contacts,
  liveUrl,
  owner,
  services,
  slug,
  tags,
  timestamps,
  titleAndDescription,
} from '../fieldUtils';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { checkbox, relationship, select, text } from '@keystone-6/core/fields';
import { customText } from '../../components/customFields/Markdown';

const listPlural = 'trails';

export const Trail: ListConfig<any> = list({
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
});
