-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "publishAt" TIMESTAMP(3),
ADD COLUMN     "reviewDate" TIMESTAMP(3),
ADD COLUMN     "unpublishAt" TIMESTAMP(3);
