// Keystone config docs: https://keystonejs.com/docs/apis/config\
import { config } from '@keystone-6/core';
import { lists } from './src/app';
import { TypeInfo } from '.keystone/types';
import { appConfig } from './src/configs/appConfig';
import { type Session } from './src/session';
import { nextAuthSessionStrategy } from './src/session';
import { routes } from './src/routes/baseRoutes';
import { connectRedis, getPublishQueueEvents } from './src/queues/redis';
import { mergeSchemas } from '@graphql-tools/schema';
import { KeystoneContext } from '@keystone-6/core/types';
import { graphqlExtendTypeDefs } from './src/utils/graphqlHelpers';

export default config<TypeInfo<Session>>({
  // https://keystonejs.com/docs/config/config#db
  db: {
    provider: appConfig.database.provider,
    url: `${appConfig.database.protocol}://${appConfig.database.user}:${appConfig.database.password}@${appConfig.database.host}:${appConfig.database.port}/${appConfig.database.name}`,
    extendPrismaSchema(schema) {
      return schema.replace(
        `generator client {`,
        `generator client {
            binaryTargets = ["native", "rhel-openssl-3.0.x", "debian-openssl-3.0.x"]`,
      );
    },
    onConnect: async (keystone) => {
      await connectRedis();
      getPublishQueueEvents();
    },
  },

  // https://keystonejs.com/docs/config/lists
  lists,

  // https://keystonejs.com/docs/config/config#server
  server: {
    cors: {
      origin: ['*'],
      credentials: true,
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
    },
    maxFileSize: 500 * 1024 * 124,
    extendExpressApp: routes,
    port: appConfig.server.port,
  },

  // https://keystonejs.com/docs/config/session
  session: nextAuthSessionStrategy,

  // https://keystonejs.com/docs/guides/images-and-files
  storage: appConfig.storage,

  // https://keystonejs.com/docs/reference/telemetry#how-to-opt-out
  telemetry: false,

  // https://keystonejs.com/docs/config/config#ui
  ui: {
    publicPages: [
      '/api/auth/csrf',
      '/api/auth/signin',
      '/api/auth/callback',
      '/api/auth/session',
      '/api/auth/providers',
      '/api/auth/signout',
      '/api/auth/error',

      // each provider will need a separate callback and signin page listed here
      '/api/auth/signin/azure-ad',
      '/api/auth/callback/azure-ad',
    ],
    async pageMiddleware({ wasAccessAllowed, context }) {
      if (wasAccessAllowed) {
        return;
      } else {
        return {
          kind: 'redirect',
          to: '/api/auth/signin',
        };
      }
    },
  },

  graphql: {
    extendGraphqlSchema(schema) {
      return mergeSchemas({
        schemas: [schema],
        typeDefs: graphqlExtendTypeDefs,
        resolvers: {
          InternalLinkSearch: {
            __resolveType(value: any) {
              if ('primaryActionId' in value) return 'Service';
              if ('highlightThreeId' in value) return 'HomePage';
              if ('linkToAgendasId' in value) return 'Board';
              if ('vacancyReportId' in value) return 'BoardPage';
              if ('effectiveDate' in value) return 'PublicNotice';
              if ('parentId' in value) return 'OrgUnit';
              if ('memberName' in value) return 'OrgUnit';
              if ('url' in value) return 'Url';
              if ('elevationChange' in value) return 'Trail';
              if ('memberName' in value) return 'AssemblyDistrict';
              if ('parkId' in value) return 'Facility';
              if ('addressId' in value) return 'Park';
              return 'Community';
            },
          },
          Query: {
            getInternalLink: async (
              _,
              { id, type }: { id: string; type: string },
              context: KeystoneContext<TypeInfo<Session>>,
            ) => {
              switch (type) {
                case 'Service':
                  return context.db.Service.findOne({ where: { id } });
                case 'Facility':
                  return context.db.Facility.findOne({ where: { id } });
                case 'HomePage':
                  return context.db.HomePage.findOne({ where: { id } });
                case 'Board':
                  return context.db.Board.findOne({ where: { id } });
                case 'BoardPage':
                  return context.db.BoardPage.findOne({ where: { id } });
                case 'PublicNotice':
                  return context.db.PublicNotice.findOne({ where: { id } });
                case 'OrgUnit':
                  return context.db.OrgUnit.findOne({ where: { id } });
                case 'AssemblyDistrict':
                  return context.db.AssemblyDistrict.findOne({ where: { id } });
                case 'Community':
                  return context.db.Community.findOne({ where: { id } });
                case 'Park':
                  return context.db.Park.findOne({ where: { id } });
                case 'Trail':
                  return context.db.Trail.findOne({ where: { id } });
                case 'Url':
                  return context.db.Url.findOne({ where: { id } });
                default:
                  throw new Error(`Unknown type: ${type}`);
              }
            },
            internalSearch: async (
              info: any,
              { query }: { query?: string },
              context: KeystoneContext<TypeInfo<Session>>,
            ) => {
              const [
                services,
                facilities,
                homePages,
                boards,
                boardPages,
                publicNotices,
                orgUnits,
                assemblyDistricts,
                communities,
                parks,
                trails,
                urls,
              ] = await Promise.all([
                context.db.Service.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.Facility.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.HomePage.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.Board.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.BoardPage.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.PublicNotice.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.OrgUnit.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.AssemblyDistrict.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.Community.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.Park.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.Trail.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { body: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
                context.db.Url.findMany({
                  where: {
                    OR: [
                      { title: { contains: query, mode: 'insensitive' } },
                      { description: { contains: query, mode: 'insensitive' } },
                      { url: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                }),
              ]);

              // 5. Combine all arrays into one heterogeneous array
              return [
                ...services,
                ...facilities,
                ...homePages,
                ...boards,
                ...boardPages,
                ...publicNotices,
                ...orgUnits,
                ...assemblyDistricts,
                ...communities,
                ...parks,
                ...trails,
                ...urls,
              ];
            },
          },
        },
      });
    },
  },
});
