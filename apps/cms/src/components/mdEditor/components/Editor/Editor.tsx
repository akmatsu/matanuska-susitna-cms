// React imports
'use client';
import React from 'react';
import { Milkdown, MilkdownProvider } from '@milkdown/react';
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react';
import { MdEditorProps } from './types';
import { useEditorConfig } from './hooks';

export function Editor(props: MdEditorProps) {
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
