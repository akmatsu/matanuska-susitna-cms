import { toPascalCase } from '../utils';
import type { RequestControllerWithContext } from './types';
import { mapDataFields } from '../utils/draftUtils';
import { singular } from 'pluralize';

export const publishDraft: RequestControllerWithContext =
  (context) => async (req, res) => {
    try {
      console.log('Publishing draft...');
      const { id, list } = req.params;
      const { query } = req.query;
      const sudoCtx = context.sudo();

      const listKey = toPascalCase(
        singular(list),
      ) as keyof typeof sudoCtx.query;
      const listKeyDraft = `${listKey}Draft` as keyof typeof sudoCtx.query;

      const { title, original, ...draft } = await sudoCtx.query[
        listKeyDraft
      ].findOne({
        where: { id },
        query: query as string,
      });

      const published = await sudoCtx.query[listKey].updateOne({
        where: {
          id: original.id,
        },
        data: mapDataFields(
          draft,
          {
            title: title.split(' ---')[0],
            status: 'published',
            publishAt: new Date().toISOString(),
          },
          'update',
        ),
      });

      if (!published) {
        return res.status(404).json({ error: 'Draft not found' });
      }

      await sudoCtx.query[listKeyDraft].deleteOne({
        where: { id },
      });

      return res.status(200).json({
        message: `Draft ${id} published successfully`,
      });
    } catch (error: any) {
      console.error('Error publishing draft:', error);
      return res.status(500).json({ error: 'Failed to publish draft' });
    }
  };
