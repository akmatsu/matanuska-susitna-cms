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
import { gql as ignoreGql, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { CreateItemDrawer } from '@keystone-6/core/admin-ui/components';
import { DrawerController } from '@keystone-ui/modals';

import pluralize from 'pluralize';
import v from 'voca';
import { useToasts } from '@keystone-ui/toast';
import { Button } from '@keystone-ui/button';

type AvailableType = {
  value: string;
  label: string;
};

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const toast = useToasts();
  const plural = pluralize(value?.itemType?.value || 'services');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { data, refetch, error } = useQuery(
    ignoreGql`
      query Get${v.capitalize(plural)}($where: ${value?.itemType?.label ? v.capitalize(v.camelCase(value.itemType.label)) : ''}WhereInput!) {
        ${plural}(where: $where) {
          title
          id
        }
      }
    `,
    {
      variables: {
        where: {
          title: {
            contains: '',
            mode: 'insensitive',
          },
        },
      },
      skip: !value?.itemType,
    },
  );

  if (error) {
    toast.addToast({
      title: 'Error',
      message: error.message,
      tone: 'negative',
    });
  }

  let searchDebounceTimeout: NodeJS.Timeout | null = null;
  const handleInputChange = (val: string) => {
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    searchDebounceTimeout = setTimeout(() => {
      refetch({
        where: {
          title: {
            contains: val,
            mode: 'insensitive',
          },
        },
      });
    }, 350);
  };

  return (
    <FieldContainer>
      <FieldLabel>{field.label} THIS IS IT!</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div className="flex flex-col gap-2">
        <Select
          value={value?.itemType || null}
          placeholder="Select a type..."
          options={field.availableTypes}
          onChange={(item) => {
            onChange?.({
              itemType: item,
              itemId: null,
            });
          }}
        ></Select>

        {value && value?.itemType && (
          <div className="flex flex-wrap gap-2">
            <Select
              className="w-full"
              placeholder={`Select existing ${value?.itemType?.label}...`}
              value={value?.itemId || null}
              options={data?.[plural].map(
                (i: { title: string; id: string }) => ({
                  label: i.title,
                  value: i.id,
                }),
              )}
              onInputChange={handleInputChange}
              onChange={(item) => {
                onChange?.({
                  itemType: value?.itemType,
                  itemId: item,
                });
              }}
            ></Select>

            {value.itemType.value !== 'boardPage' &&
              value.itemType.value !== 'homePage' &&
              value.itemType.value !== 'electionsPage' && (
                <Button onClick={() => setIsDrawerOpen(true)}>
                  Create a new {value?.itemType?.label}
                </Button>
              )}
          </div>
        )}
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
