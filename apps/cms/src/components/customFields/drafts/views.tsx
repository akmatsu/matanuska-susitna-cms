'use client';
import {
  // Telling apollo and codegen to ignore the gql tag so it won't try to parse it since we're using a dynamic query
  gql as ignoreGql,
  useMutation,
  useQuery,
} from '@keystone-6/core/admin-ui/apollo';
import { CellContainer, CellLink } from '@keystone-6/core/admin-ui/components';
import {
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Button } from '@keystone-ui/button';
import { FieldContainer } from '@keystone-ui/fields';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { singular } from 'pluralize';
import { mapDataFields } from '../../../utils/draftUtils';
import { DraftFieldMeta } from '.';
import { lowercaseFirstLetter } from '../../../utils';
import { ComponentProps } from 'react';

export function Field({ field, value }: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();
  const listKey = lowercaseFirstLetter(field.listName);
  const listName = singular(router.pathname.split('/')[1]) + '-drafts';

  if (typeof id === 'string' && typeof listName === 'string') {
    const { data, loading, error } = useQuery(
      ignoreGql`
      query ${field.listName} ($where: ${field.listName}WhereUniqueInput!) {
        ${listKey}(where: $where) {
          ${field.query}
        }
      }
    `,
      {
        variables: {
          where: {
            id,
          },
        },
      },
    );

    const [createDraft, { loading: creating }] = useMutation(ignoreGql`
    mutation Create${field.listName}Draft($data: ${field.listName}DraftCreateInput!) {
      create${field.listName}Draft(data: $data) {
        id
      }
    }
  `);

    async function handleCreateDraft() {
      if (loading || creating || error) return;

      const { title, id, ...original } = data[listKey];
      const draftInput = mapDataFields(
        original,
        {
          title: `${title} --- ${new Date().toLocaleString()}`,
          original: { connect: { id } },
        },
        'create',
      );
      const result = await createDraft({
        variables: {
          data: draftInput,
        },
      });
      const draftId = result.data[`create${field.listName}Draft`].id;
      router.push('/' + listName + `/${draftId}`);
    }

    return (
      <FieldContainer>
        <div className="flex items-center gap-2">
          <Button onClick={handleCreateDraft}>Create a new Draft</Button>
          {value && typeof id === 'string' && typeof listName === 'string' && (
            <Link href={`/${listName}?!original_matches=%22${id}%22`}>
              View Existing Drafts
            </Link>
          )}
        </div>
      </FieldContainer>
    );
  }
}

export const Cell: CellComponent = ({
  item,
  field,
  linkTo,
}: ComponentProps<CellComponent>) => {
  const value = item[field.path] + '';
  return linkTo ? (
    <CellLink {...linkTo}>{value}</CellLink>
  ) : (
    <CellContainer>{value}</CellContainer>
  );
};
Cell.supportsLinkTo = true;

export function CardValue() {
  return <FieldContainer>Card</FieldContainer>;
}

export const controller = (
  config: FieldControllerConfig<DraftFieldMeta>,
): FieldController<string[] | null, string> & DraftFieldMeta => {
  return {
    query: config.fieldMeta.query,
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
