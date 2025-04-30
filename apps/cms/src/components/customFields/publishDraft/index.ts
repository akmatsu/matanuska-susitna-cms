import { json } from '@keystone-6/core/fields';
import {
  BaseListTypeInfo,
  CommonFieldConfig,
  FieldTypeFunc,
} from '@keystone-6/core/types';

export type PublishDraftFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    query?: string;
  };

export function publishDraft<ListTypeInfo extends BaseListTypeInfo>({
  ui,
  query,
  ...config
}: PublishDraftFieldConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> {
  return json({
    ...config,
    ui: {
      ...ui,
      views: './src/components/customFields/publishDraft/views',
    },
  });
}
