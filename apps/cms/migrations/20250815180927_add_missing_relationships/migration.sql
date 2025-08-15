/*
  Warnings:

  - You are about to drop the `_PublicNotice_assemblyDistricts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PublicNotice_boards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PublicNotice_communities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PublicNotice_facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PublicNotice_orgUnits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PublicNotice_parks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PublicNotice_assemblyDistricts" DROP CONSTRAINT "_PublicNotice_assemblyDistricts_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_assemblyDistricts" DROP CONSTRAINT "_PublicNotice_assemblyDistricts_B_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_boards" DROP CONSTRAINT "_PublicNotice_boards_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_boards" DROP CONSTRAINT "_PublicNotice_boards_B_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_communities" DROP CONSTRAINT "_PublicNotice_communities_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_communities" DROP CONSTRAINT "_PublicNotice_communities_B_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_facilities" DROP CONSTRAINT "_PublicNotice_facilities_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_facilities" DROP CONSTRAINT "_PublicNotice_facilities_B_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_orgUnits" DROP CONSTRAINT "_PublicNotice_orgUnits_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_orgUnits" DROP CONSTRAINT "_PublicNotice_orgUnits_B_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_parks" DROP CONSTRAINT "_PublicNotice_parks_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_parks" DROP CONSTRAINT "_PublicNotice_parks_B_fkey";

-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "communities" TEXT;

-- AlterTable
ALTER TABLE "FacilityDraft" ADD COLUMN     "communities" TEXT;

-- AlterTable
ALTER TABLE "FacilityVersion" ADD COLUMN     "communities" TEXT;

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "communities" TEXT;

-- AlterTable
ALTER TABLE "TrailDraft" ADD COLUMN     "communities" TEXT;

-- AlterTable
ALTER TABLE "TrailVersion" ADD COLUMN     "communities" TEXT;

-- DropTable
DROP TABLE "_PublicNotice_assemblyDistricts";

-- DropTable
DROP TABLE "_PublicNotice_boards";

-- DropTable
DROP TABLE "_PublicNotice_communities";

-- DropTable
DROP TABLE "_PublicNotice_facilities";

-- DropTable
DROP TABLE "_PublicNotice_orgUnits";

-- DropTable
DROP TABLE "_PublicNotice_parks";

-- CreateTable
CREATE TABLE "_AssemblyDistrict_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_publicNotices_AB_unique" ON "_AssemblyDistrict_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_publicNotices_B_index" ON "_AssemblyDistrict_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_publicNotices_AB_unique" ON "_AssemblyDistrictVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_publicNotices_B_index" ON "_AssemblyDistrictVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_publicNotices_AB_unique" ON "_AssemblyDistrictDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_publicNotices_B_index" ON "_AssemblyDistrictDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_publicNotices_AB_unique" ON "_Board_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_publicNotices_B_index" ON "_Board_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_publicNotices_AB_unique" ON "_BoardVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_publicNotices_B_index" ON "_BoardVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_publicNotices_AB_unique" ON "_BoardDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_publicNotices_B_index" ON "_BoardDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_publicNotices_AB_unique" ON "_Community_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_publicNotices_B_index" ON "_Community_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_parks_AB_unique" ON "_Community_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_parks_B_index" ON "_Community_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_communities_AB_unique" ON "_ParkVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_communities_B_index" ON "_ParkVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_communities_AB_unique" ON "_ParkDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_communities_B_index" ON "_ParkDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_publicNotices_AB_unique" ON "_CommunityVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_publicNotices_B_index" ON "_CommunityVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_facilities_AB_unique" ON "_CommunityVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_facilities_B_index" ON "_CommunityVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_parks_AB_unique" ON "_CommunityVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_parks_B_index" ON "_CommunityVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_trails_AB_unique" ON "_CommunityVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_trails_B_index" ON "_CommunityVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_publicNotices_AB_unique" ON "_CommunityDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_publicNotices_B_index" ON "_CommunityDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_facilities_AB_unique" ON "_CommunityDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_facilities_B_index" ON "_CommunityDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_parks_AB_unique" ON "_CommunityDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_parks_B_index" ON "_CommunityDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_trails_AB_unique" ON "_CommunityDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_trails_B_index" ON "_CommunityDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_publicNotices_AB_unique" ON "_Facility_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_publicNotices_B_index" ON "_Facility_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_publicNotices_AB_unique" ON "_FacilityVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_publicNotices_B_index" ON "_FacilityVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_publicNotices_AB_unique" ON "_FacilityDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_publicNotices_B_index" ON "_FacilityDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_publicNotices_AB_unique" ON "_OrgUnit_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_publicNotices_B_index" ON "_OrgUnit_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_publicNotices_AB_unique" ON "_OrgUnitVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_publicNotices_B_index" ON "_OrgUnitVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_publicNotices_AB_unique" ON "_OrgUnitDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_publicNotices_B_index" ON "_OrgUnitDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_publicNotices_AB_unique" ON "_Park_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_publicNotices_B_index" ON "_Park_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_publicNotices_AB_unique" ON "_ParkVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_publicNotices_B_index" ON "_ParkVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_publicNotices_AB_unique" ON "_ParkDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_publicNotices_B_index" ON "_ParkDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_publicNotices_AB_unique" ON "_PublicNotice_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_publicNotices_B_index" ON "_PublicNotice_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_publicNotices_AB_unique" ON "_PublicNoticeVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_publicNotices_B_index" ON "_PublicNoticeVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_publicNotices_AB_unique" ON "_PublicNoticeDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_publicNotices_B_index" ON "_PublicNoticeDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_publicNotices_AB_unique" ON "_ServiceVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_publicNotices_B_index" ON "_ServiceVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_publicNotices_AB_unique" ON "_ServiceDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_publicNotices_B_index" ON "_ServiceDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_publicNotices_AB_unique" ON "_TrailVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_publicNotices_B_index" ON "_TrailVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_publicNotices_AB_unique" ON "_TrailDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_publicNotices_B_index" ON "_TrailDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_publicNotices_AB_unique" ON "_Plan_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_publicNotices_B_index" ON "_Plan_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_plans_AB_unique" ON "_PublicNoticeVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_plans_B_index" ON "_PublicNoticeVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_plans_AB_unique" ON "_PublicNoticeDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_plans_B_index" ON "_PublicNoticeDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_publicNotices_AB_unique" ON "_PlanVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_publicNotices_B_index" ON "_PlanVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_publicNotices_AB_unique" ON "_PlanDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_publicNotices_B_index" ON "_PlanDraft_publicNotices"("B");

-- CreateIndex
CREATE INDEX "Facility_communities_idx" ON "Facility"("communities");

-- CreateIndex
CREATE INDEX "FacilityDraft_communities_idx" ON "FacilityDraft"("communities");

-- CreateIndex
CREATE INDEX "FacilityVersion_communities_idx" ON "FacilityVersion"("communities");

-- CreateIndex
CREATE INDEX "Trail_communities_idx" ON "Trail"("communities");

-- CreateIndex
CREATE INDEX "TrailDraft_communities_idx" ON "TrailDraft"("communities");

-- CreateIndex
CREATE INDEX "TrailVersion_communities_idx" ON "TrailVersion"("communities");

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_communities_fkey" FOREIGN KEY ("communities") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_communities_fkey" FOREIGN KEY ("communities") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_communities_fkey" FOREIGN KEY ("communities") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_communities_fkey" FOREIGN KEY ("communities") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_communities_fkey" FOREIGN KEY ("communities") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_communities_fkey" FOREIGN KEY ("communities") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_publicNotices" ADD CONSTRAINT "_AssemblyDistrict_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_publicNotices" ADD CONSTRAINT "_AssemblyDistrict_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_publicNotices" ADD CONSTRAINT "_AssemblyDistrictVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_publicNotices" ADD CONSTRAINT "_AssemblyDistrictVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_publicNotices" ADD CONSTRAINT "_AssemblyDistrictDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_publicNotices" ADD CONSTRAINT "_AssemblyDistrictDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_publicNotices" ADD CONSTRAINT "_Board_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_publicNotices" ADD CONSTRAINT "_Board_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_publicNotices" ADD CONSTRAINT "_BoardVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_publicNotices" ADD CONSTRAINT "_BoardVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_publicNotices" ADD CONSTRAINT "_BoardDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_publicNotices" ADD CONSTRAINT "_BoardDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_publicNotices" ADD CONSTRAINT "_Community_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_publicNotices" ADD CONSTRAINT "_Community_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_parks" ADD CONSTRAINT "_Community_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_parks" ADD CONSTRAINT "_Community_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_communities" ADD CONSTRAINT "_ParkVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_communities" ADD CONSTRAINT "_ParkVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_communities" ADD CONSTRAINT "_ParkDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_communities" ADD CONSTRAINT "_ParkDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_publicNotices" ADD CONSTRAINT "_CommunityVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_publicNotices" ADD CONSTRAINT "_CommunityVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_facilities" ADD CONSTRAINT "_CommunityVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_facilities" ADD CONSTRAINT "_CommunityVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_parks" ADD CONSTRAINT "_CommunityVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_parks" ADD CONSTRAINT "_CommunityVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_trails" ADD CONSTRAINT "_CommunityVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_trails" ADD CONSTRAINT "_CommunityVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_publicNotices" ADD CONSTRAINT "_CommunityDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_publicNotices" ADD CONSTRAINT "_CommunityDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_facilities" ADD CONSTRAINT "_CommunityDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_facilities" ADD CONSTRAINT "_CommunityDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_parks" ADD CONSTRAINT "_CommunityDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_parks" ADD CONSTRAINT "_CommunityDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_trails" ADD CONSTRAINT "_CommunityDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_trails" ADD CONSTRAINT "_CommunityDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_publicNotices" ADD CONSTRAINT "_Facility_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_publicNotices" ADD CONSTRAINT "_Facility_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_publicNotices" ADD CONSTRAINT "_FacilityVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_publicNotices" ADD CONSTRAINT "_FacilityVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_publicNotices" ADD CONSTRAINT "_FacilityDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_publicNotices" ADD CONSTRAINT "_FacilityDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_publicNotices" ADD CONSTRAINT "_OrgUnit_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_publicNotices" ADD CONSTRAINT "_OrgUnit_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_publicNotices" ADD CONSTRAINT "_OrgUnitVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_publicNotices" ADD CONSTRAINT "_OrgUnitVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_publicNotices" ADD CONSTRAINT "_OrgUnitDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_publicNotices" ADD CONSTRAINT "_OrgUnitDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_publicNotices" ADD CONSTRAINT "_Park_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_publicNotices" ADD CONSTRAINT "_Park_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_publicNotices" ADD CONSTRAINT "_ParkVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_publicNotices" ADD CONSTRAINT "_ParkVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_publicNotices" ADD CONSTRAINT "_ParkDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_publicNotices" ADD CONSTRAINT "_ParkDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_publicNotices" ADD CONSTRAINT "_PublicNotice_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_publicNotices" ADD CONSTRAINT "_PublicNotice_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_publicNotices" ADD CONSTRAINT "_PublicNoticeVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_publicNotices" ADD CONSTRAINT "_PublicNoticeVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_publicNotices" ADD CONSTRAINT "_PublicNoticeDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_publicNotices" ADD CONSTRAINT "_PublicNoticeDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_publicNotices" ADD CONSTRAINT "_ServiceVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_publicNotices" ADD CONSTRAINT "_ServiceVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_publicNotices" ADD CONSTRAINT "_ServiceDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_publicNotices" ADD CONSTRAINT "_ServiceDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_publicNotices" ADD CONSTRAINT "_TrailVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_publicNotices" ADD CONSTRAINT "_TrailVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_publicNotices" ADD CONSTRAINT "_TrailDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_publicNotices" ADD CONSTRAINT "_TrailDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_publicNotices" ADD CONSTRAINT "_Plan_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_publicNotices" ADD CONSTRAINT "_Plan_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_plans" ADD CONSTRAINT "_PublicNoticeVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_plans" ADD CONSTRAINT "_PublicNoticeVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_plans" ADD CONSTRAINT "_PublicNoticeDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_plans" ADD CONSTRAINT "_PublicNoticeDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_publicNotices" ADD CONSTRAINT "_PlanVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_publicNotices" ADD CONSTRAINT "_PlanVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_publicNotices" ADD CONSTRAINT "_PlanDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_publicNotices" ADD CONSTRAINT "_PlanDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
