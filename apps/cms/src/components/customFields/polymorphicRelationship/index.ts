import { json } from '@keystone-6/core/fields';
import {
  BaseFieldTypeInfo,
  BaseListTypeInfo,
  CommonFieldConfig,
  FieldTypeFunc,
} from '@keystone-6/core/types';

export function polymorphicRelationship<ListTypeInfo extends BaseListTypeInfo>(
  config: CommonFieldConfig<ListTypeInfo, BaseFieldTypeInfo> = {},
): FieldTypeFunc<ListTypeInfo> {
  return json({
    ...config,
    ui: {
      ...config.ui,
      views: './src/components/customFields/polymorphicRelationship/views',
    },
  });
}
