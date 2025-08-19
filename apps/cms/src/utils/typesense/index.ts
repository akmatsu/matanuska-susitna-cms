import Typesense from 'typesense';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import 'dotenv/config';
import { KeystoneContext } from '@keystone-6/core/types';
import type { CommonContext } from '../../controllers/types';
import OrgUnit from '../../app/models/pages/OrgUnit';

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

export type PageType = {
  type: string;
  getItems: (context: CommonContext) => Promise<TypeSensePageDocument[]>;
};

const sharedFields = {
  id: true,
  title: true,
  slug: true,
  description: true,
  body: true,
  publishAt: true,
  tags: {
    select: {
      name: true,
    },
  },
};

const sharedFieldsWithCommunities = {
  ...sharedFields,

  communities: {
    select: {
      title: true,
    },
  },
};

const orgUnits = {
  orgUnits: {
    select: {
      title: true,
    },
  },
};

export const PAGE_TYPES = [
  {
    type: 'service',
    async getItems(context) {
      const services = await context.prisma.service.findMany({
        select: {
          ...orgUnits,
          ...sharedFieldsWithCommunities,
        },
      });

      return services.map((service) => toSearchableObj(service, 'service'));
    },
  },
  {
    type: 'community',
    async getItems(context) {
      const communities = await context.prisma.community.findMany({
        select: {
          ...sharedFields,
          districts: {
            select: {
              title: true,
            },
          },
        },
      });

      return communities.map((community) =>
        toSearchableObj(community, 'community'),
      );
    },
  },
  {
    type: 'department',
    async getItems(context) {
      const departments = await context.prisma.orgUnit.findMany({
        select: {
          ...sharedFields,
        },
      });

      return departments.map((department) =>
        toSearchableObj(department, 'department'),
      );
    },
  },
  {
    type: 'park',
    async getItems(context) {
      const parks = await context.prisma.park.findMany({
        select: {
          ...sharedFieldsWithCommunities,
        },
      });

      return parks.map((park) => toSearchableObj(park, 'park'));
    },
  },
  {
    type: 'trail',
    async getItems(context) {
      const trails = await context.prisma.trail.findMany({
        select: {
          ...sharedFieldsWithCommunities,
        },
      });

      return trails.map((trail) => toSearchableObj(trail, 'trail'));
    },
  },
  {
    type: 'facility',
    async getItems(context) {
      const facilities = await context.prisma.facility.findMany({
        select: {
          ...sharedFieldsWithCommunities,
        },
      });

      return facilities.map((facility) =>
        toSearchableObj(facility, 'facility'),
      );
    },
  },
  {
    type: 'assemblyDistrict',
    async getItems(context) {
      const assemblyDistricts = await context.prisma.assemblyDistrict.findMany({
        select: {
          ...sharedFields,
        },
      });

      return assemblyDistricts.map((district) =>
        toSearchableObj(district, 'assembly_district'),
      );
    },
  },
  {
    type: 'board',
    async getItems(context) {
      const boards = await context.prisma.board.findMany({
        select: {
          ...sharedFieldsWithCommunities,
        },
      });

      return boards.map((board) => toSearchableObj(board, 'board'));
    },
  },
  {
    type: 'plan',
    async getItems(context) {
      const plans = await context.prisma.plan.findMany({
        select: {
          ...sharedFields,
        },
      });

      return plans.map((plan) => toSearchableObj(plan, 'plan'));
    },
  },
  {
    type: 'topic',
    async getItems(context) {
      const topics = await context.prisma.topic.findMany({
        select: {
          ...sharedFieldsWithCommunities,
        },
      });

      return topics.map((topic) => toSearchableObj(topic, 'topic'));
    },
  },
  {
    type: 'publicNotice',
    async getItems(context) {
      const publicNotices = await context.prisma.publicNotice.findMany({
        select: {
          ...sharedFieldsWithCommunities,
          assemblyDistricts: {
            select: {
              title: true,
            },
          },
        },
      });

      return publicNotices.map((publicNotice) =>
        toSearchableObj(publicNotice, 'public_notice'),
      );
    },
  },
  {
    type: 'topic',
    async getItems(context) {
      const sudoCtx = context.sudo();
      const data = await sudoCtx.prisma.electionsPage.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          howElectionsWork: true,
          boroughElectionContact: {
            select: {
              name: true,
              title: true,
            },
          },
          earlyVotingLocations: {
            select: {
              title: true,
              address: {
                select: {
                  lineOne: true,
                  lineTwo: true,
                  title: true,
                  description: true,
                },
              },
            },
          },
        },
      });
      return data.map((p) => {
        const formatted = {
          ...p,
          id: `${p.id}-elections`,
          slug: 'elections',
          body: `${p.earlyVotingLocations.map((l) => `${l.title} ${l.address?.lineOne} ${l.address?.lineTwo} ${l.address?.title} ${l.address?.description}`).join(', ')}. ${p.howElectionsWork} ${p.boroughElectionContact?.name} ${p.boroughElectionContact?.title}  `,
        };
        return toSearchableObj(formatted, 'topic');
      });
    },
  },
  {
    type: 'topic',
    async getItems(context) {
      const sudoCtx = context.sudo();
      const data = await sudoCtx.prisma.boardPage.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          body: true,
          actions: {
            select: {
              label: true,
            },
          },
          documents: {
            select: {
              title: true,
            },
          },
          vacancyReport: {
            select: {
              title: true,
            },
          },
          contacts: {
            select: {
              name: true,
              title: true,
            },
          },
          applicationForm: {
            select: {
              title: true,
            },
          },
        },
      });
      return data.map((p) => {
        const d = {
          ...p,
          id: `${p.id}-board`,
          slug: 'boards',
          body: `${p.body} ${p.actions.map((a) => a.label).join(', ')} ${p.documents.map((d) => d.title).join(', ')} ${p.vacancyReport?.title} ${p.contacts.map((c) => `${c.name} ${c.title}`).join(', ')} ${p.applicationForm?.title}`,
        };
        return toSearchableObj(d, 'topic');
      });
    },
  },
] satisfies PageType[];

export function toSearchableObj(
  item: any,
  type: string,
): TypeSensePageDocument {
  return {
    type: item?.type?.replace(/_/gi, ' ') || type,
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
