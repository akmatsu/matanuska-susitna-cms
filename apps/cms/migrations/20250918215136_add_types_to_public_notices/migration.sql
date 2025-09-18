-- AlterTable
ALTER TABLE "PublicNotice" ADD COLUMN     "type" TEXT DEFAULT 'AKMATSUGOV_PublicNotice';

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ADD COLUMN     "type" TEXT DEFAULT 'AKMATSUGOV_PublicNotice';

-- AlterTable
ALTER TABLE "PublicNoticeVersion" ADD COLUMN     "type" TEXT DEFAULT 'AKMATSUGOV_PublicNotice';
