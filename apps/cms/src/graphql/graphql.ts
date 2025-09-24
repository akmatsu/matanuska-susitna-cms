/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Alert = {
  __typename?: 'Alert';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urgency?: Maybe<Scalars['Int']['output']>;
};

export type AlertCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
};

export type AlertOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  urgency?: InputMaybe<OrderDirection>;
};

export type AlertUpdateArgs = {
  data: AlertUpdateInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
};

export type AlertWhereInput = {
  AND?: InputMaybe<Array<AlertWhereInput>>;
  NOT?: InputMaybe<Array<AlertWhereInput>>;
  OR?: InputMaybe<Array<AlertWhereInput>>;
  body?: InputMaybe<MyStringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  urgency?: InputMaybe<IntFilter>;
};

export type AlertWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AssemblyDistrict = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'AssemblyDistrict';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<AssemblyDistrictVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<AssemblyDistrictDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  memberName?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  termEnd?: Maybe<Scalars['DateTime']['output']>;
  termStart?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<AssemblyDistrictVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type AssemblyDistrictActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type AssemblyDistrictActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type AssemblyDistrictAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type AssemblyDistrictAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type AssemblyDistrictBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type AssemblyDistrictBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type AssemblyDistrictCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type AssemblyDistrictCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type AssemblyDistrictContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type AssemblyDistrictContactsCountArgs = {
  where?: ContactWhereInput;
};


export type AssemblyDistrictDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type AssemblyDistrictDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type AssemblyDistrictDraftsArgs = {
  cursor?: InputMaybe<AssemblyDistrictDraftWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictDraftWhereInput;
};


export type AssemblyDistrictDraftsCountArgs = {
  where?: AssemblyDistrictDraftWhereInput;
};


export type AssemblyDistrictEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type AssemblyDistrictEventsCountArgs = {
  where?: EventWhereInput;
};


export type AssemblyDistrictFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type AssemblyDistrictFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type AssemblyDistrictOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type AssemblyDistrictOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type AssemblyDistrictParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type AssemblyDistrictParksCountArgs = {
  where?: ParkWhereInput;
};


export type AssemblyDistrictPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type AssemblyDistrictPlansCountArgs = {
  where?: PlanWhereInput;
};


export type AssemblyDistrictPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type AssemblyDistrictPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type AssemblyDistrictServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type AssemblyDistrictServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type AssemblyDistrictTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type AssemblyDistrictTagsCountArgs = {
  where?: TagWhereInput;
};


export type AssemblyDistrictTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type AssemblyDistrictTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type AssemblyDistrictTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type AssemblyDistrictTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type AssemblyDistrictUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type AssemblyDistrictUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type AssemblyDistrictVersionsArgs = {
  cursor?: InputMaybe<AssemblyDistrictVersionWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictVersionWhereInput;
};


export type AssemblyDistrictVersionsCountArgs = {
  where?: AssemblyDistrictVersionWhereInput;
};

export type AssemblyDistrictCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<AssemblyDistrictVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<AssemblyDistrictDraftRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<AssemblyDistrictVersionRelateToManyForCreateInput>;
};

export type AssemblyDistrictDraft = {
  __typename?: 'AssemblyDistrictDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  memberName?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<AssemblyDistrict>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  termEnd?: Maybe<Scalars['DateTime']['output']>;
  termStart?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type AssemblyDistrictDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type AssemblyDistrictDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type AssemblyDistrictDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type AssemblyDistrictDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type AssemblyDistrictDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type AssemblyDistrictDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type AssemblyDistrictDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type AssemblyDistrictDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type AssemblyDistrictDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type AssemblyDistrictDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type AssemblyDistrictDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type AssemblyDistrictDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type AssemblyDistrictDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type AssemblyDistrictDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type AssemblyDistrictDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type AssemblyDistrictDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type AssemblyDistrictDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type AssemblyDistrictDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type AssemblyDistrictDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type AssemblyDistrictDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type AssemblyDistrictDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type AssemblyDistrictDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type AssemblyDistrictDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type AssemblyDistrictDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type AssemblyDistrictDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type AssemblyDistrictDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type AssemblyDistrictDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type AssemblyDistrictDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type AssemblyDistrictDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type AssemblyDistrictDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type AssemblyDistrictDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type AssemblyDistrictDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type AssemblyDistrictDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type AssemblyDistrictDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type AssemblyDistrictDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type AssemblyDistrictDraftManyRelationFilter = {
  every?: InputMaybe<AssemblyDistrictDraftWhereInput>;
  none?: InputMaybe<AssemblyDistrictDraftWhereInput>;
  some?: InputMaybe<AssemblyDistrictDraftWhereInput>;
};

export type AssemblyDistrictDraftOrderByInput = {
  bio?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  fax?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  memberName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  termEnd?: InputMaybe<OrderDirection>;
  termStart?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type AssemblyDistrictDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AssemblyDistrictDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<AssemblyDistrictDraftCreateInput>>;
};

export type AssemblyDistrictDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AssemblyDistrictDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<AssemblyDistrictDraftCreateInput>>;
  disconnect?: InputMaybe<Array<AssemblyDistrictDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<AssemblyDistrictDraftWhereUniqueInput>>;
};

export type AssemblyDistrictDraftUpdateArgs = {
  data: AssemblyDistrictDraftUpdateInput;
  where: AssemblyDistrictDraftWhereUniqueInput;
};

export type AssemblyDistrictDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type AssemblyDistrictDraftWhereInput = {
  AND?: InputMaybe<Array<AssemblyDistrictDraftWhereInput>>;
  NOT?: InputMaybe<Array<AssemblyDistrictDraftWhereInput>>;
  OR?: InputMaybe<Array<AssemblyDistrictDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  memberName?: InputMaybe<StringFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<AssemblyDistrictWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<ImageWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  termEnd?: InputMaybe<DateTimeNullableFilter>;
  termStart?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type AssemblyDistrictDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AssemblyDistrictManyRelationFilter = {
  every?: InputMaybe<AssemblyDistrictWhereInput>;
  none?: InputMaybe<AssemblyDistrictWhereInput>;
  some?: InputMaybe<AssemblyDistrictWhereInput>;
};

export type AssemblyDistrictOrderByInput = {
  bio?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  fax?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  memberName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  termEnd?: InputMaybe<OrderDirection>;
  termStart?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type AssemblyDistrictRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AssemblyDistrictWhereUniqueInput>>;
  create?: InputMaybe<Array<AssemblyDistrictCreateInput>>;
};

export type AssemblyDistrictRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AssemblyDistrictWhereUniqueInput>>;
  create?: InputMaybe<Array<AssemblyDistrictCreateInput>>;
  disconnect?: InputMaybe<Array<AssemblyDistrictWhereUniqueInput>>;
  set?: InputMaybe<Array<AssemblyDistrictWhereUniqueInput>>;
};

export type AssemblyDistrictRelateToOneForCreateInput = {
  connect?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  create?: InputMaybe<AssemblyDistrictCreateInput>;
};

export type AssemblyDistrictRelateToOneForUpdateInput = {
  connect?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  create?: InputMaybe<AssemblyDistrictCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssemblyDistrictUpdateArgs = {
  data: AssemblyDistrictUpdateInput;
  where: AssemblyDistrictWhereUniqueInput;
};

export type AssemblyDistrictUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<AssemblyDistrictVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<AssemblyDistrictDraftRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<AssemblyDistrictVersionRelateToManyForUpdateInput>;
};

export type AssemblyDistrictVersion = {
  __typename?: 'AssemblyDistrictVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<AssemblyDistrict>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  memberName?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<AssemblyDistrict>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  termEnd?: Maybe<Scalars['DateTime']['output']>;
  termStart?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type AssemblyDistrictVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type AssemblyDistrictVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type AssemblyDistrictVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type AssemblyDistrictVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type AssemblyDistrictVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type AssemblyDistrictVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type AssemblyDistrictVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type AssemblyDistrictVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type AssemblyDistrictVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type AssemblyDistrictVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type AssemblyDistrictVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type AssemblyDistrictVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type AssemblyDistrictVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type AssemblyDistrictVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type AssemblyDistrictVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type AssemblyDistrictVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type AssemblyDistrictVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type AssemblyDistrictVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type AssemblyDistrictVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type AssemblyDistrictVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type AssemblyDistrictVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type AssemblyDistrictVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type AssemblyDistrictVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type AssemblyDistrictVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type AssemblyDistrictVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type AssemblyDistrictVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type AssemblyDistrictVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type AssemblyDistrictVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type AssemblyDistrictVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type AssemblyDistrictVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type AssemblyDistrictVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type AssemblyDistrictVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type AssemblyDistrictVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type AssemblyDistrictVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type AssemblyDistrictVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<AssemblyDistrictRelateToOneForCreateInput>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type AssemblyDistrictVersionManyRelationFilter = {
  every?: InputMaybe<AssemblyDistrictVersionWhereInput>;
  none?: InputMaybe<AssemblyDistrictVersionWhereInput>;
  some?: InputMaybe<AssemblyDistrictVersionWhereInput>;
};

export type AssemblyDistrictVersionOrderByInput = {
  bio?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  fax?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  memberName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  termEnd?: InputMaybe<OrderDirection>;
  termStart?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type AssemblyDistrictVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AssemblyDistrictVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<AssemblyDistrictVersionCreateInput>>;
};

export type AssemblyDistrictVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AssemblyDistrictVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<AssemblyDistrictVersionCreateInput>>;
  disconnect?: InputMaybe<Array<AssemblyDistrictVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<AssemblyDistrictVersionWhereUniqueInput>>;
};

export type AssemblyDistrictVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<AssemblyDistrictVersionWhereUniqueInput>;
  create?: InputMaybe<AssemblyDistrictVersionCreateInput>;
};

export type AssemblyDistrictVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<AssemblyDistrictVersionWhereUniqueInput>;
  create?: InputMaybe<AssemblyDistrictVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssemblyDistrictVersionUpdateArgs = {
  data: AssemblyDistrictVersionUpdateInput;
  where: AssemblyDistrictVersionWhereUniqueInput;
};

export type AssemblyDistrictVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<AssemblyDistrictRelateToOneForUpdateInput>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type AssemblyDistrictVersionWhereInput = {
  AND?: InputMaybe<Array<AssemblyDistrictVersionWhereInput>>;
  NOT?: InputMaybe<Array<AssemblyDistrictVersionWhereInput>>;
  OR?: InputMaybe<Array<AssemblyDistrictVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<AssemblyDistrictWhereInput>;
  memberName?: InputMaybe<StringFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<AssemblyDistrictWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<ImageWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  termEnd?: InputMaybe<DateTimeNullableFilter>;
  termStart?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type AssemblyDistrictVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
};

export type AssemblyDistrictWhereInput = {
  AND?: InputMaybe<Array<AssemblyDistrictWhereInput>>;
  NOT?: InputMaybe<Array<AssemblyDistrictWhereInput>>;
  OR?: InputMaybe<Array<AssemblyDistrictWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<AssemblyDistrictVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<AssemblyDistrictDraftManyRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  memberName?: InputMaybe<StringFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<ImageWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  termEnd?: InputMaybe<DateTimeNullableFilter>;
  termStart?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<AssemblyDistrictVersionManyRelationFilter>;
};

export type AssemblyDistrictWhereUniqueInput = {
  currentVersion?: InputMaybe<AssemblyDistrictVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BasePage = {
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  owner?: Maybe<User>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BasePageContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BasePageContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BasePageDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BasePageDocumentsCountArgs = {
  where?: DocumentWhereInput;
};

export type BasePageWithActions = {
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BasePageWithActionsActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type BasePageWithActionsActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type BasePageWithActionsAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BasePageWithActionsAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type BasePageWithActionsCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type BasePageWithActionsCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type BasePageWithActionsContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BasePageWithActionsContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BasePageWithActionsDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BasePageWithActionsDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type BasePageWithActionsEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type BasePageWithActionsEventsCountArgs = {
  where?: EventWhereInput;
};


export type BasePageWithActionsOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type BasePageWithActionsOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type BasePageWithActionsPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type BasePageWithActionsPlansCountArgs = {
  where?: PlanWhereInput;
};


export type BasePageWithActionsPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type BasePageWithActionsPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type BasePageWithActionsServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type BasePageWithActionsServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type BasePageWithActionsTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type BasePageWithActionsTagsCountArgs = {
  where?: TagWhereInput;
};


export type BasePageWithActionsTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type BasePageWithActionsTopicsCountArgs = {
  where?: TopicWhereInput;
};

export type BasePageWithSlug = {
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BasePageWithSlugAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BasePageWithSlugAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type BasePageWithSlugCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type BasePageWithSlugCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type BasePageWithSlugContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BasePageWithSlugContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BasePageWithSlugDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BasePageWithSlugDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type BasePageWithSlugEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type BasePageWithSlugEventsCountArgs = {
  where?: EventWhereInput;
};


export type BasePageWithSlugOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type BasePageWithSlugOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type BasePageWithSlugPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type BasePageWithSlugPlansCountArgs = {
  where?: PlanWhereInput;
};


export type BasePageWithSlugPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type BasePageWithSlugPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type BasePageWithSlugServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type BasePageWithSlugServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type BasePageWithSlugTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type BasePageWithSlugTagsCountArgs = {
  where?: TagWhereInput;
};


export type BasePageWithSlugTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};

export enum BlueHarvestImageOrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Board = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Board';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  calendarId?: Maybe<Scalars['String']['output']>;
  calendarQueryString?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<BoardVersion>;
  description?: Maybe<Scalars['String']['output']>;
  directory?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<BoardDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  linkToAgendas?: Maybe<ExternalLink>;
  linkToPublicOpinionMessage?: Maybe<ExternalLink>;
  linkToResolutions?: Maybe<ExternalLink>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<BoardVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type BoardActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type BoardActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type BoardAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BoardAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type BoardCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type BoardCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type BoardContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BoardContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BoardDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BoardDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type BoardDraftsArgs = {
  cursor?: InputMaybe<BoardDraftWhereUniqueInput>;
  orderBy?: Array<BoardDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardDraftWhereInput;
};


export type BoardDraftsCountArgs = {
  where?: BoardDraftWhereInput;
};


export type BoardEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type BoardEventsCountArgs = {
  where?: EventWhereInput;
};


export type BoardOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type BoardOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type BoardPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type BoardPlansCountArgs = {
  where?: PlanWhereInput;
};


export type BoardPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type BoardPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type BoardServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type BoardServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type BoardTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type BoardTagsCountArgs = {
  where?: TagWhereInput;
};


export type BoardTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type BoardTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type BoardUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type BoardUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type BoardVersionsArgs = {
  cursor?: InputMaybe<BoardVersionWhereUniqueInput>;
  orderBy?: Array<BoardVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardVersionWhereInput;
};


export type BoardVersionsCountArgs = {
  where?: BoardVersionWhereInput;
};

export type BoardCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  calendarQueryString?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<BoardVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  directory?: InputMaybe<DocumentRelateToOneForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<BoardDraftRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<BoardVersionRelateToManyForCreateInput>;
};

export type BoardDraft = {
  __typename?: 'BoardDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  calendarId?: Maybe<Scalars['String']['output']>;
  calendarQueryString?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  directory?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  linkToAgendas?: Maybe<ExternalLink>;
  linkToPublicOpinionMessage?: Maybe<ExternalLink>;
  linkToResolutions?: Maybe<ExternalLink>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Board>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type BoardDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type BoardDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type BoardDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BoardDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type BoardDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type BoardDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type BoardDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BoardDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BoardDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BoardDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type BoardDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type BoardDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type BoardDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type BoardDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type BoardDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type BoardDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type BoardDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type BoardDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type BoardDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type BoardDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type BoardDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type BoardDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type BoardDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type BoardDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type BoardDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type BoardDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type BoardDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  calendarQueryString?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directory?: InputMaybe<DocumentRelateToOneForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<BoardRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type BoardDraftManyRelationFilter = {
  every?: InputMaybe<BoardDraftWhereInput>;
  none?: InputMaybe<BoardDraftWhereInput>;
  some?: InputMaybe<BoardDraftWhereInput>;
};

export type BoardDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  calendarId?: InputMaybe<OrderDirection>;
  calendarQueryString?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BoardDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BoardDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardDraftCreateInput>>;
};

export type BoardDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BoardDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardDraftCreateInput>>;
  disconnect?: InputMaybe<Array<BoardDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardDraftWhereUniqueInput>>;
};

export type BoardDraftUpdateArgs = {
  data: BoardDraftUpdateInput;
  where: BoardDraftWhereUniqueInput;
};

export type BoardDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  calendarQueryString?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directory?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<BoardRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type BoardDraftWhereInput = {
  AND?: InputMaybe<Array<BoardDraftWhereInput>>;
  NOT?: InputMaybe<Array<BoardDraftWhereInput>>;
  OR?: InputMaybe<Array<BoardDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  calendarId?: InputMaybe<StringFilter>;
  calendarQueryString?: InputMaybe<StringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  directory?: InputMaybe<DocumentWhereInput>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  linkToAgendas?: InputMaybe<ExternalLinkWhereInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkWhereInput>;
  linkToResolutions?: InputMaybe<ExternalLinkWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<BoardWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type BoardDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BoardManyRelationFilter = {
  every?: InputMaybe<BoardWhereInput>;
  none?: InputMaybe<BoardWhereInput>;
  some?: InputMaybe<BoardWhereInput>;
};

export type BoardOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  calendarId?: InputMaybe<OrderDirection>;
  calendarQueryString?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BoardPage = BasePage & {
  __typename?: 'BoardPage';
  ParliTrainingLink?: Maybe<ExternalLink>;
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  applicationForm?: Maybe<Document>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  owner?: Maybe<User>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vacancyReport?: Maybe<Document>;
};


export type BoardPageActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type BoardPageActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type BoardPageContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BoardPageContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BoardPageDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BoardPageDocumentsCountArgs = {
  where?: DocumentWhereInput;
};

export type BoardPageCreateInput = {
  ParliTrainingLink?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  applicationForm?: InputMaybe<DocumentRelateToOneForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vacancyReport?: InputMaybe<DocumentRelateToOneForCreateInput>;
};

export type BoardPageOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BoardPageUpdateArgs = {
  data: BoardPageUpdateInput;
  where?: BoardPageWhereUniqueInput;
};

export type BoardPageUpdateInput = {
  ParliTrainingLink?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  applicationForm?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vacancyReport?: InputMaybe<DocumentRelateToOneForUpdateInput>;
};

export type BoardPageWhereInput = {
  AND?: InputMaybe<Array<BoardPageWhereInput>>;
  NOT?: InputMaybe<Array<BoardPageWhereInput>>;
  OR?: InputMaybe<Array<BoardPageWhereInput>>;
  ParliTrainingLink?: InputMaybe<ExternalLinkWhereInput>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  applicationForm?: InputMaybe<DocumentWhereInput>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vacancyReport?: InputMaybe<DocumentWhereInput>;
};

export type BoardPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BoardRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardCreateInput>>;
};

export type BoardRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardCreateInput>>;
  disconnect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardWhereUniqueInput>>;
};

export type BoardRelateToOneForCreateInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  create?: InputMaybe<BoardCreateInput>;
};

export type BoardRelateToOneForUpdateInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  create?: InputMaybe<BoardCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardUpdateArgs = {
  data: BoardUpdateInput;
  where: BoardWhereUniqueInput;
};

export type BoardUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  calendarQueryString?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<BoardVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  directory?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<BoardDraftRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<BoardVersionRelateToManyForUpdateInput>;
};

export type BoardVersion = {
  __typename?: 'BoardVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  calendarId?: Maybe<Scalars['String']['output']>;
  calendarQueryString?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  directory?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Board>;
  linkToAgendas?: Maybe<ExternalLink>;
  linkToPublicOpinionMessage?: Maybe<ExternalLink>;
  linkToResolutions?: Maybe<ExternalLink>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Board>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type BoardVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type BoardVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type BoardVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BoardVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type BoardVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type BoardVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type BoardVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type BoardVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type BoardVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type BoardVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type BoardVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type BoardVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type BoardVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type BoardVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type BoardVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type BoardVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type BoardVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type BoardVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type BoardVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type BoardVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type BoardVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type BoardVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type BoardVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type BoardVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type BoardVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type BoardVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type BoardVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  calendarQueryString?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directory?: InputMaybe<DocumentRelateToOneForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<BoardRelateToOneForCreateInput>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<BoardRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type BoardVersionManyRelationFilter = {
  every?: InputMaybe<BoardVersionWhereInput>;
  none?: InputMaybe<BoardVersionWhereInput>;
  some?: InputMaybe<BoardVersionWhereInput>;
};

export type BoardVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  calendarId?: InputMaybe<OrderDirection>;
  calendarQueryString?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BoardVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BoardVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardVersionCreateInput>>;
};

export type BoardVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BoardVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardVersionCreateInput>>;
  disconnect?: InputMaybe<Array<BoardVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardVersionWhereUniqueInput>>;
};

export type BoardVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<BoardVersionWhereUniqueInput>;
  create?: InputMaybe<BoardVersionCreateInput>;
};

export type BoardVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<BoardVersionWhereUniqueInput>;
  create?: InputMaybe<BoardVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardVersionUpdateArgs = {
  data: BoardVersionUpdateInput;
  where: BoardVersionWhereUniqueInput;
};

export type BoardVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  calendarQueryString?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directory?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<BoardRelateToOneForUpdateInput>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<BoardRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type BoardVersionWhereInput = {
  AND?: InputMaybe<Array<BoardVersionWhereInput>>;
  NOT?: InputMaybe<Array<BoardVersionWhereInput>>;
  OR?: InputMaybe<Array<BoardVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  calendarId?: InputMaybe<StringFilter>;
  calendarQueryString?: InputMaybe<StringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  directory?: InputMaybe<DocumentWhereInput>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  isLive?: InputMaybe<BoardWhereInput>;
  linkToAgendas?: InputMaybe<ExternalLinkWhereInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkWhereInput>;
  linkToResolutions?: InputMaybe<ExternalLinkWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<BoardWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type BoardVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<BoardWhereUniqueInput>;
};

export type BoardWhereInput = {
  AND?: InputMaybe<Array<BoardWhereInput>>;
  NOT?: InputMaybe<Array<BoardWhereInput>>;
  OR?: InputMaybe<Array<BoardWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  calendarId?: InputMaybe<StringFilter>;
  calendarQueryString?: InputMaybe<StringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<BoardVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  directory?: InputMaybe<DocumentWhereInput>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<BoardDraftManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  linkToAgendas?: InputMaybe<ExternalLinkWhereInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkWhereInput>;
  linkToResolutions?: InputMaybe<ExternalLinkWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<BoardVersionManyRelationFilter>;
};

export type BoardWhereUniqueInput = {
  currentVersion?: InputMaybe<BoardVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Community = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Community';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<CommunityVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<CommunityDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<CommunityVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type CommunityActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type CommunityActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type CommunityAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type CommunityAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type CommunityBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type CommunityBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type CommunityCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type CommunityCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type CommunityContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type CommunityContactsCountArgs = {
  where?: ContactWhereInput;
};


export type CommunityDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type CommunityDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type CommunityDraftsArgs = {
  cursor?: InputMaybe<CommunityDraftWhereUniqueInput>;
  orderBy?: Array<CommunityDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityDraftWhereInput;
};


export type CommunityDraftsCountArgs = {
  where?: CommunityDraftWhereInput;
};


export type CommunityEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type CommunityEventsCountArgs = {
  where?: EventWhereInput;
};


export type CommunityFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type CommunityFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type CommunityOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type CommunityOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type CommunityParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type CommunityParksCountArgs = {
  where?: ParkWhereInput;
};


export type CommunityPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type CommunityPlansCountArgs = {
  where?: PlanWhereInput;
};


export type CommunityPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type CommunityPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type CommunityServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type CommunityServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type CommunityTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type CommunityTagsCountArgs = {
  where?: TagWhereInput;
};


export type CommunityTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type CommunityTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type CommunityTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type CommunityTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type CommunityUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type CommunityUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type CommunityVersionsArgs = {
  cursor?: InputMaybe<CommunityVersionWhereUniqueInput>;
  orderBy?: Array<CommunityVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityVersionWhereInput;
};


export type CommunityVersionsCountArgs = {
  where?: CommunityVersionWhereInput;
};

export type CommunityCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<CommunityVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<CommunityDraftRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<CommunityVersionRelateToManyForCreateInput>;
};

export type CommunityDraft = {
  __typename?: 'CommunityDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Community>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type CommunityDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type CommunityDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type CommunityDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type CommunityDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type CommunityDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type CommunityDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type CommunityDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type CommunityDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type CommunityDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type CommunityDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type CommunityDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type CommunityDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type CommunityDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type CommunityDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type CommunityDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type CommunityDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type CommunityDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type CommunityDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type CommunityDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type CommunityDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type CommunityDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type CommunityDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type CommunityDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type CommunityDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type CommunityDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type CommunityDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type CommunityDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type CommunityDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type CommunityDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type CommunityDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type CommunityDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type CommunityDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type CommunityDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type CommunityDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type CommunityDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<CommunityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type CommunityDraftManyRelationFilter = {
  every?: InputMaybe<CommunityDraftWhereInput>;
  none?: InputMaybe<CommunityDraftWhereInput>;
  some?: InputMaybe<CommunityDraftWhereInput>;
};

export type CommunityDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CommunityDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommunityDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<CommunityDraftCreateInput>>;
};

export type CommunityDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommunityDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<CommunityDraftCreateInput>>;
  disconnect?: InputMaybe<Array<CommunityDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityDraftWhereUniqueInput>>;
};

export type CommunityDraftUpdateArgs = {
  data: CommunityDraftUpdateInput;
  where: CommunityDraftWhereUniqueInput;
};

export type CommunityDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type CommunityDraftWhereInput = {
  AND?: InputMaybe<Array<CommunityDraftWhereInput>>;
  NOT?: InputMaybe<Array<CommunityDraftWhereInput>>;
  OR?: InputMaybe<Array<CommunityDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<CommunityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type CommunityDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommunityManyRelationFilter = {
  every?: InputMaybe<CommunityWhereInput>;
  none?: InputMaybe<CommunityWhereInput>;
  some?: InputMaybe<CommunityWhereInput>;
};

export type CommunityOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CommunityRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  create?: InputMaybe<Array<CommunityCreateInput>>;
};

export type CommunityRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  create?: InputMaybe<Array<CommunityCreateInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
};

export type CommunityRelateToOneForCreateInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  create?: InputMaybe<CommunityCreateInput>;
};

export type CommunityRelateToOneForUpdateInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  create?: InputMaybe<CommunityCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityUpdateArgs = {
  data: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<CommunityVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<CommunityDraftRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<CommunityVersionRelateToManyForUpdateInput>;
};

export type CommunityVersion = {
  __typename?: 'CommunityVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Community>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Community>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type CommunityVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type CommunityVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type CommunityVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type CommunityVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type CommunityVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type CommunityVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type CommunityVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type CommunityVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type CommunityVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type CommunityVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type CommunityVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type CommunityVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type CommunityVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type CommunityVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type CommunityVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type CommunityVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type CommunityVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type CommunityVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type CommunityVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type CommunityVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type CommunityVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type CommunityVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type CommunityVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type CommunityVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type CommunityVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type CommunityVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type CommunityVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type CommunityVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type CommunityVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type CommunityVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type CommunityVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type CommunityVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type CommunityVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type CommunityVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type CommunityVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<CommunityRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<CommunityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type CommunityVersionManyRelationFilter = {
  every?: InputMaybe<CommunityVersionWhereInput>;
  none?: InputMaybe<CommunityVersionWhereInput>;
  some?: InputMaybe<CommunityVersionWhereInput>;
};

export type CommunityVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CommunityVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommunityVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<CommunityVersionCreateInput>>;
};

export type CommunityVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommunityVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<CommunityVersionCreateInput>>;
  disconnect?: InputMaybe<Array<CommunityVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityVersionWhereUniqueInput>>;
};

export type CommunityVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<CommunityVersionWhereUniqueInput>;
  create?: InputMaybe<CommunityVersionCreateInput>;
};

export type CommunityVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<CommunityVersionWhereUniqueInput>;
  create?: InputMaybe<CommunityVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityVersionUpdateArgs = {
  data: CommunityVersionUpdateInput;
  where: CommunityVersionWhereUniqueInput;
};

export type CommunityVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type CommunityVersionWhereInput = {
  AND?: InputMaybe<Array<CommunityVersionWhereInput>>;
  NOT?: InputMaybe<Array<CommunityVersionWhereInput>>;
  OR?: InputMaybe<Array<CommunityVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<CommunityWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<CommunityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type CommunityVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<CommunityWhereUniqueInput>;
};

export type CommunityWhereInput = {
  AND?: InputMaybe<Array<CommunityWhereInput>>;
  NOT?: InputMaybe<Array<CommunityWhereInput>>;
  OR?: InputMaybe<Array<CommunityWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<CommunityVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<CommunityDraftManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<CommunityVersionManyRelationFilter>;
};

export type CommunityWhereUniqueInput = {
  currentVersion?: InputMaybe<CommunityVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<Location>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ContactCreateInput = {
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactListItem = {
  __typename?: 'ContactListItem';
  contact?: Maybe<Contact>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
};

export type ContactListItemCreateInput = {
  contact?: InputMaybe<ContactRelateToOneForCreateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactListItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
};

export type ContactListItemUpdateArgs = {
  data: ContactListItemUpdateInput;
  where: ContactListItemWhereUniqueInput;
};

export type ContactListItemUpdateInput = {
  contact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactListItemWhereInput = {
  AND?: InputMaybe<Array<ContactListItemWhereInput>>;
  NOT?: InputMaybe<Array<ContactListItemWhereInput>>;
  OR?: InputMaybe<Array<ContactListItemWhereInput>>;
  contact?: InputMaybe<ContactWhereInput>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
};

export type ContactListItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactManyRelationFilter = {
  every?: InputMaybe<ContactWhereInput>;
  none?: InputMaybe<ContactWhereInput>;
  some?: InputMaybe<ContactWhereInput>;
};

export type ContactOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ContactRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  create?: InputMaybe<Array<ContactCreateInput>>;
};

export type ContactRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  create?: InputMaybe<Array<ContactCreateInput>>;
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  set?: InputMaybe<Array<ContactWhereUniqueInput>>;
};

export type ContactRelateToOneForCreateInput = {
  connect?: InputMaybe<ContactWhereUniqueInput>;
  create?: InputMaybe<ContactCreateInput>;
};

export type ContactRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContactWhereUniqueInput>;
  create?: InputMaybe<ContactCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactUpdateArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};

export type ContactUpdateInput = {
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactWhereInput = {
  AND?: InputMaybe<Array<ContactWhereInput>>;
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  OR?: InputMaybe<Array<ContactWhereInput>>;
  address?: InputMaybe<LocationWhereInput>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
};

export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Document = {
  __typename?: 'Document';
  collections?: Maybe<Array<DocumentCollection>>;
  collectionsCount?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  file?: Maybe<FileFieldOutput>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type DocumentCollectionsArgs = {
  cursor?: InputMaybe<DocumentCollectionWhereUniqueInput>;
  orderBy?: Array<DocumentCollectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentCollectionWhereInput;
};


export type DocumentCollectionsCountArgs = {
  where?: DocumentCollectionWhereInput;
};


export type DocumentTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type DocumentTagsCountArgs = {
  where?: TagWhereInput;
};

export type DocumentCollection = {
  __typename?: 'DocumentCollection';
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  referencedBy?: Maybe<Array<Maybe<Service>>>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type DocumentCollectionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type DocumentCollectionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type DocumentCollectionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type DocumentCollectionTagsCountArgs = {
  where?: TagWhereInput;
};


export type DocumentCollectionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type DocumentCollectionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type DocumentCollectionCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type DocumentCollectionManyRelationFilter = {
  every?: InputMaybe<DocumentCollectionWhereInput>;
  none?: InputMaybe<DocumentCollectionWhereInput>;
  some?: InputMaybe<DocumentCollectionWhereInput>;
};

export type DocumentCollectionOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type DocumentCollectionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DocumentCollectionWhereUniqueInput>>;
  create?: InputMaybe<Array<DocumentCollectionCreateInput>>;
};

export type DocumentCollectionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DocumentCollectionWhereUniqueInput>>;
  create?: InputMaybe<Array<DocumentCollectionCreateInput>>;
  disconnect?: InputMaybe<Array<DocumentCollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<DocumentCollectionWhereUniqueInput>>;
};

export type DocumentCollectionUpdateArgs = {
  data: DocumentCollectionUpdateInput;
  where: DocumentCollectionWhereUniqueInput;
};

export type DocumentCollectionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type DocumentCollectionWhereInput = {
  AND?: InputMaybe<Array<DocumentCollectionWhereInput>>;
  NOT?: InputMaybe<Array<DocumentCollectionWhereInput>>;
  OR?: InputMaybe<Array<DocumentCollectionWhereInput>>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type DocumentCollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentCreateInput = {
  collections?: InputMaybe<DocumentCollectionRelateToManyForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileFieldInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentListItem = {
  __typename?: 'DocumentListItem';
  document?: Maybe<Array<Document>>;
  documentCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
};


export type DocumentListItemDocumentArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type DocumentListItemDocumentCountArgs = {
  where?: DocumentWhereInput;
};

export type DocumentListItemCreateInput = {
  document?: InputMaybe<DocumentRelateToManyForCreateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentListItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
};

export type DocumentListItemUpdateArgs = {
  data: DocumentListItemUpdateInput;
  where: DocumentListItemWhereUniqueInput;
};

export type DocumentListItemUpdateInput = {
  document?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentListItemWhereInput = {
  AND?: InputMaybe<Array<DocumentListItemWhereInput>>;
  NOT?: InputMaybe<Array<DocumentListItemWhereInput>>;
  OR?: InputMaybe<Array<DocumentListItemWhereInput>>;
  document?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
};

export type DocumentListItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DocumentManyRelationFilter = {
  every?: InputMaybe<DocumentWhereInput>;
  none?: InputMaybe<DocumentWhereInput>;
  some?: InputMaybe<DocumentWhereInput>;
};

export type DocumentOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type DocumentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DocumentWhereUniqueInput>>;
  create?: InputMaybe<Array<DocumentCreateInput>>;
};

export type DocumentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DocumentWhereUniqueInput>>;
  create?: InputMaybe<Array<DocumentCreateInput>>;
  disconnect?: InputMaybe<Array<DocumentWhereUniqueInput>>;
  set?: InputMaybe<Array<DocumentWhereUniqueInput>>;
};

export type DocumentRelateToOneForCreateInput = {
  connect?: InputMaybe<DocumentWhereUniqueInput>;
  create?: InputMaybe<DocumentCreateInput>;
};

export type DocumentRelateToOneForUpdateInput = {
  connect?: InputMaybe<DocumentWhereUniqueInput>;
  create?: InputMaybe<DocumentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentUpdateArgs = {
  data: DocumentUpdateInput;
  where: DocumentWhereUniqueInput;
};

export type DocumentUpdateInput = {
  collections?: InputMaybe<DocumentCollectionRelateToManyForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileFieldInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentWhereInput = {
  AND?: InputMaybe<Array<DocumentWhereInput>>;
  NOT?: InputMaybe<Array<DocumentWhereInput>>;
  OR?: InputMaybe<Array<DocumentWhereInput>>;
  collections?: InputMaybe<DocumentCollectionManyRelationFilter>;
  description?: InputMaybe<StringFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type DocumentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EarlyVotingLocation = {
  __typename?: 'EarlyVotingLocation';
  address?: Maybe<Location>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type EarlyVotingLocationHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type EarlyVotingLocationHoursCountArgs = {
  where?: OperatingHourWhereInput;
};

export type EarlyVotingLocationCreateInput = {
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EarlyVotingLocationManyRelationFilter = {
  every?: InputMaybe<EarlyVotingLocationWhereInput>;
  none?: InputMaybe<EarlyVotingLocationWhereInput>;
  some?: InputMaybe<EarlyVotingLocationWhereInput>;
};

export type EarlyVotingLocationOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type EarlyVotingLocationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EarlyVotingLocationWhereUniqueInput>>;
  create?: InputMaybe<Array<EarlyVotingLocationCreateInput>>;
};

export type EarlyVotingLocationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EarlyVotingLocationWhereUniqueInput>>;
  create?: InputMaybe<Array<EarlyVotingLocationCreateInput>>;
  disconnect?: InputMaybe<Array<EarlyVotingLocationWhereUniqueInput>>;
  set?: InputMaybe<Array<EarlyVotingLocationWhereUniqueInput>>;
};

export type EarlyVotingLocationUpdateArgs = {
  data: EarlyVotingLocationUpdateInput;
  where: EarlyVotingLocationWhereUniqueInput;
};

export type EarlyVotingLocationUpdateInput = {
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EarlyVotingLocationWhereInput = {
  AND?: InputMaybe<Array<EarlyVotingLocationWhereInput>>;
  NOT?: InputMaybe<Array<EarlyVotingLocationWhereInput>>;
  OR?: InputMaybe<Array<EarlyVotingLocationWhereInput>>;
  address?: InputMaybe<LocationWhereInput>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type EarlyVotingLocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Election = {
  __typename?: 'Election';
  absenteeApplicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  absenteeVotingApplication?: Maybe<Document>;
  candidateFilingDeadline?: Maybe<Scalars['DateTime']['output']>;
  candidateFilingDocuments?: Maybe<Array<Document>>;
  candidateFilingDocumentsCount?: Maybe<Scalars['Int']['output']>;
  candidateFilingStartDate?: Maybe<Scalars['DateTime']['output']>;
  candidatePacketAvailability?: Maybe<Scalars['DateTime']['output']>;
  candidates?: Maybe<Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<ElectionVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<ElectionDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  earlyVotingStartDate?: Maybe<Scalars['DateTime']['output']>;
  electionBallots?: Maybe<Array<Document>>;
  electionBallotsCount?: Maybe<Scalars['Int']['output']>;
  electionBrochure?: Maybe<Document>;
  electionDate?: Maybe<Scalars['DateTime']['output']>;
  electionOfficialApplication?: Maybe<Document>;
  electionOfficialApplicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  makeDrafts?: Maybe<Scalars['String']['output']>;
  officesToBeFilled?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  propositions?: Maybe<Array<Proposition>>;
  propositionsCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  result?: Maybe<ElectionResult>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<ElectionVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
  voterRegistrationDeadline?: Maybe<Scalars['DateTime']['output']>;
};


export type ElectionCandidateFilingDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionCandidateFilingDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionDraftsArgs = {
  cursor?: InputMaybe<ElectionDraftWhereUniqueInput>;
  orderBy?: Array<ElectionDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionDraftWhereInput;
};


export type ElectionDraftsCountArgs = {
  where?: ElectionDraftWhereInput;
};


export type ElectionElectionBallotsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionElectionBallotsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionPropositionsArgs = {
  cursor?: InputMaybe<PropositionWhereUniqueInput>;
  orderBy?: Array<PropositionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PropositionWhereInput;
};


export type ElectionPropositionsCountArgs = {
  where?: PropositionWhereInput;
};


export type ElectionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ElectionTagsCountArgs = {
  where?: TagWhereInput;
};


export type ElectionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ElectionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type ElectionVersionsArgs = {
  cursor?: InputMaybe<ElectionVersionWhereUniqueInput>;
  orderBy?: Array<ElectionVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionVersionWhereInput;
};


export type ElectionVersionsCountArgs = {
  where?: ElectionVersionWhereInput;
};

export type ElectionCreateInput = {
  absenteeApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  absenteeVotingApplication?: InputMaybe<DocumentRelateToOneForCreateInput>;
  candidateFilingDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  candidateFilingDocuments?: InputMaybe<DocumentRelateToManyForCreateInput>;
  candidateFilingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  candidatePacketAvailability?: InputMaybe<Scalars['DateTime']['input']>;
  candidates?: InputMaybe<DocumentRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ElectionVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<ElectionDraftRelateToManyForCreateInput>;
  earlyVotingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionBallots?: InputMaybe<DocumentRelateToManyForCreateInput>;
  electionBrochure?: InputMaybe<DocumentRelateToOneForCreateInput>;
  electionDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionOfficialApplication?: InputMaybe<DocumentRelateToOneForCreateInput>;
  electionOfficialApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  officesToBeFilled?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  propositions?: InputMaybe<PropositionRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  result?: InputMaybe<ElectionResultRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<ElectionVersionRelateToManyForCreateInput>;
  voterRegistrationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ElectionDraft = {
  __typename?: 'ElectionDraft';
  absenteeApplicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  absenteeVotingApplication?: Maybe<Document>;
  candidateFilingDeadline?: Maybe<Scalars['DateTime']['output']>;
  candidateFilingDocuments?: Maybe<Array<Document>>;
  candidateFilingDocumentsCount?: Maybe<Scalars['Int']['output']>;
  candidateFilingStartDate?: Maybe<Scalars['DateTime']['output']>;
  candidatePacketAvailability?: Maybe<Scalars['DateTime']['output']>;
  candidates?: Maybe<Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  earlyVotingStartDate?: Maybe<Scalars['DateTime']['output']>;
  electionBallots?: Maybe<Array<Document>>;
  electionBallotsCount?: Maybe<Scalars['Int']['output']>;
  electionBrochure?: Maybe<Document>;
  electionDate?: Maybe<Scalars['DateTime']['output']>;
  electionOfficialApplication?: Maybe<Document>;
  electionOfficialApplicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  officesToBeFilled?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Election>;
  owner?: Maybe<User>;
  propositions?: Maybe<Array<Proposition>>;
  propositionsCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  result?: Maybe<ElectionResult>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  voterRegistrationDeadline?: Maybe<Scalars['DateTime']['output']>;
};


export type ElectionDraftCandidateFilingDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionDraftCandidateFilingDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionDraftElectionBallotsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionDraftElectionBallotsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionDraftPropositionsArgs = {
  cursor?: InputMaybe<PropositionWhereUniqueInput>;
  orderBy?: Array<PropositionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PropositionWhereInput;
};


export type ElectionDraftPropositionsCountArgs = {
  where?: PropositionWhereInput;
};


export type ElectionDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ElectionDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type ElectionDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ElectionDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ElectionDraftCreateInput = {
  absenteeApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  absenteeVotingApplication?: InputMaybe<DocumentRelateToOneForCreateInput>;
  candidateFilingDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  candidateFilingDocuments?: InputMaybe<DocumentRelateToManyForCreateInput>;
  candidateFilingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  candidatePacketAvailability?: InputMaybe<Scalars['DateTime']['input']>;
  candidates?: InputMaybe<DocumentRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  earlyVotingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionBallots?: InputMaybe<DocumentRelateToManyForCreateInput>;
  electionBrochure?: InputMaybe<DocumentRelateToOneForCreateInput>;
  electionDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionOfficialApplication?: InputMaybe<DocumentRelateToOneForCreateInput>;
  electionOfficialApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  officesToBeFilled?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<ElectionRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  propositions?: InputMaybe<PropositionRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  result?: InputMaybe<ElectionResultRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  voterRegistrationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ElectionDraftManyRelationFilter = {
  every?: InputMaybe<ElectionDraftWhereInput>;
  none?: InputMaybe<ElectionDraftWhereInput>;
  some?: InputMaybe<ElectionDraftWhereInput>;
};

export type ElectionDraftOrderByInput = {
  absenteeApplicationDeadline?: InputMaybe<OrderDirection>;
  candidateFilingDeadline?: InputMaybe<OrderDirection>;
  candidateFilingStartDate?: InputMaybe<OrderDirection>;
  candidatePacketAvailability?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  earlyVotingStartDate?: InputMaybe<OrderDirection>;
  electionDate?: InputMaybe<OrderDirection>;
  electionOfficialApplicationDeadline?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  officesToBeFilled?: InputMaybe<MyOrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  voterRegistrationDeadline?: InputMaybe<OrderDirection>;
};

export type ElectionDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ElectionDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<ElectionDraftCreateInput>>;
};

export type ElectionDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ElectionDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<ElectionDraftCreateInput>>;
  disconnect?: InputMaybe<Array<ElectionDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<ElectionDraftWhereUniqueInput>>;
};

export type ElectionDraftUpdateArgs = {
  data: ElectionDraftUpdateInput;
  where: ElectionDraftWhereUniqueInput;
};

export type ElectionDraftUpdateInput = {
  absenteeApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  absenteeVotingApplication?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  candidateFilingDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  candidateFilingDocuments?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  candidateFilingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  candidatePacketAvailability?: InputMaybe<Scalars['DateTime']['input']>;
  candidates?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  earlyVotingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionBallots?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  electionBrochure?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  electionDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionOfficialApplication?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  electionOfficialApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  officesToBeFilled?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<ElectionRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  propositions?: InputMaybe<PropositionRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  result?: InputMaybe<ElectionResultRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  voterRegistrationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ElectionDraftWhereInput = {
  AND?: InputMaybe<Array<ElectionDraftWhereInput>>;
  NOT?: InputMaybe<Array<ElectionDraftWhereInput>>;
  OR?: InputMaybe<Array<ElectionDraftWhereInput>>;
  absenteeApplicationDeadline?: InputMaybe<DateTimeNullableFilter>;
  absenteeVotingApplication?: InputMaybe<DocumentWhereInput>;
  candidateFilingDeadline?: InputMaybe<DateTimeNullableFilter>;
  candidateFilingDocuments?: InputMaybe<DocumentManyRelationFilter>;
  candidateFilingStartDate?: InputMaybe<DateTimeNullableFilter>;
  candidatePacketAvailability?: InputMaybe<DateTimeNullableFilter>;
  candidates?: InputMaybe<DocumentWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  earlyVotingStartDate?: InputMaybe<DateTimeNullableFilter>;
  electionBallots?: InputMaybe<DocumentManyRelationFilter>;
  electionBrochure?: InputMaybe<DocumentWhereInput>;
  electionDate?: InputMaybe<DateTimeFilter>;
  electionOfficialApplication?: InputMaybe<DocumentWhereInput>;
  electionOfficialApplicationDeadline?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  officesToBeFilled?: InputMaybe<MyStringFilter>;
  original?: InputMaybe<ElectionWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  propositions?: InputMaybe<PropositionManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  result?: InputMaybe<ElectionResultWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  voterRegistrationDeadline?: InputMaybe<DateTimeNullableFilter>;
};

export type ElectionDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ElectionOrderByInput = {
  absenteeApplicationDeadline?: InputMaybe<OrderDirection>;
  candidateFilingDeadline?: InputMaybe<OrderDirection>;
  candidateFilingStartDate?: InputMaybe<OrderDirection>;
  candidatePacketAvailability?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  earlyVotingStartDate?: InputMaybe<OrderDirection>;
  electionDate?: InputMaybe<OrderDirection>;
  electionOfficialApplicationDeadline?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  officesToBeFilled?: InputMaybe<MyOrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  voterRegistrationDeadline?: InputMaybe<OrderDirection>;
};

export type ElectionRelateToOneForCreateInput = {
  connect?: InputMaybe<ElectionWhereUniqueInput>;
  create?: InputMaybe<ElectionCreateInput>;
};

export type ElectionRelateToOneForUpdateInput = {
  connect?: InputMaybe<ElectionWhereUniqueInput>;
  create?: InputMaybe<ElectionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElectionResult = {
  __typename?: 'ElectionResult';
  document?: Maybe<Document>;
  election?: Maybe<Election>;
  id: Scalars['ID']['output'];
  isOfficial?: Maybe<Scalars['Boolean']['output']>;
};

export type ElectionResultCreateInput = {
  document?: InputMaybe<DocumentRelateToOneForCreateInput>;
  election?: InputMaybe<ElectionRelateToOneForCreateInput>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElectionResultOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  isOfficial?: InputMaybe<OrderDirection>;
};

export type ElectionResultRelateToOneForCreateInput = {
  connect?: InputMaybe<ElectionResultWhereUniqueInput>;
  create?: InputMaybe<ElectionResultCreateInput>;
};

export type ElectionResultRelateToOneForUpdateInput = {
  connect?: InputMaybe<ElectionResultWhereUniqueInput>;
  create?: InputMaybe<ElectionResultCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElectionResultUpdateArgs = {
  data: ElectionResultUpdateInput;
  where: ElectionResultWhereUniqueInput;
};

export type ElectionResultUpdateInput = {
  document?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  election?: InputMaybe<ElectionRelateToOneForUpdateInput>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElectionResultWhereInput = {
  AND?: InputMaybe<Array<ElectionResultWhereInput>>;
  NOT?: InputMaybe<Array<ElectionResultWhereInput>>;
  OR?: InputMaybe<Array<ElectionResultWhereInput>>;
  document?: InputMaybe<DocumentWhereInput>;
  election?: InputMaybe<ElectionWhereInput>;
  id?: InputMaybe<IdFilter>;
  isOfficial?: InputMaybe<BooleanFilter>;
};

export type ElectionResultWhereUniqueInput = {
  election?: InputMaybe<ElectionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ElectionUpdateArgs = {
  data: ElectionUpdateInput;
  where: ElectionWhereUniqueInput;
};

export type ElectionUpdateInput = {
  absenteeApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  absenteeVotingApplication?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  candidateFilingDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  candidateFilingDocuments?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  candidateFilingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  candidatePacketAvailability?: InputMaybe<Scalars['DateTime']['input']>;
  candidates?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ElectionVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<ElectionDraftRelateToManyForUpdateInput>;
  earlyVotingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionBallots?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  electionBrochure?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  electionDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionOfficialApplication?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  electionOfficialApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  officesToBeFilled?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  propositions?: InputMaybe<PropositionRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  result?: InputMaybe<ElectionResultRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<ElectionVersionRelateToManyForUpdateInput>;
  voterRegistrationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ElectionVersion = {
  __typename?: 'ElectionVersion';
  absenteeApplicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  absenteeVotingApplication?: Maybe<Document>;
  candidateFilingDeadline?: Maybe<Scalars['DateTime']['output']>;
  candidateFilingDocuments?: Maybe<Array<Document>>;
  candidateFilingDocumentsCount?: Maybe<Scalars['Int']['output']>;
  candidateFilingStartDate?: Maybe<Scalars['DateTime']['output']>;
  candidatePacketAvailability?: Maybe<Scalars['DateTime']['output']>;
  candidates?: Maybe<Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  earlyVotingStartDate?: Maybe<Scalars['DateTime']['output']>;
  electionBallots?: Maybe<Array<Document>>;
  electionBallotsCount?: Maybe<Scalars['Int']['output']>;
  electionBrochure?: Maybe<Document>;
  electionDate?: Maybe<Scalars['DateTime']['output']>;
  electionOfficialApplication?: Maybe<Document>;
  electionOfficialApplicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Election>;
  officesToBeFilled?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Election>;
  owner?: Maybe<User>;
  propositions?: Maybe<Array<Proposition>>;
  propositionsCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  republish?: Maybe<Scalars['String']['output']>;
  result?: Maybe<ElectionResult>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  voterRegistrationDeadline?: Maybe<Scalars['DateTime']['output']>;
};


export type ElectionVersionCandidateFilingDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionVersionCandidateFilingDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionVersionElectionBallotsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ElectionVersionElectionBallotsCountArgs = {
  where?: DocumentWhereInput;
};


export type ElectionVersionPropositionsArgs = {
  cursor?: InputMaybe<PropositionWhereUniqueInput>;
  orderBy?: Array<PropositionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PropositionWhereInput;
};


export type ElectionVersionPropositionsCountArgs = {
  where?: PropositionWhereInput;
};


export type ElectionVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ElectionVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type ElectionVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ElectionVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ElectionVersionCreateInput = {
  absenteeApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  absenteeVotingApplication?: InputMaybe<DocumentRelateToOneForCreateInput>;
  candidateFilingDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  candidateFilingDocuments?: InputMaybe<DocumentRelateToManyForCreateInput>;
  candidateFilingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  candidatePacketAvailability?: InputMaybe<Scalars['DateTime']['input']>;
  candidates?: InputMaybe<DocumentRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  earlyVotingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionBallots?: InputMaybe<DocumentRelateToManyForCreateInput>;
  electionBrochure?: InputMaybe<DocumentRelateToOneForCreateInput>;
  electionDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionOfficialApplication?: InputMaybe<DocumentRelateToOneForCreateInput>;
  electionOfficialApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<ElectionRelateToOneForCreateInput>;
  officesToBeFilled?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<ElectionRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  propositions?: InputMaybe<PropositionRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<ElectionResultRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  voterRegistrationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ElectionVersionManyRelationFilter = {
  every?: InputMaybe<ElectionVersionWhereInput>;
  none?: InputMaybe<ElectionVersionWhereInput>;
  some?: InputMaybe<ElectionVersionWhereInput>;
};

export type ElectionVersionOrderByInput = {
  absenteeApplicationDeadline?: InputMaybe<OrderDirection>;
  candidateFilingDeadline?: InputMaybe<OrderDirection>;
  candidateFilingStartDate?: InputMaybe<OrderDirection>;
  candidatePacketAvailability?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  earlyVotingStartDate?: InputMaybe<OrderDirection>;
  electionDate?: InputMaybe<OrderDirection>;
  electionOfficialApplicationDeadline?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  officesToBeFilled?: InputMaybe<MyOrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  voterRegistrationDeadline?: InputMaybe<OrderDirection>;
};

export type ElectionVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ElectionVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<ElectionVersionCreateInput>>;
};

export type ElectionVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ElectionVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<ElectionVersionCreateInput>>;
  disconnect?: InputMaybe<Array<ElectionVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<ElectionVersionWhereUniqueInput>>;
};

export type ElectionVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<ElectionVersionWhereUniqueInput>;
  create?: InputMaybe<ElectionVersionCreateInput>;
};

export type ElectionVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<ElectionVersionWhereUniqueInput>;
  create?: InputMaybe<ElectionVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElectionVersionUpdateArgs = {
  data: ElectionVersionUpdateInput;
  where: ElectionVersionWhereUniqueInput;
};

export type ElectionVersionUpdateInput = {
  absenteeApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  absenteeVotingApplication?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  candidateFilingDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  candidateFilingDocuments?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  candidateFilingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  candidatePacketAvailability?: InputMaybe<Scalars['DateTime']['input']>;
  candidates?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  earlyVotingStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionBallots?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  electionBrochure?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  electionDate?: InputMaybe<Scalars['DateTime']['input']>;
  electionOfficialApplication?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  electionOfficialApplicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<ElectionRelateToOneForUpdateInput>;
  officesToBeFilled?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<ElectionRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  propositions?: InputMaybe<PropositionRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<ElectionResultRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  voterRegistrationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ElectionVersionWhereInput = {
  AND?: InputMaybe<Array<ElectionVersionWhereInput>>;
  NOT?: InputMaybe<Array<ElectionVersionWhereInput>>;
  OR?: InputMaybe<Array<ElectionVersionWhereInput>>;
  absenteeApplicationDeadline?: InputMaybe<DateTimeNullableFilter>;
  absenteeVotingApplication?: InputMaybe<DocumentWhereInput>;
  candidateFilingDeadline?: InputMaybe<DateTimeNullableFilter>;
  candidateFilingDocuments?: InputMaybe<DocumentManyRelationFilter>;
  candidateFilingStartDate?: InputMaybe<DateTimeNullableFilter>;
  candidatePacketAvailability?: InputMaybe<DateTimeNullableFilter>;
  candidates?: InputMaybe<DocumentWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  earlyVotingStartDate?: InputMaybe<DateTimeNullableFilter>;
  electionBallots?: InputMaybe<DocumentManyRelationFilter>;
  electionBrochure?: InputMaybe<DocumentWhereInput>;
  electionDate?: InputMaybe<DateTimeFilter>;
  electionOfficialApplication?: InputMaybe<DocumentWhereInput>;
  electionOfficialApplicationDeadline?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<ElectionWhereInput>;
  officesToBeFilled?: InputMaybe<MyStringFilter>;
  original?: InputMaybe<ElectionWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  propositions?: InputMaybe<PropositionManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  result?: InputMaybe<ElectionResultWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  voterRegistrationDeadline?: InputMaybe<DateTimeNullableFilter>;
};

export type ElectionVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<ElectionWhereUniqueInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ElectionWhereInput = {
  AND?: InputMaybe<Array<ElectionWhereInput>>;
  NOT?: InputMaybe<Array<ElectionWhereInput>>;
  OR?: InputMaybe<Array<ElectionWhereInput>>;
  absenteeApplicationDeadline?: InputMaybe<DateTimeNullableFilter>;
  absenteeVotingApplication?: InputMaybe<DocumentWhereInput>;
  candidateFilingDeadline?: InputMaybe<DateTimeNullableFilter>;
  candidateFilingDocuments?: InputMaybe<DocumentManyRelationFilter>;
  candidateFilingStartDate?: InputMaybe<DateTimeNullableFilter>;
  candidatePacketAvailability?: InputMaybe<DateTimeNullableFilter>;
  candidates?: InputMaybe<DocumentWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<ElectionVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<ElectionDraftManyRelationFilter>;
  earlyVotingStartDate?: InputMaybe<DateTimeNullableFilter>;
  electionBallots?: InputMaybe<DocumentManyRelationFilter>;
  electionBrochure?: InputMaybe<DocumentWhereInput>;
  electionDate?: InputMaybe<DateTimeFilter>;
  electionOfficialApplication?: InputMaybe<DocumentWhereInput>;
  electionOfficialApplicationDeadline?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  officesToBeFilled?: InputMaybe<MyStringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  propositions?: InputMaybe<PropositionManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  result?: InputMaybe<ElectionResultWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<ElectionVersionManyRelationFilter>;
  voterRegistrationDeadline?: InputMaybe<DateTimeNullableFilter>;
};

export type ElectionWhereUniqueInput = {
  currentVersion?: InputMaybe<ElectionVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  result?: InputMaybe<ElectionResultWhereUniqueInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ElectionsPage = {
  __typename?: 'ElectionsPage';
  boroughElectionContact?: Maybe<Contact>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  earlyVotingLocations?: Maybe<Array<EarlyVotingLocation>>;
  earlyVotingLocationsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  howElectionsWork?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  owner?: Maybe<User>;
  referendumProcessDocument?: Maybe<Document>;
  stateElectionContact?: Maybe<Contact>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type ElectionsPageEarlyVotingLocationsArgs = {
  cursor?: InputMaybe<EarlyVotingLocationWhereUniqueInput>;
  orderBy?: Array<EarlyVotingLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EarlyVotingLocationWhereInput;
};


export type ElectionsPageEarlyVotingLocationsCountArgs = {
  where?: EarlyVotingLocationWhereInput;
};


export type ElectionsPageUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ElectionsPageUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ElectionsPageCreateInput = {
  boroughElectionContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  earlyVotingLocations?: InputMaybe<EarlyVotingLocationRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  howElectionsWork?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  referendumProcessDocument?: InputMaybe<DocumentRelateToOneForCreateInput>;
  stateElectionContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type ElectionsPageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  howElectionsWork?: InputMaybe<MyOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ElectionsPageUpdateArgs = {
  data: ElectionsPageUpdateInput;
  where?: ElectionsPageWhereUniqueInput;
};

export type ElectionsPageUpdateInput = {
  boroughElectionContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  earlyVotingLocations?: InputMaybe<EarlyVotingLocationRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  howElectionsWork?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  referendumProcessDocument?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  stateElectionContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type ElectionsPageWhereInput = {
  AND?: InputMaybe<Array<ElectionsPageWhereInput>>;
  NOT?: InputMaybe<Array<ElectionsPageWhereInput>>;
  OR?: InputMaybe<Array<ElectionsPageWhereInput>>;
  boroughElectionContact?: InputMaybe<ContactWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  earlyVotingLocations?: InputMaybe<EarlyVotingLocationManyRelationFilter>;
  howElectionsWork?: InputMaybe<MyStringFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  referendumProcessDocument?: InputMaybe<DocumentWhereInput>;
  stateElectionContact?: InputMaybe<ContactWhereInput>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type ElectionsPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Event = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Event';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<EventVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<EventDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<EventVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type EventActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type EventActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type EventAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type EventAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type EventBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type EventBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type EventCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type EventCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type EventContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type EventContactsCountArgs = {
  where?: ContactWhereInput;
};


export type EventDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type EventDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type EventDraftsArgs = {
  cursor?: InputMaybe<EventDraftWhereUniqueInput>;
  orderBy?: Array<EventDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventDraftWhereInput;
};


export type EventDraftsCountArgs = {
  where?: EventDraftWhereInput;
};


export type EventEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type EventEventsCountArgs = {
  where?: EventWhereInput;
};


export type EventFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type EventFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type EventOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type EventOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type EventParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type EventParksCountArgs = {
  where?: ParkWhereInput;
};


export type EventPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type EventPlansCountArgs = {
  where?: PlanWhereInput;
};


export type EventPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type EventPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type EventServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type EventServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type EventTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type EventTagsCountArgs = {
  where?: TagWhereInput;
};


export type EventTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type EventTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type EventTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type EventTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type EventUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type EventUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type EventVersionsArgs = {
  cursor?: InputMaybe<EventVersionWhereUniqueInput>;
  orderBy?: Array<EventVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventVersionWhereInput;
};


export type EventVersionsCountArgs = {
  where?: EventVersionWhereInput;
};

export type EventCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<EventVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<EventDraftRelateToManyForCreateInput>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<EventVersionRelateToManyForCreateInput>;
};

export type EventDraft = {
  __typename?: 'EventDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Event>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type EventDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type EventDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type EventDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type EventDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type EventDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type EventDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type EventDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type EventDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type EventDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type EventDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type EventDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type EventDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type EventDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type EventDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type EventDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type EventDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type EventDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type EventDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type EventDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type EventDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type EventDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type EventDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type EventDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type EventDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type EventDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type EventDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type EventDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type EventDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type EventDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type EventDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type EventDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type EventDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type EventDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type EventDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type EventDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<EventRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type EventDraftManyRelationFilter = {
  every?: InputMaybe<EventDraftWhereInput>;
  none?: InputMaybe<EventDraftWhereInput>;
  some?: InputMaybe<EventDraftWhereInput>;
};

export type EventDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<EventDraftCreateInput>>;
};

export type EventDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<EventDraftCreateInput>>;
  disconnect?: InputMaybe<Array<EventDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<EventDraftWhereUniqueInput>>;
};

export type EventDraftUpdateArgs = {
  data: EventDraftUpdateInput;
  where: EventDraftWhereUniqueInput;
};

export type EventDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<EventRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type EventDraftWhereInput = {
  AND?: InputMaybe<Array<EventDraftWhereInput>>;
  NOT?: InputMaybe<Array<EventDraftWhereInput>>;
  OR?: InputMaybe<Array<EventDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<EventWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type EventDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<EventVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<EventDraftRelateToManyForUpdateInput>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<EventVersionRelateToManyForUpdateInput>;
};

export type EventVersion = {
  __typename?: 'EventVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Event>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Event>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type EventVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type EventVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type EventVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type EventVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type EventVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type EventVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type EventVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type EventVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type EventVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type EventVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type EventVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type EventVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type EventVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type EventVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type EventVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type EventVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type EventVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type EventVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type EventVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type EventVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type EventVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type EventVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type EventVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type EventVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type EventVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type EventVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type EventVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type EventVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type EventVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type EventVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type EventVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type EventVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type EventVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type EventVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type EventVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<EventRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<EventRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type EventVersionManyRelationFilter = {
  every?: InputMaybe<EventVersionWhereInput>;
  none?: InputMaybe<EventVersionWhereInput>;
  some?: InputMaybe<EventVersionWhereInput>;
};

export type EventVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<EventVersionCreateInput>>;
};

export type EventVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<EventVersionCreateInput>>;
  disconnect?: InputMaybe<Array<EventVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<EventVersionWhereUniqueInput>>;
};

export type EventVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<EventVersionWhereUniqueInput>;
  create?: InputMaybe<EventVersionCreateInput>;
};

export type EventVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventVersionWhereUniqueInput>;
  create?: InputMaybe<EventVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventVersionUpdateArgs = {
  data: EventVersionUpdateInput;
  where: EventVersionWhereUniqueInput;
};

export type EventVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<EventRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<EventRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type EventVersionWhereInput = {
  AND?: InputMaybe<Array<EventVersionWhereInput>>;
  NOT?: InputMaybe<Array<EventVersionWhereInput>>;
  OR?: InputMaybe<Array<EventVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<EventWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<EventWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type EventVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<EventWhereUniqueInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<EventVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<EventDraftManyRelationFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<EventVersionManyRelationFilter>;
};

export type EventWhereUniqueInput = {
  currentVersion?: InputMaybe<EventVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Url>;
};

export type ExternalLinkCreateInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<UrlRelateToOneForCreateInput>;
};

export type ExternalLinkManyRelationFilter = {
  every?: InputMaybe<ExternalLinkWhereInput>;
  none?: InputMaybe<ExternalLinkWhereInput>;
  some?: InputMaybe<ExternalLinkWhereInput>;
};

export type ExternalLinkOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
};

export type ExternalLinkRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  create?: InputMaybe<Array<ExternalLinkCreateInput>>;
};

export type ExternalLinkRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  create?: InputMaybe<Array<ExternalLinkCreateInput>>;
  disconnect?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  set?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
};

export type ExternalLinkRelateToOneForCreateInput = {
  connect?: InputMaybe<ExternalLinkWhereUniqueInput>;
  create?: InputMaybe<ExternalLinkCreateInput>;
};

export type ExternalLinkRelateToOneForUpdateInput = {
  connect?: InputMaybe<ExternalLinkWhereUniqueInput>;
  create?: InputMaybe<ExternalLinkCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExternalLinkUpdateArgs = {
  data: ExternalLinkUpdateInput;
  where: ExternalLinkWhereUniqueInput;
};

export type ExternalLinkUpdateInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<UrlRelateToOneForUpdateInput>;
};

export type ExternalLinkWhereInput = {
  AND?: InputMaybe<Array<ExternalLinkWhereInput>>;
  NOT?: InputMaybe<Array<ExternalLinkWhereInput>>;
  OR?: InputMaybe<Array<ExternalLinkWhereInput>>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  url?: InputMaybe<UrlWhereInput>;
};

export type ExternalLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Facility = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Facility';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<FacilityVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<FacilityDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<FacilityVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type FacilityActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type FacilityActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type FacilityAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type FacilityAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type FacilityCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type FacilityCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type FacilityContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type FacilityContactsCountArgs = {
  where?: ContactWhereInput;
};


export type FacilityDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type FacilityDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type FacilityDraftsArgs = {
  cursor?: InputMaybe<FacilityDraftWhereUniqueInput>;
  orderBy?: Array<FacilityDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityDraftWhereInput;
};


export type FacilityDraftsCountArgs = {
  where?: FacilityDraftWhereInput;
};


export type FacilityEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type FacilityEventsCountArgs = {
  where?: EventWhereInput;
};


export type FacilityHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type FacilityHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type FacilityOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type FacilityOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type FacilityPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type FacilityPlansCountArgs = {
  where?: PlanWhereInput;
};


export type FacilityPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type FacilityPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type FacilityServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type FacilityServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type FacilityTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type FacilityTagsCountArgs = {
  where?: TagWhereInput;
};


export type FacilityTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type FacilityTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type FacilityUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type FacilityUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type FacilityVersionsArgs = {
  cursor?: InputMaybe<FacilityVersionWhereUniqueInput>;
  orderBy?: Array<FacilityVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityVersionWhereInput;
};


export type FacilityVersionsCountArgs = {
  where?: FacilityVersionWhereInput;
};

export type FacilityCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<FacilityVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<FacilityDraftRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<FacilityVersionRelateToManyForCreateInput>;
};

export type FacilityDraft = {
  __typename?: 'FacilityDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Facility>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type FacilityDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type FacilityDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type FacilityDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type FacilityDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type FacilityDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type FacilityDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type FacilityDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type FacilityDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type FacilityDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type FacilityDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type FacilityDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type FacilityDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type FacilityDraftHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type FacilityDraftHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type FacilityDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type FacilityDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type FacilityDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type FacilityDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type FacilityDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type FacilityDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type FacilityDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type FacilityDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type FacilityDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type FacilityDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type FacilityDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type FacilityDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type FacilityDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type FacilityDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type FacilityDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<FacilityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type FacilityDraftManyRelationFilter = {
  every?: InputMaybe<FacilityDraftWhereInput>;
  none?: InputMaybe<FacilityDraftWhereInput>;
  some?: InputMaybe<FacilityDraftWhereInput>;
};

export type FacilityDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type FacilityDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FacilityDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<FacilityDraftCreateInput>>;
};

export type FacilityDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FacilityDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<FacilityDraftCreateInput>>;
  disconnect?: InputMaybe<Array<FacilityDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<FacilityDraftWhereUniqueInput>>;
};

export type FacilityDraftUpdateArgs = {
  data: FacilityDraftUpdateInput;
  where: FacilityDraftWhereUniqueInput;
};

export type FacilityDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type FacilityDraftWhereInput = {
  AND?: InputMaybe<Array<FacilityDraftWhereInput>>;
  NOT?: InputMaybe<Array<FacilityDraftWhereInput>>;
  OR?: InputMaybe<Array<FacilityDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<FacilityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type FacilityDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FacilityListItem = {
  __typename?: 'FacilityListItem';
  facility?: Maybe<Facility>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type FacilityListItemCreateInput = {
  facility?: InputMaybe<FacilityRelateToOneForCreateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type FacilityListItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
};

export type FacilityListItemUpdateArgs = {
  data: FacilityListItemUpdateInput;
  where: FacilityListItemWhereUniqueInput;
};

export type FacilityListItemUpdateInput = {
  facility?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type FacilityListItemWhereInput = {
  AND?: InputMaybe<Array<FacilityListItemWhereInput>>;
  NOT?: InputMaybe<Array<FacilityListItemWhereInput>>;
  OR?: InputMaybe<Array<FacilityListItemWhereInput>>;
  facility?: InputMaybe<FacilityWhereInput>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<IntFilter>;
};

export type FacilityListItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FacilityManyRelationFilter = {
  every?: InputMaybe<FacilityWhereInput>;
  none?: InputMaybe<FacilityWhereInput>;
  some?: InputMaybe<FacilityWhereInput>;
};

export type FacilityOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type FacilityRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FacilityWhereUniqueInput>>;
  create?: InputMaybe<Array<FacilityCreateInput>>;
};

export type FacilityRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FacilityWhereUniqueInput>>;
  create?: InputMaybe<Array<FacilityCreateInput>>;
  disconnect?: InputMaybe<Array<FacilityWhereUniqueInput>>;
  set?: InputMaybe<Array<FacilityWhereUniqueInput>>;
};

export type FacilityRelateToOneForCreateInput = {
  connect?: InputMaybe<FacilityWhereUniqueInput>;
  create?: InputMaybe<FacilityCreateInput>;
};

export type FacilityRelateToOneForUpdateInput = {
  connect?: InputMaybe<FacilityWhereUniqueInput>;
  create?: InputMaybe<FacilityCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FacilityUpdateArgs = {
  data: FacilityUpdateInput;
  where: FacilityWhereUniqueInput;
};

export type FacilityUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<FacilityVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<FacilityDraftRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<FacilityVersionRelateToManyForUpdateInput>;
};

export type FacilityVersion = {
  __typename?: 'FacilityVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Facility>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Facility>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type FacilityVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type FacilityVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type FacilityVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type FacilityVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type FacilityVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type FacilityVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type FacilityVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type FacilityVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type FacilityVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type FacilityVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type FacilityVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type FacilityVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type FacilityVersionHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type FacilityVersionHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type FacilityVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type FacilityVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type FacilityVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type FacilityVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type FacilityVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type FacilityVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type FacilityVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type FacilityVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type FacilityVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type FacilityVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type FacilityVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type FacilityVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type FacilityVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type FacilityVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type FacilityVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  isLive?: InputMaybe<FacilityRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<FacilityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type FacilityVersionManyRelationFilter = {
  every?: InputMaybe<FacilityVersionWhereInput>;
  none?: InputMaybe<FacilityVersionWhereInput>;
  some?: InputMaybe<FacilityVersionWhereInput>;
};

export type FacilityVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type FacilityVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FacilityVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<FacilityVersionCreateInput>>;
};

export type FacilityVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FacilityVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<FacilityVersionCreateInput>>;
  disconnect?: InputMaybe<Array<FacilityVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<FacilityVersionWhereUniqueInput>>;
};

export type FacilityVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<FacilityVersionWhereUniqueInput>;
  create?: InputMaybe<FacilityVersionCreateInput>;
};

export type FacilityVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<FacilityVersionWhereUniqueInput>;
  create?: InputMaybe<FacilityVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FacilityVersionUpdateArgs = {
  data: FacilityVersionUpdateInput;
  where: FacilityVersionWhereUniqueInput;
};

export type FacilityVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  isLive?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type FacilityVersionWhereInput = {
  AND?: InputMaybe<Array<FacilityVersionWhereInput>>;
  NOT?: InputMaybe<Array<FacilityVersionWhereInput>>;
  OR?: InputMaybe<Array<FacilityVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<FacilityWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<FacilityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type FacilityVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<FacilityWhereUniqueInput>;
};

export type FacilityWhereInput = {
  AND?: InputMaybe<Array<FacilityWhereInput>>;
  NOT?: InputMaybe<Array<FacilityWhereInput>>;
  OR?: InputMaybe<Array<FacilityWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<FacilityVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<FacilityDraftManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<FacilityVersionManyRelationFilter>;
};

export type FacilityWhereUniqueInput = {
  currentVersion?: InputMaybe<FacilityVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput';
  filename: Scalars['String']['output'];
  filesize: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type Highlight = {
  __typename?: 'Highlight';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  landingPages?: Maybe<Array<LandingPage>>;
  landingPagesCount?: Maybe<Scalars['Int']['output']>;
  linkedItem?: Maybe<InternalLink>;
  message?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  priority?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type HighlightLandingPagesArgs = {
  cursor?: InputMaybe<LandingPageWhereUniqueInput>;
  orderBy?: Array<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LandingPageWhereInput;
};


export type HighlightLandingPagesCountArgs = {
  where?: LandingPageWhereInput;
};


export type HighlightTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type HighlightTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type HighlightUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type HighlightUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type HighlightCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  landingPages?: InputMaybe<LandingPageRelateToManyForCreateInput>;
  linkedItem?: InputMaybe<InternalLinkRelateToOneForCreateInput>;
  message?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type HighlightManyRelationFilter = {
  every?: InputMaybe<HighlightWhereInput>;
  none?: InputMaybe<HighlightWhereInput>;
  some?: InputMaybe<HighlightWhereInput>;
};

export type HighlightOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<BlueHarvestImageOrderDirection>;
  message?: InputMaybe<OrderDirection>;
  priority?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type HighlightRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  create?: InputMaybe<Array<HighlightCreateInput>>;
};

export type HighlightRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  create?: InputMaybe<Array<HighlightCreateInput>>;
  disconnect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  set?: InputMaybe<Array<HighlightWhereUniqueInput>>;
};

export type HighlightUpdateArgs = {
  data: HighlightUpdateInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  landingPages?: InputMaybe<LandingPageRelateToManyForUpdateInput>;
  linkedItem?: InputMaybe<InternalLinkRelateToOneForUpdateInput>;
  message?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type HighlightWhereInput = {
  AND?: InputMaybe<Array<HighlightWhereInput>>;
  NOT?: InputMaybe<Array<HighlightWhereInput>>;
  OR?: InputMaybe<Array<HighlightWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  landingPages?: InputMaybe<LandingPageManyRelationFilter>;
  linkedItem?: InputMaybe<InternalLinkWhereInput>;
  message?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  priority?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type HighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featuredItems?: Maybe<Array<FeaturedItem>>;
  featuredItemsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageFeaturedItemsArgs = {
  cursor?: InputMaybe<FeaturedItemWhereUniqueInput>;
  orderBy?: Array<FeaturedItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FeaturedItemWhereInput;
};


export type HomePageFeaturedItemsCountArgs = {
  where?: FeaturedItemWhereInput;
};

export type HomePageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featuredItems?: InputMaybe<FeaturedItemRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type HomePageUpdateArgs = {
  data: HomePageUpdateInput;
  where?: HomePageWhereUniqueInput;
};

export type HomePageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featuredItems?: InputMaybe<FeaturedItemRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageWhereInput = {
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  featuredItems?: InputMaybe<FeaturedItemManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type HomePageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  __typename?: 'Image';
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<ImageFieldOutput>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ImageTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ImageTagsCountArgs = {
  where?: TagWhereInput;
};

export type ImageCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<ImageFieldInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ImageOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ImageRelateToOneForCreateInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  create?: InputMaybe<ImageCreateInput>;
};

export type ImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  create?: InputMaybe<ImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageUpdateArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<ImageFieldInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InternalLink = {
  __typename?: 'InternalLink';
  id: Scalars['ID']['output'];
  item?: Maybe<LinkedItemUnion>;
  label?: Maybe<Scalars['String']['output']>;
  selectItem?: Maybe<Scalars['JSON']['output']>;
};

export type InternalLinkCreateInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  selectItem?: InputMaybe<Scalars['JSON']['input']>;
};

export type InternalLinkManyRelationFilter = {
  every?: InputMaybe<InternalLinkWhereInput>;
  none?: InputMaybe<InternalLinkWhereInput>;
  some?: InputMaybe<InternalLinkWhereInput>;
};

export type InternalLinkOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
};

export type InternalLinkRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<InternalLinkWhereUniqueInput>>;
  create?: InputMaybe<Array<InternalLinkCreateInput>>;
};

export type InternalLinkRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<InternalLinkWhereUniqueInput>>;
  create?: InputMaybe<Array<InternalLinkCreateInput>>;
  disconnect?: InputMaybe<Array<InternalLinkWhereUniqueInput>>;
  set?: InputMaybe<Array<InternalLinkWhereUniqueInput>>;
};

export type InternalLinkRelateToOneForCreateInput = {
  connect?: InputMaybe<InternalLinkWhereUniqueInput>;
  create?: InputMaybe<InternalLinkCreateInput>;
};

export type InternalLinkRelateToOneForUpdateInput = {
  connect?: InputMaybe<InternalLinkWhereUniqueInput>;
  create?: InputMaybe<InternalLinkCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InternalLinkSearch = AssemblyDistrict | Board | BoardPage | Community | Facility | HomePage | OrgUnit | Park | PublicNotice | Service | Topic | Trail | Url;

export type InternalLinkUpdateArgs = {
  data: InternalLinkUpdateInput;
  where: InternalLinkWhereUniqueInput;
};

export type InternalLinkUpdateInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  selectItem?: InputMaybe<Scalars['JSON']['input']>;
};

export type InternalLinkWhereInput = {
  AND?: InputMaybe<Array<InternalLinkWhereInput>>;
  NOT?: InputMaybe<Array<InternalLinkWhereInput>>;
  OR?: InputMaybe<Array<InternalLinkWhereInput>>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
};

export type InternalLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSearchFields: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LandingPage = {
  __typename?: 'LandingPage';
  body?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Array<Highlight>>;
  highlightsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type LandingPageHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: Array<HighlightOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: HighlightWhereInput;
};


export type LandingPageHighlightsCountArgs = {
  where?: HighlightWhereInput;
};

export type LandingPageCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageManyRelationFilter = {
  every?: InputMaybe<LandingPageWhereInput>;
  none?: InputMaybe<LandingPageWhereInput>;
  some?: InputMaybe<LandingPageWhereInput>;
};

export type LandingPageOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type LandingPageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  create?: InputMaybe<Array<LandingPageCreateInput>>;
};

export type LandingPageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  create?: InputMaybe<Array<LandingPageCreateInput>>;
  disconnect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  set?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
};

export type LandingPageUpdateArgs = {
  data: LandingPageUpdateInput;
  where: LandingPageWhereUniqueInput;
};

export type LandingPageUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageWhereInput = {
  AND?: InputMaybe<Array<LandingPageWhereInput>>;
  NOT?: InputMaybe<Array<LandingPageWhereInput>>;
  OR?: InputMaybe<Array<LandingPageWhereInput>>;
  body?: InputMaybe<MyStringFilter>;
  description?: InputMaybe<StringFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LandingPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedItemUnion = AssemblyDistrict | Board | BoardPage | Community | Document | ElectionsPage | Facility | HomePage | OrgUnit | Park | Plan | Service | Topic | Trail | Url;

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lineOne?: Maybe<Scalars['String']['output']>;
  lineTwo?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type LocationCreateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  lineOne?: InputMaybe<Scalars['String']['input']>;
  lineTwo?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type LocationOrderByInput = {
  city?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lineOne?: InputMaybe<OrderDirection>;
  lineTwo?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  zip?: InputMaybe<OrderDirection>;
};

export type LocationRelateToOneForCreateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
};

export type LocationRelateToOneForUpdateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LocationUpdateArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  lineOne?: InputMaybe<Scalars['String']['input']>;
  lineTwo?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  city?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lineOne?: InputMaybe<StringFilter>;
  lineTwo?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  zip?: InputMaybe<StringFilter>;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlert?: Maybe<Alert>;
  createAlerts?: Maybe<Array<Maybe<Alert>>>;
  createAssemblyDistrict?: Maybe<AssemblyDistrict>;
  createAssemblyDistrictDraft?: Maybe<AssemblyDistrictDraft>;
  createAssemblyDistrictDrafts?: Maybe<Array<Maybe<AssemblyDistrictDraft>>>;
  createAssemblyDistrictVersion?: Maybe<AssemblyDistrictVersion>;
  createAssemblyDistrictVersions?: Maybe<Array<Maybe<AssemblyDistrictVersion>>>;
  createAssemblyDistricts?: Maybe<Array<Maybe<AssemblyDistrict>>>;
  createBoard?: Maybe<Board>;
  createBoardDraft?: Maybe<BoardDraft>;
  createBoardDrafts?: Maybe<Array<Maybe<BoardDraft>>>;
  createBoardPage?: Maybe<BoardPage>;
  createBoardPages?: Maybe<Array<Maybe<BoardPage>>>;
  createBoardVersion?: Maybe<BoardVersion>;
  createBoardVersions?: Maybe<Array<Maybe<BoardVersion>>>;
  createBoards?: Maybe<Array<Maybe<Board>>>;
  createCommunities?: Maybe<Array<Maybe<Community>>>;
  createCommunity?: Maybe<Community>;
  createCommunityDraft?: Maybe<CommunityDraft>;
  createCommunityDrafts?: Maybe<Array<Maybe<CommunityDraft>>>;
  createCommunityVersion?: Maybe<CommunityVersion>;
  createCommunityVersions?: Maybe<Array<Maybe<CommunityVersion>>>;
  createContact?: Maybe<Contact>;
  createContactListItem?: Maybe<ContactListItem>;
  createContactListItems?: Maybe<Array<Maybe<ContactListItem>>>;
  createContacts?: Maybe<Array<Maybe<Contact>>>;
  createDocument?: Maybe<Document>;
  createDocumentCollection?: Maybe<DocumentCollection>;
  createDocumentCollections?: Maybe<Array<Maybe<DocumentCollection>>>;
  createDocumentListItem?: Maybe<DocumentListItem>;
  createDocumentListItems?: Maybe<Array<Maybe<DocumentListItem>>>;
  createDocuments?: Maybe<Array<Maybe<Document>>>;
  createEarlyVotingLocation?: Maybe<EarlyVotingLocation>;
  createEarlyVotingLocations?: Maybe<Array<Maybe<EarlyVotingLocation>>>;
  createElection?: Maybe<Election>;
  createElectionDraft?: Maybe<ElectionDraft>;
  createElectionDrafts?: Maybe<Array<Maybe<ElectionDraft>>>;
  createElectionResult?: Maybe<ElectionResult>;
  createElectionResults?: Maybe<Array<Maybe<ElectionResult>>>;
  createElectionVersion?: Maybe<ElectionVersion>;
  createElectionVersions?: Maybe<Array<Maybe<ElectionVersion>>>;
  createElections?: Maybe<Array<Maybe<Election>>>;
  createElectionsPage?: Maybe<ElectionsPage>;
  createElectionsPages?: Maybe<Array<Maybe<ElectionsPage>>>;
  createEvent?: Maybe<Event>;
  createEventDraft?: Maybe<EventDraft>;
  createEventDrafts?: Maybe<Array<Maybe<EventDraft>>>;
  createEventVersion?: Maybe<EventVersion>;
  createEventVersions?: Maybe<Array<Maybe<EventVersion>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createExternalLink?: Maybe<ExternalLink>;
  createExternalLinks?: Maybe<Array<Maybe<ExternalLink>>>;
  createFacilities?: Maybe<Array<Maybe<Facility>>>;
  createFacility?: Maybe<Facility>;
  createFacilityDraft?: Maybe<FacilityDraft>;
  createFacilityDrafts?: Maybe<Array<Maybe<FacilityDraft>>>;
  createFacilityListItem?: Maybe<FacilityListItem>;
  createFacilityListItems?: Maybe<Array<Maybe<FacilityListItem>>>;
  createFacilityVersion?: Maybe<FacilityVersion>;
  createFacilityVersions?: Maybe<Array<Maybe<FacilityVersion>>>;
  createFeaturedItems?: Maybe<Array<Maybe<FeaturedItem>>>;
  createHighlight?: Maybe<Highlight>;
  createHighlights?: Maybe<Array<Maybe<Highlight>>>;
  createHomePage?: Maybe<HomePage>;
  createHomePages?: Maybe<Array<Maybe<HomePage>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInternalLink?: Maybe<InternalLink>;
  createInternalLinks?: Maybe<Array<Maybe<InternalLink>>>;
  createLandingPage?: Maybe<LandingPage>;
  createLandingPages?: Maybe<Array<Maybe<LandingPage>>>;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  createOperatingHour?: Maybe<OperatingHour>;
  createOperatingHours?: Maybe<Array<Maybe<OperatingHour>>>;
  createOrgUnit?: Maybe<OrgUnit>;
  createOrgUnitDraft?: Maybe<OrgUnitDraft>;
  createOrgUnitDrafts?: Maybe<Array<Maybe<OrgUnitDraft>>>;
  createOrgUnitVersion?: Maybe<OrgUnitVersion>;
  createOrgUnitVersions?: Maybe<Array<Maybe<OrgUnitVersion>>>;
  createOrgUnits?: Maybe<Array<Maybe<OrgUnit>>>;
  createPageView?: Maybe<PageView>;
  createPageViews?: Maybe<Array<Maybe<PageView>>>;
  createPark?: Maybe<Park>;
  createParkDraft?: Maybe<ParkDraft>;
  createParkDrafts?: Maybe<Array<Maybe<ParkDraft>>>;
  createParkVersion?: Maybe<ParkVersion>;
  createParkVersions?: Maybe<Array<Maybe<ParkVersion>>>;
  createParks?: Maybe<Array<Maybe<Park>>>;
  createPlan?: Maybe<Plan>;
  createPlanCode?: Maybe<PlanCode>;
  createPlanCodes?: Maybe<Array<Maybe<PlanCode>>>;
  createPlanDocument?: Maybe<PlanDocument>;
  createPlanDocuments?: Maybe<Array<Maybe<PlanDocument>>>;
  createPlanDraft?: Maybe<PlanDraft>;
  createPlanDrafts?: Maybe<Array<Maybe<PlanDraft>>>;
  createPlanVersion?: Maybe<PlanVersion>;
  createPlanVersions?: Maybe<Array<Maybe<PlanVersion>>>;
  createPlans?: Maybe<Array<Maybe<Plan>>>;
  createProposition?: Maybe<Proposition>;
  createPropositions?: Maybe<Array<Maybe<Proposition>>>;
  createPublicNotice?: Maybe<PublicNotice>;
  createPublicNoticeDraft?: Maybe<PublicNoticeDraft>;
  createPublicNoticeDrafts?: Maybe<Array<Maybe<PublicNoticeDraft>>>;
  createPublicNoticeVersion?: Maybe<PublicNoticeVersion>;
  createPublicNoticeVersions?: Maybe<Array<Maybe<PublicNoticeVersion>>>;
  createPublicNotices?: Maybe<Array<Maybe<PublicNotice>>>;
  createRedirect?: Maybe<Redirect>;
  createRedirects?: Maybe<Array<Maybe<Redirect>>>;
  createService?: Maybe<Service>;
  createServiceDraft?: Maybe<ServiceDraft>;
  createServiceDrafts?: Maybe<Array<Maybe<ServiceDraft>>>;
  createServiceVersion?: Maybe<ServiceVersion>;
  createServiceVersions?: Maybe<Array<Maybe<ServiceVersion>>>;
  createServices?: Maybe<Array<Maybe<Service>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createTopic?: Maybe<Topic>;
  createTopicDraft?: Maybe<TopicDraft>;
  createTopicDrafts?: Maybe<Array<Maybe<TopicDraft>>>;
  createTopicVersion?: Maybe<TopicVersion>;
  createTopicVersions?: Maybe<Array<Maybe<TopicVersion>>>;
  createTopics?: Maybe<Array<Maybe<Topic>>>;
  createTrail?: Maybe<Trail>;
  createTrailDraft?: Maybe<TrailDraft>;
  createTrailDrafts?: Maybe<Array<Maybe<TrailDraft>>>;
  createTrailVersion?: Maybe<TrailVersion>;
  createTrailVersions?: Maybe<Array<Maybe<TrailVersion>>>;
  createTrails?: Maybe<Array<Maybe<Trail>>>;
  createUrl?: Maybe<Url>;
  createUrls?: Maybe<Array<Maybe<Url>>>;
  createUser?: Maybe<User>;
  createUserGroup?: Maybe<UserGroup>;
  createUserGroups?: Maybe<Array<Maybe<UserGroup>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createfeaturedItem?: Maybe<FeaturedItem>;
  deleteAlert?: Maybe<Alert>;
  deleteAlerts?: Maybe<Array<Maybe<Alert>>>;
  deleteAssemblyDistrict?: Maybe<AssemblyDistrict>;
  deleteAssemblyDistrictDraft?: Maybe<AssemblyDistrictDraft>;
  deleteAssemblyDistrictDrafts?: Maybe<Array<Maybe<AssemblyDistrictDraft>>>;
  deleteAssemblyDistrictVersion?: Maybe<AssemblyDistrictVersion>;
  deleteAssemblyDistrictVersions?: Maybe<Array<Maybe<AssemblyDistrictVersion>>>;
  deleteAssemblyDistricts?: Maybe<Array<Maybe<AssemblyDistrict>>>;
  deleteBoard?: Maybe<Board>;
  deleteBoardDraft?: Maybe<BoardDraft>;
  deleteBoardDrafts?: Maybe<Array<Maybe<BoardDraft>>>;
  deleteBoardPage?: Maybe<BoardPage>;
  deleteBoardPages?: Maybe<Array<Maybe<BoardPage>>>;
  deleteBoardVersion?: Maybe<BoardVersion>;
  deleteBoardVersions?: Maybe<Array<Maybe<BoardVersion>>>;
  deleteBoards?: Maybe<Array<Maybe<Board>>>;
  deleteCommunities?: Maybe<Array<Maybe<Community>>>;
  deleteCommunity?: Maybe<Community>;
  deleteCommunityDraft?: Maybe<CommunityDraft>;
  deleteCommunityDrafts?: Maybe<Array<Maybe<CommunityDraft>>>;
  deleteCommunityVersion?: Maybe<CommunityVersion>;
  deleteCommunityVersions?: Maybe<Array<Maybe<CommunityVersion>>>;
  deleteContact?: Maybe<Contact>;
  deleteContactListItem?: Maybe<ContactListItem>;
  deleteContactListItems?: Maybe<Array<Maybe<ContactListItem>>>;
  deleteContacts?: Maybe<Array<Maybe<Contact>>>;
  deleteDocument?: Maybe<Document>;
  deleteDocumentCollection?: Maybe<DocumentCollection>;
  deleteDocumentCollections?: Maybe<Array<Maybe<DocumentCollection>>>;
  deleteDocumentListItem?: Maybe<DocumentListItem>;
  deleteDocumentListItems?: Maybe<Array<Maybe<DocumentListItem>>>;
  deleteDocuments?: Maybe<Array<Maybe<Document>>>;
  deleteEarlyVotingLocation?: Maybe<EarlyVotingLocation>;
  deleteEarlyVotingLocations?: Maybe<Array<Maybe<EarlyVotingLocation>>>;
  deleteElection?: Maybe<Election>;
  deleteElectionDraft?: Maybe<ElectionDraft>;
  deleteElectionDrafts?: Maybe<Array<Maybe<ElectionDraft>>>;
  deleteElectionResult?: Maybe<ElectionResult>;
  deleteElectionResults?: Maybe<Array<Maybe<ElectionResult>>>;
  deleteElectionVersion?: Maybe<ElectionVersion>;
  deleteElectionVersions?: Maybe<Array<Maybe<ElectionVersion>>>;
  deleteElections?: Maybe<Array<Maybe<Election>>>;
  deleteElectionsPage?: Maybe<ElectionsPage>;
  deleteElectionsPages?: Maybe<Array<Maybe<ElectionsPage>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventDraft?: Maybe<EventDraft>;
  deleteEventDrafts?: Maybe<Array<Maybe<EventDraft>>>;
  deleteEventVersion?: Maybe<EventVersion>;
  deleteEventVersions?: Maybe<Array<Maybe<EventVersion>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteExternalLink?: Maybe<ExternalLink>;
  deleteExternalLinks?: Maybe<Array<Maybe<ExternalLink>>>;
  deleteFacilities?: Maybe<Array<Maybe<Facility>>>;
  deleteFacility?: Maybe<Facility>;
  deleteFacilityDraft?: Maybe<FacilityDraft>;
  deleteFacilityDrafts?: Maybe<Array<Maybe<FacilityDraft>>>;
  deleteFacilityListItem?: Maybe<FacilityListItem>;
  deleteFacilityListItems?: Maybe<Array<Maybe<FacilityListItem>>>;
  deleteFacilityVersion?: Maybe<FacilityVersion>;
  deleteFacilityVersions?: Maybe<Array<Maybe<FacilityVersion>>>;
  deleteFeaturedItems?: Maybe<Array<Maybe<FeaturedItem>>>;
  deleteHighlight?: Maybe<Highlight>;
  deleteHighlights?: Maybe<Array<Maybe<Highlight>>>;
  deleteHomePage?: Maybe<HomePage>;
  deleteHomePages?: Maybe<Array<Maybe<HomePage>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteInternalLink?: Maybe<InternalLink>;
  deleteInternalLinks?: Maybe<Array<Maybe<InternalLink>>>;
  deleteLandingPage?: Maybe<LandingPage>;
  deleteLandingPages?: Maybe<Array<Maybe<LandingPage>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  deleteOperatingHour?: Maybe<OperatingHour>;
  deleteOperatingHours?: Maybe<Array<Maybe<OperatingHour>>>;
  deleteOrgUnit?: Maybe<OrgUnit>;
  deleteOrgUnitDraft?: Maybe<OrgUnitDraft>;
  deleteOrgUnitDrafts?: Maybe<Array<Maybe<OrgUnitDraft>>>;
  deleteOrgUnitVersion?: Maybe<OrgUnitVersion>;
  deleteOrgUnitVersions?: Maybe<Array<Maybe<OrgUnitVersion>>>;
  deleteOrgUnits?: Maybe<Array<Maybe<OrgUnit>>>;
  deletePageView?: Maybe<PageView>;
  deletePageViews?: Maybe<Array<Maybe<PageView>>>;
  deletePark?: Maybe<Park>;
  deleteParkDraft?: Maybe<ParkDraft>;
  deleteParkDrafts?: Maybe<Array<Maybe<ParkDraft>>>;
  deleteParkVersion?: Maybe<ParkVersion>;
  deleteParkVersions?: Maybe<Array<Maybe<ParkVersion>>>;
  deleteParks?: Maybe<Array<Maybe<Park>>>;
  deletePlan?: Maybe<Plan>;
  deletePlanCode?: Maybe<PlanCode>;
  deletePlanCodes?: Maybe<Array<Maybe<PlanCode>>>;
  deletePlanDocument?: Maybe<PlanDocument>;
  deletePlanDocuments?: Maybe<Array<Maybe<PlanDocument>>>;
  deletePlanDraft?: Maybe<PlanDraft>;
  deletePlanDrafts?: Maybe<Array<Maybe<PlanDraft>>>;
  deletePlanVersion?: Maybe<PlanVersion>;
  deletePlanVersions?: Maybe<Array<Maybe<PlanVersion>>>;
  deletePlans?: Maybe<Array<Maybe<Plan>>>;
  deleteProposition?: Maybe<Proposition>;
  deletePropositions?: Maybe<Array<Maybe<Proposition>>>;
  deletePublicNotice?: Maybe<PublicNotice>;
  deletePublicNoticeDraft?: Maybe<PublicNoticeDraft>;
  deletePublicNoticeDrafts?: Maybe<Array<Maybe<PublicNoticeDraft>>>;
  deletePublicNoticeVersion?: Maybe<PublicNoticeVersion>;
  deletePublicNoticeVersions?: Maybe<Array<Maybe<PublicNoticeVersion>>>;
  deletePublicNotices?: Maybe<Array<Maybe<PublicNotice>>>;
  deleteRedirect?: Maybe<Redirect>;
  deleteRedirects?: Maybe<Array<Maybe<Redirect>>>;
  deleteService?: Maybe<Service>;
  deleteServiceDraft?: Maybe<ServiceDraft>;
  deleteServiceDrafts?: Maybe<Array<Maybe<ServiceDraft>>>;
  deleteServiceVersion?: Maybe<ServiceVersion>;
  deleteServiceVersions?: Maybe<Array<Maybe<ServiceVersion>>>;
  deleteServices?: Maybe<Array<Maybe<Service>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteTopic?: Maybe<Topic>;
  deleteTopicDraft?: Maybe<TopicDraft>;
  deleteTopicDrafts?: Maybe<Array<Maybe<TopicDraft>>>;
  deleteTopicVersion?: Maybe<TopicVersion>;
  deleteTopicVersions?: Maybe<Array<Maybe<TopicVersion>>>;
  deleteTopics?: Maybe<Array<Maybe<Topic>>>;
  deleteTrail?: Maybe<Trail>;
  deleteTrailDraft?: Maybe<TrailDraft>;
  deleteTrailDrafts?: Maybe<Array<Maybe<TrailDraft>>>;
  deleteTrailVersion?: Maybe<TrailVersion>;
  deleteTrailVersions?: Maybe<Array<Maybe<TrailVersion>>>;
  deleteTrails?: Maybe<Array<Maybe<Trail>>>;
  deleteUrl?: Maybe<Url>;
  deleteUrls?: Maybe<Array<Maybe<Url>>>;
  deleteUser?: Maybe<User>;
  deleteUserGroup?: Maybe<UserGroup>;
  deleteUserGroups?: Maybe<Array<Maybe<UserGroup>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deletefeaturedItem?: Maybe<FeaturedItem>;
  endSession: Scalars['Boolean']['output'];
  updateAlert?: Maybe<Alert>;
  updateAlerts?: Maybe<Array<Maybe<Alert>>>;
  updateAssemblyDistrict?: Maybe<AssemblyDistrict>;
  updateAssemblyDistrictDraft?: Maybe<AssemblyDistrictDraft>;
  updateAssemblyDistrictDrafts?: Maybe<Array<Maybe<AssemblyDistrictDraft>>>;
  updateAssemblyDistrictVersion?: Maybe<AssemblyDistrictVersion>;
  updateAssemblyDistrictVersions?: Maybe<Array<Maybe<AssemblyDistrictVersion>>>;
  updateAssemblyDistricts?: Maybe<Array<Maybe<AssemblyDistrict>>>;
  updateBoard?: Maybe<Board>;
  updateBoardDraft?: Maybe<BoardDraft>;
  updateBoardDrafts?: Maybe<Array<Maybe<BoardDraft>>>;
  updateBoardPage?: Maybe<BoardPage>;
  updateBoardPages?: Maybe<Array<Maybe<BoardPage>>>;
  updateBoardVersion?: Maybe<BoardVersion>;
  updateBoardVersions?: Maybe<Array<Maybe<BoardVersion>>>;
  updateBoards?: Maybe<Array<Maybe<Board>>>;
  updateCommunities?: Maybe<Array<Maybe<Community>>>;
  updateCommunity?: Maybe<Community>;
  updateCommunityDraft?: Maybe<CommunityDraft>;
  updateCommunityDrafts?: Maybe<Array<Maybe<CommunityDraft>>>;
  updateCommunityVersion?: Maybe<CommunityVersion>;
  updateCommunityVersions?: Maybe<Array<Maybe<CommunityVersion>>>;
  updateContact?: Maybe<Contact>;
  updateContactListItem?: Maybe<ContactListItem>;
  updateContactListItems?: Maybe<Array<Maybe<ContactListItem>>>;
  updateContacts?: Maybe<Array<Maybe<Contact>>>;
  updateDocument?: Maybe<Document>;
  updateDocumentCollection?: Maybe<DocumentCollection>;
  updateDocumentCollections?: Maybe<Array<Maybe<DocumentCollection>>>;
  updateDocumentListItem?: Maybe<DocumentListItem>;
  updateDocumentListItems?: Maybe<Array<Maybe<DocumentListItem>>>;
  updateDocuments?: Maybe<Array<Maybe<Document>>>;
  updateEarlyVotingLocation?: Maybe<EarlyVotingLocation>;
  updateEarlyVotingLocations?: Maybe<Array<Maybe<EarlyVotingLocation>>>;
  updateElection?: Maybe<Election>;
  updateElectionDraft?: Maybe<ElectionDraft>;
  updateElectionDrafts?: Maybe<Array<Maybe<ElectionDraft>>>;
  updateElectionResult?: Maybe<ElectionResult>;
  updateElectionResults?: Maybe<Array<Maybe<ElectionResult>>>;
  updateElectionVersion?: Maybe<ElectionVersion>;
  updateElectionVersions?: Maybe<Array<Maybe<ElectionVersion>>>;
  updateElections?: Maybe<Array<Maybe<Election>>>;
  updateElectionsPage?: Maybe<ElectionsPage>;
  updateElectionsPages?: Maybe<Array<Maybe<ElectionsPage>>>;
  updateEvent?: Maybe<Event>;
  updateEventDraft?: Maybe<EventDraft>;
  updateEventDrafts?: Maybe<Array<Maybe<EventDraft>>>;
  updateEventVersion?: Maybe<EventVersion>;
  updateEventVersions?: Maybe<Array<Maybe<EventVersion>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateExternalLink?: Maybe<ExternalLink>;
  updateExternalLinks?: Maybe<Array<Maybe<ExternalLink>>>;
  updateFacilities?: Maybe<Array<Maybe<Facility>>>;
  updateFacility?: Maybe<Facility>;
  updateFacilityDraft?: Maybe<FacilityDraft>;
  updateFacilityDrafts?: Maybe<Array<Maybe<FacilityDraft>>>;
  updateFacilityListItem?: Maybe<FacilityListItem>;
  updateFacilityListItems?: Maybe<Array<Maybe<FacilityListItem>>>;
  updateFacilityVersion?: Maybe<FacilityVersion>;
  updateFacilityVersions?: Maybe<Array<Maybe<FacilityVersion>>>;
  updateFeaturedItems?: Maybe<Array<Maybe<FeaturedItem>>>;
  updateHighlight?: Maybe<Highlight>;
  updateHighlights?: Maybe<Array<Maybe<Highlight>>>;
  updateHomePage?: Maybe<HomePage>;
  updateHomePages?: Maybe<Array<Maybe<HomePage>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateInternalLink?: Maybe<InternalLink>;
  updateInternalLinks?: Maybe<Array<Maybe<InternalLink>>>;
  updateLandingPage?: Maybe<LandingPage>;
  updateLandingPages?: Maybe<Array<Maybe<LandingPage>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  updateOperatingHour?: Maybe<OperatingHour>;
  updateOperatingHours?: Maybe<Array<Maybe<OperatingHour>>>;
  updateOrgUnit?: Maybe<OrgUnit>;
  updateOrgUnitDraft?: Maybe<OrgUnitDraft>;
  updateOrgUnitDrafts?: Maybe<Array<Maybe<OrgUnitDraft>>>;
  updateOrgUnitVersion?: Maybe<OrgUnitVersion>;
  updateOrgUnitVersions?: Maybe<Array<Maybe<OrgUnitVersion>>>;
  updateOrgUnits?: Maybe<Array<Maybe<OrgUnit>>>;
  updatePageView?: Maybe<PageView>;
  updatePageViews?: Maybe<Array<Maybe<PageView>>>;
  updatePark?: Maybe<Park>;
  updateParkDraft?: Maybe<ParkDraft>;
  updateParkDrafts?: Maybe<Array<Maybe<ParkDraft>>>;
  updateParkVersion?: Maybe<ParkVersion>;
  updateParkVersions?: Maybe<Array<Maybe<ParkVersion>>>;
  updateParks?: Maybe<Array<Maybe<Park>>>;
  updatePlan?: Maybe<Plan>;
  updatePlanCode?: Maybe<PlanCode>;
  updatePlanCodes?: Maybe<Array<Maybe<PlanCode>>>;
  updatePlanDocument?: Maybe<PlanDocument>;
  updatePlanDocuments?: Maybe<Array<Maybe<PlanDocument>>>;
  updatePlanDraft?: Maybe<PlanDraft>;
  updatePlanDrafts?: Maybe<Array<Maybe<PlanDraft>>>;
  updatePlanVersion?: Maybe<PlanVersion>;
  updatePlanVersions?: Maybe<Array<Maybe<PlanVersion>>>;
  updatePlans?: Maybe<Array<Maybe<Plan>>>;
  updateProposition?: Maybe<Proposition>;
  updatePropositions?: Maybe<Array<Maybe<Proposition>>>;
  updatePublicNotice?: Maybe<PublicNotice>;
  updatePublicNoticeDraft?: Maybe<PublicNoticeDraft>;
  updatePublicNoticeDrafts?: Maybe<Array<Maybe<PublicNoticeDraft>>>;
  updatePublicNoticeVersion?: Maybe<PublicNoticeVersion>;
  updatePublicNoticeVersions?: Maybe<Array<Maybe<PublicNoticeVersion>>>;
  updatePublicNotices?: Maybe<Array<Maybe<PublicNotice>>>;
  updateRedirect?: Maybe<Redirect>;
  updateRedirects?: Maybe<Array<Maybe<Redirect>>>;
  updateService?: Maybe<Service>;
  updateServiceDraft?: Maybe<ServiceDraft>;
  updateServiceDrafts?: Maybe<Array<Maybe<ServiceDraft>>>;
  updateServiceVersion?: Maybe<ServiceVersion>;
  updateServiceVersions?: Maybe<Array<Maybe<ServiceVersion>>>;
  updateServices?: Maybe<Array<Maybe<Service>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateTopic?: Maybe<Topic>;
  updateTopicDraft?: Maybe<TopicDraft>;
  updateTopicDrafts?: Maybe<Array<Maybe<TopicDraft>>>;
  updateTopicVersion?: Maybe<TopicVersion>;
  updateTopicVersions?: Maybe<Array<Maybe<TopicVersion>>>;
  updateTopics?: Maybe<Array<Maybe<Topic>>>;
  updateTrail?: Maybe<Trail>;
  updateTrailDraft?: Maybe<TrailDraft>;
  updateTrailDrafts?: Maybe<Array<Maybe<TrailDraft>>>;
  updateTrailVersion?: Maybe<TrailVersion>;
  updateTrailVersions?: Maybe<Array<Maybe<TrailVersion>>>;
  updateTrails?: Maybe<Array<Maybe<Trail>>>;
  updateUrl?: Maybe<Url>;
  updateUrls?: Maybe<Array<Maybe<Url>>>;
  updateUser?: Maybe<User>;
  updateUserGroup?: Maybe<UserGroup>;
  updateUserGroups?: Maybe<Array<Maybe<UserGroup>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updatefeaturedItem?: Maybe<FeaturedItem>;
};


export type MutationCreateAlertArgs = {
  data: AlertCreateInput;
};


export type MutationCreateAlertsArgs = {
  data: Array<AlertCreateInput>;
};


export type MutationCreateAssemblyDistrictArgs = {
  data: AssemblyDistrictCreateInput;
};


export type MutationCreateAssemblyDistrictDraftArgs = {
  data: AssemblyDistrictDraftCreateInput;
};


export type MutationCreateAssemblyDistrictDraftsArgs = {
  data: Array<AssemblyDistrictDraftCreateInput>;
};


export type MutationCreateAssemblyDistrictVersionArgs = {
  data: AssemblyDistrictVersionCreateInput;
};


export type MutationCreateAssemblyDistrictVersionsArgs = {
  data: Array<AssemblyDistrictVersionCreateInput>;
};


export type MutationCreateAssemblyDistrictsArgs = {
  data: Array<AssemblyDistrictCreateInput>;
};


export type MutationCreateBoardArgs = {
  data: BoardCreateInput;
};


export type MutationCreateBoardDraftArgs = {
  data: BoardDraftCreateInput;
};


export type MutationCreateBoardDraftsArgs = {
  data: Array<BoardDraftCreateInput>;
};


export type MutationCreateBoardPageArgs = {
  data: BoardPageCreateInput;
};


export type MutationCreateBoardPagesArgs = {
  data: Array<BoardPageCreateInput>;
};


export type MutationCreateBoardVersionArgs = {
  data: BoardVersionCreateInput;
};


export type MutationCreateBoardVersionsArgs = {
  data: Array<BoardVersionCreateInput>;
};


export type MutationCreateBoardsArgs = {
  data: Array<BoardCreateInput>;
};


export type MutationCreateCommunitiesArgs = {
  data: Array<CommunityCreateInput>;
};


export type MutationCreateCommunityArgs = {
  data: CommunityCreateInput;
};


export type MutationCreateCommunityDraftArgs = {
  data: CommunityDraftCreateInput;
};


export type MutationCreateCommunityDraftsArgs = {
  data: Array<CommunityDraftCreateInput>;
};


export type MutationCreateCommunityVersionArgs = {
  data: CommunityVersionCreateInput;
};


export type MutationCreateCommunityVersionsArgs = {
  data: Array<CommunityVersionCreateInput>;
};


export type MutationCreateContactArgs = {
  data: ContactCreateInput;
};


export type MutationCreateContactListItemArgs = {
  data: ContactListItemCreateInput;
};


export type MutationCreateContactListItemsArgs = {
  data: Array<ContactListItemCreateInput>;
};


export type MutationCreateContactsArgs = {
  data: Array<ContactCreateInput>;
};


export type MutationCreateDocumentArgs = {
  data: DocumentCreateInput;
};


export type MutationCreateDocumentCollectionArgs = {
  data: DocumentCollectionCreateInput;
};


export type MutationCreateDocumentCollectionsArgs = {
  data: Array<DocumentCollectionCreateInput>;
};


export type MutationCreateDocumentListItemArgs = {
  data: DocumentListItemCreateInput;
};


export type MutationCreateDocumentListItemsArgs = {
  data: Array<DocumentListItemCreateInput>;
};


export type MutationCreateDocumentsArgs = {
  data: Array<DocumentCreateInput>;
};


export type MutationCreateEarlyVotingLocationArgs = {
  data: EarlyVotingLocationCreateInput;
};


export type MutationCreateEarlyVotingLocationsArgs = {
  data: Array<EarlyVotingLocationCreateInput>;
};


export type MutationCreateElectionArgs = {
  data: ElectionCreateInput;
};


export type MutationCreateElectionDraftArgs = {
  data: ElectionDraftCreateInput;
};


export type MutationCreateElectionDraftsArgs = {
  data: Array<ElectionDraftCreateInput>;
};


export type MutationCreateElectionResultArgs = {
  data: ElectionResultCreateInput;
};


export type MutationCreateElectionResultsArgs = {
  data: Array<ElectionResultCreateInput>;
};


export type MutationCreateElectionVersionArgs = {
  data: ElectionVersionCreateInput;
};


export type MutationCreateElectionVersionsArgs = {
  data: Array<ElectionVersionCreateInput>;
};


export type MutationCreateElectionsArgs = {
  data: Array<ElectionCreateInput>;
};


export type MutationCreateElectionsPageArgs = {
  data: ElectionsPageCreateInput;
};


export type MutationCreateElectionsPagesArgs = {
  data: Array<ElectionsPageCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventDraftArgs = {
  data: EventDraftCreateInput;
};


export type MutationCreateEventDraftsArgs = {
  data: Array<EventDraftCreateInput>;
};


export type MutationCreateEventVersionArgs = {
  data: EventVersionCreateInput;
};


export type MutationCreateEventVersionsArgs = {
  data: Array<EventVersionCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateExternalLinkArgs = {
  data: ExternalLinkCreateInput;
};


export type MutationCreateExternalLinksArgs = {
  data: Array<ExternalLinkCreateInput>;
};


export type MutationCreateFacilitiesArgs = {
  data: Array<FacilityCreateInput>;
};


export type MutationCreateFacilityArgs = {
  data: FacilityCreateInput;
};


export type MutationCreateFacilityDraftArgs = {
  data: FacilityDraftCreateInput;
};


export type MutationCreateFacilityDraftsArgs = {
  data: Array<FacilityDraftCreateInput>;
};


export type MutationCreateFacilityListItemArgs = {
  data: FacilityListItemCreateInput;
};


export type MutationCreateFacilityListItemsArgs = {
  data: Array<FacilityListItemCreateInput>;
};


export type MutationCreateFacilityVersionArgs = {
  data: FacilityVersionCreateInput;
};


export type MutationCreateFacilityVersionsArgs = {
  data: Array<FacilityVersionCreateInput>;
};


export type MutationCreateFeaturedItemsArgs = {
  data: Array<FeaturedItemCreateInput>;
};


export type MutationCreateHighlightArgs = {
  data: HighlightCreateInput;
};


export type MutationCreateHighlightsArgs = {
  data: Array<HighlightCreateInput>;
};


export type MutationCreateHomePageArgs = {
  data: HomePageCreateInput;
};


export type MutationCreateHomePagesArgs = {
  data: Array<HomePageCreateInput>;
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateImagesArgs = {
  data: Array<ImageCreateInput>;
};


export type MutationCreateInternalLinkArgs = {
  data: InternalLinkCreateInput;
};


export type MutationCreateInternalLinksArgs = {
  data: Array<InternalLinkCreateInput>;
};


export type MutationCreateLandingPageArgs = {
  data: LandingPageCreateInput;
};


export type MutationCreateLandingPagesArgs = {
  data: Array<LandingPageCreateInput>;
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateLocationsArgs = {
  data: Array<LocationCreateInput>;
};


export type MutationCreateOperatingHourArgs = {
  data: OperatingHourCreateInput;
};


export type MutationCreateOperatingHoursArgs = {
  data: Array<OperatingHourCreateInput>;
};


export type MutationCreateOrgUnitArgs = {
  data: OrgUnitCreateInput;
};


export type MutationCreateOrgUnitDraftArgs = {
  data: OrgUnitDraftCreateInput;
};


export type MutationCreateOrgUnitDraftsArgs = {
  data: Array<OrgUnitDraftCreateInput>;
};


export type MutationCreateOrgUnitVersionArgs = {
  data: OrgUnitVersionCreateInput;
};


export type MutationCreateOrgUnitVersionsArgs = {
  data: Array<OrgUnitVersionCreateInput>;
};


export type MutationCreateOrgUnitsArgs = {
  data: Array<OrgUnitCreateInput>;
};


export type MutationCreatePageViewArgs = {
  data: PageViewCreateInput;
};


export type MutationCreatePageViewsArgs = {
  data: Array<PageViewCreateInput>;
};


export type MutationCreateParkArgs = {
  data: ParkCreateInput;
};


export type MutationCreateParkDraftArgs = {
  data: ParkDraftCreateInput;
};


export type MutationCreateParkDraftsArgs = {
  data: Array<ParkDraftCreateInput>;
};


export type MutationCreateParkVersionArgs = {
  data: ParkVersionCreateInput;
};


export type MutationCreateParkVersionsArgs = {
  data: Array<ParkVersionCreateInput>;
};


export type MutationCreateParksArgs = {
  data: Array<ParkCreateInput>;
};


export type MutationCreatePlanArgs = {
  data: PlanCreateInput;
};


export type MutationCreatePlanCodeArgs = {
  data: PlanCodeCreateInput;
};


export type MutationCreatePlanCodesArgs = {
  data: Array<PlanCodeCreateInput>;
};


export type MutationCreatePlanDocumentArgs = {
  data: PlanDocumentCreateInput;
};


export type MutationCreatePlanDocumentsArgs = {
  data: Array<PlanDocumentCreateInput>;
};


export type MutationCreatePlanDraftArgs = {
  data: PlanDraftCreateInput;
};


export type MutationCreatePlanDraftsArgs = {
  data: Array<PlanDraftCreateInput>;
};


export type MutationCreatePlanVersionArgs = {
  data: PlanVersionCreateInput;
};


export type MutationCreatePlanVersionsArgs = {
  data: Array<PlanVersionCreateInput>;
};


export type MutationCreatePlansArgs = {
  data: Array<PlanCreateInput>;
};


export type MutationCreatePropositionArgs = {
  data: PropositionCreateInput;
};


export type MutationCreatePropositionsArgs = {
  data: Array<PropositionCreateInput>;
};


export type MutationCreatePublicNoticeArgs = {
  data: PublicNoticeCreateInput;
};


export type MutationCreatePublicNoticeDraftArgs = {
  data: PublicNoticeDraftCreateInput;
};


export type MutationCreatePublicNoticeDraftsArgs = {
  data: Array<PublicNoticeDraftCreateInput>;
};


export type MutationCreatePublicNoticeVersionArgs = {
  data: PublicNoticeVersionCreateInput;
};


export type MutationCreatePublicNoticeVersionsArgs = {
  data: Array<PublicNoticeVersionCreateInput>;
};


export type MutationCreatePublicNoticesArgs = {
  data: Array<PublicNoticeCreateInput>;
};


export type MutationCreateRedirectArgs = {
  data: RedirectCreateInput;
};


export type MutationCreateRedirectsArgs = {
  data: Array<RedirectCreateInput>;
};


export type MutationCreateServiceArgs = {
  data: ServiceCreateInput;
};


export type MutationCreateServiceDraftArgs = {
  data: ServiceDraftCreateInput;
};


export type MutationCreateServiceDraftsArgs = {
  data: Array<ServiceDraftCreateInput>;
};


export type MutationCreateServiceVersionArgs = {
  data: ServiceVersionCreateInput;
};


export type MutationCreateServiceVersionsArgs = {
  data: Array<ServiceVersionCreateInput>;
};


export type MutationCreateServicesArgs = {
  data: Array<ServiceCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateTopicArgs = {
  data: TopicCreateInput;
};


export type MutationCreateTopicDraftArgs = {
  data: TopicDraftCreateInput;
};


export type MutationCreateTopicDraftsArgs = {
  data: Array<TopicDraftCreateInput>;
};


export type MutationCreateTopicVersionArgs = {
  data: TopicVersionCreateInput;
};


export type MutationCreateTopicVersionsArgs = {
  data: Array<TopicVersionCreateInput>;
};


export type MutationCreateTopicsArgs = {
  data: Array<TopicCreateInput>;
};


export type MutationCreateTrailArgs = {
  data: TrailCreateInput;
};


export type MutationCreateTrailDraftArgs = {
  data: TrailDraftCreateInput;
};


export type MutationCreateTrailDraftsArgs = {
  data: Array<TrailDraftCreateInput>;
};


export type MutationCreateTrailVersionArgs = {
  data: TrailVersionCreateInput;
};


export type MutationCreateTrailVersionsArgs = {
  data: Array<TrailVersionCreateInput>;
};


export type MutationCreateTrailsArgs = {
  data: Array<TrailCreateInput>;
};


export type MutationCreateUrlArgs = {
  data: UrlCreateInput;
};


export type MutationCreateUrlsArgs = {
  data: Array<UrlCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserGroupArgs = {
  data: UserGroupCreateInput;
};


export type MutationCreateUserGroupsArgs = {
  data: Array<UserGroupCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreatefeaturedItemArgs = {
  data: FeaturedItemCreateInput;
};


export type MutationDeleteAlertArgs = {
  where: AlertWhereUniqueInput;
};


export type MutationDeleteAlertsArgs = {
  where: Array<AlertWhereUniqueInput>;
};


export type MutationDeleteAssemblyDistrictArgs = {
  where: AssemblyDistrictWhereUniqueInput;
};


export type MutationDeleteAssemblyDistrictDraftArgs = {
  where: AssemblyDistrictDraftWhereUniqueInput;
};


export type MutationDeleteAssemblyDistrictDraftsArgs = {
  where: Array<AssemblyDistrictDraftWhereUniqueInput>;
};


export type MutationDeleteAssemblyDistrictVersionArgs = {
  where: AssemblyDistrictVersionWhereUniqueInput;
};


export type MutationDeleteAssemblyDistrictVersionsArgs = {
  where: Array<AssemblyDistrictVersionWhereUniqueInput>;
};


export type MutationDeleteAssemblyDistrictsArgs = {
  where: Array<AssemblyDistrictWhereUniqueInput>;
};


export type MutationDeleteBoardArgs = {
  where: BoardWhereUniqueInput;
};


export type MutationDeleteBoardDraftArgs = {
  where: BoardDraftWhereUniqueInput;
};


export type MutationDeleteBoardDraftsArgs = {
  where: Array<BoardDraftWhereUniqueInput>;
};


export type MutationDeleteBoardPageArgs = {
  where?: BoardPageWhereUniqueInput;
};


export type MutationDeleteBoardPagesArgs = {
  where: Array<BoardPageWhereUniqueInput>;
};


export type MutationDeleteBoardVersionArgs = {
  where: BoardVersionWhereUniqueInput;
};


export type MutationDeleteBoardVersionsArgs = {
  where: Array<BoardVersionWhereUniqueInput>;
};


export type MutationDeleteBoardsArgs = {
  where: Array<BoardWhereUniqueInput>;
};


export type MutationDeleteCommunitiesArgs = {
  where: Array<CommunityWhereUniqueInput>;
};


export type MutationDeleteCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type MutationDeleteCommunityDraftArgs = {
  where: CommunityDraftWhereUniqueInput;
};


export type MutationDeleteCommunityDraftsArgs = {
  where: Array<CommunityDraftWhereUniqueInput>;
};


export type MutationDeleteCommunityVersionArgs = {
  where: CommunityVersionWhereUniqueInput;
};


export type MutationDeleteCommunityVersionsArgs = {
  where: Array<CommunityVersionWhereUniqueInput>;
};


export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput;
};


export type MutationDeleteContactListItemArgs = {
  where: ContactListItemWhereUniqueInput;
};


export type MutationDeleteContactListItemsArgs = {
  where: Array<ContactListItemWhereUniqueInput>;
};


export type MutationDeleteContactsArgs = {
  where: Array<ContactWhereUniqueInput>;
};


export type MutationDeleteDocumentArgs = {
  where: DocumentWhereUniqueInput;
};


export type MutationDeleteDocumentCollectionArgs = {
  where: DocumentCollectionWhereUniqueInput;
};


export type MutationDeleteDocumentCollectionsArgs = {
  where: Array<DocumentCollectionWhereUniqueInput>;
};


export type MutationDeleteDocumentListItemArgs = {
  where: DocumentListItemWhereUniqueInput;
};


export type MutationDeleteDocumentListItemsArgs = {
  where: Array<DocumentListItemWhereUniqueInput>;
};


export type MutationDeleteDocumentsArgs = {
  where: Array<DocumentWhereUniqueInput>;
};


export type MutationDeleteEarlyVotingLocationArgs = {
  where: EarlyVotingLocationWhereUniqueInput;
};


export type MutationDeleteEarlyVotingLocationsArgs = {
  where: Array<EarlyVotingLocationWhereUniqueInput>;
};


export type MutationDeleteElectionArgs = {
  where: ElectionWhereUniqueInput;
};


export type MutationDeleteElectionDraftArgs = {
  where: ElectionDraftWhereUniqueInput;
};


export type MutationDeleteElectionDraftsArgs = {
  where: Array<ElectionDraftWhereUniqueInput>;
};


export type MutationDeleteElectionResultArgs = {
  where: ElectionResultWhereUniqueInput;
};


export type MutationDeleteElectionResultsArgs = {
  where: Array<ElectionResultWhereUniqueInput>;
};


export type MutationDeleteElectionVersionArgs = {
  where: ElectionVersionWhereUniqueInput;
};


export type MutationDeleteElectionVersionsArgs = {
  where: Array<ElectionVersionWhereUniqueInput>;
};


export type MutationDeleteElectionsArgs = {
  where: Array<ElectionWhereUniqueInput>;
};


export type MutationDeleteElectionsPageArgs = {
  where?: ElectionsPageWhereUniqueInput;
};


export type MutationDeleteElectionsPagesArgs = {
  where: Array<ElectionsPageWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventDraftArgs = {
  where: EventDraftWhereUniqueInput;
};


export type MutationDeleteEventDraftsArgs = {
  where: Array<EventDraftWhereUniqueInput>;
};


export type MutationDeleteEventVersionArgs = {
  where: EventVersionWhereUniqueInput;
};


export type MutationDeleteEventVersionsArgs = {
  where: Array<EventVersionWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
};


export type MutationDeleteExternalLinksArgs = {
  where: Array<ExternalLinkWhereUniqueInput>;
};


export type MutationDeleteFacilitiesArgs = {
  where: Array<FacilityWhereUniqueInput>;
};


export type MutationDeleteFacilityArgs = {
  where: FacilityWhereUniqueInput;
};


export type MutationDeleteFacilityDraftArgs = {
  where: FacilityDraftWhereUniqueInput;
};


export type MutationDeleteFacilityDraftsArgs = {
  where: Array<FacilityDraftWhereUniqueInput>;
};


export type MutationDeleteFacilityListItemArgs = {
  where: FacilityListItemWhereUniqueInput;
};


export type MutationDeleteFacilityListItemsArgs = {
  where: Array<FacilityListItemWhereUniqueInput>;
};


export type MutationDeleteFacilityVersionArgs = {
  where: FacilityVersionWhereUniqueInput;
};


export type MutationDeleteFacilityVersionsArgs = {
  where: Array<FacilityVersionWhereUniqueInput>;
};


export type MutationDeleteFeaturedItemsArgs = {
  where: Array<FeaturedItemWhereUniqueInput>;
};


export type MutationDeleteHighlightArgs = {
  where: HighlightWhereUniqueInput;
};


export type MutationDeleteHighlightsArgs = {
  where: Array<HighlightWhereUniqueInput>;
};


export type MutationDeleteHomePageArgs = {
  where?: HomePageWhereUniqueInput;
};


export type MutationDeleteHomePagesArgs = {
  where: Array<HomePageWhereUniqueInput>;
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteImagesArgs = {
  where: Array<ImageWhereUniqueInput>;
};


export type MutationDeleteInternalLinkArgs = {
  where: InternalLinkWhereUniqueInput;
};


export type MutationDeleteInternalLinksArgs = {
  where: Array<InternalLinkWhereUniqueInput>;
};


export type MutationDeleteLandingPageArgs = {
  where: LandingPageWhereUniqueInput;
};


export type MutationDeleteLandingPagesArgs = {
  where: Array<LandingPageWhereUniqueInput>;
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeleteLocationsArgs = {
  where: Array<LocationWhereUniqueInput>;
};


export type MutationDeleteOperatingHourArgs = {
  where: OperatingHourWhereUniqueInput;
};


export type MutationDeleteOperatingHoursArgs = {
  where: Array<OperatingHourWhereUniqueInput>;
};


export type MutationDeleteOrgUnitArgs = {
  where: OrgUnitWhereUniqueInput;
};


export type MutationDeleteOrgUnitDraftArgs = {
  where: OrgUnitDraftWhereUniqueInput;
};


export type MutationDeleteOrgUnitDraftsArgs = {
  where: Array<OrgUnitDraftWhereUniqueInput>;
};


export type MutationDeleteOrgUnitVersionArgs = {
  where: OrgUnitVersionWhereUniqueInput;
};


export type MutationDeleteOrgUnitVersionsArgs = {
  where: Array<OrgUnitVersionWhereUniqueInput>;
};


export type MutationDeleteOrgUnitsArgs = {
  where: Array<OrgUnitWhereUniqueInput>;
};


export type MutationDeletePageViewArgs = {
  where: PageViewWhereUniqueInput;
};


export type MutationDeletePageViewsArgs = {
  where: Array<PageViewWhereUniqueInput>;
};


export type MutationDeleteParkArgs = {
  where: ParkWhereUniqueInput;
};


export type MutationDeleteParkDraftArgs = {
  where: ParkDraftWhereUniqueInput;
};


export type MutationDeleteParkDraftsArgs = {
  where: Array<ParkDraftWhereUniqueInput>;
};


export type MutationDeleteParkVersionArgs = {
  where: ParkVersionWhereUniqueInput;
};


export type MutationDeleteParkVersionsArgs = {
  where: Array<ParkVersionWhereUniqueInput>;
};


export type MutationDeleteParksArgs = {
  where: Array<ParkWhereUniqueInput>;
};


export type MutationDeletePlanArgs = {
  where: PlanWhereUniqueInput;
};


export type MutationDeletePlanCodeArgs = {
  where: PlanCodeWhereUniqueInput;
};


export type MutationDeletePlanCodesArgs = {
  where: Array<PlanCodeWhereUniqueInput>;
};


export type MutationDeletePlanDocumentArgs = {
  where: PlanDocumentWhereUniqueInput;
};


export type MutationDeletePlanDocumentsArgs = {
  where: Array<PlanDocumentWhereUniqueInput>;
};


export type MutationDeletePlanDraftArgs = {
  where: PlanDraftWhereUniqueInput;
};


export type MutationDeletePlanDraftsArgs = {
  where: Array<PlanDraftWhereUniqueInput>;
};


export type MutationDeletePlanVersionArgs = {
  where: PlanVersionWhereUniqueInput;
};


export type MutationDeletePlanVersionsArgs = {
  where: Array<PlanVersionWhereUniqueInput>;
};


export type MutationDeletePlansArgs = {
  where: Array<PlanWhereUniqueInput>;
};


export type MutationDeletePropositionArgs = {
  where: PropositionWhereUniqueInput;
};


export type MutationDeletePropositionsArgs = {
  where: Array<PropositionWhereUniqueInput>;
};


export type MutationDeletePublicNoticeArgs = {
  where: PublicNoticeWhereUniqueInput;
};


export type MutationDeletePublicNoticeDraftArgs = {
  where: PublicNoticeDraftWhereUniqueInput;
};


export type MutationDeletePublicNoticeDraftsArgs = {
  where: Array<PublicNoticeDraftWhereUniqueInput>;
};


export type MutationDeletePublicNoticeVersionArgs = {
  where: PublicNoticeVersionWhereUniqueInput;
};


export type MutationDeletePublicNoticeVersionsArgs = {
  where: Array<PublicNoticeVersionWhereUniqueInput>;
};


export type MutationDeletePublicNoticesArgs = {
  where: Array<PublicNoticeWhereUniqueInput>;
};


export type MutationDeleteRedirectArgs = {
  where: RedirectWhereUniqueInput;
};


export type MutationDeleteRedirectsArgs = {
  where: Array<RedirectWhereUniqueInput>;
};


export type MutationDeleteServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type MutationDeleteServiceDraftArgs = {
  where: ServiceDraftWhereUniqueInput;
};


export type MutationDeleteServiceDraftsArgs = {
  where: Array<ServiceDraftWhereUniqueInput>;
};


export type MutationDeleteServiceVersionArgs = {
  where: ServiceVersionWhereUniqueInput;
};


export type MutationDeleteServiceVersionsArgs = {
  where: Array<ServiceVersionWhereUniqueInput>;
};


export type MutationDeleteServicesArgs = {
  where: Array<ServiceWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type MutationDeleteTopicDraftArgs = {
  where: TopicDraftWhereUniqueInput;
};


export type MutationDeleteTopicDraftsArgs = {
  where: Array<TopicDraftWhereUniqueInput>;
};


export type MutationDeleteTopicVersionArgs = {
  where: TopicVersionWhereUniqueInput;
};


export type MutationDeleteTopicVersionsArgs = {
  where: Array<TopicVersionWhereUniqueInput>;
};


export type MutationDeleteTopicsArgs = {
  where: Array<TopicWhereUniqueInput>;
};


export type MutationDeleteTrailArgs = {
  where: TrailWhereUniqueInput;
};


export type MutationDeleteTrailDraftArgs = {
  where: TrailDraftWhereUniqueInput;
};


export type MutationDeleteTrailDraftsArgs = {
  where: Array<TrailDraftWhereUniqueInput>;
};


export type MutationDeleteTrailVersionArgs = {
  where: TrailVersionWhereUniqueInput;
};


export type MutationDeleteTrailVersionsArgs = {
  where: Array<TrailVersionWhereUniqueInput>;
};


export type MutationDeleteTrailsArgs = {
  where: Array<TrailWhereUniqueInput>;
};


export type MutationDeleteUrlArgs = {
  where: UrlWhereUniqueInput;
};


export type MutationDeleteUrlsArgs = {
  where: Array<UrlWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserGroupArgs = {
  where: UserGroupWhereUniqueInput;
};


export type MutationDeleteUserGroupsArgs = {
  where: Array<UserGroupWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeletefeaturedItemArgs = {
  where: FeaturedItemWhereUniqueInput;
};


export type MutationUpdateAlertArgs = {
  data: AlertUpdateInput;
  where: AlertWhereUniqueInput;
};


export type MutationUpdateAlertsArgs = {
  data: Array<AlertUpdateArgs>;
};


export type MutationUpdateAssemblyDistrictArgs = {
  data: AssemblyDistrictUpdateInput;
  where: AssemblyDistrictWhereUniqueInput;
};


export type MutationUpdateAssemblyDistrictDraftArgs = {
  data: AssemblyDistrictDraftUpdateInput;
  where: AssemblyDistrictDraftWhereUniqueInput;
};


export type MutationUpdateAssemblyDistrictDraftsArgs = {
  data: Array<AssemblyDistrictDraftUpdateArgs>;
};


export type MutationUpdateAssemblyDistrictVersionArgs = {
  data: AssemblyDistrictVersionUpdateInput;
  where: AssemblyDistrictVersionWhereUniqueInput;
};


export type MutationUpdateAssemblyDistrictVersionsArgs = {
  data: Array<AssemblyDistrictVersionUpdateArgs>;
};


export type MutationUpdateAssemblyDistrictsArgs = {
  data: Array<AssemblyDistrictUpdateArgs>;
};


export type MutationUpdateBoardArgs = {
  data: BoardUpdateInput;
  where: BoardWhereUniqueInput;
};


export type MutationUpdateBoardDraftArgs = {
  data: BoardDraftUpdateInput;
  where: BoardDraftWhereUniqueInput;
};


export type MutationUpdateBoardDraftsArgs = {
  data: Array<BoardDraftUpdateArgs>;
};


export type MutationUpdateBoardPageArgs = {
  data: BoardPageUpdateInput;
  where?: BoardPageWhereUniqueInput;
};


export type MutationUpdateBoardPagesArgs = {
  data: Array<BoardPageUpdateArgs>;
};


export type MutationUpdateBoardVersionArgs = {
  data: BoardVersionUpdateInput;
  where: BoardVersionWhereUniqueInput;
};


export type MutationUpdateBoardVersionsArgs = {
  data: Array<BoardVersionUpdateArgs>;
};


export type MutationUpdateBoardsArgs = {
  data: Array<BoardUpdateArgs>;
};


export type MutationUpdateCommunitiesArgs = {
  data: Array<CommunityUpdateArgs>;
};


export type MutationUpdateCommunityArgs = {
  data: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};


export type MutationUpdateCommunityDraftArgs = {
  data: CommunityDraftUpdateInput;
  where: CommunityDraftWhereUniqueInput;
};


export type MutationUpdateCommunityDraftsArgs = {
  data: Array<CommunityDraftUpdateArgs>;
};


export type MutationUpdateCommunityVersionArgs = {
  data: CommunityVersionUpdateInput;
  where: CommunityVersionWhereUniqueInput;
};


export type MutationUpdateCommunityVersionsArgs = {
  data: Array<CommunityVersionUpdateArgs>;
};


export type MutationUpdateContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpdateContactListItemArgs = {
  data: ContactListItemUpdateInput;
  where: ContactListItemWhereUniqueInput;
};


export type MutationUpdateContactListItemsArgs = {
  data: Array<ContactListItemUpdateArgs>;
};


export type MutationUpdateContactsArgs = {
  data: Array<ContactUpdateArgs>;
};


export type MutationUpdateDocumentArgs = {
  data: DocumentUpdateInput;
  where: DocumentWhereUniqueInput;
};


export type MutationUpdateDocumentCollectionArgs = {
  data: DocumentCollectionUpdateInput;
  where: DocumentCollectionWhereUniqueInput;
};


export type MutationUpdateDocumentCollectionsArgs = {
  data: Array<DocumentCollectionUpdateArgs>;
};


export type MutationUpdateDocumentListItemArgs = {
  data: DocumentListItemUpdateInput;
  where: DocumentListItemWhereUniqueInput;
};


export type MutationUpdateDocumentListItemsArgs = {
  data: Array<DocumentListItemUpdateArgs>;
};


export type MutationUpdateDocumentsArgs = {
  data: Array<DocumentUpdateArgs>;
};


export type MutationUpdateEarlyVotingLocationArgs = {
  data: EarlyVotingLocationUpdateInput;
  where: EarlyVotingLocationWhereUniqueInput;
};


export type MutationUpdateEarlyVotingLocationsArgs = {
  data: Array<EarlyVotingLocationUpdateArgs>;
};


export type MutationUpdateElectionArgs = {
  data: ElectionUpdateInput;
  where: ElectionWhereUniqueInput;
};


export type MutationUpdateElectionDraftArgs = {
  data: ElectionDraftUpdateInput;
  where: ElectionDraftWhereUniqueInput;
};


export type MutationUpdateElectionDraftsArgs = {
  data: Array<ElectionDraftUpdateArgs>;
};


export type MutationUpdateElectionResultArgs = {
  data: ElectionResultUpdateInput;
  where: ElectionResultWhereUniqueInput;
};


export type MutationUpdateElectionResultsArgs = {
  data: Array<ElectionResultUpdateArgs>;
};


export type MutationUpdateElectionVersionArgs = {
  data: ElectionVersionUpdateInput;
  where: ElectionVersionWhereUniqueInput;
};


export type MutationUpdateElectionVersionsArgs = {
  data: Array<ElectionVersionUpdateArgs>;
};


export type MutationUpdateElectionsArgs = {
  data: Array<ElectionUpdateArgs>;
};


export type MutationUpdateElectionsPageArgs = {
  data: ElectionsPageUpdateInput;
  where?: ElectionsPageWhereUniqueInput;
};


export type MutationUpdateElectionsPagesArgs = {
  data: Array<ElectionsPageUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventDraftArgs = {
  data: EventDraftUpdateInput;
  where: EventDraftWhereUniqueInput;
};


export type MutationUpdateEventDraftsArgs = {
  data: Array<EventDraftUpdateArgs>;
};


export type MutationUpdateEventVersionArgs = {
  data: EventVersionUpdateInput;
  where: EventVersionWhereUniqueInput;
};


export type MutationUpdateEventVersionsArgs = {
  data: Array<EventVersionUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateExternalLinkArgs = {
  data: ExternalLinkUpdateInput;
  where: ExternalLinkWhereUniqueInput;
};


export type MutationUpdateExternalLinksArgs = {
  data: Array<ExternalLinkUpdateArgs>;
};


export type MutationUpdateFacilitiesArgs = {
  data: Array<FacilityUpdateArgs>;
};


export type MutationUpdateFacilityArgs = {
  data: FacilityUpdateInput;
  where: FacilityWhereUniqueInput;
};


export type MutationUpdateFacilityDraftArgs = {
  data: FacilityDraftUpdateInput;
  where: FacilityDraftWhereUniqueInput;
};


export type MutationUpdateFacilityDraftsArgs = {
  data: Array<FacilityDraftUpdateArgs>;
};


export type MutationUpdateFacilityListItemArgs = {
  data: FacilityListItemUpdateInput;
  where: FacilityListItemWhereUniqueInput;
};


export type MutationUpdateFacilityListItemsArgs = {
  data: Array<FacilityListItemUpdateArgs>;
};


export type MutationUpdateFacilityVersionArgs = {
  data: FacilityVersionUpdateInput;
  where: FacilityVersionWhereUniqueInput;
};


export type MutationUpdateFacilityVersionsArgs = {
  data: Array<FacilityVersionUpdateArgs>;
};


export type MutationUpdateFeaturedItemsArgs = {
  data: Array<FeaturedItemUpdateArgs>;
};


export type MutationUpdateHighlightArgs = {
  data: HighlightUpdateInput;
  where: HighlightWhereUniqueInput;
};


export type MutationUpdateHighlightsArgs = {
  data: Array<HighlightUpdateArgs>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageUpdateInput;
  where?: HomePageWhereUniqueInput;
};


export type MutationUpdateHomePagesArgs = {
  data: Array<HomePageUpdateArgs>;
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateImagesArgs = {
  data: Array<ImageUpdateArgs>;
};


export type MutationUpdateInternalLinkArgs = {
  data: InternalLinkUpdateInput;
  where: InternalLinkWhereUniqueInput;
};


export type MutationUpdateInternalLinksArgs = {
  data: Array<InternalLinkUpdateArgs>;
};


export type MutationUpdateLandingPageArgs = {
  data: LandingPageUpdateInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpdateLandingPagesArgs = {
  data: Array<LandingPageUpdateArgs>;
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateLocationsArgs = {
  data: Array<LocationUpdateArgs>;
};


export type MutationUpdateOperatingHourArgs = {
  data: OperatingHourUpdateInput;
  where: OperatingHourWhereUniqueInput;
};


export type MutationUpdateOperatingHoursArgs = {
  data: Array<OperatingHourUpdateArgs>;
};


export type MutationUpdateOrgUnitArgs = {
  data: OrgUnitUpdateInput;
  where: OrgUnitWhereUniqueInput;
};


export type MutationUpdateOrgUnitDraftArgs = {
  data: OrgUnitDraftUpdateInput;
  where: OrgUnitDraftWhereUniqueInput;
};


export type MutationUpdateOrgUnitDraftsArgs = {
  data: Array<OrgUnitDraftUpdateArgs>;
};


export type MutationUpdateOrgUnitVersionArgs = {
  data: OrgUnitVersionUpdateInput;
  where: OrgUnitVersionWhereUniqueInput;
};


export type MutationUpdateOrgUnitVersionsArgs = {
  data: Array<OrgUnitVersionUpdateArgs>;
};


export type MutationUpdateOrgUnitsArgs = {
  data: Array<OrgUnitUpdateArgs>;
};


export type MutationUpdatePageViewArgs = {
  data: PageViewUpdateInput;
  where: PageViewWhereUniqueInput;
};


export type MutationUpdatePageViewsArgs = {
  data: Array<PageViewUpdateArgs>;
};


export type MutationUpdateParkArgs = {
  data: ParkUpdateInput;
  where: ParkWhereUniqueInput;
};


export type MutationUpdateParkDraftArgs = {
  data: ParkDraftUpdateInput;
  where: ParkDraftWhereUniqueInput;
};


export type MutationUpdateParkDraftsArgs = {
  data: Array<ParkDraftUpdateArgs>;
};


export type MutationUpdateParkVersionArgs = {
  data: ParkVersionUpdateInput;
  where: ParkVersionWhereUniqueInput;
};


export type MutationUpdateParkVersionsArgs = {
  data: Array<ParkVersionUpdateArgs>;
};


export type MutationUpdateParksArgs = {
  data: Array<ParkUpdateArgs>;
};


export type MutationUpdatePlanArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};


export type MutationUpdatePlanCodeArgs = {
  data: PlanCodeUpdateInput;
  where: PlanCodeWhereUniqueInput;
};


export type MutationUpdatePlanCodesArgs = {
  data: Array<PlanCodeUpdateArgs>;
};


export type MutationUpdatePlanDocumentArgs = {
  data: PlanDocumentUpdateInput;
  where: PlanDocumentWhereUniqueInput;
};


export type MutationUpdatePlanDocumentsArgs = {
  data: Array<PlanDocumentUpdateArgs>;
};


export type MutationUpdatePlanDraftArgs = {
  data: PlanDraftUpdateInput;
  where: PlanDraftWhereUniqueInput;
};


export type MutationUpdatePlanDraftsArgs = {
  data: Array<PlanDraftUpdateArgs>;
};


export type MutationUpdatePlanVersionArgs = {
  data: PlanVersionUpdateInput;
  where: PlanVersionWhereUniqueInput;
};


export type MutationUpdatePlanVersionsArgs = {
  data: Array<PlanVersionUpdateArgs>;
};


export type MutationUpdatePlansArgs = {
  data: Array<PlanUpdateArgs>;
};


export type MutationUpdatePropositionArgs = {
  data: PropositionUpdateInput;
  where: PropositionWhereUniqueInput;
};


export type MutationUpdatePropositionsArgs = {
  data: Array<PropositionUpdateArgs>;
};


export type MutationUpdatePublicNoticeArgs = {
  data: PublicNoticeUpdateInput;
  where: PublicNoticeWhereUniqueInput;
};


export type MutationUpdatePublicNoticeDraftArgs = {
  data: PublicNoticeDraftUpdateInput;
  where: PublicNoticeDraftWhereUniqueInput;
};


export type MutationUpdatePublicNoticeDraftsArgs = {
  data: Array<PublicNoticeDraftUpdateArgs>;
};


export type MutationUpdatePublicNoticeVersionArgs = {
  data: PublicNoticeVersionUpdateInput;
  where: PublicNoticeVersionWhereUniqueInput;
};


export type MutationUpdatePublicNoticeVersionsArgs = {
  data: Array<PublicNoticeVersionUpdateArgs>;
};


export type MutationUpdatePublicNoticesArgs = {
  data: Array<PublicNoticeUpdateArgs>;
};


export type MutationUpdateRedirectArgs = {
  data: RedirectUpdateInput;
  where: RedirectWhereUniqueInput;
};


export type MutationUpdateRedirectsArgs = {
  data: Array<RedirectUpdateArgs>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpdateServiceDraftArgs = {
  data: ServiceDraftUpdateInput;
  where: ServiceDraftWhereUniqueInput;
};


export type MutationUpdateServiceDraftsArgs = {
  data: Array<ServiceDraftUpdateArgs>;
};


export type MutationUpdateServiceVersionArgs = {
  data: ServiceVersionUpdateInput;
  where: ServiceVersionWhereUniqueInput;
};


export type MutationUpdateServiceVersionsArgs = {
  data: Array<ServiceVersionUpdateArgs>;
};


export type MutationUpdateServicesArgs = {
  data: Array<ServiceUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateTopicArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpdateTopicDraftArgs = {
  data: TopicDraftUpdateInput;
  where: TopicDraftWhereUniqueInput;
};


export type MutationUpdateTopicDraftsArgs = {
  data: Array<TopicDraftUpdateArgs>;
};


export type MutationUpdateTopicVersionArgs = {
  data: TopicVersionUpdateInput;
  where: TopicVersionWhereUniqueInput;
};


export type MutationUpdateTopicVersionsArgs = {
  data: Array<TopicVersionUpdateArgs>;
};


export type MutationUpdateTopicsArgs = {
  data: Array<TopicUpdateArgs>;
};


export type MutationUpdateTrailArgs = {
  data: TrailUpdateInput;
  where: TrailWhereUniqueInput;
};


export type MutationUpdateTrailDraftArgs = {
  data: TrailDraftUpdateInput;
  where: TrailDraftWhereUniqueInput;
};


export type MutationUpdateTrailDraftsArgs = {
  data: Array<TrailDraftUpdateArgs>;
};


export type MutationUpdateTrailVersionArgs = {
  data: TrailVersionUpdateInput;
  where: TrailVersionWhereUniqueInput;
};


export type MutationUpdateTrailVersionsArgs = {
  data: Array<TrailVersionUpdateArgs>;
};


export type MutationUpdateTrailsArgs = {
  data: Array<TrailUpdateArgs>;
};


export type MutationUpdateUrlArgs = {
  data: UrlUpdateInput;
  where: UrlWhereUniqueInput;
};


export type MutationUpdateUrlsArgs = {
  data: Array<UrlUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserGroupArgs = {
  data: UserGroupUpdateInput;
  where: UserGroupWhereUniqueInput;
};


export type MutationUpdateUserGroupsArgs = {
  data: Array<UserGroupUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdatefeaturedItemArgs = {
  data: FeaturedItemUpdateInput;
  where: FeaturedItemWhereUniqueInput;
};

export enum MyOrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum MyQueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type MyStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<MyQueryMode>;
  not?: InputMaybe<NestedMyStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedMyStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedMyStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type OperatingHour = {
  __typename?: 'OperatingHour';
  close?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  open?: Maybe<Scalars['String']['output']>;
};

export type OperatingHourCreateInput = {
  close?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  open?: InputMaybe<Scalars['String']['input']>;
};

export type OperatingHourManyRelationFilter = {
  every?: InputMaybe<OperatingHourWhereInput>;
  none?: InputMaybe<OperatingHourWhereInput>;
  some?: InputMaybe<OperatingHourWhereInput>;
};

export type OperatingHourOrderByInput = {
  close?: InputMaybe<OrderDirection>;
  day?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  open?: InputMaybe<OrderDirection>;
};

export type OperatingHourRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OperatingHourWhereUniqueInput>>;
  create?: InputMaybe<Array<OperatingHourCreateInput>>;
};

export type OperatingHourRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OperatingHourWhereUniqueInput>>;
  create?: InputMaybe<Array<OperatingHourCreateInput>>;
  disconnect?: InputMaybe<Array<OperatingHourWhereUniqueInput>>;
  set?: InputMaybe<Array<OperatingHourWhereUniqueInput>>;
};

export type OperatingHourUpdateArgs = {
  data: OperatingHourUpdateInput;
  where: OperatingHourWhereUniqueInput;
};

export type OperatingHourUpdateInput = {
  close?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  open?: InputMaybe<Scalars['String']['input']>;
};

export type OperatingHourWhereInput = {
  AND?: InputMaybe<Array<OperatingHourWhereInput>>;
  NOT?: InputMaybe<Array<OperatingHourWhereInput>>;
  OR?: InputMaybe<Array<OperatingHourWhereInput>>;
  close?: InputMaybe<StringFilter>;
  day?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  open?: InputMaybe<StringFilter>;
};

export type OperatingHourWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrgUnit = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'OrgUnit';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<OrgUnit>>;
  childrenCount?: Maybe<Scalars['Int']['output']>;
  childrenLabel?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<OrgUnitVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<OrgUnitDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parent?: Maybe<OrgUnit>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  showPage?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<OrgUnitVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type OrgUnitActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type OrgUnitActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type OrgUnitAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type OrgUnitAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type OrgUnitBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type OrgUnitBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type OrgUnitChildrenArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type OrgUnitChildrenCountArgs = {
  where?: OrgUnitWhereInput;
};


export type OrgUnitCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type OrgUnitCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type OrgUnitContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type OrgUnitContactsCountArgs = {
  where?: ContactWhereInput;
};


export type OrgUnitDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type OrgUnitDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type OrgUnitDraftsArgs = {
  cursor?: InputMaybe<OrgUnitDraftWhereUniqueInput>;
  orderBy?: Array<OrgUnitDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitDraftWhereInput;
};


export type OrgUnitDraftsCountArgs = {
  where?: OrgUnitDraftWhereInput;
};


export type OrgUnitEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type OrgUnitEventsCountArgs = {
  where?: EventWhereInput;
};


export type OrgUnitFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type OrgUnitFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type OrgUnitOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type OrgUnitOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type OrgUnitParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type OrgUnitParksCountArgs = {
  where?: ParkWhereInput;
};


export type OrgUnitPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type OrgUnitPlansCountArgs = {
  where?: PlanWhereInput;
};


export type OrgUnitPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type OrgUnitPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type OrgUnitServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type OrgUnitServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type OrgUnitTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type OrgUnitTagsCountArgs = {
  where?: TagWhereInput;
};


export type OrgUnitTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type OrgUnitTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type OrgUnitTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type OrgUnitTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type OrgUnitUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type OrgUnitUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type OrgUnitVersionsArgs = {
  cursor?: InputMaybe<OrgUnitVersionWhereUniqueInput>;
  orderBy?: Array<OrgUnitVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitVersionWhereInput;
};


export type OrgUnitVersionsCountArgs = {
  where?: OrgUnitVersionWhereInput;
};

export type OrgUnitCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  childrenLabel?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<OrgUnitVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<OrgUnitDraftRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  showPage?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<OrgUnitVersionRelateToManyForCreateInput>;
};

export type OrgUnitDraft = {
  __typename?: 'OrgUnitDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<OrgUnit>>;
  childrenCount?: Maybe<Scalars['Int']['output']>;
  childrenLabel?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<OrgUnit>;
  owner?: Maybe<User>;
  parent?: Maybe<OrgUnit>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  showPage?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type OrgUnitDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type OrgUnitDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type OrgUnitDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type OrgUnitDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type OrgUnitDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type OrgUnitDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type OrgUnitDraftChildrenArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type OrgUnitDraftChildrenCountArgs = {
  where?: OrgUnitWhereInput;
};


export type OrgUnitDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type OrgUnitDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type OrgUnitDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type OrgUnitDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type OrgUnitDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type OrgUnitDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type OrgUnitDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type OrgUnitDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type OrgUnitDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type OrgUnitDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type OrgUnitDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type OrgUnitDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type OrgUnitDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type OrgUnitDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type OrgUnitDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type OrgUnitDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type OrgUnitDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type OrgUnitDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type OrgUnitDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type OrgUnitDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type OrgUnitDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type OrgUnitDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type OrgUnitDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type OrgUnitDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type OrgUnitDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type OrgUnitDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type OrgUnitDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type OrgUnitDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type OrgUnitDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  childrenLabel?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  showPage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type OrgUnitDraftManyRelationFilter = {
  every?: InputMaybe<OrgUnitDraftWhereInput>;
  none?: InputMaybe<OrgUnitDraftWhereInput>;
  some?: InputMaybe<OrgUnitDraftWhereInput>;
};

export type OrgUnitDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  childrenLabel?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  icon?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  showPage?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrgUnitDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrgUnitDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<OrgUnitDraftCreateInput>>;
};

export type OrgUnitDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrgUnitDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<OrgUnitDraftCreateInput>>;
  disconnect?: InputMaybe<Array<OrgUnitDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<OrgUnitDraftWhereUniqueInput>>;
};

export type OrgUnitDraftUpdateArgs = {
  data: OrgUnitDraftUpdateInput;
  where: OrgUnitDraftWhereUniqueInput;
};

export type OrgUnitDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  childrenLabel?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  showPage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type OrgUnitDraftWhereInput = {
  AND?: InputMaybe<Array<OrgUnitDraftWhereInput>>;
  NOT?: InputMaybe<Array<OrgUnitDraftWhereInput>>;
  OR?: InputMaybe<Array<OrgUnitDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  children?: InputMaybe<OrgUnitManyRelationFilter>;
  childrenLabel?: InputMaybe<StringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<OrgUnitWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<OrgUnitWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  showPage?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type OrgUnitDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type OrgUnitManyRelationFilter = {
  every?: InputMaybe<OrgUnitWhereInput>;
  none?: InputMaybe<OrgUnitWhereInput>;
  some?: InputMaybe<OrgUnitWhereInput>;
};

export type OrgUnitOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  childrenLabel?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  icon?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  showPage?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrgUnitRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrgUnitWhereUniqueInput>>;
  create?: InputMaybe<Array<OrgUnitCreateInput>>;
};

export type OrgUnitRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrgUnitWhereUniqueInput>>;
  create?: InputMaybe<Array<OrgUnitCreateInput>>;
  disconnect?: InputMaybe<Array<OrgUnitWhereUniqueInput>>;
  set?: InputMaybe<Array<OrgUnitWhereUniqueInput>>;
};

export type OrgUnitRelateToOneForCreateInput = {
  connect?: InputMaybe<OrgUnitWhereUniqueInput>;
  create?: InputMaybe<OrgUnitCreateInput>;
};

export type OrgUnitRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrgUnitWhereUniqueInput>;
  create?: InputMaybe<OrgUnitCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrgUnitUpdateArgs = {
  data: OrgUnitUpdateInput;
  where: OrgUnitWhereUniqueInput;
};

export type OrgUnitUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  childrenLabel?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<OrgUnitVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<OrgUnitDraftRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  showPage?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<OrgUnitVersionRelateToManyForUpdateInput>;
};

export type OrgUnitVersion = {
  __typename?: 'OrgUnitVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<OrgUnit>>;
  childrenCount?: Maybe<Scalars['Int']['output']>;
  childrenLabel?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<OrgUnit>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<OrgUnit>;
  owner?: Maybe<User>;
  parent?: Maybe<OrgUnit>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  showPage?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type OrgUnitVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type OrgUnitVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type OrgUnitVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type OrgUnitVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type OrgUnitVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type OrgUnitVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type OrgUnitVersionChildrenArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type OrgUnitVersionChildrenCountArgs = {
  where?: OrgUnitWhereInput;
};


export type OrgUnitVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type OrgUnitVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type OrgUnitVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type OrgUnitVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type OrgUnitVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type OrgUnitVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type OrgUnitVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type OrgUnitVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type OrgUnitVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type OrgUnitVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type OrgUnitVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type OrgUnitVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type OrgUnitVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type OrgUnitVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type OrgUnitVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type OrgUnitVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type OrgUnitVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type OrgUnitVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type OrgUnitVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type OrgUnitVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type OrgUnitVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type OrgUnitVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type OrgUnitVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type OrgUnitVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type OrgUnitVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type OrgUnitVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type OrgUnitVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type OrgUnitVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type OrgUnitVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  childrenLabel?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  showPage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type OrgUnitVersionManyRelationFilter = {
  every?: InputMaybe<OrgUnitVersionWhereInput>;
  none?: InputMaybe<OrgUnitVersionWhereInput>;
  some?: InputMaybe<OrgUnitVersionWhereInput>;
};

export type OrgUnitVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  childrenLabel?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  icon?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  showPage?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrgUnitVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrgUnitVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<OrgUnitVersionCreateInput>>;
};

export type OrgUnitVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrgUnitVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<OrgUnitVersionCreateInput>>;
  disconnect?: InputMaybe<Array<OrgUnitVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<OrgUnitVersionWhereUniqueInput>>;
};

export type OrgUnitVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<OrgUnitVersionWhereUniqueInput>;
  create?: InputMaybe<OrgUnitVersionCreateInput>;
};

export type OrgUnitVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrgUnitVersionWhereUniqueInput>;
  create?: InputMaybe<OrgUnitVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrgUnitVersionUpdateArgs = {
  data: OrgUnitVersionUpdateInput;
  where: OrgUnitVersionWhereUniqueInput;
};

export type OrgUnitVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  childrenLabel?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  showPage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type OrgUnitVersionWhereInput = {
  AND?: InputMaybe<Array<OrgUnitVersionWhereInput>>;
  NOT?: InputMaybe<Array<OrgUnitVersionWhereInput>>;
  OR?: InputMaybe<Array<OrgUnitVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  children?: InputMaybe<OrgUnitManyRelationFilter>;
  childrenLabel?: InputMaybe<StringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<OrgUnitWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<OrgUnitWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<OrgUnitWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  showPage?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type OrgUnitVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<OrgUnitWhereUniqueInput>;
};

export type OrgUnitWhereInput = {
  AND?: InputMaybe<Array<OrgUnitWhereInput>>;
  NOT?: InputMaybe<Array<OrgUnitWhereInput>>;
  OR?: InputMaybe<Array<OrgUnitWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  children?: InputMaybe<OrgUnitManyRelationFilter>;
  childrenLabel?: InputMaybe<StringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<OrgUnitVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<OrgUnitDraftManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<OrgUnitWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  showPage?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<OrgUnitVersionManyRelationFilter>;
};

export type OrgUnitWhereUniqueInput = {
  currentVersion?: InputMaybe<OrgUnitVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Page = AssemblyDistrict | Board | Community | Facility | OrgUnit | Park | Plan | PublicNotice | Service | Topic | Trail;

export type PageView = {
  __typename?: 'PageView';
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<PageViewItemUnion>;
  pageId?: Maybe<Scalars['String']['output']>;
  pageKey?: Maybe<Scalars['String']['output']>;
  pageType?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type PageViewCreateInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  pageKey?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type PageViewItemUnion = AssemblyDistrict | Board | Community | ElectionsPage | Facility | OrgUnit | Park | Plan | PublicNotice | Service | Topic | Trail | Url;

export type PageViewOrderByInput = {
  date?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  pageId?: InputMaybe<OrderDirection>;
  pageKey?: InputMaybe<OrderDirection>;
  pageType?: InputMaybe<OrderDirection>;
  views?: InputMaybe<OrderDirection>;
};

export type PageViewUpdateArgs = {
  data: PageViewUpdateInput;
  where: PageViewWhereUniqueInput;
};

export type PageViewUpdateInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  pageKey?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type PageViewWhereInput = {
  AND?: InputMaybe<Array<PageViewWhereInput>>;
  NOT?: InputMaybe<Array<PageViewWhereInput>>;
  OR?: InputMaybe<Array<PageViewWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  pageId?: InputMaybe<StringFilter>;
  pageKey?: InputMaybe<StringFilter>;
  pageType?: InputMaybe<StringFilter>;
  views?: InputMaybe<IntFilter>;
};

export type PageViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  pageKey?: InputMaybe<Scalars['String']['input']>;
};

export type Park = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Park';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<ParkVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<ParkDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<ParkVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type ParkActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type ParkActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type ParkAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type ParkAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type ParkCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type ParkCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type ParkContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type ParkContactsCountArgs = {
  where?: ContactWhereInput;
};


export type ParkDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ParkDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ParkDraftsArgs = {
  cursor?: InputMaybe<ParkDraftWhereUniqueInput>;
  orderBy?: Array<ParkDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkDraftWhereInput;
};


export type ParkDraftsCountArgs = {
  where?: ParkDraftWhereInput;
};


export type ParkEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type ParkEventsCountArgs = {
  where?: EventWhereInput;
};


export type ParkFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type ParkFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type ParkHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type ParkHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type ParkOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type ParkOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type ParkPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type ParkPlansCountArgs = {
  where?: PlanWhereInput;
};


export type ParkPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type ParkPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type ParkServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type ParkServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type ParkTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ParkTagsCountArgs = {
  where?: TagWhereInput;
};


export type ParkTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type ParkTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type ParkTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type ParkTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type ParkUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ParkUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type ParkVersionsArgs = {
  cursor?: InputMaybe<ParkVersionWhereUniqueInput>;
  orderBy?: Array<ParkVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkVersionWhereInput;
};


export type ParkVersionsCountArgs = {
  where?: ParkVersionWhereInput;
};

export type ParkCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ParkVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<ParkDraftRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<ParkVersionRelateToManyForCreateInput>;
};

export type ParkDraft = {
  __typename?: 'ParkDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Park>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type ParkDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type ParkDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type ParkDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type ParkDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type ParkDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type ParkDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type ParkDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type ParkDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type ParkDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ParkDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ParkDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type ParkDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type ParkDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type ParkDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type ParkDraftHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type ParkDraftHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type ParkDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type ParkDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type ParkDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type ParkDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type ParkDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type ParkDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type ParkDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type ParkDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type ParkDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ParkDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type ParkDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type ParkDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type ParkDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type ParkDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type ParkDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ParkDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ParkDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<ParkRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type ParkDraftManyRelationFilter = {
  every?: InputMaybe<ParkDraftWhereInput>;
  none?: InputMaybe<ParkDraftWhereInput>;
  some?: InputMaybe<ParkDraftWhereInput>;
};

export type ParkDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ParkDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ParkDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<ParkDraftCreateInput>>;
};

export type ParkDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ParkDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<ParkDraftCreateInput>>;
  disconnect?: InputMaybe<Array<ParkDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<ParkDraftWhereUniqueInput>>;
};

export type ParkDraftUpdateArgs = {
  data: ParkDraftUpdateInput;
  where: ParkDraftWhereUniqueInput;
};

export type ParkDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<ParkRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type ParkDraftWhereInput = {
  AND?: InputMaybe<Array<ParkDraftWhereInput>>;
  NOT?: InputMaybe<Array<ParkDraftWhereInput>>;
  OR?: InputMaybe<Array<ParkDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<ParkWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type ParkDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ParkManyRelationFilter = {
  every?: InputMaybe<ParkWhereInput>;
  none?: InputMaybe<ParkWhereInput>;
  some?: InputMaybe<ParkWhereInput>;
};

export type ParkOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ParkRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ParkWhereUniqueInput>>;
  create?: InputMaybe<Array<ParkCreateInput>>;
};

export type ParkRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ParkWhereUniqueInput>>;
  create?: InputMaybe<Array<ParkCreateInput>>;
  disconnect?: InputMaybe<Array<ParkWhereUniqueInput>>;
  set?: InputMaybe<Array<ParkWhereUniqueInput>>;
};

export type ParkRelateToOneForCreateInput = {
  connect?: InputMaybe<ParkWhereUniqueInput>;
  create?: InputMaybe<ParkCreateInput>;
};

export type ParkRelateToOneForUpdateInput = {
  connect?: InputMaybe<ParkWhereUniqueInput>;
  create?: InputMaybe<ParkCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParkUpdateArgs = {
  data: ParkUpdateInput;
  where: ParkWhereUniqueInput;
};

export type ParkUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ParkVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<ParkDraftRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<ParkVersionRelateToManyForUpdateInput>;
};

export type ParkVersion = {
  __typename?: 'ParkVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Park>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Park>;
  owner?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type ParkVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type ParkVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type ParkVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type ParkVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type ParkVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type ParkVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type ParkVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type ParkVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type ParkVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ParkVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ParkVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type ParkVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type ParkVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type ParkVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type ParkVersionHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type ParkVersionHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type ParkVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type ParkVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type ParkVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type ParkVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type ParkVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type ParkVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type ParkVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type ParkVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type ParkVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ParkVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type ParkVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type ParkVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type ParkVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type ParkVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type ParkVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ParkVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ParkVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  isLive?: InputMaybe<ParkRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<ParkRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type ParkVersionManyRelationFilter = {
  every?: InputMaybe<ParkVersionWhereInput>;
  none?: InputMaybe<ParkVersionWhereInput>;
  some?: InputMaybe<ParkVersionWhereInput>;
};

export type ParkVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ParkVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ParkVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<ParkVersionCreateInput>>;
};

export type ParkVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ParkVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<ParkVersionCreateInput>>;
  disconnect?: InputMaybe<Array<ParkVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<ParkVersionWhereUniqueInput>>;
};

export type ParkVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<ParkVersionWhereUniqueInput>;
  create?: InputMaybe<ParkVersionCreateInput>;
};

export type ParkVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<ParkVersionWhereUniqueInput>;
  create?: InputMaybe<ParkVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParkVersionUpdateArgs = {
  data: ParkVersionUpdateInput;
  where: ParkVersionWhereUniqueInput;
};

export type ParkVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  isLive?: InputMaybe<ParkRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<ParkRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type ParkVersionWhereInput = {
  AND?: InputMaybe<Array<ParkVersionWhereInput>>;
  NOT?: InputMaybe<Array<ParkVersionWhereInput>>;
  OR?: InputMaybe<Array<ParkVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<ParkWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<ParkWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type ParkVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<ParkWhereUniqueInput>;
};

export type ParkWhereInput = {
  AND?: InputMaybe<Array<ParkWhereInput>>;
  NOT?: InputMaybe<Array<ParkWhereInput>>;
  OR?: InputMaybe<Array<ParkWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<ParkVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<ParkDraftManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<ParkVersionManyRelationFilter>;
};

export type ParkWhereUniqueInput = {
  currentVersion?: InputMaybe<ParkVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Plan = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Plan';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  autoRedirectToExternalWebsite?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Array<PlanCode>>;
  codeCount?: Maybe<Scalars['Int']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  components?: Maybe<Array<Plan>>;
  componentsCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentDocument?: Maybe<PlanDocument>;
  currentVersion?: Maybe<PlanVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  draftDocument?: Maybe<PlanDocument>;
  drafts?: Maybe<Array<PlanDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  effort?: Maybe<ExternalLink>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parent?: Maybe<Plan>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  pastDocuments?: Maybe<Array<PlanDocument>>;
  pastDocumentsCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<PlanVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type PlanActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type PlanActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type PlanAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type PlanAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type PlanBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type PlanBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type PlanCodeArgs = {
  cursor?: InputMaybe<PlanCodeWhereUniqueInput>;
  orderBy?: Array<PlanCodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanCodeWhereInput;
};


export type PlanCodeCountArgs = {
  where?: PlanCodeWhereInput;
};


export type PlanCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type PlanCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type PlanComponentsArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PlanComponentsCountArgs = {
  where?: PlanWhereInput;
};


export type PlanContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type PlanContactsCountArgs = {
  where?: ContactWhereInput;
};


export type PlanDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type PlanDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type PlanDraftsArgs = {
  cursor?: InputMaybe<PlanDraftWhereUniqueInput>;
  orderBy?: Array<PlanDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanDraftWhereInput;
};


export type PlanDraftsCountArgs = {
  where?: PlanDraftWhereInput;
};


export type PlanEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type PlanEventsCountArgs = {
  where?: EventWhereInput;
};


export type PlanFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type PlanFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type PlanOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type PlanOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type PlanParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type PlanParksCountArgs = {
  where?: ParkWhereInput;
};


export type PlanPastDocumentsArgs = {
  cursor?: InputMaybe<PlanDocumentWhereUniqueInput>;
  orderBy?: Array<PlanDocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanDocumentWhereInput;
};


export type PlanPastDocumentsCountArgs = {
  where?: PlanDocumentWhereInput;
};


export type PlanPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PlanPlansCountArgs = {
  where?: PlanWhereInput;
};


export type PlanPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type PlanPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type PlanServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type PlanServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type PlanTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PlanTagsCountArgs = {
  where?: TagWhereInput;
};


export type PlanTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type PlanTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type PlanTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type PlanTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type PlanUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type PlanUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type PlanVersionsArgs = {
  cursor?: InputMaybe<PlanVersionWhereUniqueInput>;
  orderBy?: Array<PlanVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanVersionWhereInput;
};


export type PlanVersionsCountArgs = {
  where?: PlanVersionWhereInput;
};

export type PlanCode = {
  __typename?: 'PlanCode';
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type PlanCodeCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type PlanCodeManyRelationFilter = {
  every?: InputMaybe<PlanCodeWhereInput>;
  none?: InputMaybe<PlanCodeWhereInput>;
  some?: InputMaybe<PlanCodeWhereInput>;
};

export type PlanCodeOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type PlanCodeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PlanCodeWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanCodeCreateInput>>;
};

export type PlanCodeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PlanCodeWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanCodeCreateInput>>;
  disconnect?: InputMaybe<Array<PlanCodeWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanCodeWhereUniqueInput>>;
};

export type PlanCodeUpdateArgs = {
  data: PlanCodeUpdateInput;
  where: PlanCodeWhereUniqueInput;
};

export type PlanCodeUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type PlanCodeWhereInput = {
  AND?: InputMaybe<Array<PlanCodeWhereInput>>;
  NOT?: InputMaybe<Array<PlanCodeWhereInput>>;
  OR?: InputMaybe<Array<PlanCodeWhereInput>>;
  code?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
};

export type PlanCodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PlanCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  autoRedirectToExternalWebsite?: InputMaybe<Scalars['Int']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<PlanCodeRelateToManyForCreateInput>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  components?: InputMaybe<PlanRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentDocument?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  currentVersion?: InputMaybe<PlanVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  draftDocument?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  drafts?: InputMaybe<PlanDraftRelateToManyForCreateInput>;
  effort?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<PlanRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  pastDocuments?: InputMaybe<PlanDocumentRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<PlanVersionRelateToManyForCreateInput>;
};

export type PlanDocument = {
  __typename?: 'PlanDocument';
  adoptedYear?: Maybe<Scalars['Int']['output']>;
  document?: Maybe<Document>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  precededBy?: Maybe<PlanDocument>;
  supersededBy?: Maybe<PlanDocument>;
};

export type PlanDocumentCreateInput = {
  adoptedYear?: InputMaybe<Scalars['Int']['input']>;
  document?: InputMaybe<DocumentRelateToOneForCreateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  precededBy?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  supersededBy?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
};

export type PlanDocumentManyRelationFilter = {
  every?: InputMaybe<PlanDocumentWhereInput>;
  none?: InputMaybe<PlanDocumentWhereInput>;
  some?: InputMaybe<PlanDocumentWhereInput>;
};

export type PlanDocumentOrderByInput = {
  adoptedYear?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
};

export type PlanDocumentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PlanDocumentWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanDocumentCreateInput>>;
};

export type PlanDocumentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PlanDocumentWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanDocumentCreateInput>>;
  disconnect?: InputMaybe<Array<PlanDocumentWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanDocumentWhereUniqueInput>>;
};

export type PlanDocumentRelateToOneForCreateInput = {
  connect?: InputMaybe<PlanDocumentWhereUniqueInput>;
  create?: InputMaybe<PlanDocumentCreateInput>;
};

export type PlanDocumentRelateToOneForUpdateInput = {
  connect?: InputMaybe<PlanDocumentWhereUniqueInput>;
  create?: InputMaybe<PlanDocumentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlanDocumentUpdateArgs = {
  data: PlanDocumentUpdateInput;
  where: PlanDocumentWhereUniqueInput;
};

export type PlanDocumentUpdateInput = {
  adoptedYear?: InputMaybe<Scalars['Int']['input']>;
  document?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  precededBy?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  supersededBy?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
};

export type PlanDocumentWhereInput = {
  AND?: InputMaybe<Array<PlanDocumentWhereInput>>;
  NOT?: InputMaybe<Array<PlanDocumentWhereInput>>;
  OR?: InputMaybe<Array<PlanDocumentWhereInput>>;
  adoptedYear?: InputMaybe<IntNullableFilter>;
  document?: InputMaybe<DocumentWhereInput>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  precededBy?: InputMaybe<PlanDocumentWhereInput>;
  supersededBy?: InputMaybe<PlanDocumentWhereInput>;
};

export type PlanDocumentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  precededBy?: InputMaybe<PlanDocumentWhereUniqueInput>;
  supersededBy?: InputMaybe<PlanDocumentWhereUniqueInput>;
};

export type PlanDraft = {
  __typename?: 'PlanDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  autoRedirectToExternalWebsite?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Array<PlanCode>>;
  codeCount?: Maybe<Scalars['Int']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  components?: Maybe<Array<Plan>>;
  componentsCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentDocument?: Maybe<PlanDocument>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  draftDocument?: Maybe<PlanDocument>;
  effort?: Maybe<ExternalLink>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Plan>;
  owner?: Maybe<User>;
  parent?: Maybe<Plan>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  pastDocuments?: Maybe<Array<PlanDocument>>;
  pastDocumentsCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type PlanDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type PlanDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type PlanDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type PlanDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type PlanDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type PlanDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type PlanDraftCodeArgs = {
  cursor?: InputMaybe<PlanCodeWhereUniqueInput>;
  orderBy?: Array<PlanCodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanCodeWhereInput;
};


export type PlanDraftCodeCountArgs = {
  where?: PlanCodeWhereInput;
};


export type PlanDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type PlanDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type PlanDraftComponentsArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PlanDraftComponentsCountArgs = {
  where?: PlanWhereInput;
};


export type PlanDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type PlanDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type PlanDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type PlanDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type PlanDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type PlanDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type PlanDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type PlanDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type PlanDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type PlanDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type PlanDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type PlanDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type PlanDraftPastDocumentsArgs = {
  cursor?: InputMaybe<PlanDocumentWhereUniqueInput>;
  orderBy?: Array<PlanDocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanDocumentWhereInput;
};


export type PlanDraftPastDocumentsCountArgs = {
  where?: PlanDocumentWhereInput;
};


export type PlanDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PlanDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type PlanDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type PlanDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type PlanDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type PlanDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type PlanDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PlanDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type PlanDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type PlanDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type PlanDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type PlanDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type PlanDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type PlanDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type PlanDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  autoRedirectToExternalWebsite?: InputMaybe<Scalars['Int']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<PlanCodeRelateToManyForCreateInput>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  components?: InputMaybe<PlanRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentDocument?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  draftDocument?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  effort?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<PlanRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<PlanRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  pastDocuments?: InputMaybe<PlanDocumentRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type PlanDraftManyRelationFilter = {
  every?: InputMaybe<PlanDraftWhereInput>;
  none?: InputMaybe<PlanDraftWhereInput>;
  some?: InputMaybe<PlanDraftWhereInput>;
};

export type PlanDraftOrderByInput = {
  autoRedirectToExternalWebsite?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PlanDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PlanDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanDraftCreateInput>>;
};

export type PlanDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PlanDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanDraftCreateInput>>;
  disconnect?: InputMaybe<Array<PlanDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanDraftWhereUniqueInput>>;
};

export type PlanDraftUpdateArgs = {
  data: PlanDraftUpdateInput;
  where: PlanDraftWhereUniqueInput;
};

export type PlanDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  autoRedirectToExternalWebsite?: InputMaybe<Scalars['Int']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<PlanCodeRelateToManyForUpdateInput>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  components?: InputMaybe<PlanRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentDocument?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  draftDocument?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  effort?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<PlanRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<PlanRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  pastDocuments?: InputMaybe<PlanDocumentRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type PlanDraftWhereInput = {
  AND?: InputMaybe<Array<PlanDraftWhereInput>>;
  NOT?: InputMaybe<Array<PlanDraftWhereInput>>;
  OR?: InputMaybe<Array<PlanDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  autoRedirectToExternalWebsite?: InputMaybe<IntFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  code?: InputMaybe<PlanCodeManyRelationFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  components?: InputMaybe<PlanManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentDocument?: InputMaybe<PlanDocumentWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  draftDocument?: InputMaybe<PlanDocumentWhereInput>;
  effort?: InputMaybe<ExternalLinkWhereInput>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<PlanWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<PlanWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  pastDocuments?: InputMaybe<PlanDocumentManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type PlanDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PlanManyRelationFilter = {
  every?: InputMaybe<PlanWhereInput>;
  none?: InputMaybe<PlanWhereInput>;
  some?: InputMaybe<PlanWhereInput>;
};

export type PlanOrderByInput = {
  autoRedirectToExternalWebsite?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PlanRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PlanWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanCreateInput>>;
};

export type PlanRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PlanWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanCreateInput>>;
  disconnect?: InputMaybe<Array<PlanWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanWhereUniqueInput>>;
};

export type PlanRelateToOneForCreateInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  create?: InputMaybe<PlanCreateInput>;
};

export type PlanRelateToOneForUpdateInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  create?: InputMaybe<PlanCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlanUpdateArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};

export type PlanUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  autoRedirectToExternalWebsite?: InputMaybe<Scalars['Int']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<PlanCodeRelateToManyForUpdateInput>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  components?: InputMaybe<PlanRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentDocument?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  currentVersion?: InputMaybe<PlanVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  draftDocument?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  drafts?: InputMaybe<PlanDraftRelateToManyForUpdateInput>;
  effort?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<PlanRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  pastDocuments?: InputMaybe<PlanDocumentRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<PlanVersionRelateToManyForUpdateInput>;
};

export type PlanVersion = {
  __typename?: 'PlanVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  autoRedirectToExternalWebsite?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Array<PlanCode>>;
  codeCount?: Maybe<Scalars['Int']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  components?: Maybe<Array<Plan>>;
  componentsCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentDocument?: Maybe<PlanDocument>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  draftDocument?: Maybe<PlanDocument>;
  effort?: Maybe<ExternalLink>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Plan>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Plan>;
  owner?: Maybe<User>;
  parent?: Maybe<Plan>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  pastDocuments?: Maybe<Array<PlanDocument>>;
  pastDocumentsCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type PlanVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type PlanVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type PlanVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type PlanVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type PlanVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type PlanVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type PlanVersionCodeArgs = {
  cursor?: InputMaybe<PlanCodeWhereUniqueInput>;
  orderBy?: Array<PlanCodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanCodeWhereInput;
};


export type PlanVersionCodeCountArgs = {
  where?: PlanCodeWhereInput;
};


export type PlanVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type PlanVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type PlanVersionComponentsArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PlanVersionComponentsCountArgs = {
  where?: PlanWhereInput;
};


export type PlanVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type PlanVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type PlanVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type PlanVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type PlanVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type PlanVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type PlanVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type PlanVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type PlanVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type PlanVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type PlanVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type PlanVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type PlanVersionPastDocumentsArgs = {
  cursor?: InputMaybe<PlanDocumentWhereUniqueInput>;
  orderBy?: Array<PlanDocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanDocumentWhereInput;
};


export type PlanVersionPastDocumentsCountArgs = {
  where?: PlanDocumentWhereInput;
};


export type PlanVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PlanVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type PlanVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type PlanVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type PlanVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type PlanVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type PlanVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PlanVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type PlanVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type PlanVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type PlanVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type PlanVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type PlanVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type PlanVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type PlanVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  autoRedirectToExternalWebsite?: InputMaybe<Scalars['Int']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<PlanCodeRelateToManyForCreateInput>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  components?: InputMaybe<PlanRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentDocument?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  draftDocument?: InputMaybe<PlanDocumentRelateToOneForCreateInput>;
  effort?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<PlanRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<PlanRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<PlanRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  pastDocuments?: InputMaybe<PlanDocumentRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type PlanVersionManyRelationFilter = {
  every?: InputMaybe<PlanVersionWhereInput>;
  none?: InputMaybe<PlanVersionWhereInput>;
  some?: InputMaybe<PlanVersionWhereInput>;
};

export type PlanVersionOrderByInput = {
  autoRedirectToExternalWebsite?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PlanVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PlanVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanVersionCreateInput>>;
};

export type PlanVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PlanVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanVersionCreateInput>>;
  disconnect?: InputMaybe<Array<PlanVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanVersionWhereUniqueInput>>;
};

export type PlanVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<PlanVersionWhereUniqueInput>;
  create?: InputMaybe<PlanVersionCreateInput>;
};

export type PlanVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<PlanVersionWhereUniqueInput>;
  create?: InputMaybe<PlanVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlanVersionUpdateArgs = {
  data: PlanVersionUpdateInput;
  where: PlanVersionWhereUniqueInput;
};

export type PlanVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  autoRedirectToExternalWebsite?: InputMaybe<Scalars['Int']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<PlanCodeRelateToManyForUpdateInput>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  components?: InputMaybe<PlanRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentDocument?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  draftDocument?: InputMaybe<PlanDocumentRelateToOneForUpdateInput>;
  effort?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<PlanRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<PlanRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<PlanRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  pastDocuments?: InputMaybe<PlanDocumentRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type PlanVersionWhereInput = {
  AND?: InputMaybe<Array<PlanVersionWhereInput>>;
  NOT?: InputMaybe<Array<PlanVersionWhereInput>>;
  OR?: InputMaybe<Array<PlanVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  autoRedirectToExternalWebsite?: InputMaybe<IntFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  code?: InputMaybe<PlanCodeManyRelationFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  components?: InputMaybe<PlanManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentDocument?: InputMaybe<PlanDocumentWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  draftDocument?: InputMaybe<PlanDocumentWhereInput>;
  effort?: InputMaybe<ExternalLinkWhereInput>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<PlanWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<PlanWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<PlanWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  pastDocuments?: InputMaybe<PlanDocumentManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type PlanVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<PlanWhereUniqueInput>;
};

export type PlanWhereInput = {
  AND?: InputMaybe<Array<PlanWhereInput>>;
  NOT?: InputMaybe<Array<PlanWhereInput>>;
  OR?: InputMaybe<Array<PlanWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  autoRedirectToExternalWebsite?: InputMaybe<IntFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  code?: InputMaybe<PlanCodeManyRelationFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  components?: InputMaybe<PlanManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentDocument?: InputMaybe<PlanDocumentWhereInput>;
  currentVersion?: InputMaybe<PlanVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  draftDocument?: InputMaybe<PlanDocumentWhereInput>;
  drafts?: InputMaybe<PlanDraftManyRelationFilter>;
  effort?: InputMaybe<ExternalLinkWhereInput>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<PlanWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  pastDocuments?: InputMaybe<PlanDocumentManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<PlanVersionManyRelationFilter>;
};

export type PlanWhereUniqueInput = {
  currentVersion?: InputMaybe<PlanVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Proposition = {
  __typename?: 'Proposition';
  description?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  election?: Maybe<Election>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PropositionCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<DocumentRelateToOneForCreateInput>;
  election?: InputMaybe<ElectionRelateToOneForCreateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PropositionManyRelationFilter = {
  every?: InputMaybe<PropositionWhereInput>;
  none?: InputMaybe<PropositionWhereInput>;
  some?: InputMaybe<PropositionWhereInput>;
};

export type PropositionOrderByInput = {
  description?: InputMaybe<MyOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PropositionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PropositionWhereUniqueInput>>;
  create?: InputMaybe<Array<PropositionCreateInput>>;
};

export type PropositionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PropositionWhereUniqueInput>>;
  create?: InputMaybe<Array<PropositionCreateInput>>;
  disconnect?: InputMaybe<Array<PropositionWhereUniqueInput>>;
  set?: InputMaybe<Array<PropositionWhereUniqueInput>>;
};

export type PropositionUpdateArgs = {
  data: PropositionUpdateInput;
  where: PropositionWhereUniqueInput;
};

export type PropositionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<DocumentRelateToOneForUpdateInput>;
  election?: InputMaybe<ElectionRelateToOneForUpdateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PropositionWhereInput = {
  AND?: InputMaybe<Array<PropositionWhereInput>>;
  NOT?: InputMaybe<Array<PropositionWhereInput>>;
  OR?: InputMaybe<Array<PropositionWhereInput>>;
  description?: InputMaybe<MyStringFilter>;
  document?: InputMaybe<DocumentWhereInput>;
  election?: InputMaybe<ElectionWhereInput>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PropositionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublicNotice = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'PublicNotice';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<PublicNoticeVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<PublicNoticeDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urgency?: Maybe<Scalars['Int']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<PublicNoticeVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type PublicNoticeActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type PublicNoticeActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type PublicNoticeAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type PublicNoticeAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type PublicNoticeBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type PublicNoticeBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type PublicNoticeCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type PublicNoticeCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type PublicNoticeContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type PublicNoticeContactsCountArgs = {
  where?: ContactWhereInput;
};


export type PublicNoticeDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type PublicNoticeDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type PublicNoticeDraftsArgs = {
  cursor?: InputMaybe<PublicNoticeDraftWhereUniqueInput>;
  orderBy?: Array<PublicNoticeDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeDraftWhereInput;
};


export type PublicNoticeDraftsCountArgs = {
  where?: PublicNoticeDraftWhereInput;
};


export type PublicNoticeEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type PublicNoticeEventsCountArgs = {
  where?: EventWhereInput;
};


export type PublicNoticeFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type PublicNoticeFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type PublicNoticeOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type PublicNoticeOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type PublicNoticeParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type PublicNoticeParksCountArgs = {
  where?: ParkWhereInput;
};


export type PublicNoticePlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PublicNoticePlansCountArgs = {
  where?: PlanWhereInput;
};


export type PublicNoticePublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type PublicNoticePublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type PublicNoticeServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type PublicNoticeServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type PublicNoticeTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PublicNoticeTagsCountArgs = {
  where?: TagWhereInput;
};


export type PublicNoticeTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type PublicNoticeTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type PublicNoticeTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type PublicNoticeTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type PublicNoticeUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type PublicNoticeUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type PublicNoticeVersionsArgs = {
  cursor?: InputMaybe<PublicNoticeVersionWhereUniqueInput>;
  orderBy?: Array<PublicNoticeVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeVersionWhereInput;
};


export type PublicNoticeVersionsCountArgs = {
  where?: PublicNoticeVersionWhereInput;
};

export type PublicNoticeCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<PublicNoticeVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<PublicNoticeDraftRelateToManyForCreateInput>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<PublicNoticeVersionRelateToManyForCreateInput>;
};

export type PublicNoticeDraft = {
  __typename?: 'PublicNoticeDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<PublicNotice>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urgency?: Maybe<Scalars['Int']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type PublicNoticeDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type PublicNoticeDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type PublicNoticeDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type PublicNoticeDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type PublicNoticeDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type PublicNoticeDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type PublicNoticeDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type PublicNoticeDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type PublicNoticeDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type PublicNoticeDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type PublicNoticeDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type PublicNoticeDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type PublicNoticeDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type PublicNoticeDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type PublicNoticeDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type PublicNoticeDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type PublicNoticeDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type PublicNoticeDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type PublicNoticeDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type PublicNoticeDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type PublicNoticeDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PublicNoticeDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type PublicNoticeDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type PublicNoticeDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type PublicNoticeDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type PublicNoticeDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type PublicNoticeDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PublicNoticeDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type PublicNoticeDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type PublicNoticeDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type PublicNoticeDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type PublicNoticeDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type PublicNoticeDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type PublicNoticeDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type PublicNoticeDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type PublicNoticeDraftManyRelationFilter = {
  every?: InputMaybe<PublicNoticeDraftWhereInput>;
  none?: InputMaybe<PublicNoticeDraftWhereInput>;
  some?: InputMaybe<PublicNoticeDraftWhereInput>;
};

export type PublicNoticeDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  effectiveDate?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  urgency?: InputMaybe<OrderDirection>;
};

export type PublicNoticeDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PublicNoticeDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicNoticeDraftCreateInput>>;
};

export type PublicNoticeDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PublicNoticeDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicNoticeDraftCreateInput>>;
  disconnect?: InputMaybe<Array<PublicNoticeDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicNoticeDraftWhereUniqueInput>>;
};

export type PublicNoticeDraftUpdateArgs = {
  data: PublicNoticeDraftUpdateInput;
  where: PublicNoticeDraftWhereUniqueInput;
};

export type PublicNoticeDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type PublicNoticeDraftWhereInput = {
  AND?: InputMaybe<Array<PublicNoticeDraftWhereInput>>;
  NOT?: InputMaybe<Array<PublicNoticeDraftWhereInput>>;
  OR?: InputMaybe<Array<PublicNoticeDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  effectiveDate?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<PublicNoticeWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  urgency?: InputMaybe<IntFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type PublicNoticeDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublicNoticeManyRelationFilter = {
  every?: InputMaybe<PublicNoticeWhereInput>;
  none?: InputMaybe<PublicNoticeWhereInput>;
  some?: InputMaybe<PublicNoticeWhereInput>;
};

export type PublicNoticeOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  effectiveDate?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  urgency?: InputMaybe<OrderDirection>;
};

export type PublicNoticeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PublicNoticeWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicNoticeCreateInput>>;
};

export type PublicNoticeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PublicNoticeWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicNoticeCreateInput>>;
  disconnect?: InputMaybe<Array<PublicNoticeWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicNoticeWhereUniqueInput>>;
};

export type PublicNoticeRelateToOneForCreateInput = {
  connect?: InputMaybe<PublicNoticeWhereUniqueInput>;
  create?: InputMaybe<PublicNoticeCreateInput>;
};

export type PublicNoticeRelateToOneForUpdateInput = {
  connect?: InputMaybe<PublicNoticeWhereUniqueInput>;
  create?: InputMaybe<PublicNoticeCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PublicNoticeUpdateArgs = {
  data: PublicNoticeUpdateInput;
  where: PublicNoticeWhereUniqueInput;
};

export type PublicNoticeUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<PublicNoticeVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<PublicNoticeDraftRelateToManyForUpdateInput>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<PublicNoticeVersionRelateToManyForUpdateInput>;
};

export type PublicNoticeVersion = {
  __typename?: 'PublicNoticeVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<PublicNotice>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<PublicNotice>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urgency?: Maybe<Scalars['Int']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type PublicNoticeVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type PublicNoticeVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type PublicNoticeVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type PublicNoticeVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type PublicNoticeVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type PublicNoticeVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type PublicNoticeVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type PublicNoticeVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type PublicNoticeVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type PublicNoticeVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type PublicNoticeVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type PublicNoticeVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type PublicNoticeVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type PublicNoticeVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type PublicNoticeVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type PublicNoticeVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type PublicNoticeVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type PublicNoticeVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type PublicNoticeVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type PublicNoticeVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type PublicNoticeVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type PublicNoticeVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type PublicNoticeVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type PublicNoticeVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type PublicNoticeVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type PublicNoticeVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type PublicNoticeVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PublicNoticeVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type PublicNoticeVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type PublicNoticeVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type PublicNoticeVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type PublicNoticeVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type PublicNoticeVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type PublicNoticeVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type PublicNoticeVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<PublicNoticeRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type PublicNoticeVersionManyRelationFilter = {
  every?: InputMaybe<PublicNoticeVersionWhereInput>;
  none?: InputMaybe<PublicNoticeVersionWhereInput>;
  some?: InputMaybe<PublicNoticeVersionWhereInput>;
};

export type PublicNoticeVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  effectiveDate?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  urgency?: InputMaybe<OrderDirection>;
};

export type PublicNoticeVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PublicNoticeVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicNoticeVersionCreateInput>>;
};

export type PublicNoticeVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PublicNoticeVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicNoticeVersionCreateInput>>;
  disconnect?: InputMaybe<Array<PublicNoticeVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicNoticeVersionWhereUniqueInput>>;
};

export type PublicNoticeVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<PublicNoticeVersionWhereUniqueInput>;
  create?: InputMaybe<PublicNoticeVersionCreateInput>;
};

export type PublicNoticeVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<PublicNoticeVersionWhereUniqueInput>;
  create?: InputMaybe<PublicNoticeVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PublicNoticeVersionUpdateArgs = {
  data: PublicNoticeVersionUpdateInput;
  where: PublicNoticeVersionWhereUniqueInput;
};

export type PublicNoticeVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<PublicNoticeRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urgency?: InputMaybe<Scalars['Int']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type PublicNoticeVersionWhereInput = {
  AND?: InputMaybe<Array<PublicNoticeVersionWhereInput>>;
  NOT?: InputMaybe<Array<PublicNoticeVersionWhereInput>>;
  OR?: InputMaybe<Array<PublicNoticeVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  effectiveDate?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<PublicNoticeWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<PublicNoticeWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  urgency?: InputMaybe<IntFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type PublicNoticeVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<PublicNoticeWhereUniqueInput>;
};

export type PublicNoticeWhereInput = {
  AND?: InputMaybe<Array<PublicNoticeWhereInput>>;
  NOT?: InputMaybe<Array<PublicNoticeWhereInput>>;
  OR?: InputMaybe<Array<PublicNoticeWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<PublicNoticeVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<PublicNoticeDraftManyRelationFilter>;
  effectiveDate?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  urgency?: InputMaybe<IntFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<PublicNoticeVersionManyRelationFilter>;
};

export type PublicNoticeWhereUniqueInput = {
  currentVersion?: InputMaybe<PublicNoticeVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  alert?: Maybe<Alert>;
  alerts?: Maybe<Array<Alert>>;
  alertsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistrict?: Maybe<AssemblyDistrict>;
  assemblyDistrictDraft?: Maybe<AssemblyDistrictDraft>;
  assemblyDistrictDrafts?: Maybe<Array<AssemblyDistrictDraft>>;
  assemblyDistrictDraftsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistrictVersion?: Maybe<AssemblyDistrictVersion>;
  assemblyDistrictVersions?: Maybe<Array<AssemblyDistrictVersion>>;
  assemblyDistrictVersionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  board?: Maybe<Board>;
  boardDraft?: Maybe<BoardDraft>;
  boardDrafts?: Maybe<Array<BoardDraft>>;
  boardDraftsCount?: Maybe<Scalars['Int']['output']>;
  boardPage?: Maybe<BoardPage>;
  boardPages?: Maybe<Array<BoardPage>>;
  boardPagesCount?: Maybe<Scalars['Int']['output']>;
  boardVersion?: Maybe<BoardVersion>;
  boardVersions?: Maybe<Array<BoardVersion>>;
  boardVersionsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  community?: Maybe<Community>;
  communityDraft?: Maybe<CommunityDraft>;
  communityDrafts?: Maybe<Array<CommunityDraft>>;
  communityDraftsCount?: Maybe<Scalars['Int']['output']>;
  communityVersion?: Maybe<CommunityVersion>;
  communityVersions?: Maybe<Array<CommunityVersion>>;
  communityVersionsCount?: Maybe<Scalars['Int']['output']>;
  contact?: Maybe<Contact>;
  contactListItem?: Maybe<ContactListItem>;
  contactListItems?: Maybe<Array<ContactListItem>>;
  contactListItemsCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  document?: Maybe<Document>;
  documentCollection?: Maybe<DocumentCollection>;
  documentCollections?: Maybe<Array<DocumentCollection>>;
  documentCollectionsCount?: Maybe<Scalars['Int']['output']>;
  documentListItem?: Maybe<DocumentListItem>;
  documentListItems?: Maybe<Array<DocumentListItem>>;
  documentListItemsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  earlyVotingLocation?: Maybe<EarlyVotingLocation>;
  earlyVotingLocations?: Maybe<Array<EarlyVotingLocation>>;
  earlyVotingLocationsCount?: Maybe<Scalars['Int']['output']>;
  election?: Maybe<Election>;
  electionDraft?: Maybe<ElectionDraft>;
  electionDrafts?: Maybe<Array<ElectionDraft>>;
  electionDraftsCount?: Maybe<Scalars['Int']['output']>;
  electionResult?: Maybe<ElectionResult>;
  electionResults?: Maybe<Array<ElectionResult>>;
  electionResultsCount?: Maybe<Scalars['Int']['output']>;
  electionVersion?: Maybe<ElectionVersion>;
  electionVersions?: Maybe<Array<ElectionVersion>>;
  electionVersionsCount?: Maybe<Scalars['Int']['output']>;
  elections?: Maybe<Array<Election>>;
  electionsCount?: Maybe<Scalars['Int']['output']>;
  electionsPage?: Maybe<ElectionsPage>;
  electionsPages?: Maybe<Array<ElectionsPage>>;
  electionsPagesCount?: Maybe<Scalars['Int']['output']>;
  event?: Maybe<Event>;
  eventDraft?: Maybe<EventDraft>;
  eventDrafts?: Maybe<Array<EventDraft>>;
  eventDraftsCount?: Maybe<Scalars['Int']['output']>;
  eventVersion?: Maybe<EventVersion>;
  eventVersions?: Maybe<Array<EventVersion>>;
  eventVersionsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  externalLink?: Maybe<ExternalLink>;
  externalLinks?: Maybe<Array<ExternalLink>>;
  externalLinksCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  facility?: Maybe<Facility>;
  facilityDraft?: Maybe<FacilityDraft>;
  facilityDrafts?: Maybe<Array<FacilityDraft>>;
  facilityDraftsCount?: Maybe<Scalars['Int']['output']>;
  facilityListItem?: Maybe<FacilityListItem>;
  facilityListItems?: Maybe<Array<FacilityListItem>>;
  facilityListItemsCount?: Maybe<Scalars['Int']['output']>;
  facilityVersion?: Maybe<FacilityVersion>;
  facilityVersions?: Maybe<Array<FacilityVersion>>;
  facilityVersionsCount?: Maybe<Scalars['Int']['output']>;
  featuredItem?: Maybe<FeaturedItem>;
  featuredItems?: Maybe<Array<FeaturedItem>>;
  featuredItemsCount?: Maybe<Scalars['Int']['output']>;
  getInternalLink?: Maybe<InternalLinkSearch>;
  getPage?: Maybe<Page>;
  highlight?: Maybe<Highlight>;
  highlights?: Maybe<Array<Highlight>>;
  highlightsCount?: Maybe<Scalars['Int']['output']>;
  homePage?: Maybe<HomePage>;
  homePages?: Maybe<Array<HomePage>>;
  homePagesCount?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']['output']>;
  internalLink?: Maybe<InternalLink>;
  internalLinks?: Maybe<Array<InternalLink>>;
  internalLinksCount?: Maybe<Scalars['Int']['output']>;
  internalSearch?: Maybe<Array<Maybe<InternalLinkSearch>>>;
  keystone: KeystoneMeta;
  landingPage?: Maybe<LandingPage>;
  landingPages?: Maybe<Array<LandingPage>>;
  landingPagesCount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']['output']>;
  operatingHour?: Maybe<OperatingHour>;
  operatingHours?: Maybe<Array<OperatingHour>>;
  operatingHoursCount?: Maybe<Scalars['Int']['output']>;
  orgUnit?: Maybe<OrgUnit>;
  orgUnitDraft?: Maybe<OrgUnitDraft>;
  orgUnitDrafts?: Maybe<Array<OrgUnitDraft>>;
  orgUnitDraftsCount?: Maybe<Scalars['Int']['output']>;
  orgUnitVersion?: Maybe<OrgUnitVersion>;
  orgUnitVersions?: Maybe<Array<OrgUnitVersion>>;
  orgUnitVersionsCount?: Maybe<Scalars['Int']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  pageView?: Maybe<PageView>;
  pageViews?: Maybe<Array<PageView>>;
  pageViewsCount?: Maybe<Scalars['Int']['output']>;
  park?: Maybe<Park>;
  parkDraft?: Maybe<ParkDraft>;
  parkDrafts?: Maybe<Array<ParkDraft>>;
  parkDraftsCount?: Maybe<Scalars['Int']['output']>;
  parkVersion?: Maybe<ParkVersion>;
  parkVersions?: Maybe<Array<ParkVersion>>;
  parkVersionsCount?: Maybe<Scalars['Int']['output']>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plan?: Maybe<Plan>;
  planCode?: Maybe<PlanCode>;
  planCodes?: Maybe<Array<PlanCode>>;
  planCodesCount?: Maybe<Scalars['Int']['output']>;
  planDocument?: Maybe<PlanDocument>;
  planDocuments?: Maybe<Array<PlanDocument>>;
  planDocumentsCount?: Maybe<Scalars['Int']['output']>;
  planDraft?: Maybe<PlanDraft>;
  planDrafts?: Maybe<Array<PlanDraft>>;
  planDraftsCount?: Maybe<Scalars['Int']['output']>;
  planVersion?: Maybe<PlanVersion>;
  planVersions?: Maybe<Array<PlanVersion>>;
  planVersionsCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  proposition?: Maybe<Proposition>;
  propositions?: Maybe<Array<Proposition>>;
  propositionsCount?: Maybe<Scalars['Int']['output']>;
  publicNotice?: Maybe<PublicNotice>;
  publicNoticeDraft?: Maybe<PublicNoticeDraft>;
  publicNoticeDrafts?: Maybe<Array<PublicNoticeDraft>>;
  publicNoticeDraftsCount?: Maybe<Scalars['Int']['output']>;
  publicNoticeVersion?: Maybe<PublicNoticeVersion>;
  publicNoticeVersions?: Maybe<Array<PublicNoticeVersion>>;
  publicNoticeVersionsCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  redirect?: Maybe<Redirect>;
  redirects?: Maybe<Array<Redirect>>;
  redirectsCount?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Service>;
  serviceDraft?: Maybe<ServiceDraft>;
  serviceDrafts?: Maybe<Array<ServiceDraft>>;
  serviceDraftsCount?: Maybe<Scalars['Int']['output']>;
  serviceVersion?: Maybe<ServiceVersion>;
  serviceVersions?: Maybe<Array<ServiceVersion>>;
  serviceVersionsCount?: Maybe<Scalars['Int']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  topPages: Array<TopPage>;
  topic?: Maybe<Topic>;
  topicDraft?: Maybe<TopicDraft>;
  topicDrafts?: Maybe<Array<TopicDraft>>;
  topicDraftsCount?: Maybe<Scalars['Int']['output']>;
  topicVersion?: Maybe<TopicVersion>;
  topicVersions?: Maybe<Array<TopicVersion>>;
  topicVersionsCount?: Maybe<Scalars['Int']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trail?: Maybe<Trail>;
  trailDraft?: Maybe<TrailDraft>;
  trailDrafts?: Maybe<Array<TrailDraft>>;
  trailDraftsCount?: Maybe<Scalars['Int']['output']>;
  trailVersion?: Maybe<TrailVersion>;
  trailVersions?: Maybe<Array<TrailVersion>>;
  trailVersionsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Url>;
  urls?: Maybe<Array<Url>>;
  urlsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userGroup?: Maybe<UserGroup>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryAlertArgs = {
  where: AlertWhereUniqueInput;
};


export type QueryAlertsArgs = {
  cursor?: InputMaybe<AlertWhereUniqueInput>;
  orderBy?: Array<AlertOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AlertWhereInput;
};


export type QueryAlertsCountArgs = {
  where?: AlertWhereInput;
};


export type QueryAssemblyDistrictArgs = {
  where: AssemblyDistrictWhereUniqueInput;
};


export type QueryAssemblyDistrictDraftArgs = {
  where: AssemblyDistrictDraftWhereUniqueInput;
};


export type QueryAssemblyDistrictDraftsArgs = {
  cursor?: InputMaybe<AssemblyDistrictDraftWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictDraftWhereInput;
};


export type QueryAssemblyDistrictDraftsCountArgs = {
  where?: AssemblyDistrictDraftWhereInput;
};


export type QueryAssemblyDistrictVersionArgs = {
  where: AssemblyDistrictVersionWhereUniqueInput;
};


export type QueryAssemblyDistrictVersionsArgs = {
  cursor?: InputMaybe<AssemblyDistrictVersionWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictVersionWhereInput;
};


export type QueryAssemblyDistrictVersionsCountArgs = {
  where?: AssemblyDistrictVersionWhereInput;
};


export type QueryAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type QueryAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type QueryBoardArgs = {
  where: BoardWhereUniqueInput;
};


export type QueryBoardDraftArgs = {
  where: BoardDraftWhereUniqueInput;
};


export type QueryBoardDraftsArgs = {
  cursor?: InputMaybe<BoardDraftWhereUniqueInput>;
  orderBy?: Array<BoardDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardDraftWhereInput;
};


export type QueryBoardDraftsCountArgs = {
  where?: BoardDraftWhereInput;
};


export type QueryBoardPageArgs = {
  where?: BoardPageWhereUniqueInput;
};


export type QueryBoardPagesArgs = {
  cursor?: InputMaybe<BoardPageWhereUniqueInput>;
  orderBy?: Array<BoardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardPageWhereInput;
};


export type QueryBoardPagesCountArgs = {
  where?: BoardPageWhereInput;
};


export type QueryBoardVersionArgs = {
  where: BoardVersionWhereUniqueInput;
};


export type QueryBoardVersionsArgs = {
  cursor?: InputMaybe<BoardVersionWhereUniqueInput>;
  orderBy?: Array<BoardVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardVersionWhereInput;
};


export type QueryBoardVersionsCountArgs = {
  where?: BoardVersionWhereInput;
};


export type QueryBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type QueryBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type QueryCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type QueryCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type QueryCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type QueryCommunityDraftArgs = {
  where: CommunityDraftWhereUniqueInput;
};


export type QueryCommunityDraftsArgs = {
  cursor?: InputMaybe<CommunityDraftWhereUniqueInput>;
  orderBy?: Array<CommunityDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityDraftWhereInput;
};


export type QueryCommunityDraftsCountArgs = {
  where?: CommunityDraftWhereInput;
};


export type QueryCommunityVersionArgs = {
  where: CommunityVersionWhereUniqueInput;
};


export type QueryCommunityVersionsArgs = {
  cursor?: InputMaybe<CommunityVersionWhereUniqueInput>;
  orderBy?: Array<CommunityVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityVersionWhereInput;
};


export type QueryCommunityVersionsCountArgs = {
  where?: CommunityVersionWhereInput;
};


export type QueryContactArgs = {
  where: ContactWhereUniqueInput;
};


export type QueryContactListItemArgs = {
  where: ContactListItemWhereUniqueInput;
};


export type QueryContactListItemsArgs = {
  cursor?: InputMaybe<ContactListItemWhereUniqueInput>;
  orderBy?: Array<ContactListItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ContactListItemWhereInput;
};


export type QueryContactListItemsCountArgs = {
  where?: ContactListItemWhereInput;
};


export type QueryContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type QueryContactsCountArgs = {
  where?: ContactWhereInput;
};


export type QueryDocumentArgs = {
  where: DocumentWhereUniqueInput;
};


export type QueryDocumentCollectionArgs = {
  where: DocumentCollectionWhereUniqueInput;
};


export type QueryDocumentCollectionsArgs = {
  cursor?: InputMaybe<DocumentCollectionWhereUniqueInput>;
  orderBy?: Array<DocumentCollectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentCollectionWhereInput;
};


export type QueryDocumentCollectionsCountArgs = {
  where?: DocumentCollectionWhereInput;
};


export type QueryDocumentListItemArgs = {
  where: DocumentListItemWhereUniqueInput;
};


export type QueryDocumentListItemsArgs = {
  cursor?: InputMaybe<DocumentListItemWhereUniqueInput>;
  orderBy?: Array<DocumentListItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DocumentListItemWhereInput;
};


export type QueryDocumentListItemsCountArgs = {
  where?: DocumentListItemWhereInput;
};


export type QueryDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type QueryDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type QueryEarlyVotingLocationArgs = {
  where: EarlyVotingLocationWhereUniqueInput;
};


export type QueryEarlyVotingLocationsArgs = {
  cursor?: InputMaybe<EarlyVotingLocationWhereUniqueInput>;
  orderBy?: Array<EarlyVotingLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EarlyVotingLocationWhereInput;
};


export type QueryEarlyVotingLocationsCountArgs = {
  where?: EarlyVotingLocationWhereInput;
};


export type QueryElectionArgs = {
  where: ElectionWhereUniqueInput;
};


export type QueryElectionDraftArgs = {
  where: ElectionDraftWhereUniqueInput;
};


export type QueryElectionDraftsArgs = {
  cursor?: InputMaybe<ElectionDraftWhereUniqueInput>;
  orderBy?: Array<ElectionDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionDraftWhereInput;
};


export type QueryElectionDraftsCountArgs = {
  where?: ElectionDraftWhereInput;
};


export type QueryElectionResultArgs = {
  where: ElectionResultWhereUniqueInput;
};


export type QueryElectionResultsArgs = {
  cursor?: InputMaybe<ElectionResultWhereUniqueInput>;
  orderBy?: Array<ElectionResultOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionResultWhereInput;
};


export type QueryElectionResultsCountArgs = {
  where?: ElectionResultWhereInput;
};


export type QueryElectionVersionArgs = {
  where: ElectionVersionWhereUniqueInput;
};


export type QueryElectionVersionsArgs = {
  cursor?: InputMaybe<ElectionVersionWhereUniqueInput>;
  orderBy?: Array<ElectionVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionVersionWhereInput;
};


export type QueryElectionVersionsCountArgs = {
  where?: ElectionVersionWhereInput;
};


export type QueryElectionsArgs = {
  cursor?: InputMaybe<ElectionWhereUniqueInput>;
  orderBy?: Array<ElectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionWhereInput;
};


export type QueryElectionsCountArgs = {
  where?: ElectionWhereInput;
};


export type QueryElectionsPageArgs = {
  where?: ElectionsPageWhereUniqueInput;
};


export type QueryElectionsPagesArgs = {
  cursor?: InputMaybe<ElectionsPageWhereUniqueInput>;
  orderBy?: Array<ElectionsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ElectionsPageWhereInput;
};


export type QueryElectionsPagesCountArgs = {
  where?: ElectionsPageWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventDraftArgs = {
  where: EventDraftWhereUniqueInput;
};


export type QueryEventDraftsArgs = {
  cursor?: InputMaybe<EventDraftWhereUniqueInput>;
  orderBy?: Array<EventDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventDraftWhereInput;
};


export type QueryEventDraftsCountArgs = {
  where?: EventDraftWhereInput;
};


export type QueryEventVersionArgs = {
  where: EventVersionWhereUniqueInput;
};


export type QueryEventVersionsArgs = {
  cursor?: InputMaybe<EventVersionWhereUniqueInput>;
  orderBy?: Array<EventVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventVersionWhereInput;
};


export type QueryEventVersionsCountArgs = {
  where?: EventVersionWhereInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
};


export type QueryExternalLinksArgs = {
  cursor?: InputMaybe<ExternalLinkWhereUniqueInput>;
  orderBy?: Array<ExternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ExternalLinkWhereInput;
};


export type QueryExternalLinksCountArgs = {
  where?: ExternalLinkWhereInput;
};


export type QueryFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type QueryFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type QueryFacilityArgs = {
  where: FacilityWhereUniqueInput;
};


export type QueryFacilityDraftArgs = {
  where: FacilityDraftWhereUniqueInput;
};


export type QueryFacilityDraftsArgs = {
  cursor?: InputMaybe<FacilityDraftWhereUniqueInput>;
  orderBy?: Array<FacilityDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityDraftWhereInput;
};


export type QueryFacilityDraftsCountArgs = {
  where?: FacilityDraftWhereInput;
};


export type QueryFacilityListItemArgs = {
  where: FacilityListItemWhereUniqueInput;
};


export type QueryFacilityListItemsArgs = {
  cursor?: InputMaybe<FacilityListItemWhereUniqueInput>;
  orderBy?: Array<FacilityListItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityListItemWhereInput;
};


export type QueryFacilityListItemsCountArgs = {
  where?: FacilityListItemWhereInput;
};


export type QueryFacilityVersionArgs = {
  where: FacilityVersionWhereUniqueInput;
};


export type QueryFacilityVersionsArgs = {
  cursor?: InputMaybe<FacilityVersionWhereUniqueInput>;
  orderBy?: Array<FacilityVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityVersionWhereInput;
};


export type QueryFacilityVersionsCountArgs = {
  where?: FacilityVersionWhereInput;
};


export type QueryFeaturedItemArgs = {
  where: FeaturedItemWhereUniqueInput;
};


export type QueryFeaturedItemsArgs = {
  cursor?: InputMaybe<FeaturedItemWhereUniqueInput>;
  orderBy?: Array<FeaturedItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FeaturedItemWhereInput;
};


export type QueryFeaturedItemsCountArgs = {
  where?: FeaturedItemWhereInput;
};


export type QueryGetInternalLinkArgs = {
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};


export type QueryGetPageArgs = {
  slug: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type QueryHighlightArgs = {
  where: HighlightWhereUniqueInput;
};


export type QueryHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: Array<HighlightOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: HighlightWhereInput;
};


export type QueryHighlightsCountArgs = {
  where?: HighlightWhereInput;
};


export type QueryHomePageArgs = {
  where?: HomePageWhereUniqueInput;
};


export type QueryHomePagesArgs = {
  cursor?: InputMaybe<HomePageWhereUniqueInput>;
  orderBy?: Array<HomePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: HomePageWhereInput;
};


export type QueryHomePagesCountArgs = {
  where?: HomePageWhereInput;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ImageWhereInput;
};


export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};


export type QueryInternalLinkArgs = {
  where: InternalLinkWhereUniqueInput;
};


export type QueryInternalLinksArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type QueryInternalLinksCountArgs = {
  where?: InternalLinkWhereInput;
};


export type QueryInternalSearchArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLandingPageArgs = {
  where: LandingPageWhereUniqueInput;
};


export type QueryLandingPagesArgs = {
  cursor?: InputMaybe<LandingPageWhereUniqueInput>;
  orderBy?: Array<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LandingPageWhereInput;
};


export type QueryLandingPagesCountArgs = {
  where?: LandingPageWhereInput;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryLocationsArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LocationWhereInput;
};


export type QueryLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type QueryOperatingHourArgs = {
  where: OperatingHourWhereUniqueInput;
};


export type QueryOperatingHoursArgs = {
  cursor?: InputMaybe<OperatingHourWhereUniqueInput>;
  orderBy?: Array<OperatingHourOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OperatingHourWhereInput;
};


export type QueryOperatingHoursCountArgs = {
  where?: OperatingHourWhereInput;
};


export type QueryOrgUnitArgs = {
  where: OrgUnitWhereUniqueInput;
};


export type QueryOrgUnitDraftArgs = {
  where: OrgUnitDraftWhereUniqueInput;
};


export type QueryOrgUnitDraftsArgs = {
  cursor?: InputMaybe<OrgUnitDraftWhereUniqueInput>;
  orderBy?: Array<OrgUnitDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitDraftWhereInput;
};


export type QueryOrgUnitDraftsCountArgs = {
  where?: OrgUnitDraftWhereInput;
};


export type QueryOrgUnitVersionArgs = {
  where: OrgUnitVersionWhereUniqueInput;
};


export type QueryOrgUnitVersionsArgs = {
  cursor?: InputMaybe<OrgUnitVersionWhereUniqueInput>;
  orderBy?: Array<OrgUnitVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitVersionWhereInput;
};


export type QueryOrgUnitVersionsCountArgs = {
  where?: OrgUnitVersionWhereInput;
};


export type QueryOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type QueryOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type QueryPageViewArgs = {
  where: PageViewWhereUniqueInput;
};


export type QueryPageViewsArgs = {
  cursor?: InputMaybe<PageViewWhereUniqueInput>;
  orderBy?: Array<PageViewOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PageViewWhereInput;
};


export type QueryPageViewsCountArgs = {
  where?: PageViewWhereInput;
};


export type QueryParkArgs = {
  where: ParkWhereUniqueInput;
};


export type QueryParkDraftArgs = {
  where: ParkDraftWhereUniqueInput;
};


export type QueryParkDraftsArgs = {
  cursor?: InputMaybe<ParkDraftWhereUniqueInput>;
  orderBy?: Array<ParkDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkDraftWhereInput;
};


export type QueryParkDraftsCountArgs = {
  where?: ParkDraftWhereInput;
};


export type QueryParkVersionArgs = {
  where: ParkVersionWhereUniqueInput;
};


export type QueryParkVersionsArgs = {
  cursor?: InputMaybe<ParkVersionWhereUniqueInput>;
  orderBy?: Array<ParkVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkVersionWhereInput;
};


export type QueryParkVersionsCountArgs = {
  where?: ParkVersionWhereInput;
};


export type QueryParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type QueryParksCountArgs = {
  where?: ParkWhereInput;
};


export type QueryPlanArgs = {
  where: PlanWhereUniqueInput;
};


export type QueryPlanCodeArgs = {
  where: PlanCodeWhereUniqueInput;
};


export type QueryPlanCodesArgs = {
  cursor?: InputMaybe<PlanCodeWhereUniqueInput>;
  orderBy?: Array<PlanCodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanCodeWhereInput;
};


export type QueryPlanCodesCountArgs = {
  where?: PlanCodeWhereInput;
};


export type QueryPlanDocumentArgs = {
  where: PlanDocumentWhereUniqueInput;
};


export type QueryPlanDocumentsArgs = {
  cursor?: InputMaybe<PlanDocumentWhereUniqueInput>;
  orderBy?: Array<PlanDocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanDocumentWhereInput;
};


export type QueryPlanDocumentsCountArgs = {
  where?: PlanDocumentWhereInput;
};


export type QueryPlanDraftArgs = {
  where: PlanDraftWhereUniqueInput;
};


export type QueryPlanDraftsArgs = {
  cursor?: InputMaybe<PlanDraftWhereUniqueInput>;
  orderBy?: Array<PlanDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanDraftWhereInput;
};


export type QueryPlanDraftsCountArgs = {
  where?: PlanDraftWhereInput;
};


export type QueryPlanVersionArgs = {
  where: PlanVersionWhereUniqueInput;
};


export type QueryPlanVersionsArgs = {
  cursor?: InputMaybe<PlanVersionWhereUniqueInput>;
  orderBy?: Array<PlanVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanVersionWhereInput;
};


export type QueryPlanVersionsCountArgs = {
  where?: PlanVersionWhereInput;
};


export type QueryPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type QueryPlansCountArgs = {
  where?: PlanWhereInput;
};


export type QueryPropositionArgs = {
  where: PropositionWhereUniqueInput;
};


export type QueryPropositionsArgs = {
  cursor?: InputMaybe<PropositionWhereUniqueInput>;
  orderBy?: Array<PropositionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PropositionWhereInput;
};


export type QueryPropositionsCountArgs = {
  where?: PropositionWhereInput;
};


export type QueryPublicNoticeArgs = {
  where: PublicNoticeWhereUniqueInput;
};


export type QueryPublicNoticeDraftArgs = {
  where: PublicNoticeDraftWhereUniqueInput;
};


export type QueryPublicNoticeDraftsArgs = {
  cursor?: InputMaybe<PublicNoticeDraftWhereUniqueInput>;
  orderBy?: Array<PublicNoticeDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeDraftWhereInput;
};


export type QueryPublicNoticeDraftsCountArgs = {
  where?: PublicNoticeDraftWhereInput;
};


export type QueryPublicNoticeVersionArgs = {
  where: PublicNoticeVersionWhereUniqueInput;
};


export type QueryPublicNoticeVersionsArgs = {
  cursor?: InputMaybe<PublicNoticeVersionWhereUniqueInput>;
  orderBy?: Array<PublicNoticeVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeVersionWhereInput;
};


export type QueryPublicNoticeVersionsCountArgs = {
  where?: PublicNoticeVersionWhereInput;
};


export type QueryPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type QueryPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type QueryRedirectArgs = {
  where: RedirectWhereUniqueInput;
};


export type QueryRedirectsArgs = {
  cursor?: InputMaybe<RedirectWhereUniqueInput>;
  orderBy?: Array<RedirectOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RedirectWhereInput;
};


export type QueryRedirectsCountArgs = {
  where?: RedirectWhereInput;
};


export type QueryServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type QueryServiceDraftArgs = {
  where: ServiceDraftWhereUniqueInput;
};


export type QueryServiceDraftsArgs = {
  cursor?: InputMaybe<ServiceDraftWhereUniqueInput>;
  orderBy?: Array<ServiceDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceDraftWhereInput;
};


export type QueryServiceDraftsCountArgs = {
  where?: ServiceDraftWhereInput;
};


export type QueryServiceVersionArgs = {
  where: ServiceVersionWhereUniqueInput;
};


export type QueryServiceVersionsArgs = {
  cursor?: InputMaybe<ServiceVersionWhereUniqueInput>;
  orderBy?: Array<ServiceVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceVersionWhereInput;
};


export type QueryServiceVersionsCountArgs = {
  where?: ServiceVersionWhereInput;
};


export type QueryServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type QueryServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryTopPagesArgs = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type QueryTopicDraftArgs = {
  where: TopicDraftWhereUniqueInput;
};


export type QueryTopicDraftsArgs = {
  cursor?: InputMaybe<TopicDraftWhereUniqueInput>;
  orderBy?: Array<TopicDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicDraftWhereInput;
};


export type QueryTopicDraftsCountArgs = {
  where?: TopicDraftWhereInput;
};


export type QueryTopicVersionArgs = {
  where: TopicVersionWhereUniqueInput;
};


export type QueryTopicVersionsArgs = {
  cursor?: InputMaybe<TopicVersionWhereUniqueInput>;
  orderBy?: Array<TopicVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicVersionWhereInput;
};


export type QueryTopicVersionsCountArgs = {
  where?: TopicVersionWhereInput;
};


export type QueryTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type QueryTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type QueryTrailArgs = {
  where: TrailWhereUniqueInput;
};


export type QueryTrailDraftArgs = {
  where: TrailDraftWhereUniqueInput;
};


export type QueryTrailDraftsArgs = {
  cursor?: InputMaybe<TrailDraftWhereUniqueInput>;
  orderBy?: Array<TrailDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailDraftWhereInput;
};


export type QueryTrailDraftsCountArgs = {
  where?: TrailDraftWhereInput;
};


export type QueryTrailVersionArgs = {
  where: TrailVersionWhereUniqueInput;
};


export type QueryTrailVersionsArgs = {
  cursor?: InputMaybe<TrailVersionWhereUniqueInput>;
  orderBy?: Array<TrailVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailVersionWhereInput;
};


export type QueryTrailVersionsCountArgs = {
  where?: TrailVersionWhereInput;
};


export type QueryTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type QueryTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type QueryUrlArgs = {
  where: UrlWhereUniqueInput;
};


export type QueryUrlsArgs = {
  cursor?: InputMaybe<UrlWhereUniqueInput>;
  orderBy?: Array<UrlOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UrlWhereInput;
};


export type QueryUrlsCountArgs = {
  where?: UrlWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserGroupArgs = {
  where: UserGroupWhereUniqueInput;
};


export type QueryUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type QueryUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Redirect = {
  __typename?: 'Redirect';
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  redirectMessage?: Maybe<Scalars['String']['output']>;
  to?: Maybe<InternalLink>;
};

export type RedirectCreateInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  redirectMessage?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<InternalLinkRelateToOneForCreateInput>;
};

export type RedirectOrderByInput = {
  from?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  redirectMessage?: InputMaybe<OrderDirection>;
};

export type RedirectRelateToOneForCreateInput = {
  connect?: InputMaybe<RedirectWhereUniqueInput>;
  create?: InputMaybe<RedirectCreateInput>;
};

export type RedirectRelateToOneForUpdateInput = {
  connect?: InputMaybe<RedirectWhereUniqueInput>;
  create?: InputMaybe<RedirectCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RedirectUpdateArgs = {
  data: RedirectUpdateInput;
  where: RedirectWhereUniqueInput;
};

export type RedirectUpdateInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  redirectMessage?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<InternalLinkRelateToOneForUpdateInput>;
};

export type RedirectWhereInput = {
  AND?: InputMaybe<Array<RedirectWhereInput>>;
  NOT?: InputMaybe<Array<RedirectWhereInput>>;
  OR?: InputMaybe<Array<RedirectWhereInput>>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  redirectMessage?: InputMaybe<StringFilter>;
  to?: InputMaybe<InternalLinkWhereInput>;
};

export type RedirectWhereUniqueInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Service = BasePage & BasePageWithSlug & {
  __typename?: 'Service';
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<ServiceVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<ServiceDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  primaryAction?: Maybe<ExternalLink>;
  primaryContact?: Maybe<Contact>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  secondaryActions?: Maybe<Array<ExternalLink>>;
  secondaryActionsCount?: Maybe<Scalars['Int']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<ServiceVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type ServiceAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type ServiceAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type ServiceBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type ServiceBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type ServiceCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type ServiceCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type ServiceContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type ServiceContactsCountArgs = {
  where?: ContactWhereInput;
};


export type ServiceDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ServiceDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ServiceDraftsArgs = {
  cursor?: InputMaybe<ServiceDraftWhereUniqueInput>;
  orderBy?: Array<ServiceDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceDraftWhereInput;
};


export type ServiceDraftsCountArgs = {
  where?: ServiceDraftWhereInput;
};


export type ServiceEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type ServiceEventsCountArgs = {
  where?: EventWhereInput;
};


export type ServiceFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type ServiceFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type ServiceOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type ServiceOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type ServiceParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type ServiceParksCountArgs = {
  where?: ParkWhereInput;
};


export type ServicePlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type ServicePlansCountArgs = {
  where?: PlanWhereInput;
};


export type ServicePublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type ServicePublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type ServiceSecondaryActionsArgs = {
  cursor?: InputMaybe<ExternalLinkWhereUniqueInput>;
  orderBy?: Array<ExternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ExternalLinkWhereInput;
};


export type ServiceSecondaryActionsCountArgs = {
  where?: ExternalLinkWhereInput;
};


export type ServiceServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type ServiceServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type ServiceTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ServiceTagsCountArgs = {
  where?: TagWhereInput;
};


export type ServiceTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type ServiceTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type ServiceTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type ServiceTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type ServiceUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ServiceUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type ServiceVersionsArgs = {
  cursor?: InputMaybe<ServiceVersionWhereUniqueInput>;
  orderBy?: Array<ServiceVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceVersionWhereInput;
};


export type ServiceVersionsCountArgs = {
  where?: ServiceVersionWhereInput;
};

export type ServiceCreateInput = {
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ServiceVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<ServiceDraftRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForCreateInput>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<ServiceVersionRelateToManyForCreateInput>;
};

export type ServiceDraft = {
  __typename?: 'ServiceDraft';
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Service>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  primaryAction?: Maybe<ExternalLink>;
  primaryContact?: Maybe<Contact>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  secondaryActions?: Maybe<Array<ExternalLink>>;
  secondaryActionsCount?: Maybe<Scalars['Int']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type ServiceDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type ServiceDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type ServiceDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type ServiceDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type ServiceDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type ServiceDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type ServiceDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type ServiceDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type ServiceDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ServiceDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ServiceDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type ServiceDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type ServiceDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type ServiceDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type ServiceDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type ServiceDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type ServiceDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type ServiceDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type ServiceDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type ServiceDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type ServiceDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type ServiceDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type ServiceDraftSecondaryActionsArgs = {
  cursor?: InputMaybe<ExternalLinkWhereUniqueInput>;
  orderBy?: Array<ExternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ExternalLinkWhereInput;
};


export type ServiceDraftSecondaryActionsCountArgs = {
  where?: ExternalLinkWhereInput;
};


export type ServiceDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type ServiceDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type ServiceDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ServiceDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type ServiceDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type ServiceDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type ServiceDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type ServiceDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type ServiceDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ServiceDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ServiceDraftCreateInput = {
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<ServiceRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForCreateInput>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type ServiceDraftManyRelationFilter = {
  every?: InputMaybe<ServiceDraftWhereInput>;
  none?: InputMaybe<ServiceDraftWhereInput>;
  some?: InputMaybe<ServiceDraftWhereInput>;
};

export type ServiceDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ServiceDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ServiceDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceDraftCreateInput>>;
};

export type ServiceDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ServiceDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceDraftCreateInput>>;
  disconnect?: InputMaybe<Array<ServiceDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceDraftWhereUniqueInput>>;
};

export type ServiceDraftUpdateArgs = {
  data: ServiceDraftUpdateInput;
  where: ServiceDraftWhereUniqueInput;
};

export type ServiceDraftUpdateInput = {
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForUpdateInput>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type ServiceDraftWhereInput = {
  AND?: InputMaybe<Array<ServiceDraftWhereInput>>;
  NOT?: InputMaybe<Array<ServiceDraftWhereInput>>;
  OR?: InputMaybe<Array<ServiceDraftWhereInput>>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<ServiceWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  primaryAction?: InputMaybe<ExternalLinkWhereInput>;
  primaryContact?: InputMaybe<ContactWhereInput>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  secondaryActions?: InputMaybe<ExternalLinkManyRelationFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type ServiceDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ServiceManyRelationFilter = {
  every?: InputMaybe<ServiceWhereInput>;
  none?: InputMaybe<ServiceWhereInput>;
  some?: InputMaybe<ServiceWhereInput>;
};

export type ServiceOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ServiceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceCreateInput>>;
};

export type ServiceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceCreateInput>>;
  disconnect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceWhereUniqueInput>>;
};

export type ServiceRelateToOneForCreateInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  create?: InputMaybe<ServiceCreateInput>;
};

export type ServiceRelateToOneForUpdateInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  create?: InputMaybe<ServiceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceUpdateInput = {
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ServiceVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<ServiceDraftRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForUpdateInput>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<ServiceVersionRelateToManyForUpdateInput>;
};

export type ServiceVersion = {
  __typename?: 'ServiceVersion';
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Service>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Service>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  primaryAction?: Maybe<ExternalLink>;
  primaryContact?: Maybe<Contact>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  secondaryActions?: Maybe<Array<ExternalLink>>;
  secondaryActionsCount?: Maybe<Scalars['Int']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type ServiceVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type ServiceVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type ServiceVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type ServiceVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type ServiceVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type ServiceVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type ServiceVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type ServiceVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type ServiceVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type ServiceVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type ServiceVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type ServiceVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type ServiceVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type ServiceVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type ServiceVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type ServiceVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type ServiceVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type ServiceVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type ServiceVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type ServiceVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type ServiceVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type ServiceVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type ServiceVersionSecondaryActionsArgs = {
  cursor?: InputMaybe<ExternalLinkWhereUniqueInput>;
  orderBy?: Array<ExternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ExternalLinkWhereInput;
};


export type ServiceVersionSecondaryActionsCountArgs = {
  where?: ExternalLinkWhereInput;
};


export type ServiceVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type ServiceVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type ServiceVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ServiceVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type ServiceVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type ServiceVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type ServiceVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type ServiceVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type ServiceVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type ServiceVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type ServiceVersionCreateInput = {
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<ServiceRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<ServiceRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForCreateInput>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type ServiceVersionManyRelationFilter = {
  every?: InputMaybe<ServiceVersionWhereInput>;
  none?: InputMaybe<ServiceVersionWhereInput>;
  some?: InputMaybe<ServiceVersionWhereInput>;
};

export type ServiceVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  editorNotes?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ServiceVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ServiceVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceVersionCreateInput>>;
};

export type ServiceVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ServiceVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceVersionCreateInput>>;
  disconnect?: InputMaybe<Array<ServiceVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceVersionWhereUniqueInput>>;
};

export type ServiceVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<ServiceVersionWhereUniqueInput>;
  create?: InputMaybe<ServiceVersionCreateInput>;
};

export type ServiceVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<ServiceVersionWhereUniqueInput>;
  create?: InputMaybe<ServiceVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceVersionUpdateArgs = {
  data: ServiceVersionUpdateInput;
  where: ServiceVersionWhereUniqueInput;
};

export type ServiceVersionUpdateInput = {
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForUpdateInput>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type ServiceVersionWhereInput = {
  AND?: InputMaybe<Array<ServiceVersionWhereInput>>;
  NOT?: InputMaybe<Array<ServiceVersionWhereInput>>;
  OR?: InputMaybe<Array<ServiceVersionWhereInput>>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<ServiceWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<ServiceWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  primaryAction?: InputMaybe<ExternalLinkWhereInput>;
  primaryContact?: InputMaybe<ContactWhereInput>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  secondaryActions?: InputMaybe<ExternalLinkManyRelationFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type ServiceVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<ServiceWhereUniqueInput>;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<ServiceVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<ServiceDraftManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  primaryAction?: InputMaybe<ExternalLinkWhereInput>;
  primaryContact?: InputMaybe<ContactWhereInput>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  secondaryActions?: InputMaybe<ExternalLinkManyRelationFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<ServiceVersionManyRelationFilter>;
};

export type ServiceWhereUniqueInput = {
  currentVersion?: InputMaybe<ServiceVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TopPage = {
  __typename?: 'TopPage';
  item?: Maybe<PageViewItemUnion>;
  pageId: Scalars['String']['output'];
  pageType: Scalars['String']['output'];
  totalViews: Scalars['Int']['output'];
};

export type Topic = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Topic';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<TopicVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<TopicDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Array<Highlight>>;
  highlightsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<TopicVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
};


export type TopicActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type TopicActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type TopicAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TopicAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type TopicBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type TopicBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type TopicCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type TopicCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type TopicContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type TopicContactsCountArgs = {
  where?: ContactWhereInput;
};


export type TopicDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type TopicDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type TopicDraftsArgs = {
  cursor?: InputMaybe<TopicDraftWhereUniqueInput>;
  orderBy?: Array<TopicDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicDraftWhereInput;
};


export type TopicDraftsCountArgs = {
  where?: TopicDraftWhereInput;
};


export type TopicEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TopicEventsCountArgs = {
  where?: EventWhereInput;
};


export type TopicFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type TopicFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type TopicHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: Array<HighlightOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: HighlightWhereInput;
};


export type TopicHighlightsCountArgs = {
  where?: HighlightWhereInput;
};


export type TopicOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type TopicOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type TopicParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type TopicParksCountArgs = {
  where?: ParkWhereInput;
};


export type TopicPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type TopicPlansCountArgs = {
  where?: PlanWhereInput;
};


export type TopicPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type TopicPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type TopicServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type TopicServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type TopicTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TopicTagsCountArgs = {
  where?: TagWhereInput;
};


export type TopicTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type TopicTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type TopicTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type TopicTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type TopicUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type TopicUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type TopicVersionsArgs = {
  cursor?: InputMaybe<TopicVersionWhereUniqueInput>;
  orderBy?: Array<TopicVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicVersionWhereInput;
};


export type TopicVersionsCountArgs = {
  where?: TopicVersionWhereInput;
};

export type TopicCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<TopicVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<TopicDraftRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<TopicVersionRelateToManyForCreateInput>;
};

export type TopicDraft = {
  __typename?: 'TopicDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Array<Highlight>>;
  highlightsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Topic>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type TopicDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type TopicDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type TopicDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TopicDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type TopicDraftBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type TopicDraftBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type TopicDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type TopicDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type TopicDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type TopicDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type TopicDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type TopicDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type TopicDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TopicDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type TopicDraftFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type TopicDraftFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type TopicDraftHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: Array<HighlightOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: HighlightWhereInput;
};


export type TopicDraftHighlightsCountArgs = {
  where?: HighlightWhereInput;
};


export type TopicDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type TopicDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type TopicDraftParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type TopicDraftParksCountArgs = {
  where?: ParkWhereInput;
};


export type TopicDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type TopicDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type TopicDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type TopicDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type TopicDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type TopicDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type TopicDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TopicDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type TopicDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type TopicDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type TopicDraftTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type TopicDraftTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type TopicDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type TopicDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type TopicDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<TopicRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type TopicDraftManyRelationFilter = {
  every?: InputMaybe<TopicDraftWhereInput>;
  none?: InputMaybe<TopicDraftWhereInput>;
  some?: InputMaybe<TopicDraftWhereInput>;
};

export type TopicDraftOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TopicDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TopicDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicDraftCreateInput>>;
};

export type TopicDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TopicDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicDraftCreateInput>>;
  disconnect?: InputMaybe<Array<TopicDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicDraftWhereUniqueInput>>;
};

export type TopicDraftUpdateArgs = {
  data: TopicDraftUpdateInput;
  where: TopicDraftWhereUniqueInput;
};

export type TopicDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<TopicRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type TopicDraftWhereInput = {
  AND?: InputMaybe<Array<TopicDraftWhereInput>>;
  NOT?: InputMaybe<Array<TopicDraftWhereInput>>;
  OR?: InputMaybe<Array<TopicDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<TopicWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type TopicDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TopicManyRelationFilter = {
  every?: InputMaybe<TopicWhereInput>;
  none?: InputMaybe<TopicWhereInput>;
  some?: InputMaybe<TopicWhereInput>;
};

export type TopicOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TopicRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicCreateInput>>;
};

export type TopicRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicCreateInput>>;
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicWhereUniqueInput>>;
};

export type TopicRelateToOneForCreateInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  create?: InputMaybe<TopicCreateInput>;
};

export type TopicRelateToOneForUpdateInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  create?: InputMaybe<TopicCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicUpdateArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<TopicVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<TopicDraftRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<TopicVersionRelateToManyForUpdateInput>;
};

export type TopicVersion = {
  __typename?: 'TopicVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Array<Highlight>>;
  highlightsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Topic>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Topic>;
  owner?: Maybe<User>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  trails?: Maybe<Array<Trail>>;
  trailsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
};


export type TopicVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type TopicVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type TopicVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TopicVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type TopicVersionBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BoardWhereInput;
};


export type TopicVersionBoardsCountArgs = {
  where?: BoardWhereInput;
};


export type TopicVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type TopicVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type TopicVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type TopicVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type TopicVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type TopicVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type TopicVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TopicVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type TopicVersionFacilitiesArgs = {
  cursor?: InputMaybe<FacilityWhereUniqueInput>;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FacilityWhereInput;
};


export type TopicVersionFacilitiesCountArgs = {
  where?: FacilityWhereInput;
};


export type TopicVersionHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: Array<HighlightOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: HighlightWhereInput;
};


export type TopicVersionHighlightsCountArgs = {
  where?: HighlightWhereInput;
};


export type TopicVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type TopicVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type TopicVersionParksArgs = {
  cursor?: InputMaybe<ParkWhereUniqueInput>;
  orderBy?: Array<ParkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ParkWhereInput;
};


export type TopicVersionParksCountArgs = {
  where?: ParkWhereInput;
};


export type TopicVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type TopicVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type TopicVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type TopicVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type TopicVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type TopicVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type TopicVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TopicVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type TopicVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type TopicVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type TopicVersionTrailsArgs = {
  cursor?: InputMaybe<TrailWhereUniqueInput>;
  orderBy?: Array<TrailOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailWhereInput;
};


export type TopicVersionTrailsCountArgs = {
  where?: TrailWhereInput;
};


export type TopicVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type TopicVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type TopicVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  isLive?: InputMaybe<TopicRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<TopicRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
};

export type TopicVersionManyRelationFilter = {
  every?: InputMaybe<TopicVersionWhereInput>;
  none?: InputMaybe<TopicVersionWhereInput>;
  some?: InputMaybe<TopicVersionWhereInput>;
};

export type TopicVersionOrderByInput = {
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TopicVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TopicVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicVersionCreateInput>>;
};

export type TopicVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TopicVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicVersionCreateInput>>;
  disconnect?: InputMaybe<Array<TopicVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicVersionWhereUniqueInput>>;
};

export type TopicVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<TopicVersionWhereUniqueInput>;
  create?: InputMaybe<TopicVersionCreateInput>;
};

export type TopicVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<TopicVersionWhereUniqueInput>;
  create?: InputMaybe<TopicVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicVersionUpdateArgs = {
  data: TopicVersionUpdateInput;
  where: TopicVersionWhereUniqueInput;
};

export type TopicVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  isLive?: InputMaybe<TopicRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<TopicRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type TopicVersionWhereInput = {
  AND?: InputMaybe<Array<TopicVersionWhereInput>>;
  NOT?: InputMaybe<Array<TopicVersionWhereInput>>;
  OR?: InputMaybe<Array<TopicVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<TopicWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<TopicWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
};

export type TopicVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<TopicWhereUniqueInput>;
};

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<TopicVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<TopicDraftManyRelationFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<TopicVersionManyRelationFilter>;
};

export type TopicWhereUniqueInput = {
  currentVersion?: InputMaybe<TopicVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Trail = BasePage & BasePageWithActions & BasePageWithSlug & {
  __typename?: 'Trail';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  atv?: Maybe<Scalars['Boolean']['output']>;
  biking?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  crossCountrySkiing?: Maybe<Scalars['Boolean']['output']>;
  currentVersion?: Maybe<TrailVersion>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  dirtBiking?: Maybe<Scalars['Boolean']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  dogWalking?: Maybe<Scalars['Boolean']['output']>;
  drafts?: Maybe<Array<TrailDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  elevationChange?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  fall?: Maybe<Scalars['Boolean']['output']>;
  frisbeeGolf?: Maybe<Scalars['Boolean']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hiking?: Maybe<Scalars['Boolean']['output']>;
  horsebackRiding?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  length?: Maybe<Scalars['String']['output']>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  mushing?: Maybe<Scalars['Boolean']['output']>;
  open?: Maybe<Scalars['Boolean']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  running?: Maybe<Scalars['Boolean']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  snowMachining?: Maybe<Scalars['Boolean']['output']>;
  snowshoeing?: Maybe<Scalars['Boolean']['output']>;
  spring?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summer?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  versions?: Maybe<Array<TrailVersion>>;
  versionsCount?: Maybe<Scalars['Int']['output']>;
  winter?: Maybe<Scalars['Boolean']['output']>;
};


export type TrailActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type TrailActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type TrailAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TrailAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type TrailCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type TrailCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type TrailContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type TrailContactsCountArgs = {
  where?: ContactWhereInput;
};


export type TrailDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type TrailDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type TrailDraftsArgs = {
  cursor?: InputMaybe<TrailDraftWhereUniqueInput>;
  orderBy?: Array<TrailDraftOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailDraftWhereInput;
};


export type TrailDraftsCountArgs = {
  where?: TrailDraftWhereInput;
};


export type TrailEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TrailEventsCountArgs = {
  where?: EventWhereInput;
};


export type TrailOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type TrailOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type TrailPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type TrailPlansCountArgs = {
  where?: PlanWhereInput;
};


export type TrailPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type TrailPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type TrailServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type TrailServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type TrailTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TrailTagsCountArgs = {
  where?: TagWhereInput;
};


export type TrailTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type TrailTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type TrailUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type TrailUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};


export type TrailVersionsArgs = {
  cursor?: InputMaybe<TrailVersionWhereUniqueInput>;
  orderBy?: Array<TrailVersionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TrailVersionWhereInput;
};


export type TrailVersionsCountArgs = {
  where?: TrailVersionWhereInput;
};

export type TrailCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  currentVersion?: InputMaybe<TrailVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  drafts?: InputMaybe<TrailDraftRelateToManyForCreateInput>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  snowMachining?: InputMaybe<Scalars['Boolean']['input']>;
  snowshoeing?: InputMaybe<Scalars['Boolean']['input']>;
  spring?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summer?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<TrailVersionRelateToManyForCreateInput>;
  winter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailDraft = {
  __typename?: 'TrailDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  atv?: Maybe<Scalars['Boolean']['output']>;
  biking?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  crossCountrySkiing?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  dirtBiking?: Maybe<Scalars['Boolean']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  dogWalking?: Maybe<Scalars['Boolean']['output']>;
  elevationChange?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  fall?: Maybe<Scalars['Boolean']['output']>;
  frisbeeGolf?: Maybe<Scalars['Boolean']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hiking?: Maybe<Scalars['Boolean']['output']>;
  horsebackRiding?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  length?: Maybe<Scalars['String']['output']>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  mushing?: Maybe<Scalars['Boolean']['output']>;
  open?: Maybe<Scalars['Boolean']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Trail>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  running?: Maybe<Scalars['Boolean']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  snowMachining?: Maybe<Scalars['Boolean']['output']>;
  snowshoeing?: Maybe<Scalars['Boolean']['output']>;
  spring?: Maybe<Scalars['Boolean']['output']>;
  summer?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  winter?: Maybe<Scalars['Boolean']['output']>;
};


export type TrailDraftActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type TrailDraftActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type TrailDraftAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TrailDraftAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type TrailDraftCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type TrailDraftCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type TrailDraftContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type TrailDraftContactsCountArgs = {
  where?: ContactWhereInput;
};


export type TrailDraftDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type TrailDraftDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type TrailDraftEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TrailDraftEventsCountArgs = {
  where?: EventWhereInput;
};


export type TrailDraftOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type TrailDraftOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type TrailDraftPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type TrailDraftPlansCountArgs = {
  where?: PlanWhereInput;
};


export type TrailDraftPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type TrailDraftPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type TrailDraftServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type TrailDraftServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type TrailDraftTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TrailDraftTagsCountArgs = {
  where?: TagWhereInput;
};


export type TrailDraftTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type TrailDraftTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type TrailDraftUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type TrailDraftUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type TrailDraftCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<TrailRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  snowMachining?: InputMaybe<Scalars['Boolean']['input']>;
  snowshoeing?: InputMaybe<Scalars['Boolean']['input']>;
  spring?: InputMaybe<Scalars['Boolean']['input']>;
  summer?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  winter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailDraftManyRelationFilter = {
  every?: InputMaybe<TrailDraftWhereInput>;
  none?: InputMaybe<TrailDraftWhereInput>;
  some?: InputMaybe<TrailDraftWhereInput>;
};

export type TrailDraftOrderByInput = {
  atv?: InputMaybe<OrderDirection>;
  biking?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  crossCountrySkiing?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  difficulty?: InputMaybe<OrderDirection>;
  dirtBiking?: InputMaybe<OrderDirection>;
  dogWalking?: InputMaybe<OrderDirection>;
  elevationChange?: InputMaybe<OrderDirection>;
  fall?: InputMaybe<OrderDirection>;
  frisbeeGolf?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  hiking?: InputMaybe<OrderDirection>;
  horsebackRiding?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  length?: InputMaybe<OrderDirection>;
  mushing?: InputMaybe<OrderDirection>;
  open?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  running?: InputMaybe<OrderDirection>;
  snowMachining?: InputMaybe<OrderDirection>;
  snowshoeing?: InputMaybe<OrderDirection>;
  spring?: InputMaybe<OrderDirection>;
  summer?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  winter?: InputMaybe<OrderDirection>;
};

export type TrailDraftRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TrailDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<TrailDraftCreateInput>>;
};

export type TrailDraftRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TrailDraftWhereUniqueInput>>;
  create?: InputMaybe<Array<TrailDraftCreateInput>>;
  disconnect?: InputMaybe<Array<TrailDraftWhereUniqueInput>>;
  set?: InputMaybe<Array<TrailDraftWhereUniqueInput>>;
};

export type TrailDraftUpdateArgs = {
  data: TrailDraftUpdateInput;
  where: TrailDraftWhereUniqueInput;
};

export type TrailDraftUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<TrailRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  snowMachining?: InputMaybe<Scalars['Boolean']['input']>;
  snowshoeing?: InputMaybe<Scalars['Boolean']['input']>;
  spring?: InputMaybe<Scalars['Boolean']['input']>;
  summer?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  winter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailDraftWhereInput = {
  AND?: InputMaybe<Array<TrailDraftWhereInput>>;
  NOT?: InputMaybe<Array<TrailDraftWhereInput>>;
  OR?: InputMaybe<Array<TrailDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  atv?: InputMaybe<BooleanFilter>;
  biking?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crossCountrySkiing?: InputMaybe<BooleanFilter>;
  description?: InputMaybe<StringFilter>;
  difficulty?: InputMaybe<StringNullableFilter>;
  dirtBiking?: InputMaybe<BooleanFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  dogWalking?: InputMaybe<BooleanFilter>;
  elevationChange?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  fall?: InputMaybe<BooleanFilter>;
  frisbeeGolf?: InputMaybe<BooleanFilter>;
  hiking?: InputMaybe<BooleanFilter>;
  horsebackRiding?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  length?: InputMaybe<StringFilter>;
  mushing?: InputMaybe<BooleanFilter>;
  open?: InputMaybe<BooleanFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<TrailWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  running?: InputMaybe<BooleanFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  snowMachining?: InputMaybe<BooleanFilter>;
  snowshoeing?: InputMaybe<BooleanFilter>;
  spring?: InputMaybe<BooleanFilter>;
  summer?: InputMaybe<BooleanFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  winter?: InputMaybe<BooleanFilter>;
};

export type TrailDraftWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TrailManyRelationFilter = {
  every?: InputMaybe<TrailWhereInput>;
  none?: InputMaybe<TrailWhereInput>;
  some?: InputMaybe<TrailWhereInput>;
};

export type TrailOrderByInput = {
  atv?: InputMaybe<OrderDirection>;
  biking?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  crossCountrySkiing?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  difficulty?: InputMaybe<OrderDirection>;
  dirtBiking?: InputMaybe<OrderDirection>;
  dogWalking?: InputMaybe<OrderDirection>;
  elevationChange?: InputMaybe<OrderDirection>;
  fall?: InputMaybe<OrderDirection>;
  frisbeeGolf?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  hiking?: InputMaybe<OrderDirection>;
  horsebackRiding?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  length?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  mushing?: InputMaybe<OrderDirection>;
  open?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  running?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  snowMachining?: InputMaybe<OrderDirection>;
  snowshoeing?: InputMaybe<OrderDirection>;
  spring?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  summer?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  winter?: InputMaybe<OrderDirection>;
};

export type TrailRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TrailWhereUniqueInput>>;
  create?: InputMaybe<Array<TrailCreateInput>>;
};

export type TrailRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TrailWhereUniqueInput>>;
  create?: InputMaybe<Array<TrailCreateInput>>;
  disconnect?: InputMaybe<Array<TrailWhereUniqueInput>>;
  set?: InputMaybe<Array<TrailWhereUniqueInput>>;
};

export type TrailRelateToOneForCreateInput = {
  connect?: InputMaybe<TrailWhereUniqueInput>;
  create?: InputMaybe<TrailCreateInput>;
};

export type TrailRelateToOneForUpdateInput = {
  connect?: InputMaybe<TrailWhereUniqueInput>;
  create?: InputMaybe<TrailCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailUpdateArgs = {
  data: TrailUpdateInput;
  where: TrailWhereUniqueInput;
};

export type TrailUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  currentVersion?: InputMaybe<TrailVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  drafts?: InputMaybe<TrailDraftRelateToManyForUpdateInput>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  snowMachining?: InputMaybe<Scalars['Boolean']['input']>;
  snowshoeing?: InputMaybe<Scalars['Boolean']['input']>;
  spring?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summer?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<TrailVersionRelateToManyForUpdateInput>;
  winter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailVersion = {
  __typename?: 'TrailVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  atv?: Maybe<Scalars['Boolean']['output']>;
  biking?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  crossCountrySkiing?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  dirtBiking?: Maybe<Scalars['Boolean']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  dogWalking?: Maybe<Scalars['Boolean']['output']>;
  elevationChange?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  fall?: Maybe<Scalars['Boolean']['output']>;
  frisbeeGolf?: Maybe<Scalars['Boolean']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hiking?: Maybe<Scalars['Boolean']['output']>;
  horsebackRiding?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Trail>;
  length?: Maybe<Scalars['String']['output']>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  mushing?: Maybe<Scalars['Boolean']['output']>;
  open?: Maybe<Scalars['Boolean']['output']>;
  orgUnits?: Maybe<Array<OrgUnit>>;
  orgUnitsCount?: Maybe<Scalars['Int']['output']>;
  original?: Maybe<Trail>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  redirect?: Maybe<Redirect>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  running?: Maybe<Scalars['Boolean']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  snowMachining?: Maybe<Scalars['Boolean']['output']>;
  snowshoeing?: Maybe<Scalars['Boolean']['output']>;
  spring?: Maybe<Scalars['Boolean']['output']>;
  summer?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  unpublishAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userGroups?: Maybe<Array<UserGroup>>;
  userGroupsCount?: Maybe<Scalars['Int']['output']>;
  winter?: Maybe<Scalars['Boolean']['output']>;
};


export type TrailVersionActionsArgs = {
  cursor?: InputMaybe<InternalLinkWhereUniqueInput>;
  orderBy?: Array<InternalLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InternalLinkWhereInput;
};


export type TrailVersionActionsCountArgs = {
  where?: InternalLinkWhereInput;
};


export type TrailVersionAssemblyDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TrailVersionAssemblyDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
};


export type TrailVersionCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type TrailVersionCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type TrailVersionContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: ContactWhereInput;
};


export type TrailVersionContactsCountArgs = {
  where?: ContactWhereInput;
};


export type TrailVersionDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  where?: DocumentWhereInput;
};


export type TrailVersionDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type TrailVersionEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TrailVersionEventsCountArgs = {
  where?: EventWhereInput;
};


export type TrailVersionOrgUnitsArgs = {
  cursor?: InputMaybe<OrgUnitWhereUniqueInput>;
  orderBy?: Array<OrgUnitOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrgUnitWhereInput;
};


export type TrailVersionOrgUnitsCountArgs = {
  where?: OrgUnitWhereInput;
};


export type TrailVersionPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlanWhereInput;
};


export type TrailVersionPlansCountArgs = {
  where?: PlanWhereInput;
};


export type TrailVersionPublicNoticesArgs = {
  cursor?: InputMaybe<PublicNoticeWhereUniqueInput>;
  orderBy?: Array<PublicNoticeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicNoticeWhereInput;
};


export type TrailVersionPublicNoticesCountArgs = {
  where?: PublicNoticeWhereInput;
};


export type TrailVersionServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServiceWhereInput;
};


export type TrailVersionServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type TrailVersionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TrailVersionTagsCountArgs = {
  where?: TagWhereInput;
};


export type TrailVersionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type TrailVersionTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type TrailVersionUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type TrailVersionUserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type TrailVersionCreateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForCreateInput>;
  address?: InputMaybe<LocationRelateToOneForCreateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<TrailRelateToOneForCreateInput>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<TrailRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  plans?: InputMaybe<PlanRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForCreateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  snowMachining?: InputMaybe<Scalars['Boolean']['input']>;
  snowshoeing?: InputMaybe<Scalars['Boolean']['input']>;
  spring?: InputMaybe<Scalars['Boolean']['input']>;
  summer?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  winter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailVersionManyRelationFilter = {
  every?: InputMaybe<TrailVersionWhereInput>;
  none?: InputMaybe<TrailVersionWhereInput>;
  some?: InputMaybe<TrailVersionWhereInput>;
};

export type TrailVersionOrderByInput = {
  atv?: InputMaybe<OrderDirection>;
  biking?: InputMaybe<OrderDirection>;
  body?: InputMaybe<MyOrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  crossCountrySkiing?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  difficulty?: InputMaybe<OrderDirection>;
  dirtBiking?: InputMaybe<OrderDirection>;
  dogWalking?: InputMaybe<OrderDirection>;
  elevationChange?: InputMaybe<OrderDirection>;
  fall?: InputMaybe<OrderDirection>;
  frisbeeGolf?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  hiking?: InputMaybe<OrderDirection>;
  horsebackRiding?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  length?: InputMaybe<OrderDirection>;
  mushing?: InputMaybe<OrderDirection>;
  open?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  running?: InputMaybe<OrderDirection>;
  snowMachining?: InputMaybe<OrderDirection>;
  snowshoeing?: InputMaybe<OrderDirection>;
  spring?: InputMaybe<OrderDirection>;
  summer?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  winter?: InputMaybe<OrderDirection>;
};

export type TrailVersionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TrailVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<TrailVersionCreateInput>>;
};

export type TrailVersionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TrailVersionWhereUniqueInput>>;
  create?: InputMaybe<Array<TrailVersionCreateInput>>;
  disconnect?: InputMaybe<Array<TrailVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<TrailVersionWhereUniqueInput>>;
};

export type TrailVersionRelateToOneForCreateInput = {
  connect?: InputMaybe<TrailVersionWhereUniqueInput>;
  create?: InputMaybe<TrailVersionCreateInput>;
};

export type TrailVersionRelateToOneForUpdateInput = {
  connect?: InputMaybe<TrailVersionWhereUniqueInput>;
  create?: InputMaybe<TrailVersionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailVersionUpdateArgs = {
  data: TrailVersionUpdateInput;
  where: TrailVersionWhereUniqueInput;
};

export type TrailVersionUpdateInput = {
  actions?: InputMaybe<InternalLinkRelateToManyForUpdateInput>;
  address?: InputMaybe<LocationRelateToOneForUpdateInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<TrailRelateToOneForUpdateInput>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<TrailRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  plans?: InputMaybe<PlanRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  redirect?: InputMaybe<RedirectRelateToOneForUpdateInput>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  snowMachining?: InputMaybe<Scalars['Boolean']['input']>;
  snowshoeing?: InputMaybe<Scalars['Boolean']['input']>;
  spring?: InputMaybe<Scalars['Boolean']['input']>;
  summer?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  winter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrailVersionWhereInput = {
  AND?: InputMaybe<Array<TrailVersionWhereInput>>;
  NOT?: InputMaybe<Array<TrailVersionWhereInput>>;
  OR?: InputMaybe<Array<TrailVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  atv?: InputMaybe<BooleanFilter>;
  biking?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crossCountrySkiing?: InputMaybe<BooleanFilter>;
  description?: InputMaybe<StringFilter>;
  difficulty?: InputMaybe<StringNullableFilter>;
  dirtBiking?: InputMaybe<BooleanFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  dogWalking?: InputMaybe<BooleanFilter>;
  elevationChange?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  fall?: InputMaybe<BooleanFilter>;
  frisbeeGolf?: InputMaybe<BooleanFilter>;
  hiking?: InputMaybe<BooleanFilter>;
  horsebackRiding?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<TrailWhereInput>;
  length?: InputMaybe<StringFilter>;
  mushing?: InputMaybe<BooleanFilter>;
  open?: InputMaybe<BooleanFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<TrailWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  running?: InputMaybe<BooleanFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  snowMachining?: InputMaybe<BooleanFilter>;
  snowshoeing?: InputMaybe<BooleanFilter>;
  spring?: InputMaybe<BooleanFilter>;
  summer?: InputMaybe<BooleanFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  winter?: InputMaybe<BooleanFilter>;
};

export type TrailVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<TrailWhereUniqueInput>;
};

export type TrailWhereInput = {
  AND?: InputMaybe<Array<TrailWhereInput>>;
  NOT?: InputMaybe<Array<TrailWhereInput>>;
  OR?: InputMaybe<Array<TrailWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  address?: InputMaybe<LocationWhereInput>;
  assemblyDistricts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  atv?: InputMaybe<BooleanFilter>;
  biking?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crossCountrySkiing?: InputMaybe<BooleanFilter>;
  currentVersion?: InputMaybe<TrailVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  difficulty?: InputMaybe<StringNullableFilter>;
  dirtBiking?: InputMaybe<BooleanFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  dogWalking?: InputMaybe<BooleanFilter>;
  drafts?: InputMaybe<TrailDraftManyRelationFilter>;
  elevationChange?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  fall?: InputMaybe<BooleanFilter>;
  frisbeeGolf?: InputMaybe<BooleanFilter>;
  hiking?: InputMaybe<BooleanFilter>;
  horsebackRiding?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  length?: InputMaybe<StringFilter>;
  mushing?: InputMaybe<BooleanFilter>;
  open?: InputMaybe<BooleanFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  plans?: InputMaybe<PlanManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  redirect?: InputMaybe<RedirectWhereInput>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  running?: InputMaybe<BooleanFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  snowMachining?: InputMaybe<BooleanFilter>;
  snowshoeing?: InputMaybe<BooleanFilter>;
  spring?: InputMaybe<BooleanFilter>;
  status?: InputMaybe<StringFilter>;
  summer?: InputMaybe<BooleanFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  unpublishAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userGroups?: InputMaybe<UserGroupManyRelationFilter>;
  versions?: InputMaybe<TrailVersionManyRelationFilter>;
  winter?: InputMaybe<BooleanFilter>;
};

export type TrailWhereUniqueInput = {
  currentVersion?: InputMaybe<TrailVersionWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Url = {
  __typename?: 'Url';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  indexInSearchEngine?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type UrlTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type UrlTagsCountArgs = {
  where?: TagWhereInput;
};

export type UrlCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  indexInSearchEngine?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UrlOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  indexInSearchEngine?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type UrlRelateToOneForCreateInput = {
  connect?: InputMaybe<UrlWhereUniqueInput>;
  create?: InputMaybe<UrlCreateInput>;
};

export type UrlRelateToOneForUpdateInput = {
  connect?: InputMaybe<UrlWhereUniqueInput>;
  create?: InputMaybe<UrlCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UrlUpdateArgs = {
  data: UrlUpdateInput;
  where: UrlWhereUniqueInput;
};

export type UrlUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  indexInSearchEngine?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UrlWhereInput = {
  AND?: InputMaybe<Array<UrlWhereInput>>;
  NOT?: InputMaybe<Array<UrlWhereInput>>;
  OR?: InputMaybe<Array<UrlWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  indexInSearchEngine?: InputMaybe<StringNullableFilter>;
  owner?: InputMaybe<UserWhereInput>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type UrlWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  authId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<UserGroup>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserGroupWhereInput;
};


export type UserGroupsCountArgs = {
  where?: UserGroupWhereInput;
};

export type UserCreateInput = {
  authId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type UserGroupUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type UserGroupUsersCountArgs = {
  where?: UserWhereInput;
};

export type UserGroupCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  users?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type UserGroupManyRelationFilter = {
  every?: InputMaybe<UserGroupWhereInput>;
  none?: InputMaybe<UserGroupWhereInput>;
  some?: InputMaybe<UserGroupWhereInput>;
};

export type UserGroupOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserGroupRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserGroupWhereUniqueInput>>;
  create?: InputMaybe<Array<UserGroupCreateInput>>;
};

export type UserGroupRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserGroupWhereUniqueInput>>;
  create?: InputMaybe<Array<UserGroupCreateInput>>;
  disconnect?: InputMaybe<Array<UserGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<UserGroupWhereUniqueInput>>;
};

export type UserGroupUpdateArgs = {
  data: UserGroupUpdateInput;
  where: UserGroupWhereUniqueInput;
};

export type UserGroupUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type UserGroupWhereInput = {
  AND?: InputMaybe<Array<UserGroupWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupWhereInput>>;
  OR?: InputMaybe<Array<UserGroupWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  users?: InputMaybe<UserManyRelationFilter>;
};

export type UserGroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  authId?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  authId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  authId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  groups?: InputMaybe<UserGroupManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  role?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  authId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturedItem = {
  __typename?: 'featuredItem';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkedItem?: Maybe<InternalLink>;
  order?: Maybe<Scalars['Int']['output']>;
};

export type FeaturedItemCreateInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  linkedItem?: InputMaybe<InternalLinkRelateToOneForCreateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedItemManyRelationFilter = {
  every?: InputMaybe<FeaturedItemWhereInput>;
  none?: InputMaybe<FeaturedItemWhereInput>;
  some?: InputMaybe<FeaturedItemWhereInput>;
};

export type FeaturedItemOrderByInput = {
  icon?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
};

export type FeaturedItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FeaturedItemWhereUniqueInput>>;
  create?: InputMaybe<Array<FeaturedItemCreateInput>>;
};

export type FeaturedItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FeaturedItemWhereUniqueInput>>;
  create?: InputMaybe<Array<FeaturedItemCreateInput>>;
  disconnect?: InputMaybe<Array<FeaturedItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FeaturedItemWhereUniqueInput>>;
};

export type FeaturedItemUpdateArgs = {
  data: FeaturedItemUpdateInput;
  where: FeaturedItemWhereUniqueInput;
};

export type FeaturedItemUpdateInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  linkedItem?: InputMaybe<InternalLinkRelateToOneForUpdateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedItemWhereInput = {
  AND?: InputMaybe<Array<FeaturedItemWhereInput>>;
  NOT?: InputMaybe<Array<FeaturedItemWhereInput>>;
  OR?: InputMaybe<Array<FeaturedItemWhereInput>>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  linkedItem?: InputMaybe<InternalLinkWhereInput>;
  order?: InputMaybe<IntFilter>;
};

export type FeaturedItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateDocumentsMutationVariables = Exact<{
  data: Array<DocumentCreateInput> | DocumentCreateInput;
}>;


export type CreateDocumentsMutation = { __typename?: 'Mutation', createDocuments?: Array<{ __typename?: 'Document', id: string, title?: string | null, file?: { __typename?: 'FileFieldOutput', filename: string, filesize: number, url: string } | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null } | null> | null };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', documentCollections?: Array<{ __typename?: 'DocumentCollection', id: string, title?: string | null }> | null };

export type GetServicesQueryVariables = Exact<{
  where: ServiceWhereInput;
}>;


export type GetServicesQuery = { __typename?: 'Query', services?: Array<{ __typename?: 'Service', title?: string | null, slug?: string | null, id: string }> | null };

export type DocumentCollectionQueryVariables = Exact<{
  where: DocumentCollectionWhereUniqueInput;
}>;


export type DocumentCollectionQuery = { __typename?: 'Query', documentCollection?: { __typename?: 'DocumentCollection', id: string, title?: string | null, documents?: Array<{ __typename?: 'Document', id: string, title?: string | null, file?: { __typename?: 'FileFieldOutput', filename: string, filesize: number, url: string } | null }> | null } | null };

export type DocumentCollectionsQueryVariables = Exact<{
  where: DocumentCollectionWhereInput;
}>;


export type DocumentCollectionsQuery = { __typename?: 'Query', documentCollections?: Array<{ __typename?: 'DocumentCollection', id: string, title?: string | null }> | null };

export type GetInternalLinkQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
}>;


export type GetInternalLinkQuery = { __typename?: 'Query', getInternalLink?: { __typename: 'AssemblyDistrict', title?: string | null } | { __typename: 'Board', title?: string | null } | { __typename: 'BoardPage', title?: string | null } | { __typename: 'Community', title?: string | null } | { __typename: 'Facility', title?: string | null } | { __typename: 'HomePage', title?: string | null } | { __typename: 'OrgUnit', title?: string | null } | { __typename: 'Park', title?: string | null } | { __typename: 'PublicNotice', title?: string | null } | { __typename: 'Service', title?: string | null } | { __typename: 'Topic', title?: string | null } | { __typename: 'Trail', title?: string | null } | { __typename: 'Url', title?: string | null } | null };

export type LinkSearchQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type LinkSearchQuery = { __typename?: 'Query', internalSearch?: Array<{ __typename: 'AssemblyDistrict', id: string, title?: string | null } | { __typename: 'Board', id: string, title?: string | null } | { __typename: 'BoardPage', id: string, title?: string | null } | { __typename: 'Community', id: string, title?: string | null } | { __typename: 'Facility', id: string, title?: string | null } | { __typename: 'HomePage', id: string, title?: string | null } | { __typename: 'OrgUnit', id: string, title?: string | null } | { __typename: 'Park', id: string, title?: string | null } | { __typename: 'PublicNotice', id: string, title?: string | null } | { __typename: 'Service', id: string, title?: string | null } | { __typename: 'Topic' } | { __typename: 'Trail', id: string, title?: string | null } | { __typename: 'Url', id: string, title?: string | null } | null> | null };

export type UploadImageMutationVariables = Exact<{
  upload: Scalars['Upload']['input'];
  title: Scalars['String']['input'];
}>;


export type UploadImageMutation = { __typename?: 'Mutation', createImage?: { __typename?: 'Image', file?: { __typename?: 'ImageFieldOutput', url: string } | null } | null };


export const CreateDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDocumentsMutation, CreateDocumentsMutationVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const DocumentCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentCollectionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"documents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DocumentCollectionQuery, DocumentCollectionQueryVariables>;
export const DocumentCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentCollectionWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DocumentCollectionsQuery, DocumentCollectionsQueryVariables>;
export const GetInternalLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInternalLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInternalLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AssemblyDistrict"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Board"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Community"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facility"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Park"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicNotice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Url"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetInternalLinkQuery, GetInternalLinkQueryVariables>;
export const LinkSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LinkSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"internalSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AssemblyDistrict"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Board"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Community"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facility"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Park"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicNotice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Url"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<LinkSearchQuery, LinkSearchQueryVariables>;
export const UploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"upload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"file"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"upload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"upload"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<UploadImageMutation, UploadImageMutationVariables>;