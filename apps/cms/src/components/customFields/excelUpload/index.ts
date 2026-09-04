import { g } from '@keystone-6/core';
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
          arg: g.arg({ type: g.JSON }),
          resolve(value) {
            return value;
          },
        },
        update: {
          arg: g.arg({ type: g.JSON }),
        },
      },
      output: g.field({
        type: g.JSON,
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
