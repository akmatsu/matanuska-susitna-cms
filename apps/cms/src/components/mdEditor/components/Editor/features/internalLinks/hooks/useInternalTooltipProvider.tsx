import { useEffect, useRef, useState } from 'react';
import { TooltipProvider } from '@milkdown/kit/plugin/tooltip';
import { TextSelection } from '@milkdown/kit/prose/state';
import { usePluginViewContext } from '@prosemirror-adapter/react';
import { useInstance } from '@milkdown/react';
import { Mark } from '@milkdown/kit/prose/model';

export function useInternalTooltipProvider() {
  const { view, prevState } = usePluginViewContext();
  const [instanceLoading, get] = useInstance();
  const tooltipProvider = useRef<TooltipProvider | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [linkInfo, setLinkInfo] = useState<{
    mark: Mark;
    to: number;
    from: number;
  } | null>(null);

  useEffect(() => {
    const div = contentRef.current;
    if (!div) return;
    tooltipProvider.current = new TooltipProvider({
      content: div,
      shouldShow(view) {
        const { selection, schema } = view.state;
        if (!(selection instanceof TextSelection)) return false;

        const { from, to } = selection;

        const markType = schema.marks['internal-link'];

        let found = false;
        view.state.doc.nodesBetween(from, to, (node, pos) => {
          const mark = markType.isInSet(node.marks);
          if (mark) {
            if (from >= pos && to <= pos + node.nodeSize) {
              found = true;
            }
            setLinkInfo({
              mark,
              from: pos,
              to: pos + node.nodeSize,
            });
            return false;
          }
        });

        return found;
      },
    });

    return () => {
      tooltipProvider.current?.destroy();
      tooltipProvider.current = null;
    };
  }, [view, instanceLoading]);

  useEffect(() => {
    if (!tooltipProvider.current) return;
    const id = window.setTimeout(() => {
      tooltipProvider.current?.update(view, prevState);
    }, 0);
    return () => window.clearTimeout(id);
  }, [view, prevState]);

  return {
    tooltipProvider,
    contentRef,
    instanceLoading,
    get,
    view,
    prevState,
    linkInfo,
  };
}
