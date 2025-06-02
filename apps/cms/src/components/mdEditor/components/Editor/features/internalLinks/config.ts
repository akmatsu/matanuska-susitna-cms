import { Editor } from '@milkdown/kit/core';
import { NodeViewFactoryFn, PluginViewFactoryFn } from '../../types';
import {
  internalLinkDirective,
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
    .use(internalLinkTooltip)
    .use(toggleInternalLinkCommand)
    .use(internalLinkKeymap);
}
