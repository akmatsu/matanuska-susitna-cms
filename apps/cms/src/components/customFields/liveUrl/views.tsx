'use client';
import {
  CellComponent,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';

import { Field as KeystarField } from '@keystar/ui/field';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LiveUrlValue = string;

export function Field({ field, value }: FieldProps<typeof controller>) {
  if (value?.length && typeof value === 'string')
    return (
      <KeystarField label={field.label} description={field.description}>
        {() => (
          <Link href={value} target="_blank">
            {value}
          </Link>
        )}
      </KeystarField>
    );
}

export const Cell: CellComponent = ({
  item,
}: ComponentProps<CellComponent>) => {
  return (
    <CellContainer>
      <Link href={item.liveUrl as string}>{item.liveUrl as string}</Link>
    </CellContainer>
  );
};

const createViewValue = Symbol('create view virtual field value');

export const controller = (
  config: FieldControllerConfig<{ query: string }>,
) => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: createViewValue,
    deserialize: (data: any): LiveUrlValue => {
      return data[config.path];
    },
    serialize: () => ({}),
  };
};
