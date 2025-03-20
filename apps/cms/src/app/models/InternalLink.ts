import { graphql, list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess, isAdmin } from '../access';
import { polymorphicRelationship } from '../../components/customFields/polymorphicRelationship';
import { text, virtual } from '@keystone-6/core/fields';
import { capitalizeFirstLetter } from '../../utils';

export const InternalLink: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: (args) => !isAdmin(args),
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
          ... on Service { id title slug description}
          ... on Park { id title slug description}
          ... on Trail { id title slug description}
          ... on Facility { id title slug description}
          ... on Community { id title slug description}
          ... on AssemblyDistrict { id title slug description}
          ... on OrgUnit { id title slug description}
          ... on Url { id title description url}
        }`,
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
            console.log(capitalizedListKey);
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
                `.trim(),
              });

              return {
                ...linkedItem,
                id: linkedItem.id,
                __typename: linkedItem.__typename,
              };
            } catch (err) {
              console.error(err);
              return null;
            }
          },
        }),
    }),
  },
});
