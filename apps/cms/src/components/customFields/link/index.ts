import { g } from '@keystone-6/core';
import {
  BaseFieldTypeInfo,
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
} from '@keystone-6/core/types';

type LinkFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo, BaseFieldTypeInfo> & {
    isIndex?: boolean | 'unique';
  };

const LinkOrderDirectionEnum = g.enum({
  name: 'LinkOrderDirection',
  values: g.enumValues(['asc', 'desc']),
});

export function linkField<ListTypeInfo extends BaseListTypeInfo>({
  isIndex,
  ...config
}: LinkFieldConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> {
  return () =>
    fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'String',
      index: isIndex === true ? 'index' : isIndex || undefined,
    })({
      ...config,
      input: {
        create: {
          arg: g.arg({ type: g.String }),
          resolve(value) {
            return value;
          },
        },
        update: { arg: g.arg({ type: g.String }) },
        orderBy: { arg: g.arg({ type: LinkOrderDirectionEnum }) },
      },
      output: g.field({
        type: g.String,
        resolve({ value }) {
          return value;
        },
      }),
      views: './src/components/customFields/link/views.tsx',
      getAdminMeta() {
        return {};
      },
    });
}
