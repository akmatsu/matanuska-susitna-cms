import { useNodeViewContext } from '@prosemirror-adapter/react';
import clsx from 'clsx';

const colorMap: Record<string, string> = {
  default: 'bg-gray-100 border-l-4 border-gray-400',
  green: 'bg-green-100 border-l-4 border-green-400',
  blue: 'bg-blue-100 border-l-4 border-blue-400',
  red: 'bg-red-100 border-l-4 border-red-400',
  yellow: 'bg-yellow-100 border-l-4 border-yellow-400',
};

export function BlockquoteView() {
  const { contentRef, node, setAttrs, selected } = useNodeViewContext();

  const color = node.attrs.color || 'green';
  const colorClass = colorMap[color] || colorMap.green;

  function changeColor(newColor: string) {
    setAttrs({
      color: newColor ? newColor : 'default',
    });
  }

  return (
    <>
      <blockquote
        ref={contentRef}
        className={clsx('p-2', colorClass)}
        data-color={color}
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
                    c === 'yellow'
                      ? '#fef08a'
                      : c === 'blue'
                        ? '#dbeafe'
                        : c === 'red'
                          ? '#fee2e2'
                          : '#dcfce7',
                }}
              >
                {c}
              </button>
            ))}
        </div>
      </blockquote>
    </>
  );
}
