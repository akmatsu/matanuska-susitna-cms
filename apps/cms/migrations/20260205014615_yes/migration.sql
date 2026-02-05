-- AlterTable
ALTER TABLE "Policy" ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PolicyDraft" ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PolicyVersion" ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PostDraft" ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PostVersion" ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;
