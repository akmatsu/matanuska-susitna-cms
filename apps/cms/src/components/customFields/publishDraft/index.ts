import { graphql } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
  orderDirectionEnum,
} from '@keystone-6/core/types';

export type PublishDraftFieldMeta = {
  query: string;
  listName: string;
};

export type PublishDraftFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    ui?: PublishDraftFieldMeta;
  };

export function publishDraft<ListTypeInfo extends BaseListTypeInfo>(
  config: PublishDraftFieldConfig<ListTypeInfo> = {},
): FieldTypeFunc<ListTypeInfo> {
  return (meta) => {
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
      views: './src/components/customFields/publishDraft/views',
      getAdminMeta(): PublishDraftFieldMeta {
        return {
          query: config.ui?.query ?? '',
          listName: config.ui?.listName ?? '',
        };
      },
    });
  };
}
