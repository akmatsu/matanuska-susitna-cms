import { BaseFields, graphql, group } from '@keystone-6/core';
import {
  relationship,
  RelationshipFieldConfig,
  select,
  text,
  timestamp,
  virtual,
} from '@keystone-6/core/fields';
import {
  BaseItem,
  BaseListTypeInfo,
  CommonFieldConfig,
  FieldHooks,
  KeystoneContextFromListTypeInfo,
} from '@keystone-6/core/types';
import { isAdmin } from './access/roles';
import { isOwner } from './access/group';
import { appConfig } from '../configs/appConfig';
import { BlueHarvestImageConfig } from '../components/customFields/blueHarvestImage';
import { CustomTextOpts } from '../components/customFields/Markdown';
import {
  toSearchableObj,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
  TypeSensePageDocument,
} from '../utils/typesense';
import { logger } from '../configs/logger';
import v from 'voca';
import { plural } from 'pluralize';
import { getSearchData, ModelDelegateKey } from '../utils/draftUtils';

export const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/;
export const phoneNumberRegex =
  /^(\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4})$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const timestamps: BaseFields<any> = {
  createdAt: timestamp({
    defaultValue: { kind: 'now' },
    isFilterable: true,
    isOrderable: true,
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
    isFilterable: true,
    isOrderable: true,
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
  const correctedListKey = correctListKey(v.slugify(plural(listKey)));

  function correctListKey(key: string) {
    if (key === 'org-units') return '/departments';
    if (key === 'topics') return '';
    if (key === 'document-collections') return '/document-collection';
    return `/${key}`;
  }
  return virtual({
    field: graphql.field({
      type: graphql.String,
      resolve(baseItem: any) {
        baseItem = baseItem as { [key: string]: string };
        return `${baseUrl}${correctedListKey}/${baseItem[identifierKey]}`;
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

          const { item } = args;
          if (item?.status === 'published') return 'read';
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
        baseItem = baseItem as { [key: string]: string };
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

export function timestampField(opts?: {
  isFilterable?: boolean;
  isOrderable?: boolean;
  isNullable?: boolean;
  isRequired?: boolean;
  hideView?: boolean;
  hooks?: FieldHooks<any>;
  hideCreateView?: boolean;
}) {
  return timestamp({
    isFilterable: opts?.isFilterable ?? true,
    isOrderable: opts?.isOrderable ?? true,
    db: {
      isNullable: opts?.isNullable ?? true,
    },
    validation: {
      isRequired: opts?.isRequired ?? false,
    },

    ui: {
      ...(!opts?.hideView && {
        views: './src/components/customFields/datetime/views.tsx',
      }),
      ...(opts?.hideView && {
        itemView: {
          fieldMode: 'read',
        },
      }),
      ...(opts?.hideCreateView && {
        createView: {
          fieldMode: 'hidden',
        },
      }),
    },
    hooks: opts?.hooks,
  });
}

export function publishable(opts?: {
  isDraft?: boolean;
  isVersion?: boolean;
}): BaseFields<any> {
  return {
    ...group({
      label: 'Publishing',

      fields: {
        publishAt: timestampField({
          hideView: !opts?.isDraft,
          hooks: {
            async resolveInput({
              operation,
              resolvedData,
              item,
              fieldKey,
              inputData,
            }) {
              if (operation === 'create' && inputData.status === 'published') {
                return new Date().toISOString();
              }
              if (
                operation === 'update' &&
                inputData.status === 'published' &&
                item?.status === 'unpublished'
              ) {
                return new Date().toISOString();
              }
              return resolvedData[fieldKey];
            },
          },
        }),

        unpublishAt: timestampField({
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

        reviewDate: timestampField({
          hideCreateView: true,
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
}

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
  isUnique?: boolean;
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
      isIndexed:
        opts?.isUnique === undefined
          ? 'unique'
          : opts?.isUnique
            ? 'unique'
            : undefined,
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
          return v.slugify(title).toLowerCase();
        }
      }
      return resolvedData[fieldKey];
    },
  },
});

export const owner = relationship<any>({
  ref: 'User',
  ui: {
    description:
      'Please note only the page owners and admins can change this field.',
    createView: {
      fieldMode: 'hidden',
    },
    hideCreate: true,
    itemView: {
      async fieldMode(args) {
        const canEdit = (await isAdmin(args)) || (await isOwner(args));

        return canEdit ? 'edit' : 'read';
      },
    },
  },
  hooks: {
    resolveInput: relateActiveUser,
  },
  access: {
    update: async (args) => (await isAdmin(args)) || (await isOwner(args)),
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
  if (operation === 'create' && context.session) {
    return context.session.id ? { connect: { id: context.session.id } } : null;
  }
  return resolvedData?.[fieldKey];
}

export function tags(listKey?: string) {
  return relationship({
    ref: listKey ? `Tag` : 'Tag',
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

export function contacts() {
  return relationship({
    ref: `Contact`,
    many: true,
    ui: {
      itemView: {
        fieldPosition: 'sidebar',
      },
    },
  });
}

export function contactRelationship() {
  return relationship({
    ref: 'Contact',
    ui: {
      itemView: {
        fieldPosition: 'sidebar',
      },
    },
  });
}

export function documentRelationship() {
  return relationship({
    ref: 'Document',
    many: true,
    ui: {
      displayMode: 'cards',
      inlineConnect: true,
      cardFields: ['title', 'description', 'file', 'tags'],
      inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
      inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
    },
  });
}

export function documentRelationshipSingle() {
  return relationship({
    ref: 'Document',
    many: false,
    ui: {
      displayMode: 'cards',
      inlineConnect: true,
      cardFields: ['title', 'description', 'file', 'tags'],
      inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
      inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
    },
  });
}

export function userGroups<T extends BaseListTypeInfo = any>() {
  return relationship<T>({
    ref: `UserGroup`,
    many: true,
    ui: {
      itemView: {
        fieldPosition: 'sidebar',
      },
    },
    access: {
      update: async (args) => {
        const res = (await isAdmin(args)) || (await isOwner(args));
        return res;
      },
    },
  });
}

export function services(listKey: string) {
  return relationship({
    ref: `Service.${listKey}`,
    many: true,
  });
}

export type BasePageOptions = {
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
  noSlug?: boolean;
  noLiveUrl?: boolean;
  isDraft?: boolean;
  isVersion?: boolean;
  disableDefaultRelationships?: boolean;
};

export async function typesenseUpsert(
  listNameSingular: string,
  {
    operation,
    context,
    item,
    originalItem,
  }: {
    operation: 'create' | 'update' | 'delete';
    context: KeystoneContextFromListTypeInfo<BaseListTypeInfo>;
    item?: BaseItem;
    originalItem?: BaseItem;
  },
  typeOverride?: string,
) {
  if ((operation === 'update' || operation === 'create') && item) {
    const unpublish =
      operation === 'update' &&
      item &&
      originalItem &&
      item.status !== 'published' &&
      originalItem.status === 'published';

    if (unpublish) {
      try {
        await docDelete(item.id.toString());
      } catch (error: any) {
        logger.error(error, 'Error deleting Typesense document');
      }
    } else if (item.status === 'published') {
      try {
        const listName = v.camelCase(listNameSingular) as ModelDelegateKey;

        const itemData = await getSearchData(
          listName,
          item.id.toString(),
          context,
        );

        const document = toSearchableObj(
          itemData,
          typeOverride ?? listNameSingular,
        );

        await docUpsert(document);
      } catch (error: any) {
        logger.error(error, 'Error updating Typesense document');
      }
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
      await docDelete(item.id.toString());
    } catch (error: any) {
      logger.error(error, 'Error deleting Typesense document');
    }
  }
}

export function cardsUi<T extends BaseListTypeInfo>(fields: string[]) {
  return {
    displayMode: 'cards' as const,
    cardFields: fields,
    inlineCreate: { fields },
    inlineEdit: { fields },
  } satisfies RelationshipFieldConfig<T>['ui'];
}

export const sidebar = {
  itemView: { fieldPosition: 'sidebar' },
} satisfies CommonFieldConfig<BaseListTypeInfo>['ui'];

const TOGGLE_TYPES = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 },
] as const;

type ToggleType = (typeof TOGGLE_TYPES)[number]['value'];

export function switchField() {
  return select({
    type: 'integer',
    options: TOGGLE_TYPES,
    ui: {
      description:
        'Automatically redirect to the external website when this plan is accessed.',
      displayMode: 'segmented-control',
    },
    defaultValue: 0 as ToggleType,
    validation: {
      isRequired: true,
    },
  });
}

export function docUpsert(doc: TypeSensePageDocument) {
  return TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
    .documents()
    .upsert(doc);
}

export function docDelete(id: string) {
  return TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
    .documents(id)
    .delete({
      ignore_not_found: true,
    });
}

export const iconSelect = select({
  options: [
    { label: 'Paw', value: 'icon-[mdi--pets]' },
    { label: 'Message Alert', value: 'icon-[mdi--message-alert]' },
    { label: 'Home', value: 'icon-[mdi--home]' },
    { label: 'Map', value: 'icon-[mdi--map]' },
    { label: 'Briefcase', value: 'icon-[mdi--briefcase]' },
    { label: 'Legal', value: 'icon-[mdi--legal]' },
    { label: 'Excavator', value: 'icon-[mdi--excavator]' },
    { label: 'User Tie', value: 'icon-[mdi--user-tie]' },
    { label: 'Document', value: 'icon-[mdi--file-document]' },
    { label: 'Houses', value: 'icon-[mdi--house-group]' },
    { label: 'Fire Truck', value: 'icon-[mdi--fire-truck]' },
    { label: 'Money', value: 'icon-[mdi--money]' },
    { label: 'Server', value: 'icon-[mdi--server]' },
    { label: 'Pier', value: 'icon-[mdi--pier-crane]' },
    { label: 'Microphone', value: 'icon-[mdi--microphone]' },
    { label: 'Road', value: 'icon-[mdi--road-variant]' },
    { label: 'Cart', value: 'icon-[mdi--cart]' },
    { label: 'Cart variant', value: 'icon-[mdi--cart-variant]' },
    { label: 'Contract Outline', value: 'icon-[mdi--contract-outline]' },
    { label: 'Account group', value: 'icon-[mdi--account-group]' },
    {
      label: 'Magnifying Glass Dollar',
      value: 'icon-[fa7-solid--magnifying-glass-dollar]',
    },
  ],
  ui: {
    views: './src/components/customFields/IconSelection',
    description:
      "Select an icon to display with this featured item, don't worry about the color, it will be styled automatically.",
  },
});
