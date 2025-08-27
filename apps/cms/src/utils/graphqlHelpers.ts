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
  }

  interface BasePageWithSlug implements BasePage {
    slug: String
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
    redirect: Redirect
    createdAt: DateTime
    updatedAt: DateTime
    events(
      where: EventWhereInput! = {}
      orderBy: [EventOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: EventWhereUniqueInput
    ): [Event!]
    eventsCount(where: EventWhereInput! = {}): Int
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
  }

  interface BasePageWithActions implements BasePage & BasePageWithSlug {
    slug: String
    id: ID!
    title: String
    description: String
    body: String
    heroImage: String
    redirect: Redirect
    createdAt: DateTime
    updatedAt: DateTime
    events(
      where: EventWhereInput! = {}
      orderBy: [EventOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: EventWhereUniqueInput
    ): [Event!]
    eventsCount(where: EventWhereInput! = {}): Int
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
    actions(
      where: InternalLinkWhereInput! = {}
      orderBy: [InternalLinkOrderByInput!]! = []
      take: Int
      skip: Int! = 0
      cursor: InternalLinkWhereUniqueInput
    ): [InternalLink!]
    actionsCount(where: InternalLinkWhereInput! = {}): Int
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
    topicsCount(where: TopicWhereInput! = {}): Int
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
  }

  extend type BoardPage implements BasePage
  extend type Service implements BasePageWithSlug & BasePage
  extend type Topic implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type AssemblyDistrict implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Community implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Board implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type PublicNotice implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Park implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Trail implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Facility implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type OrgUnit implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Plan implements BasePageWithSlug & BasePage & BasePageWithActions
  extend type Event implements BasePageWithSlug & BasePage & BasePageWithActions
`;
