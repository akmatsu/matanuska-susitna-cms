import { list, ListConfig } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { generalOperationAccess } from '../access';

const phoneNumberRegex =
  /^(\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact: ListConfig<any> = list({
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
    // primaryServices: relationship({
    //   ref: 'Service.primaryContact',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // services: relationship({
    //   ref: 'Service.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // communities: relationship({
    //   ref: 'Community.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // orgUnits: relationship({
    //   ref: 'OrgUnit.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // facilities: relationship({
    //   ref: 'Facility.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // parks: relationship({
    //   ref: 'Park.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // assemblyDistricts: relationship({
    //   ref: 'AssemblyDistrict.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // trails: relationship({
    //   ref: 'Trail.contacts',
    //   many: true,
    //   ui: { hideCreate: true },
    // }),
    // user: relationship({ ref: 'User.contact', ui: { hideCreate: true } }),
    // editorNotes: text({
    //   ui: {
    //     displayMode: 'textarea',
    //   },
    // }),
    // publicNotices: relationship({
    //   ref: 'PublicNotice.contacts',
    //   many: true,
    // }),
    // testModels: relationship({
    //   ref: 'TestModel.contacts',
    //   many: true,
    // }),
  },
});
