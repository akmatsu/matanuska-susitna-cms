import {
  ReactNodeViewComponent,
  useNodeViewContext,
} from '@prosemirror-adapter/react';

export const InternalLink: ReactNodeViewComponent = (props) => {
  const { contentRef, node } = useNodeViewContext();

  const stamp = `${node.attrs.list}-${node.attrs.itemId}`;

  return <a ref={contentRef} key={stamp}></a>;
};
