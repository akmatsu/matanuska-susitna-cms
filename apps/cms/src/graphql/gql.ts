/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateDocuments($data: [DocumentCreateInput!]!) {\n    createDocuments(data: $data) {\n      id\n      title\n      file {\n        filename\n        filesize\n        url\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n": typeof types.CreateDocumentsDocument,
    "\n  query Tags {\n    tags {\n      id\n      name\n    }\n  }\n": typeof types.TagsDocument,
    "\n  query Query {\n    documentCollections {\n      id\n      title\n    }\n  }\n": typeof types.QueryDocument,
    "\n      query GetServices($where: ServiceWhereInput!) {\n        services(where: $where) {\n          title\n          slug\n          id\n        }\n      }\n    ": typeof types.GetServicesDocument,
    "\n      query DocumentCollection($where: DocumentCollectionWhereUniqueInput!) {\n        documentCollection(where: $where) {\n          id\n          title\n          documents {\n            id\n            title\n            file {\n              filename\n              filesize\n              url\n            }\n          }\n        }\n      }\n    ": typeof types.DocumentCollectionDocument,
    "\n      query DocumentCollections($where: DocumentCollectionWhereInput!) {\n        documentCollections(where: $where) {\n          id\n          title\n        }\n      }\n    ": typeof types.DocumentCollectionsDocument,
    "\n      query GetInternalLink($id: ID!, $type: String!) {\n        getInternalLink(id: $id, type: $type) {\n          __typename\n          ... on AssemblyDistrict {\n            title\n          }\n          ... on Board {\n            title\n          }\n          ... on BoardPage {\n            title\n          }\n          ... on Community {\n            title\n          }\n          ... on Facility {\n            title\n          }\n          ... on HomePage {\n            title\n          }\n          ... on OrgUnit {\n            title\n          }\n          ... on Park {\n            title\n          }\n          ... on PublicNotice {\n            title\n          }\n          ... on Service {\n            title\n          }\n          ... on Trail {\n            title\n          }\n          ... on Url {\n            title\n          }\n        }\n      }\n    ": typeof types.GetInternalLinkDocument,
    "\n      query LinkSearch($query: String) {\n        internalSearch(query: $query) {\n          __typename\n          ... on AssemblyDistrict {\n            id\n            title\n          }\n          ... on Board {\n            id\n            title\n          }\n          ... on BoardPage {\n            id\n            title\n          }\n          ... on Community {\n            id\n            title\n          }\n          ... on Facility {\n            id\n            title\n          }\n          ... on HomePage {\n            id\n            title\n          }\n          ... on OrgUnit {\n            id\n            title\n          }\n          ... on Park {\n            id\n            title\n          }\n          ... on PublicNotice {\n            id\n            title\n          }\n          ... on Service {\n            id\n            title\n          }\n          ... on Trail {\n            id\n            title\n          }\n          ... on Url {\n            id\n            title\n          }\n        }\n      }\n    ": typeof types.LinkSearchDocument,
};
const documents: Documents = {
    "\n  mutation CreateDocuments($data: [DocumentCreateInput!]!) {\n    createDocuments(data: $data) {\n      id\n      title\n      file {\n        filename\n        filesize\n        url\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n": types.CreateDocumentsDocument,
    "\n  query Tags {\n    tags {\n      id\n      name\n    }\n  }\n": types.TagsDocument,
    "\n  query Query {\n    documentCollections {\n      id\n      title\n    }\n  }\n": types.QueryDocument,
    "\n      query GetServices($where: ServiceWhereInput!) {\n        services(where: $where) {\n          title\n          slug\n          id\n        }\n      }\n    ": types.GetServicesDocument,
    "\n      query DocumentCollection($where: DocumentCollectionWhereUniqueInput!) {\n        documentCollection(where: $where) {\n          id\n          title\n          documents {\n            id\n            title\n            file {\n              filename\n              filesize\n              url\n            }\n          }\n        }\n      }\n    ": types.DocumentCollectionDocument,
    "\n      query DocumentCollections($where: DocumentCollectionWhereInput!) {\n        documentCollections(where: $where) {\n          id\n          title\n        }\n      }\n    ": types.DocumentCollectionsDocument,
    "\n      query GetInternalLink($id: ID!, $type: String!) {\n        getInternalLink(id: $id, type: $type) {\n          __typename\n          ... on AssemblyDistrict {\n            title\n          }\n          ... on Board {\n            title\n          }\n          ... on BoardPage {\n            title\n          }\n          ... on Community {\n            title\n          }\n          ... on Facility {\n            title\n          }\n          ... on HomePage {\n            title\n          }\n          ... on OrgUnit {\n            title\n          }\n          ... on Park {\n            title\n          }\n          ... on PublicNotice {\n            title\n          }\n          ... on Service {\n            title\n          }\n          ... on Trail {\n            title\n          }\n          ... on Url {\n            title\n          }\n        }\n      }\n    ": types.GetInternalLinkDocument,
    "\n      query LinkSearch($query: String) {\n        internalSearch(query: $query) {\n          __typename\n          ... on AssemblyDistrict {\n            id\n            title\n          }\n          ... on Board {\n            id\n            title\n          }\n          ... on BoardPage {\n            id\n            title\n          }\n          ... on Community {\n            id\n            title\n          }\n          ... on Facility {\n            id\n            title\n          }\n          ... on HomePage {\n            id\n            title\n          }\n          ... on OrgUnit {\n            id\n            title\n          }\n          ... on Park {\n            id\n            title\n          }\n          ... on PublicNotice {\n            id\n            title\n          }\n          ... on Service {\n            id\n            title\n          }\n          ... on Trail {\n            id\n            title\n          }\n          ... on Url {\n            id\n            title\n          }\n        }\n      }\n    ": types.LinkSearchDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateDocuments($data: [DocumentCreateInput!]!) {\n    createDocuments(data: $data) {\n      id\n      title\n      file {\n        filename\n        filesize\n        url\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateDocuments($data: [DocumentCreateInput!]!) {\n    createDocuments(data: $data) {\n      id\n      title\n      file {\n        filename\n        filesize\n        url\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Tags {\n    tags {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Tags {\n    tags {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Query {\n    documentCollections {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query Query {\n    documentCollections {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GetServices($where: ServiceWhereInput!) {\n        services(where: $where) {\n          title\n          slug\n          id\n        }\n      }\n    "): (typeof documents)["\n      query GetServices($where: ServiceWhereInput!) {\n        services(where: $where) {\n          title\n          slug\n          id\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query DocumentCollection($where: DocumentCollectionWhereUniqueInput!) {\n        documentCollection(where: $where) {\n          id\n          title\n          documents {\n            id\n            title\n            file {\n              filename\n              filesize\n              url\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query DocumentCollection($where: DocumentCollectionWhereUniqueInput!) {\n        documentCollection(where: $where) {\n          id\n          title\n          documents {\n            id\n            title\n            file {\n              filename\n              filesize\n              url\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query DocumentCollections($where: DocumentCollectionWhereInput!) {\n        documentCollections(where: $where) {\n          id\n          title\n        }\n      }\n    "): (typeof documents)["\n      query DocumentCollections($where: DocumentCollectionWhereInput!) {\n        documentCollections(where: $where) {\n          id\n          title\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GetInternalLink($id: ID!, $type: String!) {\n        getInternalLink(id: $id, type: $type) {\n          __typename\n          ... on AssemblyDistrict {\n            title\n          }\n          ... on Board {\n            title\n          }\n          ... on BoardPage {\n            title\n          }\n          ... on Community {\n            title\n          }\n          ... on Facility {\n            title\n          }\n          ... on HomePage {\n            title\n          }\n          ... on OrgUnit {\n            title\n          }\n          ... on Park {\n            title\n          }\n          ... on PublicNotice {\n            title\n          }\n          ... on Service {\n            title\n          }\n          ... on Trail {\n            title\n          }\n          ... on Url {\n            title\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetInternalLink($id: ID!, $type: String!) {\n        getInternalLink(id: $id, type: $type) {\n          __typename\n          ... on AssemblyDistrict {\n            title\n          }\n          ... on Board {\n            title\n          }\n          ... on BoardPage {\n            title\n          }\n          ... on Community {\n            title\n          }\n          ... on Facility {\n            title\n          }\n          ... on HomePage {\n            title\n          }\n          ... on OrgUnit {\n            title\n          }\n          ... on Park {\n            title\n          }\n          ... on PublicNotice {\n            title\n          }\n          ... on Service {\n            title\n          }\n          ... on Trail {\n            title\n          }\n          ... on Url {\n            title\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query LinkSearch($query: String) {\n        internalSearch(query: $query) {\n          __typename\n          ... on AssemblyDistrict {\n            id\n            title\n          }\n          ... on Board {\n            id\n            title\n          }\n          ... on BoardPage {\n            id\n            title\n          }\n          ... on Community {\n            id\n            title\n          }\n          ... on Facility {\n            id\n            title\n          }\n          ... on HomePage {\n            id\n            title\n          }\n          ... on OrgUnit {\n            id\n            title\n          }\n          ... on Park {\n            id\n            title\n          }\n          ... on PublicNotice {\n            id\n            title\n          }\n          ... on Service {\n            id\n            title\n          }\n          ... on Trail {\n            id\n            title\n          }\n          ... on Url {\n            id\n            title\n          }\n        }\n      }\n    "): (typeof documents)["\n      query LinkSearch($query: String) {\n        internalSearch(query: $query) {\n          __typename\n          ... on AssemblyDistrict {\n            id\n            title\n          }\n          ... on Board {\n            id\n            title\n          }\n          ... on BoardPage {\n            id\n            title\n          }\n          ... on Community {\n            id\n            title\n          }\n          ... on Facility {\n            id\n            title\n          }\n          ... on HomePage {\n            id\n            title\n          }\n          ... on OrgUnit {\n            id\n            title\n          }\n          ... on Park {\n            id\n            title\n          }\n          ... on PublicNotice {\n            id\n            title\n          }\n          ... on Service {\n            id\n            title\n          }\n          ... on Trail {\n            id\n            title\n          }\n          ... on Url {\n            id\n            title\n          }\n        }\n      }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;