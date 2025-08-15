import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import {
  basePage,
  basePageQuery,
  typesenseDelete,
  typesenseUpsert,
} from '../../fieldUtils';
import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';

const {
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
      communities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Community.parks' : 'Community',
        many: true,
      }),
    };
  },
  {
    query: `${basePageQuery} services {id} trails {id} facilities {id} address {id} hours {id} actions {id} documents {id} communities {id}`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Park'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'park',
          'id title description body slug liveUrl publishAt owner {name} tags {name} services {title} trails {title} facilities {title} communities {title}',
          args,
        );
      },
    },
  },
);

export default {
  Park,
  ParkVersion,
  ParkDraft,
};
