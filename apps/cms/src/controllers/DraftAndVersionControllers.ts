import { capitalizeFirstLetter, toCamelCase, toPascalCase } from '../utils';
import type { CommonContext, RequestControllerWithContext } from './types';
import { mapDataFields } from '../utils/draftUtils';
import { singular } from 'pluralize';
import { logger } from '../configs/logger';
import { Prisma } from '@prisma/client';

type ModelDelegateKey = Uncapitalize<Prisma.ModelName>;

type MinimalFindUnique = (args: { where: any; select?: any }) => Promise<any>;
type MinimalUpdate = (args: { where: any; data: any }) => Promise<any>;
type DelegateWithFindUnique = {
  findUnique: MinimalFindUnique;
  update: MinimalUpdate;
};

export const publishDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const sudoCtx = context.sudo();
      const modelKey = toCamelCase(singular(list)) as ModelDelegateKey;
      const draft = await getDraftData(modelKey, id, sudoCtx);
      const published = await publishDraftData(modelKey, draft, sudoCtx);

      if (!published) {
        return res.status(404).json({ error: 'Could not find original item' });
      }

      await deleteDraft(id, modelKey, sudoCtx);

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
      const { query } = req.query;
      const sudoCtx = context.sudo();

      const listKey = toPascalCase(
        singular(list),
      ) as keyof typeof sudoCtx.query;
      const listKeyVersion = `${listKey}Version` as keyof typeof sudoCtx.query;

      const {
        title,
        original,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id: versionId,
        ...version
      } = await sudoCtx.query[listKeyVersion].findOne({
        where: { id },
        query: query as string,
      });

      const published = await sudoCtx.query[listKey].updateOne({
        where: {
          id: original.id,
        },
        data: mapDataFields(
          version,
          {
            title: title.split(' ---')[0],
            status: 'published',
            publishAt: new Date().toISOString(),
            currentVersion: {
              connect: {
                id,
              },
            },
          },
          'update',
        ),
      });

      if (!published) {
        return res.status(404).json({ error: 'Version not found' });
      }

      return res.status(200).json({
        message: `Version ${id} republished successfully`,
        publishedId: original.id,
      });
    } catch (error: any) {
      logger.error(error, 'Error republishing version');
      return res.status(500).json({ error: 'Failed to republish version' });
    }
  };

function getDraftData(
  modelKey: ModelDelegateKey,
  id: string,
  ctx: CommonContext,
) {
  const draftKey = `${modelKey}Draft` as ModelDelegateKey;
  const delegate = ctx.prisma[draftKey] as unknown as DelegateWithFindUnique;
  const select = buildSelectObject(draftKey);

  return delegate.findUnique({
    where: { id },
    select,
  });
}

function publishDraftData(
  modelKey: ModelDelegateKey,
  { title, original, ...data }: any,
  ctx: CommonContext,
) {
  const delegate = ctx.prisma[modelKey] as unknown as DelegateWithFindUnique;
  return delegate.update({
    where: { id: original.id },
    data: mapDataFields(
      data,
      {
        title: title.split(' ---')[0],
        status: 'published',
        publishAt: new Date().toISOString(),
      },
      'update',
    ),
  });
}

function buildSelectObject(key: string) {
  const DraftModel = Prisma.dmmf.datamodel.models.find(
    (m) => m.name === capitalizeFirstLetter(key),
  );

  const selectObj: Record<string, boolean | { select: { id: boolean } }> = {};
  if (DraftModel) {
    DraftModel.fields.forEach((field) => {
      if (!field.dbName)
        selectObj[field.name] = field.relationName
          ? { select: { id: true } }
          : true;
    });
  }

  return selectObj;
}

function deleteDraft(
  id: string,
  modelKey: ModelDelegateKey,
  ctx: CommonContext,
) {
  const draftKey = `${modelKey}Draft` as ModelDelegateKey;
  const delegate = ctx.prisma[draftKey] as unknown as {
    delete: (args: { where: any }) => Promise<any>;
  };

  return delegate.delete({
    where: { id },
  });
}
