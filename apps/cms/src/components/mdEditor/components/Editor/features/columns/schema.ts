import { $node } from '@milkdown/kit/utils';

const DEFAULT_COLUMN_COUNT = 2;

const normalizeCount = (value: unknown) => {
  if (value === 3 || value === '3') return 3;
  return DEFAULT_COLUMN_COUNT;
};

export const ColumnNode = $node('column', () => ({
  content: 'block+',
  defining: true,
  isolating: true,
  parseDOM: [
    {
      tag: 'div.md-column',
      getAttrs: (dom) => {
        if (!(dom instanceof HTMLElement)) throw new Error('DOM type error');
        return {};
      },
    },
  ],
  toDOM: () => [
    'div',
    {
      class:
        'md-column flex min-w-0 flex-col gap-1 rounded border border-gray-100 p-4',
    },
    0,
  ],
  parseMarkdown: {
    match: ({ type, name }) =>
      type === 'containerDirective' && name === 'column',
    runner: (state, node, type) => {
      state.openNode(type).next(node.children).closeNode();
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === 'column',
    runner: (state, node) => {
      state.openNode('containerDirective', undefined, {
        name: 'column',
      });
      state.next(node.content);
      state.closeNode();
    },
  },
}));

export const ColumnsNode = $node('columns', () => ({
  content: 'column+',
  group: 'block',
  defining: true,
  attrs: {
    count: {
      default: DEFAULT_COLUMN_COUNT,
    },
  },
  parseDOM: [
    {
      tag: 'div.md-columns',
      getAttrs: (dom) => {
        if (!(dom instanceof HTMLElement)) throw new Error('DOM type error');
        const count = normalizeCount(dom.dataset.columnsCount);
        return { count };
      },
    },
  ],
  toDOM: (node) => {
    const layoutClass =
      node.attrs.count === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

    return [
      'div',
      {
        class: `md-columns grid gap-1 ${layoutClass} grid-cols-1`,
        'data-columns-count': node.attrs.count,
      },
      0,
    ];
  },
  parseMarkdown: {
    match: ({ type, name }) =>
      type === 'containerDirective' && name === 'columns',
    runner: (state, node, type) => {
      const attributes = node.attributes as
        | { count?: string | number }
        | undefined;
      const count = normalizeCount(attributes?.count);
      state.openNode(type, { count }).next(node.children).closeNode();
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === 'columns',
    runner: (state, node) => {
      state.openNode('containerDirective', undefined, {
        name: 'columns',
        attributes: {
          count: `${node.attrs.count}`,
        },
      });
      state.next(node.content);
      state.closeNode();
    },
  },
}));
