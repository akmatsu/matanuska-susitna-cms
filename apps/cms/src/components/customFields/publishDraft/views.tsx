'use client';
import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Button } from '@keystar/ui/button';
import { FieldDescription, FieldLabel } from '@keystar/ui/field';
import { PublishDraftFieldMeta } from '.';
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

  async function handlePublishDraft() {
    if (loading) return;

    try {
      setLoading(true);

      const res = await fetch(`/publish/${listSlug}/${id}?query=${queryParam}`, {
        method: 'PATCH',
      });

      if (!res.ok) {
        throw new Error('Failed to publish draft');
      }
      const result = await res.json();

      router.push(`/${listSlug}/${result.publishedId}`);
    } catch (error: any) {
      console.error('Error publishing draft:', error);
      toastQueue.critical(
        `Error: Failed to publish draft: ${error?.message}`,
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
      <Button onPress={handlePublishDraft}>Publish</Button>
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
