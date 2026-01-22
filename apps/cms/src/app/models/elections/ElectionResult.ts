import { list, ListConfig } from '@keystone-6/core';
import { isElectionUser, isNotElectionUser } from '../../access';
import { checkbox, relationship } from '@keystone-6/core/fields';
import { BaseListTypeInfo } from '@keystone-6/core/types';
import { CommonContext } from '../../../controllers/types';

const dateRegex = new RegExp(
  '\\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:\\s+|,\\s*)(\\d{1,2})(st|nd|rd|th)?(?:(?:\\s+|,\\s*)(\\d{4}))?\\b',
  'i',
);

export const ElectionResult = list({
  access: {
    operation: {
      query: () => true,
      create: isElectionUser,
      update: isElectionUser,
      delete: isElectionUser,
    },
    item: {
      create: isElectionUser,
      update: isElectionUser,
      delete: isElectionUser,
    },
  },
  ui: {
    isHidden: isNotElectionUser,
    hideCreate: isNotElectionUser,
  },
  fields: {
    election: relationship({
      ref: 'Election.result',
      many: false,
    }),

    document: relationship({
      ref: 'Document',
      many: false,
      ui: {
        displayMode: 'cards',
        inlineConnect: true,
        cardFields: ['title', 'description', 'file', 'tags'],
        inlineCreate: { fields: ['title', 'description', 'file', 'tags'] },
        inlineEdit: { fields: ['title', 'description', 'file', 'tags'] },
      },
    }),

    isOfficial: checkbox(),
  },

  hooks: {
    async resolveInput({ operation, item, resolvedData, listKey, context }) {
      if (operation === 'create' || operation === 'update') {
        const ctx = (context as any as CommonContext).sudo();
        console.log('Resolved Data: ', resolvedData);

        if (item) {
          const i = await ctx.prisma.electionResult.findUnique({
            where: { id: item?.id?.toString() },
            include: {
              election: {
                select: {
                  id: true,
                },
              },
              document: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          });

          if (!i) throw new Error('Election Result not found');
          if (!i.election?.id) {
            console.log('No election associated with this result');

            if (i.document?.id) {
              const date = i.document.title.match(dateRegex)?.[0];
              if (date) {
                const election = await ctx.prisma.election.findFirst({
                  where: {
                    electionDate: {
                      equals: new Date(date),
                    },
                  },
                });

                if (election) {
                  return {
                    ...resolvedData,
                    election: { connect: { id: election.id } },
                  };
                } else {
                  return {
                    ...resolvedData,
                    election: {
                      create: {
                        electionDate: new Date(date),
                        title: `${date} Election`,
                      },
                    },
                  };
                }
              }
            }
          }
        } else {
          console.log('Creating Election Result');
        }
      }
      return resolvedData;
    },
  },
}) satisfies ListConfig<BaseListTypeInfo>;
