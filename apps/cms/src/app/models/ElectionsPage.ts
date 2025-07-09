import { list } from '@keystone-6/core';
import { generalOperationAccess } from '../access';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { timestamps, titleAndDescription } from '../fieldUtils';
import { customText } from '../../components/customFields/Markdown';

export const ElectionsPage = list({
  access: {
    operation: generalOperationAccess,
  },
  isSingleton: true,
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    howElectionsWork: customText(),

    ...timestamps,
  },
});
