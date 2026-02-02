'use client';
import React from 'react';
import { Milkdown, MilkdownProvider } from '@milkdown/react';
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react';
import { MdEditorProps } from './types';
import { useEditorConfig } from './hooks';

export function Editor(props: MdEditorProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { get } = useEditorConfig(props);
  return <Milkdown />;
}

export function MdEditor(props: MdEditorProps) {
  return (
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <Editor {...props} />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  );
}
