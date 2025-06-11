import { $node } from '@milkdown/kit/utils';
import { acceptedNames, attributesToString } from './utils';
import { NodeType } from '@milkdown/kit/prose/model';

export const directiveContainerNode = $node(
  'containerDirectiveFallback',
  () => ({
    group: 'block',
    content: 'block+',
    attrs: {
      name: {
        default: '',
      },
      attrString: {
        default: '',
      },
    },
    parseMarkdown: {
      match: (node) =>
        node.type === 'containerDirective' &&
        typeof node['name'] === 'string' &&
        !acceptedNames.includes(node['name']),
      runner: (state, node) => {
        state.openNode(state.schema.nodes.paragraph as NodeType);
        state.addText(
          `::${node['name']}${attributesToString(
            node['attributes'] as Record<string, string>,
            node.children,
            true,
          )}`,
        );
        state.closeNode();
        state.next(node.children);
        state.openNode(state.schema.nodes.paragraph as NodeType);
        state.addText(':::');
        state.closeNode();
      },
    },
    toMarkdown: {
      match: () => false,
      runner: () => null,
    },
  }),
);
