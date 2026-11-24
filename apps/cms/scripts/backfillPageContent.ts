import 'dotenv/config';
import * as PrismaModule from '.prisma/client';
import config from '../keystone';
import { getContext } from '@keystone-6/core/context';
import { logger } from '../src/configs/logger';
import { markdownToTipTapJson } from '../src/utils/toTipTap/markdownToTipTapJson';

/**
 * One-off backfill of `content` (TipTap JSON) from `body` (markdown) for
 * every page type and its draft table.
 *
 * `content` is normally written by the `body` field's afterOperation hook
 * (src/app/models/basePage.ts). Pages saved before that hook existed, or
 * never saved since, still have `content` = null. The new frontend renders
 * `content`, so those pages would show nothing. The new Laravel CMS also
 * turns a null `content` into an empty document when an editor saves, which
 * then wipes `body`.
 *
 * What it does, for each table in TABLES:
 * - Finds every row where `content` is null and `body` is not empty.
 * - Converts `body` with the same converter the hook uses.
 * - Writes the result to `content`.
 *
 * Version tables are left alone. They are history snapshots, not pages
 * editors open. BoardPage is left out because it has no `content` column
 * in this schema.
 *
 * Safety:
 * - It writes with Prisma directly, so no Keystone hooks run. That means no
 *   new versions, no TypeSense updates, and no change to publish state.
 * - It keeps each row's existing `updatedAt`, because the page content did
 *   not really change.
 * - It only writes a row if `content`, `body`, and `updatedAt` are unchanged
 *   since it was read. So it is safe to run more than once, and it skips any
 *   row an editor saves while the script is running.
 *
 * Usage:
 *   npx tsx scripts/backfillPageContent.ts            # dry run, no writes
 *   npx tsx scripts/backfillPageContent.ts --execute  # applies changes
 */

const { Prisma } = PrismaModule;

const PAGE_TYPES = [
  'AssemblyDistrict',
  'Board',
  'Community',
  'Event',
  'Facility',
  'OrgUnit',
  'Park',
  'Plan',
  'Policy',
  'Post',
  'PublicNotice',
  'Service',
  'Topic',
  'Trail',
] as const satisfies readonly PrismaModule.Prisma.ModelName[];

const TABLES = PAGE_TYPES.flatMap(
  (type) => [type, `${type}Draft`] as const,
) satisfies readonly PrismaModule.Prisma.ModelName[];

type Row = {
  id: string;
  slug: string;
  body: string | null;
  updatedAt: Date | null;
};

// Every table above has the same `id`, `slug`, `body`, `content`, and
// `updatedAt` columns, but Prisma gives each one its own delegate type. A
// union of those delegates can't be called, so we describe only the parts
// this script uses.
type PageDelegate = {
  findMany(args: {
    where: object;
    select: Record<keyof Row, true>;
  }): Promise<Row[]>;
  updateMany(args: { where: object; data: object }): Promise<{ count: number }>;
};

type TableResult = {
  table: string;
  matching: number;
  updated: number;
  skipped: number;
  failed: { id: string; slug: string; error: string }[];
  tableError?: string;
};

function createSudoContext() {
  return getContext(config, PrismaModule).sudo();
}

function delegateFor(
  prisma: ReturnType<typeof createSudoContext>['prisma'],
  table: (typeof TABLES)[number],
): PageDelegate {
  const key = (table[0].toLowerCase() + table.slice(1)) as Uncapitalize<
    typeof table
  >;
  return prisma[key] as unknown as PageDelegate;
}

async function backfillTable(
  delegate: PageDelegate,
  table: string,
  execute: boolean,
): Promise<TableResult> {
  const result: TableResult = {
    table,
    matching: 0,
    updated: 0,
    skipped: 0,
    failed: [],
  };

  const rows = await delegate.findMany({
    where: {
      content: { equals: Prisma.DbNull },
      body: { not: null },
      NOT: { body: '' },
    },
    select: { id: true, slug: true, body: true, updatedAt: true },
  });
  result.matching = rows.length;

  for (const row of rows) {
    try {
      const content = await markdownToTipTapJson(row.body as string);

      if (!execute) {
        result.updated++;
        continue;
      }

      // Only write if the row is exactly as we read it. Checking `content`
      // alone is not enough: if an editor clears `body`, the save hook
      // skips empty bodies and leaves `content` null, so we would write
      // the removed text back. Matching `body` and `updatedAt` too means
      // any save made while this script runs causes the row to be skipped.
      const res = await delegate.updateMany({
        where: {
          id: row.id,
          content: { equals: Prisma.DbNull },
          body: row.body,
          updatedAt: row.updatedAt,
        },
        data: { content, updatedAt: row.updatedAt },
      });

      if (res.count === 1) result.updated++;
      else result.skipped++;
    } catch (error) {
      result.failed.push({
        id: row.id,
        slug: row.slug,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return result;
}

async function main() {
  const execute = process.argv.includes('--execute');
  const prisma = createSudoContext().prisma;

  const results: TableResult[] = [];
  for (const table of TABLES) {
    try {
      results.push(
        await backfillTable(delegateFor(prisma, table), table, execute),
      );
    } catch (error) {
      // A whole table failing (for example, a missing column) should not
      // stop the other tables, but it must still fail the run.
      results.push({
        table,
        matching: 0,
        updated: 0,
        skipped: 0,
        failed: [],
        tableError: error instanceof Error ? error.message : String(error),
      });
    }
  }

  const updatedLabel = execute ? 'Updated' : 'Would update';
  console.log(
    `\n${execute ? 'EXECUTED' : 'DRY RUN'}: content backfill from body\n`,
  );
  console.table(
    results.map((r) => ({
      Table: r.table,
      Matching: r.matching,
      [updatedLabel]: r.updated,
      'Skipped (changed meanwhile)': r.skipped,
      Failed: r.tableError ? 'TABLE ERROR' : r.failed.length,
    })),
  );

  const sum = (pick: (r: TableResult) => number) =>
    results.reduce((total, r) => total + pick(r), 0);
  console.log(
    `Total: ${sum((r) => r.matching)} matching, ` +
      `${sum((r) => r.updated)} ${updatedLabel.toLowerCase()}, ` +
      `${sum((r) => r.skipped)} skipped, ` +
      `${sum((r) => r.failed.length)} failed rows`,
  );

  for (const r of results) {
    if (r.tableError) console.log(`\n${r.table}: ${r.tableError}`);
    for (const f of r.failed) {
      console.log(`  ${r.table} [${f.id}] ${f.slug}: ${f.error}`);
    }
  }

  if (!execute) {
    console.log(
      '\nThis was a dry run. No changes were written. Re-run with --execute to apply.',
    );
  }

  const hasFailures = results.some((r) => r.tableError || r.failed.length > 0);
  process.exit(hasFailures ? 1 : 0);
}

main().catch((error) => {
  logger.error(error, 'Page content backfill failed');
  console.error(error);
  process.exit(1);
});
