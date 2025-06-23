import { SlashProvider } from '@milkdown/kit/plugin/slash';
import { useInstance } from '@milkdown/react';
import React, { useEffect, useRef, useState } from 'react';
import { isInCodeBlock, isInList } from '../utils';
import {
  PluginViewContext,
  usePluginViewContext,
} from '@prosemirror-adapter/react';
import { slash } from '../config';

export function useSlashProvider(onShow?: () => void, onHide?: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const slashProvider = useRef<SlashProvider | null>(null);
  const { view, prevState } = usePluginViewContext();
  const [loading, get] = useInstance();
  const [filter, setFilter] = useState<string>('');
  const [programmaticPos, setPos] = useState<number | null>(null);

  useEffect(() => {
    const content = ref.current;
    if (!content) return;

    slashProvider.current = new SlashProvider({
      content,
      shouldShow(this: SlashProvider) {
        if (checkIfSelectionInvalid(view)) {
          return false;
        }

        const text = getContent(this, view);
        if (text == null) {
          return false;
        }

        setFilter(text.startsWith('/') ? text.slice(1) : text);

        if (programmaticPos !== null) {
          return checkIfPosValid(programmaticPos, view, () => setPos(null));
        } else if (!text.startsWith('/')) {
          return false;
        }
        return true;
      },
      offset: 10,
    });
    slashProvider.current.onShow = () => {
      onShow?.();
    };
    slashProvider.current.onHide = () => {
      onHide?.();
    };

    const ctx = get()?.ctx;
    let hasSlash = true;
    try {
      ctx?.get(slash.key);
    } catch {
      hasSlash = false;
    }

    if (hasSlash) {
      ctx?.set(slash.key, {
        show,
        hide,
      });
    }

    return () => {
      slashProvider.current?.destroy();
      slashProvider.current = null;
    };
  }, [loading, programmaticPos]);

  useEffect(() => {
    if (!slashProvider.current) return;
    const id = window.setTimeout(() => {
      slashProvider.current?.update(view, prevState);
    }, 0);
    return () => window.clearTimeout(id);
  }, [view, prevState]);

  function show(p: number) {
    setPos(p);
    setFilter('');
    slashProvider.current?.show();
  }

  function hide() {
    setPos(null);
    slashProvider.current?.hide();
  }

  return {
    filter,
    slashProvider,
    hide,
    show,
    ref,
  };
}

function checkIfSelectionInvalid(view: PluginViewContext['view']) {
  return isInCodeBlock(view.state.selection) && isInList(view.state.selection);
}

function getContent(provider: SlashProvider, view: PluginViewContext['view']) {
  return provider.getContent(view, (node) =>
    ['paragraph', 'heading'].includes(node.type.name),
  );
}

function checkIfPosValid(
  pos: number,
  view: PluginViewContext['view'],
  onFail: () => void,
) {
  try {
    if (
      view.state.doc.resolve(pos).node() !==
      view.state.doc.resolve(view.state.selection.from).node()
    ) {
      onFail();
      return false;
    }
  } catch (err: any) {
    if (/^Position\s\d+\sout\sof\srange$/.test(err?.message)) {
      onFail();
      return false;
    } else {
      throw err;
    }
  }
  return true;
}
