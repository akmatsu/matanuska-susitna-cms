/* eslint-disable react/prop-types */
import {
  CardValueComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
  MultiSelect,
  Select,
} from '@keystone-ui/fields';
import { ComponentProps, useState } from 'react';
import { Text } from '@keystone-ui/core';

export function Field(props: FieldProps<typeof controller>) {
  const [hasChanged, setHasChanged] = useState(false);

  const validationMessage =
    (hasChanged || props.forceValidation) &&
    !validate(props.value, props.field.isRequired) ? (
      <Text color="red600" size="small">
        {props.field.label} is required
      </Text>
    ) : null;

  return (
    <FieldContainer>
      <FieldLabel>{props.field.label}</FieldLabel>
      <FieldDescription id={`${props.field.path}-description`}>
        {props.field.description}
      </FieldDescription>
      <Select
        id={props.field.path}
        isClearable
        autoFocus={props.autoFocus}
        isDisabled={props.onChange === undefined}
        options={props.field.options}
        value={props.value.value}
        aria-describedby={
          props.field.description === null
            ? undefined
            : `${props.field.path}-description`
        }
        portalMenu
        onChange={(newVal) => {
          props.onChange?.({ ...props.value, value: newVal });
          setHasChanged(true);
        }}
        classNames={{
          option: (props) => props.data.value,
          singleValue: (props) => props.data.value,
        }}
      />
      {validationMessage}
    </FieldContainer>
  );
}

export const CardValue: CardValueComponent = (
  props: ComponentProps<CardValueComponent>,
) => {
  return (
    <FieldContainer>
      <FieldLabel>{props.field.label}</FieldLabel>
      <FieldDescription id={`${props.field.path}-description`}>
        {props.field.description}
      </FieldDescription>
      <span className={props.item.icon}>
        {props.item.icon ? '' : 'No icon selected'}
      </span>
    </FieldContainer>
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
          <MultiSelect
            // eslint-disable-next-line react/prop-types
            onChange={props.onChange}
            options={optionsWithStringValues}
            // eslint-disable-next-line react/prop-types
            value={props.value}
            autoFocus
          />
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
