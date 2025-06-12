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
    | Topic
    | Url

  union Page =
    | Service
    | Facility
    | Board
    | PublicNotice
    | OrgUnit
    | AssemblyDistrict
    | Community
    | Park
    | Trail
    | Topic

  type Query {
    getPage(slug: String!, type: String!): Page
  }

  type Query {
    internalSearch(query: String): [InternalLinkSearch]
  }

  type Query {
    getInternalLink(id: ID!, type: String!): InternalLinkSearch
  }
`;
