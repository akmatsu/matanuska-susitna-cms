'use client';
import React, { useState } from 'react';
import {
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';

type PolymorphicValue = {
  itemType?: { label: string; value: string } | null;
  itemId?: { label: string; value: string } | null;
};

import {
  FieldContainer,
  FieldLabel,
  FieldDescription,
  Select,
} from '@keystone-ui/fields';
// Telling apollo and codegen to ignore the gql tag so it won't try to parse it since we're using a dynamic query
import {
  gql,
  TypedDocumentNode,
  useQuery,
} from '@keystone-6/core/admin-ui/apollo';
import { CreateItemDrawer } from '@keystone-6/core/admin-ui/components';
import { DrawerController } from '@keystone-ui/modals';

import { useToasts } from '@keystone-ui/toast';

import { GetPageQuery, GetPageQueryVariables } from '../../../graphql/graphql';
import v from 'voca';

type AvailableType = {
  value: string;
  label: string;
};

const q: TypedDocumentNode<GetPageQuery, GetPageQueryVariables> = gql`
  query GetPage($query: String!) {
    internalSearch(query: $query) {
      __typename
      ... on AssemblyDistrict {
        id
        title
      }

      ... on Board {
        id
        title
      }

      ... on BoardPage {
        id
        title
      }

      ... on Community {
        id
        title
      }

      ... on Document {
        id
        title
      }

      ... on ElectionsPage {
        id
        title
      }

      ... on Facility {
        id
        title
      }

      ... on HomePage {
        id
        title
      }

      ... on OrgUnit {
        id
        title
      }

      ... on Park {
        id
        title
      }

      ... on Plan {
        id
        title
      }

      ... on Policy {
        id
        title
      }

      ... on PublicNotice {
        id
        title
      }

      ... on Service {
        id
        title
      }

      ... on Topic {
        id
        title
      }

      ... on Trail {
        id
        title
      }

      ... on Url {
        id
        title
      }
    }
  }
`;

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const toast = useToasts();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [query, setQuery] = useState<string>('');

  const { data, error } = useQuery(q, {
    variables: {
      query,
    },
  });

  if (error) {
    toast.addToast({
      title: 'Error',
      message: error.message,
      tone: 'negative',
    });
  }

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <Select
            className="w-full"
            placeholder={`Select an item...`}
            value={value?.itemId || null}
            options={data?.internalSearch?.map((item: any) => {
              return {
                label: `${item.title} (${item.__typename})`,
                value: item.id,
                type: item.__typename,
              };
            })}
            onInputChange={setQuery}
            inputValue={query}
            onChange={(item) => {
              const i = item as { label: string; value: string; type: string };
              onChange?.({
                itemType: {
                  label: i?.type,
                  value: v.camelCase(i?.type || ''),
                },
                itemId: item,
              });
            }}
          ></Select>
        </div>
      </div>
      {value?.itemType && (
        <DrawerController isOpen={isDrawerOpen}>
          <CreateItemDrawer
            listKey={value?.itemType.label.replace(/\s+/g, '')}
            onClose={() => setIsDrawerOpen(false)}
            onCreate={(val) => {
              setIsDrawerOpen(false);
              onChange?.({
                itemType: value?.itemType,
                itemId: {
                  label: val.label,
                  value: val.id,
                },
              });
            }}
          />
        </DrawerController>
      )}
    </FieldContainer>
  );
}

export const controller = (
  config: FieldControllerConfig<any>,
): FieldController<PolymorphicValue | null, string> & {
  availableTypes: AvailableType[];
} => {
  return {
    availableTypes: [
      { value: 'service', label: 'Service' },
      { value: 'park', label: 'Park' },
      { value: 'trail', label: 'Trail' },
      { value: 'facility', label: 'Facility' },
      { value: 'community', label: 'Community' },
      { value: 'assemblyDistrict', label: 'Assembly District' },
      { value: 'orgUnit', label: 'Org Unit' },
      { value: 'topic', label: 'Topic' },
      { value: 'plan', label: 'Plan' },
      { value: 'board', label: 'Board' },
      { value: 'boardPage', label: 'Board Page' },
      { value: 'electionsPage', label: 'Elections Page' },
      { value: 'homePage', label: 'Home Page' },
      { value: 'url', label: 'Url' },
      { value: 'document', label: 'Document' },
    ],
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}`,
    defaultValue: null,
    deserialize: (data: any) => {
      const value = data[config.path];
      return typeof value === 'object' ? value : null;
    },
    serialize: (value) => {
      return { [config.path]: value };
    },
  };
};
