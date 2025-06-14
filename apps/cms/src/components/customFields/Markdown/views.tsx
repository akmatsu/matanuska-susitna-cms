import React, { ComponentProps } from 'react';
import { Suspense } from 'react';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
} from '@keystone-ui/fields';
import { CellLink, CellContainer } from '@keystone-6/core/admin-ui/components';

import {
  type CardValueComponent,
  type CellComponent,
  type FieldController,
  type FieldControllerConfig,
  type FieldProps,
} from '@keystone-6/core/types';
import { RichEditor } from '../../RichEditor';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  return (
    <FieldContainer as="fieldset">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div>
        <Suspense fallback={<div>Loading editor...</div>}>
          <RichEditor initialValue={value || ''} onChange={onChange} />
        </Suspense>
      </div>
    </FieldContainer>
  );
}

export const Cell: CellComponent = ({
  item,
  field,
  linkTo,
}: ComponentProps<CellComponent>) => {
  const value = item[field.path] + '';
  return linkTo ? (
    <CellLink {...linkTo}>{value}</CellLink>
  ) : (
    <CellContainer>{value}</CellContainer>
  );
};
Cell.supportsLinkTo = true;

export const CardValue: CardValueComponent = ({
  item,
  field,
}: ComponentProps<CardValueComponent>) => {
  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      {item[field.path]}
    </FieldContainer>
  );
};

export const controller = (
  config: FieldControllerConfig<any>,
): FieldController<string | null, string> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: null,
    deserialize: (data) => {
      const value = data[config.path];
      return typeof value === 'string' ? value : null;
    },
    serialize: (value) => ({ [config.path]: value }),
  };
};
