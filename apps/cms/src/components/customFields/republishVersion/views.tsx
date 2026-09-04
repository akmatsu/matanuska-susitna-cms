'use client';
import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { PublishDraftFieldMeta } from '../publishDraft';
import { FieldDescription, FieldLabel } from '@keystar/ui/field';
import { Button } from '@keystar/ui/button';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { plural } from 'pluralize';
import { useState } from 'react';
import { toastQueue } from '@keystar/ui/toast';
import kebabCase from 'voca/kebab_case';

export function Field({ field }: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const listSlug = plural(kebabCase(field.listName)).toLowerCase();
  const queryParam = encodeURIComponent(field.query ?? '');

  async function handleRepublishVersion() {
    if (loading) return;

    try {
      setLoading(true);
      const res = await fetch(
        `/republish/${plural(kebabCase(field.listName)).toLowerCase()}/${id}?query=${queryParam}`,
        {
          method: 'PATCH',
        },
      );

      if (!res.ok) {
        throw new Error(`Response Status: ${res.status} ${res.statusText}`);
      }
      const result = await res.json();

      router.push(`/${listSlug}/${result.publishedId}`);
    } catch (error: any) {
      console.error('Error republishing version:', error);
      toastQueue.critical(
        `Error: Failed to republish version: ${error?.message}`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-4">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <Button onPress={handleRepublishVersion}>Republish Version</Button>
    </div>
  );
}

export function Cell() {
  return <CellContainer>Muffins</CellContainer>;
}

export function CardValue() {
  return <div className="mb-4">Card</div>;
}

export const controller = (
  config: FieldControllerConfig<PublishDraftFieldMeta>,
): FieldController<string | undefined | null, string> &
  PublishDraftFieldMeta => {
  return {
    query: config.fieldMeta.query ?? '',
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
