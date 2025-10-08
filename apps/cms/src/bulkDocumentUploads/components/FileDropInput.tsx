import { Input } from '@headlessui/react';
import { FieldContainer } from '@keystone-ui/fields';
import clsx from 'clsx';
import { DOMAttributes, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export function FileDropInput(props: {
  register: UseFormRegisterReturn;
  invalid?: boolean;
  errorMessage?: string;
  files: FileList;
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
  onDrop?: DOMAttributes<HTMLDivElement>['onDrop'];
  onDragOver?: DOMAttributes<HTMLDivElement>['onDragOver'];
  onDragLeave?: DOMAttributes<HTMLDivElement>['onDragLeave'];
  removeFile?: (fileName: string) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);

  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    props.onClick?.(e);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    props.onDrop?.(e);
    setIsDragging(false);
  }

  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
    props.onDragOver?.(e);
  }

  function onDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    props.onDragLeave?.(e);
  }

  return (
    <FieldContainer className="w-3xl max-w-full">
      <Input
        type="file"
        accept=".pdf,.doc,docx,.xml,.txt,.xlsx,.ppt,.pptx"
        invalid={props.invalid}
        multiple
        required
        className="hidden"
        {...props.register}
      />
      <div
        onClick={onClick}
        className={clsx(
          'flex h-48 w-full flex-col items-center justify-center gap-4 border-4 border-dashed p-4 text-gray-400 transition-colors hover:cursor-pointer',
          {
            'bg-gray-50 hover:bg-gray-100 active:bg-gray-200': !isDragging,
            'bg-gray-100': isDragging,
          },
        )}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        <span className="icon-[mdi--file-plus] size-20"></span>
        <p>Click or drop files to upload</p>
      </div>
      <p className="mt-4 font-bold">Selected Files</p>
      <ul>
        {props.files &&
          Array.from(props.files).map((file) => (
            <li key={file.name} className="flex items-center gap-2">
              <span>{file.name}</span>
              <span className="text-sm text-gray-500 italic">
                - {file.size} bytes
              </span>
              <button
                type="button"
                className="flex items-center justify-center rounded-full p-2 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200"
                onClick={() => props.removeFile?.(file.name)}
              >
                <span className="icon-[mdi--close]"></span>
              </button>
            </li>
          ))}
      </ul>

      {props.errorMessage && (
        <p className="text-red-500">{props.errorMessage}</p>
      )}
    </FieldContainer>
  );
}
