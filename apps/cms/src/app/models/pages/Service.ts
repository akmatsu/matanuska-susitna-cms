import { relationship, text } from '@keystone-6/core/fields';
import { typesenseDelete, typesenseUpsert } from '../../fieldUtils';
import {
  filterByPubStatus,
  generalItemAccess,
  generalOperationAccess,
} from '../../access/utils';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { basePage } from '../basePage';

/**
 * Creates a relationship with the {@link Service} model.
 */
export function serviceRelationship(opts?: {
  refField?: string;
  many?: boolean;
}) {
  return relationship({
    ref: opts?.refField ? `Service.${opts.refField}` : 'Service',
    many: opts?.many,
  });
}

const {
  Main: Service,
  Version: ServiceVersion,
  Draft: ServiceDraft,
} = DraftAndVersionsFactory(
  'Service',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
        primaryAction: true,
        primaryContact: true,
        secondaryActions: true,
        documents: true,
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
      boards: relationshipController({
        ref: 'Board',
        many: true,
        listName: listNamePlural,
        opts,
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

    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Service'),
      filter: filterByPubStatus,
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },

      async afterOperation(args) {
        await typesenseUpsert(
          'service',
          `id title description body slug owner {name} publishAt tags {name} orgUnits {title} communities {title} documents {title} primaryAction {label} secondaryActions {label} primaryContact {name}`,
          args,
        );
      },
    },
  },
);

export default {
  Service,
  ServiceVersion,
  ServiceDraft,
};
