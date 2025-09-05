import { list } from '@keystone-6/core';
import { elevatedOperationAccess, isContentManager } from '../../access';
import { titleAndDescription } from '../../fieldUtils';
import { customText } from '../../../components/customFields/Markdown';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';

const LandingPage = list({
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isContentManager(args)),
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    body: customText(),
  },
});

export default {
  LandingPage,
};
