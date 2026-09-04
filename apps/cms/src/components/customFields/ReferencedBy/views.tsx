import React, { ComponentProps } from 'react';
import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { FieldDescription, FieldLabel } from '@keystar/ui/field';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import Link from 'next/link';

type ReferenceByValue = {
  title: string;
  id: string;
}[];

export function Field({ field, value }: FieldProps<typeof controller>) {
  const val = value as ReferenceByValue;

  return (
    <fieldset className="mb-4">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <ul>
        {val?.map?.((ref) => (
          <li key={ref.id}>
            <Link href={`/services/${ref.id}`}>{ref.title}</Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export const Cell: CellComponent = () => {
  return (
    <CellContainer>
      <p>I AM A CELL</p>
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
): FieldController<any> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: createViewValue,
    deserialize: (data): ReferenceByValue => {
      return data[config.path];
    },
    serialize: () => ({}),
  };
};
