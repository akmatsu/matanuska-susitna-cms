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

import { CreateItemDrawer } from '@keystone-6/core/admin-ui/components';
import { DrawerController } from '@keystone-ui/modals';

import { useToasts } from '@keystone-ui/toast';
import v from 'voca';
import { useInternalSearchQuery } from '../../mdEditor/components/Editor/features/internalLinks/hooks/useInternalSearchQuery';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const toast = useToasts();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { query, setQuery, data, error } = useInternalSearchQuery();

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
): FieldController<PolymorphicValue | null, string> => {
  return {
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
