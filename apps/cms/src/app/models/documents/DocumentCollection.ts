import { graphql, list } from '@keystone-6/core';
import { relationship, text, virtual } from '@keystone-6/core/fields';
import { generalOperationAccess } from '../../access';
import {
  embed,
  liveUrl,
  owner,
  titleAndDescription,
  userGroups,
} from '../../fieldUtils';
import { appConfig } from '../../../configs/appConfig';

export const DocumentCollection = list({
  access: {
    operation: generalOperationAccess,
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    ...titleAndDescription(),
    owner,
    documents: relationship({
      ref: 'Document.collections',
      many: true,
      ui: {
        displayMode: 'cards',
        inlineConnect: true,
        cardFields: ['title'],
        inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
        inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
      },
    }),

    // newDocuments: documentRelationshipMany(),

    liveUrl: liveUrl('document-collection', 'id', appConfig.widgetsUrl, true),
    embed: embed('document-collection', 'id', appConfig.widgetsUrl),

    tags: relationship({
      ref: 'Tag',
      many: true,
      ui: {
        displayMode: 'select',
        searchFields: ['name'],
        itemView: {
          fieldPosition: 'sidebar',
        },
      },
    }),

    userGroups: userGroups(),

    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),

    referencedBy: virtual({
      field: (lists) =>
        graphql.field({
          type: graphql.list(lists.Service.types.output),
          async resolve(item, args, context) {
            const res = await context.db.Service.findMany({
              where: {
                body: {
                  contains: item.id.toString(),
                  mode: 'insensitive',
                },
              },
            });

            return res;
          },
        }),

      ui: {
        query: '{ title id }',
        views: './src/components/customFields/ReferencedBy/views.tsx',
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
  },
});
