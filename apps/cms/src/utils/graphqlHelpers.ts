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

  interface BasePage {
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
  }

  interface BasePageWithSlug {
    slug: String
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
  }

  extend type Topic implements BasePage
  extend type AssemblyDistrict implements BasePage
  extend type Community implements BasePage
  extend type Board implements BasePage
  extend type Facility implements BasePage
  extend type PublicNotice implements BasePage
  extend type Park implements BasePage
  extend type Trail implements BasePage
  extend type Service implements BasePage
  extend type Facility implements BasePage
  extend type OrgUnit implements BasePage
  extend type BoardPage implements BasePage

  extend type Topic implements BasePageWithSlug
  extend type AssemblyDistrict implements BasePageWithSlug
  extend type Community implements BasePageWithSlug
  extend type Board implements BasePageWithSlug
  extend type Facility implements BasePageWithSlug
  extend type PublicNotice implements BasePageWithSlug
  extend type Park implements BasePageWithSlug
  extend type Trail implements BasePageWithSlug
  extend type Service implements BasePageWithSlug
  extend type Facility implements BasePageWithSlug
  extend type OrgUnit implements BasePageWithSlug
`;
