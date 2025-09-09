import { list } from '@keystone-6/core';
import { adminOnlyOperationAccess, isAdmin } from '../../access';
import { integer, text, timestamp } from '@keystone-6/core/fields';

const PageView = list({
  access: {
    operation: adminOnlyOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    pageKey: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
      isOrderable: true,
    }),
    pageId: text({
      validation: { isRequired: true },
      isIndexed: true,
      isFilterable: true,
      isOrderable: true,
    }),
    pageType: text({
      validation: { isRequired: true },
      isIndexed: true,
      isFilterable: true,
      isOrderable: true,
    }),
    date: timestamp({
      validation: { isRequired: true },
      isIndexed: true,
      isFilterable: true,
      isOrderable: true,
    }),
    views: integer({
      validation: { isRequired: true, min: 0 },
      defaultValue: 0,
      isFilterable: true,
      isOrderable: true,
    }),
  },
});

export default {
  PageView,
};
