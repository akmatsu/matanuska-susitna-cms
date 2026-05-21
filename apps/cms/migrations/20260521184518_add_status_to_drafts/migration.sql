-- AlterTable
ALTER TABLE "AssemblyDistrictDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "CommunityDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "ElectionDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "EventDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "FacilityDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "OrgUnitDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "ParkDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "PlanDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "PolicyDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "PostDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "ServiceDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "TopicDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "TrailDraft" ADD COLUMN     "status" TEXT DEFAULT 'unpublished';
