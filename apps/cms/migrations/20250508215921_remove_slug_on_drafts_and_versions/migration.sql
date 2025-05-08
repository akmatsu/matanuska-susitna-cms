/*
  Warnings:

  - You are about to drop the column `slug` on the `ServiceDraft` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `ServiceVersion` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ServiceDraft_slug_key";

-- DropIndex
DROP INDEX "ServiceDraft_title_key";

-- DropIndex
DROP INDEX "ServiceVersion_slug_key";

-- DropIndex
DROP INDEX "ServiceVersion_title_key";

-- AlterTable
ALTER TABLE "ServiceDraft" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "ServiceVersion" DROP COLUMN "slug";
