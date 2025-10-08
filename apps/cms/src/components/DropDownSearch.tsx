import {
  // Listbox,
  // ListboxButton,
  // ListboxOption,
  // ListboxOptions,
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
}) {
  return (
    <FieldContainer>
      {props.label && (
        <FieldLabel htmlFor="document_collection">{props.label}</FieldLabel>
      )}

      <Combobox
        value={props.value}
        onChange={props.onChange}
        multiple
        name="document_collection"
      >
        {/* <div className="flex gap-1 overflow-auto py-2">
          {props.value?.map((c: any) => (
            <span
              className="rounded-full bg-blue-100 px-2 py-1 text-xs whitespace-nowrap"
              key={c.id}
            >
              {c.title || c.label || c.name}
            </span>
          ))}
        </div> */}
        <div className="relative">
          <ComboboxInput
            id="document_collection"
            className={clsx(
              'flex h-9 w-80 items-center justify-between border bg-gray-50 px-2 hover:cursor-pointer hover:bg-gray-100',
            )}
          ></ComboboxInput>
          <ComboboxButton>
            <span
              className={clsx(
                'icon-[mdi--chevron-down] size-5 leading-5 data-[open]:rotate-180',
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
        </ComboboxOptions>
      </Combobox>
    </FieldContainer>
  );
}
