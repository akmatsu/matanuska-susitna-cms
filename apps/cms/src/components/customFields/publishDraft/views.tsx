'use client';
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
import { PublishDraftFieldMeta } from '.';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { plural } from 'pluralize';
import { useState } from 'react';
import { useToasts } from '@keystone-ui/toast';
import kebabCase from 'voca/kebab_case';
import { logger } from '../../../configs/logger';

export function Field({ field }: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const listSlug = plural(kebabCase(field.listName)).toLowerCase();
  const { addToast } = useToasts();

  async function handlePublishDraft() {
    if (loading) return;

    try {
      setLoading(true);
      const res = await fetch(
        `/publish/${plural(kebabCase(field.listName)).toLowerCase()}/${id}?query=${field.query}`,
        {
          method: 'PATCH',
        },
      );

      if (!res.ok) {
        throw new Error('Failed to publish draft');
      }
      const result = await res.json();

      router.push(`/${listSlug}/${result.publishedId}`);
    } catch (error: any) {
      logger.error('Error publishing draft:', error);
      addToast({
        title: 'Error',
        message: `Failed to publish draft: ${error?.message}`,
        tone: 'negative',
      });
    } finally {
      setLoading(false);
    }
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
