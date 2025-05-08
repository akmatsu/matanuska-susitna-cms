/*
  Warnings:

  - You are about to drop the column `slug` on the `PublicNoticeDraft` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `PublicNoticeVersion` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PublicNoticeDraft_slug_key";

-- DropIndex
DROP INDEX "PublicNoticeDraft_title_key";

-- DropIndex
DROP INDEX "PublicNoticeVersion_slug_key";

-- DropIndex
DROP INDEX "PublicNoticeVersion_title_key";

-- AlterTable
ALTER TABLE "PublicNoticeDraft" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "PublicNoticeVersion" DROP COLUMN "slug";
