import {
  tableBlock,
  tableBlockConfig,
} from '@milkdown/kit/component/table-block';
import { Editor } from '@milkdown/kit/core';

export function configureTableFeature(editor: Editor) {
  editor
    .config((ctx) => {
      ctx.update(tableBlockConfig.key, (defaultConfig) => ({
        ...defaultConfig,
        renderButton(renderType) {
          switch (renderType) {
            case 'add_row':
              return '+';
            case 'add_col':
              return '+';
            case 'delete_row':
              return 'Delete Row';
            case 'delete_col':
              return 'Delete Column';
            case 'align_col_left':
              return 'Left';
            case 'align_col_center':
              return 'Center';
            case 'align_col_right':
              return 'Right';
            case 'col_drag_handle':
              return '=';
            case 'row_drag_handle':
              return '=';
          }
        },
      }));
    })
    .use(tableBlock);
}
