import React from 'react';
import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';

type PolymorphicValue = {
  itemType?: string | null;
  itemId?: string | null;
};

type AvailableType = {
  value: string;
  label: string;
};

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  return (
    <div>
      <div>{field.label}</div>
      <div>{field.description}</div>
      <div>
        <select
          value={value?.itemType || ''}
          onChange={(event) => {
            onChange?.({
              itemType: event.target.value,
              itemId: null,
            });
          }}
        >
          <option value="">Select a type</option>
          {field.availableTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {value?.itemType ? (
          <input
            value={value.itemId || ''}
            onChange={(event) => {
              onChange?.({
                itemType: value.itemType,
                itemId: event.target.value,
              });
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export const controller = (
  config: FieldControllerConfig<{ availableTypes: AvailableType[] }>,
): FieldController<PolymorphicValue | null, string> & {
  availableTypes: AvailableType[];
} => {
  return {
    availableTypes: config.fieldMeta?.availableTypes,
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path} {
      itemType
      itemId
    }`,
    defaultValue: null,
    deserialize: (data: any) => {
      const value = data[config.path];
      return typeof value === 'object' ? value : null;
    },
    serialize: (value) => {
      return { [config.path]: value };
    },
  };
};
