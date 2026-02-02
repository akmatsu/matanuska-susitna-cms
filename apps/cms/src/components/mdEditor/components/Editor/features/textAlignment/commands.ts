import { Ctx } from '@milkdown/kit/ctx';
import { Command } from '@milkdown/kit/prose/state';
import { wrapIn } from '@milkdown/kit/prose/commands';
import { liftTarget } from '@milkdown/kit/prose/transform';
import { $command } from '@milkdown/kit/utils';
import { textAlignmentSchema, TextAlignmentValue } from './schema';

function applyAlignment(ctx: Ctx, align: TextAlignmentValue): Command {
  const type = textAlignmentSchema.type(ctx);

  return (state, dispatch) => {
    const { $from, $to } = state.selection;
    const range = $from.blockRange($to);
    if (!range) return false;

    const parentIsAlignment = range.parent.type === type;

    if (parentIsAlignment) {
      if (align === 'left' || range.parent.attrs.align === align) {
        const target = liftTarget(range);
        if (target == null) return false;
        if (dispatch) {
          dispatch(state.tr.lift(range, target));
        }
        return true;
      }

      if (range.depth === 0) return false;
      const pos = range.$from.before(range.depth);
      if (dispatch) {
        dispatch(
          state.tr.setNodeMarkup(pos, type, {
            ...range.parent.attrs,
            align,
          }),
        );
      }
      return true;
    }

    if (align === 'left') {
      return true;
    }

    return wrapIn(type, { align })(state, dispatch);
  };
}

export const setTextAlignmentCommand = $command(
  'setTextAlignmentCommand',
  (ctx: Ctx) => (align?: TextAlignmentValue) => {
    if (!align) {
      return () => false;
    }
    return applyAlignment(ctx, align);
  },
);

export const TEXT_ALIGNMENT_OPTIONS: TextAlignmentValue[] = [
  'left',
  'center',
  'right',
];
