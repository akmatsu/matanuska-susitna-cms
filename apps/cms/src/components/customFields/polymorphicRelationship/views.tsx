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

import { FieldContainer, FieldLabel, FieldDescription } from '@keystar/ui/field';
import { Button } from '@keystar/ui/button';
import { Combobox } from '@keystar/ui/combobox';
import { Item, Picker } from '@keystar/ui/picker';
import { toastQueue } from '@keystar/ui/toast';

import { CreateItemDialog } from '../../CreateItemDialog';

import v from 'voca';
import { useInternalSearchQuery } from '../../mdEditor/components/Editor/features/internalLinks/hooks/useInternalSearchQuery';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
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
    toastQueue.critical(`Error: ${error.message}`);
  }

  const searchItems = useMemo(
    () =>
      data?.internalSearch?.map((item: any) => ({
        label: `${item.title} (${item.__typename})`,
        value: item.id,
        type: item.__typename,
      })) ?? [],
    [data?.internalSearch],
  );

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <Combobox
            aria-label="Select an item..."
            items={searchItems}
            selectedKey={value?.itemId?.value ?? null}
            inputValue={query}
            onInputChange={setQuery}
            onSelectionChange={(key) => {
              const item = searchItems.find((i) => i.value === key);
              if (!item) return;
              onChange?.({
                itemType: {
                  label: item.type,
                  value: v.camelCase(item.type || ''),
                },
                itemId: { label: item.label, value: item.value },
              });
            }}
          >
            {(item) => <Item key={item.value}>{item.label}</Item>}
          </Combobox>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onPress={() => setIsTypePickerOpen((open) => !open)}>
            {isTypePickerOpen ? 'Cancel' : 'Create New Item'}
          </Button>
          <Button
            onPress={() =>
              openDrawerForItemType({ label: 'Url', value: v.camelCase('Url') })
            }
          >
            Create new URL
          </Button>
        </div>
        {isTypePickerOpen && (
          <Picker
            aria-label="Select item type to create..."
            items={createTypeOptions}
            selectedKey={createTypeOption?.value ?? null}
            onSelectionChange={(key) => {
              const selectedType = createTypeOptions.find(
                (o) => o.value === key,
              );
              setCreateTypeOption(selectedType ?? null);
              if (selectedType) {
                openDrawerForItemType(selectedType);
                setIsTypePickerOpen(false);
              }
            }}
          >
            {(item) => <Item key={item.value}>{item.label}</Item>}
          </Picker>
        )}
      </div>
      {drawerItemType && (
        <CreateItemDialog
          listKey={drawerItemType.label.replace(/\s+/g, '')}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onCreate={(val) => {
            setIsDrawerOpen(false);
            onChange?.({
              itemType: drawerItemType,
              itemId: {
                label: val.label ?? '',
                value: val.id,
              },
            });
          }}
        />
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
