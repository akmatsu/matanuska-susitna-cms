import { mergeAttributes, Node } from '@tiptap/core';
import { visit } from 'unist-util-visit';

const DEFAULT_COLUMN_COUNT = 2;

const normalizeCount = (value: unknown) => {
  if (value === 3 || value === '3') return 3;
  return DEFAULT_COLUMN_COUNT;
};

export const Column = Node.create({
  name: 'column',
  group: 'column',
  content: 'block+',

  parseHTML() {
    return [{ tag: 'div[data-column]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-column': '',
        class: 'min-w-0 gap-1 rounded bg-gray-100 p-4 mt-0!',
      }),
      0,
    ];
  },
});

export const ColumnWrapper = Node.create({
  name: 'columnWrapper',
  group: 'block',
  content: 'column{2,3}',
  defining: true,

  addAttributes() {
    return {
      count: {
        default: DEFAULT_COLUMN_COUNT,
        parseHTML: (el) => normalizeCount(el.getAttribute('data-count')),
        renderHTML: (attrs) => ({ 'data-count': attrs.count }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-column-wrapper]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        class:
          'grid gap-1 data-[count=2]:md:grid-cols-2 data-[count=3]:md:grid-cols-3 grid-cols-1',
        'data-column-wrapper': '',
      }),
      0,
    ];
  },
});

export function remarkColumnsDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'columns') {
        const data = node.data || (node.data = {});
        const count = normalizeCount(node.attributes?.count);

        data.hName = 'div';
        data.hProperties = {
          'data-column-wrapper': '',
          'data-count': count,
        };
      }
    });
  };
}

export function remarkColumnDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'column') {
        const data = node.data || (node.data = {});

        data.hName = 'div';
        data.hProperties = {
          'data-column': '',
        };
      }
    });
  };
}
