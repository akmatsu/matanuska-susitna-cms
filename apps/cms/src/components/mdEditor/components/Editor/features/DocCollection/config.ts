import { type PluginViewFactoryFn, type NodeViewFactoryFn } from '../../types';
import { Editor } from '@milkdown/kit/core';
import { DocCollectionSearchView } from './DocuCollectonSearchView';
import { DocCollectionInputRule, DocCollectionNode, docSearch } from './schema';
import { $view } from '@milkdown/kit/utils';
import { DocCollectionView } from './DocCollectionView';

export function configureDocCollectionFeature(
  editor: Editor,
  pluginViewFactory: PluginViewFactoryFn,
  nodeViewFactory: NodeViewFactoryFn,
) {
  editor
    .config((ctx) => {
      ctx.set(docSearch.key, {
        view: pluginViewFactory({
          component: DocCollectionSearchView,
        }),
      });
    })

    .use(docSearch)
    .use(DocCollectionNode)
    .use(DocCollectionInputRule)
    .use(
      $view(DocCollectionNode, () =>
        nodeViewFactory({
          component: DocCollectionView,
        }),
      ),
    );
}
