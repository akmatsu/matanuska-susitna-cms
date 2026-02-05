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
    | Document
    | Plan
    | Policy
    | ElectionsPage

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
    | Plan
    | Policy

  extend type Query {
    getPage(slug: String!, type: String!): Page
    internalSearch(query: String): [InternalLinkSearch]
    getInternalLink(id: ID!, type: String!): InternalLinkSearch
    topPages(after: DateTime, before: DateTime, take: Int): [TopPage!]!
  }

  type TopPage {
    pageType: String!
    pageId: String!
    totalViews: Int!
    item: PageViewItemUnion
  }

  interface WithTitle {
    title: String
    id: ID!
  }

  interface BasePage {
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
    createdAt: DateTime
    updatedAt: DateTime
    contacts(
      where: ContactWhereInput! = {}
      orderBy: [ContactOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: ContactWhereUniqueInput
    ): [Contact!]
    contactsCount(where: ContactWhereInput! = {}): Int
    owner: User
    documents(
      where: DocumentWhereInput! = {}
      orderBy: [DocumentOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: DocumentWhereUniqueInput
    ): [Document!]
    documentsCount(where: DocumentWhereInput! = {}): Int
    # hideSideNav: Boolean
  }

  interface BasePageWithSlug implements BasePage {
    slug: String
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
    createdAt: DateTime
    updatedAt: DateTime
    contacts(
      where: ContactWhereInput! = {}
      orderBy: [ContactOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: ContactWhereUniqueInput
    ): [Contact!]
    contactsCount(where: ContactWhereInput! = {}): Int
    owner: User
    documents(
      where: DocumentWhereInput! = {}
      orderBy: [DocumentOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: DocumentWhereUniqueInput
    ): [Document!]
    documentsCount(where: DocumentWhereInput! = {}): Int
    hideSideNav: Boolean
  }

  interface BasePageWithDefaultRelationships implements BasePage {
    slug: String
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
    redirect: Redirect
    createdAt: DateTime
    updatedAt: DateTime

    contacts(
      where: ContactWhereInput! = {}
      orderBy: [ContactOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: ContactWhereUniqueInput
    ): [Contact!]
    contactsCount(where: ContactWhereInput! = {}): Int
    publishAt: DateTime
    unpublishAt: DateTime
    reviewDate: DateTime
    owner: User
    hideSideNav: Boolean
    tags(
      where: TagWhereInput! = {}
      orderBy: [TagOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: TagWhereUniqueInput
    ): [Tag!]
    tagsCount(where: TagWhereInput! = {}): Int
    status: String
    documents(
      where: DocumentWhereInput! = {}
      orderBy: [DocumentOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: DocumentWhereUniqueInput
    ): [Document!]
    documentsCount(where: DocumentWhereInput! = {}): Int
    events(
      where: EventWhereInput! = {}
      orderBy: [EventOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: EventWhereUniqueInput
    ): [Event!]
    eventsCount(where: EventWhereInput! = {}): Int
    topics(
      where: TopicWhereInput! = {}
      orderBy: [TopicOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: TopicWhereUniqueInput
    ): [Topic!]
    publicNotices(
      where: PublicNoticeWhereInput! = {}
      orderBy: [PublicNoticeOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: PublicNoticeWhereUniqueInput
    ): [PublicNotice!]
    publicNoticesCount(where: PublicNoticeWhereInput! = {}): Int
    assemblyDistricts(
      where: AssemblyDistrictWhereInput! = {}
      orderBy: [AssemblyDistrictOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: AssemblyDistrictWhereUniqueInput
    ): [AssemblyDistrict!]
    assemblyDistrictsCount(where: AssemblyDistrictWhereInput! = {}): Int
    communities(
      where: CommunityWhereInput! = {}
      orderBy: [CommunityOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: CommunityWhereUniqueInput
    ): [Community!]
    communitiesCount(where: CommunityWhereInput! = {}): Int
    orgUnits(
      where: OrgUnitWhereInput! = {}
      orderBy: [OrgUnitOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: OrgUnitWhereUniqueInput
    ): [OrgUnit!]
    orgUnitsCount(where: OrgUnitWhereInput! = {}): Int
    services(
      where: ServiceWhereInput! = {}
      orderBy: [ServiceOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: ServiceWhereUniqueInput
    ): [Service!]
    servicesCount(where: ServiceWhereInput! = {}): Int
    plans(
      where: PlanWhereInput! = {}
      orderBy: [PlanOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: PlanWhereUniqueInput
    ): [Plan!]
    plansCount(where: PlanWhereInput! = {}): Int
  }

  interface BasePageWithActions implements BasePage & BasePageWithSlug {
    slug: String
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
    createdAt: DateTime
    updatedAt: DateTime
    contacts(
      where: ContactWhereInput! = {}
      orderBy: [ContactOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: ContactWhereUniqueInput
    ): [Contact!]
    contactsCount(where: ContactWhereInput! = {}): Int
    owner: User
    documents(
      where: DocumentWhereInput! = {}
      orderBy: [DocumentOrderByInput!]! = []
      take: Int! = 100
      skip: Int! = 0
      cursor: DocumentWhereUniqueInput
    ): [Document!]
    documentsCount(where: DocumentWhereInput! = {}): Int
    actions(
      where: InternalLinkWhereInput! = {}
      orderBy: [InternalLinkOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: InternalLinkWhereUniqueInput
    ): [InternalLink!]
    actionsCount(where: InternalLinkWhereInput! = {}): Int
    hideSideNav: Boolean
  }

  extend type BoardPage implements BasePage & WithTitle
  extend type Service implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & WithTitle
  extend type Topic implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type AssemblyDistrict implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Community implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Board implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type PublicNotice implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Park implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Trail implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Facility implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type OrgUnit implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Plan implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Event implements BasePageWithSlug & BasePageWithDefaultRelationships & BasePage & BasePageWithActions & WithTitle
  extend type Policy implements BasePageWithSlug & BasePage & BasePageWithActions & WithTitle
  extend type Url implements WithTitle
  extend type Document implements WithTitle
  extend type HomePage implements WithTitle
  extend type ElectionsPage implements WithTitle
`;
