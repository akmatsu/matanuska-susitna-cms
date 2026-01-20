-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "location" TEXT NOT NULL DEFAULT 'Matsu';

-- AlterTable
ALTER TABLE "PostDraft" ADD COLUMN     "location" TEXT NOT NULL DEFAULT 'Matsu';

-- AlterTable
ALTER TABLE "PostVersion" ADD COLUMN     "location" TEXT NOT NULL DEFAULT 'Matsu';
