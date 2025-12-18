import { group } from '@keystone-6/core';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import { basePage, basePageQuery } from '../basePage';
import { checkbox, relationship, select, text } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';

const {
  Main: Trail,
  Version: TrailVersion,
  Draft: TrailDraft,
} = DraftAndVersionsFactory(
  'Trail',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        address: true,
        actions: true,
        documents: true,
      }),
      maintainer: select({
        options: [
          'AURORA DOG MUSHERS CLUB',
          'BIG LAKE TRAILS',
          'CURRY RIDGE RIDERS',
          'DENALI NORDIC SKI CLUB',
          'LAKE LOUISE SNOWMACHINE CLUB',
          'MAT-SU SKI CLUB',
          'MID-VALLEY TRAIL CLUB',
          'PETERSVILLE COMMUNITY NON-PROFIT CORP',
          'SKEETAWK',
          'SKWENTNA TRAIL GROOMING COMMITTEE',
          'VALLEY MOUNTAIN BIKERS AND HIKERS',
          'WILLOW TRAIL COMMITTEE',
          'MAT-SU BOROUGH',
        ],
      }),
      open: checkbox({ defaultValue: false }),
      ...group({
        label: 'Seasons',
        fields: {
          summer: checkbox({ defaultValue: false }),
          fall: checkbox({ defaultValue: false }),
          winter: checkbox({ defaultValue: false }),
          spring: checkbox({ defaultValue: false }),
        },
      }),
      ...group({
        label: 'Uses',
        fields: {
          hiking: checkbox({ defaultValue: false }),
          biking: checkbox({ defaultValue: false }),
          horsebackRiding: checkbox({ defaultValue: false }),
          crossCountrySkiing: checkbox({ defaultValue: false }),
          snowshoeing: checkbox({ defaultValue: false }),
          frisbeeGolf: checkbox({ defaultValue: false }),
          dogWalking: checkbox({ defaultValue: false }),
          running: checkbox({ defaultValue: false }),
          snowMachining: checkbox({ defaultValue: false }),
          atv: checkbox({ defaultValue: false }),
          dirtBiking: checkbox({ defaultValue: false }),
          mushing: checkbox({ defaultValue: false }),
        },
      }),
      difficulty: select({
        options: ['Easy', 'Moderate', 'Difficult', 'Extreme'],
      }),
      length: text(),
      elevationChange: text(),
      park: relationship({
        ref: opts?.isDraft || opts?.isVersion ? 'Park' : 'Park.trails',
        many: false,
      }),
    };
  },
  {
    query: `${basePageQuery} address {id} actions {id} documents {id} park {id} address {id} hiking biking horsebackRiding crossCountrySkiing snowshoeing frisbeeGolf dogWalking running snowMachining atv dirtBiking mushing open summer fall winter spring difficulty length elevationChange`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Trail'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'trail',
          'id title description body slug liveUrl publishAt owner {name} tags {name} services {title} park {title}',
          args,
        );
      },
    },
  },
);

export default {
  Trail,
  TrailVersion,
  TrailDraft,
};
