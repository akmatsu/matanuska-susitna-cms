import { InputRule } from '@milkdown/kit/prose/inputrules';
import { Node } from '@milkdown/kit/prose/model';
import { $inputRule, $node } from '@milkdown/kit/utils';

export const iframeNode = $node('iframe', () => ({
  group: 'block',
  atom: true,
  isolating: true,
  marks: '',
  attrs: {
    src: { default: null },
    height: { default: null },
    width: { default: null },
  },
  parseDOM: [
    {
      tag: 'iframe',
      getAttrs: (dom) => ({
        src: (dom as HTMLElement).getAttribute('src'),
        height: (dom as HTMLElement).getAttribute('height'),
        width: (dom as HTMLElement).getAttribute('width'),
      }),
    },
  ],
  toDOM: (node: Node) => {
    console.log('toDOM', node);
    // Only include height/width attributes when present
    const { src, height, width } = node.attrs as {
      src?: string | null;
      height?: string | null;
      width?: string | null;
    };
    const attrs: Record<string, string | boolean | null | undefined> = {
      src,
      contenteditable: false,
    };
    if (height) attrs.height = height;
    if (width) attrs.width = width;
    return ['iframe', attrs];
  },
  parseMarkdown: {
    match: (node) => node.type === 'leafDirective' && node.name === 'iframe',
    runner: (state, node, type) => {
      console.log('ran');
      const attrs = node.attributes as {
        src?: string;
        height?: string;
        width?: string;
      };
      state.addNode(type, {
        src: attrs.src,
        height: attrs.height,
        width: attrs.width,
      });
    },
  },
  toMarkdown: {
    match: (node) => node.type.name === 'iframe',
    runner: (state, node) => {
      const attrs: Record<string, string> = {};
      if (node.attrs.src) attrs.src = String(node.attrs.src);
      if (node.attrs.height) attrs.height = String(node.attrs.height);
      if (node.attrs.width) attrs.width = String(node.attrs.width);
      state.addNode('leafDirective', undefined, undefined, {
        name: 'iframe',
        attributes: attrs,
      });
    },
  },
}));

export const iframeInputRule = $inputRule(
  (ctx) =>
    new InputRule(/::iframe\{([^}]+)\}/, (state, match, start, end) => {
      const [okay, attrsStr = ''] = match;
      console.log('match', match);
      const { tr } = state;
      if (okay) {
        const srcMatch = attrsStr.match(/src="([^"]+)"/);
        const heightMatch = attrsStr.match(/height="([^"]+)"/);
        const widthMatch = attrsStr.match(/width="([^"]+)"/);
        const src = srcMatch ? srcMatch[1] : '';
        const height = heightMatch ? heightMatch[1] : undefined;
        const width = widthMatch ? widthMatch[1] : undefined;
        tr.replaceWith(
          start - 1,
          end,
          iframeNode.type(ctx).create({ src, height, width }),
        );
      }
      return tr;
    }),
);
