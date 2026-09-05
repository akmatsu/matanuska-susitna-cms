import { gql, useMutation, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { CombinedGraphQLErrors } from '@apollo/client/errors';
import { toastQueue } from '@keystar/ui/toast';
import { FormEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  QueryQuery,
  QueryQueryVariables,
  TagsQuery,
  TagsQueryVariables,
} from '../../graphql/graphql';

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
  query Tags($query: String = "") {
    tags(where: { name: { contains: $query, mode: insensitive } }) {
      id
      name
    }
  }
`;

const GET_DOCUMENT_COLLECTIONS_QUERY = gql`
  query Query($query: String = "") {
    documentCollections(
      where: { title: { contains: $query, mode: insensitive } }
    ) {
      id
      title
    }
  }
`;

export function useBulkDocumentUpload(
  selectedCollections: { title: string; id: string }[] = [],
  selectedTags: { id: string; name: string }[] = [],
) {
  const [uploadDocuments] = useMutation(CREATE_DOCUMENTS_MUTATION);
  const collections = useQuery<QueryQuery, QueryQueryVariables>(
    GET_DOCUMENT_COLLECTIONS_QUERY,
  );
  const tags = useQuery<TagsQuery, TagsQueryVariables>(GET_TAGS_QUERY);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const files = form.watch('files');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.handleSubmit(async (data) => {
      uploadFiles(
        data.files,
        selectedCollections.map((c) => c.id),
        selectedTags.map((t) => t.id),
      );
    })();
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
    if (res.error) {
      if (CombinedGraphQLErrors.is(res.error)) {
        res.error.errors.forEach((error) => {
          toastQueue.critical(`Error: ${error.message}`);
        });
      } else {
        toastQueue.critical(`Error: ${res.error.message}`);
      }
    } else if (res.data) {
      toastQueue.positive('Documents Uploaded: Documents uploaded successfully');
      form.reset();
    }
  }

  function removeFile(name: string) {
    const newFiles = Array.from(files).filter((file) => file.name !== name);
    const data = new DataTransfer();
    newFiles.forEach((file) => data.items.add(file));
    form.setValue('files', data.files, {
      shouldValidate: true,
      shouldDirty: true,
    });
    form.trigger('files');
  }

  return {
    collections,
    tags,
    formRef,
    form,
    files,
    onSubmit,
    removeFile,
    searchCollections(query: string) {
      collections.refetch({
        query,
      });
    },
    searchTags(query: string) {
      tags.refetch({
        query,
      });
    },
  };
}
