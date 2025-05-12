import { FieldContainer, FieldLabel } from '@keystone-ui/fields';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import {
  Button,
  Input,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { useRef, useState } from 'react';
import { useToasts } from '@keystone-ui/toast';
import clsx from 'clsx';

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
  const [isDragging, setIsDragging] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    setValue,
    watch,
    reset,
  } = useForm<FormData>();

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
    setValue('files', data.files);
  }

  return (
    <PageContainer header="Bulk Document Upload">
      <h1 className="text-4xl font-bold">Upload Documents</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-4"
        ref={formRef}
      >
        <FieldContainer>
          <FieldLabel htmlFor="document_collection">
            Document Collections
          </FieldLabel>

          <Listbox
            value={selectedCollections}
            onChange={setSelectedCollections}
            multiple
            name="document_collection"
          >
            <ListboxButton
              id="document_collection"
              className={clsx(
                'flex h-9 w-80 items-center justify-between border bg-gray-50 px-2 hover:cursor-pointer hover:bg-gray-100',
              )}
            >
              <div className="flex gap-1 overflow-auto py-2">
                {selectedCollections.map((c) => (
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs whitespace-nowrap">
                    {c.title}
                  </span>
                ))}
              </div>
              <div className="border-l pl-2">
                <span
                  className={clsx(
                    'icon-[mdi--chevron-down] size-5 leading-5 data-[open]:rotate-180',
                  )}
                ></span>
              </div>
            </ListboxButton>

            <ListboxOptions
              transition
              className={clsx(
                'mt-2 flex max-h-[250px] w-[var(--button-width)] flex-col gap-1 overflow-auto rounded border bg-gray-50 p-2 shadow',
                'transition duration-100 ease-in data-[closed]:opacity-0',
              )}
              anchor="bottom"
            >
              {collections.data?.documentCollections.map((collection: any) => (
                <ListboxOption
                  key={collection.id}
                  value={collection}
                  className={clsx(
                    'rounded p-1',
                    'transition-colors duration-100 hover:cursor-pointer hover:bg-gray-100',
                    'data-[selected]:bg-blue-100',
                  )}
                >
                  {collection.title}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor="tags">Tags</FieldLabel>
          <Listbox
            value={selectedTags}
            onChange={setSelectedTags}
            multiple
            name="tags"
          >
            <ListboxButton
              id="tags"
              className={clsx(
                'flex h-9 w-80 items-center justify-between border bg-gray-50 px-2 hover:cursor-pointer hover:bg-gray-100',
              )}
            >
              <div className="flex gap-1 overflow-auto py-2">
                {selectedTags.map((t) => (
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs whitespace-nowrap">
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="border-l pl-2">
                <span
                  className={clsx(
                    'icon-[mdi--chevron-down] size-5 leading-5 data-[open]:rotate-180',
                  )}
                ></span>
              </div>
            </ListboxButton>

            <ListboxOptions
              transition
              className={clsx(
                'mt-2 flex max-h-[250px] w-[var(--button-width)] flex-col gap-1 overflow-auto rounded border bg-gray-50 p-2 shadow',
                'transition duration-100 ease-in data-[closed]:opacity-0',
              )}
              anchor="bottom"
            >
              {tags.data?.tags.map((tag: { id: string; name: string }) => (
                <ListboxOption
                  key={tag.id}
                  value={tag}
                  className={clsx(
                    'rounded p-1',
                    'transition-colors duration-100 hover:cursor-pointer hover:bg-gray-100',
                    'data-[selected]:bg-blue-100',
                  )}
                >
                  {tag.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </FieldContainer>
        <FieldContainer className="w-3xl max-w-full">
          <Input
            type="file"
            accept=".pdf,.doc,docx,.xml,.txt,.xlsx,.ppt,.pptx"
            invalid={!!errors.files}
            multiple
            required
            {...register('files', {
              validate: validateFiles,
              required: true,
            })}
            className="hidden"
          />
          <div
            onClick={(e) => {
              if (formRef.current) {
                e.preventDefault();
                (
                  formRef.current.querySelector(
                    'input[name="files"]',
                  ) as HTMLInputElement
                )?.click();
              }
            }}
            className={clsx(
              'flex h-48 w-full flex-col items-center justify-center gap-4 border-4 border-dashed p-4 text-gray-400 transition-colors hover:cursor-pointer',
              {
                'bg-gray-50 hover:bg-gray-100 active:bg-gray-200': !isDragging,
                'bg-gray-100': isDragging,
              },
            )}
            onDrop={(e) => {
              e.preventDefault();
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

              setValue('files', data.files);
              setIsDragging(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
          >
            <span className="icon-[mdi--file-plus] size-20"></span>
            <p>Click or drop files to upload</p>
          </div>
          <p className="mt-4 font-bold">Selected Files</p>
          <ul>
            {files &&
              Array.from(files).map((file) => (
                <li key={file.name} className="flex items-center gap-2">
                  <span>{file.name}</span>
                  <span className="text-sm text-gray-500 italic">
                    - {file.size} bytes
                  </span>
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full p-2 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200"
                    onClick={() => removeFile(file.name)}
                  >
                    <span className="icon-[mdi--close]"></span>
                  </button>
                </li>
              ))}
          </ul>

          {errors.files && (
            <p className="text-red-500">{errors.files.message}</p>
          )}
        </FieldContainer>
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
