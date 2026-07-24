/*
  Warnings:

  - Made the column `type` on table `PublicNotice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `PublicNoticeDraft` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `PublicNoticeVersion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PublicNotice" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "PublicNoticeVersion" ALTER COLUMN "type" SET NOT NULL;
