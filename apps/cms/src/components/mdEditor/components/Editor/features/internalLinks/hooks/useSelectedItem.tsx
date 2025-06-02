import { Mark } from '@milkdown/kit/prose/model';
import { TextSelection } from '@milkdown/kit/prose/state';
import { PluginViewContext } from '@prosemirror-adapter/react';
import { useEffect, useState } from 'react';
import { getMarkRange } from '../utils/markHelpers';

export type Page = {
  __typename: string;
  id: string;
  title: string;
};

export function useSelectionHandler(view: PluginViewContext['view']) {
  const [selectedPage, setPage] = useState<Page | null>(null);
  const { selection } = view.state;
  const [linkInfo, setLinkInfo] = useState<{
    mark: Mark;
    to: number;
    from: number;
  } | null>(null);

  useEffect(() => {
    if (!(selection instanceof TextSelection && selection.$cursor)) return;
    const { $cursor } = selection;
    const { schema } = view.state;
    const markType = schema.marks['internal-link'];
    const mark = markType.isInSet($cursor.marks());
    if (!mark || mark.type.name !== 'internal-link') return;

    setLinkInfo({
      mark,
      ...getMarkRange($cursor, markType),
    });

    setPage(null);
  }, [selection]);

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
    linkInfo,
    handlePageSelection,
    setPage,
    setLinkInfo,
  };
}
