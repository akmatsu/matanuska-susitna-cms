import { Editor } from '@milkdown/kit/core';
import { ColumnNode, ColumnsNode } from './schema';

export function configureColumnsFeature(editor: Editor) {
  editor.use(ColumnNode).use(ColumnsNode);
}
