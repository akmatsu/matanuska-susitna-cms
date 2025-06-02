import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { useState } from 'react';

export function useInternalSearchQuery() {
  const [query, setQuery] = useState<string>('');
  const result = useQuery<{
    [key: string]: { __typename: string; title: string; id: string }[];
  }>(
    gql`
      query InternalLinkSearch($query: String!) {
        services(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        communities(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        assemblyDistricts(
          where: { title: { contains: $query, mode: insensitive } }
        ) {
          id
          title
        }
        parks(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        orgUnits(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        trails(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        facilities(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        publicNotices(
          where: { title: { contains: $query, mode: insensitive } }
        ) {
          id
          title
        }
        homePages(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        boards(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        boardPages(where: { title: { contains: $query, mode: insensitive } }) {
          id
          title
        }
        urls(
          where: {
            OR: [
              { title: { contains: $query, mode: insensitive } }
              { url: { contains: $query, mode: insensitive } }
            ]
          }
        ) {
          id
          title
        }
      }
    `,
    {
      variables: { query },
    },
  );

  return { query, setQuery, ...result };
}
