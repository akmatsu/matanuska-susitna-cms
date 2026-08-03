-- Update existing records to have a default value for unpublishAt for two weeks from now.
UPDATE "PublicNotice" SET "unpublishAt" = NOW() + INTERVAL '2 weeks' WHERE "unpublishAt" IS NULL;
UPDATE "PublicNoticeDraft" SET "unpublishAt" = NOW() + INTERVAL '2 weeks' WHERE "unpublishAt" IS NULL;
UPDATE "PublicNoticeVersion" SET "unpublishAt" = NOW() + INTERVAL '2 weeks' WHERE "unpublishAt" IS NULL;

-- AlterTable
ALTER TABLE "PublicNotice" ALTER COLUMN "unpublishAt" SET DEFAULT NOW() + INTERVAL '2 weeks';

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ALTER COLUMN "unpublishAt" SET DEFAULT NOW() + INTERVAL '2 weeks';

-- AlterTable
ALTER TABLE "PublicNoticeVersion" ALTER COLUMN "unpublishAt" SET DEFAULT NOW() + INTERVAL '2 weeks';
