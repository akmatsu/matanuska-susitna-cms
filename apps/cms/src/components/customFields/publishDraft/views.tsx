import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Button } from '@keystone-ui/button';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
} from '@keystone-ui/fields';

export function Field({ field }: FieldProps<typeof controller>) {
  function handlePublishDraft() {
    console.log(field);
    console.log(field.query);
  }

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <Button onClick={handlePublishDraft}>Publish</Button>
    </FieldContainer>
  );
}

export const controller = (
  config: FieldControllerConfig<{ query: string }>,
): FieldController<string | undefined | null, string> & {
  query: string;
} => {
  console.log(config);
  return {
    query: config.fieldMeta.query,
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}`,
    defaultValue: undefined,

    deserialize: (data: any): string | null => {
      return data[config.path] ?? null;
    },
    serialize: () => ({}),
  };
};
