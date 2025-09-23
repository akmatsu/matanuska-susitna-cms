import { graphql, list } from '@keystone-6/core';
import { elevatedOperationAccess, isAdmin } from '../../access';
import { integer, text, timestamp, virtual } from '@keystone-6/core/fields';
import { logger } from '../../../configs/logger';
import { capitalizeFirstLetter } from '../../../utils';
import { BaseItem } from '@keystone-6/core/types';

const PageView = list({
  access: {
    operation: elevatedOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isAdmin(args)),
  },
  fields: {
    pageKey: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
      isOrderable: true,
    }),
    pageId: text({
      validation: { isRequired: true },
      isIndexed: true,
      isFilterable: true,
      isOrderable: true,
    }),
    pageType: text({
      validation: { isRequired: true },
      isIndexed: true,
      isFilterable: true,
      isOrderable: true,
    }),
    date: timestamp({
      validation: { isRequired: true },
      isIndexed: true,
      isFilterable: true,
      isOrderable: true,
    }),
    views: integer({
      validation: { isRequired: true, min: 0 },
      defaultValue: 0,
      isFilterable: true,
      isOrderable: true,
    }),
    item: virtual({
      ui: {
        query: `{
          ... on Service { id title slug description __typename}
          ... on Park { id title slug description __typename}
          ... on Trail { id title slug description __typename}
          ... on Facility { id title slug description __typename}
          ... on Community { id title slug description __typename}
          ... on AssemblyDistrict { id title slug description __typename}
          ... on OrgUnit { id title slug description __typename}
          ... on Url { id title description url __typename}
          ... on Topic { id title description slug __typename}
          ... on Plan { id title description slug __typename}
          ... on Board { id title slug description __typename}
          ... on ElectionsPage { id title __typename}
          ... on PublicNotice { id title slug description __typename}
        }`,
        views: './src/components/customFields/polymorphicItem/views',
      },
      field: (lists) =>
        graphql.field({
          type: graphql.union({
            name: 'PageViewItemUnion',
            types: [
              lists.Service.types.output,
              lists.Park.types.output,
              lists.Trail.types.output,
              lists.Facility.types.output,
              lists.Community.types.output,
              lists.AssemblyDistrict.types.output,
              lists.OrgUnit.types.output,
              lists.Url.types.output,
              lists.Topic.types.output,
              lists.Plan.types.output,
              lists.Board.types.output,
              lists.ElectionsPage.types.output,
            ],
            resolveType(item) {
              return item.__typename as string;
            },
          }),
          async resolve(i, args, context) {
            const item = i as {
              pageType?: string | null;
              pageId?: string | null;
            } & BaseItem;

            if (!item.pageType || !item.pageId) {
              return null;
            }

            const listKey = item.pageType;
            const itemId = item.pageId;

            const capitalizedListKey = capitalizeFirstLetter(listKey);
            try {
              const linkedItem = await context.query[
                capitalizedListKey
              ].findOne({
                where: { id: itemId },
                query: `
                  __typename 
                  ${capitalizedListKey === 'Service' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Park' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Trail' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Facility' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Community' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'AssemblyDistrict' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'OrgUnit' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Url' ? 'id title description url' : ''}
                  ${capitalizedListKey === 'Topic' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Plan' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Board' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'ElectionsPage' ? 'id title' : ''}
                `.trim(),
              });

              return {
                ...linkedItem,
                id: linkedItem.id,
                __typename: linkedItem.__typename,
              };
            } catch (err) {
              logger.error(err, 'Error fetching linked item');
              return null;
            }
          },
        }),
    }),
  },
});

export default {
  PageView,
};
