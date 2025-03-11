import { list, ListConfig } from '@keystone-6/core';
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
import { relationship } from '@keystone-6/core/fields';

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
    tags: tags(listPlural),
    contacts: contacts(listPlural),
    services: services(listPlural),
    park: relationship({ ref: 'Park.trails', many: false }),
    ...timestamps,
  },
});
