'use client';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
} from '@headlessui/react';
import { clsx } from 'clsx';

export function DropDownSearchField(props: {
  value?: any;
  onChange?: (value: any) => void;
  data?: any[];
  label?: string;
  onQueryChange?: (query: string) => void;
}) {
  function removeSelection(id: string) {
    props.onChange?.(props.value.filter((v: any) => v.id !== id));
  }

  return (
    <Field>
      <div className="mb-2 flex items-center">
        {props.label && (
          <Label
            htmlFor={props.label}
            className="text-lg font-bold hover:cursor-pointer"
          >
            {props.label}
          </Label>
        )}
      </div>

      <Combobox
        value={props.value}
        onChange={props.onChange}
        multiple
        immediate
        name={props.label}
      >
        <div className="relative">
          <ComboboxInput
            id={props.label}
            className={clsx(
              'flex h-9 w-80 items-center justify-between rounded border bg-gray-50 px-2 hover:bg-gray-100',
            )}
            onChange={(e) => props.onQueryChange?.(e.target.value)}
          ></ComboboxInput>
          <ComboboxButton
            className="group absolute inset-y-0 top-1/2 right-0 h-full -translate-y-1/2 rounded px-2.5 hover:cursor-pointer"
            value={props.value}
          >
            <span
              className={clsx(
                'icon-[mdi--chevron-down] transitions-colors size-5 leading-5 text-gray-500 group-hover:text-gray-800',
              )}
            ></span>
          </ComboboxButton>
        </div>

        {props.value && (
          <ul className="mt-2 flex max-w-[var(--input-width)] flex-col items-baseline gap-1">
            {props.value?.map((c: any) => (
              <li
                className="flex h-full max-w-3xs items-center gap-0.5 rounded-full bg-blue-100 text-xs whitespace-nowrap"
                key={c.id}
              >
                <div className="truncate overflow-hidden py-1 pl-2">
                  <span>{c.title || c.label || c.name}</span>
                </div>
                <button
                  className="rounded-full p-1 hover:cursor-pointer hover:bg-blue-200 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  title="Remove"
                  aria-label={`Remove selection: ${c.title || c.label || c.name}`}
                  onClick={(e) => {
                    e.preventDefault();
                    removeSelection(c.id);
                  }}
                >
                  <span className="icon-[mdi--close]"></span>
                </button>
              </li>
            ))}
          </ul>
        )}

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
                'group truncate rounded p-1 whitespace-nowrap',
                'transition-colors duration-100 hover:cursor-pointer hover:bg-gray-100',
                'data-focus:bg-blue-100',
              )}
            >
              <span className="icon-[mdi--circle-outline] group-data-selected:icon-[mdi--check-circle] mr-2 -mb-0.5 group-data-selected:text-blue-600"></span>
              {item.title || item.name || item.label}
            </ComboboxOption>
          ))}
          {props.data?.length === 0 && (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </ComboboxOptions>
      </Combobox>
    </Field>
  );
}
