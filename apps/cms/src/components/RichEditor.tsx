'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MdEditorProps } from './mdEditor/components/Editor/types';
import { Button } from '@keystar/ui/button';
import clsx from 'clsx';

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
        <div className="mb-2 flex gap-2">
          <Button
            onPress={() => setShowCode(!showCode)}
            aria-label={showCode ? 'View Markdown' : 'View Rich Editor'}
          >
            <span className="flex items-center gap-1">
              <span
                className={clsx('size-6', {
                  'icon-[mdi--text-box]': showCode,
                  'icon-[mdi--markdown]': !showCode,
                })}
              ></span>
            </span>
          </Button>
          <Button
            onPress={() => setIsFullscreen((v) => !v)}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            <span className="flex items-center gap-1">
              <span
                className={clsx('size-6', {
                  'icon-[mdi--fullscreen]': !isFullscreen,
                  'icon-[mdi--fullscreen-exit]': isFullscreen,
                })}
              ></span>
            </span>
          </Button>
        </div>
        <div className="editors">
          {showCode ? (
            <textarea
              value={props.initialValue}
              onChange={(e) => {
                props.onChange?.(e.target.value);
                adjustEditorHeight();
              }}
              className="markdown-editor-text-area w-full"
              id="markdown-editor-text-area"
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
