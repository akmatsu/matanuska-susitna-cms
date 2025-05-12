import { list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import {
  basePage,
  basePageQuery,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';

export const {
  Main: Park,
  Version: ParkVersion,
  Draft: ParkDraft,
} = DraftAndVersionsFactory(
  'Park',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        address: true,
        hours: true,
        actions: true,
        documents: true,
      }),
      services: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? `Service.parks` : 'Service',
        many: true,
      }),
      trails: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Trail.park' : 'Trail',
        many: true,
      }),
      facilities: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Facility.park' : 'Facility',
        many: true,
      }),
    };
  },
  {
    query: `${basePageQuery} services {id} trails {id} facilities {id} address {id} hours {id} actions {id} documents {id}`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Park'),
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'park',
          'id title description body slug liveUrl publishAt owner {name} tags {name} services {title} trails {title} facilities {title}',
          args,
        );
      },
    },
  },
);
