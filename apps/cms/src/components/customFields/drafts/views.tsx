'use client';
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

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const router = useRouter();
  const { id } = useParams();
  const { pathname, query } = router;
  const listName = singular(pathname.split('/')[1]) + '-drafts';

  function createNewDraft() {}

  return (
    <FieldContainer>
      <div className="flex items-center gap-2">
        <Button>Create a new Draft</Button>
        {!!value?.length && (
          <Link
            href={`http://localhost:3333/${listName}?!original_matches=%${id}%22`}
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
