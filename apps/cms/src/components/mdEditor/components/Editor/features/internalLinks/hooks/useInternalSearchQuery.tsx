import {
  gql,
  TypedDocumentNode,
  useQuery,
} from '@keystone-6/core/admin-ui/apollo';
import { useState } from 'react';
import {
  LinkSearchQuery,
  LinkSearchQueryVariables,
} from '../../../../../../../graphql/graphql';

export function useInternalSearchQuery() {
  const [query, setQuery] = useState<string>('');

  const q: TypedDocumentNode<LinkSearchQuery, LinkSearchQueryVariables> = gql`
    query LinkSearch($query: String) {
      internalSearch(query: $query) {
        __typename
        ... on WithTitle {
          id
          title
        }
      }
    }
  `;

  const result = useQuery(q, {
    variables: { query },
  });

  return { query, setQuery, ...result };
}
