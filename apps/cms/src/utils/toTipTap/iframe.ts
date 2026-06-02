import { Node, mergeAttributes } from '@tiptap/core';
import type { Directive } from 'remark-directive';

export interface IframeOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iframe: {
      insertIframe: (attrs: {
        src: string;
        title?: string | null;
        width?: string | number | null;
        height?: string | number | null;
        allow?: string | null;
        allowfullscreen?: boolean;
      }) => ReturnType;
      updateIframe: (attrs: {
        src: string;
        title?: string | null;
        width?: string | number | null;
        height?: string | number | null;
        allow?: string | null;
        allowfullscreen?: boolean;
      }) => ReturnType;
    };
  }
}

export const IframeExtension = Node.create<IframeOptions>({
  name: 'iframe',
  group: 'block',
  atom: true,
  selectable: true,
  draggable: true,
  isolating: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('src') || null,
        renderHTML: (attrs: { src: string | null }) => ({
          src: attrs.src,
        }),
      },
      title: {
        default: 'Embedded content',
        parseHTML: (el: HTMLElement) =>
          el.getAttribute('title') || 'Embedded content',
        renderHTML: (attrs: { title: string | null }) => ({
          title: attrs.title || 'Embedded content',
        }),
      },
      width: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('width') || null,
        renderHTML: (attrs: { width: string | number | null }) => ({
          width: attrs.width,
        }),
      },
      height: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('height') || null,
        renderHTML: (attrs: { height: string | number | null }) => ({
          height: attrs.height,
        }),
      },
      allow: {
        default: null,
        parseHTML: (el: HTMLElement) => el.getAttribute('allow') || null,
        renderHTML: (attrs: { allow: string | null }) => ({
          allow: attrs.allow,
        }),
      },
      allowfullscreen: {
        default: true,
        parseHTML: (el: HTMLElement) => el.hasAttribute('allowfullscreen'),
        renderHTML: (attrs: { allowfullscreen?: boolean }) =>
          attrs.allowfullscreen === false
            ? {}
            : { allowfullscreen: 'allowfullscreen' },
      },
    };
  },

  parseHTML() {
    return [{ tag: 'iframe[src]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'iframe',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        loading: 'lazy',
        referrerpolicy: 'strict-origin-when-cross-origin',
        class:
          'w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-700',
      }),
    ];
  },

  addNodeView() {
    return ({ node }) => {
      let currentNode = node;

      const dom = document.createElement('div');
      dom.className =
        'my-4 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900';

      const header = document.createElement('div');
      header.className =
        'flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-600 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300';

      const title = document.createElement('span');
      title.className = 'font-medium';

      const source = document.createElement('span');
      source.className = 'truncate pl-3';

      header.append(title, source);

      const frame = document.createElement('iframe');
      frame.className = 'w-full aspect-video';

      const emptyState = document.createElement('div');
      emptyState.className =
        'px-4 py-6 text-sm text-gray-600 dark:text-gray-400';
      emptyState.textContent =
        'Add a valid iframe URL to preview embedded content.';

      const applyAttributes = (attrs: Record<string, any>) => {
        const src = attrs.src || null;
        const frameTitle = attrs.title || 'Embedded content';

        title.textContent = 'Iframe';
        source.textContent = src || 'No URL selected';

        frame.title = frameTitle;

        if (attrs.width) {
          frame.width = String(attrs.width);
        } else {
          frame.removeAttribute('width');
        }

        if (attrs.height) {
          frame.height = String(attrs.height);
        } else {
          frame.removeAttribute('height');
        }

        if (attrs.allow) {
          frame.allow = String(attrs.allow);
        } else {
          frame.removeAttribute('allow');
        }

        if (attrs.allowfullscreen === false) {
          frame.removeAttribute('allowfullscreen');
        } else {
          frame.setAttribute('allowfullscreen', 'allowfullscreen');
        }

        if (src) {
          frame.src = String(src);
          if (!dom.contains(frame)) {
            dom.append(frame);
          }
          if (dom.contains(emptyState)) {
            emptyState.remove();
          }
        } else {
          frame.removeAttribute('src');
          if (dom.contains(frame)) {
            frame.remove();
          }
          if (!dom.contains(emptyState)) {
            dom.append(emptyState);
          }
        }
      };

      dom.append(header);
      applyAttributes(currentNode.attrs);

      return {
        dom,
        update: (updatedNode) => {
          if (updatedNode.type.name !== 'iframe') {
            return false;
          }

          currentNode = updatedNode;
          applyAttributes(currentNode.attrs);

          return true;
        },
      };
    };
  },

  addCommands() {
    return {
      insertIframe:
        (attrs) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs,
          });
        },

      updateIframe:
        (attrs) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, attrs);
        },
    };
  },
});

/**
 * Remark plugin to parse iframe directives and convert them to TipTap nodes
 * Supports syntax: ::iframe{src="..." title="..." width="..." height="..." allow="..." allowfullscreen=true/false}
 */
export function remarkIframeDirective() {
  return (tree: any) => {
    const { visit } = require('unist-util-visit');

    visit(tree, 'leafDirective', (node: Directive) => {
      if (node.name !== 'iframe') return;

      const attrs = node.attributes as Record<string, any>;

      // Convert the directive node to an iframe block
      node.data = {
        hName: 'iframe',
        hProperties: {
          src: attrs.src || null,
          title: attrs.title || 'Embedded content',
          width: attrs.width || null,
          height: attrs.height || null,
          allow: attrs.allow || null,
          allowfullscreen: attrs.allowfullscreen === 'false' ? false : true,
        },
      };
    });
  };
}
