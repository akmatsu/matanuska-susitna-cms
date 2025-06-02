import { Mark } from '@milkdown/kit/prose/model';
import { Selection, TextSelection } from '@milkdown/kit/prose/state';
import { PluginViewContext } from '@prosemirror-adapter/react';
import { useEffect, useState } from 'react';

export function useCurrentMark({
  selection,
  view,
}: {
  selection: Selection;
  view: PluginViewContext['view'];
}) {
  const [currentMark, _setCurrentMark] = useState<Mark | null>(null);

  function setCurrentMark(mark: Mark) {
    _setCurrentMark(mark);
  }

  function clearCurrentMark() {
    _setCurrentMark(null);
  }

  useEffect(() => {
    if (!(selection instanceof TextSelection && selection.$cursor)) return;
    const { $cursor } = selection;
    const { schema } = view.state;
    const markType = schema.marks['internal-link'];
    const mark = markType.isInSet($cursor.marks());
    if (!mark || mark.type.name !== 'internal-link') return;

    setCurrentMark(mark);
  }, [selection]);

  return { currentMark, setCurrentMark, clearCurrentMark };
}
