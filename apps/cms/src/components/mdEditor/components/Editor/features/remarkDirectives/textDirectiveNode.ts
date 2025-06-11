import { $node } from '@milkdown/kit/utils';
import { attributesToString } from './utils';

const acceptedNames = [
  'internal-link',
  'primary-action-button',
  'step',
  'process',
  'doc-collection',
];

export const directiveTextNode = $node('textDirectiveFallback', () => ({
  group: 'inline',
  inline: true,
  attrs: {
    name: {
      default: '',
    },
    type: {
      default: '',
    },
    attrString: {
      default: '',
    },
  },
  parseMarkdown: {
    match: (node) =>
      node.type === 'textDirective' &&
      typeof node['name'] === 'string' &&
      !acceptedNames.includes(node['name']),
    runner: (state, node) => {
      console.log(node);
      state.addText(
        `:${node['name']} ${node.children?.[0]?.value} ${attributesToString(
          node['attributes'] as Record<string, string>,
          node.children,
        )}`,
      );
    },
  },
  toMarkdown: {
    match: () => false,
    runner: () => null,
  },
}));
