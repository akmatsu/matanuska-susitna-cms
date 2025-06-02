import { useEffect, useRef } from 'react';
import { TooltipProvider } from '@milkdown/kit/plugin/tooltip';
import { TextSelection } from '@milkdown/kit/prose/state';
import { usePluginViewContext } from '@prosemirror-adapter/react';
import { useInstance } from '@milkdown/react';

export function useInternalTooltipProvider() {
  const { view, prevState } = usePluginViewContext();
  const [instanceLoading] = useInstance();
  const tooltipProvider = useRef<TooltipProvider | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = contentRef.current;
    if (!div) return;
    tooltipProvider.current = new TooltipProvider({
      content: div,
      shouldShow(view) {
        const { selection, schema } = view.state;
        if (!(selection instanceof TextSelection)) return false;

        const markType = schema.marks['internal-link'];
        const marksInSelection = selection.$cursor?.marks();
        if (!marksInSelection) return false;

        return !!markType.isInSet(marksInSelection);
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
    view,
    prevState,
  };
}
