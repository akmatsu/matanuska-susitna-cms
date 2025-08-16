import { group, list } from '@keystone-6/core';
import { timestamps, titleAndDescription } from '../../fieldUtils';
import { elevatedOperationAccess, isContentManager } from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';
import { relationship } from '@keystone-6/core/fields';

const HomePage = list({
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
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        toolbeltTwo: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        toolbeltThree: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        toolbeltFour: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
      },
    }),
    ...group({
      label: 'Highlights',
      fields: {
        highlightOne: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        highlightTwo: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
        highlightThree: relationship({
          ref: 'Highlight',
          ui: {
            displayMode: 'cards',
            cardFields: ['title', 'image', 'message', 'linkedItem'],
            inlineConnect: false,
            inlineCreate: {
              fields: ['title', 'image', 'message', 'linkedItem'],
            },
          },
        }),
      },
    }),
    ...timestamps,
  },
});

export default HomePage;
