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

const listPlural = 'facilities';

export const Facility: ListConfig<any> = list({
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
    park: relationship({ ref: 'Park.facilities', many: false }),
    ...timestamps,
  },
});
