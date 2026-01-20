import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { basePage } from '../basePage';
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
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Park'),
      filter: filterByPubStatus,
    },
  },
);

export default {
  Park,
  ParkVersion,
  ParkDraft,
};
