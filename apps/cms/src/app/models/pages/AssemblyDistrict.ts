import { group } from '@keystone-6/core';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import {
  emailRegex,
  phoneNumberRegex,
  typesenseDelete,
  typesenseUpsert,
} from '../../fieldUtils';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { basePage } from '../basePage';

const {
  Main: AssemblyDistrict,
  Version: AssemblyDistrictVersion,
  Draft: AssemblyDistrictDraft,
} = DraftAndVersionsFactory(
  'AssemblyDistrict',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        actions: true,
        documents: true,
        address: true,
      }),
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
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'Board.assemblyDistricts'
            : 'Board',
        many: true,
      }),
      facilities: relationshipController({
        ref: 'Facility',
        listName: 'assemblyDistricts',
        many: true,
        opts,
      }),
      parks: relationshipController({
        ref: 'Park',
        listName: 'assemblyDistricts',
        many: true,
        opts,
      }),
      trails: relationshipController({
        ref: 'Trail',
        listName: 'assemblyDistricts',
        many: true,
        opts,
      }),
    };
  },
  {
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('AssemblyDistrict'),
      filter: filterByPubStatus,
    },
    searchTypeOverride: 'Assembly District',
  },
);

export default {
  AssemblyDistrict,
  AssemblyDistrictVersion,
  AssemblyDistrictDraft,
};
