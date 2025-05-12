import { FieldContainer, FieldLabel, TextInput } from '@keystone-ui/fields';
import {
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { logger } from '../../../configs/logger';

function stringify(value: unknown) {
  if (typeof value === 'string') return value;
  if (value === undefined || value === null) return '';
  if (typeof value !== 'object') return JSON.stringify(value);

  const omitTypename = (key: string, value: any) =>
    key === '__typename' ? undefined : value;
  const dataWithoutTypename = JSON.parse(JSON.stringify(value), omitTypename);
  return JSON.stringify(dataWithoutTypename, null, 2);
}

export function Field({
  value,
  autoFocus,
  field,
}: FieldProps<typeof controller>) {
  logger.info('Field', { value, autoFocus, field });
  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <TextInput autoFocus={autoFocus} value={stringify(value)} />;
    </FieldContainer>
  );
}

export const Cell: CellComponent<typeof controller> = ({ value }) => {
  return value != null ? <p>{stringify(value)}</p> : null;
};

export const controller = (
  config: FieldControllerConfig<{ query: string }>,
): FieldController<string | undefined | null, string> => {
  logger.info('Controller', config);
  return {
    path: config.path,
    label: config.fieldMeta.query,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: null,
    deserialize: (data: any): string | null => data[config.path],
    serialize: () => ({}),
  };
};
