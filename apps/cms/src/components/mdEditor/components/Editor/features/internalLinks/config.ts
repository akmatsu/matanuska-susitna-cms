import { Editor } from '@milkdown/kit/core';
import { NodeViewFactoryFn, PluginViewFactoryFn } from '../../types';
import {
  InternalLinkInputRule,
  internalLinkKeymap,
  InternalLinkMark,
  internalLinkTooltip,
  toggleInternalLinkCommand,
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
    .use(InternalLinkMark)
    .use(InternalLinkInputRule)
    .use(internalLinkTooltip)
    .use(toggleInternalLinkCommand)
    .use(internalLinkKeymap);
}
