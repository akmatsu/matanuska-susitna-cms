import { graphql, list } from '@keystone-6/core';
import { generalOperationAccess, isContentManager } from '../../access';
import { polymorphicRelationship } from '../../../components/customFields/polymorphicRelationship';
import { text, virtual } from '@keystone-6/core/fields';
import { capitalizeFirstLetter } from '../../../utils';
import { logger } from '../../../configs/logger';

export const InternalLink = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: async (args) => !(await isContentManager(args)),
    hideCreate: true,
  },
  fields: {
    label: text({
      validation: {
        isRequired: true,
      },
    }),
    selectItem: polymorphicRelationship(),
    item: virtual({
      ui: {
        query: `{
          __typename
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
          ... on BoardPage { id title __typename}
          ... on ElectionsPage { id title __typename}
          ... on HomePage { id title __typename}
        }`,
        views: './src/components/customFields/polymorphicItem/views',
      },
      field: (lists) =>
        graphql.field({
          type: graphql.union({
            name: 'LinkedItemUnion',
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
              lists.BoardPage.types.output,
              lists.ElectionsPage.types.output,
              lists.HomePage.types.output,
            ],
            resolveType(item) {
              return item.__typename as string;
            },
          }),
          async resolve(i, args, context) {
            const item = i as {
              selectItem?: {
                itemType?: {
                  value?: string | null;
                  label?: string | null;
                } | null;
                itemId?: {
                  value?: string | null;
                  label?: string | null;
                } | null;
              } | null;
            };

            if (
              !item.selectItem ||
              !item.selectItem.itemType ||
              !item.selectItem.itemId ||
              !item.selectItem.itemType.value ||
              !item.selectItem.itemId.value
            ) {
              return null;
            }

            const listKey = item.selectItem.itemType.value as string;
            const itemId = item.selectItem.itemId.value as string;

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
                  ${capitalizedListKey === 'Facility' ? 'id title description' : ''}
                  ${capitalizedListKey === 'Community' ? 'id title description' : ''}
                  ${capitalizedListKey === 'AssemblyDistrict' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'OrgUnit' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'Url' ? 'id title description url' : ''}
                  ${capitalizedListKey === 'Topic' ? 'id title description slug' : ''}
                  ${capitalizedListKey === 'Plan' ? 'id title description slug' : ''}
                  ${capitalizedListKey === 'Board' ? 'id title slug description' : ''}
                  ${capitalizedListKey === 'BoardPage' ? 'id title' : ''}
                  ${capitalizedListKey === 'ElectionsPage' ? 'id title' : ''}
                  ${capitalizedListKey === 'HomePage' ? 'id title' : ''}
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
