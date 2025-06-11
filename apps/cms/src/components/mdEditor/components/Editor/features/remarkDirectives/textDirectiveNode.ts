import { $node } from '@milkdown/kit/utils';
import { attributesToString } from './utils';

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
    match: (node) => node.type === 'textDirective',
    runner: (state, node) => {
      state.addText(
        `:${node['name']}${attributesToString(
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
