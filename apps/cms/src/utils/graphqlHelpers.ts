import { gql } from '@keystone-6/core/admin-ui/apollo';

export const graphqlExtendTypeDefs = gql`
  union InternalLinkSearch =
    | Service
    | Facility
    | HomePage
    | Board
    | BoardPage
    | PublicNotice
    | OrgUnit
    | AssemblyDistrict
    | Community
    | Park
    | Trail
    | Url

  type Query {
    internalSearch(query: String): [InternalLinkSearch]
  }

  type Query {
    getInternalLink(id: ID!, type: String!): InternalLinkSearch
  }
`;
