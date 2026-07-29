'use client';

import { CellContainer, CellLink } from '@keystone-6/core/admin-ui/components';
import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Fragment, useEffect, useState } from 'react';
import { Text } from '@keystone-ui/core';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
  MultiSelect,
  Select,
} from '@keystone-ui/fields';
import { GovDeliveryTopic } from '../../../utils/govDelivery';

async function fetchGovDeliveryOptions(): Promise<Option[]> {
  const res = await fetch('/api/emails/topics');
  if (!res.ok) {
    throw new Error('Failed to fetch options');
  }

  const data = (await res.json()) as { topics: GovDeliveryTopic[] };

  return data.topics.reduce(
    (options: Option[], topic) => {
      options.push({
        label: topic.name,
        value: topic.code,
      });
      return options;
    },
    [{ label: 'None', value: 'none' }],
  );
}

export const Field = ({
  field,
  value,
  onChange,
  autoFocus,
  forceValidation,
}: FieldProps<typeof controller>) => {
  const [hasChanged, setHasChanged] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    fetchGovDeliveryOptions()
      .then((nextOptions) => {
        if (!mounted) return;
        setOptions(nextOptions);
        setLoadError(null);
      })
      .catch((error: Error) => {
        if (!mounted) return;
        setLoadError(error.message);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const validationMessage =
    (hasChanged || forceValidation) && !validate(value, field.isRequired) ? (
      <Text color="red600" size="small">
        {field.label} is required
      </Text>
    ) : null;
  return (
    <FieldContainer>
      <Fragment>
        <FieldLabel htmlFor={field.path}>{field.label}</FieldLabel>
        <FieldDescription id={`${field.path}-description`}>
          {field.description}
        </FieldDescription>
        <Select
          id={field.path}
          isClearable
          autoFocus={autoFocus}
          options={options}
          isDisabled={onChange === undefined}
          onChange={(newVal) => {
            onChange?.({ ...value, value: newVal });
            setHasChanged(true);
          }}
          value={value.value}
          aria-describedby={
            field.description === null ? undefined : `${field.path}-description`
          }
          portalMenu
        />
        {loadError ? (
          <Text color="red600" size="small">
            {loadError}
          </Text>
        ) : null}
        {validationMessage}
      </Fragment>
    </FieldContainer>
  );
};

export const Cell: CellComponent<typeof controller> = ({
  item,
  field,
  linkTo,
}) => {
  const value = item[field.path] + '';

  return linkTo ? (
    <CellLink {...linkTo}>{value}</CellLink>
  ) : (
    <CellContainer>{value}</CellContainer>
  );
};
Cell.supportsLinkTo = true;

export const CardValue: CardValueComponent<typeof controller> = ({
  item,
  field,
}) => {
  const value = item[field.path] + '';

  return (
    <FieldContainer>
      <FieldLabel>{value}</FieldLabel>
      {value}
    </FieldContainer>
  );
};

export type AdminTextFieldMeta = {
  isRequired: boolean;
  defaultValue: string;
};

type Config = FieldControllerConfig<AdminTextFieldMeta>;

type Option = { label: string; value: string };

type Value =
  | { value: Option | null; kind: 'create' }
  | { value: Option | null; initial: Option | null; kind: 'update' };

function validate(value: Value, isRequired: boolean) {
  if (isRequired) {
    // if you got null initially on the update screen, we want to allow saving
    // since the user probably doesn't have read access control
    if (value.kind === 'update' && value.initial === null) {
      return true;
    }
    return value.value !== null;
  }
  return true;
}

export const controller = (
  config: Config,
): FieldController<Value, Option[]> & {
  isRequired: boolean;
} => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: {
      kind: 'create',
      value: { label: 'None', value: 'none' },
    },
    isRequired: config.fieldMeta.isRequired,

    deserialize: (data) => {
      const stringValue = data[config.path] as string | null;
      if (stringValue !== null && stringValue !== undefined) {
        const selectedOption = {
          label: stringValue,
          value: stringValue,
        };
        return {
          kind: 'update',
          initial: selectedOption,
          value: selectedOption,
        };
      }

      return {
        kind: 'update',
        initial: { label: 'None', value: 'none' },
        value: { label: 'None', value: 'none' },
      };
    },
    serialize: (value) => ({ [config.path]: value.value?.value ?? null }),
    validate: (value) => validate(value, config.fieldMeta.isRequired),
    filter: {
      Filter(props) {
        const [options, setOptions] = useState<Option[]>([]);

        useEffect(() => {
          let mounted = true;

          fetchGovDeliveryOptions()
            .then((nextOptions) => {
              if (!mounted) return;
              setOptions(nextOptions);
            })
            .catch(() => {
              if (!mounted) return;
              setOptions([]);
            });

          return () => {
            mounted = false;
          };
        }, []);

        return (
          <MultiSelect
            onChange={props.onChange}
            options={options}
            value={props.value}
            autoFocus
          />
        );
      },
      graphql: ({ type, value: options }) => ({
        [config.path]: {
          [type === 'not_matches' ? 'notIn' : 'in']: options.map(
            (x) => x.value,
          ),
        },
      }),
      Label({ type, value }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }
        if (value.length > 1) {
          const values = value.map((i) => i.label).join(', ');
          return type === 'not_matches'
            ? `is not in [${values}]`
            : `is in [${values}]`;
        }
        const optionLabel = value[0].label;
        return type === 'not_matches'
          ? `is not ${optionLabel}`
          : `is ${optionLabel}`;
      },
      types: {
        matches: {
          label: 'Matches',
          initialValue: [],
        },
        not_matches: {
          label: 'Does not match',
          initialValue: [],
        },
      },
    },
  };
};
