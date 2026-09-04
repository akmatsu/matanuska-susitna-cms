import { g } from '@keystone-6/core';
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

const BlueHarvestImageOrderDirectionEnum = g.enum({
  name: 'BlueHarvestImageOrderDirection',
  values: g.enumValues(['asc', 'desc']),
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
          arg: g.arg({ type: g.String }),
          resolve(value) {
            return value;
          },
        },
        update: {
          arg: g.arg({ type: g.String }),
        },
        orderBy: {
          arg: g.arg({ type: BlueHarvestImageOrderDirectionEnum }),
        },
      },
      output: g.field({
        type: g.String,
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
