import { tooltipFactory } from '@milkdown/kit/plugin/tooltip';
import directive from 'remark-directive';
import {
  $command,
  $inputRule,
  $mark,
  $remark,
  $useKeymap,
} from '@milkdown/kit/utils';
import { InputRule } from '@milkdown/kit/prose/inputrules';
import { toggleMark } from '@milkdown/kit/prose/commands';
import { commandsCtx } from '@milkdown/kit/core';
import clsx from 'clsx';

export const internalLinkTooltip = tooltipFactory('internalLinkTooltip');
export const internalLinkDirective = $remark(
  'internal-link-plugin',
  () => directive,
);

export const InternalLinkMark = $mark('internal-link', () => ({
  group: 'inline',
  inline: true,
  defining: true,
  content: 'text*',
  selectable: true,
  inclusive: false,

  attrs: {
    label: { default: '' },
    itemId: { default: '' },
    list: { default: '' },
    style: { default: '' },
    color: { default: '' },
  },
  parseDOM: [
    {
      tag: 'a[data-internal-link]',
      getAttrs: (dom: HTMLElement) => {
        return {
          label: dom.textContent,
          itemId: dom.getAttribute('data-item-id'),
          list: dom.getAttribute('data-list'),
          style: dom.getAttribute('data-style') || '',
          color: dom.getAttribute('data-color') || '',
        };
      },
    },
  ],
  toDOM: (node) => {
    return [
      'a',
      {
        'data-internal-link': '',
        class: clsx(
          node.attrs.style === 'button' && [
            'inline-block  px-4 py-2 rounded shadow-sm no-underline cursor-pointer',

            node.attrs.color === 'primary' &&
              'bg-blue-600 hover:bg-blue-700 text-white',
            node.attrs.color === 'success' && 'bg-green-600 hover:bg-green-700',
            node.attrs.color === 'error' &&
              'bg-red-600 hover:bg-red-700 text-white',
            node.attrs.color === 'warning' &&
              'bg-yellow-600 hover:bg-yellow-700 text-white',
            (!node.attrs.color || node.attrs.color === 'base') &&
              'bg-gray-600 hover:bg-gray-700 text-white',
          ],
        ),
        'data-item-id': node.attrs.itemId,
        'data-list': node.attrs.list,
        'data-style': node.attrs.style,
        'data-color': node.attrs.color,
      },
      node.attrs.label,
    ];
  },
  toMarkdown: {
    match: (mark) => mark.type.name === 'internal-link',
    runner: (state, mark) => {
      state.withMark(mark, 'textDirective', undefined, {
        name: 'internal-link',
        attributes: {
          list: mark.attrs.list,
          itemId: mark.attrs.itemId,
          style: mark.attrs.style,
          color: mark.attrs.color,
        },
      });
    },
  },
  parseMarkdown: {
    match: (node) =>
      node.type === 'textDirective' && node.name === 'internal-link',
    runner: (state, node, type) => {
      const { list, itemId, style, color } = node.attributes as {
        list: string;
        itemId: string;
        style: string;
        color: string;
      };
      const label = (node.children?.[0]?.value as string) || '';
      state.openMark(type, {
        list,
        label,
        itemId,
        style,
        color,
      });
      state.next(node.children);
      state.closeMark(type);
    },
  },
}));

export const InternalLinkInputRule = $inputRule(
  (ctx) =>
    new InputRule(/\[([^\]]+)\]/, (state, match, start, end) => {
      const [, label = ''] = match;

      if (!label) return null;
      const { tr } = state;
      const mark = InternalLinkMark.type(ctx).create({
        label,
        itemId: '',
        list: '',
        style: '',
        color: '',
      });

      const textWithMark = state.schema.text(label, [mark]);
      return tr.replaceWith(start, end, textWithMark);
    }),
);

export const toggleInternalLinkCommand = $command(
  'toggleInternalLinkCmd',
  (ctx) => () => toggleMark(InternalLinkMark.type(ctx)),
);

export const internalLinkKeymap = $useKeymap('internalLinkKeymap', {
  InternalLinkCommand: {
    shortcuts: 'Mod-k',
    command: (ctx) => {
      const commands = ctx.get(commandsCtx);
      return () => commands.call(toggleInternalLinkCommand.key);
    },
  },
});
