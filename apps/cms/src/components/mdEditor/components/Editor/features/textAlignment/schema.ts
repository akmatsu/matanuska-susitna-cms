import { $node } from '@milkdown/kit/utils';

export type TextAlignmentValue = 'left' | 'center' | 'right';

export const TEXT_ALIGNMENT_NODE = 'textAlign';

export const textAlignmentSchema = $node(TEXT_ALIGNMENT_NODE, () => ({
  group: 'block',
  content: 'block+',
  defining: true,
  attrs: {
    align: {
      default: 'left' as TextAlignmentValue,
    },
  },
  parseDOM: [
    {
      tag: 'div[data-text-align-block]',
      getAttrs: (dom) => ({
        align: ((dom as HTMLElement).getAttribute('data-text-align') ||
          'left') as TextAlignmentValue,
      }),
    },
  ],
  toDOM: (node) => [
    'div',
    {
      'data-text-align-block': '',
      'data-text-align': node.attrs.align,
      class: 'md-editor-align-block',
      style:
        node.attrs.align && node.attrs.align !== 'left'
          ? `text-align: ${node.attrs.align};`
          : undefined,
    },
    0,
  ],
  parseMarkdown: {
    match: ({ type, name }) =>
      type === 'containerDirective' && name === TEXT_ALIGNMENT_NODE,
    runner: (state, node, type) => {
      const align = ((
        node.attributes as { align?: TextAlignmentValue } | undefined
      )?.align || 'left') as TextAlignmentValue;
      state.openNode(type, { align });
      state.next(node.children);
      state.closeNode();
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === TEXT_ALIGNMENT_NODE,
    runner: (state, node) => {
      const align = (node.attrs.align as TextAlignmentValue) || 'left';
      state.openNode('containerDirective', undefined, {
        name: TEXT_ALIGNMENT_NODE,
        attributes: { align },
      });
      state.next(node.content);
      state.closeNode();
    },
  },
}));
