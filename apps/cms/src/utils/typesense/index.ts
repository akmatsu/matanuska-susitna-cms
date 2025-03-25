import Typesense from 'typesense';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import 'dotenv/config';
import { KeystoneContext } from '@keystone-6/core/types';

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
          actionLabel: true,
          publishAt: true,
          tags: {
            select: {
              name: true,
            },
          },
        },
      });

      return services.map((service: any) => {
        toSearchableObj(service, 'service');
      });
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

      return departments.map((department: any) => {
        toSearchableObj(department, 'department');
      });
    },
  },
];

function toSearchableObj(item: any, type: string): TypeSensePageDocument {
  return {
    type,
    id: item.id,
    title: item.title,
    description: item.description,
    body: item.body,
    slug: item.slug,
    action_label: item.actionLabel,
    published_at: item.publishAt
      ? Math.floor(new Date(item.publishAt).getTime() / 1000)
      : undefined,
    tags: item.tags.map((tag: { name: string }) => tag.name || ''),
    departments: item.departments?.map(
      (department: { title: string }) => department.title || '',
    ),
    districts: item.districts?.map(
      (district: { title: string }) => district.title || '',
    ),
    communities: item.communities?.map(
      (community: { title: string }) => community.title || '',
    ),
  };
}
