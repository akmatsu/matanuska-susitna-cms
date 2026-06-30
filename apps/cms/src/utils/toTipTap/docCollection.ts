import { mergeAttributes, Node } from '@tiptap/core';
import { visit } from 'unist-util-visit';

type DirectiveAttributes = {
  id?: string;
  collectionId?: string;
  title?: string;
  collectionTitle?: string;
};

const normalizeDocCollectionAttrs = (attributes?: DirectiveAttributes) => {
  const collectionId = attributes?.collectionId ?? attributes?.id ?? null;
  const collectionTitle =
    attributes?.collectionTitle ?? attributes?.title ?? null;

  return {
    collectionId,
    collectionTitle,
  };
};

export const DocCollection = Node.create({
  name: 'docCollection',
  group: 'block',
  atom: true,
  selectable: true,
  draggable: true,
  isolating: true,

  addAttributes() {
    return {
      collectionId: {
        default: null,
        parseHTML: (el) =>
          el.getAttribute('data-collection-id') ||
          el.getAttribute('id') ||
          null,
        renderHTML: (attrs) => ({ 'data-collection-id': attrs.collectionId }),
      },
      collectionTitle: {
        default: null,
        parseHTML: (el) =>
          el.getAttribute('data-collection-title') ||
          el.getAttribute('title') ||
          null,
        renderHTML: (attrs) => ({
          'data-collection-title': attrs.collectionTitle,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-doc-collection]' }, { tag: 'doc-collection' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-doc-collection': '',
      }),
    ];
  },
});

export function remarkDocCollectionDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === 'leafDirective' &&
        (node.name === 'doc-collection' || node.name === 'docCollection')
      ) {
        const data = node.data || (node.data = {});
        const attrs = normalizeDocCollectionAttrs(
          node.attributes as DirectiveAttributes,
        );

        data.hName = 'div';
        data.hProperties = {
          'data-doc-collection': '',
          'data-collection-id': attrs.collectionId,
          'data-collection-title': attrs.collectionTitle,
        };
      }
    });
  };
}
