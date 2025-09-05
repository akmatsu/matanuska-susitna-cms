-- AlterTable
ALTER TABLE "OrgUnit" ALTER COLUMN "type" DROP DEFAULT;

-- AlterTable
ALTER TABLE "OrgUnitDraft" ALTER COLUMN "type" DROP DEFAULT;

-- AlterTable
ALTER TABLE "OrgUnitVersion" ALTER COLUMN "type" DROP DEFAULT;
