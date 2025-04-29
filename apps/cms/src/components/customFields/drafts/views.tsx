'use client';
import { gql, useMutation, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { CellContainer, CellLink } from '@keystone-6/core/admin-ui/components';
import {
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Button } from '@keystone-ui/button';
import { FieldContainer } from '@keystone-ui/fields';
import { key } from '@milkdown/kit/plugin/listener';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { singular } from 'pluralize';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();

  const listName = singular(router.pathname.split('/')[1]) + '-drafts';

  const { data, loading, error } = useQuery(
    gql`
      query TestModel($where: TestModelWhereUniqueInput!) {
        testModel(where: $where) {
          id
          heroImage
          title
          description
          body
          tags {
            id
            name
          }
          tagsCount
          userGroups {
            id
          }
          userGroupsCount
          contacts {
            id
          }
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

  const [createDraft, { loading: creating }] = useMutation(gql`
    mutation CreateDraft($data: TestModelDraftCreateInput!) {
      createTestModelDraft(data: $data) {
        id
      }
    }
  `);

  async function handleCreateDraft() {
    if (loading || creating || error) return;
    const original = data.testModel;
    const { id, ...rest } = original;

    const draftInput: Record<string, any> = {
      original: { connect: { id } },
    };

    Object.entries(rest).forEach(([key, value]) => {
      if (
        key.endsWith('Count') ||
        key === 'createdAt' ||
        key === 'updatedAt' ||
        key === '__typename'
      ) {
        return;
      }

      if (value == null) {
        draftInput[key] = null;
        return;
      }

      if (Array.isArray(value)) {
        draftInput[key] = {
          connect: (value as Array<any>)
            .filter((item) => item && typeof item === 'object' && 'id' in item)
            .map((item: any) => ({ id: item.id })),
        };
        return;
      }

      if (typeof value === 'object' && 'id' in value) {
        draftInput[key] = { connect: { id: value.id } };
        return;
      }

      draftInput[key] = value;
    });

    console.log(draftInput);

    const result = await createDraft({
      variables: {
        data: draftInput,
      },
    });

    const draftId = result.data.createTestModelDraft.id;
    router.push('http://localhost:3333/' + listName + `/${draftId}`);
  }

  return (
    <FieldContainer>
      <div className="flex items-center gap-2">
        <Button onClick={handleCreateDraft}>Create a new Draft</Button>
        {!!value?.length && (
          <Link
            href={`http://localhost:3333/${listName}?!original_matches=%22${id}%22`}
          >
            View Existing Drafts
          </Link>
        )}
      </div>
    </FieldContainer>
  );
}

export const Cell: CellComponent = ({ item, field, linkTo }) => {
  const value = item[field.path] + '';
  return linkTo ? (
    <CellLink {...linkTo}>{value}</CellLink>
  ) : (
    <CellContainer>{value}</CellContainer>
  );
};
Cell.supportsLinkTo = true;

export const controller = (
  config: FieldControllerConfig<{}>,
): FieldController<string[] | null, string> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path} { id title }`,
    defaultValue: null,
    deserialize: (data) => {
      const drafts = data[config.path];
      return Array.isArray(drafts) ? drafts.map((draft) => draft.id) : null;
    },
    serialize: (value) => ({ [config.path]: value }),
  };
};
