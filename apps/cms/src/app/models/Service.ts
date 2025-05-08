import { relationship, text } from '@keystone-6/core/fields';
import { basePage, typesenseDelete, typesenseUpsert } from '../fieldUtils';
import {
  filterByPubDates,
  generalItemAccess,
  generalOperationAccess,
} from '../access/utils';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';

export const {
  Main: Service,
  Version: ServiceVersion,
  Draft: ServiceDraft,
} = DraftAndVersionsFactory(
  'Service',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, opts),
      communities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? 'Community.services'
            : 'Community',
        many: true,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          hideCreate: true,
        },
      }),

      orgUnits: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'OrgUnit.services' : 'OrgUnit',
        many: true,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          createView: {
            fieldMode: 'hidden',
          },
          hideCreate: true,
        },
      }),

      trails: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Trail.services' : 'Trail',
        many: true,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          createView: {
            fieldMode: 'hidden',
          },
          hideCreate: true,
        },
      }),

      parks: relationship({
        ref: !opts?.isDraft && !opts?.isVersion ? 'Park.services' : 'Park',
        many: true,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          createView: {
            fieldMode: 'hidden',
          },
          hideCreate: true,
        },
      }),

      facilities: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion ? 'Facility.services' : 'Facility',
        many: true,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          createView: {
            fieldMode: 'hidden',
          },
          hideCreate: true,
        },
      }),

      editorNotes: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
    };
  },

  {
    versionLimit: 20,
    versionAgeDays: 365,
    query: `id heroImage title description body tags {id} owner {id} orgUnits {id} communities {id} contacts {id} userGroups {id} trails {id} parks {id} facilities {id} editorNotes __typename`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Service'),
      filter: filterByPubDates,
    },
    mainGraphqlOptions: {
      maxTake: 100,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },

      async afterOperation(args) {
        await typesenseUpsert(
          'service',
          `id title description body slug owner {name} publishAt tags {name} orgUnits {title} communities {title}`,
          args,
        );
      },
    },
  },
);
