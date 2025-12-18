import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import { basePage, basePageQuery } from '../basePage';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../draftAndVersionFactory/DraftAndVersionsFactory';

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
    };
  },
  {
    query: `${basePageQuery} trails {id} facilities {id} address {id} hours {id} actions {id} documents {id}`,
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
