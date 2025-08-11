import { filterByPubStatus, generalOperationAccess } from '../../access';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';
import { basePage, timestampField } from '../../fieldUtils';

const Event = DraftAndVersionsFactory(
  'Event',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        actions: true,
        documents: true,
      }),
      startDate: timestampField(),
      endDate: timestampField(),
    };
  },
  {
    mainAccess: {
      operation: generalOperationAccess,
      filter: filterByPubStatus,
    },
  },
);

export default {
  Event: Event.Main,
  EventDraft: Event.Draft,
  EventVersion: Event.Version,
};
