import { $node } from '@milkdown/kit/utils';

export const blockquoteSchema = $node('blockquote', () => ({
  group: 'block',
  content: 'block+',
  defining: true,
  attrs: {
    color: {
      default: 'default',
    },
  },
  parseDOM: [
    {
      tag: 'blockquote',
      getAttrs: (dom) => ({
        color: (dom as HTMLElement).getAttribute('data-color') || 'default',
      }),
    },
  ],
  toDOM: (node) => [
    'blockquote',
    {
      'data-color': node.attrs.color,
    },
    0,
  ],
  parseMarkdown: {
    match: ({ type, name }) =>
      type === 'blockquote' ||
      (type === 'containerDirective' && name === 'blockquote'),
    runner: (state, node, type) => {
      const color =
        node.type === 'containerDirective'
          ? (node.attributes as { color?: string } | undefined)?.color ||
            'default'
          : 'default';
      state.openNode(type, { color });
      state.next(node.children);
      state.closeNode();
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === 'blockquote',
    runner: (state, node) => {
      const color = node.attrs.color || 'default';
      // Always use container directive format
      state.openNode('containerDirective', undefined, {
        name: 'blockquote',
        attributes: { color },
      });
      state.next(node.content);
      state.closeNode();
    },
  },
}));
