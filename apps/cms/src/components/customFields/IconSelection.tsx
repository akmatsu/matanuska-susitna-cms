/* eslint-disable react/prop-types */
import {
  CardValueComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { ListView } from '@keystar/ui/list-view';
import { Item, Picker } from '@keystar/ui/picker';
import { ComponentProps } from 'react';

export function Field(props: FieldProps<typeof controller>) {
  const selectedKey = props.value.value?.value ?? null;
  const isRequired = props.field.isRequired;
  const isInvalid = !validate(props.value, isRequired);
  const errorMessage =
    isInvalid && props.forceValidation
      ? `${props.field.label} is required`
      : undefined;

  return (
    <Picker
      label={props.field.label}
      description={props.field.description}
      autoFocus={props.autoFocus}
      isDisabled={props.onChange === undefined}
      isRequired={isRequired}
      errorMessage={errorMessage}
      items={props.field.options}
      selectedKey={selectedKey}
      onSelectionChange={(key) => {
        const newVal = props.field.options.find((o) => o.value === key) ?? null;
        props.onChange?.({ ...props.value, value: newVal });
      }}
    >
      {(item) => <Item key={item.value}>{item.label}</Item>}
    </Picker>
  );
}

export const CardValue: CardValueComponent = (
  props: ComponentProps<CardValueComponent>,
) => {
  return (
    <div>
      <span className={props.item.icon}>
        {props.item.icon ? '' : 'No icon selected'}
      </span>
    </div>
  );
};

export type AdminSelectFieldMeta = {
  options: readonly { label: string; value: string | number }[];
  type: 'string' | 'integer' | 'enum';
  displayMode: 'select' | 'segmented-control' | 'radio';
  isRequired: boolean;
  defaultValue: string | number | null;
};

type Config = FieldControllerConfig<AdminSelectFieldMeta>;

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
  options: Option[];
  type: 'string' | 'integer' | 'enum';
  displayMode: 'select' | 'segmented-control' | 'radio';
  isRequired: boolean;
} => {
  const optionsWithStringValues = config.fieldMeta.options.map((x) => ({
    label: x.label,
    value: x.value.toString(),
  }));

  // Transform from string value to type appropriate value
  const t = (v: string | null) =>
    v === null ? null : config.fieldMeta.type === 'integer' ? parseInt(v) : v;

  const stringifiedDefault = config.fieldMeta.defaultValue?.toString();

  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: {
      kind: 'create',
      value:
        optionsWithStringValues.find((x) => x.value === stringifiedDefault) ??
        null,
    },
    type: config.fieldMeta.type,
    displayMode: config.fieldMeta.displayMode,
    isRequired: config.fieldMeta.isRequired,
    options: optionsWithStringValues,
    deserialize: (data) => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          const stringifiedOption = {
            label: option.label,
            value: option.value.toString(),
          };
          return {
            kind: 'update',
            initial: stringifiedOption,
            value: stringifiedOption,
          };
        }
      }
      return { kind: 'update', initial: null, value: null };
    },
    serialize: (value) => ({ [config.path]: t(value.value?.value ?? null) }),
    validate: (value) => validate(value, config.fieldMeta.isRequired),
    filter: {
      Filter(props) {
        return (
          <ListView
            aria-label={config.label}
            items={optionsWithStringValues}
            selectionMode="multiple"
            selectedKeys={props.value.map((x) => x.value)}
            onSelectionChange={(selection) => {
              if (selection === 'all') return;
              const keys = [...selection].filter(
                (x): x is string => typeof x === 'string',
              );
              props.onChange(
                optionsWithStringValues.filter((o) => keys.includes(o.value)),
              );
            }}
            autoFocus
          >
            {(item) => <Item key={item.value}>{item.label}</Item>}
          </ListView>
        );
      },
      graphql: ({ type, value: options }) => ({
        [config.path]: {
          [type === 'not_matches' ? 'notIn' : 'in']: options.map((x) =>
            t(x.value),
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
