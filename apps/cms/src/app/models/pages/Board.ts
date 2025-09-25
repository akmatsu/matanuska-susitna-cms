import { checkbox, relationship, select, text } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';
import {
  basePage,
  basePageQuery,
  typesenseDelete,
  typesenseUpsert,
} from '../../fieldUtils';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';

const {
  Main: Board,
  Version: BoardVersion,
  Draft: BoardDraft,
} = DraftAndVersionsFactory(
  'Board',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        actions: true,
        documents: true,
      }),

      directory: relationship({
        ref: 'Document',
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: {
            fields: ['title', 'description', 'file', 'tags'],
          },
          inlineEdit: {
            fields: ['title', 'description', 'file', 'tags'],
          },
        },
      }),

      calendarId: text(),
      calendarQueryString: text(),

      linkToAgendas: relationship({
        ref: 'ExternalLink',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
        },
      }),

      linkToResolutions: relationship({
        ref: 'ExternalLink',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
        },
      }),

      linkToPublicOpinionMessage: relationship({
        ref: 'ExternalLink',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
        },
      }),

      type: select({
        options: [
          { label: 'Board', value: 'board' },
          { label: 'Community Council', value: 'community_council' },
          { label: 'SSA Board', value: 'ssa_board' },
          { label: 'FSA Board', value: 'fsa_board' },
          { label: 'RSA Board', value: 'rsa_board' },
          { label: 'Other', value: 'other' },
        ],
        validation: {
          isRequired: true,
        },
        defaultValue: 'board',
        ui: {
          displayMode: 'select',
        },
      }),

      isActive: checkbox({
        defaultValue: true,
        isFilterable: true,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          createView: {
            fieldMode: 'hidden',
          },
        },
      }),
    };
  },
  {
    versionLimit: 20,
    versionAgeDays: 365,
    query: `${basePageQuery} directory {id} calendarId calendarQueryString type isActive linkToAgendas {id} linkToResolutions {id} linkToPublicOpinionMessage {id} actions {id} documents {id}`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Board'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },

      async afterOperation(args) {
        await typesenseUpsert(
          'board',
          'id title description body slug publishAt tags {name} communities {title}',
          args,
        );
      },
    },
  },
);

export default {
  Board,
  BoardVersion,
  BoardDraft,
};
