import { BaseFields, graphql, group } from '@keystone-6/core';
import {
  relationship,
  text,
  timestamp,
  virtual,
} from '@keystone-6/core/fields';
import {
  BaseItem,
  BaseListTypeInfo,
  KeystoneContextFromListTypeInfo,
} from '@keystone-6/core/types';
import { isAdmin } from './access/roles';
import { isOwner } from './access/group';
import { appConfig } from '../configs/appConfig';
import { getDatetimeISOString } from './access';
import {
  blueHarvestImage,
  BlueHarvestImageConfig,
} from '../components/customFields/blueHarvestImage';
import {
  customText,
  CustomTextOpts,
} from '../components/customFields/Markdown';
import {
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from '../utils/typesense';
import { capitalizeFirstLetter, toPascalCase } from '../utils';

export const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/;
export const phoneNumberRegex =
  /^(\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4})$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const timestamps: BaseFields<any> = {
  createdAt: timestamp({
    defaultValue: { kind: 'now' },
    ui: {
      itemView: {
        fieldMode: 'hidden',
        fieldPosition: 'sidebar',
      },
      createView: { fieldMode: 'hidden' },
    },
  }),

  updatedAt: timestamp({
    defaultValue: { kind: 'now' },
    db: { updatedAt: true },
    ui: {
      itemView: { fieldMode: 'hidden', fieldPosition: 'sidebar' },
      createView: { fieldMode: 'hidden' },
    },
  }),
};

export function liveUrl(
  listKey: string,
  identifierKey = 'slug',
  baseUrl = appConfig.siteUrl,
  ignorePubDates = false,
) {
  return virtual({
    field: graphql.field({
      type: graphql.String,
      resolve(baseItem: any) {
        baseItem as { [key: string]: string };
        return `${baseUrl}/${listKey}/${baseItem[identifierKey]}`;
      },
    }),
    ui: {
      views: './src/components/customFields/liveUrl/views.tsx',
      createView: {
        fieldMode: 'hidden',
      },
      itemView: {
        fieldPosition: 'sidebar',
        fieldMode(args) {
          if (ignorePubDates) return 'read';

          const now = getDatetimeISOString();
          const pubAt = args.item.publishAt
            ? getDatetimeISOString(args.item.publishAt as Date)
            : false;
          const unpubAt = args.item.unpublishAt
            ? getDatetimeISOString(args.item.unpublishAt as Date)
            : false;
          if (pubAt <= now && (!unpubAt || unpubAt >= now)) return 'read';
          else return 'hidden';
        },
      },
    },
  });
}

export function embed(
  listKey: string,
  identifierKey = 'slug',
  baseUrl = appConfig.siteUrl,
) {
  return virtual({
    field: graphql.field({
      type: graphql.String,
      resolve(baseItem: any) {
        baseItem as { [key: string]: string };
        return `${baseUrl}/${listKey}/${baseItem[identifierKey]}`;
      },
    }),
    ui: {
      views: './src/components/customFields/embed/views.tsx',
      itemView: {
        fieldPosition: 'sidebar',
      },
      createView: {
        fieldMode: 'hidden',
      },
    },
  });
}

export const publishable: BaseFields<any> = {
  ...group({
    label: 'Publishing',

    fields: {
      publishAt: timestamp({
        db: {
          isNullable: true,
        },
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
      }),
      unpublishAt: timestamp({
        db: {
          isNullable: true,
        },
        ui: {
          views: './src/components/customFields/datetime/views.tsx',
        },
        hooks: {
          validate: ({ resolvedData, item, addValidationError }) => {
            const publishAt =
              resolvedData?.['publishAt'] || item?.['publishAt'];
            const unpublishAt = resolvedData?.['unpublishAt'];

            if (!publishAt && unpublishAt) {
              addValidationError(
                'You have set an Unpublish date but no Publish date. Either remove the Unpublish date or add a Publish date.',
              );
            }

            if (publishAt && unpublishAt) {
              const pub = new Date(publishAt);
              const unPub = new Date(unpublishAt);
              if (unPub <= pub) {
                addValidationError(
                  'Invalid unpublish date. Please select an unpublish date that is after the publish date.',
                );
              }
            }
          },
        },
      }),
      reviewDate: timestamp({
        db: {
          isNullable: true,
        },
        ui: {
          createView: { fieldMode: 'hidden' },
          views: './src/components/customFields/datetime/views.tsx',
        },
        hooks: {
          resolveInput: ({ operation, resolvedData }) => {
            if (operation === 'create' && !resolvedData?.reviewDate) {
              const reviewDate = new Date();
              reviewDate.setMonth(reviewDate.getMonth() + 6);
              return reviewDate;
            }
            return resolvedData.reviewDate;
          },
        },
      }),
    },
  }),
};

type titleAndDescriptionOpts = {
  title?: {
    required?: boolean;
    lengthMin?: number;
    lengthMax?: number;
    description?: string;
  };
  description?: {
    description?: string;
  };
};

export function titleAndDescription(
  opts?: titleAndDescriptionOpts,
): BaseFields<any> {
  return {
    title: text({
      validation: {
        // If required is undefined will default to true, otherwise uses the value of required
        isRequired:
          opts?.title?.required !== undefined ? opts.title.required : true,
        length: {
          max: opts?.title?.lengthMax || 100,
          min: opts?.title?.lengthMin || 2,
        },
      },
      ui: {
        displayMode: 'input',
      },
      isIndexed: 'unique',
    }),
    description: text({
      validation: {
        length: {
          max: 255,
        },
      },
      ui: {
        displayMode: 'textarea',
      },
    }),
  };
}

export const slug = text({
  isIndexed: 'unique',
  ui: {
    createView: {
      fieldMode: 'hidden',
    },
    itemView: {
      fieldPosition: 'sidebar',
    },
  },

  hooks: {
    resolveInput: ({ operation, resolvedData, fieldKey }) => {
      if (operation === 'create') {
        if (resolvedData['title']) {
          const title = resolvedData['title'] as string;
          return title.toLowerCase().replace(/\s/gi, '-');
        }
      }
      return resolvedData[fieldKey];
    },
  },
});

export const owner = relationship({
  ref: 'User',
  ui: {
    createView: {
      fieldMode: 'hidden',
    },
    hideCreate: true,
  },
  hooks: {
    resolveInput: relateActiveUser,
  },
  access: {
    update: (args) => isAdmin(args) || isOwner(args),
  },
});

export function relateActiveUser({
  operation,
  resolvedData,
  context,
  fieldKey,
}: {
  operation: 'create' | 'update';
  resolvedData: any;
  context: KeystoneContextFromListTypeInfo<any>;
  fieldKey: any;
}) {
  if (operation === 'create') {
    return context.session?.id ? { connect: { id: context.session.id } } : null;
  }
  return resolvedData?.[fieldKey];
}

export function tags(listKey?: string) {
  return relationship({
    ref: listKey ? `Tag.${listKey}` : 'Tag',
    many: true,
    ui: {
      displayMode: 'select',
      searchFields: ['name'],
      itemView: {
        fieldPosition: 'sidebar',
      },
    },
  });
}

export function contacts(listKey: string) {
  return relationship({
    ref: `Contact.${listKey}`,
    many: true,
    ui: {
      itemView: {
        fieldPosition: 'sidebar',
      },
    },
  });
}

export function userGroups(listKey: string) {
  return relationship({
    ref: `UserGroup.${listKey}`,
    many: true,
    ui: {
      itemView: {
        fieldPosition: 'sidebar',
      },
    },
    access: {
      update: (args) => isAdmin(args) || isOwner(args),
    },
  });
}

export function services(listKey: string) {
  return relationship({
    ref: `Service.${listKey}`,
    many: true,
  });
}

export function basePage(
  listNamePlural: string,
  opts?: {
    customTextOpts?: CustomTextOpts<BaseListTypeInfo>;
    heroImageConfig?: BlueHarvestImageConfig<BaseListTypeInfo>;
    titleAndDescriptionOpts?: titleAndDescriptionOpts;
    primaryAction?: boolean;
    secondaryActions?: boolean;
    primaryContact?: boolean;
    address?: boolean;
    hours?: boolean;
    documents?: boolean;
    actions?: boolean;
  },
): BaseFields<any> {
  return {
    heroImage: blueHarvestImage(opts?.heroImageConfig),
    ...titleAndDescription(opts?.titleAndDescriptionOpts),
    ...publishable,
    liveUrl: liveUrl(listNamePlural),
    slug,
    owner,
    body: customText(opts?.customTextOpts),
    tags: tags(listNamePlural),
    userGroups: userGroups(listNamePlural),

    ...(opts?.primaryAction && {
      primaryAction: relationship({
        ref: 'ExternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
          inlineConnect: true,
          inlineEdit: {
            fields: ['label', 'url'],
          },
        },
        many: false,
      }),
    }),
    ...(opts?.secondaryActions && {
      secondaryActions: relationship({
        ref: 'ExternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          displayMode: 'cards',
          cardFields: ['label', 'url'],
          inlineCreate: {
            fields: ['label', 'url'],
          },
          inlineConnect: true,
          inlineEdit: {
            fields: ['label', 'url'],
          },
        },
        many: true,
      }),
    }),

    ...(opts?.actions && {
      actions: relationship({
        ref: 'InternalLink',
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
          displayMode: 'cards',
          cardFields: ['label', 'item'],
          inlineCreate: { fields: ['label', 'selectItem'] },
          inlineEdit: { fields: ['label', 'selectItem'] },
        },
      }),
    }),

    ...(opts?.documents && {
      documents: relationship({
        ref: 'Document',
        many: true,
        ui: {
          displayMode: 'cards',
          inlineConnect: true,
          cardFields: ['title', 'description', 'file', 'tags'],
          inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
          inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
        },
      }),
    }),

    ...(opts?.address && {
      address: relationship({
        ref: 'Location',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
          inlineCreate: {
            fields: ['title', 'lineOne', 'lineTwo', 'city', 'state', 'zip'],
          },
          inlineEdit: {
            fields: ['lineOne', 'lineTwo', 'city', 'state', 'zip'],
          },
          inlineConnect: true,
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
      }),
    }),

    ...(opts?.primaryContact && {
      primaryContact: relationship({
        ref: `Contact.primary${capitalizeFirstLetter(listNamePlural)}`,
        ui: {
          itemView: {
            fieldPosition: 'sidebar',
          },
        },
      }),
    }),
    contacts: contacts(listNamePlural),
    ...(opts?.hours && {
      hours: relationship({
        ref: 'OperatingHour',
        many: true,
        ui: {
          displayMode: 'cards',
          cardFields: ['day', 'open', 'close'],
          inlineCreate: {
            fields: ['day', 'open', 'close'],
          },
          inlineEdit: {
            fields: ['day', 'open', 'close'],
          },
        },
      }),
    }),

    ...timestamps,
  };
}

export async function typesenseUpsert(
  listNameSingular: string,
  query: string,
  {
    operation,
    context,
    item,
  }: {
    operation: 'create' | 'update' | 'delete';
    context: KeystoneContextFromListTypeInfo<BaseListTypeInfo>;
    item?: BaseItem;
  },
) {
  if ((operation === 'update' || operation === 'create') && item) {
    try {
      const thing = toPascalCase(listNameSingular);
      const doc = await context.query[thing]?.findOne({
        where: { id: item.id.toString() },
        query,
      });

      const document = toSearchableObj(doc, listNameSingular);

      await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
        .documents()
        .upsert(document);
    } catch (error: any) {
      console.error('Error updating Typesense document:', error);
    }
  }
}

export async function typesenseDelete({
  operation,
  item,
}: {
  operation: 'create' | 'update' | 'delete';
  item?: BaseItem;
}) {
  if (operation === 'delete' && item) {
    try {
      TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
        .documents(item.id.toString())
        .delete();
    } catch (error: any) {
      console.error('Error deleting Typesense document', error);
    }
  }
}
