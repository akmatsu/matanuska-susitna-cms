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
import { routes } from './src/routes/baseRoutes';

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
});
