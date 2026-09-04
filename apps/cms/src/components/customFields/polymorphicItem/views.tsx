import { FieldDescription, FieldLabel } from '@keystar/ui/field';

import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { ComponentProps, Fragment } from 'react';
import Link from 'next/link';

type ItemValue = {
  id: string;
  title: string;
  slug?: string | null;
  description?: string | null;
  url?: string | null;
  __typename: string;
};

import slugify from 'voca/slugify';
import { plural } from 'pluralize';

function PrettyData({ data }: { data?: ItemValue | undefined }) {
  if (data === undefined || data === null) return null;

  return (
    <Fragment>
      <p className="text-sm font-bold text-gray-500">{data.__typename}</p>
      <Link
        href={`/${slugify(plural(data.__typename)).toLowerCase()}/${data.id}`}
      >
        {data.title}
      </Link>
    </Fragment>
  );
}
export const Field = ({ field, value }: FieldProps<typeof controller>) => {
  return !value ? null : (
    <div className="mb-4">
      <FieldLabel>{field.path}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <PrettyData data={value} />
    </div>
  );
};

export const Cell: CellComponent = ({
  item,
  field,
}: ComponentProps<CellComponent>) => {
  return <PrettyData data={item[field.path]} />;
};

export const CardValue: CardValueComponent = ({
  item,
  field,
}: ComponentProps<CardValueComponent>) => {
  return (
    <div className="mb-4">
      <FieldLabel>{field.label}</FieldLabel>
      <PrettyData data={item[field.path]} />
    </div>
  );
};

export const controller = (
  config: FieldControllerConfig<{ query: string }>,
): FieldController<ItemValue | undefined | null> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: undefined,
    deserialize: (data) => {
      return data[config.path];
    },
    serialize: () => ({}),
  };
};
