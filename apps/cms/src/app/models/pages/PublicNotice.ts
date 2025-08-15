import { basePage, typesenseDelete, typesenseUpsert } from '../../fieldUtils';
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
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'Service.publicNotices'
            : 'Service',
        many: true,
      }),
      orgUnits: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'OrgUnit.publicNotices'
            : 'OrgUnit',
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
      communities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'Community.publicNotices'
            : 'Community',
        many: true,
      }),
      assemblyDistricts: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'AssemblyDistrict.publicNotices'
            : 'AssemblyDistrict',
        many: true,
      }),
      boards: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Board.publicNotices' : 'Board',
        many: true,
      }),
      plans: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Plan.publicNotices' : 'Plan',
        many: true,
      }),
    };
  },
  {
    query:
      'id heroImage title description body tags {id} userGroups {id} urgency effectiveDate endDate parks {id} services {id} orgUnits {id} facilities {id} trails {id} communities {id} assemblyDistricts {id} __typename actions {id} documents {id} contacts {id}',
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

        if (args.operation === 'create') {
          await createAndSendBulletin(
            args.item.title as string,
            args.item.description as string,
            'public-notices',
            args.item.slug as string,
            args.item.heroImage as string | undefined | null,
          );
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
