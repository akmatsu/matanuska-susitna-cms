import { group, list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { checkbox, relationship, select, text } from '@keystone-6/core/fields';

const listPlural = 'trails';

export function trailToSearchableObj(item: any) {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    body: item.body,
    slug: item.slug,
    published_at: item.publishAt
      ? Math.floor(new Date(item.publishAt).getTime() / 1000)
      : undefined,
    tags: item.tags.map((tag: { name: string }) => tag.name || ''),
    type: 'trail',
  };
}

export const Trail: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Trail'),
  },
  fields: {
    ...basePage(listPlural, {
      address: true,
    }),

    open: checkbox({ defaultValue: false }),
    ...group({
      label: 'Seasons',
      fields: {
        summer: checkbox({ defaultValue: false }),
        fall: checkbox({ defaultValue: false }),
        winter: checkbox({ defaultValue: false }),
        spring: checkbox({ defaultValue: false }),
      },
    }),
    ...group({
      label: 'Uses',
      fields: {
        hiking: checkbox({ defaultValue: false }),
        biking: checkbox({ defaultValue: false }),
        horsebackRiding: checkbox({ defaultValue: false }),
        crossCountrySkiing: checkbox({ defaultValue: false }),
        snowshoeing: checkbox({ defaultValue: false }),
        frisbeeGolf: checkbox({ defaultValue: false }),
        dogWalking: checkbox({ defaultValue: false }),
        running: checkbox({ defaultValue: false }),
        snowMachining: checkbox({ defaultValue: false }),
        atv: checkbox({ defaultValue: false }),
        dirtBiking: checkbox({ defaultValue: false }),
        mushing: checkbox({ defaultValue: false }),
      },
    }),
    difficulty: select({
      options: ['Easy', 'Moderate', 'Difficult', 'Extreme'],
    }),
    length: text(),
    elevationChange: text(),
    services: services(listPlural),
    park: relationship({ ref: 'Park.trails', many: false }),
  },

  hooks: {
    async beforeOperation(args) {
      await typesenseDelete(args);
    },

    async afterOperation(args) {
      await typesenseUpsert(
        'trail',
        'id title description body slug liveUrl publishAt owner {name} tags {name} services {title}',
        args,
      );
    },
  },
});
