import { Mark } from '@milkdown/kit/prose/model';
import { PluginViewContext } from '@prosemirror-adapter/react';
import { useState } from 'react';

export type Page = {
  __typename: string;
  id: string;
  title: string;
};

export function useSelectionHandler(
  view: PluginViewContext['view'],
  linkInfo: {
    mark: Mark;
    to: number;
    from: number;
  } | null,
) {
  const [selectedPage, setPage] = useState<Page | null>(null);

  function handlePageSelection(page: Page | null) {
    setPage(page);
    if (!linkInfo || !page?.id) return;
    const { from, to, mark } = linkInfo;

    const { state, dispatch } = view;
    const tr = state.tr.removeMark(from, to, mark.type).addMark(
      from,
      to,
      mark.type.create({
        ...mark.attrs,
        itemId: page.id,
        list: page.__typename,
        label: page.title,
      }),
    );
    dispatch(tr);
  }

  return {
    selectedPage,
    handlePageSelection,
    setPage,
  };
}
