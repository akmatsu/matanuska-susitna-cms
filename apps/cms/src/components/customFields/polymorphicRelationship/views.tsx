'use client';
import React from 'react';
import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';

type PolymorphicValue = {
  itemType?: { label: string; value: string } | null;
  itemId?: { label: string; value: string } | null;
};

import {
  FieldContainer,
  FieldLabel,
  FieldDescription,
  Select,
} from '@keystone-ui/fields';
import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';
import pluralize from 'pluralize';
import { capitalizeFirstLetter, toPascalCase } from '../../../utils';

type AvailableType = {
  value: string;
  label: string;
};

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const plural = pluralize(value?.itemType?.value || 'services');

  const { data } = useQuery(
    gql`
      query Get${capitalizeFirstLetter(plural)}($where: ${value?.itemType?.label ? toPascalCase(value.itemType.label) : ''}WhereInput!) {
        ${plural}(where: $where) {
          title
          id
        }
      }
    `,
    {
      variables: {
        where: {
          title: {
            contains: value?.itemId || '',
            mode: 'insensitive',
          },
        },
      },
      skip: !value?.itemType?.value,
    },
  );

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div>
        <Select
          value={value?.itemType || null}
          placeholder="Select a type..."
          options={field.availableTypes}
          onChange={(item) => {
            onChange?.({
              itemType: item,
              itemId: null,
            });
          }}
        ></Select>
      </div>
      {value && value?.itemType && (
        <Select
          value={value?.itemId || null}
          options={data?.[plural].map((i: { title: string; id: string }) => ({
            label: i.title,
            value: i.id,
          }))}
          onChange={(item) => {
            onChange?.({
              itemType: value?.itemType,
              itemId: item,
            });
          }}
        ></Select>
      )}
    </FieldContainer>
  );
}

export const controller = (
  config: FieldControllerConfig<{}>,
): FieldController<PolymorphicValue | null, string> & {
  availableTypes: AvailableType[];
} => {
  return {
    availableTypes: [
      { value: 'service', label: 'Service' },
      { value: 'park', label: 'Park' },
      { value: 'trail', label: 'Trail' },
      { value: 'facility', label: 'Facility' },
      { value: 'community', label: 'Community' },
      { value: 'assemblyDistrict', label: 'Assembly District' },
      { value: 'orgUnit', label: 'Org Unit' },
      { value: 'url', label: 'Url' },
    ],
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}`,
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
