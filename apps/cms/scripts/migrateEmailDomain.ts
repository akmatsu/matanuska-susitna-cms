import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import * as PrismaModule from '.prisma/client';
import config from '../keystone';
import { getContext } from '@keystone-6/core/context';
import { logger } from '../src/configs/logger';

/**
 * One-off bulk rewrite of the @matsugov.us email domain (and any subdomain of
 * it, e.g. @mail.matsugov.us -> @mail.matsu.gov) to @matsu.gov, across User,
 * Contact, and AssemblyDistrict (+ its Draft/Version tables).
 *
 * Usage:
 *   npx tsx scripts/migrateEmailDomain.ts            # dry run, no writes
 *   npx tsx scripts/migrateEmailDomain.ts --execute   # applies changes
 *
 * IMPORTANT: User.signIn (src/session.ts) links a not-yet-logged-in User to
 * their Entra AD identity by matching email on first login. Confirm Entra AD
 * UPNs/emails are already (or simultaneously) cut over to @matsu.gov before
 * running --execute against production, or users invited but never logged
 * in could fail to link / collide on next sign-in.
 */

const OLD_DOMAIN = 'matsugov.us';
const NEW_DOMAIN = 'matsu.gov';
// Matches "@matsugov.us" or any subdomain of it ("@mail.matsugov.us", "@a.b.matsugov.us"),
// capturing the subdomain prefix (if any) so it can be preserved in the replacement.
// The required "." boundary before the base domain means lookalikes like
// "@notmatsugov.us" (no dot separator) are correctly left unmatched.
const OLD_DOMAIN_REGEX = new RegExp(
  `@((?:[^@\\s]+\\.)?)${OLD_DOMAIN.replace(/\./g, '\\.')}$`,
  'i',
);

function createSudoContext() {
  return getContext(config, PrismaModule).sudo();
}
type SudoContext = ReturnType<typeof createSudoContext>;

/**
 * Keystone's `sudo().db` is typed as a concrete map of every list in the
 * schema, so it has no string index signature. This script looks lists up
 * by name at runtime (`listKey: string`), so route through this narrow,
 * explicitly-typed view instead of indexing `sudo.db` directly.
 */
interface EmailListDbApi {
  findMany(args?: {
    where?: unknown;
  }): Promise<Array<{ id: string; email: string | null }>>;
  updateOne(args: {
    where: { id: string };
    data: { email: string };
  }): Promise<unknown>;
  count(args?: { where?: unknown }): Promise<number>;
}

function getListDb(sudo: SudoContext, listKey: string): EmailListDbApi {
  return (sudo.db as unknown as Record<string, EmailListDbApi>)[listKey];
}

interface EmailChange {
  table: string;
  id: string;
  oldEmail: string;
  newEmail: string;
}

interface SkippedRow {
  table: string;
  id: string;
  oldEmail: string;
  newEmail: string;
  reason: string;
}

interface MigrationResult {
  changes: EmailChange[];
  skipped: SkippedRow[];
}

function toNewEmail(email: string): string {
  return email.replace(OLD_DOMAIN_REGEX, `@$1${NEW_DOMAIN}`);
}

async function migrateSimpleList(
  sudo: SudoContext,
  listKey: string,
  execute: boolean,
): Promise<MigrationResult> {
  const changes: EmailChange[] = [];
  const db = getListDb(sudo, listKey);

  const rows = await db.findMany({
    where: { email: { endsWith: OLD_DOMAIN, mode: 'insensitive' } },
  });

  for (const row of rows) {
    if (!row.email) continue;
    const newEmail = toNewEmail(row.email);
    if (newEmail === row.email) continue;

    changes.push({ table: listKey, id: row.id, oldEmail: row.email, newEmail });

    if (execute) {
      await db.updateOne({
        where: { id: row.id },
        data: { email: newEmail },
      });
    }
  }

  return { changes, skipped: [] };
}

/** User.email is unique, so new emails must be checked against collisions before writing. */
async function migrateUsers(
  sudo: SudoContext,
  execute: boolean,
): Promise<MigrationResult> {
  const changes: EmailChange[] = [];
  const skipped: SkippedRow[] = [];

  const [candidates, allUsers] = await Promise.all([
    sudo.db.User.findMany({
      where: { email: { endsWith: OLD_DOMAIN, mode: 'insensitive' } },
    }),
    sudo.db.User.findMany(),
  ]);

  const existingIdByLowerEmail = new Map<string, string>();
  for (const u of allUsers) {
    if (u.email) existingIdByLowerEmail.set(u.email.toLowerCase(), u.id);
  }

  const plannedLowerEmails = new Set<string>();

  for (const user of candidates) {
    if (!user.email) continue;
    const newEmail = toNewEmail(user.email);
    if (newEmail === user.email) continue;
    const newEmailLower = newEmail.toLowerCase();

    const existingOwnerId = existingIdByLowerEmail.get(newEmailLower);
    if (existingOwnerId && existingOwnerId !== user.id) {
      skipped.push({
        table: 'User',
        id: user.id,
        oldEmail: user.email,
        newEmail,
        reason: `Would collide with existing User ${existingOwnerId}`,
      });
      continue;
    }

    if (plannedLowerEmails.has(newEmailLower)) {
      skipped.push({
        table: 'User',
        id: user.id,
        oldEmail: user.email,
        newEmail,
        reason: 'Would collide with another User in this same migration batch',
      });
      continue;
    }

    plannedLowerEmails.add(newEmailLower);
    changes.push({ table: 'User', id: user.id, oldEmail: user.email, newEmail });

    if (execute) {
      await sudo.db.User.updateOne({
        where: { id: user.id },
        data: { email: newEmail },
      });
    }
  }

  return { changes, skipped };
}

function printReport(execute: boolean, results: MigrationResult[]) {
  const allChanges = results.flatMap((r) => r.changes);
  const allSkipped = results.flatMap((r) => r.skipped);

  console.log(
    `\n${execute ? 'EXECUTED' : 'DRY RUN'} — email domain migration: @${OLD_DOMAIN} -> @${NEW_DOMAIN}\n`,
  );

  if (allChanges.length === 0) {
    console.log('No matching rows found.');
  } else {
    console.log(`${execute ? 'Updated' : 'Would update'} ${allChanges.length} row(s):\n`);
    for (const c of allChanges) {
      console.log(`  [${c.table}] ${c.id}: ${c.oldEmail} -> ${c.newEmail}`);
    }
  }

  const byTable = allChanges.reduce<Record<string, number>>((acc, c) => {
    acc[c.table] = (acc[c.table] ?? 0) + 1;
    return acc;
  }, {});
  console.log('\nSummary by table:');
  for (const [table, count] of Object.entries(byTable)) {
    console.log(`  ${table}: ${count}`);
  }

  if (allSkipped.length > 0) {
    console.log(`\nSkipped ${allSkipped.length} row(s) due to conflicts:`);
    for (const s of allSkipped) {
      console.log(`  [${s.table}] ${s.id}: ${s.oldEmail} -> ${s.newEmail} (${s.reason})`);
    }
  }

  console.log('');
}

function writeChangeLog(results: MigrationResult[]): string {
  const allChanges = results.flatMap((r) => r.changes);
  const allSkipped = results.flatMap((r) => r.skipped);

  const dir = path.join(__dirname, 'migration-logs');
  fs.mkdirSync(dir, { recursive: true });

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = path.join(dir, `email-domain-${timestamp}.json`);

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      {
        oldDomain: OLD_DOMAIN,
        newDomain: NEW_DOMAIN,
        timestamp,
        changes: allChanges,
        skipped: allSkipped,
      },
      null,
      2,
    ),
  );

  console.log(`Change log written to ${filePath}`);
  return filePath;
}

async function verifyNoRemaining(sudo: SudoContext, listKeys: string[]) {
  console.log('Post-run verification:');
  for (const listKey of listKeys) {
    const candidates = await getListDb(sudo, listKey).findMany({
      where: { email: { endsWith: OLD_DOMAIN, mode: 'insensitive' } },
    });
    // Count only rows that would actually be transformed by toNewEmail()
    // (filters out lookalikes like person@notmatsugov.us that endsWith catches but regex doesn't match)
    const actualRemaining = candidates.filter(
      (row) => row.email && row.email !== toNewEmail(row.email),
    ).length;
    console.log(`  ${listKey}: ${actualRemaining} remaining row(s) with @${OLD_DOMAIN}`);
  }
}

async function main() {
  const execute = process.argv.includes('--execute');
  const sudo = createSudoContext();

  const simpleListKeys = [
    'Contact',
    'AssemblyDistrict',
    'AssemblyDistrictDraft',
    'AssemblyDistrictVersion',
  ];

  const results: MigrationResult[] = [];
  for (const listKey of simpleListKeys) {
    results.push(await migrateSimpleList(sudo, listKey, execute));
  }
  results.push(await migrateUsers(sudo, execute));

  printReport(execute, results);

  if (execute) {
    writeChangeLog(results);
    await verifyNoRemaining(sudo, [...simpleListKeys, 'User']);
  } else {
    console.log('This was a dry run — no changes were written. Re-run with --execute to apply.');
    console.log(
      `IMPORTANT: Before running --execute against production, confirm with IT that Entra AD ` +
        `(Azure AD) UPNs/emails are already or simultaneously cut over to @${NEW_DOMAIN}. ` +
        `The sign-in flow (src/session.ts) links not-yet-logged-in Users by matching email.`,
    );
  }
}

main().catch((error) => {
  logger.error(error, 'Email domain migration failed');
  console.error(error);
  process.exit(1);
});
