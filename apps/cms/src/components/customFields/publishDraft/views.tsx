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
import { gql, useMutation, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { lowercaseFirstLetter } from '../../../utils';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { mapDataFields } from '../../../utils/draftUtils';
import pluralize, { plural } from 'pluralize';
import axios from 'axios';
import { useState } from 'react';
import kebabCase from 'voca/kebab_case';

export function Field({ field }: FieldProps<typeof controller>) {
  const [loading, setLoading] = useState(false);

  // const router = useRouter();
  const { id } = useParams();
  // const draftKey = lowercaseFirstLetter(field.listName) + 'Draft';
  // const urlListName = pluralize(
  //   router.pathname.split('/')[1].replace('-drafts', ''),
  // );
  // const getDraftQuery = gql`
  //     query ${field.listName}Draft ($where: ${field.listName}DraftWhereUniqueInput!) {
  //       ${draftKey} (where: $where) {
  //         ${field.query}
  //       }
  //     }`;

  // const { data, loading, error } = useQuery(getDraftQuery, {
  //   variables: {
  //     where: {
  //       id,
  //     },
  //   },
  // });

  // const [publishDraft, { loading: creating }] = useMutation(gql`
  //   mutation Publish${field.listName} ($data: ${field.listName}UpdateInput!, $where: ${field.listName}WhereUniqueInput!) {
  //     update${field.listName} (where: $where, data: $data) {
  //       id
  //     }
  //   }
  // `);

  // const [deleteDraft, { loading: deleting }] = useMutation(gql`
  //   mutation Delete${field.listName}Draft ($where: ${field.listName}DraftWhereUniqueInput!) {
  //     delete${field.listName}Draft (where: $where) {
  //       id
  //     }
  //   }
  // `);

  async function handlePublishDraft() {
    try {
      setLoading(true);
      const res = await fetch(
        `/publish/${plural(kebabCase(field.listName)).toLowerCase()}/${id}`,
        {
          method: 'PATCH',
        },
      );

      if (!res.ok) {
        throw new Error('Failed to publish draft');
      }
      const result = await res.json();

      console.log(result);
    } catch (error) {
      console.error('Error publishing draft:', error);
    } finally {
      setLoading(false);
    }
    // const { original, title, ...draft } = data[draftKey]; // if (loading || error || creating || deleting) return;

    // const result = await publishDraft({
    //   variables: {
    //     where: {
    //       id: original.id,
    //     },
    //     data: mapDataFields(
    //       draft,
    //       {
    //         title: title.split(' ---')[0],
    //         status: 'published',
    //         publishAt: new Date().toISOString(),
    //       },
    //       'update',
    //     ),
    //   },
    // });

    // await deleteDraft({
    //   variables: {
    //     where: {
    //       id,
    //     },
    //   },
    // });

    // const publishedId = result.data[`update${field.listName}`].id;
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
