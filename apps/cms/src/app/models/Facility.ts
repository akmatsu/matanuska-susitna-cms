import { generalItemAccess, generalOperationAccess } from '../access';
import {
  basePage,
  basePageQuery,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { relationship } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';
import { lowercaseFirstLetter } from '../../utils';

export const {
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
      }),
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Service.${lowercaseFirstLetter(listNamePlural)}`
            : 'Service',
        many: true,
      }),
      park: relationship({
        ref: 'Park.facilities',
        many: false,
      }),
    };
  },
  {
    query: `${basePageQuery} services {id} park {id} address {id} hours {id}`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Facility'),
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'facility',
          'id title description body slug liveUrl publishAt tags {name} owner {name} services {title}',
          args,
        );
      },
    },
  },
);
