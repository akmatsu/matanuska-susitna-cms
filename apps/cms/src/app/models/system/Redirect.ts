import { list } from '@keystone-6/core';
import { filterByPubStatus, generalOperationAccess } from '../../access';
import { relationship, text } from '@keystone-6/core/fields';

export const Redirect = list({
  access: {
    operation: generalOperationAccess,
    filter: filterByPubStatus,
  },
  fields: {
    from: text({
      label: 'Redirect From Path',
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
    }),
  },
});
