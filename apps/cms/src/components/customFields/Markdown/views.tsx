import React, { ComponentProps } from 'react';
import { Suspense } from 'react';
import { FieldDescription, FieldLabel } from '@keystar/ui/field';
import { CellContainer } from '@keystone-6/core/admin-ui/components';

import {
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
    <fieldset className="mb-4">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.fieldKey}-description`}>
        {field.description}
      </FieldDescription>
      <div>
        <Suspense fallback={<div>Loading editor...</div>}>
          <RichEditor initialValue={value || ''} onChange={onChange} />
        </Suspense>
      </div>
    </fieldset>
  );
}

export const Cell: CellComponent = ({
  item,
  field,
}: ComponentProps<CellComponent>) => {
  const value = item[field.fieldKey] + '';
  return <CellContainer>{value}</CellContainer>;
};

export const controller = (
  config: FieldControllerConfig<any>,
): FieldController<string | null, string> => {
  return {
    fieldKey: config.fieldKey,
    label: config.label,
    description: config.description,
    graphqlSelection: config.fieldKey,
    defaultValue: null,
    deserialize: (data) => {
      const value = data[config.fieldKey];
      return typeof value === 'string' ? value : null;
    },
    serialize: (value) => ({ [config.fieldKey]: value }),
  };
};
