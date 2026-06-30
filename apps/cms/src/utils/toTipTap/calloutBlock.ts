// src/utils/tiptapExtensions/calloutBlock.ts
import { Node } from '@tiptap/core';

export const CalloutBlock = Node.create({
  name: 'calloutBlock',
  group: 'block',
  content: 'block+',
  defining: true,

  addAttributes() {
    return {
      color: {
        default: 'default',
        parseHTML: (el) => el.getAttribute('data-color') || 'default',
        renderHTML: (attrs) => ({ 'data-color': attrs.color }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-callout-block]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { ...HTMLAttributes, 'data-callout-block': '' }, 0];
  },
});

// src/utils/remarkHandlers/calloutDirective.ts
import { visit } from 'unist-util-visit';

export function remarkCalloutDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'calloutBlock') {
        const data = node.data || (node.data = {});
        const color = node.attributes?.color || 'default';

        data.hName = 'div';
        data.hProperties = {
          'data-color': color,
          'data-callout-block': '',
        };
      }
    });
  };
}
