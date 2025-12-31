import { capitalizeFirstLetter, toCamelCase } from '../utils';
import type { CommonContext, RequestControllerWithContext } from './types';
import { mapDataFields } from '../utils/draftUtils';
import { singular } from 'pluralize';
import { logger } from '../configs/logger';
import { Prisma } from '@prisma/client';

export const createDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const [modelKey, draftKey] = getModelKeys(list, 'draft');
      const original = await getUpdatedData(modelKey, id, context);

      if (!original) {
        return res.status(404).json({ error: 'Original item not found' });
      }

      const newDraft = await createNewCopy(draftKey, original, context);

      if (!newDraft) {
        return res.status(500).json({ error: 'Failed to create draft' });
      }

      return res.status(201).json({
        message: `Draft created successfully with id ${newDraft.id}`,
        draftId: newDraft.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error creating draft');
      return res.status(500).json({ error: 'Failed to create draft' });
    }
  };

export const createVersion: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      return res.status(501).json({ error: 'Not implemented' });
    } catch (error: any) {
      logger.error(error, 'Error creating version');
      return res.status(500).json({ error: 'Failed to create version' });
    }
  };

export const publishDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const [modelKey, draftKey] = getModelKeys(list, 'draft');

      const draft = await getUpdatedData(draftKey, id, context);

      if (!draft) {
        return res.status(404).json({ error: 'Draft not found' });
      }

      const published = await publishUpdatedData(modelKey, draft, context);

      if (!published) {
        return res.status(404).json({ error: 'Could not find original item' });
      }

      await deleteItem(id, draftKey, context);

      return res.status(200).json({
        message: `Draft ${id} published successfully`,
        publishedId: published.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error publishing draft');
      return res.status(500).json({ error: 'Failed to publish draft' });
    }
  };

export const republishVersion: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const [modelKey, versionKey] = getModelKeys(list, 'version');

      const version = await getUpdatedData(versionKey, id, context);
      const published = await publishUpdatedData(modelKey, version, context, {
        currentVersion: {
          connect: {
            id,
          },
        },
      });

      if (!published) {
        return res.status(404).json({ error: 'Could not find original item' });
      }

      return res.status(200).json({
        message: `Version ${id} republished successfully`,
        publishedId: published.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error republishing version');
      return res.status(500).json({ error: 'Failed to republish version' });
    }
  };

type ModelDelegateKey = Uncapitalize<Prisma.ModelName>;
type MinimalFindUnique = (args: { where: any; select?: any }) => Promise<any>;
type MinimalUpdate = (args: { where: any; data: any }) => Promise<any>;
type DelegateWithFindUnique = {
  findUnique: MinimalFindUnique;
  update: MinimalUpdate;
};

function getUpdatedData(
  modelKey: ModelDelegateKey,
  id: string,
  ctx: CommonContext,
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

function createNewCopy(
  modelKey: ModelDelegateKey,
  { id, title, ...data }: any,
  ctx: CommonContext,
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

function publishUpdatedData(
  modelKey: ModelDelegateKey,
  { title, original, ...data }: any,
  ctx: CommonContext,
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

function buildSelectObject(key: string, excludeFields: string[] = []) {
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

function deleteItem(
  id: string,
  modelKey: ModelDelegateKey,
  ctx: CommonContext,
) {
  const delegate = ctx.sudo().prisma[modelKey] as unknown as {
    delete: (args: { where: any }) => Promise<any>;
  };

  return delegate.delete({
    where: { id },
  });
}

function getModelKeys(list: string, type: 'draft' | 'version') {
  const modelKey = toCamelCase(singular(list)) as ModelDelegateKey;
  const key = type === 'draft' ? `${modelKey}Draft` : `${modelKey}Version`;

  return [modelKey, key as ModelDelegateKey];
}
