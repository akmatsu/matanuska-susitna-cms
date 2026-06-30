import { mergeAttributes, Node } from '@tiptap/core';
import { visit } from 'unist-util-visit';

export const StepList = Node.create({
  name: 'stepList',
  group: 'block',
  content: 'step+',

  parseHTML() {
    return [{ tag: 'ol.process' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'ol',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        'data-step-list': '',
        start: HTMLAttributes.start === 1 ? null : HTMLAttributes.start,
        'data-spread': HTMLAttributes['data-spread'] || 'false',
      }),
      0,
    ];
  },
});

export const Step = Node.create({
  name: 'step',
  group: 'step',
  content: 'block+',
  defining: true,

  addAttributes() {
    return {
      label: {
        default: 'st.',
        parseHTML: (el) => el.getAttribute('data-label') || 'st.',
        renderHTML: (attrs) => ({ 'data-label': attrs.label }),
      },
      listType: {
        default: 'step',
        parseHTML: (el) => el.getAttribute('data-list-type') || 'step',
        renderHTML: (attrs) => ({
          'data-list-type': attrs.listType,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'li.step' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'li',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        'data-step': '',
      }),
      0,
    ];
  },
});

export function remarkStepListDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'process') {
        const data = node.data || (node.data = {});
        const order = node.attributes?.order || 1;
        const spread = node.attributes?.spread || false;

        data.hName = 'ol';
        data.hProperties = {
          class: 'process',
          start: order,
          'data-spread': spread ? 'true' : 'false',
          'data-step-list': '',
        };
      }
    });
  };
}

export function remarkStepItemDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'step') {
        const data = node.data || (node.data = {});
        const label = node.attributes?.label || 'st.';
        const listType = node.attributes?.listType || 'step';

        data.hName = 'li';
        data.hProperties = {
          class: 'step',
          'data-label': label,
          'data-list-type': listType,
          'data-step': '',
        };
      }
    });
  };
}
