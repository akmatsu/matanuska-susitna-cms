'use client';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Button } from '@headlessui/react';
import { useState } from 'react';
import { useToasts } from '@keystone-ui/toast';
import { DropDownSearchField } from '../../src/components/DropDownSearch';
import { FileDropInput } from '../../src/bulkDocumentUploads/components/FileDropInput';
import { useBulkDocumentUpload } from '../../src/bulkDocumentUploads/hooks/useBulkDocumentUpload';
import { validateFiles } from '../../src/bulkDocumentUploads/utils';

export default function BulkDocumentUpload() {
  const { addToast } = useToasts();

  const [selectedCollections, setSelectedCollections] = useState<
    {
      title: string;
      id: string;
    }[]
  >([]);

  const [selectedTags, setSelectedTags] = useState<
    { id: string; name: string }[]
  >([]);

  const {
    collections,
    tags,
    form: {
      formState: { errors, isLoading, isValid },
      ...form
    },
    formRef,
    files,
    onSubmit,
    removeFile,
    searchCollections,
    searchTags,
  } = useBulkDocumentUpload(selectedTags);

  function handleFileFieldClick(e: React.MouseEvent) {
    if (formRef.current) {
      e.preventDefault();
      (
        formRef.current.querySelector('input[name="files"]') as HTMLInputElement
      )?.click();
    }
  }

  function handleFileDrop(e: React.DragEvent) {
    const data = new DataTransfer();
    const f = Array.from(files);
    const nf = Array.from(e.dataTransfer.files).filter(
      (file) =>
        !f.some((f) => {
          const alreadyInFiles = f.name === file.name;
          if (alreadyInFiles) {
            addToast({
              title: 'File already Selected',
              message: `The file ${file.name} has already been selected`,
              tone: 'warning',
            });
          }
          return alreadyInFiles;
        }),
    );

    f.forEach((file) => data.items.add(file));
    nf.forEach((file) => data.items.add(file));

    form.setValue('files', data.files, {
      shouldValidate: true,
      shouldDirty: true,
    });
    form.trigger('files');
  }

  return (
    <PageContainer header="Bulk Document Upload">
      <h1 className="text-4xl font-bold">Upload Documents</h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-start gap-4"
        ref={formRef}
      >
        <DropDownSearchField
          label="Document Collections"
          data={collections.data?.documentCollections}
          onChange={setSelectedCollections}
          onQueryChange={searchCollections}
          value={selectedCollections}
        />
        <DropDownSearchField
          label="Tags"
          data={tags.data?.tags}
          onChange={setSelectedTags}
          onQueryChange={searchTags}
          value={selectedTags}
        />

        <FileDropInput
          invalid={!!errors.files}
          errorMessage={errors.files?.message}
          register={form.register('files', {
            validate: validateFiles,
            required: true,
          })}
          files={files}
          onClick={handleFileFieldClick}
          removeFile={removeFile}
          onDrop={handleFileDrop}
        />

        <Button
          type="submit"
          disabled={!isValid || isLoading}
          className="rounded-sm bg-blue-600 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {isLoading ? (
            <span className="icon-[mdi--loading] animate-spin" />
          ) : (
            'Upload'
          )}
        </Button>
      </form>
    </PageContainer>
  );
}
