import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Button } from '@headlessui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { useRef, useState } from 'react';
import { useToasts } from '@keystone-ui/toast';
import { DropDownSearchField } from '../../src/components/DropDownSearch';
import { FileDropInput } from '../../src/components/FileDropInput';

type FormData = {
  files: FileList;
  document_collection?: string[];
};

const CREATE_DOCUMENTS_MUTATION = gql`
  mutation CreateDocuments($data: [DocumentCreateInput!]!) {
    createDocuments(data: $data) {
      id
      title
      file {
        filename
        filesize
        url
      }
      tags {
        id
        name
      }
    }
  }
`;

const GET_TAGS_QUERY = gql`
  query Tags {
    tags {
      id
      name
    }
  }
`;

const GET_DOCUMENT_COLLECTIONS_QUERY = gql`
  query Query {
    documentCollections {
      id
      title
    }
  }
`;

export default function BulkDocumentUpload() {
  const [uploadDocuments] = useMutation(CREATE_DOCUMENTS_MUTATION);
  const collections = useQuery(GET_DOCUMENT_COLLECTIONS_QUERY);
  const tags = useQuery(GET_TAGS_QUERY);
  const formRef = useRef<HTMLFormElement>(null);
  const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<FormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const files = watch('files');
  const [selectedCollections, setSelectedCollections] = useState<
    {
      title: string;
      id: string;
    }[]
  >([]);
  const [selectedTags, setSelectedTags] = useState<
    { id: string; name: string }[]
  >([]);

  const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/xml',
    'text/plain',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    uploadFiles(
      data.files,
      selectedCollections.map((c) => c.id),
      selectedTags.map((t) => t.id),
    );
  };

  function validateFiles(files: FileList) {
    if (!files || files.length === 0) {
      return 'Please upload a file';
    }
    for (let i = 0; i < files.length; i++) {
      if (!allowedMimeTypes.includes(files[i].type)) {
        return 'Invalid file type';
      }
    }
    return true;
  }

  async function uploadFiles(
    files?: FileList,
    collectionIds?: string[],
    tags?: string[],
  ) {
    if (!files) return;

    const uploads = Array.from(files).map((file) => ({
      title: file.name,
      file: {
        upload: file,
      },
      collections: {
        connect: collectionIds
          ? collectionIds.map((c) => ({
              id: c,
            }))
          : [],
      },
      tags: {
        connect: tags ? tags.map((t) => ({ id: t })) : [],
      },
    }));

    const res = await uploadDocuments({ variables: { data: uploads } });
    if (res.errors) {
      res.errors.forEach((error) => {
        addToast({
          title: 'Error',
          message: error.message,
          tone: 'negative',
        });
      });
    } else if (res.data) {
      addToast({
        title: 'Documents Uploaded',
        message: 'Documents uploaded successfully',
        tone: 'positive',
      });
      reset();
    }
  }

  function removeFile(name: string) {
    const newFiles = Array.from(files).filter((file) => file.name !== name);
    const data = new DataTransfer();
    newFiles.forEach((file) => data.items.add(file));
    setValue('files', data.files, {
      shouldValidate: true,
      shouldDirty: true,
    });
    trigger('files');
  }

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

    setValue('files', data.files, {
      shouldValidate: true,
      shouldDirty: true,
    });
    trigger('files');
  }

  return (
    <PageContainer header="Bulk Document Upload">
      <h1 className="text-4xl font-bold">Upload Documents</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-4"
        ref={formRef}
      >
        <DropDownSearchField
          label="Document Collections"
          data={collections.data?.documentCollections}
          onChange={setSelectedCollections}
          value={selectedCollections}
        />
        <DropDownSearchField
          label="Tags"
          data={tags.data?.tags}
          onChange={setSelectedTags}
          value={selectedTags}
        />

        <FileDropInput
          invalid={!!errors.files}
          errorMessage={errors.files?.message}
          register={register('files', {
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
