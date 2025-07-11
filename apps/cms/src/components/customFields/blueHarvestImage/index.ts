import { graphql } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
} from '@keystone-6/core/types';

export type BlueHarvestImageConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    notBanner?: boolean;
  };

const BlueHarvestImageOrderDirectionEnum = graphql.enum({
  name: 'BlueHarvestImageOrderDirection',
  values: graphql.enumValues(['asc', 'desc']),
});

export function blueHarvestImage<ListTypeInfo extends BaseListTypeInfo>({
  notBanner,
  ...config
}: BlueHarvestImageConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> {
  return () =>
    fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'String',
    })({
      ...config,
      ui: {
        ...config.ui,
        listView: {
          fieldMode: 'hidden',
        },
      },
      input: {
        create: {
          arg: graphql.arg({ type: graphql.String }),
          resolve(value) {
            return value;
          },
        },
        update: {
          arg: graphql.arg({ type: graphql.String }),
        },
        orderBy: {
          arg: graphql.arg({ type: BlueHarvestImageOrderDirectionEnum }),
        },
      },
      output: graphql.field({
        type: graphql.String,
        resolve({ value }) {
          return value;
        },
      }),
      views: './src/components/customFields/blueHarvestImage/views.tsx',

      getAdminMeta() {
        return {
          ...(notBanner && { notBanner }),
        };
      },
    });
}
