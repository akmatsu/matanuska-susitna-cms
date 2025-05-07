// Keystone config docs: https://keystonejs.com/docs/apis/config\
import './src/queues/redis';
import { config } from '@keystone-6/core';
import { lists } from './src/app';
import { TypeInfo } from '.keystone/types';
import { appConfig } from './src/configs/appConfig';
import { type Session } from './src/session';

import {
  COLLECTIONS,
  PAGE_TYPES,
  TYPESENSE_CLIENT,
  TYPESENSE_COLLECTIONS,
} from './src/utils/typesense';
import { json } from 'express';
import { nextAuthSessionStrategy } from './src/session';

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
    async extendExpressApp(app, commonContext) {
      app.post('/typesense/create-collections', json(), async (req, res) => {
        try {
          await Promise.all(
            COLLECTIONS.map(async (collection) => {
              const exists = await TYPESENSE_CLIENT.collections(
                collection.name,
              ).exists();
              if (!exists) {
                await TYPESENSE_CLIENT.collections().create(collection);
                console.log(
                  `Collection ${collection.name} created successfully`,
                );
              } else {
                console.log(
                  `Collection ${collection.name} already exists. Skipping...`,
                );
              }
            }),
          );
          console.log('Finished creating collections.');

          return res.status(200).json({ message: 'Collections created.' });
        } catch (error: any) {
          return res.status(500).json(error);
        }
      });

      app.post('/typesense/update-schema', json(), async (req, res) => {
        commonContext.prisma;
        try {
          await Promise.all(
            COLLECTIONS.map(async (collection) => {
              const exists = await TYPESENSE_CLIENT.collections(
                collection.name,
              ).exists();
              if (exists) {
                const existingDocs = await TYPESENSE_CLIENT.collections(
                  collection.name,
                )
                  .documents()
                  .export();
                await TYPESENSE_CLIENT.collections(collection.name).delete();
                await TYPESENSE_CLIENT.collections().create(collection);
                await TYPESENSE_CLIENT.collections(collection.name)
                  .documents()
                  .import(existingDocs, { action: 'upsert' });

                console.log(
                  `Collection ${collection.name} updated successfully`,
                );
              } else {
                console.log(
                  `Collection ${collection.name} does not exist. Skipping...`,
                );
              }
            }),
          );
        } catch (error: any) {
          return res.status(500).json(error);
        }
      });

      app.post('/typesense/import-pages', json(), async (_, res) => {
        try {
          await Promise.all(
            PAGE_TYPES.map(async (pageType) => {
              const items = await pageType.getItems(commonContext);
              console.log(pageType.type, items);

              await TYPESENSE_CLIENT.collections(TYPESENSE_COLLECTIONS.PAGES)
                .documents()
                .import(items, { action: 'upsert' });
            }),
          );
        } catch (error: any) {
          return res.status(500).json(error);
        }
      });

      app.post('/typesense/remove-collection', json(), async (req, res) => {
        try {
          const collection: string = req.body.collection;

          if (!collection) {
            return res
              .status(400)
              .json({ message: 'Collection name is required' });
          }

          if (!(await TYPESENSE_CLIENT.collections(collection).exists())) {
            return res
              .status(404)
              .json({ message: `Collection ${collection} does not exist.` });
          }

          await TYPESENSE_CLIENT.collections(collection).delete();

          return res
            .status(204)
            .json({ message: `Collection ${collection} removed successfully` });
        } catch (error: any) {
          return res.status(500).json(error);
        }
      });
    },
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
});
