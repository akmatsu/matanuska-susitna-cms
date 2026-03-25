import { graphql } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  CommonFieldConfig,
  fieldType,
  FieldTypeFunc,
} from '@keystone-6/core/types';

export type ExcelUploadConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    sheetName?: string;
  };

export function excelUpload<ListTypeInfo extends BaseListTypeInfo>({
  sheetName,
  ...config
}: ExcelUploadConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> {
  return () =>
    fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'Json',
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
          arg: graphql.arg({ type: graphql.JSON }),
          resolve(value) {
            return value;
          },
        },
        update: {
          arg: graphql.arg({ type: graphql.JSON }),
        },
      },
      output: graphql.field({
        type: graphql.JSON,
        resolve({ value }) {
          return value;
        },
      }),
      views: './src/components/customFields/excelUpload/views.tsx',

      getAdminMeta() {
        return {
          ...(sheetName && { sheetName }),
        };
      },
    });
}
