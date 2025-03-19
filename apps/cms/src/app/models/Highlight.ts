import { graphql, group, list, ListConfig } from '@keystone-6/core';
import { publishable, titleAndDescription, urlRegex } from '../fieldUtils';
import { text, virtual } from '@keystone-6/core/fields';
import { isAdmin } from '../access/roles';
import { adminOnlyOperationAccess } from '../access';
import { polymorphicRelationship } from '../../components/customFields/polymorphicRelationship';
import { capitalizeFirstLetter } from '../../utils';

export const Highlight: ListConfig<any> = list({
  access: {
    operation: adminOnlyOperationAccess,
  },
  ui: {
    isHidden: (args) => !isAdmin(args),
  },
  graphql: {
    maxTake: 100,
  },
  fields: {
    ...titleAndDescription(),
    ...publishable,
    image: text({
      ui: {
        description:
          'URL to a web hosted image. See images.matsu.gov for internal Borough images.',
      },
      validation: {
        isRequired: true,
        match: {
          regex: urlRegex,
          explanation: 'Use a valid URL to a web hosted image.',
        },
      },
    }),
    ...group({
      label: 'Call to Action',
      description:
        'These fields are for controlling the call to action display on the highlight',
      fields: {
        message: text({ ui: { displayMode: 'textarea' } }),
        link: polymorphicRelationship({}),
        linkedItem: virtual({
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
              ... on ExternalLink { id title description url}
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
                  lists.ExternalLink.types.output,
                ],
                resolveType(item) {
                  return item.__typename as string;
                },
              }),
              async resolve(
                item: {
                  link?: {
                    itemType?: {
                      value?: string | null;
                      label?: string | null;
                    } | null;
                    itemId?: {
                      value?: string | null;
                      label?: string | null;
                    } | null;
                  } | null;
                },
                args,
                context,
              ) {
                if (
                  !item.link ||
                  !item.link.itemType ||
                  !item.link.itemId ||
                  !item.link.itemType.value ||
                  !item.link.itemId.value
                ) {
                  return null;
                }
                const listKey = item.link.itemType.value as string;
                const itemId = item.link.itemId.value as string;

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
                      ${capitalizedListKey === 'ExternalLink' ? 'id title description url' : ''}
                    `.trim(),
                  });

                  return {
                    id: linkedItem.id,
                    title: linkedItem.title,
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
    }),
    editorNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
});
