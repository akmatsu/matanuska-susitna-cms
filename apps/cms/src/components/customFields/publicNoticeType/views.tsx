'use client';

import { CellContainer } from '@keystone-6/core/admin-ui/components';
import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { useEffect, useState } from 'react';
import { Text } from '@keystar/ui/typography';
import { FieldDescription, FieldLabel } from '@keystar/ui/field';
import { ListView } from '@keystar/ui/list-view';
import { Item, Picker } from '@keystar/ui/picker';
import { GovDeliveryTopic } from '../../../utils/govDelivery';

async function fetchGovDeliveryOptions(): Promise<Option[]> {
  const res = await fetch('/api/emails/topics');

  if (!res.ok) {
    throw new Error('Failed to fetch options');
  }

  const data = (await res.json()) as { topics: GovDeliveryTopic[] };

  if (!data.topics || data.topics.length === 0) {
    return [{ label: 'None', value: 'none' }];
  }

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
        setOptions([{ label: 'None', value: 'none' }]);
        setLoadError(error.message);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const isInvalid =
    (hasChanged || forceValidation) && !validate(value, field.isRequired);
  const errorMessage = isInvalid ? `${field.label} is required` : undefined;

  const selectedKey = value.value?.value ?? null;

  return (
    <div className="mb-4">
      <Picker
        label={field.label}
        description={field.description}
        autoFocus={autoFocus}
        items={options}
        isDisabled={onChange === undefined}
        errorMessage={errorMessage}
        selectedKey={selectedKey}
        onSelectionChange={(key) => {
          const newVal = options.find((o) => o.value === key) ?? null;
          onChange?.({ ...value, value: newVal });
          setHasChanged(true);
        }}
      >
        {(item) => <Item key={item.value}>{item.label}</Item>}
      </Picker>
      {loadError ? (
        <Text color="critical" size="small">
          {loadError}
        </Text>
      ) : null}
    </div>
  );
};

export const Cell: CellComponent<typeof controller> = ({ item, field }) => {
  const value = item[field.path] + '';

  return <CellContainer>{value}</CellContainer>;
};

export const CardValue: CardValueComponent<typeof controller> = ({
  item,
  field,
}) => {
  const value = item[field.path] + '';

  return (
    <div className="mb-4">
      <FieldLabel>{value}</FieldLabel>
      {value}
    </div>
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
          <ListView
            aria-label={config.label}
            items={options}
            selectionMode="multiple"
            selectedKeys={props.value.map((x) => x.value)}
            onSelectionChange={(selection) => {
              if (selection === 'all') return;
              const keys = [...selection].filter(
                (x): x is string => typeof x === 'string',
              );
              props.onChange(options.filter((o) => keys.includes(o.value)));
            }}
            autoFocus
          >
            {(item) => <Item key={item.value}>{item.label}</Item>}
          </ListView>
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
