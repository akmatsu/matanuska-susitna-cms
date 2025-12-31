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
          ... on AssemblyDistrict {
            id
            title
          }
          ... on Board {
            id
            title
          }
          ... on BoardPage {
            id
            title
          }
          ... on Community {
            id
            title
          }
          ... on Document {
            id
            title
          }
          ... on ElectionsPage {
            id
            title
          }
          ... on Facility {
            id
            title
          }
          ... on HomePage {
            id
            title
          }
          ... on OrgUnit {
            id
            title
          }
          ... on Park {
            id
            title
          }
          ... on Plan {
            id
            title
          }
          ... on Policy {
            id
            title
          }
          ... on PublicNotice {
            id
            title
          }
          ... on Service {
            id
            title
          }
          ... on Topic {
            id
            title
          }
          ... on Trail {
            id
            title
          }
          ... on Url {
            id
            title
          }
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
              lists.Document.types.output,
              lists.Policy.types.output,
              lists.PublicNotice.types.output,
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
              const linkedItem = await context
                .sudo()
                .db[capitalizedListKey].findOne({ where: { id: itemId } });

              if (!linkedItem) throw new Error('Linked item not found');

              return {
                ...linkedItem,
                id: linkedItem?.id,
                __typename: capitalizedListKey,
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
