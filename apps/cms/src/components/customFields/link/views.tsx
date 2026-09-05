import React, { ComponentProps } from 'react';
import AsyncSelect from 'react-select/async';

import { CellContainer } from '@keystone-6/core/admin-ui/components';

import { FieldLabel, FieldDescription } from '@keystar/ui/field';

import {
  type CellComponent,
  type FieldController,
  type FieldControllerConfig,
  type FieldProps,
} from '@keystone-6/core/types';

import {
  gql,
  TypedDocumentNode,
  useQuery,
} from '@keystone-6/core/admin-ui/apollo';
import { StylesConfig } from 'react-select';
import {
  QueryMode,
  type GetServicesQuery,
  type GetServicesQueryVariables,
} from '../../../graphql/graphql';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const query: TypedDocumentNode<GetServicesQuery, GetServicesQueryVariables> =
    gql`
      query GetServices($where: ServiceWhereInput!) {
        services(where: $where) {
          title
          slug
          id
        }
      }
    `;

  const { data, refetch } = useQuery(query, {
    variables: {
      where: {
        title: {
          contains: value || '',
          mode: QueryMode.Insensitive,
        },
      },
    },
  });

  async function handleChange(newValue: string) {
    await refetch({
      where: {
        title: {
          contains: newValue || '',
          mode: QueryMode.Insensitive,
        },
      },
    });

    return (
      data?.services?.map((service: any) => {
        return {
          label: service.title,
          value: `/service/${service.slug}`,
        };
      }) ?? []
    );
  }

  type Option = { label: string | null; value: string | null };

  const styles: StylesConfig<Option | undefined, false> = {
    menu(base) {
      return {
        ...base,
        zIndex: 100,
      };
    },
  };

  return (
    <fieldset className="mb-4">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.fieldKey}-description`}>
        {field.description}
      </FieldDescription>
      <AsyncSelect<Option | undefined>
        loadOptions={handleChange}
        defaultOptions
        defaultValue={{ label: value, value }}
        onChange={(newValue) => {
          onChange?.(newValue?.value || null);
        }}
        isClearable
        styles={styles}
      />
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
