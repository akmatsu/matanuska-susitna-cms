import Typesense from 'typesense';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import 'dotenv/config';
import { KeystoneContext } from '@keystone-6/core/types';
import v from 'voca';

export type TypeSensePageDocument = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  body?: string;
  action_label?: string;
  published_at?: number;
  tags?: string[];
  url?: string;
  districts?: string[];
  departments?: string[];
  communities?: string[];
  type?: string;
  related_entities?: string[];
};

export const TYPESENSE_COLLECTIONS = {
  PAGES: 'pages',
};

export const TYPESENSE_CLIENT = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST || 'localhost',
      port: process.env.TYPESENSE_PORT
        ? parseInt(process.env.TYPESENSE_PORT)
        : 8108,
      protocol: process.env.TYPESENSE_PROTOCOL || 'http',
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY || 'xyz',
  connectionTimeoutSeconds: 2,
});

export const COLLECTIONS: CollectionCreateSchema[] = [
  {
    name: TYPESENSE_COLLECTIONS.PAGES,
    fields: [
      { name: 'id', type: 'string' },
      { name: 'title', type: 'string', sort: true },
      { name: 'slug', type: 'string' },
      { name: 'description', type: 'string', optional: true },
      { name: 'body', type: 'string', optional: true },
      { name: 'action_label', type: 'string', optional: true },
      { name: 'published_at', type: 'int64', optional: true, sort: true },
      { name: 'tags', type: 'string[]', optional: true, facet: true },
      { name: 'url', type: 'string', optional: true },
      { name: 'districts', type: 'string[]', optional: true, facet: true },
      { name: 'departments', type: 'string[]', optional: true, facet: true },
      { name: 'communities', type: 'string[]', optional: true, facet: true },
      { name: 'urgency', type: 'int32', optional: true, facet: true },
      {
        name: 'related_pages',
        type: 'string[]',
        optional: true,
        facet: true,
      },
      { name: 'type', type: 'string', optional: true, facet: true },
    ],
  },
];

export const PAGE_TYPES = [
  {
    type: 'service',
    async getItems(context: KeystoneContext<any>) {
      const services = await context.prisma.service.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          body: true,
          publishAt: true,
          orgUnits: {
            select: {
              title: true,
            },
          },
          communities: {
            select: {
              title: true,
            },
          },
          tags: {
            select: {
              name: true,
            },
          },
        },
      });

      return services.map((service: any) =>
        toSearchableObj(service, 'service'),
      );
    },
  },
  {
    type: 'community',
    async getItems(context: KeystoneContext<any>) {
      const communities = await context.prisma.community.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          publishAt: true,
          districts: {
            select: {
              title: true,
            },
          },
          tags: {
            select: {
              name: true,
            },
          },
        },
      });

      return communities.map((community: any) =>
        toSearchableObj(community, 'community'),
      );
    },
  },
  {
    type: 'department',
    async getItems(context: KeystoneContext<any>) {
      const departments = await context.prisma.orgUnit.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          publishAt: true,
          tags: {
            select: {
              name: true,
            },
          },
        },
      });

      return departments.map((department: any) =>
        toSearchableObj(department, 'department'),
      );
    },
  },
];

export function toSearchableObj(
  item: any,
  type: string,
): TypeSensePageDocument {
  return {
    type: item.type.replace(/_/gi, ' ') || type,
    id: item.id,
    slug: item.slug,
    title: item.title,
    ...(item.description && { description: item.description }),
    ...(item.body && { body: item.body }),
    ...(item.actionLabel && { action_label: item.actionLabel }),
    ...(item.publishAt && {
      published_at: Math.floor(new Date(item.publishAt).getTime() / 1000),
    }),
    ...(item.tags && {
      tags: item.tags.map((tag: { name: string }) => tag.name || ''),
    }),

    ...(item.orgUnits && {
      departments: item.orgUnits.map(
        (department: { title: string }) => department.title || '',
      ),
    }),

    ...(item.districts && {
      districts: item.districts.map(
        (district: { title: string }) => district.title || '',
      ),
    }),

    ...(item.communities && {
      communities: item.communities.map(
        (community: { title: string }) => community.title || '',
      ),
    }),

    ...(item.urgency && {
      urgency: item.urgency,
    }),

    related_pages: [
      ...mapRelatedEntities(item.orgUnits, 'department'),
      ...mapRelatedEntities(item.services, 'service'),
      ...mapRelatedEntities(item.assemblyDistricts, 'district'),
      ...mapRelatedEntities(item.communities, 'community'),
      ...mapRelatedEntities(item.parks, 'park'),
      ...mapRelatedEntities(item.trails, 'trail'),
      ...mapRelatedEntities(item.facilities, 'facility'),
    ],
  };
}

function mapRelatedEntities(
  item: { title: string }[] | undefined | null,
  type: string,
) {
  if (!item) return [];

  return item.map((entity) => {
    return type + ':' + entity.title;
  });
}
