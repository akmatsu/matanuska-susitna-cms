import { Editor } from '@milkdown/kit/core';
import { $view } from '@milkdown/kit/utils';
import { CalloutView } from './CalloutView';
import { calloutSchema, calloutInputRule } from './schema';

export function configureBlockquoteFeature(
  editor: Editor,
  nodeViewFactory: any,
) {
  editor
    .use(calloutSchema)
    .use(
      $view(calloutSchema, () => nodeViewFactory({ component: CalloutView })),
    )
    .use(calloutInputRule);
}
