import { group } from '@keystone-6/core';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../access';
import {
  basePage,
  emailRegex,
  phoneNumberRegex,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';

export const {
  Main: AssemblyDistrict,
  Version: AssemblyDistrictVersion,
  Draft: AssemblyDistrictDraft,
} = DraftAndVersionsFactory(
  'AssemblyDistrict',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
      ...group({
        label: 'Assembly Member Information',
        fields: {
          photo: relationship({
            ref: 'Image',
            ui: {
              inlineConnect: true,
              displayMode: 'cards',
              cardFields: ['title', 'file'],
              inlineCreate: {
                fields: ['title', 'description', 'file', 'tags'],
              },
              inlineEdit: {
                fields: ['title', 'description', 'file', 'tags'],
              },
            },
          }),
          memberName: text(),
          bio: text({
            ui: {
              displayMode: 'textarea',
            },
          }),
          address: text(),
          email: text({
            validation: {
              match: {
                regex: emailRegex,
                explanation: 'You must input a valid email address.',
              },
              isRequired: false,
            },
            db: {
              isNullable: true,
            },
          }),
          phone: text({
            validation: {
              match: {
                regex: phoneNumberRegex,
                explanation:
                  'You must input a valid phone number. Example: 123-456-7890',
              },
              isRequired: false,
            },
            db: {
              isNullable: true,
            },
          }),
          fax: text({
            validation: {
              match: {
                regex: phoneNumberRegex,
                explanation:
                  'You must input a valid phone number. Example: 123-456-7890',
              },
              isRequired: false,
            },
            db: {
              isNullable: true,
            },
          }),
          termStart: timestamp({
            db: {
              isNullable: true,
            },
          }),
          termEnd: timestamp({
            db: {
              isNullable: true,
            },
            hooks: {
              validate: ({ resolvedData, item, addValidationError }) => {
                const termStart =
                  resolvedData?.['termStart'] || item?.['termStart'];
                const termEnd = resolvedData?.['termEnd'];

                if (!termStart && termEnd) {
                  addValidationError(
                    'You have set an Unpublish date but no Publish date. Either remove the Unpublish date or add a Publish date.',
                  );
                }

                if (termStart && termEnd) {
                  const pub = new Date(termStart);
                  const unPub = new Date(termEnd);
                  if (unPub <= pub) {
                    addValidationError(
                      'Invalid unpublish date. Please select an unpublish date that is after the publish date.',
                    );
                  }
                }
              },
            },
          }),
        },
      }),

      boards: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Board.districts' : 'Board',
        many: true,
      }),

      topics: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Topic.districts' : 'Topic',
        many: true,
      }),
    };
  },
  {
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('AssemblyDistrict'),
      filter: filterByPubStatus,
    },
    query:
      'id title description body tags {id} photo {id} contacts {id} bio memberName address email phone fax termStart termEnd __typename actions {id} documents {id}',
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'assemblyDistrict',
          'id title description body slug liveUrl publishAt tags {name}',
          args,
        );
      },
    },
  },
);
