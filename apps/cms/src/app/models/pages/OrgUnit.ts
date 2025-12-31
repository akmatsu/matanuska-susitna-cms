import {
  docDelete,
  iconSelect,
  typesenseDelete,
  typesenseUpsert,
} from '../../fieldUtils';
import { basePage } from '../basePage';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access';
import { relationship, select, text } from '@keystone-6/core/fields';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../draftAndVersionFactory/DraftAndVersionsFactory';

const {
  Main: OrgUnit,
  Version: OrgUnitVersion,
  Draft: OrgUnitDraft,
} = DraftAndVersionsFactory(
  'OrgUnit',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, { ...opts, actions: true, documents: true }),
      icon: iconSelect,
      type: select({
        options: [
          { label: 'Office', value: 'office' },
          { label: 'Department', value: 'department' },
          { label: 'Division', value: 'division' },
        ],
      }),

      showPage: select({
        ui: {
          displayMode: 'segmented-control',
          description: 'Should this org unit have its own page on the website?',
        },
        defaultValue: 'yes',
        options: [
          { label: 'No', value: 'no' },
          { label: 'Yes', value: 'yes' },
        ],
      }),
      childrenLabel: text({
        defaultValue: 'Divisions',
      }),
      children: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.parent' : 'OrgUnit',
        many: true,
      }),
      parent: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.children' : 'OrgUnit',
        many: false,
      }),
      boards: relationshipController({
        ref: 'Board',
        listName: 'orgUnits',
        many: true,
        opts,
      }),
      facilities: relationshipController({
        ref: 'Facility',
        listName: 'orgUnits',
        many: true,
        opts,
      }),
      parks: relationshipController({
        ref: 'Park',
        listName: 'orgUnits',
        many: true,
        opts,
      }),
      trails: relationshipController({
        ref: 'Trail',
        listName: 'orgUnits',
        many: true,
        opts,
      }),
    };
  },
  {
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('OrgUnit'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        if (args.item?.showPage === 'yes')
          await typesenseUpsert(
            'orgUnit',
            'id title slug description body publishAt tags {name}',
            args,
          );
        else if (args.operation === 'update') {
          if (
            args.originalItem.showPage !== args.item?.showPage &&
            args.item?.showPage === 'no'
          ) {
            await docDelete(args.item.id.toString());
          }
        }
      },
    },
  },
);

export default {
  OrgUnit,
  OrgUnitVersion,
  OrgUnitDraft,
};
