/*
  Warnings:

  - You are about to drop the column `showSideNav` on the `AssemblyDistrict` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `AssemblyDistrictDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `AssemblyDistrictVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `BoardDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `BoardVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `CommunityDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `CommunityVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `EventDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `EventVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `FacilityDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `FacilityVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `OrgUnit` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `OrgUnitDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `OrgUnitVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Park` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `ParkDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `ParkVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `PlanDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `PlanVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `PublicNotice` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `PublicNoticeDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `PublicNoticeVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `ServiceDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `ServiceVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Topic` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `TopicDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `TopicVersion` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `Trail` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `TrailDraft` table. All the data in the column will be lost.
  - You are about to drop the column `showSideNav` on the `TrailVersion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AssemblyDistrict" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "AssemblyDistrictDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "AssemblyDistrictVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "BoardDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "BoardVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Community" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CommunityDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CommunityVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "EventDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "EventVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Facility" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "FacilityDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "FacilityVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "OrgUnit" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "OrgUnitDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "OrgUnitVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Park" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ParkDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ParkVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PlanDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PlanVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PublicNotice" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PublicNoticeDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PublicNoticeVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ServiceDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ServiceVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TopicDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TopicVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Trail" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TrailDraft" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TrailVersion" DROP COLUMN "showSideNav",
ADD COLUMN     "hideSideNav" BOOLEAN NOT NULL DEFAULT false;
