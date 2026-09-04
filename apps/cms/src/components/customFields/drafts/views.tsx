'use client';

import { CellContainer } from '@keystone-6/core/admin-ui/components';
import {
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Button } from '@keystar/ui/button';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { plural, singular } from 'pluralize';
import { DraftFieldMeta } from '.';
import { ComponentProps, useState } from 'react';
import { toastQueue } from '@keystar/ui/toast';
import kebabCase from 'voca/kebab_case';

export function Field({ field }: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const listSlug = plural(kebabCase(field.listName)).toLowerCase();
  const queryParam = encodeURIComponent(field.query ?? '');

  async function handleCreateDraft() {
    if (loading) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/${listSlug}/${id}/drafts?query=${queryParam}`,
        {
          method: 'POST',
        },
      );

      if (!res.ok) {
        throw new Error('Failed to create draft');
      }
      const result = await res.json();

      if (!result.draftId) {
        throw new Error('Draft could not be created');
      }

      router.push(`/${singular(listSlug)}-drafts/${result.draftId}`);
    } catch (error: any) {
      console.error('Error creating draft:', error);
      toastQueue.critical(`Error: Failed to create draft: ${error?.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <Button onPress={handleCreateDraft}>Create a new Draft</Button>
      </div>
    </div>
  );
}

export const Cell: CellComponent = ({
  item,
  field,
}: ComponentProps<CellComponent>) => {
  const value = item[field.path] + '';
  return <CellContainer>{value}</CellContainer>;
};

export function CardValue() {
  return <div className="mb-4">Card</div>;
}

export const controller = (
  config: FieldControllerConfig<DraftFieldMeta>,
): FieldController<string[] | null, string> & DraftFieldMeta => {
  return {
    query: config.fieldMeta.query ?? '',
    listName: config.fieldMeta.listName,
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: null,
    deserialize: (data) => {
      const drafts = data[config.path];
      return Array.isArray(drafts) ? drafts.map((draft) => draft.id) : null;
    },
    serialize: (value) => ({ [config.path]: value }),
  };
};
