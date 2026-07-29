import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { createAndSendBulletin } from '../../../utils/emailUtils';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { basePage } from '../basePage';

const {
  Main: PublicNotice,
  Version: PublicNoticeVersion,
  Draft: PublicNoticeDraft,
} = DraftAndVersionsFactory(
  'PublicNotice',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
      type: text({
        defaultValue: 'none',
        validation: {
          isRequired: true,
        },
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          views: './src/components/customFields/publicNoticeType/views.tsx',
        },
      }),
      urgency: select({
        type: 'integer',
        options: [
          { label: 'Low', value: 1 },
          { label: 'Normal', value: 2 },
          { label: 'High', value: 3 },
          { label: 'Urgent', value: 4 },
          { label: 'Emergency', value: 5 },
        ],
        defaultValue: 2,
        isOrderable: true,
        validation: {
          isRequired: true,
        },
        ui: {
          displayMode: 'segmented-control',
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
      }),
      effectiveDate: timestamp({
        db: {
          isNullable: true,
        },
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),
      endDate: timestamp({
        db: {
          isNullable: true,
        },
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),
      parks: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Park.publicNotices' : 'Park',
        many: true,
      }),
      facilities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'Facility.publicNotices'
            : 'Facility',
        many: true,
      }),
      trails: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Trail.publicNotices' : 'Trail',
        many: true,
      }),

      boards: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Board.publicNotices' : 'Board',
        many: true,
      }),
    };
  },
  {
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('PublicNotice'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async afterOperation(args) {
        if (args.operation === 'create' || args.operation === 'update') {
          const doTheThing = () => {
            if (args.item.type !== 'none')
              return createAndSendBulletin(
                args.item.title as string,
                args.item.description as string,
                'public-notices',
                args.item.slug as string,
                args.item.heroImage as string | undefined | null,
                args.item.type as string,
              );
          };

          if (args.item.status === 'published') {
            if (
              args.operation === 'update' &&
              args.originalItem.status !== 'published'
            ) {
              await doTheThing();
            } else if (args.operation === 'create') {
              await doTheThing();
            }
          }
        }
      },
    },
  },
);

export default {
  PublicNotice,
  PublicNoticeVersion,
  PublicNoticeDraft,
};
