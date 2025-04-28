import { list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import { basePage, timestamps, titleAndDescription } from '../fieldUtils';
import { select, timestamp } from '@keystone-6/core/fields';

const listPlural = 'testModels';

export const TestModel: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  fields: {
    ...basePage(listPlural),
    status: select({
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
  },
});
