import { list } from '@keystone-6/core';
import { integer, relationship, text } from '@keystone-6/core/fields';
import { generalOperationAccess } from '../../access';
import { contactRelationship } from '../../fieldUtils';

const phoneNumberRegex =
  /^(\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactListItem = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
    hideCreate: false,
  },
  fields: {
    label: text({
      ui: {
        description:
          'Optional. This label will be displayed in the UI. E.G. primary contact',
      },
    }),
    order: integer({
      ui: {
        description:
          'Value is ascending. Lower Numbers appear first. E.G. 0, 1, 2',
      },
      validation: {
        isRequired: true,
      },
      defaultValue: 0,
    }),
    contact: contactRelationship(),
  },
});

export const Contact = list({
  access: {
    operation: generalOperationAccess,
  },
  hooks: {
    validate({ addValidationError, item, resolvedData, operation }) {
      if (operation === 'create' || operation === 'update') {
        const phone = resolvedData?.['phone'] || item?.['phone'];
        const email = resolvedData?.['email'] || item?.['email'];
        const user = resolvedData?.['user'] || item?.['user'];
        if (!phone && !email && !user) {
          addValidationError(
            'You must add at least one email, phone number, or user.',
          );
        }
      }
    },
  },

  graphql: {
    maxTake: 100,
  },
  fields: {
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    title: text({
      validation: {
        isRequired: false,
      },
      db: {
        isNullable: true,
      },
    }),
    phone: text({
      validation: {
        match: {
          regex: phoneNumberRegex,
          explanation:
            'You must input a valid phone number. Example: 123-456-7890',
        },
        isRequired: false,
      },
      db: {
        isNullable: true,
      },
    }),
    fax: text({
      validation: {
        match: {
          regex: phoneNumberRegex,
          explanation:
            'You must input a valid phone number. Example: 123-456-7890',
        },
        isRequired: false,
      },
      db: {
        isNullable: true,
      },
    }),
    website: relationship({
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
    email: text({
      validation: {
        match: {
          regex: emailRegex,
          explanation: 'You must input a valid email address.',
        },
        isRequired: false,
      },
      db: {
        isNullable: true,
      },
    }),
    address: relationship({
      ref: 'Location',
    }),
  },
});
