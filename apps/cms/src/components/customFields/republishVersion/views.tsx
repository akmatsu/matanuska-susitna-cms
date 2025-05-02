'use client';
import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { PublishDraftFieldMeta } from '../publishDraft';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
} from '@keystone-ui/fields';
import { Button } from '@keystone-ui/button';
import { CellContainer } from '@keystone-6/core/admin-ui/components';

export function Field({ field }: FieldProps<typeof controller>) {
  const router = useRouter();

  function handleRepublishVersion() {
    console.log(field.listName, field.query);
  }

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <Button onClick={handleRepublishVersion}>Republish Version</Button>
    </FieldContainer>
  );
}

export function Cell() {
  return <CellContainer>Muffins</CellContainer>;
}

export function CardValue() {
  return <FieldContainer>Card</FieldContainer>;
}

export const controller = (
  config: FieldControllerConfig<PublishDraftFieldMeta>,
): FieldController<string | undefined | null, string> &
  PublishDraftFieldMeta => {
  return {
    query: config.fieldMeta.query,
    listName: config.fieldMeta.listName,
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
