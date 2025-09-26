import Typesense from 'typesense';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import 'dotenv/config';
import type { CommonContext } from '../../controllers/types';
import { Prisma } from '@prisma/client';

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
        where: {
          status: 'published',
        },
        select: {
          ...orgUnits,
          ...sharedFieldsWithCommunities,
          primaryAction: {
            select: {
              label: true,
            },
          },
          secondaryActions: {
            select: {
              label: true,
            },
          },
          documents: {
            select: {
              title: true,
            },
          },
        },
      });

      return services.map((service) => toSearchableObj(service, 'service'));
    },
  },
  {
    type: 'community',
    async getItems(context) {
      const communities = await context.prisma.community.findMany({
        where: {
          status: 'published',
        },
        select: {
          ...sharedFields,
          assemblyDistricts: {
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
        where: {
          status: 'published',
          showPage: 'yes',
        },
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
        where: {
          status: 'published',
        },
        select: {
          ...sharedFieldsWithCommunities,
          trails: {
            select: {
              title: true,
            },
          },
          facilities: {
            select: {
              title: true,
            },
          },
          orgUnits: {
            select: {
              title: true,
            },
          },
          assemblyDistricts: {
            select: {
              title: true,
            },
          },
          documents: {
            select: {
              title: true,
            },
          },
        },
      });

      return parks.map((park) => toSearchableObj(park, 'park'));
    },
  },
  {
    type: 'trail',
    async getItems(context) {
      const trails = await context.prisma.trail.findMany({
        where: {
          status: 'published',
        },
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
        where: {
          status: 'published',
        },
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
        where: {
          status: 'published',
        },
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
        where: {
          status: 'published',
        },
        select: {
          ...sharedFieldsWithCommunities,
          type: true,
          services: {
            select: { title: true },
          },
          orgUnits: {
            select: {
              title: true,
            },
          },
          assemblyDistricts: {
            select: {
              title: true,
            },
          },
          documents: {
            select: {
              title: true,
            },
          },
        },
      });

      return boards.map((board) => toSearchableObj(board, 'board'));
    },
  },
  {
    type: 'plan',
    async getItems(context) {
      const plans = await context.prisma.plan.findMany({
        where: {
          status: 'published',
        },
        select: {
          ...sharedFieldsWithCommunities,
        },
      });

      return plans.map((plan) => toSearchableObj(plan, 'plan'));
    },
  },
  {
    type: 'topic',
    async getItems(context) {
      const topics = await context.prisma.topic.findMany({
        where: {
          status: 'published',
        },
        select: {
          ...sharedFieldsWithCommunities,
          orgUnits: {
            select: {
              title: true,
            },
          },
          assemblyDistricts: {
            select: {
              title: true,
            },
          },
          services: {
            select: {
              title: true,
            },
          },
          parks: {
            select: {
              title: true,
            },
          },
          trails: {
            select: {
              title: true,
            },
          },
          facilities: {
            select: {
              title: true,
            },
          },
          contacts: {
            select: {
              name: true,
            },
          },
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
        },
      });

      return topics.map((topic) => toSearchableObj(topic, 'topic'));
    },
  },
  {
    type: 'publicNotice',
    async getItems(context) {
      const publicNotices = await context.prisma.publicNotice.findMany({
        where: {
          status: 'published',
        },
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
    getItems: (ctx) => parseElectionsPage(ctx, true),
  },
  {
    type: 'topic',
    getItems: (ctx) => parseBoardPage(ctx, true),
  },
] satisfies PageType[];

export function toSearchableObj(
  item: any,
  type: string,
  prependId?: string,
): TypeSensePageDocument {
  const baseObj: TypeSensePageDocument = {
    type: item?.type?.replace(/_/gi, ' ') || type,
    id: `${item.id}${prependId ?? ''}`,
    slug: item.slug,
    title: item.title,
  };

  const bodyParts: string[] = [];

  if (item.body) {
    baseObj.body = item.body;
    bodyParts.push(item.body);
  }

  if (item.description) {
    baseObj.description = item.description;
  }

  if (item.secondaryActions) {
    bodyParts.push(
      ...item.actions.map((a: { label: string }) => a.label || ''),
    );
  }

  if (item.publishAt)
    baseObj.published_at = Math.floor(
      new Date(item.publishAt).getTime() / 1000,
    );

  if (item.tags) {
    baseObj.tags = item.tags.map((tag: { name: string }) => tag.name || '');
  }

  if (item.orgUnits) {
    baseObj.departments = item.orgUnits.map(
      (d: { title: string }) => d.title || '',
    );
  }

  if (item.districts) {
    baseObj.districts = item.districts.map(
      (d: { title: string }) => d.title || '',
    );
  }

  if (item.assemblyDistricts) {
    baseObj.districts = item.assemblyDistricts.map(
      (d: { title: string }) => d.title || '',
    );
  }

  if (item.communities) {
    baseObj.communities = item.communities.map(
      (c: { title: string }) => c.title || '',
    );
  }

  // Check for unmapped relevant keys.
  const relevantKeys = ['title', 'name', 'label', 'description'];
  for (const [key, value] of Object.entries(item)) {
    // If there is any unmapped relevant keys in the root of the item add it to bodyParts
    if (
      !Object.keys(baseObj).includes(key) &&
      relevantKeys.some((rk) => key.toLowerCase().includes(rk)) &&
      typeof value === 'string'
    ) {
      bodyParts.push(value);
    }

    // If the value is an array, check each item for relevant keys.
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (typeof v === 'object') {
          relevantKeys.forEach((rk) => {
            if (v[rk]) bodyParts.push(v[rk]);
          });
        }
      });
      // If the value is an object check the object for relevant keys
    } else if (typeof value === 'object' && value !== null) {
      relevantKeys.forEach((rk) => {
        const obj = value as Record<string, any>;
        if (obj[rk]) bodyParts.push(obj[rk]);
      });
    }
  }

  baseObj.body = Array.from(new Set(bodyParts)).join(', ').trim();

  return baseObj;
}

export async function parseElectionsPage<T extends boolean>(
  context: CommonContext,
  many?: T,
): Promise<T extends true ? TypeSensePageDocument[] : TypeSensePageDocument> {
  const sudoCtx = context.sudo();
  const select: Prisma.ElectionsPageSelect = {
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
  };
  if (many) {
    const data = await sudoCtx.prisma.electionsPage.findMany({ select });
    return data.map((p) => {
      const d = {
        ...p,
        slug: 'elections',
      };
      return toSearchableObj(d, 'topic', '-elections');
    }) as any;
  } else {
    const data = await sudoCtx.prisma.electionsPage.findFirst({ select });
    const d = {
      ...data,
      slug: 'elections',
    };
    return toSearchableObj(d, 'topic', '-elections') as any;
  }
}

export async function parseBoardPage<T extends boolean>(
  context: CommonContext,
  many?: T,
): Promise<T extends true ? TypeSensePageDocument[] : TypeSensePageDocument> {
  const sudoCtx = context.sudo();
  const select: Prisma.BoardPageSelect = {
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
  };

  if (many) {
    const data = await sudoCtx.prisma.boardPage.findMany({
      select,
    });

    return data.map((p) => {
      const d = {
        ...p,
        slug: 'boards',
      };
      return toSearchableObj(d, 'topic', '-boards');
    }) as any;
  } else {
    const data = await sudoCtx.prisma.boardPage.findFirst({ select });
    const d = {
      ...data,
      slug: 'boards',
    };
    return toSearchableObj(d, 'topic', '-boards') as any;
  }
}
