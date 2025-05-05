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
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { lowercaseFirstLetter } from '../../../utils';
import { gql, useMutation, useQuery } from '@keystone-6/core/admin-ui/apollo';
import pluralize from 'pluralize';
import { mapDataFields } from '../../../utils/draftUtils';

export function Field({ field }: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();
  const versionKey = lowercaseFirstLetter(field.listName) + 'Version';
  const urlListName = pluralize(
    router.pathname.split('/')[1].replace('-versions', ''),
  );

  const getVersionQuery = gql`
      query ${field.listName}Version ($where: ${field.listName}VersionWhereUniqueInput!) {
        ${versionKey} (where: $where) {
          ${field.query}
        }
      }`;

  const { data, loading, error } = useQuery(getVersionQuery, {
    variables: {
      where: {
        id,
      },
    },
  });

  const [republishVersion, { loading: creating }] = useMutation(gql`
    mutation Republish${field.listName} ($data: ${field.listName}UpdateInput!, $where: ${field.listName}WhereUniqueInput!) {
      update${field.listName} (where: $where, data: $data) {
        id
      }
    }
  `);

  async function handleRepublishVersion() {
    if (loading || error || creating) return;

    const { original, title, ...version } = data[versionKey];

    const result = await republishVersion({
      variables: {
        where: {
          id: original.id,
        },
        data: mapDataFields(
          version,
          {
            title: title.split(' ---')[0],
            status: 'published',
            publishAt: new Date().toISOString(),
            currentVersion: {
              connect: {
                id,
              },
            },
          },
          'update',
        ),
      },
    });

    const publishedId = result.data[`update${field.listName}`].id;
    router.push('/' + urlListName + '/' + publishedId);
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
