import { CellContainer } from '@keystone-6/core/admin-ui/components';
import {
  CellComponent,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { FieldContainer } from '@keystone-ui/fields';
import Link from 'next/link';
import { ComponentProps } from 'react';

export function Field({ field }: FieldProps<typeof controller>) {
  return (
    <FieldContainer>
      <div className="rounded border-l-4 border-yellow-500 bg-yellow-200 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="icon-[mdi--warning] size-9" />
          <h2 className="text-3xl">{field.label}</h2>
        </div>
        <p>
          You do not have permission to edit this page. Changes will not be
          saved. To request access,{' '}
          <Link
            className="text-black underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.matsu.gov/TDClient/33/Portal/Requests/ServiceDet?ID=118"
          >
            submit a support ticket
          </Link>
          .
        </p>
      </div>
    </FieldContainer>
  );
}

const createViewValue = Symbol('create view virtual field value');

export const controller = (
  config: FieldControllerConfig<{ query: string }>,
) => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: createViewValue,
    deserialize: (data: any) => {
      return data[config.path];
    },
    serialize: () => ({}),
  };
};
