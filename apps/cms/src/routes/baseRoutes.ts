// see https://keystonejs.com/docs/config/config#extend-express-app

import { TypeInfo } from '.keystone/types';
import type { KeystoneContext, MaybePromise } from '@keystone-6/core/types';
import type { Session } from '../session';
import { json, type Express } from 'express';

import {
  createTypesenseCollections,
  importPages,
  removeCollection,
  updateTypesenseSchema,
} from '../controllers/typesenseController';
import {
  publishDraft,
  republishVersion,
} from '../controllers/DraftAndVersionControllers';

export const routes: (
  app: Express,
  context: KeystoneContext<TypeInfo<Session>>,
) => MaybePromise<void> = async (app, commonContext) => {
  app.post(
    '/typesense/create-collections',
    json(),
    createTypesenseCollections(),
  );
  app.post('/typesense/update-schema', json(), updateTypesenseSchema());
  app.post('/typesense/import-pages', json(), importPages(commonContext));
  app.post('/typesense/remove-collection', json(), removeCollection());
  app.patch('/publish/:list/:id', json(), publishDraft(commonContext));
  app.patch('/republish/:list/:id', json(), republishVersion(commonContext));
};
