'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MdEditorProps } from './mdEditor/components/Editor/types';
import { Button } from '@keystone-ui/button';
import { TextArea } from '@keystone-ui/fields';
import '../styles/global.css';

const MdEditor = dynamic(
  () => import('./mdEditor').then((mod) => mod.MdEditor),
  {
    loading: () => <div>Editor is loading...</div>,
    ssr: false,
  },
);

function adjustEditorHeight() {
  const tArea: HTMLTextAreaElement | null = document.querySelector(
    '#markdown-editor-text-area',
  );

  if (tArea) {
    tArea.style.height = tArea.scrollHeight + 'px';
  }
}

export function RichEditor(props: MdEditorProps) {
  const [isClient, setIsClient] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  useEffect(() => {
    if (showCode) {
      adjustEditorHeight();
    }
  }, [showCode]);

  if (isClient) {
    return (
      <div
        className={`rich-editor-container ${isFullscreen ? 'fullscreen' : ''}`}
      >
        <div>
          <Button onClick={() => setShowCode(!showCode)}>
            {showCode ? 'Rich Editor' : 'View Markdown'}
          </Button>
          <Button onClick={() => setIsFullscreen((v) => !v)}>
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </Button>
        </div>
        <div className="editors">
          {showCode ? (
            <TextArea
              value={props.initialValue}
              onChange={(e) => {
                props.onChange?.(e.target.value);
              }}
              size="large"
              className="markdown-editor-text-area"
              id="markdown-editor-text-area"
              onInput={adjustEditorHeight}
            />
          ) : (
            <MdEditor {...props} />
          )}
        </div>
      </div>
    );
  } else {
    return <div>Editor is loading...</div>;
  }
}
