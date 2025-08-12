import { list, ListConfig } from '@keystone-6/core';
import { elevatedOperationAccess } from '../../access';
import { relationship, text } from '@keystone-6/core/fields';

export const Redirect: ListConfig<any> = list({
  access: {
    operation: elevatedOperationAccess,
  },
  fields: {
    from: text({
      isIndexed: 'unique',
      label: 'Redirect From Path. E.G. /example/path',
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
      isFilterable: true,
      isOrderable: true,
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
