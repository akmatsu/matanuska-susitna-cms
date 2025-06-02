import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { DrawerController } from '@keystone-ui/modals';
import clsx from 'clsx';
import Link from 'next/link';
import { plural } from 'pluralize';
import { useState } from 'react';
import { CreateItemDrawer } from '@keystone-6/core/admin-ui/components';
import { Button } from '@keystone-ui/button';
import { useInternalSearchQuery } from './hooks/useInternalSearchQuery';
import { useInternalTooltipProvider } from './hooks/useInternalTooltipProvider';
import { useSelectionHandler } from './hooks/useSelectedItem';

export function InternalLinkTooltip() {
  const { contentRef, view } = useInternalTooltipProvider();
  const { data, setQuery } = useInternalSearchQuery();
  const { selectedPage, handlePageSelection, linkInfo } =
    useSelectionHandler(view);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div
      ref={contentRef}
      className="absolute -mt-2 rounded-sm border border-gray-300 bg-white p-2 shadow-md data-[show=false]:hidden"
    >
      <Combobox
        immediate
        value={selectedPage}
        onChange={handlePageSelection}
        onClose={() => setQuery('')}
      >
        <div className="flex">
          <ComboboxInput
            aria-label="Search for internal pages and URLs"
            displayValue={(item?: { title: string; id: string }) =>
              item?.title || ''
            }
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className={clsx(
              'w-full min-w-52 rounded-lg border-none text-sm/6',
              'focus:outline-hidden data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
            )}
          />
          <div className="flex items-center gap-1">
            {!!linkInfo && (
              <>
                {!!linkInfo.mark?.attrs?.list &&
                  !!linkInfo.mark?.attrs?.itemId && (
                    <Link
                      href={`/${plural(linkInfo.mark?.attrs?.list)?.toLowerCase()}/${linkInfo.mark?.attrs?.itemId}`}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      View
                    </Link>
                  )}
              </>
            )}
            <Button size="small" onClick={() => setIsDrawerOpen(true)}>
              Add new URL
            </Button>
          </div>
        </div>
        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'card w-[var(--input-width)] rounded-sm border bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in',
          )}
        >
          {data && <Options data={data} />}
        </ComboboxOptions>
      </Combobox>
      <DrawerController isOpen={isDrawerOpen}>
        <CreateItemDrawer
          listKey={'Url'}
          onClose={() => setIsDrawerOpen(false)}
          onCreate={(val) => {
            setIsDrawerOpen(false);
            handlePageSelection({
              __typename: 'Url',
              id: val.id,
              title: val.label,
            });
          }}
        />
      </DrawerController>
    </div>
  );
}

function Options({
  data,
}: {
  data: { [key: string]: { __typename: string; title: string; id: string }[] };
}) {
  const opts = {
    landingPages: [...data.homePages, ...data.boardPages],
    departments: data.orgUnits,
    ...data,
    orgUnits: [],
    homePages: [],
    boardPages: [],
  };

  return Object.keys(opts).map((key) =>
    opts[key as keyof typeof opts].length ? (
      <div key={key} className="border-gray-200 not-last:border-b">
        <h5 className="not-fist:mt-2 ml-1 text-xl font-bold not-last:mb-2">
          {key}
        </h5>
        {opts[key as keyof typeof opts].map(
          (item: { __typename: string; title: string; id: string }) => (
            <ComboboxOption
              key={item.id + item.__typename}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-blue-300"
            >
              {item.title}
            </ComboboxOption>
          ),
        )}
      </div>
    ) : null,
  );
}
