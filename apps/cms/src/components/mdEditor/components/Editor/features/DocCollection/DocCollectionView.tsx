import React, { useEffect } from 'react';
import { useNodeViewContext } from '@prosemirror-adapter/react';
import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';

export function DocCollectionView() {
  const { contentRef, node } = useNodeViewContext();

  const { data, loading, refetch } = useQuery(
    gql`
      query DocumentCollection($where: DocumentCollectionWhereUniqueInput!) {
        documentCollection(where: $where) {
          id
          title
          documents {
            id
            title
            file {
              filename
              filesize
              url
            }
          }
        }
      }
    `,
    {
      variables: {
        where: {
          id: node?.attrs?.id || '',
        },
      },
    },
  );

  useEffect(() => {
    refetch();
  }, [node.attrs.id]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : data ? (
        <div ref={contentRef} className="border shadow-xs overflow-hidden my-4">
          <div className="flex p-2 bg-zinc-100 border-b justify-between">
            <span className="text-2xl">{data.documentCollection.title}</span>{' '}
            <a href={`/document-collections/${data.documentCollection.id}`}>
              Manage collection
            </a>
          </div>
          <ul>
            {data.documentCollection.documents.map((doc, index) => (
              <li
                className={`p-2 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}
                key={doc.id}
              >
                <span>{doc.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Collection not found</div>
      )}
    </>
  );
}
