import { text } from '@keystone-6/core/fields';
import { BaseListTypeInfo, FieldTypeFunc } from '@keystone-6/core/types';

export const timeField = (): FieldTypeFunc<BaseListTypeInfo> =>
  text({
    validation: { length: { max: 5 } }, // Ensures "HH:mm" format
    ui: {
      // Custom UI component for input
      views: './src/components/customFields/timeField/views.tsx',
    },
  });
