import { MarkType, ResolvedPos } from '@milkdown/kit/prose/model';

export function getMarkRange($pos: ResolvedPos, type: MarkType) {
  const { doc } = $pos;
  let start = $pos.pos;
  let end = $pos.pos;

  // Walk backward
  let $start = $pos;
  while ($start.parentOffset > 0) {
    const prev = $start.parent.child(Math.max($start.index() - 1, 0));
    if (!prev || !prev.marks.some((mark) => mark.type === type)) break;
    $start = doc.resolve(Math.max($start.pos - prev.nodeSize, 0));
  }
  start = $start.pos;

  // Walk forward
  let $end = $pos;
  while ($end.parentOffset < $end.parent.content.size) {
    const next = $end.parent.child($end.index());
    if (!next || !next.marks.some((mark) => mark.type === type)) break;

    $end = doc.resolve(Math.min($end.pos + next.nodeSize, doc.content.size));
  }
  end = $end.pos;

  return { from: start, to: end };
}
