import { useNodeViewContext } from '@prosemirror-adapter/react';
import clsx from 'clsx';

const colorMap: Record<string, string> = {
  base: 'bg-gray-200 border-l-4 border-gray-400',
  success: 'bg-green-100 border-l-4 border-green-400',
  info: 'bg-blue-100 border-l-4 border-blue-400',
  error: 'bg-red-100 border-l-4 border-red-400',
  warning: 'bg-yellow-100 border-l-4 border-yellow-400',
};

export function CalloutView() {
  const { contentRef, node, setAttrs, selected } = useNodeViewContext();

  const color = node.attrs.color || 'base';
  const colorClass = colorMap[color] || colorMap.base;

  function changeColor(newColor: string) {
    setAttrs({
      color: newColor ? newColor : 'base',
    });
  }

  return (
    <div
      ref={contentRef}
      className={clsx('p-2', colorClass)}
      data-color={color}
      data-callout-block
    >
      <div className="mb-2 flex gap-2">
        {selected &&
          Object.keys(colorMap).map((c) => (
            <button
              key={c}
              onClick={() => changeColor(c)}
              className={clsx(
                'rounded px-2 py-1 text-sm',
                color === c ? 'font-bold ring-2 ring-offset-1' : 'opacity-60',
              )}
              style={{
                backgroundColor:
                  c === 'warning'
                    ? '#fef08a'
                    : c === 'info'
                      ? '#dbeafe'
                      : c === 'error'
                        ? '#fee2e2'
                        : '#dcfce7',
              }}
            >
              {c}
            </button>
          ))}
      </div>
    </div>
  );
}
