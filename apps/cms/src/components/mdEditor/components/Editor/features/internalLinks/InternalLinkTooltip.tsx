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
import {
  gql,
  TypedDocumentNode,
  useQuery,
} from '@keystone-6/core/admin-ui/apollo';
import v from 'voca';
import { Mark } from '@milkdown/kit/prose/model';
import { PluginViewContext } from '@prosemirror-adapter/react';
import {
  GetInternalLinkQuery,
  GetInternalLinkQueryVariables,
  LinkSearchQuery,
} from '../../../../../../graphql/graphql';

export function InternalLinkTooltip() {
  const { contentRef, view, linkInfo, isShowing } =
    useInternalTooltipProvider();
  const [isEditing, setEditing] = useState(false);

  const listType = linkInfo?.mark?.attrs?.list
    ? v.camelCase(singular(linkInfo.mark.attrs.list))
    : undefined;

  const query: TypedDocumentNode<
    GetInternalLinkQuery,
    GetInternalLinkQueryVariables
  > = gql`
    query GetInternalLink($id: ID!, $type: String!) {
      getInternalLink(id: $id, type: $type) {
        __typename
        ... on AssemblyDistrict {
          title
        }
        ... on Board {
          title
        }
        ... on BoardPage {
          title
        }
        ... on Community {
          title
        }
        ... on Facility {
          title
        }
        ... on HomePage {
          title
        }
        ... on OrgUnit {
          title
        }
        ... on Park {
          title
        }
        ... on PublicNotice {
          title
        }
        ... on Service {
          title
        }
        ... on Trail {
          title
        }
        ... on Url {
          title
        }
      }
    }
  `;

  const { data: linkData, loading } = useQuery(query, {
    variables: {
      id: linkInfo?.mark?.attrs?.itemId,
      type: v.capitalize(listType),
    },
    skip: !listType,
  });

  function removeLink() {
    const { tr } = view.state;
    if (!linkInfo) return;
    tr.removeMark(linkInfo.from, linkInfo.to, linkInfo.mark);
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
      {isEditing ? (
        <SearchInput
          view={view}
          linkInfo={linkInfo}
          onSelection={() => setEditing(false)}
        />
      ) : (
        <div className="flex items-center justify-between gap-2">
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
          <Button
            size="small"
            onClick={() => setEditing(true)}
            name="Edit Link"
            aria-label="Edit Link"
          >
            <span className="icon-[mdi--pencil]"></span>
          </Button>
          <Button
            size="small"
            onClick={removeLink}
            name="Remove Link"
            aria-label="Remove Link"
          >
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
            'card w-[var(--input-width)] rounded-sm border bg-white p-1 [--anchor-gap:var(--spacing-1)]',
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

function Options({ data }: { data: LinkSearchQuery }) {
  return (
    <>
      {data.internalSearch?.map(
        (item) =>
          item && (
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
          ),
      )}
    </>
  );
}
