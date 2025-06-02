import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { DrawerController } from '@keystone-ui/modals';
import clsx from 'clsx';
import Link from 'next/link';
import { plural, singular } from 'pluralize';
import { useEffect, useState } from 'react';
import { CreateItemDrawer } from '@keystone-6/core/admin-ui/components';
import { Button } from '@keystone-ui/button';
import { useInternalSearchQuery } from './hooks/useInternalSearchQuery';
import { useInternalTooltipProvider } from './hooks/useInternalTooltipProvider';
import { Page, useSelectionHandler } from './hooks/useSelectedItem';
import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';
import v from 'voca';
import { Mark } from '@milkdown/kit/prose/model';
import { PluginViewContext } from '@prosemirror-adapter/react';

export function InternalLinkTooltip() {
  const { contentRef, view, linkInfo, isShowing } =
    useInternalTooltipProvider();
  const [isEditing, setEditing] = useState(false);

  const listType = linkInfo?.mark?.attrs?.list
    ? v.camelCase(singular(linkInfo.mark.attrs.list))
    : undefined;

  const { data: linkData } = useQuery(
    gql`
      query GetInternSearchLink($id: ID) {
        ${listType || 'service'}(where: { id: $id }) {
          id
          title
        }
      }
    `,
    {
      variables: {
        id: linkInfo?.mark?.attrs?.itemId,
      },
      skip: !listType,
    },
  );

  function removeLink() {
    const { tr } = view.state;
    if (!linkInfo) return;
    tr.removeMark(linkInfo.from, linkInfo.to, linkInfo.mark);
    view.dispatch(tr);
  }

  useEffect(() => {
    !listType ? setEditing(true) : setEditing(false);
  }, [listType, isShowing]);

  return (
    <div
      ref={contentRef}
      className="absolute z-20 -mt-2 rounded-sm border border-gray-300 bg-white p-2 shadow-md data-[show=false]:hidden"
    >
      {isEditing ? (
        <SearchInput
          view={view}
          linkInfo={linkInfo}
          onSelection={() => setEditing(false)}
        />
      ) : (
        <div className="flex items-center justify-between gap-2">
          {!!linkInfo && (
            <>
              {!!listType && !!linkInfo.mark?.attrs?.itemId && (
                <Link
                  href={`/${plural(v.slugify(linkInfo.mark?.attrs?.list))}/${linkInfo.mark?.attrs?.itemId}`}
                  target="_blank"
                >
                  {linkData?.[listType]?.title || ''}{' '}
                  <span className="icon-[mdi--external-link] -mb-0.5 size-4"></span>
                </Link>
              )}
            </>
          )}
          <Button size="small" onClick={() => setEditing(true)}>
            <span className="icon-[mdi--pencil]"></span>
          </Button>
          <Button size="small" onClick={removeLink}>
            <span className="icon-[mdi--delete]"></span>
          </Button>
        </div>
      )}
    </div>
  );
}

function SearchInput({
  view,
  linkInfo,
  onSelection,
}: {
  view: PluginViewContext['view'];
  linkInfo: { to: number; from: number; mark: Mark } | null;
  onSelection?: () => void;
}) {
  const { data, setQuery } = useInternalSearchQuery();
  const { selectedPage, handlePageSelection } = useSelectionHandler(
    view,
    linkInfo,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleSelection(page: Page | null) {
    if (page) {
      handlePageSelection(page);
      onSelection?.();
    }
  }
  return (
    <>
      <Combobox
        immediate
        value={selectedPage}
        onChange={handleSelection}
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
            <Button size="small" onClick={() => setIsDrawerOpen(true)}>
              Create new URL
            </Button>
            <Button
              size="small"
              onClick={onSelection}
              className="flex items-center justify-center"
            >
              <span className="icon-[mdi--cancel]"></span>
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
            handleSelection({
              __typename: 'Url',
              id: val.id,
              title: val.label,
            });
          }}
        />
      </DrawerController>
    </>
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
