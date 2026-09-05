import { g } from '@keystone-6/core';
import {
  BaseFieldTypeInfo,
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
  orderDirectionEnum,
} from '@keystone-6/core/types';

export type PublishDraftFieldMeta = {
  listName: string;
  query?: string;
};

export type PublishDraftFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo, BaseFieldTypeInfo> & {
    ui?: PublishDraftFieldMeta;
  };

export function publishDraft<ListTypeInfo extends BaseListTypeInfo>(
  config: PublishDraftFieldConfig<ListTypeInfo> = {},
): FieldTypeFunc<ListTypeInfo> {
  return () => {
    return fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'String',
    })({
      ...config,
      input: {
        create: { arg: g.arg({ type: g.String }) },
        update: { arg: g.arg({ type: g.String }) },
        orderBy: { arg: g.arg({ type: orderDirectionEnum }) },
      },
      output: g.field({ type: g.String }),
      views:
        config.ui?.views || './src/components/customFields/publishDraft/views',
      getAdminMeta(): PublishDraftFieldMeta {
        return {
          listName: config.ui?.listName ?? '',
          query: config.ui?.query ?? '',
        };
      },
    });
  };
}
