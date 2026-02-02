import { Ctx } from '@milkdown/kit/ctx';
import {
  clearContentAndAddBlockType,
  clearContentAndInsert,
  clearContentAndSetBlockType,
  clearContentAndWrapInBlockType,
  clearRange,
  runCommand,
} from './utils';
import { imageBlockSchema } from '@milkdown/kit/component/image-block';
import { commandsCtx, editorViewCtx } from '@milkdown/kit/core';
import { createTable } from '@milkdown/kit/preset/gfm';
import {
  MD_PAYMENTS_ALL_STEPS,
  MD_STEP_TEMPLATE,
  MD_THREE_COLUMN_TEMPLATE,
  MD_TWO_COLUMN_TEMPLATE,
} from './mdTemplates';
import {
  addBlockTypeCommand,
  bulletListSchema,
  clearTextInCurrentBlockCommand,
  headingSchema,
  hrSchema,
  orderedListSchema,
} from '@milkdown/kit/preset/commonmark';
import { NodeSelection } from '@milkdown/kit/prose/state';
import { PrimaryActionButtonNode } from '../PrimaryAction';
import { DocCollectionNode } from '../DocCollection/schema';
import { calloutSchema } from '../calloutBlock';

type SlashCommand = {
  label: string;
  action: (ctx: Ctx) => void;
};

export const SLASH_COMMANDS = [
  {
    label: 'Header 1',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(headingSchema.type(ctx), { level: 1 }),
      );
    },
  },
  {
    label: 'Header 2',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(headingSchema.type(ctx), { level: 2 }),
      );
    },
  },
  {
    label: 'Header 3',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(headingSchema.type(ctx), { level: 3 }),
      );
    },
  },
  {
    label: 'Header 4',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(headingSchema.type(ctx), { level: 4 }),
      );
    },
  },
  {
    label: 'Header 5',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(headingSchema.type(ctx), { level: 5 }),
      );
    },
  },
  {
    label: 'Header 6',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(headingSchema.type(ctx), { level: 6 }),
      );
    },
  },
  {
    label: 'Callout',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndWrapInBlockType(calloutSchema.type(ctx)),
      );
    },
  },
  {
    label: 'Divider',
    action: (ctx) => {
      return runCommand(ctx, clearContentAndAddBlockType(hrSchema.type(ctx)));
    },
  },
  {
    label: 'Ordered List',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndWrapInBlockType(orderedListSchema.type(ctx)),
      );
    },
  },
  {
    label: 'Unordered List',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndWrapInBlockType(bulletListSchema.type(ctx)),
      );
    },
  },

  {
    label: 'Table',
    action: (ctx) => {
      const view = ctx.get(editorViewCtx);
      const { dispatch, state } = view;
      const tr = clearRange(state.tr);
      const table = createTable(ctx, 3, 3);
      tr.replaceSelectionWith(table);
      const { from } = tr.selection;
      const pos = from - table.nodeSize + 2;
      dispatch(tr);
      requestAnimationFrame(() => {
        const selection = NodeSelection.create(view.state.tr.doc, pos);
        dispatch(view.state.tr.setSelection(selection).scrollIntoView());
      });
    },
  },
  {
    label: 'Primary Action Button',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndSetBlockType(PrimaryActionButtonNode.type(ctx), {
          label: 'Primary Action',
        }),
      );
    },
  },
  {
    label: 'Document Collection',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndAddBlockType(DocCollectionNode.type(ctx), { id: '' }),
      );
    },
  },
  {
    label: 'Columns (2)',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndInsert(ctx, MD_TWO_COLUMN_TEMPLATE),
      );
    },
  },
  {
    label: 'Columns (3)',
    action: (ctx) => {
      return runCommand(
        ctx,
        clearContentAndInsert(ctx, MD_THREE_COLUMN_TEMPLATE),
      );
    },
  },
  {
    label: 'Step',
    action: (ctx) => {
      return runCommand(ctx, clearContentAndInsert(ctx, MD_STEP_TEMPLATE));
    },
  },
  {
    label: 'Step template: Payments',
    action: (ctx) => {
      return runCommand(ctx, clearContentAndInsert(ctx, MD_PAYMENTS_ALL_STEPS));
    },
  },
  {
    label: 'Image',
    action: (ctx) => {
      const commands = ctx.get(commandsCtx);
      const imageBlock = imageBlockSchema.type(ctx);
      commands.call(clearTextInCurrentBlockCommand.key);
      commands.call(addBlockTypeCommand.key, {
        nodeType: imageBlock,
      });
    },
  },
] satisfies SlashCommand[];
