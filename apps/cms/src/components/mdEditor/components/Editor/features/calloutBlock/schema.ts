import { InputRule } from '@milkdown/kit/prose/inputrules';
import { $inputRule, $node } from '@milkdown/kit/utils';

const nodeName = 'calloutBlock';

export const calloutSchema = $node(nodeName, () => ({
  group: 'block',
  content: 'block+',
  defining: true,
  attrs: {
    color: {
      default: 'default',
    },
    'callout-block': {
      default: '',
    },
  },
  parseDOM: [
    {
      tag: 'div[data-callout-block="true"]',
      getAttrs: (dom) => ({
        color: (dom as HTMLElement).getAttribute('data-color') || 'default',
      }),
    },
  ],
  toDOM: (node) => [
    'div',
    {
      'data-color': node.attrs.color,
      'data-callout-block': '',
    },
    0,
  ],
  parseMarkdown: {
    match: ({ type, name }) => {
      console.log(type, name);
      return type === 'containerDirective' && name === nodeName;
    },
    runner: (state, node, type) => {
      const color =
        (node.attributes as { color?: string } | undefined)?.color || 'default';

      state.openNode(type, { color });
      state.next(node.children);
      state.closeNode();
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === nodeName,
    runner: (state, node) => {
      const color = node.attrs.color || 'default';
      state.openNode('containerDirective', undefined, {
        name: nodeName,
        attributes: { color },
      });
      state.next(node.content);
      state.closeNode();
    },
  },
}));

export const calloutInputRule = $inputRule(
  (ctx) =>
    new InputRule(/:::calloutBlock\{([^}]+)\}/, (state, match, start, end) => {
      const [okay, attrsStr = ''] = match;
      const { tr } = state;
      if (!okay) return tr;

      const colorMatch = attrsStr.match(/color="([^"]+)"/);
      const color = colorMatch ? colorMatch[1] : 'default';

      tr.replaceWith(start - 1, end, calloutSchema.type(ctx).create({ color }));
      return tr;
    }),
);
