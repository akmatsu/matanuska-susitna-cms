import { relationship } from '@keystone-6/core/fields';
import { filterByPubStatus, generalOperationAccess } from '../../access';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../DraftAndVersionsFactory';
import { basePage, basePageQuery, timestampField } from '../../fieldUtils';
import LandingPages from './LandingPages';

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

      landingPages: relationshipController({
        ref: 'LandingPage',
        listName: listNamePlural,
        many: true,
        opts,
      }),
    };
  },
  {
    query: `${basePageQuery} startDate endDate boards {id} communities {id} parks {id} trails {id} facilities {id} actions {id} documents {id}`,
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
