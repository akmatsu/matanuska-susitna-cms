import { list, ListConfig } from '@keystone-6/core';
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
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';

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
    tags: tags(listPlural),
    contacts: contacts(listPlural),
    services: services(listPlural),
    trails: relationship({ ref: 'Trail.park', many: true }),
    facilities: relationship({ ref: 'Facility.park', many: true }),
    ...timestamps,
  },
});
