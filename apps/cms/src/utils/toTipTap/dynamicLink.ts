import { Mark, mergeAttributes } from '@tiptap/core';
import { visit } from 'unist-util-visit';

/**
 * Remark plugin that converts `:internal-link[label]{list="X" itemId="Y" style="Z" color="C"}`
 * text directives into `<a data-dynamic-link ...>` HTML elements that the
 * DynamicLink TipTap mark can parse.
 */
export function remarkDynamicLinkDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'textDirective' && node.name === 'internal-link') {
        const attrs = node.attributes || {};

        const data = node.data || (node.data = {});
        data.hName = 'a';
        data.hProperties = {
          'data-dynamic-link': '',
          'data-model-type': attrs.list || '',
          'data-model-id': attrs.itemId || '',
          'data-variant': attrs.style === 'button' ? 'button' : 'link',
          'data-color': attrs.color || 'base',
        };
      }
    });
  };
}

/**
 * Minimal TipTap Mark extension used only for server-side HTML → JSON parsing.
 * Mirrors the attribute schema of the full DynamicLink extension in the new system.
 */
export const DynamicLinkMark = Mark.create({
  name: 'dynamicLink',
  inclusive: false,

  addAttributes() {
    return {
      modelType: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('data-model-type'),
        renderHTML: (attrs: Record<string, any>) => ({
          'data-model-type': attrs.modelType ?? '',
        }),
      },
      modelId: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('data-model-id'),
        renderHTML: (attrs: Record<string, any>) => ({
          'data-model-id': attrs.modelId ?? '',
        }),
      },
      variant: {
        default: 'link',
        parseHTML: (el: HTMLElement) =>
          el.getAttribute('data-variant') || 'link',
        renderHTML: (attrs: Record<string, any>) => ({
          'data-variant': attrs.variant ?? 'link',
        }),
      },
      color: {
        default: 'base',
        parseHTML: (el: HTMLElement) => el.getAttribute('data-color') || 'base',
        renderHTML: (attrs: Record<string, any>) => ({
          'data-color': attrs.color ?? 'base',
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'a[data-dynamic-link]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'a',
      mergeAttributes(HTMLAttributes, { 'data-dynamic-link': '' }),
      0,
    ];
  },
});
