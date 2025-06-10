import { Editor } from '@milkdown/kit/core';
import { block, blockConfig } from '@milkdown/kit/plugin/block';
import { BlockView } from './BlockView';
import { PluginViewFactoryFn } from '../../types';
import { findParent } from '@milkdown/kit/prose';

export function configureBlockFeature(
  editor: Editor,
  pluginViewFactory: PluginViewFactoryFn,
) {
  editor.config((ctx) => {
    ctx.set(blockConfig.key, {
      filterNodes: (pos) => {
        const filter = findParent((node) =>
          ['table', 'blockquote'].includes(node.type.name),
        )(pos);
        if (filter) {
          return false;
        }
        return true;
      },
    });
    ctx.set(block.key, {
      view: pluginViewFactory({
        component: BlockView,
      }),
    });
  });
  editor.use(block);
}
