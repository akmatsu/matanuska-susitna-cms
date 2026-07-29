UPDATE "PublicNotice" SET "type" = 'none' WHERE "type" IS NULL;
UPDATE "PublicNoticeDraft" SET "type" = 'none' WHERE "type" IS NULL;
UPDATE "PublicNoticeVersion" SET "type" = 'none' WHERE "type" IS NULL;

-- AlterTable
ALTER TABLE "PublicNotice" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "PublicNoticeVersion" ALTER COLUMN "type" SET NOT NULL;
