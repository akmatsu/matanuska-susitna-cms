import {
  type BaseListTypeInfo,
  fieldType,
  type FieldTypeFunc,
  type CommonFieldConfig,
} from '@keystone-6/core/types';
import { g } from '@keystone-6/core';
import type { GArg, GInputObjectType, GList, GNonNull } from '@graphql-ts/schema';

type TextFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | 'unique';
  };

type NestedMyStringFilterType = GInputObjectType<{
  equals: GArg<typeof g.String>;
  in: GArg<GList<GNonNull<typeof g.String>>>;
  notIn: GArg<GList<GNonNull<typeof g.String>>>;
  lt: GArg<typeof g.String>;
  lte: GArg<typeof g.String>;
  gt: GArg<typeof g.String>;
  gte: GArg<typeof g.String>;
  contains: GArg<typeof g.String>;
  startsWith: GArg<typeof g.String>;
  endsWith: GArg<typeof g.String>;
  not: GArg<NestedMyStringFilterType>;
}>;

const NestedMyStringFilter: NestedMyStringFilterType = g.inputObject({
  name: 'NestedMyStringFilter',
  fields: () => ({
    equals: g.arg({ type: g.String }),
    in: g.arg({ type: g.list(g.nonNull(g.String)) }),
    notIn: g.arg({ type: g.list(g.nonNull(g.String)) }),
    lt: g.arg({ type: g.String }),
    lte: g.arg({ type: g.String }),
    gt: g.arg({ type: g.String }),
    gte: g.arg({ type: g.String }),
    contains: g.arg({ type: g.String }),
    startsWith: g.arg({ type: g.String }),
    endsWith: g.arg({ type: g.String }),
    not: g.arg({ type: NestedMyStringFilter }),
  }),
});

const MyQueryMode = g.enum({
  name: 'MyQueryMode',
  values: g.enumValues(['default', 'insensitive']),
});

const MyStringFilter = g.inputObject({
  name: 'MyStringFilter',
  fields: () => ({
    equals: g.arg({ type: g.String }),
    in: g.arg({ type: g.list(g.nonNull(g.String)) }),
    notIn: g.arg({ type: g.list(g.nonNull(g.String)) }),
    lt: g.arg({ type: g.String }),
    lte: g.arg({ type: g.String }),
    gt: g.arg({ type: g.String }),
    gte: g.arg({ type: g.String }),
    contains: g.arg({ type: g.String }),
    startsWith: g.arg({ type: g.String }),
    endsWith: g.arg({ type: g.String }),
    mode: g.arg({ type: MyQueryMode }),
    not: g.arg({ type: NestedMyStringFilter }),
  }),
});

type CommonFilter<T> = {
  equals?: T | null;
  in?: readonly T[] | null;
  notIn?: readonly T[] | null;
  lt?: T | null;
  lte?: T | null;
  gt?: T | null;
  gte?: T | null;
  contains?: T | null;
  startsWith?: T | null;
  endsWith?: T | null;
  not?: CommonFilter<T> | null;
};

type EntriesAssumingNoExtraProps<T> = {
  [Key in keyof T]-?: [Key, T[Key]];
}[keyof T][];

const objectEntriesButAssumeNoExtraProperties: <T>(
  obj: T,
) => EntriesAssumingNoExtraProps<T> = Object.entries as any;

function internalResolveFilter(
  entries: EntriesAssumingNoExtraProps<CommonFilter<any>>,
  mode: 'default' | 'insensitive' | undefined,
): object {
  const entry = entries.shift();
  if (entry === undefined) return {};
  const [key, val] = entry;
  if (val == null) {
    return {
      AND: [{ [key]: val }, internalResolveFilter(entries, mode)],
    };
  }
  switch (key) {
    case 'equals':
    case 'lt':
    case 'lte':
    case 'gt':
    case 'gte':
    case 'in':
    case 'contains':
    case 'startsWith':
    case 'endsWith': {
      return {
        AND: [
          { [key]: val, mode },
          { not: null },
          internalResolveFilter(entries, mode),
        ],
      };
    }

    case 'notIn': {
      return {
        AND: [
          {
            NOT: [
              internalResolveFilter(
                objectEntriesButAssumeNoExtraProperties({ in: val }),
                mode,
              ),
            ],
          },
          internalResolveFilter(entries, mode),
        ],
      };
    }
    case 'not': {
      return {
        AND: [
          {
            NOT: [
              internalResolveFilter(
                objectEntriesButAssumeNoExtraProperties(val),
                mode,
              ),
            ],
          },
          internalResolveFilter(entries, mode),
        ],
      };
    }
  }
}

function resolveString(
  val:
    | (CommonFilter<string> & { mode?: 'default' | 'insensitive' | null })
    | null,
) {
  if (val === null) return null;
  const { mode, ...value } = val;
  return internalResolveFilter(
    objectEntriesButAssumeNoExtraProperties(value),
    mode ?? undefined,
  );
}

const MyOrderDirectionEnum = g.enum({
  name: 'MyOrderDirection',
  values: g.enumValues(['asc', 'desc']),
});

export type CustomTextOpts<ListTypeInfo extends BaseListTypeInfo> =
  TextFieldConfig<ListTypeInfo>;

export function customText<ListTypeInfo extends BaseListTypeInfo>({
  isIndexed,
  ...config
}: CustomTextOpts<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> {
  return () =>
    fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'String',
      index: isIndexed === true ? 'index' : isIndexed || undefined,
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
        orderBy: { arg: g.arg({ type: MyOrderDirectionEnum }) },
        where: {
          arg: g.arg({
            type: MyStringFilter,
          }),
          resolve: resolveString,
        },
      },
      output: g.field({
        type: g.String,
        resolve({ value }) {
          return value;
        },
      }),
      views: './src/components/customFields/Markdown/views.tsx',
      getAdminMeta() {
        return {};
      },
    });
}
