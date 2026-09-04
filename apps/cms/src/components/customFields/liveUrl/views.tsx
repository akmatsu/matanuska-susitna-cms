'use client';
import {
  CardValueComponent,
  CellComponent,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { FieldDescription, FieldLabel } from '@keystar/ui/field';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LiveUrlValue = string;

export function Field({ field, value }: FieldProps<typeof controller>) {
  if (value?.length && typeof value === 'string')
    return (
      <div className="mb-4">
        <FieldLabel>{field.label}</FieldLabel>
        <FieldDescription id={`${field.path}-description`}>
          {field.description}
        </FieldDescription>
        <Link href={value} target="_blank">
          {value}
        </Link>
      </div>
    );
}

export const Cell: CellComponent = ({
  item,
}: ComponentProps<CellComponent>) => {
  return (
    <CellContainer>
      <Link href={item.liveUrl}>{item.liveUrl}</Link>
    </CellContainer>
  );
};

export const CardValue: CardValueComponent = ({
  field,
}: ComponentProps<CardValueComponent>) => {
  return (
    <div className="mb-4">
      <FieldLabel>{field.label}</FieldLabel>
      <p>I AM THE CARD YAYAYAY</p>
    </div>
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
