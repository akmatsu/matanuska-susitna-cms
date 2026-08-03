-- AlterTable
ALTER TABLE "PublicNotice" ALTER COLUMN "unpublishAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ALTER COLUMN "unpublishAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PublicNoticeVersion" ALTER COLUMN "unpublishAt" DROP DEFAULT;
