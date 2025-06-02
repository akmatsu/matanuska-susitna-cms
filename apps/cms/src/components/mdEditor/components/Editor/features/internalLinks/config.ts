import { Editor } from '@milkdown/kit/core';
import { NodeViewFactoryFn, PluginViewFactoryFn } from '../../types';
import {
  internalLinkDirective,
  InternalLinkInputRule,
  InternalLinkMark,
  internalLinkTooltip,
} from './schema';
import { InternalLinkTooltip } from './InternalLinkTooltip';

export function configureInternalLinksFeature(
  editor: Editor,
  pluginViewFactory: PluginViewFactoryFn,
  nodeViewFactory: NodeViewFactoryFn,
) {
  editor
    .config((ctx) => {
      ctx.set(internalLinkTooltip.key, {
        view: pluginViewFactory({
          component: InternalLinkTooltip,
        }),
      });
    })
    .use([...internalLinkDirective])
    .use(InternalLinkMark)
    .use(InternalLinkInputRule)
    .use(internalLinkTooltip);
}
