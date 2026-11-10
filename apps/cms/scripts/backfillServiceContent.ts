import 'dotenv/config';
import * as PrismaModule from '.prisma/client';
import config from '../keystone';
import { getContext } from '@keystone-6/core/context';
import { logger } from '../src/configs/logger';
import { markdownToTipTapJson } from '../src/utils/toTipTap/markdownToTipTapJson';

/**
 * One-off backfill of Service.content (TipTap JSON) from Service.body (markdown).
 *
 * `content` is normally written by the `body` field's afterOperation hook
 * (src/app/models/basePage.ts). Services saved before that hook existed, or
 * never saved since, still have `content` = null. The new frontend renders
 * `content`, so those pages would show nothing.
 *
 * What it does:
 * - Finds every Service where `content` is null and `body` is not empty.
 * - Converts `body` with the same converter the hook uses.
 * - Writes the result to `content`.
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
 *   npx tsx scripts/backfillServiceContent.ts            # dry run, no writes
 *   npx tsx scripts/backfillServiceContent.ts --execute  # applies changes
 */

const { Prisma } = PrismaModule;

function createSudoContext() {
  return getContext(config, PrismaModule).sudo();
}

async function main() {
  const execute = process.argv.includes('--execute');
  const prisma = createSudoContext().prisma;

  const rows = await prisma.service.findMany({
    where: {
      content: { equals: Prisma.DbNull },
      body: { not: null },
      NOT: { body: '' },
    },
    select: { id: true, slug: true, body: true, updatedAt: true },
  });

  let updated = 0;
  let skipped = 0;
  const failed: { id: string; slug: string; error: string }[] = [];

  for (const row of rows) {
    try {
      const content = await markdownToTipTapJson(row.body as string);

      if (!execute) {
        updated++;
        continue;
      }

      // Only write if the row is exactly as we read it. Checking `content`
      // alone is not enough: if an editor clears `body`, the save hook
      // skips empty bodies and leaves `content` null, so we would write
      // the removed text back. Matching `body` and `updatedAt` too means
      // any save made while this script runs causes the row to be skipped.
      const res = await prisma.service.updateMany({
        where: {
          id: row.id,
          content: { equals: Prisma.DbNull },
          body: row.body,
          updatedAt: row.updatedAt,
        },
        data: { content, updatedAt: row.updatedAt },
      });

      if (res.count === 1) updated++;
      else skipped++;
    } catch (error) {
      failed.push({
        id: row.id,
        slug: row.slug,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  console.log(
    `\n${execute ? 'EXECUTED' : 'DRY RUN'}: Service.content backfill from body\n`,
  );
  console.log(`  Matching rows:   ${rows.length}`);
  console.log(`  ${execute ? 'Updated' : 'Would update'}:    ${updated}`);
  if (execute) console.log(`  Skipped (row changed meanwhile): ${skipped}`);
  console.log(`  Failed:          ${failed.length}`);

  for (const f of failed) {
    console.log(`    [${f.id}] ${f.slug}: ${f.error}`);
  }

  if (!execute) {
    console.log(
      '\nThis was a dry run. No changes were written. Re-run with --execute to apply.',
    );
  }

  if (failed.length > 0) process.exit(1);
  process.exit(0);
}

main().catch((error) => {
  logger.error(error, 'Service content backfill failed');
  console.error(error);
  process.exit(1);
});
