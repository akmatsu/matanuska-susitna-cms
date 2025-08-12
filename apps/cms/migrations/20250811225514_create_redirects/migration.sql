-- AlterTable
ALTER TABLE "AssemblyDistrict" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "AssemblyDistrictDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "AssemblyDistrictVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "BoardVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "CommunityDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "CommunityVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "EventDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "EventVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "FacilityDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "FacilityVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "OrgUnitDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "OrgUnitVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "ParkDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "ParkVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "PlanDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "PlanVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "PublicNotice" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "PublicNoticeDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "PublicNoticeVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "ServiceDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "ServiceVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "TopicDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "TopicVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "TrailDraft" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "TrailVersion" ADD COLUMN     "redirect" TEXT;

-- AlterTable
ALTER TABLE "Url" ADD COLUMN     "indexInSearchEngine" TEXT;

-- CreateTable
CREATE TABLE "Redirect" (
    "id" TEXT NOT NULL,
    "from" TEXT NOT NULL DEFAULT '',
    "to" TEXT,
    "redirectMessage" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Redirect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Redirect_to_idx" ON "Redirect"("to");

-- CreateIndex
CREATE INDEX "AssemblyDistrict_redirect_idx" ON "AssemblyDistrict"("redirect");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_redirect_idx" ON "AssemblyDistrictDraft"("redirect");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_redirect_idx" ON "AssemblyDistrictVersion"("redirect");

-- CreateIndex
CREATE INDEX "Board_redirect_idx" ON "Board"("redirect");

-- CreateIndex
CREATE INDEX "BoardDraft_redirect_idx" ON "BoardDraft"("redirect");

-- CreateIndex
CREATE INDEX "BoardVersion_redirect_idx" ON "BoardVersion"("redirect");

-- CreateIndex
CREATE INDEX "Community_redirect_idx" ON "Community"("redirect");

-- CreateIndex
CREATE INDEX "CommunityDraft_redirect_idx" ON "CommunityDraft"("redirect");

-- CreateIndex
CREATE INDEX "CommunityVersion_redirect_idx" ON "CommunityVersion"("redirect");

-- CreateIndex
CREATE INDEX "Event_redirect_idx" ON "Event"("redirect");

-- CreateIndex
CREATE INDEX "EventDraft_redirect_idx" ON "EventDraft"("redirect");

-- CreateIndex
CREATE INDEX "EventVersion_redirect_idx" ON "EventVersion"("redirect");

-- CreateIndex
CREATE INDEX "Facility_redirect_idx" ON "Facility"("redirect");

-- CreateIndex
CREATE INDEX "FacilityDraft_redirect_idx" ON "FacilityDraft"("redirect");

-- CreateIndex
CREATE INDEX "FacilityVersion_redirect_idx" ON "FacilityVersion"("redirect");

-- CreateIndex
CREATE INDEX "OrgUnit_redirect_idx" ON "OrgUnit"("redirect");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_redirect_idx" ON "OrgUnitDraft"("redirect");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_redirect_idx" ON "OrgUnitVersion"("redirect");

-- CreateIndex
CREATE INDEX "Park_redirect_idx" ON "Park"("redirect");

-- CreateIndex
CREATE INDEX "ParkDraft_redirect_idx" ON "ParkDraft"("redirect");

-- CreateIndex
CREATE INDEX "ParkVersion_redirect_idx" ON "ParkVersion"("redirect");

-- CreateIndex
CREATE INDEX "Plan_redirect_idx" ON "Plan"("redirect");

-- CreateIndex
CREATE INDEX "PlanDraft_redirect_idx" ON "PlanDraft"("redirect");

-- CreateIndex
CREATE INDEX "PlanVersion_redirect_idx" ON "PlanVersion"("redirect");

-- CreateIndex
CREATE INDEX "PublicNotice_redirect_idx" ON "PublicNotice"("redirect");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_redirect_idx" ON "PublicNoticeDraft"("redirect");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_redirect_idx" ON "PublicNoticeVersion"("redirect");

-- CreateIndex
CREATE INDEX "Service_redirect_idx" ON "Service"("redirect");

-- CreateIndex
CREATE INDEX "ServiceDraft_redirect_idx" ON "ServiceDraft"("redirect");

-- CreateIndex
CREATE INDEX "ServiceVersion_redirect_idx" ON "ServiceVersion"("redirect");

-- CreateIndex
CREATE INDEX "Topic_redirect_idx" ON "Topic"("redirect");

-- CreateIndex
CREATE INDEX "TopicDraft_redirect_idx" ON "TopicDraft"("redirect");

-- CreateIndex
CREATE INDEX "TopicVersion_redirect_idx" ON "TopicVersion"("redirect");

-- CreateIndex
CREATE INDEX "Trail_redirect_idx" ON "Trail"("redirect");

-- CreateIndex
CREATE INDEX "TrailDraft_redirect_idx" ON "TrailDraft"("redirect");

-- CreateIndex
CREATE INDEX "TrailVersion_redirect_idx" ON "TrailVersion"("redirect");

-- AddForeignKey
ALTER TABLE "AssemblyDistrict" ADD CONSTRAINT "AssemblyDistrict_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNotice" ADD CONSTRAINT "PublicNotice_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicVersion" ADD CONSTRAINT "TopicVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicDraft" ADD CONSTRAINT "TopicDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDraft" ADD CONSTRAINT "EventDraft_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventVersion" ADD CONSTRAINT "EventVersion_redirect_fkey" FOREIGN KEY ("redirect") REFERENCES "Redirect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Redirect" ADD CONSTRAINT "Redirect_to_fkey" FOREIGN KEY ("to") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
