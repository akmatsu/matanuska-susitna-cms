import { Input } from '@headlessui/react';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { UseFormRegisterReturn } from 'react-hook-form';

export function FileDropzone({
  accept,
  ...props
}: UseFormRegisterReturn & {
  accept?: Accept;
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
      accept,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <div
        {...getRootProps()}
        className={clsx(
          'flex h-32 w-full items-center justify-center border-4 border-dashed border-gray-200 p-4 transition-colors hover:cursor-pointer',
          {
            'bg-gray-50 hover:bg-gray-100 active:bg-gray-200': !isDragActive,
            'bg-gray-100': isDragActive,
          },
        )}
      >
        <Input
          {...{
            ...props,
            ...getInputProps({
              multiple: true,
              onChange: (e) => {
                if (props.onChange) {
                  props.onChange(e);
                }
              },
            }),
          }}
        />{' '}
        <p className="text-gray-400">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      <aside>
        <h4 className="text-2xl font-bold">Files</h4>
      </aside>
      <ul>{files}</ul>
    </div>
  );
}
