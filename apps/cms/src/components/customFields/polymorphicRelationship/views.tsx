'use client';
import React, { useMemo, useState } from 'react';
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
import { Button } from '@keystone-ui/button';

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
  const [isTypePickerOpen, setIsTypePickerOpen] = useState(false);
  const [drawerItemType, setDrawerItemType] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [createTypeOption, setCreateTypeOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const { query, setQuery, data, error } = useInternalSearchQuery();

  const createTypeOptions = useMemo(() => {
    const typeMap = new Map<string, { label: string; value: string }>();

    data?.internalSearch?.forEach((item: any) => {
      if (!item?.__typename) return;
      typeMap.set(item.__typename, {
        label: item.__typename,
        value: v.camelCase(item.__typename),
      });
    });

    if (!typeMap.has('Url')) {
      typeMap.set('Url', { label: 'Url', value: v.camelCase('Url') });
    }

    return Array.from(typeMap.values()).sort((a, b) =>
      a.label.localeCompare(b.label),
    );
  }, [data?.internalSearch]);

  function openDrawerForItemType(itemType: { label: string; value: string }) {
    setDrawerItemType(itemType);
    setIsDrawerOpen(true);
  }

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
        <div className="flex flex-wrap gap-2">
          <Button
            size="small"
            onClick={() => setIsTypePickerOpen((open) => !open)}
          >
            {isTypePickerOpen ? 'Cancel' : 'Create New Item'}
          </Button>
          <Button
            size="small"
            onClick={() =>
              openDrawerForItemType({ label: 'Url', value: v.camelCase('Url') })
            }
          >
            Create new URL
          </Button>
        </div>
        {isTypePickerOpen && (
          <Select
            className="w-full"
            placeholder="Select item type to create..."
            value={createTypeOption}
            options={createTypeOptions}
            onChange={(option) => {
              const selectedType = option as {
                label: string;
                value: string;
              } | null;
              setCreateTypeOption(selectedType);
              if (selectedType) {
                openDrawerForItemType(selectedType);
                setIsTypePickerOpen(false);
              }
            }}
          ></Select>
        )}
      </div>
      {drawerItemType && (
        <DrawerController isOpen={isDrawerOpen}>
          <CreateItemDrawer
            listKey={drawerItemType.label.replace(/\s+/g, '')}
            onClose={() => setIsDrawerOpen(false)}
            onCreate={(val) => {
              setIsDrawerOpen(false);
              onChange?.({
                itemType: drawerItemType,
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
