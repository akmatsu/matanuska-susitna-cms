/*
  Warnings:

  - You are about to drop the column `actions` on the `AssemblyDistrict` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `AssemblyDistrictDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `AssemblyDistrictVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `BoardDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `BoardVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `CommunityDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `CommunityVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `FacilityDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `FacilityVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `OrgUnit` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `OrgUnitDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `OrgUnitVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `Park` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `ParkDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `ParkVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `PublicNotice` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `PublicNoticeDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `PublicNoticeVersion` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `Trail` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `TrailDraft` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `TrailVersion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssemblyDistrict" DROP CONSTRAINT "AssemblyDistrict_actions_fkey";

-- DropForeignKey
ALTER TABLE "AssemblyDistrictDraft" DROP CONSTRAINT "AssemblyDistrictDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "AssemblyDistrictVersion" DROP CONSTRAINT "AssemblyDistrictVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_actions_fkey";

-- DropForeignKey
ALTER TABLE "BoardDraft" DROP CONSTRAINT "BoardDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "BoardVersion" DROP CONSTRAINT "BoardVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "Community" DROP CONSTRAINT "Community_actions_fkey";

-- DropForeignKey
ALTER TABLE "CommunityDraft" DROP CONSTRAINT "CommunityDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "CommunityVersion" DROP CONSTRAINT "CommunityVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "Facility" DROP CONSTRAINT "Facility_actions_fkey";

-- DropForeignKey
ALTER TABLE "FacilityDraft" DROP CONSTRAINT "FacilityDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "FacilityVersion" DROP CONSTRAINT "FacilityVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "OrgUnit" DROP CONSTRAINT "OrgUnit_actions_fkey";

-- DropForeignKey
ALTER TABLE "OrgUnitDraft" DROP CONSTRAINT "OrgUnitDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "OrgUnitVersion" DROP CONSTRAINT "OrgUnitVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "Park" DROP CONSTRAINT "Park_actions_fkey";

-- DropForeignKey
ALTER TABLE "ParkDraft" DROP CONSTRAINT "ParkDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "ParkVersion" DROP CONSTRAINT "ParkVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "PublicNotice" DROP CONSTRAINT "PublicNotice_actions_fkey";

-- DropForeignKey
ALTER TABLE "PublicNoticeDraft" DROP CONSTRAINT "PublicNoticeDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "PublicNoticeVersion" DROP CONSTRAINT "PublicNoticeVersion_actions_fkey";

-- DropForeignKey
ALTER TABLE "Trail" DROP CONSTRAINT "Trail_actions_fkey";

-- DropForeignKey
ALTER TABLE "TrailDraft" DROP CONSTRAINT "TrailDraft_actions_fkey";

-- DropForeignKey
ALTER TABLE "TrailVersion" DROP CONSTRAINT "TrailVersion_actions_fkey";

-- DropIndex
DROP INDEX "AssemblyDistrict_actions_idx";

-- DropIndex
DROP INDEX "AssemblyDistrictDraft_actions_idx";

-- DropIndex
DROP INDEX "AssemblyDistrictVersion_actions_idx";

-- DropIndex
DROP INDEX "Board_actions_idx";

-- DropIndex
DROP INDEX "BoardDraft_actions_idx";

-- DropIndex
DROP INDEX "BoardVersion_actions_idx";

-- DropIndex
DROP INDEX "Community_actions_idx";

-- DropIndex
DROP INDEX "CommunityDraft_actions_idx";

-- DropIndex
DROP INDEX "CommunityVersion_actions_idx";

-- DropIndex
DROP INDEX "Facility_actions_idx";

-- DropIndex
DROP INDEX "FacilityDraft_actions_idx";

-- DropIndex
DROP INDEX "FacilityVersion_actions_idx";

-- DropIndex
DROP INDEX "OrgUnit_actions_idx";

-- DropIndex
DROP INDEX "OrgUnitDraft_actions_idx";

-- DropIndex
DROP INDEX "OrgUnitVersion_actions_idx";

-- DropIndex
DROP INDEX "Park_actions_idx";

-- DropIndex
DROP INDEX "ParkDraft_actions_idx";

-- DropIndex
DROP INDEX "ParkVersion_actions_idx";

-- DropIndex
DROP INDEX "PublicNotice_actions_idx";

-- DropIndex
DROP INDEX "PublicNoticeDraft_actions_idx";

-- DropIndex
DROP INDEX "PublicNoticeVersion_actions_idx";

-- DropIndex
DROP INDEX "Trail_actions_idx";

-- DropIndex
DROP INDEX "TrailDraft_actions_idx";

-- DropIndex
DROP INDEX "TrailVersion_actions_idx";

-- AlterTable
ALTER TABLE "AssemblyDistrict" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "AssemblyDistrictDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "AssemblyDistrictVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "BoardDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "BoardVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "Community" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "CommunityDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "CommunityVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "Facility" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "FacilityDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "FacilityVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "OrgUnit" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "OrgUnitDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "OrgUnitVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "Park" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "ParkDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "ParkVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "PublicNotice" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "PublicNoticeDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "PublicNoticeVersion" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "Trail" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "TrailDraft" DROP COLUMN "actions";

-- AlterTable
ALTER TABLE "TrailVersion" DROP COLUMN "actions";

-- CreateTable
CREATE TABLE "_AssemblyDistrict_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_actions_AB_unique" ON "_AssemblyDistrict_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_actions_B_index" ON "_AssemblyDistrict_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_actions_AB_unique" ON "_AssemblyDistrictDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_actions_B_index" ON "_AssemblyDistrictDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_actions_AB_unique" ON "_AssemblyDistrictVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_actions_B_index" ON "_AssemblyDistrictVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_actions_AB_unique" ON "_Board_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_actions_B_index" ON "_Board_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_actions_AB_unique" ON "_BoardDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_actions_B_index" ON "_BoardDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_actions_AB_unique" ON "_BoardVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_actions_B_index" ON "_BoardVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_actions_AB_unique" ON "_Community_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_actions_B_index" ON "_Community_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_actions_AB_unique" ON "_CommunityDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_actions_B_index" ON "_CommunityDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_actions_AB_unique" ON "_CommunityVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_actions_B_index" ON "_CommunityVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_actions_AB_unique" ON "_Facility_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_actions_B_index" ON "_Facility_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_actions_AB_unique" ON "_FacilityDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_actions_B_index" ON "_FacilityDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_actions_AB_unique" ON "_FacilityVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_actions_B_index" ON "_FacilityVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_actions_AB_unique" ON "_OrgUnit_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_actions_B_index" ON "_OrgUnit_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_actions_AB_unique" ON "_OrgUnitDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_actions_B_index" ON "_OrgUnitDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_actions_AB_unique" ON "_OrgUnitVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_actions_B_index" ON "_OrgUnitVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_actions_AB_unique" ON "_Park_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_actions_B_index" ON "_Park_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_actions_AB_unique" ON "_ParkDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_actions_B_index" ON "_ParkDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_actions_AB_unique" ON "_ParkVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_actions_B_index" ON "_ParkVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_actions_AB_unique" ON "_PublicNotice_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_actions_B_index" ON "_PublicNotice_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_actions_AB_unique" ON "_PublicNoticeDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_actions_B_index" ON "_PublicNoticeDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_actions_AB_unique" ON "_PublicNoticeVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_actions_B_index" ON "_PublicNoticeVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_actions_AB_unique" ON "_Trail_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_actions_B_index" ON "_Trail_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_actions_AB_unique" ON "_TrailDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_actions_B_index" ON "_TrailDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_actions_AB_unique" ON "_TrailVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_actions_B_index" ON "_TrailVersion_actions"("B");

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_actions" ADD CONSTRAINT "_AssemblyDistrict_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_actions" ADD CONSTRAINT "_AssemblyDistrict_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_actions" ADD CONSTRAINT "_AssemblyDistrictDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_actions" ADD CONSTRAINT "_AssemblyDistrictDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_actions" ADD CONSTRAINT "_AssemblyDistrictVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_actions" ADD CONSTRAINT "_AssemblyDistrictVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_actions" ADD CONSTRAINT "_Board_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_actions" ADD CONSTRAINT "_Board_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_actions" ADD CONSTRAINT "_BoardDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_actions" ADD CONSTRAINT "_BoardDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_actions" ADD CONSTRAINT "_BoardVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_actions" ADD CONSTRAINT "_BoardVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_actions" ADD CONSTRAINT "_Community_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_actions" ADD CONSTRAINT "_Community_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_actions" ADD CONSTRAINT "_CommunityDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_actions" ADD CONSTRAINT "_CommunityDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_actions" ADD CONSTRAINT "_CommunityVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_actions" ADD CONSTRAINT "_CommunityVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_actions" ADD CONSTRAINT "_Facility_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_actions" ADD CONSTRAINT "_Facility_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_actions" ADD CONSTRAINT "_FacilityDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_actions" ADD CONSTRAINT "_FacilityDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_actions" ADD CONSTRAINT "_FacilityVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_actions" ADD CONSTRAINT "_FacilityVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_actions" ADD CONSTRAINT "_OrgUnit_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_actions" ADD CONSTRAINT "_OrgUnit_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_actions" ADD CONSTRAINT "_OrgUnitDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_actions" ADD CONSTRAINT "_OrgUnitDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_actions" ADD CONSTRAINT "_OrgUnitVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_actions" ADD CONSTRAINT "_OrgUnitVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_actions" ADD CONSTRAINT "_Park_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_actions" ADD CONSTRAINT "_Park_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_actions" ADD CONSTRAINT "_ParkDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_actions" ADD CONSTRAINT "_ParkDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_actions" ADD CONSTRAINT "_ParkVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_actions" ADD CONSTRAINT "_ParkVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_actions" ADD CONSTRAINT "_PublicNotice_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_actions" ADD CONSTRAINT "_PublicNotice_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_actions" ADD CONSTRAINT "_PublicNoticeDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_actions" ADD CONSTRAINT "_PublicNoticeDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_actions" ADD CONSTRAINT "_PublicNoticeVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_actions" ADD CONSTRAINT "_PublicNoticeVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_actions" ADD CONSTRAINT "_Trail_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_actions" ADD CONSTRAINT "_Trail_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_actions" ADD CONSTRAINT "_TrailDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_actions" ADD CONSTRAINT "_TrailDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_actions" ADD CONSTRAINT "_TrailVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_actions" ADD CONSTRAINT "_TrailVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
