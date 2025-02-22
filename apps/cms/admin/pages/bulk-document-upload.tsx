import '../../src/styles/global.css';
import { FieldContainer, FieldLabel } from '@keystone-ui/fields';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Input, Button } from '@headlessui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation } from '@keystone-6/core/admin-ui/apollo';

type FormData = {
  files: FileList;
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
    }
  }
`;

export default function BulkDocumentUpload() {
  const [uploadDocuments] = useMutation(CREATE_DOCUMENTS_MUTATION);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm<FormData>();

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
    uploadFiles(data.files);
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

  async function uploadFiles(files?: FileList) {
    if (!files) return;

    const uploads = Array.from(files).map((file) => ({
      title: file.name,
      file: {
        upload: file,
      },
    }));

    await uploadDocuments({ variables: { data: uploads } });
  }

  return (
    <PageContainer header="Bulk Document Upload">
      <h1 className="text-4xl font-bold">Upload Documents</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-start"
      >
        <FieldContainer>
          <FieldLabel>Files</FieldLabel>

          <Input
            type="file"
            accept=".pdf,.doc,docx,.xml,.txt,.xlsx,.ppt,.pptx"
            invalid={!!errors.files}
            multiple
            required
            {...register('files', { required: true, validate: validateFiles })}
          />
          {errors.files && (
            <p className="text-red-500">{errors.files.message}</p>
          )}
        </FieldContainer>
        <Button
          type="submit"
          disabled={!isValid || isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400"
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
