// see https://keystonejs.com/docs/config/config#extend-express-app

import { TypeInfo } from '../../generated/keystone/types';
import type { KeystoneContext, MaybePromise } from '@keystone-6/core/types';
import type { Session } from '../session';
import { json, static as serveStatic, type Express } from 'express';
import path from 'node:path';

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
import { appConfig } from '../configs/appConfig';

export const routes: (
  app: Express,
  context: KeystoneContext<TypeInfo<Session>>,
) => MaybePromise<void> = async (app, commonContext) => {
  if (appConfig.nodeEnv !== 'production') {
    app.use('/document-files', serveStatic('public/document-files'));
    app.use('/image-files', serveStatic('public/image-files'));
  }

  // Prebuilt admin Tailwind stylesheet, see scripts/buildAdminCss.mjs.
  // Keystone's generated Next.js app serves static assets from its own
  // .keystone/admin/public/ directory, not this one, so this can't be
  // picked up by Next's built-in public folder handling.
  app.get('/admin-global.css', (_req, res) => {
    res.sendFile(path.resolve('public/admin-global.css'));
  });

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

    if (!topics || topics.length === 0) {
      res.json({ topics: [{ label: 'None', value: 'none' }] });
      return;
    }

    res.json({ topics });
  });
};
