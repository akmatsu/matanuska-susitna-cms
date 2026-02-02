**Architecture**

- `apps/cms` is a standalone Keystone 6 app; [apps/cms/keystone.ts](apps/cms/keystone.ts) wires DB/Redis, injects custom Express routes, and extends GraphQL with helpers like `getPage`, `internalSearch`, and `topPages`.
- Every list lives under [apps/cms/src/app/models](apps/cms/src/app/models) and is aggregated via `lists`; most page-like lists are created by [apps/cms/src/app/draftAndVersionFactory/DraftAndVersionsFactory.ts](apps/cms/src/app/draftAndVersionFactory/DraftAndVersionsFactory.ts), which emits the main/draft/version trio plus publish hooks.
- Shared field definitions (slugs, hero images, contacts, actions, tags, publishing metadata) live in [apps/cms/src/app/fieldUtils.ts](apps/cms/src/app/fieldUtils.ts); reuse these utilities instead of redefining Keystone fields so validation/UI stays consistent.

**Environment & Auth**

- Copy [apps/cms/.env.example](apps/cms/.env.example); `src/configs/appConfig.ts` centralizes database, storage, widget/site URLs, so new env toggles should be added there.
- Auth is handled by NextAuth + Azure AD inside [apps/cms/src/session.ts](apps/cms/src/session.ts); `context.session.id` maps to `User.id`, and login state is enforced via the UI `pageMiddleware` in [apps/cms/keystone.ts](apps/cms/keystone.ts).

**Access Control**

- Role values and helpers (`isAdmin`, `isContentManager`, etc.) live in [apps/cms/src/app/access/roles.ts](apps/cms/src/app/access/roles.ts); group-based checks like `belongsToGroup` are implemented in [apps/cms/src/app/access/group.ts](apps/cms/src/app/access/group.ts).
- `basePage()` injects the `canEdit` virtual plus owner/group relationships; when you add new models that should respect RBAC, derive them from `basePage` or explicitly call the same access helpers.

**Content Lifecycle**

- Drafts and versions are created via REST endpoints defined in [apps/cms/src/controllers/DraftAndVersionControllers.ts](apps/cms/src/controllers/DraftAndVersionControllers.ts) and mounted in [apps/cms/src/routes/baseRoutes.ts](apps/cms/src/routes/baseRoutes.ts); workers consume BullMQ jobs scheduled from the draft hooks in the factory.
- Publishing uses `publishDraft`/`publishUpdatedData` from [apps/cms/src/utils/draftUtils.ts](apps/cms/src/utils/draftUtils.ts); if you introduce new workflows, keep job IDs in sync with the worker (`publish:<List>Draft:<id>` format) so duplicates dont linger.

**Search & Typesense**

- Typesense configuration and serializers are in [apps/cms/src/utils/typesense/index.ts](apps/cms/src/utils/typesense/index.ts); when adding new searchable entities, update `PAGE_TYPES`, `toSearchableObj`, and the GraphQL resolvers in [apps/cms/keystone.ts](apps/cms/keystone.ts) so unions can resolve the new type.
- `/typesense/*` endpoints defined in [apps/cms/src/routes/baseRoutes.ts](apps/cms/src/routes/baseRoutes.ts) call [apps/cms/src/controllers/typesenseController.ts](apps/cms/src/controllers/typesenseController.ts); the admin UI at [apps/cms/admin/pages/typesense.tsx](apps/cms/admin/pages/typesense.tsx) hits those endpoints, so treat their payloads as a public contract.

**Queues & Analytics**

- Redis connectivity is centralized in [apps/cms/src/redis/config.ts](apps/cms/src/redis/config.ts); `keystone.db.onConnect` boots Redis, registers publish queue events, and schedules the nightly page-view aggregation job.
- Publish jobs live under [apps/cms/src/redis/publish](apps/cms/src/redis/publish) and page-view aggregation in [apps/cms/src/redis/processPageViews](apps/cms/src/redis/processPageViews); start them with `pnpm run cms:publish-worker` and `pnpm run cms:process-page-views-worker` respectively.
- Page views are recorded through `/api/page-views` in [apps/cms/src/controllers/pageViewsController.ts](apps/cms/src/controllers/pageViewsController.ts); Redis keys are aggregated nightly into Prismas `pageView` table, so dont bypass that endpoint when tracking traffic.

**Admin UX & Bulk Workflows**

- Admin shell overrides live in [apps/cms/admin/config.ts](apps/cms/admin/config.ts) and supporting components under [apps/cms/src/components](apps/cms/src/components); new UI affordances should follow the same pattern (CustomNavigation, custom fields, etc.).
- Bulk document uploads use [apps/cms/admin/pages/bulk-document-upload.tsx](apps/cms/admin/pages/bulk-document-upload.tsx) plus the helper hooks/components in [apps/cms/src/bulkDocumentUploads](apps/cms/src/bulkDocumentUploads); validations belong in `bulkDocumentUploads/utils` so drag/drop, toasts, and GraphQL mutations stay aligned.

**Storage & Media**

- File/image storage adapters are declared in [apps/cms/src/configs/appConfig.ts](apps/cms/src/configs/appConfig.ts); S3 creds route uploads to S3, otherwise files land in `public/document-files` and `public/image-files`.
- Custom media fields such as `blueHarvestImage` live in [apps/cms/src/components/customFields](apps/cms/src/components/customFields); reuse them to guarantee the admin preview + uploader UX.

**GraphQL & Data**

- Prisma schema is at [apps/cms/schema.prisma](apps/cms/schema.prisma) with migrations under [apps/cms/migrations](apps/cms/migrations); run `pnpm run cms:migrate` (deploy) or `pnpm --filter=cms run migrations` (dev) whenever schema changes.
- GraphQL client artifacts are generated via [apps/cms/codegen.ts](apps/cms/codegen.ts); after editing queries in `src` or `admin`, run `pnpm --filter=cms run codegen` to refresh types in [apps/cms/src/graphql](apps/cms/src/graphql).

**Developer Workflow**

- Install once from repo root with `pnpm install --ignore-scripts`; use the turbo-driven scripts in [package.json](package.json) (`pnpm run cms:dev`, `cms:build`, `cms:start`).
- Seed baseline content with `pnpm run cms:seed --filter=cms`, which uses [apps/cms/seed-data.ts](apps/cms/seed-data.ts); it expects `ADMIN_USER_*` env vars and will populate Services, Boards, Parks, ElectionsPage, and BoardPage samples.
- Logs are emitted via Pino to [apps/cms/logs/app.log](apps/cms/logs/app.log); check this file when debugging workers, controllers, or NextAuth session issues.
