import { type MarkdownNode } from '@milkdown/transformer';

export const acceptedNames = [
  'internal-link',
  'primary-action-button',
  'step',
  'process',
  'doc-collection',
];

export const attributesToString = (
  attrs: Record<string, string>,
  children?: MarkdownNode[],
  isLeaf?: boolean,
): string => {
  let d = '';
  const labelIndex = children
    ? children.findIndex((v) => {
        const data = v ? v.data || {} : {};
        return data['directiveLabel' as keyof typeof data];
      })
    : -1;
  const label = children ? children[labelIndex] : null;
  if (label && label.children) {
    d += `[${label.children.map((v) => v['value']).join(' ')}]`;
    if (children) children.splice(labelIndex, 1);
  }
  if (isLeaf && children && children.length) {
    d += `[${children.map((v) => v['value']).join(' ')}]`;
    if (children) children.splice(labelIndex, 1);
  }
  if (attrs['id']) {
    d += '#' + attrs['id'];
  }
  if (attrs['class']) {
    const c = attrs['class'].split(' ');
    d += '.' + c.join('.');
  }
  for (const key in attrs) {
    if (key === 'id') {
      continue;
    }
    if (key === 'class') {
      continue;
    }
    d += ` ${key}="${attrs[key]}"`;
  }
  return d;
};
