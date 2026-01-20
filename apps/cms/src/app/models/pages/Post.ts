import { list } from '@keystone-6/core';
import {
  DraftAndVersionsFactory,
  relationshipController,
} from '../../draftAndVersionFactory/DraftAndVersionsFactory';
import { basePage } from '../basePage';
import { generalOperationAccess } from '../../access';
import { titleAndDescription } from '../../fieldUtils';
import { integer, relationship, text } from '@keystone-6/core/fields';

const PostCategory = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    ...titleAndDescription({
      title: {
        required: true,
      },
    }),
  },
});

const PostImage = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    label: text({
      ui: {
        description:
          'A descriptive label for this image. Optional, defaults to image title if not provided',
      },
    }),
    post: relationship({
      ref: 'Post.images',
    }),
    image: relationship({
      ref: 'Image',
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'description', 'file'],
        inlineCreate: { fields: ['title', 'description', 'file'] },
        inlineEdit: { fields: ['title', 'description', 'file'] },
        inlineConnect: true,
      },
    }),
    order: integer({
      defaultValue: 0,
    }),
  },
});

const {
  Main: Post,
  Version: PostVersion,
  Draft: PostDraft,
} = DraftAndVersionsFactory('Post', (listNamePlural, opts) => ({
  ...basePage(listNamePlural, {
    ...opts,
    disableDefaultRelationships: true,
    actions: true,
    documents: true,
  }),

  author: relationship({
    ref: 'User',
    many: false,
    hooks: {
      resolveInput: ({ context, operation, item, resolvedData, fieldKey }) => {
        const activeUser = context.session;
        if (operation === 'create' && activeUser.id) {
          return { connect: { id: activeUser.id } };
        }
        if (operation === 'update' && !item.authorId && activeUser.id) {
          return { connect: { id: activeUser.id } };
        }
        return resolvedData?.[fieldKey];
      },
    },
  }),

  images: relationshipController({
    ref: 'PostImage',
    many: true,
    listName: 'post',
    ui: {
      displayMode: 'cards',
      cardFields: ['label', 'image', 'order'],
      inlineCreate: { fields: ['label', 'image', 'order'] },
    },
    opts,
  }),

  categories: relationship({
    ref: 'PostCategory',
    many: true,
  }),

  location: text({
    defaultValue: 'Matsu',
    validation: {
      isRequired: true,
    },
  }),
}));

export default {
  Post,
  PostVersion,
  PostDraft,
  PostCategory,
  PostImage,
};
