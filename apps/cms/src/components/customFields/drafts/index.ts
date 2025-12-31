import { graphql } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
  orderDirectionEnum,
} from '@keystone-6/core/types';

export type DraftFieldMeta = {
  listName: string;
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
        create: { arg: graphql.arg({ type: graphql.String }) },
        update: { arg: graphql.arg({ type: graphql.String }) },
        orderBy: { arg: graphql.arg({ type: orderDirectionEnum }) },
      },
      output: graphql.field({ type: graphql.String }),
      views: config.ui?.views || './src/components/customFields/drafts/views',
      getAdminMeta(): DraftFieldMeta {
        return {
          listName: config.ui?.listName ?? '',
        };
      },
    });
  };
}
