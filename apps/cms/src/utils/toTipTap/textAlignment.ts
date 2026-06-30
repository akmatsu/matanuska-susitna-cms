import { visit } from 'unist-util-visit';

export type TextAlignmentValue = 'left' | 'center' | 'right';

const normalizeAlign = (value: unknown): TextAlignmentValue => {
  if (value === 'center' || value === 'right') return value;
  return 'left';
};

const ALIGNABLE_NODE_TYPES = new Set(['paragraph', 'heading']);

const applyAlignmentToSupportedNodes = (
  node: any,
  align: TextAlignmentValue,
) => {
  if (!node || typeof node !== 'object') return;

  if (align !== 'left' && ALIGNABLE_NODE_TYPES.has(node.type)) {
    const data = node.data || (node.data = {});
    const hProperties = data.hProperties || (data.hProperties = {});
    const existingStyle =
      typeof hProperties.style === 'string' ? hProperties.style.trim() : '';
    const nextStyle = `text-align: ${align};`;

    hProperties.style = existingStyle
      ? `${existingStyle} ${nextStyle}`
      : nextStyle;
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      applyAlignmentToSupportedNodes(child, align);
    }
  }
};

export function remarkTextAlignmentDirective() {
  return (tree: any) => {
    visit(tree, (node, index, parent) => {
      if (node.type === 'containerDirective' && node.name === 'textAlign') {
        const align = normalizeAlign(node.attributes?.align);
        const children = Array.isArray(node.children) ? node.children : [];

        for (const child of children) {
          applyAlignmentToSupportedNodes(child, align);
        }

        if (
          parent &&
          typeof index === 'number' &&
          Array.isArray(parent.children)
        ) {
          parent.children.splice(index, 1, ...children);
          return index;
        }
      }
    });
  };
}
