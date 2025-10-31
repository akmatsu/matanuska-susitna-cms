-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "maintainer" TEXT;

-- AlterTable
ALTER TABLE "TrailDraft" ADD COLUMN     "maintainer" TEXT;

-- AlterTable
ALTER TABLE "TrailVersion" ADD COLUMN     "maintainer" TEXT;
