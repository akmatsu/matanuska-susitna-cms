'use client';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { plural, singular } from 'pluralize';
import { useEffect, useState } from 'react';
import { CreateItemDialog } from '../../../../../CreateItemDialog';
import { Button } from '@keystar/ui/button';
import { useInternalSearchQuery } from './hooks/useInternalSearchQuery';
import { useInternalTooltipProvider } from './hooks/useInternalTooltipProvider';
import { Page, useSelectionHandler } from './hooks/useSelectedItem';
import v from 'voca';
import { Mark } from '@milkdown/kit/prose/model';
import { PluginViewContext } from '@prosemirror-adapter/react';
import { LinkSearchQuery } from '../../../../../../graphql/graphql';
import { useGetLinkInfo } from './hooks/useGetLinkInfo';
import { Checkbox } from '@keystar/ui/checkbox';
import { Item, Picker } from '@keystar/ui/picker';

const BUTTON_COLOR_OPTIONS = [
  { value: 'base', label: 'Base' },
  { value: 'primary', label: 'Primary' },
  { value: 'success', label: 'Success' },
  { value: 'error', label: 'Error' },
  { value: 'warning', label: 'Warning' },
];

export function InternalLinkTooltip() {
  const { contentRef, view, linkInfo, isShowing } =
    useInternalTooltipProvider();
  const [isEditing, setEditing] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    linkInfo?.mark?.attrs?.color?.length
      ? {
          value: linkInfo.mark.attrs.color as string,
          label: v.capitalize(linkInfo.mark.attrs.color as string),
        }
      : { value: 'default', label: 'Default' },
  );

  const listType = linkInfo?.mark?.attrs?.list
    ? v.camelCase(singular(linkInfo.mark.attrs.list))
    : undefined;

  const isButton = linkInfo?.mark?.attrs?.style === 'button';

  const { data: linkData, loading } = useGetLinkInfo(
    linkInfo?.mark?.attrs?.itemId,
    v.capitalize(listType),
  );

  function removeLink() {
    const { tr } = view.state;
    if (!linkInfo) return;
    tr.removeMark(linkInfo.from, linkInfo.to, linkInfo.mark);
    view.dispatch(tr);
  }

  function setIsButton(value: boolean) {
    if (!linkInfo) return;

    const { tr } = view.state;
    const newStyle = value ? 'button' : '';
    tr.addMark(
      linkInfo.from,
      linkInfo.to,
      linkInfo.mark.type.create({
        ...linkInfo.mark.attrs,
        style: newStyle,
      }),
    );
    view.dispatch(tr);
  }

  function setColor(value: { value: string; label: string } | null) {
    if (!linkInfo) return;
    if (value) setSelectedColor(value);
    const { tr } = view.state;
    tr.addMark(
      linkInfo.from,
      linkInfo.to,
      linkInfo.mark.type.create({
        ...linkInfo.mark.attrs,
        color: value?.value || 'default',
      }),
    );
    view.dispatch(tr);
  }

  useEffect(() => {
    if (listType) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }, [listType, isShowing]);

  return (
    <div
      ref={contentRef}
      className="absolute z-20 -mt-2 rounded-sm border border-gray-300 bg-white p-2 shadow-md data-[show=false]:hidden"
    >
      <div className="flex flex-col gap-2">
        {isEditing ? (
          <SearchInput
            view={view}
            linkInfo={linkInfo}
            onSelection={() => setEditing(false)}
          />
        ) : (
          <div className="flex flex-col gap-2">
            {isButton && (
              <div className="flex gap-2">
                <Picker
                  aria-label="Button color"
                  items={BUTTON_COLOR_OPTIONS}
                  selectedKey={selectedColor.value}
                  onSelectionChange={(key) => {
                    setColor(
                      BUTTON_COLOR_OPTIONS.find((o) => o.value === key) ??
                        null,
                    );
                  }}
                >
                  {(item) => <Item key={item.value}>{item.label}</Item>}
                </Picker>
              </div>
            )}
            <div className="flex items-center gap-2">
              {!!linkInfo &&
                !!listType &&
                !!linkInfo.mark?.attrs?.itemId &&
                (loading ? (
                  <span className="icon-[mdi--loading] animate-spin" />
                ) : (
                  <Link
                    href={`/${listType === 'homePage' ? 'home-page' : listType === 'boardPage' ? 'board-page' : plural(v.slugify(listType))}/${linkInfo.mark?.attrs?.itemId}`}
                    target="_blank"
                  >
                    {linkData?.getInternalLink?.title || ''}{' '}
                    <span className="icon-[mdi--external-link] -mb-0.5 size-4"></span>
                  </Link>
                ))}
              <Button onPress={() => setEditing(true)} aria-label="Edit Link">
                <span className="icon-[mdi--pencil]"></span>
              </Button>
              <Button onPress={removeLink} aria-label="Remove Link">
                <span className="icon-[mdi--delete]"></span>
              </Button>

              <Checkbox
                isSelected={isButton}
                onChange={() => setIsButton(!isButton)}
              >
                Toggle Button Style
              </Checkbox>
            </div>
          </div>
        )}
      </div>
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
  const { data, setQuery, loading } = useInternalSearchQuery();
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
            <Button onPress={() => setIsDrawerOpen(true)}>
              Create new URL
            </Button>
            <Button onPress={onSelection}>
              <span className="icon-[mdi--cancel]"></span>
            </Button>
          </div>
        </div>
        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'card w-(--input-width) rounded-sm border bg-white p-1 [--anchor-gap:var(--spacing-1)]',
            'transition duration-100 ease-in',
          )}
        >
          {loading ? (
            <>
              <span className="icon-[mdi--loading] animate-spin" />{' '}
              <span>Loading...</span>
            </>
          ) : data?.internalSearch?.length ? (
            <Options data={data} />
          ) : (
            'No results found'
          )}
        </ComboboxOptions>
      </Combobox>
      <CreateItemDialog
        listKey="Url"
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onCreate={(val) => {
          setIsDrawerOpen(false);
          handleSelection({
            __typename: 'Url',
            id: val.id,
            title: val.label ?? '',
          });
        }}
      />
    </>
  );
}

function Options({ data }: { data: LinkSearchQuery }) {
  return (
    <>
      {data.internalSearch?.map((item) => {
        return (
          item &&
          '__typename' in item &&
          'id' in item &&
          'title' in item && (
            <ComboboxOption
              key={item.id + item.__typename}
              value={item}
              className="my-1 cursor-pointer rounded-md bg-gray-100 px-3 py-1.5 transition-all select-none data-focus:bg-blue-200"
            >
              <div>
                <span className="text-xs font-bold text-gray-500">
                  {item.__typename}
                </span>
              </div>
              <div>
                <span>{item.title}</span>
              </div>
            </ComboboxOption>
          )
        );
      })}
    </>
  );
}
