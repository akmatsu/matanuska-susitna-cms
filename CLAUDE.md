# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **headless CMS built with Keystone.js**, serving as the content management system for the Matanuska-Susitna Borough. It exposes a GraphQL API for flexible content delivery and features full-text search via TypeSense, draft/publish workflows, role-based access control, and integrations with Azure AD (Entra ID) for authentication, S3 for media storage, and GovDelivery for notifications.

## Technology Stack

- **Framework**: Keystone.js 6
- **Database**: PostgreSQL (via Prisma ORM)
- **Search**: TypeSense (full-text search)
- **Background Jobs**: Redis + BullMQ
- **Frontend/Admin UI**: React 18, Next.js 14
- **API**: GraphQL
- **Styling**: TailwindCSS 4
- **Authentication**: NextAuth (Entra AD)
- **Package Manager**: pnpm (monorepo with Turbo)

## Architecture & Key Concepts

### High-Level Structure

The CMS is organized around **polymorphic content models** (Service, Facility, Board, PublicNotice, etc.) that share common patterns:
- Each model can exist in draft and published states
- Version control tracks publish history
- A custom GraphQL union type `Page` resolves type dynamically based on discriminator fields
- TypeSense collection sync keeps the search index aligned with published content

### Core Layers

**Models Layer** (`/src/app/models/`):
- Keystone list definitions organized by domain (pages, documents, linksAndUrls, elections, etc.)
- Access control logic applied at the list/field level
- Draft/version factories extend models with versioning capabilities

**GraphQL Layer** (`/src/graphql/`, extended in `keystone.ts`):
- Auto-generated schema from Keystone lists
- Custom resolvers for `getPage` (fetch by slug) and `getInternalLink` (fetch by ID, returns appropriate union member)
- Type discriminators (`__resolveType`) identify union members based on field presence (e.g., `'effort' in value` → Plan)

**Controllers** (`/src/controllers/`):
- **typesenseController**: Collection creation, schema updates, indexing, NL search setup
- **DraftAndVersionControllers**: Draft creation/publishing, republishing old versions
- **pageViewsController**: Analytics event tracking

**Background Workers** (`/src/redis/`):
- `publish/worker.ts`: BullMQ worker consuming publish jobs, calls `handleDraftPublish` to sync drafts to published versions
- `processPageViews/worker.ts`: Analytics aggregation job
- Jobs are queued from draft operations and triggered via POST endpoints

**Custom Routes** (`/src/routes/baseRoutes.ts`):
- Admin API endpoints for TypeSense operations, draft/publish workflows, and page view tracking
- Each endpoint wraps a controller function with middleware

### Data Flow: Publishing

1. Admin creates/edits a draft version
2. Publish action queues a job to `bull` (Redis)
3. `publish-worker` listens on the queue, calls `handleDraftPublish`
4. Publish handler updates the published version and syncs to TypeSense
5. Client polls or receives webhook to confirm

### Key Models

Content is polymorphic; these types share the `Page` union and PageViewItemUnion:
- **Service**: primary content type, `primaryActionId` field
- **Facility**: parks/recreation, `parkId` field
- **Board**: government boards, `linkToAgendasId` field
- **PublicNotice**: notices with `effectiveDate`
- **Plan**, **Event**, **Topic**, **Community**, **Trail**, **Park**, **OrgUnit**, **AssemblyDistrict**, **Policy**, **ElectionsPage**, **Document**, **Url**

Union type resolution relies on discriminator field presence—avoid renaming or removing these fields without updating `__resolveType` in `keystone.ts`.

## Development Commands

### Core Tasks

```bash
# Install dependencies (do this first after cloning)
pnpm install --ignore-scripts

# Development server (Keystone admin UI + GraphQL at http://localhost:3333)
pnpm cms:dev

# Build for production
pnpm cms:build

# Production server
pnpm cms:start

# Database migrations
pnpm cms:migrate

# Create a new migration (creates empty migration file)
pnpm migrations:create

# Reset database (destructive—drops and reapplies all migrations)
pnpm reset

# Seed sample data (optional, populates initial records)
pnpm cms:seed
```

### Background Workers

Run these in separate terminals during development:

```bash
# Publish worker (draft → published sync)
pnpm cms:publish-worker

# Page views analytics worker
pnpm cms:process-page-views-worker
```

### Code Quality

```bash
# Lint entire codebase
pnpm lint

# Fix linting errors automatically
pnpm lint:fix
```

### Utilities & Scripts

```bash
# Generate Prisma client and Keystone types
pnpm generate

# GraphQL code generation (generates TypeScript types from schema)
pnpm codegen
pnpm codegen:watch  # Watch mode

# Create/remove collections via CLI (interactive)
pnpm collections:create
pnpm collections:remove

# Import data into TypeSense collections
pnpm typesense:import:services
pnpm typesense:import:communities

# Seed baseline content (Services, Boards, Parks, ElectionsPage, BoardPage samples)
# Requires ADMIN_USER_* env vars set
pnpm cms:seed
```

## Configuration & Environment

### Environment Variables

Copy `.env.example` to `.env` in `/apps/cms/`:

```bash
cp apps/cms/.env.example apps/cms/.env
```

Key variables:
- **Database**: `DATABASE_URL` (PostgreSQL connection string)
- **TypeSense**: `TYPESENSE_API_KEY` (find in `/etc/typesense/typesense-server.ini` on Linux: `cat /etc/typesense/typesense-server.ini | grep api-key`)
- **Redis**: `REDIS_URL`
- **Auth**: Entra AD credentials (contact Web Team)
- **Storage**: S3 bucket and credentials (if using S3 media storage)
- **GovDelivery**: API key and account details (if sending notifications)

### Keystone Configuration

- **Entry point**: `/apps/cms/keystone.ts`
- **Database provider**: PostgreSQL via Prisma
- **Session strategy**: NextAuth with Entra AD
- **Storage**: Configured in `appConfig.storage` (S3 or local disk)
- **GraphQL schema**: Extended at runtime with custom type discriminators and queries
- **CORS**: Varies by environment (production whitelist vs. localhost for dev)

### App Configuration

- **Location**: `/apps/cms/src/configs/appConfig.ts`
- Centralizes database, server, storage, auth, and API credentials
- Loaded from environment variables

## Testing Strategies

### Current Approach
The project uses **integration tests with a real database** over mocks. When running tests, ensure PostgreSQL, Redis, and TypeSense are accessible or tests will fail.

### Manual Testing
1. Start `pnpm cms:dev`
2. Navigate to `http://localhost:3333`
3. Sign in via Entra AD (or use test credentials if configured)
4. Create/edit/publish content
5. Verify GraphQL query via Keystone's GraphQL playground (`/admin/graphql`)
6. Check TypeSense via its HTTP API (default `http://localhost:8108`)

### Debugging
- **Logs**: Check console output from `pnpm cms:dev` and worker processes
- **Log file**: `/logs/app.log` (Pino output; useful for debugging workers, controllers, and NextAuth)
- **Logger**: `/src/configs/logger.ts` uses Pino; set `DEBUG=cms:*` in env for verbose output
- **GraphQL playground**: Built into Keystone admin UI at `/admin/graphql`
- **Session issues**: Check auth flow in `/src/session.ts` and middleware in `keystone.ts` `pageMiddleware`

## Common Patterns

### Field Reuse & Consistency

Shared field definitions live in `/src/app/fieldUtils.ts`: slugs, hero images, contacts, actions, tags, publishing metadata. **Always reuse these utilities** instead of redefining Keystone fields—this keeps validation and admin UI consistent across models.

### Adding a New Model

1. Create a new file in `/src/app/models/` (e.g., `myModel.ts`)
2. For page-like content, derive from `basePage()` (via `DraftAndVersionsFactory`) to inherit draft/version trio, publish hooks, and RBAC
3. For non-page models, define a Keystone `list()` manually with access control via role helpers in `/src/app/access/`
4. Reuse field definitions from `fieldUtils.ts`
5. Export from `/src/app/models/index.ts`
6. If it's a page type, add discriminator field and update `__resolveType` in `keystone.ts`
7. Run `pnpm cms:dev` to trigger Keystone's schema generation and migration
8. Create migration with `pnpm migrations:create` if schema changes

### Access Control

- Role values and helpers (`isAdmin`, `isContentManager`, etc.) live in `/src/app/access/roles.ts`
- Group-based checks (`belongsToGroup`) are in `/src/app/access/group.ts`
- `basePage()` injects the `canEdit` virtual plus owner/group relationships
- When adding new models that should respect RBAC, derive them from `basePage` or explicitly call the same access helpers

### Adding a Custom GraphQL Query

1. Add resolver to `graphqlExtendTypeDefs` in `/src/utils/graphqlHelpers.ts` (typeDefs) or `keystone.ts` (resolvers)
2. Run `pnpm codegen` to regenerate TypeScript types
3. Test via GraphQL playground in Keystone admin

### Draft/Publish Workflow

**Important**: Most page models are created by `DraftAndVersionsFactory` (`/src/app/draftAndVersionFactory/DraftAndVersionsFactory.ts`), which emits three lists:
- The main published list (e.g., `Service`)
- A draft list (e.g., `ServiceDraft`)
- A version history list (e.g., `ServiceVersions`)

Publishing flow:
1. Admin saves as draft → creates/updates record in draft list
2. Admin clicks "Publish" → POST to `/publish/:list/:id` endpoint
3. Endpoint queues a BullMQ job with ID format `publish:<List>Draft:<id>` (e.g., `publish:ServiceDraft:abc123`)
4. Worker (`publish-worker`) consumes job, calls `publishDraft` from `/src/utils/draftUtils.ts`
5. Publish handler syncs draft to published version and adds entry to version history
6. TypeSense collection is reindexed if applicable
7. Unpublish removes from TypeSense and marks as unpublished

**Job ID Naming**: Keep job IDs in sync with worker expectations (`publish:<List>Draft:<id>` format) to avoid duplicate jobs lingering in the queue.

### TypeSense Sync

TypeSense configuration and serializers live in `/src/utils/typesense/index.ts`:
- `PAGE_TYPES` lists all searchable entity types (Service, Facility, etc.)
- `toSearchableObj` transforms database records into searchable documents
- When adding new searchable entities: update `PAGE_TYPES`, `toSearchableObj`, and the `PageViewItemUnion` + `InternalLinkSearch` union resolvers in `keystone.ts`

Admin endpoints for TypeSense:
- POST `/typesense/create-collections` — create collections once (collections are persistent)
- POST `/typesense/update-schema` — add/update searchable fields
- POST `/typesense/reindex` — full reindex after major content changes
- POST `/typesense/create-nl-model` — set up semantic (natural language) search
- GET `/typesense/popular-searches`, `/typesense/no-hit-searches` — analytics

The admin UI at `/admin/pages/typesense.tsx` hits these endpoints; treat endpoint payloads as a public contract.

## Deployment & Database Migrations

### Migrations
- Stored in `/migrations/` with timestamps
- Apply pending migrations: `pnpm cms:migrate`
- Create new migration: `pnpm migrations:create` → edit `.prisma/migrations/[timestamp]_[name]/migration.sql` → `pnpm cms:migrate`
- Do NOT manually edit applied migrations; create new ones instead

### Deployment Flow (GitHub Actions)
1. Builds the app
2. Packages built assets and migrations
3. Deploys to server, sets environment variables
4. Runs `pnpm cms:migrate` automatically
5. Workers restart

## Git Branch Guidance

The repository uses conventional commit messages and semantic versioning via `semantic-release`.

- **Commit format**: `type(scope): description` (e.g., `feat(model): add service hours field`, `fix(publish): handle unpublish date correctly`)
- Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`
- Pull requests should be concise and include rationale for non-obvious changes

## Performance & Scaling Notes

- **BullMQ concurrency**: Set in worker instantiation (currently 5 for publish worker); tune based on database load
- **TypeSense**: Local self-hosted; consider cluster setup for high-volume search
- **Redis**: Single instance; consider Sentinel or Cluster for production HA
- **Database**: Monitor slow queries; index frequently-filtered fields (e.g., `slug`, `status`)
- **Keystone cache**: Static build artifacts cached; clear if stale issues arise

## Admin UX & Custom Affordances

### Admin Shell Configuration
- Admin shell overrides live in `/admin/config.ts`
- Custom components under `/src/components/` (e.g., `CustomNavigation.tsx`, `CustomLogo.tsx`)
- Custom field components in `/src/components/customFields/` (e.g., `IconSelection.tsx`, `blueHarvestImage`)
- New UI affordances should follow the same pattern; **reuse existing custom fields** to guarantee consistent preview + uploader UX

### Bulk Document Uploads
- Admin page at `/admin/pages/bulk-document-upload.tsx`
- Helper hooks/components in `/src/bulkDocumentUploads/`
- Validations belong in `bulkDocumentUploads/utils.ts` so drag/drop, toasts, and GraphQL mutations stay aligned

### Storage & Media
- File/image storage adapters declared in `/src/configs/appConfig.ts`
- S3 credentials: files upload to S3
- No S3 config: files land in `public/document-files` and `public/image-files` (local storage)
- Custom media fields reuse existing components to guarantee uploader UX

## Troubleshooting

| Issue | Diagnosis | Solution |
| --- | --- | --- |
| Migration fails | SQL syntax or schema conflict | Check `schema.prisma` for conflicts; review migration SQL |
| GraphQL query returns wrong type | Type discriminator field missing or renamed | Verify field exists on model; update `__resolveType` in `keystone.ts` |
| TypeSense out of sync | Reindex job failed | Check `/logs/app.log`; run `pnpm typesense:import:*` manually or `/typesense/reindex` endpoint |
| Publish job stalled | Worker crashed or Redis disconnected | Restart worker; check Redis connection in `/logs/app.log` |
| Admin UI won't load | Session/auth issue | Check Entra AD credentials, CORS origin, and auth flow in `/src/session.ts` |
| Duplicate publish jobs in queue | Job ID format mismatch | Ensure jobs are named `publish:<List>Draft:<id>` to match worker expectations |
| `npm ERR! notsup Packages don't support node v...` | Node version mismatch | Use Node 20+ (check `package.json` for pinned version) |
