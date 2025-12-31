import { singular } from 'pluralize';
import { capitalizeFirstLetter, toCamelCase } from '.';
import { CommonContext } from '../controllers/types';
import { Prisma } from '@prisma/client';
import {
  BaseListTypeInfo,
  KeystoneContextFromListTypeInfo,
} from '@keystone-6/core/types';

export type Mode = 'create' | 'update';
type ModelDelegateKey = Uncapitalize<Prisma.ModelName>;
type MinimalFindUnique = (args: { where: any; select?: any }) => Promise<any>;
type MinimalUpdate = (args: { where: any; data: any }) => Promise<any>;
type DelegateWithFindUnique = {
  findUnique: MinimalFindUnique;
  update: MinimalUpdate;
};

type Context =
  | CommonContext
  | KeystoneContextFromListTypeInfo<BaseListTypeInfo>;

export async function handleDraftPublish(
  list: string,
  id: string,
  context: Context,
) {
  const [modelKey, draftKey] = getModelKeys(list, 'draft');

  const draft = await getUpdatedData(draftKey, id, context);

  if (!draft) {
    throw new Error('Draft not found');
  }

  const published = await publishUpdatedData(modelKey, draft, context);

  if (!published) {
    throw new Error('Could not find original item');
  }

  await deleteItem(id, draftKey, context);

  return published;
}

/** Maps data fields from input to output, handling relations appropriately. */
export function mapDataFields(
  input: Record<string, any>,
  output: Record<string, any> = {},
  mode: Mode = 'create',
): Record<string, any> {
  const { ...rest } = input;

  Object.entries(rest).forEach(([k, v]) => {
    if (
      k.endsWith('Count') ||
      k === 'createdAt' ||
      k === 'updatedAt' ||
      k === '__typename'
    ) {
      return;
    }

    if (v === null) {
      return;
    }

    if (Array.isArray(v)) {
      const items = (v as Array<any>)
        .filter((i) => i && typeof i === 'object' && 'id' in i)
        .map((i: any) => ({ id: i.id }));

      output[k] = mode === 'update' ? { set: items } : { connect: items };
      return;
    }

    if (typeof v === 'object' && 'id' in v) {
      output[k] = { connect: { id: v.id } };
      return;
    }

    output[k] = v;
  });

  return output;
}

/** Fetches the updated data for an item by ID. Includes relations. */
export function getUpdatedData(
  modelKey: ModelDelegateKey,
  id: string,
  ctx: Context,
) {
  const delegate = ctx.sudo().prisma[
    modelKey
  ] as unknown as DelegateWithFindUnique;

  const select = buildSelectObject(modelKey, [
    'createdAt',
    'updatedAt',
    'slug',
    'status',
    'drafts',
    'versions',
    'currentVersion',
  ]);

  return delegate.findUnique({
    where: { id },
    select,
  });
}

/** Creates a new copy of an item (for drafts or versions) */
export function createNewCopy(
  modelKey: ModelDelegateKey,
  { id, title, ...data }: any,
  ctx: Context,
) {
  const delegate = ctx.sudo().prisma[modelKey] as unknown as {
    create: (args: { data: any }) => Promise<any>;
  };

  return delegate.create({
    data: mapDataFields(
      data,
      {
        title: `${title} --- ${new Date().toLocaleString()}`,
        original: { connect: { id } },
      },
      'create',
    ),
  });
}

/** Publishes the updated data by updating the original item with data from a draft/version */
export function publishUpdatedData(
  modelKey: ModelDelegateKey,
  { title, original, ...data }: any,
  ctx: Context,
  customData?: Record<string, any>,
) {
  const delegate = ctx.sudo().prisma[
    modelKey
  ] as unknown as DelegateWithFindUnique;
  return delegate.update({
    where: { id: original.id },
    data: mapDataFields(
      data,
      {
        title: title.split(' ---')[0],
        status: 'published',
        publishAt: new Date().toISOString(),
        ...customData,
      },
      'update',
    ),
  });
}

/** Builds a select object for Prisma queries, excluding specified fields */
export function buildSelectObject(key: string, excludeFields: string[] = []) {
  const model = Prisma.dmmf.datamodel.models.find(
    (m) => m.name === capitalizeFirstLetter(key),
  );

  const selectObj: Record<string, boolean | { select: { id: boolean } }> = {};
  if (model) {
    model.fields.forEach((field) => {
      if (
        !field.name.startsWith('from_') &&
        !field.dbName &&
        !excludeFields.includes(field.name)
      )
        selectObj[field.name] = field.relationName
          ? { select: { id: true } }
          : true;
    });
  }

  return selectObj;
}

export function deleteItem(
  id: string,
  modelKey: ModelDelegateKey,
  ctx: Context,
) {
  const delegate = ctx.sudo().prisma[modelKey] as unknown as {
    delete: (args: { where: any }) => Promise<any>;
  };

  return delegate.delete({
    where: { id },
  });
}

export function getModelKeys(list: string, type: 'draft' | 'version') {
  const modelKey = toCamelCase(singular(list)) as ModelDelegateKey;
  const key = type === 'draft' ? `${modelKey}Draft` : `${modelKey}Version`;

  return [modelKey, key as ModelDelegateKey];
}
