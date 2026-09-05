import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';
import {
  GetInternalLinkQuery,
  GetInternalLinkQueryVariables,
} from '../../../../../../../graphql/graphql';

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
  return useQuery<GetInternalLinkQuery, GetInternalLinkQueryVariables>(q, {
    variables: {
      id,
      type,
    },
    skip: !type,
  });
}
