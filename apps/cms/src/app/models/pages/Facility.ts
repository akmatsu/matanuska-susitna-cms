import { type Lists } from '.keystone/types';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import { integer, relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { list } from '@keystone-6/core';
import { basePage } from '../basePage';

export const FacilityListItem = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    order: integer({
      defaultValue: 0,
      validation: { isRequired: true },
      isOrderable: true,
      isFilterable: true,
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
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert('facility', args);
      },
    },
  },
);

export default {
  Facility,
  FacilityVersion,
  FacilityDraft,
} satisfies Lists;
