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
        <div ref={contentRef} className="my-4 overflow-hidden border shadow-xs">
          <div className="flex justify-between border-b bg-zinc-100 p-2">
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
        <div className="my-4 w-full border p-4 shadow-xs transition-colors hover:cursor-pointer hover:bg-zinc-100">
          <p>No Collection selected. Click to select one.</p>
        </div>
      )}
    </>
  );
}
