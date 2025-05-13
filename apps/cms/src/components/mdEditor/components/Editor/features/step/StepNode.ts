import { $node } from '@milkdown/kit/utils';

export const stepSchema = $node('step', (ctx) => ({
  content: 'block+',
  group: 'step',
  defining: true,
  attrs: {
    label: {
      default: 'st.',
    },
    listType: {
      default: 'step',
    },
  },
  parseDOM: [
    {
      tag: 'li.step',
      getAttrs: (dom) => {
        if (!(dom instanceof HTMLElement)) throw new Error('DOM type error');
        return {};
      },
    },
  ],
  toDOM: (node) => [
    'li',
    {
      class:
        'step pl-6 border-l-4 min-h-9 ml-2 before:shadow-[0_0_0_0.25rem_#ffffff] before:flex before:items-center before:justify-center before:text-xl before:border-2 before:border-black before:rounded-full before:size-8 before:absolute before:bg-white before:content-[counter(muffins,decimal)] before:[counter-increment:muffins] before:-left-[1.1rem] [&>p:first-child]:mt-0 [&>p:first-child]:text-xl [&>p:first-child]:font-bold [&>p:first-child]:my-0',
      'data-label': node.attrs.label,
      'data-list-type': node.attrs.listType,
    },
    0,
  ],
  parseMarkdown: {
    match: ({ type, name }) => type === 'containerDirective' && name === 'step',
    runner: (state, node, type) => {
      const label = node.label ? `${node.label}` : 'step.';
      const listType = 'step';
      state.openNode(type, { label, listType }).next(node.children).closeNode();
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === 'step',
    runner: (state, node) => {
      state.openNode('containerDirective', undefined, {
        name: 'step',
        label: 'step.',
      });
      state.next(node.content);
      state.closeNode();
    },
  },
}));
