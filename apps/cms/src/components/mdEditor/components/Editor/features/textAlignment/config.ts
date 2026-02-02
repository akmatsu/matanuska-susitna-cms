import { Editor } from '@milkdown/kit/core';
import { textAlignmentSchema } from './schema';
import { setTextAlignmentCommand } from './commands';

export function configureTextAlignmentFeature(editor: Editor) {
  editor.use(textAlignmentSchema).use(setTextAlignmentCommand);
}
