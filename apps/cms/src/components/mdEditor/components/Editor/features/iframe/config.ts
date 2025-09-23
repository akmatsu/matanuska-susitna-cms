import { Editor } from '@milkdown/kit/core';
import { iframeInputRule, iframeNode } from './schema';

export function configureIframeFeature(editor: Editor) {
  editor.use(iframeNode).use(iframeInputRule);
}
