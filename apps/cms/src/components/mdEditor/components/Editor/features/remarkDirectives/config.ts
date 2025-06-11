import type { Editor } from '@milkdown/kit/core';
import { $remark } from '@milkdown/kit/utils';
import remarkDirective from 'remark-directive';
import { directiveTextNode } from './textDirectiveNode';
import { directiveLeafNode } from './leafDirectiveNode';
import { directiveContainerNode } from './containerDirectiveNode';

// Allows the use of directives in markdown files, such as `:::note` or `:::warning`.
const remarkDirectives = $remark('remarkDirective', () => remarkDirective);

/**
 * Configures the Milkdown editor to support remark directives. and configures
 * fallbacks for unknown directives.
 *
 * This allows the editor to parse and render directives like `::note` or `::warning`.
 */
export function configureRemarkDirectivesFeature(editor: Editor) {
  editor
    .use(remarkDirectives)
    .use([directiveTextNode, directiveLeafNode, directiveContainerNode]);
}
