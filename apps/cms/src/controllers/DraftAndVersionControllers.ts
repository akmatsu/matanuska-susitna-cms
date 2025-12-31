import { toPascalCase } from '../utils';
import type { RequestControllerWithContext } from './types';
import { mapDataFields } from '../utils/draftUtils';
import { singular } from 'pluralize';
import { logger } from '../configs/logger';
import { Prisma } from '@prisma/client';

export const publishDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      const { id, list } = req.params;
      const sudoCtx = context.sudo();

      const listKey = toPascalCase(singular(list)) as keyof typeof sudoCtx.db;
      const listKeyDraft = `${listKey}Draft` as keyof typeof sudoCtx.db;

      const DraftModel = Prisma.dmmf.datamodel.models.find(
        (m) => m.name === listKeyDraft,
      );

      const selectObj: Record<string, boolean | { select: { id: boolean } }> =
        {};

      if (DraftModel) {
        DraftModel.fields.forEach((field) => {
          if (field.relationName) {
            selectObj[field.name] = { select: { id: true } };
          } else {
            selectObj[field.name] = true;
          }
        });
      }

      const myThing = await sudoCtx.prisma[listKeyDraft as any].findUnique({
        where: { id },
        select: selectObj,
      });

      console.log(myThing);

      // const p =
      //   sudoCtx.prisma[
      //     v.camelCase(listKeyDraft) as keyof typeof sudoCtx.prisma
      //   ];
      // let myThing;
      // if ('aggregate' in p) {
      //   myThing = await p.findUnique({
      //     where: {
      //       id,
      //     },
      //     includes:
      //   });
      // }

      // const myOtherThing = await sudoCtx.query[listKeyDraft].findOne({
      //   where: { id },
      //   query: query as string,
      // });

      // console.log(myThing, myOtherThing);

      // const {
      //   title,
      //   original,
      //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //   id: draftId,
      //   ...draft
      // } = await sudoCtx.query[listKeyDraft].findOne({
      //   where: { id },
      //   query: query as string,
      // });

      // const published = await sudoCtx.query[listKey].updateOne({
      //   where: {
      //     id: original.id,
      //   },
      //   data: mapDataFields(
      //     draft,
      //     {
      //       title: title.split(' ---')[0],
      //       status: 'published',
      //       publishAt: new Date().toISOString(),
      //     },
      //     'update',
      //   ),
      // });

      // if (!published) {
      //   return res.status(404).json({ error: 'Draft not found' });
      // }

      // await sudoCtx.query[listKeyDraft].deleteOne({
      //   where: { id },
      // });

      // return res.status(200).json({
      //   message: `Draft ${id} published successfully`,
      //   publishedId: original.id,
      // });
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
