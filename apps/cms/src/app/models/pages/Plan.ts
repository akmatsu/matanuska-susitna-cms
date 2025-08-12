import { integer, relationship, select, text } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';
import { basePage, documentRelationship } from '../../fieldUtils';
import { group, list, ListConfig } from '@keystone-6/core';
import { filterByPubStatus, generalOperationAccess } from '../../access';

const planListName = 'Plan';

const PlanCode: ListConfig<any> = list({
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

const PlanDocument: ListConfig<any> = list({
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
                'A link to website for this plan or an effort to update this plan.',
              displayMode: 'cards',
              cardFields: ['label', 'url'],
              inlineCreate: {
                fields: ['label', 'url'],
              },
              inlineEdit: {
                fields: ['label', 'url'],
              },
            },
          }),
          autoRedirectToExternalWebsite: select({
            type: 'integer',
            options: [
              { label: 'No', value: 0 },
              { label: 'Yes', value: 1 },
            ],
            ui: {
              description:
                'Automatically redirect to the external website when this plan is accessed.',
              displayMode: 'segmented-control',
            },
            defaultValue: 0,
            validation: {
              isRequired: true,
            },
          }),
        },
      }),
      ...group({
        label: 'Plan relationships',
        description: 'Any relationships this plan has with other plans.',
        fields: {
          parent: relationship({
            ref:
              opts?.isDraft || opts?.isVersion
                ? planListName
                : `${planListName}.components`,
          }),
          components: relationship({
            ref:
              opts?.isDraft || opts?.isVersion
                ? planListName
                : `${planListName}.parent`,
            many: true,
          }),
        },
      }),
      type: select({
        options: [
          { label: 'Legislative', value: 'legislative' },
          { label: 'Strategic', value: 'strategic' },
        ],
        validation: {
          isRequired: true,
        },
        defaultValue: 'legislative',
        ui: {
          displayMode: 'segmented-control',
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
      }),
      code: relationship({
        ref: 'PlanCode',
        many: true,
        ui: {
          displayMode: 'cards',
          cardFields: ['code'],
          inlineCreate: {
            fields: ['code'],
          },
          inlineEdit: {
            fields: ['code'],
          },
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
      }),

      ...group({
        label: 'Legislative Documents',
        fields: {
          currentDocument: relationship({
            ref: 'PlanDocument',
            ui: {
              description: 'The current legislative document for this plan',
            },
            hooks: {
              resolveInput({ resolvedData, fieldKey, operation, item }) {
                if (operation === 'update') {
                  const pastConnect = resolvedData.pastDocuments?.connect;
                  const draftConnect = resolvedData.draftDocument?.connect;

                  if (
                    draftConnect?.id &&
                    draftConnect.id === item.currentDocumentId
                  ) {
                    return {
                      disconnect: true,
                    };
                  }

                  if (Array.isArray(pastConnect)) {
                    for (let i = 0, l = pastConnect.length; i < l; i++) {
                      const id = pastConnect[i]?.id;
                      if (id === item.currentDocumentId) {
                        return {
                          disconnect: true,
                        };
                      }
                    }
                  } else if (
                    pastConnect?.id &&
                    pastConnect.id === item.currentDocumentId
                  ) {
                    return {
                      disconnect: true,
                    };
                  }
                }
                return resolvedData[fieldKey];
              },
            },
          }),
          draftDocument: relationship({
            ref: 'PlanDocument',
            ui: {
              description:
                'A draft of a new version of the legislative document',
            },
            hooks: {
              resolveInput({ resolvedData, fieldKey, operation, item }) {
                if (operation === 'update') {
                  if (
                    item.draftDocumentId ===
                    resolvedData.currentDocument?.connect?.id
                  ) {
                    return {
                      disconnect: true,
                    };
                  }
                }

                return resolvedData[fieldKey];
              },
            },
          }),
          pastDocuments: relationship({
            ref: 'PlanDocument',
            many: true,
            ui: {
              description: 'Past legislative documents for this plan',
            },
            hooks: {
              resolveInput({ operation, fieldKey, item, resolvedData }) {
                if (operation === 'update') {
                  const connectCurrentId =
                    resolvedData.currentDocument?.connect?.id;
                  const connectDraftId =
                    resolvedData.draftDocument?.connect?.id;
                  const disconnect = [
                    connectCurrentId && {
                      id: connectCurrentId,
                    },
                    connectDraftId && {
                      id: connectDraftId,
                    },
                  ].filter(Boolean);

                  const connect = [
                    resolvedData.currentDocument?.connect?.id &&
                      item.currentDocumentId &&
                      item.currentDocumentId !==
                        resolvedData.currentDocument?.connect?.id && {
                        id: item.currentDocumentId,
                      },
                  ].filter(Boolean);

                  if (disconnect.length > 0 || connect.length > 0) {
                    return {
                      ...(disconnect.length > 0 && { disconnect }),
                      ...(connect.length > 0 && { connect }),
                    };
                  }
                }
                return resolvedData[fieldKey];
              },
            },
          }),
        },
      }),
      topics: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Topic.plans' : 'Topic',
        many: true,
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
  },
);

export default {
  Plan: Main,
  PlanVersion: Version,
  PlanDraft: Draft,
  PlanCode,
  PlanDocument,
};
