import { list } from '@keystone-6/core';
import { file, integer, relationship, text } from '@keystone-6/core/fields';
import { appConfig } from '../../../configs/appConfig';
import { generalOperationAccess } from '../../access';
import { documentRelationship } from '../../fieldUtils';

export const DocumentListItem = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
    hideCreate: false,
  },
  fields: {
    label: text({
      ui: {
        description:
          'Optional. This label will be displayed in the UI. E.G. primary document',
      },
    }),
    order: integer({
      ui: {
        description:
          'Value is ascending. Lower Numbers appear first. E.G. 0, 1, 2',
      },
      validation: {
        isRequired: true,
      },
      defaultValue: 0,
    }),
    document: documentRelationship(),
  },
});

export const Document = list({
  access: {
    operation: generalOperationAccess,
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    title: text({ validation: { isRequired: true }, isIndexed: true }),
    description: text({ validation: { isRequired: false } }),
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
    file: file({
      storage:
        appConfig.nodeEnv === 'production' ? 's3Documents' : 'localDocuments',
    }),
    collections: relationship({
      ref: 'DocumentCollection.documents',
      many: true,
      ui: {
        displayMode: 'select',
        searchFields: ['title'],
      },
    }),
    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
});
