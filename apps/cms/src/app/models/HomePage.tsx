import { group, list, ListConfig } from '@keystone-6/core';
import { timestamps, titleAndDescription, userGroups } from '../fieldUtils';
import { elevatedOperationAccess, isContentManager } from '../access';
import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';
import { relationship } from '@keystone-6/core/fields';

export const HomePage: ListConfig<any> = list({
  isSingleton: true,
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isContentManager(args)),
  },
  fields: {
    heroImage: blueHarvestImage(),
    ...titleAndDescription(),
    ...group({
      label: 'Toolbelt',
      fields: {
        toolbeltOne: relationship({
          ref: 'Highlight',
        }),
        toolbeltTwo: relationship({
          ref: 'Highlight',
        }),
        toolbeltThree: relationship({
          ref: 'Highlight',
        }),
        toolbeltFour: relationship({
          ref: 'Highlight',
        }),
      },
    }),
    ...group({
      label: 'Highlights',
      fields: {
        highlightOne: relationship({
          ref: 'Highlight',
        }),
        highlightTwo: relationship({
          ref: 'Highlight',
        }),
        highlightThree: relationship({
          ref: 'Highlight',
        }),
      },
    }),
    ...timestamps,
  },
});
