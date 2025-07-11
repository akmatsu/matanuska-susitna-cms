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
  },
  parseDOM: [
    {
      tag: 'a[data-internal-link]',
      getAttrs: (dom: HTMLElement) => {
        return {
          label: dom.textContent,
          itemId: dom.getAttribute('data-item-id'),
          list: dom.getAttribute('data-list'),
        };
      },
    },
  ],
  toDOM: (node) => {
    return [
      'a',
      {
        'data-internal-link': '',
        class: 'internal-link',
        'data-item-id': node.attrs.itemId,
        'data-list': node.attrs.list,
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
        },
      });
    },
  },
  parseMarkdown: {
    match: (node) =>
      node.type === 'textDirective' && node.name === 'internal-link',
    runner: (state, node, type) => {
      const { list, itemId } = node.attributes as {
        list: string;
        itemId: string;
      };
      const label = (node.children?.[0]?.value as string) || '';
      state.openMark(type, {
        list,
        label,
        itemId,
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
