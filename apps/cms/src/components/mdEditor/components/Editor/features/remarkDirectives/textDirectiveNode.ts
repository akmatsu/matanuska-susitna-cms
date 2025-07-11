import { $node } from '@milkdown/kit/utils';
import { acceptedNames, attributesToString } from './utils';

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
      state.addText(
        `:${node['name']}${node.children?.[0]?.value || ''}${
          attributesToString(
            node['attributes'] as Record<string, string>,
            node.children,
          ) || ''
        }`,
      );
    },
  },
  toMarkdown: {
    match: () => false,
    runner: () => null,
  },
}));
