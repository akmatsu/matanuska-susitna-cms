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
import { relationship, select, timestamp } from '@keystone-6/core/fields';
import { createAndSendBulletin } from '../../../utils/emailUtils';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';

const {
  Main: PublicNotice,
  Version: PublicNoticeVersion,
  Draft: PublicNoticeDraft,
} = DraftAndVersionsFactory(
  'PublicNotice',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
      type: select({
        type: 'string',
        defaultValue: 'AKMATSUGOV_PublicNotice',
        options: [
          { label: 'General', value: 'AKMATSUGOV_PublicNotice' },
          { label: 'Air Quality Alerts', value: 'MSB_AirQuality' },
          { label: 'Land Sales', value: 'AKMATSUGOV_CommunityDevelopment ' },
          {
            label: 'Road Construction & Closures',
            value: 'MSB_RoadConstruction',
          },
        ],
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
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
    query: `${basePageQuery} type urgency effectiveDate endDate parks { id } facilities { id } trails { id } boards { id } actions { id } documents { id }`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('PublicNotice'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'public-notice',
          'id title slug description body publishAt tags {name} services {title} parks {title} orgUnits {title} facilities {title} trails {title} communities {title} assemblyDistricts {title} urgency',
          args,
        );

        if (args.operation === 'create' || args.operation === 'update') {
          const doTheThing = () => {
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
