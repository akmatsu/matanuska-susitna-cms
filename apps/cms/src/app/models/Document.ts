import { list, ListConfig } from '@keystone-6/core';
import { file, relationship, text } from '@keystone-6/core/fields';
import { appConfig } from '../../configs/appConfig';
import { generalOperationAccess } from '../access';

export const Document: ListConfig<any> = list({
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
      ref: 'Tag.documents',
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

      // TODO!: Fix file validations.
      // hooks: {
      //   validate({ operation, addValidationError, resolvedData, fieldKey }) {
      //     if (operation === 'create' || operation === 'update') {
      //       if (
      //         !!resolvedData[fieldKey].filename &&
      //         !!resolvedData[fieldKey].filesize
      //       ) {
      //         if (!/\.(pdf|txt|docx|xlsx)$/.test(resolvedData[fieldKey])) {
      //           addValidationError(
      //             'You can only upload pdf, txt, docx, and xlsx files.',
      //           );
      //           return;
      //         }
      //       }
      //     }
      //     return resolvedData[fieldKey];
      //   },
      // },
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
