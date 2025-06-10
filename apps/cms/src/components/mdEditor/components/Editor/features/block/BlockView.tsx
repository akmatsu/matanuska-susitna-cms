import { MouseEvent } from 'react';
import { useInstance } from '@milkdown/react';
import { paragraphSchema } from '@milkdown/kit/preset/commonmark';
import { slash } from '../slash';
import { useBlockProvider } from './hooks';
import { usePluginViewContext } from '@prosemirror-adapter/react';
import { TextSelection } from '@milkdown/kit/prose/state';
import { Fragment } from '@milkdown/kit/prose/model';

export function BlockView() {
  const [, get] = useInstance();
  const { provider, ref } = useBlockProvider();
  const { view } = usePluginViewContext();

  function handleMouseDown(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleMouseUp(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    const ctx = get()?.ctx;
    if (!view.hasFocus()) view.focus();

    const { state, dispatch } = view;
    const active = provider.current?.active;
    if (!active) return;

    const $pos = active.$pos;
    const pos = $pos.pos + active.node.nodeSize;

    const content = active.node.content as Fragment & { content: any[] };

    if (content.content.length && ctx) {
      let tr = state.tr.insert(pos, paragraphSchema.type(ctx).create(null));
      tr = tr.setSelection(TextSelection.near(tr.doc.resolve(pos)));
      dispatch(tr.scrollIntoView());
      ctx.get(slash.key).show(tr.selection.from);
    } else {
      const tr = state.tr;

      tr.setSelection(TextSelection.near(tr.doc.resolve(state.selection.from)));
      dispatch(tr.scrollIntoView());
      ctx?.get(slash.key).show(tr.selection.from);
    }

    provider.current?.hide();
  }

  return (
    <div
      ref={ref}
      className="absolute flex flex-col gap-2 transition-all data-[show=false]:opacity-0"
    >
      <div className="flex h-auto w-auto cursor-move flex-col justify-center rounded-sm bg-gray-200 p-1 shadow-sm transition-all hover:bg-gray-300">
        <span className="icon-[icon-park-outline--drag] size-4"></span>
      </div>
      <div
        className="flex h-auto w-auto cursor-pointer flex-col justify-center rounded-sm bg-gray-200 p-1 shadow-sm transition-all hover:bg-gray-300"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <span className="icon-[ri--add-fill] size-4"></span>
      </div>
    </div>
  );
}
