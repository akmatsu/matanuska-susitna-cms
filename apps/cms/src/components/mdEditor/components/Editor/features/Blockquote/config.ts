import { Editor } from '@milkdown/kit/core';
import { $view } from '@milkdown/kit/utils';
import { BlockquoteView } from './BlockquoteView';
import { blockquoteSchema } from './schema';

export function configureBlockquoteFeature(
  editor: Editor,
  nodeViewFactory: any,
) {
  editor.use(blockquoteSchema);
  editor.use(
    $view(blockquoteSchema, () =>
      nodeViewFactory({ component: BlockquoteView }),
    ),
  );
}
