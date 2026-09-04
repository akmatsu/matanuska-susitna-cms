import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { elevatedOperationAccess } from '../../access';
import { relationship, text } from '@keystone-6/core/fields';

export const Redirect = list({
  access: {
    operation: elevatedOperationAccess,
  },
  fields: {
    from: text({
      isIndexed: 'unique',
      ui: {
        label: 'Redirect From Path. E.G. /example/path',
      },
      validation: {
        isRequired: true,
      },
    }),
    to: relationship({
      ref: 'InternalLink',
      ui: {
        displayMode: 'cards',
        cardFields: ['label', 'item'],
        inlineCreate: { fields: ['label', 'selectItem'] },
        inlineEdit: { fields: ['label', 'selectItem'] },
      },
      access: {
        read: { item: allowAll, filter: allowAll, order: allowAll },
      },
    }),
    redirectMessage: text({
      ui: {
        displayMode: 'textarea',
        description:
          'Optional message that will be displayed when redirecting to external resources. Note: The redirect screen is not shown on internal redirects.',
      },
    }),
  },
});
