import { checkbox, relationship, select, text } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { basePage } from '../basePage';
import { excelUpload } from '../../../components/customFields/excelUpload';

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
      }),

      directoryExcel: excelUpload({
        ui: {
          itemView: {
            fieldPosition: 'form',
          },
        },
      }),

      calendarId: text(),
      calendarQueryString: text(),

      linkToAgendas: relationship({
        ref: 'ExternalLink',
        many: false,
      }),

      linkToResolutions: relationship({
        ref: 'ExternalLink',
        many: false,
      }),

      linkToPublicOpinionMessage: relationship({
        ref: 'ExternalLink',
        many: false,
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
        access: {
          read: { item: allowAll, filter: allowAll, order: allowAll },
        },
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
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Board'),
      filter: filterByPubStatus,
    },
  },
);

export default {
  Board,
  BoardVersion,
  BoardDraft,
};
