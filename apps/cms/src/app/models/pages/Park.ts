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
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../DraftAndVersionsFactory';

const listName = 'Park';

const {
  Main: Park,
  Version: ParkVersion,
  Draft: ParkDraft,
} = DraftAndVersionsFactory(
  listName,
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        address: true,
        hours: true,
        actions: true,
        documents: true,
      }),
      services: relationshipController({
        listName,
        ref: 'Service',
        opts,
        many: true,
      }),
      trails: relationshipController({
        listName,
        ref: 'Trail',
        opts,
        many: true,
      }),
      facilities: relationshipController({
        listName,
        ref: 'Facility',
        opts,
        many: true,
      }),
      communities: relationshipController({
        listName,
        ref: 'Community',
        opts,
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
