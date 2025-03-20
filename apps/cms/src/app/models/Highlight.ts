import { list, ListConfig } from '@keystone-6/core';
import { publishable, timestamps, titleAndDescription } from '../fieldUtils';
import { relationship, text } from '@keystone-6/core/fields';
import { isContentManager } from '../access/roles';
import { elevatedOperationAccess } from '../access';

import { blueHarvestImage } from '../../components/customFields/blueHarvestImage';

export const Highlight: ListConfig<any> = list({
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    isHidden: (args) => !isContentManager(args),
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    title: text({
      validation: {
        isRequired: true,
        length: {
          max: 100,
          min: 2,
        },
      },
      ui: {
        displayMode: 'input',
      },
      isIndexed: 'unique',
    }),
    ...publishable,

    image: blueHarvestImage({
      notBanner: true,
    }),

    message: text({ ui: { displayMode: 'textarea' } }),
    linkedItem: relationship({
      ref: 'InternalLink',
      ui: {
        displayMode: 'cards',
        cardFields: ['label', 'item'],
        inlineCreate: { fields: ['label', 'selectItem'] },
        inlineEdit: { fields: ['label', 'selectItem'] },
      },
    }),
    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    ...timestamps,
  },
});
