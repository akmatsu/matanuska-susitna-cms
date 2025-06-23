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

export type AssemblyDistrict = BasePage & {
  __typename?: 'AssemblyDistrict';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  bio?: Maybe<Scalars['String']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
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
  fax?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  memberName?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  termEnd?: Maybe<Scalars['DateTime']['output']>;
  termStart?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<AssemblyDistrictVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<AssemblyDistrictDraftRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
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
  bio?: Maybe<Scalars['String']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  memberName?: Maybe<Scalars['String']['output']>;
  original?: Maybe<AssemblyDistrict>;
  owner?: Maybe<User>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  termEnd?: Maybe<Scalars['DateTime']['output']>;
  termStart?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
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
  bio?: InputMaybe<StringFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  memberName?: InputMaybe<StringFilter>;
  original?: InputMaybe<AssemblyDistrictWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  phone?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<ImageWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  termEnd?: InputMaybe<DateTimeNullableFilter>;
  termStart?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<AssemblyDistrictVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<AssemblyDistrictDraftRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
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
  bio?: Maybe<Scalars['String']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<AssemblyDistrict>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  memberName?: Maybe<Scalars['String']['output']>;
  original?: Maybe<AssemblyDistrict>;
  owner?: Maybe<User>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  termEnd?: Maybe<Scalars['DateTime']['output']>;
  termStart?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<AssemblyDistrictRelateToOneForCreateInput>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<AssemblyDistrictRelateToOneForUpdateInput>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<AssemblyDistrictRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  termEnd?: InputMaybe<Scalars['DateTime']['input']>;
  termStart?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
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
  bio?: InputMaybe<StringFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<AssemblyDistrictWhereInput>;
  memberName?: InputMaybe<StringFilter>;
  original?: InputMaybe<AssemblyDistrictWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  phone?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<ImageWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  termEnd?: InputMaybe<DateTimeNullableFilter>;
  termStart?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  bio?: InputMaybe<StringFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<AssemblyDistrictVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<AssemblyDistrictDraftManyRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  memberName?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  phone?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<ImageWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  termEnd?: InputMaybe<DateTimeNullableFilter>;
  termStart?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  description?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum BlueHarvestImageOrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Board = BasePage & {
  __typename?: 'Board';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<BoardVersion>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<BoardDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  linkToAgendas?: Maybe<ExternalLink>;
  linkToPublicOpinionMessage?: Maybe<ExternalLink>;
  linkToResolutions?: Maybe<ExternalLink>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  meetingSchedule?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
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


export type BoardDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BoardDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<BoardVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<BoardDraftRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  meetingSchedule?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  linkToAgendas?: Maybe<ExternalLink>;
  linkToPublicOpinionMessage?: Maybe<ExternalLink>;
  linkToResolutions?: Maybe<ExternalLink>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  meetingSchedule?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Board>;
  owner?: Maybe<User>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
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


export type BoardDraftDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BoardDraftDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  meetingSchedule?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<BoardRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  meetingSchedule?: InputMaybe<OrderDirection>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  meetingSchedule?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<BoardRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  linkToAgendas?: InputMaybe<ExternalLinkWhereInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkWhereInput>;
  linkToResolutions?: InputMaybe<ExternalLinkWhereInput>;
  meetingSchedule?: InputMaybe<StringFilter>;
  original?: InputMaybe<BoardWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
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
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  meetingSchedule?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unpublishAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BoardPage = {
  __typename?: 'BoardPage';
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<BoardVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<BoardDraftRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  meetingSchedule?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Board>;
  linkToAgendas?: Maybe<ExternalLink>;
  linkToPublicOpinionMessage?: Maybe<ExternalLink>;
  linkToResolutions?: Maybe<ExternalLink>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  meetingSchedule?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Board>;
  owner?: Maybe<User>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
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


export type BoardVersionDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type BoardVersionDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<BoardRelateToOneForCreateInput>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  meetingSchedule?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<BoardRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  meetingSchedule?: InputMaybe<OrderDirection>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<BoardRelateToOneForUpdateInput>;
  linkToAgendas?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  linkToResolutions?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  meetingSchedule?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<BoardRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  isLive?: InputMaybe<BoardWhereInput>;
  linkToAgendas?: InputMaybe<ExternalLinkWhereInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkWhereInput>;
  linkToResolutions?: InputMaybe<ExternalLinkWhereInput>;
  meetingSchedule?: InputMaybe<StringFilter>;
  original?: InputMaybe<BoardWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
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
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<BoardVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<BoardDraftManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  linkToAgendas?: InputMaybe<ExternalLinkWhereInput>;
  linkToPublicOpinionMessage?: InputMaybe<ExternalLinkWhereInput>;
  linkToResolutions?: InputMaybe<ExternalLinkWhereInput>;
  meetingSchedule?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
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

export type Community = BasePage & {
  __typename?: 'Community';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<CommunityVersion>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<CommunityDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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


export type CommunityDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type CommunityDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<CommunityVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<CommunityDraftRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  versions?: InputMaybe<CommunityVersionRelateToManyForCreateInput>;
};

export type CommunityDraft = {
  __typename?: 'CommunityDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Community>;
  owner?: Maybe<User>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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


export type CommunityDraftDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type CommunityDraftDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<CommunityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
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
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type CommunityDraftWhereInput = {
  AND?: InputMaybe<Array<CommunityDraftWhereInput>>;
  NOT?: InputMaybe<Array<CommunityDraftWhereInput>>;
  OR?: InputMaybe<Array<CommunityDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  original?: InputMaybe<CommunityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<CommunityVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<CommunityDraftRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  versions?: InputMaybe<CommunityVersionRelateToManyForUpdateInput>;
};

export type CommunityVersion = {
  __typename?: 'CommunityVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Community>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Community>;
  owner?: Maybe<User>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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


export type CommunityVersionDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type CommunityVersionDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<CommunityRelateToOneForCreateInput>;
  original?: InputMaybe<CommunityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  original?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type CommunityVersionWhereInput = {
  AND?: InputMaybe<Array<CommunityVersionWhereInput>>;
  NOT?: InputMaybe<Array<CommunityVersionWhereInput>>;
  OR?: InputMaybe<Array<CommunityVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<CommunityWhereInput>;
  original?: InputMaybe<CommunityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<CommunityVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<CommunityDraftManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ContactCreateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactWhereInput = {
  AND?: InputMaybe<Array<ContactWhereInput>>;
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  OR?: InputMaybe<Array<ContactWhereInput>>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
};

export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type Facility = BasePage & {
  __typename?: 'Facility';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<FacilityVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<FacilityDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<FacilityVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<FacilityDraftRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Facility>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  original?: InputMaybe<FacilityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  original?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  original?: InputMaybe<FacilityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<FacilityVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<FacilityDraftRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Facility>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Facility>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  isLive?: InputMaybe<FacilityRelateToOneForCreateInput>;
  original?: InputMaybe<FacilityRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  isLive?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  original?: InputMaybe<FacilityRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<FacilityWhereInput>;
  original?: InputMaybe<FacilityWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<FacilityVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<FacilityDraftManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  linkedItem?: Maybe<InternalLink>;
  message?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HighlightCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  linkedItem?: InputMaybe<InternalLinkRelateToOneForCreateInput>;
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type HighlightRelateToOneForCreateInput = {
  connect?: InputMaybe<HighlightWhereUniqueInput>;
  create?: InputMaybe<HighlightCreateInput>;
};

export type HighlightRelateToOneForUpdateInput = {
  connect?: InputMaybe<HighlightWhereUniqueInput>;
  create?: InputMaybe<HighlightCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HighlightUpdateArgs = {
  data: HighlightUpdateInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  linkedItem?: InputMaybe<InternalLinkRelateToOneForUpdateInput>;
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HighlightWhereInput = {
  AND?: InputMaybe<Array<HighlightWhereInput>>;
  NOT?: InputMaybe<Array<HighlightWhereInput>>;
  OR?: InputMaybe<Array<HighlightWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  linkedItem?: InputMaybe<InternalLinkWhereInput>;
  message?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type HighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  highlightOne?: Maybe<Highlight>;
  highlightThree?: Maybe<Highlight>;
  highlightTwo?: Maybe<Highlight>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  toolbeltFour?: Maybe<Highlight>;
  toolbeltOne?: Maybe<Highlight>;
  toolbeltThree?: Maybe<Highlight>;
  toolbeltTwo?: Maybe<Highlight>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlightOne?: InputMaybe<HighlightRelateToOneForCreateInput>;
  highlightThree?: InputMaybe<HighlightRelateToOneForCreateInput>;
  highlightTwo?: InputMaybe<HighlightRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  toolbeltFour?: InputMaybe<HighlightRelateToOneForCreateInput>;
  toolbeltOne?: InputMaybe<HighlightRelateToOneForCreateInput>;
  toolbeltThree?: InputMaybe<HighlightRelateToOneForCreateInput>;
  toolbeltTwo?: InputMaybe<HighlightRelateToOneForCreateInput>;
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
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlightOne?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  highlightThree?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  highlightTwo?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  toolbeltFour?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  toolbeltOne?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  toolbeltThree?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  toolbeltTwo?: InputMaybe<HighlightRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageWhereInput = {
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  highlightOne?: InputMaybe<HighlightWhereInput>;
  highlightThree?: InputMaybe<HighlightWhereInput>;
  highlightTwo?: InputMaybe<HighlightWhereInput>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  toolbeltFour?: InputMaybe<HighlightWhereInput>;
  toolbeltOne?: InputMaybe<HighlightWhereInput>;
  toolbeltThree?: InputMaybe<HighlightWhereInput>;
  toolbeltTwo?: InputMaybe<HighlightWhereInput>;
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
  title?: InputMaybe<Scalars['String']['input']>;
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

export type LinkedItemUnion = AssemblyDistrict | Community | Facility | OrgUnit | Park | Service | Trail | Url;

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
  createContacts?: Maybe<Array<Maybe<Contact>>>;
  createDocument?: Maybe<Document>;
  createDocumentCollection?: Maybe<DocumentCollection>;
  createDocumentCollections?: Maybe<Array<Maybe<DocumentCollection>>>;
  createDocuments?: Maybe<Array<Maybe<Document>>>;
  createExternalLink?: Maybe<ExternalLink>;
  createExternalLinks?: Maybe<Array<Maybe<ExternalLink>>>;
  createFacilities?: Maybe<Array<Maybe<Facility>>>;
  createFacility?: Maybe<Facility>;
  createFacilityDraft?: Maybe<FacilityDraft>;
  createFacilityDrafts?: Maybe<Array<Maybe<FacilityDraft>>>;
  createFacilityVersion?: Maybe<FacilityVersion>;
  createFacilityVersions?: Maybe<Array<Maybe<FacilityVersion>>>;
  createHighlight?: Maybe<Highlight>;
  createHighlights?: Maybe<Array<Maybe<Highlight>>>;
  createHomePage?: Maybe<HomePage>;
  createHomePages?: Maybe<Array<Maybe<HomePage>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInternalLink?: Maybe<InternalLink>;
  createInternalLinks?: Maybe<Array<Maybe<InternalLink>>>;
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
  createPark?: Maybe<Park>;
  createParkDraft?: Maybe<ParkDraft>;
  createParkDrafts?: Maybe<Array<Maybe<ParkDraft>>>;
  createParkVersion?: Maybe<ParkVersion>;
  createParkVersions?: Maybe<Array<Maybe<ParkVersion>>>;
  createParks?: Maybe<Array<Maybe<Park>>>;
  createPublicNotice?: Maybe<PublicNotice>;
  createPublicNoticeDraft?: Maybe<PublicNoticeDraft>;
  createPublicNoticeDrafts?: Maybe<Array<Maybe<PublicNoticeDraft>>>;
  createPublicNoticeVersion?: Maybe<PublicNoticeVersion>;
  createPublicNoticeVersions?: Maybe<Array<Maybe<PublicNoticeVersion>>>;
  createPublicNotices?: Maybe<Array<Maybe<PublicNotice>>>;
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
  deleteContacts?: Maybe<Array<Maybe<Contact>>>;
  deleteDocument?: Maybe<Document>;
  deleteDocumentCollection?: Maybe<DocumentCollection>;
  deleteDocumentCollections?: Maybe<Array<Maybe<DocumentCollection>>>;
  deleteDocuments?: Maybe<Array<Maybe<Document>>>;
  deleteExternalLink?: Maybe<ExternalLink>;
  deleteExternalLinks?: Maybe<Array<Maybe<ExternalLink>>>;
  deleteFacilities?: Maybe<Array<Maybe<Facility>>>;
  deleteFacility?: Maybe<Facility>;
  deleteFacilityDraft?: Maybe<FacilityDraft>;
  deleteFacilityDrafts?: Maybe<Array<Maybe<FacilityDraft>>>;
  deleteFacilityVersion?: Maybe<FacilityVersion>;
  deleteFacilityVersions?: Maybe<Array<Maybe<FacilityVersion>>>;
  deleteHighlight?: Maybe<Highlight>;
  deleteHighlights?: Maybe<Array<Maybe<Highlight>>>;
  deleteHomePage?: Maybe<HomePage>;
  deleteHomePages?: Maybe<Array<Maybe<HomePage>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteInternalLink?: Maybe<InternalLink>;
  deleteInternalLinks?: Maybe<Array<Maybe<InternalLink>>>;
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
  deletePark?: Maybe<Park>;
  deleteParkDraft?: Maybe<ParkDraft>;
  deleteParkDrafts?: Maybe<Array<Maybe<ParkDraft>>>;
  deleteParkVersion?: Maybe<ParkVersion>;
  deleteParkVersions?: Maybe<Array<Maybe<ParkVersion>>>;
  deleteParks?: Maybe<Array<Maybe<Park>>>;
  deletePublicNotice?: Maybe<PublicNotice>;
  deletePublicNoticeDraft?: Maybe<PublicNoticeDraft>;
  deletePublicNoticeDrafts?: Maybe<Array<Maybe<PublicNoticeDraft>>>;
  deletePublicNoticeVersion?: Maybe<PublicNoticeVersion>;
  deletePublicNoticeVersions?: Maybe<Array<Maybe<PublicNoticeVersion>>>;
  deletePublicNotices?: Maybe<Array<Maybe<PublicNotice>>>;
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
  updateContacts?: Maybe<Array<Maybe<Contact>>>;
  updateDocument?: Maybe<Document>;
  updateDocumentCollection?: Maybe<DocumentCollection>;
  updateDocumentCollections?: Maybe<Array<Maybe<DocumentCollection>>>;
  updateDocuments?: Maybe<Array<Maybe<Document>>>;
  updateExternalLink?: Maybe<ExternalLink>;
  updateExternalLinks?: Maybe<Array<Maybe<ExternalLink>>>;
  updateFacilities?: Maybe<Array<Maybe<Facility>>>;
  updateFacility?: Maybe<Facility>;
  updateFacilityDraft?: Maybe<FacilityDraft>;
  updateFacilityDrafts?: Maybe<Array<Maybe<FacilityDraft>>>;
  updateFacilityVersion?: Maybe<FacilityVersion>;
  updateFacilityVersions?: Maybe<Array<Maybe<FacilityVersion>>>;
  updateHighlight?: Maybe<Highlight>;
  updateHighlights?: Maybe<Array<Maybe<Highlight>>>;
  updateHomePage?: Maybe<HomePage>;
  updateHomePages?: Maybe<Array<Maybe<HomePage>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateInternalLink?: Maybe<InternalLink>;
  updateInternalLinks?: Maybe<Array<Maybe<InternalLink>>>;
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
  updatePark?: Maybe<Park>;
  updateParkDraft?: Maybe<ParkDraft>;
  updateParkDrafts?: Maybe<Array<Maybe<ParkDraft>>>;
  updateParkVersion?: Maybe<ParkVersion>;
  updateParkVersions?: Maybe<Array<Maybe<ParkVersion>>>;
  updateParks?: Maybe<Array<Maybe<Park>>>;
  updatePublicNotice?: Maybe<PublicNotice>;
  updatePublicNoticeDraft?: Maybe<PublicNoticeDraft>;
  updatePublicNoticeDrafts?: Maybe<Array<Maybe<PublicNoticeDraft>>>;
  updatePublicNoticeVersion?: Maybe<PublicNoticeVersion>;
  updatePublicNoticeVersions?: Maybe<Array<Maybe<PublicNoticeVersion>>>;
  updatePublicNotices?: Maybe<Array<Maybe<PublicNotice>>>;
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


export type MutationCreateDocumentsArgs = {
  data: Array<DocumentCreateInput>;
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


export type MutationCreateFacilityVersionArgs = {
  data: FacilityVersionCreateInput;
};


export type MutationCreateFacilityVersionsArgs = {
  data: Array<FacilityVersionCreateInput>;
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


export type MutationDeleteDocumentsArgs = {
  where: Array<DocumentWhereUniqueInput>;
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


export type MutationDeleteFacilityVersionArgs = {
  where: FacilityVersionWhereUniqueInput;
};


export type MutationDeleteFacilityVersionsArgs = {
  where: Array<FacilityVersionWhereUniqueInput>;
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


export type MutationUpdateDocumentsArgs = {
  data: Array<DocumentUpdateArgs>;
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


export type MutationUpdateFacilityVersionArgs = {
  data: FacilityVersionUpdateInput;
  where: FacilityVersionWhereUniqueInput;
};


export type MutationUpdateFacilityVersionsArgs = {
  data: Array<FacilityVersionUpdateArgs>;
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

export type OrgUnit = {
  __typename?: 'OrgUnit';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<OrgUnit>>;
  childrenCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<OrgUnitVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<OrgUnitDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  parent?: Maybe<OrgUnit>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  showPage?: Maybe<Scalars['Boolean']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<OrgUnitVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<OrgUnitDraftRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  showPage?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForCreateInput>;
  versions?: InputMaybe<OrgUnitVersionRelateToManyForCreateInput>;
};

export type OrgUnitDraft = {
  __typename?: 'OrgUnitDraft';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<OrgUnit>>;
  childrenCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<OrgUnit>;
  owner?: Maybe<User>;
  parent?: Maybe<OrgUnit>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  showPage?: Maybe<Scalars['Boolean']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  showPage?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
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
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publish?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  showPage?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  showPage?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type OrgUnitDraftWhereInput = {
  AND?: InputMaybe<Array<OrgUnitDraftWhereInput>>;
  NOT?: InputMaybe<Array<OrgUnitDraftWhereInput>>;
  OR?: InputMaybe<Array<OrgUnitDraftWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  children?: InputMaybe<OrgUnitManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  original?: InputMaybe<OrgUnitWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<OrgUnitWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  showPage?: InputMaybe<BooleanFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  makeDrafts?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  showPage?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<OrgUnitVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<OrgUnitDraftRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  showPage?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
  versions?: InputMaybe<OrgUnitVersionRelateToManyForUpdateInput>;
};

export type OrgUnitVersion = {
  __typename?: 'OrgUnitVersion';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<OrgUnit>>;
  childrenCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<OrgUnit>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<OrgUnit>;
  owner?: Maybe<User>;
  parent?: Maybe<OrgUnit>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  showPage?: Maybe<Scalars['Boolean']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  original?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  showPage?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
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
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  heroImage?: InputMaybe<BlueHarvestImageOrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishAt?: InputMaybe<OrderDirection>;
  republish?: InputMaybe<OrderDirection>;
  reviewDate?: InputMaybe<OrderDirection>;
  showPage?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  original?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parent?: InputMaybe<OrgUnitRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  showPage?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  unpublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<UserGroupRelateToManyForUpdateInput>;
};

export type OrgUnitVersionWhereInput = {
  AND?: InputMaybe<Array<OrgUnitVersionWhereInput>>;
  NOT?: InputMaybe<Array<OrgUnitVersionWhereInput>>;
  OR?: InputMaybe<Array<OrgUnitVersionWhereInput>>;
  actions?: InputMaybe<InternalLinkManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  children?: InputMaybe<OrgUnitManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<OrgUnitWhereInput>;
  original?: InputMaybe<OrgUnitWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<OrgUnitWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  showPage?: InputMaybe<BooleanFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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
  body?: InputMaybe<MyStringFilter>;
  children?: InputMaybe<OrgUnitManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<OrgUnitVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<OrgUnitDraftManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parent?: InputMaybe<OrgUnitWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  showPage?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
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

export type Page = AssemblyDistrict | Board | Community | Facility | OrgUnit | Park | PublicNotice | Service | Topic | Trail;

export type Park = BasePage & {
  __typename?: 'Park';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<ParkVersion>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<ParkDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  makeDrafts?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ParkVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<ParkDraftRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Park>;
  owner?: Maybe<User>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  original?: InputMaybe<ParkRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  original?: InputMaybe<ParkRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  original?: InputMaybe<ParkWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ParkVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<ParkDraftRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Array<OperatingHour>>;
  hoursCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Park>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Park>;
  owner?: Maybe<User>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForCreateInput>;
  isLive?: InputMaybe<ParkRelateToOneForCreateInput>;
  original?: InputMaybe<ParkRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<OperatingHourRelateToManyForUpdateInput>;
  isLive?: InputMaybe<ParkRelateToOneForUpdateInput>;
  original?: InputMaybe<ParkRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<ParkWhereInput>;
  original?: InputMaybe<ParkWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<ParkVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<ParkDraftManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  hours?: InputMaybe<OperatingHourManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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

export type PublicNotice = BasePage & {
  __typename?: 'PublicNotice';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  assemblyDistricts?: Maybe<Array<AssemblyDistrict>>;
  assemblyDistrictsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
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
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
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
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
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
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<PublicNoticeWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
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
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<PublicNoticeRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForCreateInput>;
  trails?: InputMaybe<TrailRelateToManyForCreateInput>;
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
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<PublicNoticeRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<PublicNoticeRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>;
  trails?: InputMaybe<TrailRelateToManyForUpdateInput>;
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
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<PublicNoticeWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<PublicNoticeWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicManyRelationFilter>;
  trails?: InputMaybe<TrailManyRelationFilter>;
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
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  document?: Maybe<Document>;
  documentCollection?: Maybe<DocumentCollection>;
  documentCollections?: Maybe<Array<DocumentCollection>>;
  documentCollectionsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  externalLink?: Maybe<ExternalLink>;
  externalLinks?: Maybe<Array<ExternalLink>>;
  externalLinksCount?: Maybe<Scalars['Int']['output']>;
  facilities?: Maybe<Array<Facility>>;
  facilitiesCount?: Maybe<Scalars['Int']['output']>;
  facility?: Maybe<Facility>;
  facilityDraft?: Maybe<FacilityDraft>;
  facilityDrafts?: Maybe<Array<FacilityDraft>>;
  facilityDraftsCount?: Maybe<Scalars['Int']['output']>;
  facilityVersion?: Maybe<FacilityVersion>;
  facilityVersions?: Maybe<Array<FacilityVersion>>;
  facilityVersionsCount?: Maybe<Scalars['Int']['output']>;
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
  park?: Maybe<Park>;
  parkDraft?: Maybe<ParkDraft>;
  parkDrafts?: Maybe<Array<ParkDraft>>;
  parkDraftsCount?: Maybe<Scalars['Int']['output']>;
  parkVersion?: Maybe<ParkVersion>;
  parkVersions?: Maybe<Array<ParkVersion>>;
  parkVersionsCount?: Maybe<Scalars['Int']['output']>;
  parks?: Maybe<Array<Park>>;
  parksCount?: Maybe<Scalars['Int']['output']>;
  publicNotice?: Maybe<PublicNotice>;
  publicNoticeDraft?: Maybe<PublicNoticeDraft>;
  publicNoticeDrafts?: Maybe<Array<PublicNoticeDraft>>;
  publicNoticeDraftsCount?: Maybe<Scalars['Int']['output']>;
  publicNoticeVersion?: Maybe<PublicNoticeVersion>;
  publicNoticeVersions?: Maybe<Array<PublicNoticeVersion>>;
  publicNoticeVersionsCount?: Maybe<Scalars['Int']['output']>;
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
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

export type Service = BasePage & {
  __typename?: 'Service';
  body?: Maybe<Scalars['String']['output']>;
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
  primaryAction?: Maybe<ExternalLink>;
  primaryContact?: Maybe<Contact>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  secondaryActions?: Maybe<Array<ExternalLink>>;
  secondaryActionsCount?: Maybe<Scalars['Int']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ServiceVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<ServiceDraftRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForCreateInput>;
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
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
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
  primaryAction?: Maybe<ExternalLink>;
  primaryContact?: Maybe<Contact>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  secondaryActions?: Maybe<Array<ExternalLink>>;
  secondaryActionsCount?: Maybe<Scalars['Int']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<ServiceRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForCreateInput>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForUpdateInput>;
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
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<ServiceWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  primaryAction?: InputMaybe<ExternalLinkWhereInput>;
  primaryContact?: InputMaybe<ContactWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  secondaryActions?: InputMaybe<ExternalLinkManyRelationFilter>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<ServiceVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<ServiceDraftRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForUpdateInput>;
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
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  editorNotes?: Maybe<Scalars['String']['output']>;
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
  primaryAction?: Maybe<ExternalLink>;
  primaryContact?: Maybe<Contact>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  secondaryActions?: Maybe<Array<ExternalLink>>;
  secondaryActionsCount?: Maybe<Scalars['Int']['output']>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<ServiceRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<ServiceRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForCreateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForCreateInput>;
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
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  editorNotes?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  primaryAction?: InputMaybe<ExternalLinkRelateToOneForUpdateInput>;
  primaryContact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  secondaryActions?: InputMaybe<ExternalLinkRelateToManyForUpdateInput>;
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
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<ServiceWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<ServiceWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  primaryAction?: InputMaybe<ExternalLinkWhereInput>;
  primaryContact?: InputMaybe<ContactWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  secondaryActions?: InputMaybe<ExternalLinkManyRelationFilter>;
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
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<ServiceVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<ServiceDraftManyRelationFilter>;
  editorNotes?: InputMaybe<StringFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  primaryAction?: InputMaybe<ExternalLinkWhereInput>;
  primaryContact?: InputMaybe<ContactWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  secondaryActions?: InputMaybe<ExternalLinkManyRelationFilter>;
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

export type Topic = BasePage & {
  __typename?: 'Topic';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentVersion?: Maybe<TopicVersion>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  drafts?: Maybe<Array<TopicDraft>>;
  draftsCount?: Maybe<Scalars['Int']['output']>;
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
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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


export type TopicDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TopicDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<TopicVersionRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  drafts?: InputMaybe<TopicDraftRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
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
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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


export type TopicDraftDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TopicDraftDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<TopicRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<TopicRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<TopicWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
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
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentVersion?: InputMaybe<TopicVersionRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  drafts?: InputMaybe<TopicDraftRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<AssemblyDistrict>>;
  districtsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
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
  publicNotices?: Maybe<Array<PublicNotice>>;
  publicNoticesCount?: Maybe<Scalars['Int']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
  republish?: Maybe<Scalars['String']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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


export type TopicVersionDistrictsArgs = {
  cursor?: InputMaybe<AssemblyDistrictWhereUniqueInput>;
  orderBy?: Array<AssemblyDistrictOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AssemblyDistrictWhereInput;
};


export type TopicVersionDistrictsCountArgs = {
  where?: AssemblyDistrictWhereInput;
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
  boards?: InputMaybe<BoardRelateToManyForCreateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForCreateInput>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForCreateInput>;
  isLive?: InputMaybe<TopicRelateToOneForCreateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForCreateInput>;
  original?: InputMaybe<TopicRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  parks?: InputMaybe<ParkRelateToManyForCreateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  boards?: InputMaybe<BoardRelateToManyForUpdateInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  communities?: InputMaybe<CommunityRelateToManyForUpdateInput>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<AssemblyDistrictRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  facilities?: InputMaybe<FacilityRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<HighlightRelateToManyForUpdateInput>;
  isLive?: InputMaybe<TopicRelateToOneForUpdateInput>;
  orgUnits?: InputMaybe<OrgUnitRelateToManyForUpdateInput>;
  original?: InputMaybe<TopicRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  parks?: InputMaybe<ParkRelateToManyForUpdateInput>;
  publicNotices?: InputMaybe<PublicNoticeRelateToManyForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
  republish?: InputMaybe<Scalars['String']['input']>;
  reviewDate?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<TopicWhereInput>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  original?: InputMaybe<TopicWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
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
  boards?: InputMaybe<BoardManyRelationFilter>;
  body?: InputMaybe<MyStringFilter>;
  communities?: InputMaybe<CommunityManyRelationFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentVersion?: InputMaybe<TopicVersionWhereInput>;
  description?: InputMaybe<StringFilter>;
  districts?: InputMaybe<AssemblyDistrictManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  drafts?: InputMaybe<TopicDraftManyRelationFilter>;
  facilities?: InputMaybe<FacilityManyRelationFilter>;
  highlights?: InputMaybe<HighlightManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  orgUnits?: InputMaybe<OrgUnitManyRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  parks?: InputMaybe<ParkManyRelationFilter>;
  publicNotices?: InputMaybe<PublicNoticeManyRelationFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  reviewDate?: InputMaybe<DateTimeNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
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

export type Trail = BasePage & {
  __typename?: 'Trail';
  actions?: Maybe<Array<InternalLink>>;
  actionsCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Location>;
  atv?: Maybe<Scalars['Boolean']['output']>;
  biking?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
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
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
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
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  atv?: Maybe<Scalars['Boolean']['output']>;
  biking?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
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
  original?: Maybe<Trail>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  publish?: Maybe<Scalars['String']['output']>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  original?: InputMaybe<TrailRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  original?: InputMaybe<TrailRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  publish?: InputMaybe<Scalars['String']['input']>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  atv?: InputMaybe<BooleanFilter>;
  biking?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crossCountrySkiing?: InputMaybe<BooleanFilter>;
  description?: InputMaybe<StringFilter>;
  difficulty?: InputMaybe<StringNullableFilter>;
  dirtBiking?: InputMaybe<BooleanFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  dogWalking?: InputMaybe<BooleanFilter>;
  elevationChange?: InputMaybe<StringFilter>;
  fall?: InputMaybe<BooleanFilter>;
  frisbeeGolf?: InputMaybe<BooleanFilter>;
  hiking?: InputMaybe<BooleanFilter>;
  horsebackRiding?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  length?: InputMaybe<StringFilter>;
  mushing?: InputMaybe<BooleanFilter>;
  open?: InputMaybe<BooleanFilter>;
  original?: InputMaybe<TrailWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
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
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  makeDrafts?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  atv?: Maybe<Scalars['Boolean']['output']>;
  biking?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
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
  original?: Maybe<Trail>;
  owner?: Maybe<User>;
  park?: Maybe<Park>;
  publishAt?: Maybe<Scalars['DateTime']['output']>;
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
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<TrailRelateToOneForCreateInput>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  original?: InputMaybe<TrailRelateToOneForCreateInput>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  park?: InputMaybe<ParkRelateToOneForCreateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  atv?: InputMaybe<Scalars['Boolean']['input']>;
  biking?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  crossCountrySkiing?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  dirtBiking?: InputMaybe<Scalars['Boolean']['input']>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  dogWalking?: InputMaybe<Scalars['Boolean']['input']>;
  elevationChange?: InputMaybe<Scalars['String']['input']>;
  fall?: InputMaybe<Scalars['Boolean']['input']>;
  frisbeeGolf?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Scalars['String']['input']>;
  hiking?: InputMaybe<Scalars['Boolean']['input']>;
  horsebackRiding?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<TrailRelateToOneForUpdateInput>;
  length?: InputMaybe<Scalars['String']['input']>;
  mushing?: InputMaybe<Scalars['Boolean']['input']>;
  open?: InputMaybe<Scalars['Boolean']['input']>;
  original?: InputMaybe<TrailRelateToOneForUpdateInput>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  park?: InputMaybe<ParkRelateToOneForUpdateInput>;
  publishAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  atv?: InputMaybe<BooleanFilter>;
  biking?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<MyStringFilter>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crossCountrySkiing?: InputMaybe<BooleanFilter>;
  description?: InputMaybe<StringFilter>;
  difficulty?: InputMaybe<StringNullableFilter>;
  dirtBiking?: InputMaybe<BooleanFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  dogWalking?: InputMaybe<BooleanFilter>;
  elevationChange?: InputMaybe<StringFilter>;
  fall?: InputMaybe<BooleanFilter>;
  frisbeeGolf?: InputMaybe<BooleanFilter>;
  hiking?: InputMaybe<BooleanFilter>;
  horsebackRiding?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isLive?: InputMaybe<TrailWhereInput>;
  length?: InputMaybe<StringFilter>;
  mushing?: InputMaybe<BooleanFilter>;
  open?: InputMaybe<BooleanFilter>;
  original?: InputMaybe<TrailWhereInput>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  atv?: InputMaybe<BooleanFilter>;
  biking?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<MyStringFilter>;
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
  fall?: InputMaybe<BooleanFilter>;
  frisbeeGolf?: InputMaybe<BooleanFilter>;
  hiking?: InputMaybe<BooleanFilter>;
  horsebackRiding?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  length?: InputMaybe<StringFilter>;
  mushing?: InputMaybe<BooleanFilter>;
  open?: InputMaybe<BooleanFilter>;
  owner?: InputMaybe<UserWhereInput>;
  park?: InputMaybe<ParkWhereInput>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
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
  owner?: Maybe<User>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type UrlCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UrlOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
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
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
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
  owner?: InputMaybe<UserWhereInput>;
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
  authId?: InputMaybe<StringFilter>;
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


export type GetInternalLinkQuery = { __typename?: 'Query', getInternalLink?: { __typename: 'AssemblyDistrict', title?: string | null } | { __typename: 'Board', title?: string | null } | { __typename: 'BoardPage', title?: string | null } | { __typename: 'Community', title?: string | null } | { __typename: 'Facility', title?: string | null } | { __typename: 'HomePage', title?: string | null } | { __typename: 'OrgUnit', title?: string | null } | { __typename: 'Park', title?: string | null } | { __typename: 'PublicNotice', title?: string | null } | { __typename: 'Service', title?: string | null } | { __typename: 'Topic' } | { __typename: 'Trail', title?: string | null } | { __typename: 'Url', title?: string | null } | null };

export type LinkSearchQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type LinkSearchQuery = { __typename?: 'Query', internalSearch?: Array<{ __typename: 'AssemblyDistrict', id: string, title?: string | null } | { __typename: 'Board', id: string, title?: string | null } | { __typename: 'BoardPage', id: string, title?: string | null } | { __typename: 'Community', id: string, title?: string | null } | { __typename: 'Facility', id: string, title?: string | null } | { __typename: 'HomePage', id: string, title?: string | null } | { __typename: 'OrgUnit', id: string, title?: string | null } | { __typename: 'Park', id: string, title?: string | null } | { __typename: 'PublicNotice', id: string, title?: string | null } | { __typename: 'Service', id: string, title?: string | null } | { __typename: 'Topic' } | { __typename: 'Trail', id: string, title?: string | null } | { __typename: 'Url', id: string, title?: string | null } | null> | null };


export const CreateDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDocumentsMutation, CreateDocumentsMutationVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const DocumentCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentCollectionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"documents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DocumentCollectionQuery, DocumentCollectionQueryVariables>;
export const DocumentCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentCollectionWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DocumentCollectionsQuery, DocumentCollectionsQueryVariables>;
export const GetInternalLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInternalLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInternalLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AssemblyDistrict"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Board"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Community"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facility"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Park"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicNotice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Url"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetInternalLinkQuery, GetInternalLinkQueryVariables>;
export const LinkSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LinkSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"internalSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AssemblyDistrict"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Board"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Community"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facility"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Park"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicNotice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Url"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<LinkSearchQuery, LinkSearchQueryVariables>;