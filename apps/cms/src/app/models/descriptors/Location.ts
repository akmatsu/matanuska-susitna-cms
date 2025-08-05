import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess, isAdmin } from '../../access';
import { titleAndDescription } from '../../fieldUtils';
import { select, text } from '@keystone-6/core/fields';

export const Location: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    ...titleAndDescription(),
    lineOne: text({
      validation: {
        isRequired: true,
      },
    }),
    lineTwo: text({}),
    city: text({
      validation: {
        isRequired: true,
      },
    }),
    state: text({
      validation: {
        isRequired: true,
        length: {
          max: 2,
        },
      },
      defaultValue: 'AK',
    }),
    zip: select({
      validation: {
        isRequired: true,
      },
      options: [
        '99586',
        '99588',
        '99623',
        '99629',
        '99645',
        '99652',
        '99654',
        '99667',
        '99674',
        '99676',
        '99683',
        '99687',
        '99688',
        '99694',
        '99729',
      ],
    }),
  },
});
