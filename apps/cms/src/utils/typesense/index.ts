import Typesense from 'typesense';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import 'dotenv/config';

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

export const relationalDisplayFields = [
  'name',
  'title',
  'label',
  'slug',
  'body',
  'phone',
  'email',
  'description',
  'code',
];

export const PAGE_TYPES = [
  'Service',
  'Community',
  'OrgUnit',
  'Park',
  'Trail',
  'Facility',
  'AssemblyDistrict',
  'Board',
  'Plan',
  'Topic',
  'PublicNotice',
  'ElectionsPage',
  'BoardPage',
];

export function toSearchableObj(
  item: any,
  type: string,
  appendId?: string,
): TypeSensePageDocument {
  const baseObj: TypeSensePageDocument = {
    type: item?.type?.replace(/_/gi, ' ') || type,
    id: `${item.id}${appendId ?? ''}`,
    slug: item.slug || appendId?.replace(/^-/, ''),
    title: item.title,
  };

  const bodyParts: string[] = [];

  if (item.description) {
    baseObj.description = item.description;
  }

  if (item.publishAt)
    baseObj.published_at = Math.floor(
      new Date(item.publishAt).getTime() / 1000,
    );

  // Check for unmapped relevant keys.
  const relevantKeys = ['name', 'title', 'label', 'phone', 'email'];
  const ignoreKeys = ['slug', 'id', 'description', 'title'];
  for (const [key, value] of Object.entries(item)) {
    // If the value is a string, add it to bodyParts
    if (typeof value === 'string' && !ignoreKeys.includes(key)) {
      bodyParts.push(value);

      // If the value is an array, check each item for relevant keys.
    } else if (Array.isArray(value)) {
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
