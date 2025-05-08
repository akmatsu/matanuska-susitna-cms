import { group, list, ListConfig } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../access';
import {
  basePage,
  services,
  typesenseDelete,
  typesenseUpsert,
} from '../fieldUtils';
import { checkbox, relationship, select, text } from '@keystone-6/core/fields';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';

const listPlural = 'trails';

// export function trailToSearchableObj(item: any) {
//   return {
//     id: item.id,
//     title: item.title,
//     description: item.description,
//     body: item.body,
//     slug: item.slug,
//     published_at: item.publishAt
//       ? Math.floor(new Date(item.publishAt).getTime() / 1000)
//       : undefined,
//     tags: item.tags.map((tag: { name: string }) => tag.name || ''),
//     type: 'trail',
//   };
// }

export const {
  Main: Trail,
  Version: TrailVersion,
  Draft: TrailDraft,
} = DraftAndVersionsFactory(
  'Trail',
  (listNamePlural, opts) => {
    return {
      ...basePage(listNamePlural, {
        ...opts,
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
      services: relationship({
        ref:
          !opts?.isDraft && !opts?.isVersion
            ? `Service.${listNamePlural}`
            : 'Service',
        many: true,
      }),
      park: relationship({
        ref: opts?.isDraft || opts?.isVersion ? 'Park' : 'Park.trails',
        many: false,
      }),
    };
  },
  {
    query: `${basePage} services {id} park {id} address {id} hiking biking horsebackRiding crossCountrySkiing snowshoeing frisbeeGolf dogWalking running snowMachining atv dirtBiking mushing open summer fall winter spring difficulty length elevationChange`,
    mainAccess: {
      operation: generalOperationAccess,
      item: generalItemAccess('Trail'),
    },
    mainHooks: {
      async beforeOperation(args) {
        await typesenseDelete(args);
      },
      async afterOperation(args) {
        await typesenseUpsert(
          'trail',
          'id title description body slug liveUrl publishAt owner {name} tags {name} services {title} park {title}',
          args,
        );
      },
    },
  },
);
