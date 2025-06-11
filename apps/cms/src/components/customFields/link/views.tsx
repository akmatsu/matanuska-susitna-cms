import React, { ComponentProps } from 'react';
import AsyncSelect from 'react-select/async';

import { CellContainer, CellLink } from '@keystone-6/core/admin-ui/components';

import {
  FieldContainer,
  FieldLabel,
  FieldDescription,
} from '@keystone-ui/fields';

import {
  type CardValueComponent,
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
    <FieldContainer as="fieldset">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
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
