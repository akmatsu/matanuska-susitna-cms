# One image runs every CMS process: the web server, both workers, and
# migrations. docker-compose.yml picks which one with `command`.
#
# Debian slim, not Alpine: Prisma and Tailwind ship glibc-only native binaries.

FROM node:22.21.0-bookworm-slim AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && corepack enable
WORKDIR /app

FROM base AS build
# Keystone generates the Prisma schema from this. Without it, appConfig falls
# back to sqlite and the schema check in postinstall fails.
ENV DATABASE_PROVIDER=postgresql
# `pnpm fetch` only needs the lockfile, so this layer stays cached until
# dependencies change.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm fetch

COPY . .
# Install scripts must run: @prisma/engines downloads its engines here, and the
# cms postinstall generates the Prisma client and Keystone types.
RUN pnpm install --offline --frozen-lockfile --filter cms --workspace-root
RUN pnpm --filter cms run build

FROM base AS runtime
ENV NODE_ENV=production
# Keep dev dependencies: the workers run through tsx, and migrations need the
# prisma CLI.
COPY --from=build --chown=node:node /app /app
WORKDIR /app/apps/cms
ENV PATH=/app/apps/cms/node_modules/.bin:/app/node_modules/.bin:$PATH
USER node
EXPOSE 3333
CMD ["keystone", "start"]
