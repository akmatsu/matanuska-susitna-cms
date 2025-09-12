import { relationship } from '@keystone-6/core/fields';
import { filterByPubStatus, generalOperationAccess } from '../../access';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';
import { basePage, basePageQuery, timestampField } from '../../fieldUtils';

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
      boards: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Board.events' : 'Board',
        many: true,
      }),

      communities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Community.events' : 'Community',
        many: true,
      }),

      parks: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Park.events' : 'Park',
        many: true,
      }),

      trails: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Trail.events' : 'Trail',
        many: true,
      }),

      facilities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Facility.events' : 'Facility',
        many: true,
      }),
    };
  },
  {
    query: `${basePageQuery} plans {id} facilities {id} parks {id} trails {id} services {id} boards {id} communities {id} startDate endDate actions {id} documents {id}`,
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
