import React from 'react';
import { Ctx } from '@milkdown/kit/ctx';
import { TooltipProvider } from '@milkdown/kit/plugin/tooltip';
import { useInstance } from '@milkdown/react';
import { usePluginViewContext } from '@prosemirror-adapter/react';
import { useCallback, useEffect, useRef } from 'react';
import { TextSelection } from '@milkdown/kit/prose/state';
import { TOOLBAR_COMMANDS } from './commands';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export const ToolbarView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const tooltipProvider = useRef<TooltipProvider | null>(null);

  const { view, prevState } = usePluginViewContext();
  const [loading, get] = useInstance();
  const action = useCallback(
    (fn: (ctx: Ctx) => void) => {
      if (loading) return;
      get().action(fn);
    },
    [loading],
  );

  useEffect(() => {
    const div = ref.current;
    if (loading || !div) {
      return;
    }
    tooltipProvider.current = new TooltipProvider({
      content: div,
      offset: {
        alignmentAxis: 200,
      },
      shouldShow(view) {
        const { doc, selection } = view.state;
        const { empty, from, to } = selection;

        const isEmptyTextBlock =
          !doc.textBetween(from, to).length &&
          selection instanceof TextSelection;

        const isNotTextBlock = !(selection instanceof TextSelection);

        const activeElement = (view.dom.getRootNode() as ShadowRoot | Document)
          .activeElement;

        const isTooltipChildren = div.contains(activeElement);

        const notHasFocus = !view.hasFocus() && !isTooltipChildren;

        const isReadonly = !view.editable;

        if (
          notHasFocus ||
          isNotTextBlock ||
          empty ||
          isEmptyTextBlock ||
          isReadonly
        )
          return false;

        return true;
      },
    });

    return () => {
      tooltipProvider.current?.destroy();
    };
  }, [loading]);

  useEffect(() => {
    tooltipProvider.current?.update(view, prevState);
  });

  return (
    <div
      className="card absolute z-10 -mt-2 flex gap-2 data-[show=false]:hidden"
      ref={ref}
    >
      {TOOLBAR_COMMANDS.map((cmd) =>
        cmd.children?.length ? (
          <Menu key={crypto.randomUUID()}>
            <MenuButton className="btn btn--default rounded-full">
              <span className={`${cmd.icon} size-6`}></span>
              <span
                className={`${cmd.icon} icon-[bi--caret-down-fill] size-2`}
              ></span>
            </MenuButton>
            <MenuItems anchor="bottom" className="card flex flex-col gap-2">
              {cmd.children.map((child) => (
                <MenuItem key={crypto.randomUUID()}>
                  <button
                    className="btn btn--default rounded-full"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      action(child.action(view));
                    }}
                  >
                    <span className={`${child.icon} mr-4 size-4`}></span>
                    {child.label}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        ) : (
          <button
            key={crypto.randomUUID()}
            className="btn btn--default rounded-full"
            onMouseDown={(e) => {
              e.preventDefault();
              if (cmd.action) action(cmd.action(view));
            }}
          >
            <span className={`${cmd.icon} size-6`}></span>
          </button>
        ),
      )}
    </div>
  );
};
