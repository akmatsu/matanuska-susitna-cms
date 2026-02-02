import { Ctx } from '@milkdown/kit/ctx';
import {
  headingSchema,
  paragraphSchema,
  toggleEmphasisCommand,
  toggleStrongCommand,
} from '@milkdown/kit/preset/commonmark';
import { toggleStrikethroughCommand } from '@milkdown/kit/preset/gfm';
import { Attrs, NodeType } from '@milkdown/kit/prose/model';
import { Command } from '@milkdown/kit/prose/state';
import { $command, callCommand } from '@milkdown/kit/utils';
import { PluginViewContext } from '@prosemirror-adapter/react';
import { toggleInternalLinkCommand } from '../internalLinks/schema';
import { setTextAlignmentCommand } from '../textAlignment/commands';

export const toggleHeaderCommand = $command(
  'ToggleHeaderCmd',
  (ctx: Ctx) => (payload?: Attrs | null) => {
    return toggleNode(ctx, headingSchema.type(ctx), payload);
  },
);

function toggleNode(
  ctx: Ctx,
  nodeType: NodeType,
  attrs?: Attrs | null,
): Command {
  return (state, dispatch) => {
    const { tr } = state;

    if (dispatch) {
      const { $to, $from } = tr.selection;
      const node = $to.node();

      const isNotCurrentNodeType = node.type !== nodeType;
      const isHeader = node.type === headingSchema.type(ctx);
      const hasLevelAttr = !!node.attrs?.level;
      const isNotTheSameLevel =
        hasLevelAttr && node.attrs.level !== attrs?.level;

      if (isNotCurrentNodeType || (isHeader && isNotTheSameLevel)) {
        dispatch(tr.setBlockType($from.pos, $to.pos, nodeType, attrs));
      } else {
        dispatch(
          tr.setBlockType($from.pos, $to.pos, paragraphSchema.type(ctx)),
        );
      }
    }
    return true;
  };
}

type ToolbarAction = (view: PluginViewContext['view']) => (ctx: Ctx) => void;

export const TOOLBAR_COMMANDS: {
  label: string;
  icon: string;
  action?: ToolbarAction;
  children?: { label: string; icon: string; action: ToolbarAction }[];
}[] = [
  {
    label: 'Text Size',
    icon: 'icon-[bi--fonts]',
    children: [
      {
        label: 'Header 1',
        icon: 'icon-[bi--type-h1]',

        action: () => callCommand(toggleHeaderCommand.key, { level: 1 }),
      },
      {
        label: 'Header 2',
        icon: 'icon-[bi--type-h2]',
        action: () => callCommand(toggleHeaderCommand.key, { level: 2 }),
      },
      {
        label: 'Header 3',
        icon: 'icon-[bi--type-h3]',
        action: () => callCommand(toggleHeaderCommand.key, { level: 3 }),
      },
      {
        label: 'Header 4',
        icon: 'icon-[bi--type-h4]',
        action: () => callCommand(toggleHeaderCommand.key, { level: 4 }),
      },
      {
        label: 'Header 5',
        icon: 'icon-[bi--type-h5]',
        action: () => callCommand(toggleHeaderCommand.key, { level: 5 }),
      },
      {
        label: 'Header 6',
        icon: 'icon-[bi--type-h6]',
        action: () => callCommand(toggleHeaderCommand.key, { level: 6 }),
      },
    ],
  },
  {
    label: 'Bold',
    icon: 'icon-[bi--type-bold]',
    action: () => callCommand(toggleStrongCommand.key),
  },
  {
    label: 'Italic',
    icon: 'icon-[bi--type-italic]',
    action: () => callCommand(toggleEmphasisCommand.key),
  },
  {
    label: 'Strikethrough',
    icon: 'icon-[bi--type-strikethrough]',
    action: () => callCommand(toggleStrikethroughCommand.key),
  },
  {
    label: 'Internal Link',
    icon: 'icon-[bi--link]',
    action: () => callCommand(toggleInternalLinkCommand.key),
  },
  {
    label: 'Alignment',
    icon: 'icon-[bi--text-center]',
    children: [
      {
        label: 'Align Left',
        icon: 'icon-[bi--text-left]',
        action: () => callCommand(setTextAlignmentCommand.key, 'left'),
      },
      {
        label: 'Align Center',
        icon: 'icon-[bi--text-center]',
        action: () => callCommand(setTextAlignmentCommand.key, 'center'),
      },
      {
        label: 'Align Right',
        icon: 'icon-[bi--text-right]',
        action: () => callCommand(setTextAlignmentCommand.key, 'right'),
      },
    ],
  },
];
