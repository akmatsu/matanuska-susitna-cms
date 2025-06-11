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
        ... on AssemblyDistrict {
          id
          title
        }
        ... on Board {
          id
          title
        }
        ... on BoardPage {
          id
          title
        }
        ... on Community {
          id
          title
        }
        ... on Facility {
          id
          title
        }
        ... on HomePage {
          id
          title
        }
        ... on OrgUnit {
          id
          title
        }
        ... on Park {
          id
          title
        }
        ... on PublicNotice {
          id
          title
        }
        ... on Service {
          id
          title
        }
        ... on Trail {
          id
          title
        }
        ... on Url {
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
