'use client';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { FieldContainer, FieldLabel } from '@keystone-ui/fields';
import { clsx } from 'clsx';

export function DropDownSearchField(props: {
  value?: any;
  onChange?: (value: any) => void;
  data?: any[];
  label?: string;
  onQueryChange?: (query: string) => void;
}) {
  return (
    <FieldContainer>
      {props.label && (
        <FieldLabel htmlFor={props.label} className="hover:cursor-pointer">
          {props.label}
        </FieldLabel>
      )}

      <Combobox
        value={props.value}
        onChange={props.onChange}
        multiple
        immediate
        name={props.label}
      >
        <div className="relative">
          <div className="flex gap-1 overflow-auto">
            {props.value?.map((c: any) => (
              <span
                className="h-full rounded-full bg-blue-100 px-2 py-1 text-xs whitespace-nowrap"
                key={c.id}
              >
                {c.title || c.label || c.name}
              </span>
            ))}
          </div>
          <ComboboxInput
            id={props.label}
            className={clsx(
              'flex h-9 w-80 items-center justify-between rounded border bg-gray-50 px-2 hover:bg-gray-100',
            )}
            onChange={(e) => props.onQueryChange?.(e.target.value)}
          ></ComboboxInput>
          <ComboboxButton className="group absolute inset-y-0 top-1/2 right-0 h-full -translate-y-1/2 rounded px-2.5 hover:cursor-pointer">
            <span
              className={clsx(
                'icon-[mdi--chevron-down] transitions-colors size-5 leading-5 text-gray-500 group-hover:text-gray-800',
              )}
            ></span>
          </ComboboxButton>
        </div>

        <ComboboxOptions
          transition
          className={clsx(
            'mt-2 flex max-h-[250px] w-[var(--input-width)] flex-col gap-1 overflow-auto rounded border bg-gray-50 p-2 shadow',
            'transition duration-100 ease-in data-[closed]:opacity-0',
          )}
          anchor="bottom"
        >
          {props.data?.map((item: any) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className={clsx(
                'rounded p-1',
                'transition-colors duration-100 hover:cursor-pointer hover:bg-gray-100',
                'data-[selected]:bg-blue-100',
              )}
            >
              {item.title || item.name || item.label}
            </ComboboxOption>
          ))}
          {props.data?.length === 0 && (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </ComboboxOptions>
      </Combobox>
    </FieldContainer>
  );
}
