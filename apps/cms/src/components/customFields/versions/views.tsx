'use client';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import {
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { singular } from 'pluralize';
import { ComponentProps } from 'react';

export function Field({ value }: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();

  const listName = singular(router.pathname.split('/')[1]) + '-versions';

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        {!!value?.length && (
          <Link href={`/${listName}?!original_matches=%22${id}%22`}>
            View Versions
          </Link>
        )}
      </div>
    </div>
  );
}

export const Cell: CellComponent = ({
  item,
  field,
}: ComponentProps<CellComponent>) => {
  const value = item[field.fieldKey] + '';
  return <CellContainer>{value}</CellContainer>;
};

export const controller = (
  config: FieldControllerConfig<any>,
): FieldController<string[] | null, string> => {
  return {
    fieldKey: config.fieldKey,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.fieldKey} { id title }`,
    defaultValue: null,
    deserialize: (data) => {
      const drafts = data[config.fieldKey];
      return Array.isArray(drafts) ? drafts.map((draft) => draft.id) : null;
    },
    serialize: (value) => ({ [config.fieldKey]: value }),
  };
};
