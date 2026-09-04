import { g } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
  orderDirectionEnum,
} from '@keystone-6/core/types';

export type DraftFieldMeta = {
  listName: string;
  query?: string;
};

export type DraftFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    ui?: DraftFieldMeta;
  };

export function createDrafts<ListTypeInfo extends BaseListTypeInfo>(
  config: DraftFieldConfig<ListTypeInfo> = {},
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
      views: config.ui?.views || './src/components/customFields/drafts/views',
      getAdminMeta(): DraftFieldMeta {
        return {
          listName: config.ui?.listName ?? '',
          query: config.ui?.query ?? '',
        };
      },
    });
  };
}
