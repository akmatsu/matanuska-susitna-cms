import { type Lists } from '.keystone/types';
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
import { integer, relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../../DraftAndVersionsFactory';
import { lowercaseFirstLetter } from '../../../utils';
import { list } from '@keystone-6/core';

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
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Service.${lowercaseFirstLetter(listNamePlural)}`
            : 'Service',
        many: true,
      }),
      park: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Park.facilities' : 'Park',
        many: false,
      }),
      communities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'Community.facilities'
            : 'Community',
        many: false,
      }),
    };
  },
  {
    query: `${basePageQuery} services {id} park {id} address {id} hours {id} actions {id} documents {id} communities {id}`,
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
        await typesenseUpsert(
          'facility',
          'id title description body slug liveUrl publishAt tags {name} owner {name} services {title} community {title}',
          args,
        );
      },
    },
  },
);

export default {
  Facility,
  FacilityVersion,
  FacilityDraft,
} satisfies Lists;
