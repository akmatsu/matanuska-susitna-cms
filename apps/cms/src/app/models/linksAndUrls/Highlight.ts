import { list } from '@keystone-6/core';
import { timestamps } from '../../fieldUtils';
import { relationship, text } from '@keystone-6/core/fields';
import { isContentManager } from '../../access/roles';
import { elevatedOperationAccess } from '../../access';
import { blueHarvestImage } from '../../../components/customFields/blueHarvestImage';

export const Highlight = list({
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    hideCreate: true,
    isHidden: async (args) => !(await isContentManager(args)),
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
