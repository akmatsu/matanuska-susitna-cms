// see https://keystonejs.com/docs/config/config#extend-express-app

import { TypeInfo } from '.keystone/types';
import type { KeystoneContext, MaybePromise } from '@keystone-6/core/types';
import type { Session } from '../session';
import { json, type Express } from 'express';

import {
  createNaturalLanguageSearchModel,
  createTypesenseCollections,
  getNoHitSearches,
  getPopularSearches,
  importPages,
  reindexTypesense,
  removeCollection,
  updateTypesenseSchema,
} from '../controllers/typesenseController';
import {
  createDraft,
  publishDraft,
  republishVersion,
} from '../controllers/DraftAndVersionControllers';
import { countPageView } from '../controllers/pageViewsController';
import { getGovDeliveryTopics } from '../utils/govDelivery';

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
  app.post('/typesense/reindex', json(), reindexTypesense(commonContext));
  app.post(
    '/typesense/create-nl-model',
    json(),
    createNaturalLanguageSearchModel(),
  );
  app.get('/typesense/popular-searches', json(), getPopularSearches());
  app.get('/typesense/no-hit-searches', json(), getNoHitSearches());
  app.post('/:list/:id/drafts', json(), createDraft(commonContext));
  app.patch('/publish/:list/:id', json(), publishDraft(commonContext));
  app.patch('/republish/:list/:id', json(), republishVersion(commonContext));
  app.patch('/api/page-views', json(), countPageView(commonContext));
  app.get('/api/emails/topics', json(), async (req, res) => {
    const topics = await getGovDeliveryTopics();

    res.json({ topics });
  });
};
