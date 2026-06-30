import { Node, mergeAttributes } from '@tiptap/core';
import { visit } from 'unist-util-visit';

/**
 * Minimal TipTap Node extension for parsing `<img>` tags produced by
 * remark-rehype from standard markdown images (`![alt](src "title")`).
 *
 * Milkdown's image-inline component stores images using standard markdown
 * syntax, which remark already converts to `<img>` HTML elements.  TipTap's
 * StarterKit does not include an image node, so this extension bridges the gap.
 */
export const ImageInline = Node.create({
  name: 'image',
  group: 'inline',
  inline: true,
  draggable: true,
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('src'),
        renderHTML: (attrs: Record<string, any>) => ({ src: attrs.src }),
      },
      alt: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('alt'),
        renderHTML: (attrs: Record<string, any>) => ({ alt: attrs.alt }),
      },
      title: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('title'),
        renderHTML: (attrs: Record<string, any>) => ({ title: attrs.title }),
      },
      width: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('width'),
        renderHTML: (attrs: Record<string, any>) => ({ width: attrs.width }),
      },
      height: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('height'),
        renderHTML: (attrs: Record<string, any>) => ({ height: attrs.height }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'img[src]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)];
  },
});

/**
 * Remark plugin that processes images for TipTap conversion:
 *
 * 1. Extracts Milkdown image-block ratio from alt text and converts it to
 *    a `height` attribute (percentage-based) so TipTap preserves sizing.
 * 2. Centers standalone images (sole child of a paragraph) by adding
 *    `text-align: center` to the parent paragraph.
 */
export function remarkImagePlugin() {
  return (tree: any) => {
    visit(tree, 'paragraph', (node: any) => {
      const children: any[] = node.children;
      if (!children || children.length !== 1) return;

      const child = children[0];
      if (child.type !== 'image') return;

      // Center standalone images by styling the parent paragraph
      const data = node.data || (node.data = {});
      const hProperties = data.hProperties || (data.hProperties = {});
      const existingStyle =
        typeof hProperties.style === 'string' ? hProperties.style.trim() : '';
      const centerStyle = 'text-align: center;';
      hProperties.style = existingStyle
        ? `${existingStyle} ${centerStyle}`
        : centerStyle;

      // Extract Milkdown image-block ratio from alt text
      const alt = child.alt;
      const ratio = Number(alt);
      if (!Number.isNaN(ratio) && ratio > 0 && ratio !== 1) {
        const imgData = child.data || (child.data = {});
        const imgProps = imgData.hProperties || (imgData.hProperties = {});
        imgProps.height = `${(ratio * 100).toFixed(0)}%`;
        // Clear alt since it's not real alt text, just a ratio value
        child.alt = '';
      }
    });
  };
}
