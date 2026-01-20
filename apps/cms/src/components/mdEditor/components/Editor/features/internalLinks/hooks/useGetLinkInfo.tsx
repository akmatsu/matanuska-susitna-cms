import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';

const q = gql`
  query GetInternalLink($id: ID!, $type: String!) {
    getInternalLink(id: $id, type: $type) {
      __typename
      ... on WithTitle {
        id
        title
      }
    }
  }
`;

export function useGetLinkInfo(id: string, type: string) {
  return useQuery(q, {
    variables: {
      id,
      type,
    },
    skip: !type,
  });
}
