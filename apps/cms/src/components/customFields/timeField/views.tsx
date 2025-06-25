import React, { ComponentProps } from 'react';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import { Field as KeystarField } from '@keystar/ui/field';
import {
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  return (
    <KeystarField label={field.label} description={field.description}>
      {() => (
        <input
          type="time"
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}
    </KeystarField>
  );
}

export const Cell: CellComponent = ({
  item,
  field,
}: ComponentProps<CellComponent>) => {
  const value = item[field.path] + '';

  return <CellContainer>{value}</CellContainer>;
};

export const controller = (
  config: FieldControllerConfig<any>,
): FieldController<string | null, string> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: (data) => data[config.path] || '',
    serialize: (data) => ({ [config.path]: data }),
  };
};
