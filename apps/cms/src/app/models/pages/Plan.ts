import { integer, relationship, select, text } from '@keystone-6/core/fields';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../DraftAndVersionsFactory';
import {
  basePage,
  cardsUi,
  documentRelationship,
  sidebar,
  switchField,
  typesenseDelete,
  typesenseUpsert,
} from '../../fieldUtils';
import { group, list } from '@keystone-6/core';
import { filterByPubStatus, generalOperationAccess } from '../../access';
import { planDocumentFieldHooks } from './plan/planDocumentFieldHooks';

const planListName = 'Plan';
const PLAN_TYPES = [
  { label: 'Legislative', value: 'legislative' },
  { label: 'Strategic', value: 'strategic' },
] as const;

type PlanType = (typeof PLAN_TYPES)[number]['value'];

const PlanCode = list({
  access: {
    operation: generalOperationAccess,
  },
  fields: {
    code: text({
      ui: {
        description:
          'The unique Borough Code in CodePublishing.com. E.G. 15.24.030, or 17.15',
      },
      validation: {
        isRequired: true,
        length: {
          min: 2,
        },
      },
    }),
  },
});

const PlanDocument = list({
  access: {
    operation: generalOperationAccess,
  },
  fields: {
    label: text(),
    supersededBy: relationship({
      ref: 'PlanDocument.precededBy',
    }),
    precededBy: relationship({
      ref: 'PlanDocument.supersededBy',
    }),
    adoptedYear: integer(),
    document: documentRelationship(),
  },
});

const { Main, Version, Draft } = DraftAndVersionsFactory(
  planListName,
  (planListNamePlural, opts) => {
    return {
      ...basePage(planListNamePlural, {
        ...opts,
        actions: true,
        documents: true,
      }),

      ...group({
        label: 'External Website',
        fields: {
          effort: relationship({
            label: 'Link',
            ref: 'ExternalLink',
            ui: {
              description:
                'A link to website for this plan or an effort to update this plan',
              ...cardsUi(['label', 'url']),
            },
          }),
          autoRedirectToExternalWebsite: switchField(),
        },
      }),

      ...group({
        label: 'Plan relationships',
        description: 'Any relationships this plan has with other plans.',
        fields: {
          parent: relationshipController({
            listName: 'components',
            ref: planListName,
            opts,
          }),

          components: relationshipController({
            listName: 'parent',
            ref: planListName,
            many: true,
            opts,
          }),
        },
      }),

      type: select({
        options: PLAN_TYPES,
        validation: { isRequired: true },
        defaultValue: 'legislative' as PlanType,
        ui: { displayMode: 'segmented-control', ...sidebar },
      }),

      code: relationship({
        ref: 'PlanCode',
        many: true,
        ui: { ...cardsUi(['code']), ...sidebar },
      }),

      ...group({
        label: 'Legislative Documents',
        fields: {
          currentDocument: relationship({
            ref: 'PlanDocument',
            ui: {
              description: 'The current legislative document for this plan',
            },
            hooks: planDocumentFieldHooks.currentDocument,
          }),
          draftDocument: relationship({
            ref: 'PlanDocument',
            ui: {
              description:
                'A draft of a new version of the legislative document',
            },
            hooks: planDocumentFieldHooks.draftDocument,
          }),
          pastDocuments: relationship({
            ref: 'PlanDocument',
            many: true,
            ui: {
              description: 'Past legislative documents for this plan',
            },
            hooks: planDocumentFieldHooks.pastDocuments,
          }),
        },
      }),
    };
  },
  {
    versionLimit: 20,
    versionAgeDays: 365,
    query:
      'id heroImage title description body tags {id} orgUnits {id} communities {id} contacts {id} userGroups {id} editorNotes __typename actions {id} documents {id} code {id} currentDocument {id} draftDocument {id} pastDocuments {id} events {id} type parent {id} components {id} effort {id} autoRedirectToExternalWebsite',
    mainAccess: {
      operation: generalOperationAccess,
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'plan',
          'id title slug description body publishAt tags {name} orgUnits {title} communities {title} contacts {name} actions {label} documents {title}',
          args,
        );
      },
    },
  },
);

export default {
  Plan: Main,
  PlanVersion: Version,
  PlanDraft: Draft,
  PlanCode,
  PlanDocument,
};
