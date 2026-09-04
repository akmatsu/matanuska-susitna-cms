import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { list } from '@keystone-6/core';
import { basePage } from '../basePage';

export const FacilityListItem = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    hideNavigation: true,
  },
  fields: {
    order: integer({
      defaultValue: 0,
      validation: { isRequired: true },
      access: {
        read: { item: allowAll, filter: allowAll, order: allowAll },
      },
      ui: {
        description: 'Order of the early voting locations',
      },
    }),
    facility: relationship({
      ref: 'Facility',

      ui: {
        displayMode: 'cards',
        inlineConnect: true,
        inlineEdit: {
          fields: ['title', 'address', 'hours'],
        },
        inlineCreate: {
          fields: ['title', 'address', 'hours'],
        },
        cardFields: ['title', 'address', 'hours'],
      },
    }),
  },
});

const {
  Main: Facility,
  Version: FacilityVersion,
  Draft: FacilityDraft,
} = DraftAndVersionsFactory(
  'Facility',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        address: true,
        hours: true,
        actions: true,
        documents: true,
      }),
      park: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Park.facilities' : 'Park',
        many: false,
      }),
    };
  },
  {
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Facility'),
      filter: filterByPubStatus,
    },
  },
);

export default {
  Facility,
  FacilityVersion,
  FacilityDraft,
};
