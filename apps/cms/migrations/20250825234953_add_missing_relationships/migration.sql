/*
  Warnings:

  - You are about to drop the column `communities` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `communities` on the `FacilityDraft` table. All the data in the column will be lost.
  - You are about to drop the column `communities` on the `FacilityVersion` table. All the data in the column will be lost.
  - You are about to drop the column `communities` on the `Trail` table. All the data in the column will be lost.
  - You are about to drop the column `communities` on the `TrailDraft` table. All the data in the column will be lost.
  - You are about to drop the column `communities` on the `TrailVersion` table. All the data in the column will be lost.
  - You are about to drop the `_BoardDraft_districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BoardVersion_districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommunityDraft_districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommunityVersion_districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Community_districts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Facility" DROP CONSTRAINT "Facility_communities_fkey";

-- DropForeignKey
ALTER TABLE "FacilityDraft" DROP CONSTRAINT "FacilityDraft_communities_fkey";

-- DropForeignKey
ALTER TABLE "FacilityVersion" DROP CONSTRAINT "FacilityVersion_communities_fkey";

-- DropForeignKey
ALTER TABLE "Trail" DROP CONSTRAINT "Trail_communities_fkey";

-- DropForeignKey
ALTER TABLE "TrailDraft" DROP CONSTRAINT "TrailDraft_communities_fkey";

-- DropForeignKey
ALTER TABLE "TrailVersion" DROP CONSTRAINT "TrailVersion_communities_fkey";

-- DropForeignKey
ALTER TABLE "_BoardDraft_districts" DROP CONSTRAINT "_BoardDraft_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_BoardDraft_districts" DROP CONSTRAINT "_BoardDraft_districts_B_fkey";

-- DropForeignKey
ALTER TABLE "_BoardVersion_districts" DROP CONSTRAINT "_BoardVersion_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_BoardVersion_districts" DROP CONSTRAINT "_BoardVersion_districts_B_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityDraft_districts" DROP CONSTRAINT "_CommunityDraft_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityDraft_districts" DROP CONSTRAINT "_CommunityDraft_districts_B_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityVersion_districts" DROP CONSTRAINT "_CommunityVersion_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityVersion_districts" DROP CONSTRAINT "_CommunityVersion_districts_B_fkey";

-- DropForeignKey
ALTER TABLE "_Community_districts" DROP CONSTRAINT "_Community_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_Community_districts" DROP CONSTRAINT "_Community_districts_B_fkey";

-- DropIndex
DROP INDEX "Facility_communities_idx";

-- DropIndex
DROP INDEX "FacilityDraft_communities_idx";

-- DropIndex
DROP INDEX "FacilityVersion_communities_idx";

-- DropIndex
DROP INDEX "Trail_communities_idx";

-- DropIndex
DROP INDEX "TrailDraft_communities_idx";

-- DropIndex
DROP INDEX "TrailVersion_communities_idx";

-- AlterTable
ALTER TABLE "Facility" DROP COLUMN "communities";

-- AlterTable
ALTER TABLE "FacilityDraft" DROP COLUMN "communities";

-- AlterTable
ALTER TABLE "FacilityVersion" DROP COLUMN "communities";

-- AlterTable
ALTER TABLE "Trail" DROP COLUMN "communities";

-- AlterTable
ALTER TABLE "TrailDraft" DROP COLUMN "communities";

-- AlterTable
ALTER TABLE "TrailVersion" DROP COLUMN "communities";

-- DropTable
DROP TABLE "_BoardDraft_districts";

-- DropTable
DROP TABLE "_BoardVersion_districts";

-- DropTable
DROP TABLE "_CommunityDraft_districts";

-- DropTable
DROP TABLE "_CommunityVersion_districts";

-- DropTable
DROP TABLE "_Community_districts";

-- CreateTable
CREATE TABLE "_AssemblyDistrict_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_communities_AB_unique" ON "_AssemblyDistrict_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_communities_B_index" ON "_AssemblyDistrict_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_orgUnits_AB_unique" ON "_AssemblyDistrict_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_orgUnits_B_index" ON "_AssemblyDistrict_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_assemblyDistricts_AB_unique" ON "_AssemblyDistrict_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_assemblyDistricts_B_index" ON "_AssemblyDistrict_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_facilities_AB_unique" ON "_AssemblyDistrict_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_facilities_B_index" ON "_AssemblyDistrict_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_parks_AB_unique" ON "_AssemblyDistrict_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_parks_B_index" ON "_AssemblyDistrict_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_services_AB_unique" ON "_AssemblyDistrict_services"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_services_B_index" ON "_AssemblyDistrict_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_trails_AB_unique" ON "_AssemblyDistrict_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_trails_B_index" ON "_AssemblyDistrict_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_plans_AB_unique" ON "_AssemblyDistrict_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_plans_B_index" ON "_AssemblyDistrict_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_assemblyDistricts_AB_unique" ON "_AssemblyDistrictVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_assemblyDistricts_B_index" ON "_AssemblyDistrictVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_assemblyDistricts_AB_unique" ON "_AssemblyDistrictDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_assemblyDistricts_B_index" ON "_AssemblyDistrictDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_assemblyDistricts_AB_unique" ON "_BoardVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_assemblyDistricts_B_index" ON "_BoardVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_assemblyDistricts_AB_unique" ON "_BoardDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_assemblyDistricts_B_index" ON "_BoardDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_assemblyDistricts_AB_unique" ON "_CommunityVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_assemblyDistricts_B_index" ON "_CommunityVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_assemblyDistricts_AB_unique" ON "_CommunityDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_assemblyDistricts_B_index" ON "_CommunityDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_assemblyDistricts_AB_unique" ON "_FacilityVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_assemblyDistricts_B_index" ON "_FacilityVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_assemblyDistricts_AB_unique" ON "_FacilityDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_assemblyDistricts_B_index" ON "_FacilityDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_assemblyDistricts_AB_unique" ON "_OrgUnitVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_assemblyDistricts_B_index" ON "_OrgUnitVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_assemblyDistricts_AB_unique" ON "_OrgUnitDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_assemblyDistricts_B_index" ON "_OrgUnitDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_assemblyDistricts_AB_unique" ON "_ParkVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_assemblyDistricts_B_index" ON "_ParkVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_assemblyDistricts_AB_unique" ON "_ParkDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_assemblyDistricts_B_index" ON "_ParkDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_assemblyDistricts_AB_unique" ON "_ServiceVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_assemblyDistricts_B_index" ON "_ServiceVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_assemblyDistricts_AB_unique" ON "_ServiceDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_assemblyDistricts_B_index" ON "_ServiceDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_assemblyDistricts_AB_unique" ON "_TrailVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_assemblyDistricts_B_index" ON "_TrailVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_assemblyDistricts_AB_unique" ON "_TrailDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_assemblyDistricts_B_index" ON "_TrailDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_assemblyDistricts_AB_unique" ON "_PlanVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_assemblyDistricts_B_index" ON "_PlanVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_assemblyDistricts_AB_unique" ON "_PlanDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_assemblyDistricts_B_index" ON "_PlanDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_communities_AB_unique" ON "_AssemblyDistrictVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_communities_B_index" ON "_AssemblyDistrictVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_orgUnits_AB_unique" ON "_AssemblyDistrictVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_orgUnits_B_index" ON "_AssemblyDistrictVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_facilities_AB_unique" ON "_AssemblyDistrictVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_facilities_B_index" ON "_AssemblyDistrictVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_parks_AB_unique" ON "_AssemblyDistrictVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_parks_B_index" ON "_AssemblyDistrictVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_services_AB_unique" ON "_AssemblyDistrictVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_services_B_index" ON "_AssemblyDistrictVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_trails_AB_unique" ON "_AssemblyDistrictVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_trails_B_index" ON "_AssemblyDistrictVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_plans_AB_unique" ON "_AssemblyDistrictVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_plans_B_index" ON "_AssemblyDistrictVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_communities_AB_unique" ON "_AssemblyDistrictDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_communities_B_index" ON "_AssemblyDistrictDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_orgUnits_AB_unique" ON "_AssemblyDistrictDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_orgUnits_B_index" ON "_AssemblyDistrictDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_facilities_AB_unique" ON "_AssemblyDistrictDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_facilities_B_index" ON "_AssemblyDistrictDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_parks_AB_unique" ON "_AssemblyDistrictDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_parks_B_index" ON "_AssemblyDistrictDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_services_AB_unique" ON "_AssemblyDistrictDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_services_B_index" ON "_AssemblyDistrictDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_trails_AB_unique" ON "_AssemblyDistrictDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_trails_B_index" ON "_AssemblyDistrictDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_plans_AB_unique" ON "_AssemblyDistrictDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_plans_B_index" ON "_AssemblyDistrictDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_orgUnits_AB_unique" ON "_Board_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_orgUnits_B_index" ON "_Board_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_boards_AB_unique" ON "_OrgUnitVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_boards_B_index" ON "_OrgUnitVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_boards_AB_unique" ON "_OrgUnitDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_boards_B_index" ON "_OrgUnitDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_orgUnits_AB_unique" ON "_BoardVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_orgUnits_B_index" ON "_BoardVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_orgUnits_AB_unique" ON "_BoardDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_orgUnits_B_index" ON "_BoardDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_communities_AB_unique" ON "_Community_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_communities_B_index" ON "_Community_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_orgUnits_AB_unique" ON "_Community_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_orgUnits_B_index" ON "_Community_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_facilities_AB_unique" ON "_Community_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_facilities_B_index" ON "_Community_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_trails_AB_unique" ON "_Community_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_trails_B_index" ON "_Community_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_plans_AB_unique" ON "_Community_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_plans_B_index" ON "_Community_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_communities_AB_unique" ON "_CommunityVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_communities_B_index" ON "_CommunityVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_communities_AB_unique" ON "_CommunityDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_communities_B_index" ON "_CommunityDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_communities_AB_unique" ON "_FacilityVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_communities_B_index" ON "_FacilityVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_communities_AB_unique" ON "_FacilityDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_communities_B_index" ON "_FacilityDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_communities_AB_unique" ON "_OrgUnitVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_communities_B_index" ON "_OrgUnitVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_communities_AB_unique" ON "_OrgUnitDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_communities_B_index" ON "_OrgUnitDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_communities_AB_unique" ON "_TrailVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_communities_B_index" ON "_TrailVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_communities_AB_unique" ON "_TrailDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_communities_B_index" ON "_TrailDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_communities_AB_unique" ON "_PlanVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_communities_B_index" ON "_PlanVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_communities_AB_unique" ON "_PlanDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_communities_B_index" ON "_PlanDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_orgUnits_AB_unique" ON "_CommunityVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_orgUnits_B_index" ON "_CommunityVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_plans_AB_unique" ON "_CommunityVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_plans_B_index" ON "_CommunityVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_orgUnits_AB_unique" ON "_CommunityDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_orgUnits_B_index" ON "_CommunityDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_plans_AB_unique" ON "_CommunityDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_plans_B_index" ON "_CommunityDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_orgUnits_AB_unique" ON "_Facility_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_orgUnits_B_index" ON "_Facility_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_facilities_AB_unique" ON "_OrgUnitVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_facilities_B_index" ON "_OrgUnitVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_facilities_AB_unique" ON "_OrgUnitDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_facilities_B_index" ON "_OrgUnitDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_orgUnits_AB_unique" ON "_FacilityVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_orgUnits_B_index" ON "_FacilityVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_orgUnits_AB_unique" ON "_FacilityDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_orgUnits_B_index" ON "_FacilityDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_parks_AB_unique" ON "_OrgUnit_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_parks_B_index" ON "_OrgUnit_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_trails_AB_unique" ON "_OrgUnit_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_trails_B_index" ON "_OrgUnit_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_plans_AB_unique" ON "_OrgUnit_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_plans_B_index" ON "_OrgUnit_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_orgUnits_AB_unique" ON "_OrgUnit_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_orgUnits_B_index" ON "_OrgUnit_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_orgUnits_AB_unique" ON "_OrgUnitVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_orgUnits_B_index" ON "_OrgUnitVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_orgUnits_AB_unique" ON "_OrgUnitDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_orgUnits_B_index" ON "_OrgUnitDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_orgUnits_AB_unique" ON "_ParkVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_orgUnits_B_index" ON "_ParkVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_orgUnits_AB_unique" ON "_ParkDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_orgUnits_B_index" ON "_ParkDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_orgUnits_AB_unique" ON "_TrailVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_orgUnits_B_index" ON "_TrailVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_orgUnits_AB_unique" ON "_TrailDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_orgUnits_B_index" ON "_TrailDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_orgUnits_AB_unique" ON "_PlanVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_orgUnits_B_index" ON "_PlanVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_orgUnits_AB_unique" ON "_PlanDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_orgUnits_B_index" ON "_PlanDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_parks_AB_unique" ON "_OrgUnitVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_parks_B_index" ON "_OrgUnitVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_trails_AB_unique" ON "_OrgUnitVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_trails_B_index" ON "_OrgUnitVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_plans_AB_unique" ON "_OrgUnitVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_plans_B_index" ON "_OrgUnitVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_parks_AB_unique" ON "_OrgUnitDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_parks_B_index" ON "_OrgUnitDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_trails_AB_unique" ON "_OrgUnitDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_trails_B_index" ON "_OrgUnitDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_plans_AB_unique" ON "_OrgUnitDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_plans_B_index" ON "_OrgUnitDraft_plans"("B");

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_communities" ADD CONSTRAINT "_AssemblyDistrict_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_communities" ADD CONSTRAINT "_AssemblyDistrict_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_orgUnits" ADD CONSTRAINT "_AssemblyDistrict_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_orgUnits" ADD CONSTRAINT "_AssemblyDistrict_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_assemblyDistricts" ADD CONSTRAINT "_AssemblyDistrict_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_assemblyDistricts" ADD CONSTRAINT "_AssemblyDistrict_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_facilities" ADD CONSTRAINT "_AssemblyDistrict_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_facilities" ADD CONSTRAINT "_AssemblyDistrict_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_parks" ADD CONSTRAINT "_AssemblyDistrict_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_parks" ADD CONSTRAINT "_AssemblyDistrict_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_services" ADD CONSTRAINT "_AssemblyDistrict_services_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_services" ADD CONSTRAINT "_AssemblyDistrict_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_trails" ADD CONSTRAINT "_AssemblyDistrict_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_trails" ADD CONSTRAINT "_AssemblyDistrict_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_plans" ADD CONSTRAINT "_AssemblyDistrict_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_plans" ADD CONSTRAINT "_AssemblyDistrict_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_assemblyDistricts" ADD CONSTRAINT "_AssemblyDistrictVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_assemblyDistricts" ADD CONSTRAINT "_AssemblyDistrictVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_assemblyDistricts" ADD CONSTRAINT "_AssemblyDistrictDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_assemblyDistricts" ADD CONSTRAINT "_AssemblyDistrictDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_assemblyDistricts" ADD CONSTRAINT "_BoardVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_assemblyDistricts" ADD CONSTRAINT "_BoardVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_assemblyDistricts" ADD CONSTRAINT "_BoardDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_assemblyDistricts" ADD CONSTRAINT "_BoardDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_assemblyDistricts" ADD CONSTRAINT "_CommunityVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_assemblyDistricts" ADD CONSTRAINT "_CommunityVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_assemblyDistricts" ADD CONSTRAINT "_CommunityDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_assemblyDistricts" ADD CONSTRAINT "_CommunityDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_assemblyDistricts" ADD CONSTRAINT "_FacilityVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_assemblyDistricts" ADD CONSTRAINT "_FacilityVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_assemblyDistricts" ADD CONSTRAINT "_FacilityDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_assemblyDistricts" ADD CONSTRAINT "_FacilityDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_assemblyDistricts" ADD CONSTRAINT "_OrgUnitVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_assemblyDistricts" ADD CONSTRAINT "_OrgUnitVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_assemblyDistricts" ADD CONSTRAINT "_OrgUnitDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_assemblyDistricts" ADD CONSTRAINT "_OrgUnitDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_assemblyDistricts" ADD CONSTRAINT "_ParkVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_assemblyDistricts" ADD CONSTRAINT "_ParkVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_assemblyDistricts" ADD CONSTRAINT "_ParkDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_assemblyDistricts" ADD CONSTRAINT "_ParkDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_assemblyDistricts" ADD CONSTRAINT "_ServiceVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_assemblyDistricts" ADD CONSTRAINT "_ServiceVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_assemblyDistricts" ADD CONSTRAINT "_ServiceDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_assemblyDistricts" ADD CONSTRAINT "_ServiceDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_assemblyDistricts" ADD CONSTRAINT "_TrailVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_assemblyDistricts" ADD CONSTRAINT "_TrailVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_assemblyDistricts" ADD CONSTRAINT "_TrailDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_assemblyDistricts" ADD CONSTRAINT "_TrailDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_assemblyDistricts" ADD CONSTRAINT "_PlanVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_assemblyDistricts" ADD CONSTRAINT "_PlanVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_assemblyDistricts" ADD CONSTRAINT "_PlanDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_assemblyDistricts" ADD CONSTRAINT "_PlanDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_communities" ADD CONSTRAINT "_AssemblyDistrictVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_communities" ADD CONSTRAINT "_AssemblyDistrictVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_orgUnits" ADD CONSTRAINT "_AssemblyDistrictVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_orgUnits" ADD CONSTRAINT "_AssemblyDistrictVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_facilities" ADD CONSTRAINT "_AssemblyDistrictVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_facilities" ADD CONSTRAINT "_AssemblyDistrictVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_parks" ADD CONSTRAINT "_AssemblyDistrictVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_parks" ADD CONSTRAINT "_AssemblyDistrictVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_services" ADD CONSTRAINT "_AssemblyDistrictVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_services" ADD CONSTRAINT "_AssemblyDistrictVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_trails" ADD CONSTRAINT "_AssemblyDistrictVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_trails" ADD CONSTRAINT "_AssemblyDistrictVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_plans" ADD CONSTRAINT "_AssemblyDistrictVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_plans" ADD CONSTRAINT "_AssemblyDistrictVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_communities" ADD CONSTRAINT "_AssemblyDistrictDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_communities" ADD CONSTRAINT "_AssemblyDistrictDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_orgUnits" ADD CONSTRAINT "_AssemblyDistrictDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_orgUnits" ADD CONSTRAINT "_AssemblyDistrictDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_facilities" ADD CONSTRAINT "_AssemblyDistrictDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_facilities" ADD CONSTRAINT "_AssemblyDistrictDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_parks" ADD CONSTRAINT "_AssemblyDistrictDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_parks" ADD CONSTRAINT "_AssemblyDistrictDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_services" ADD CONSTRAINT "_AssemblyDistrictDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_services" ADD CONSTRAINT "_AssemblyDistrictDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_trails" ADD CONSTRAINT "_AssemblyDistrictDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_trails" ADD CONSTRAINT "_AssemblyDistrictDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_plans" ADD CONSTRAINT "_AssemblyDistrictDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_plans" ADD CONSTRAINT "_AssemblyDistrictDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_orgUnits" ADD CONSTRAINT "_Board_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_orgUnits" ADD CONSTRAINT "_Board_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_boards" ADD CONSTRAINT "_OrgUnitVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_boards" ADD CONSTRAINT "_OrgUnitVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_boards" ADD CONSTRAINT "_OrgUnitDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_boards" ADD CONSTRAINT "_OrgUnitDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_orgUnits" ADD CONSTRAINT "_BoardVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_orgUnits" ADD CONSTRAINT "_BoardVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_orgUnits" ADD CONSTRAINT "_BoardDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_orgUnits" ADD CONSTRAINT "_BoardDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_communities" ADD CONSTRAINT "_Community_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_communities" ADD CONSTRAINT "_Community_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_orgUnits" ADD CONSTRAINT "_Community_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_orgUnits" ADD CONSTRAINT "_Community_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_facilities" ADD CONSTRAINT "_Community_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_facilities" ADD CONSTRAINT "_Community_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_trails" ADD CONSTRAINT "_Community_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_trails" ADD CONSTRAINT "_Community_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_plans" ADD CONSTRAINT "_Community_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_plans" ADD CONSTRAINT "_Community_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_communities" ADD CONSTRAINT "_CommunityVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_communities" ADD CONSTRAINT "_CommunityVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_communities" ADD CONSTRAINT "_CommunityDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_communities" ADD CONSTRAINT "_CommunityDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_communities" ADD CONSTRAINT "_FacilityVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_communities" ADD CONSTRAINT "_FacilityVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_communities" ADD CONSTRAINT "_FacilityDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_communities" ADD CONSTRAINT "_FacilityDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_communities" ADD CONSTRAINT "_OrgUnitVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_communities" ADD CONSTRAINT "_OrgUnitVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_communities" ADD CONSTRAINT "_OrgUnitDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_communities" ADD CONSTRAINT "_OrgUnitDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_communities" ADD CONSTRAINT "_TrailVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_communities" ADD CONSTRAINT "_TrailVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_communities" ADD CONSTRAINT "_TrailDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_communities" ADD CONSTRAINT "_TrailDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_communities" ADD CONSTRAINT "_PlanVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_communities" ADD CONSTRAINT "_PlanVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_communities" ADD CONSTRAINT "_PlanDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_communities" ADD CONSTRAINT "_PlanDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_orgUnits" ADD CONSTRAINT "_CommunityVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_orgUnits" ADD CONSTRAINT "_CommunityVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_plans" ADD CONSTRAINT "_CommunityVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_plans" ADD CONSTRAINT "_CommunityVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_orgUnits" ADD CONSTRAINT "_CommunityDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_orgUnits" ADD CONSTRAINT "_CommunityDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_plans" ADD CONSTRAINT "_CommunityDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_plans" ADD CONSTRAINT "_CommunityDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_orgUnits" ADD CONSTRAINT "_Facility_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_orgUnits" ADD CONSTRAINT "_Facility_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_facilities" ADD CONSTRAINT "_OrgUnitVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_facilities" ADD CONSTRAINT "_OrgUnitVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_facilities" ADD CONSTRAINT "_OrgUnitDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_facilities" ADD CONSTRAINT "_OrgUnitDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_orgUnits" ADD CONSTRAINT "_FacilityVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_orgUnits" ADD CONSTRAINT "_FacilityVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_orgUnits" ADD CONSTRAINT "_FacilityDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_orgUnits" ADD CONSTRAINT "_FacilityDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_parks" ADD CONSTRAINT "_OrgUnit_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_parks" ADD CONSTRAINT "_OrgUnit_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_trails" ADD CONSTRAINT "_OrgUnit_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_trails" ADD CONSTRAINT "_OrgUnit_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_plans" ADD CONSTRAINT "_OrgUnit_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_plans" ADD CONSTRAINT "_OrgUnit_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_orgUnits" ADD CONSTRAINT "_OrgUnit_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_orgUnits" ADD CONSTRAINT "_OrgUnit_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_orgUnits" ADD CONSTRAINT "_OrgUnitVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_orgUnits" ADD CONSTRAINT "_OrgUnitVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_orgUnits" ADD CONSTRAINT "_OrgUnitDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_orgUnits" ADD CONSTRAINT "_OrgUnitDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_orgUnits" ADD CONSTRAINT "_ParkVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_orgUnits" ADD CONSTRAINT "_ParkVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_orgUnits" ADD CONSTRAINT "_ParkDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_orgUnits" ADD CONSTRAINT "_ParkDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_orgUnits" ADD CONSTRAINT "_TrailVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_orgUnits" ADD CONSTRAINT "_TrailVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_orgUnits" ADD CONSTRAINT "_TrailDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_orgUnits" ADD CONSTRAINT "_TrailDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_orgUnits" ADD CONSTRAINT "_PlanVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_orgUnits" ADD CONSTRAINT "_PlanVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_orgUnits" ADD CONSTRAINT "_PlanDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_orgUnits" ADD CONSTRAINT "_PlanDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_parks" ADD CONSTRAINT "_OrgUnitVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_parks" ADD CONSTRAINT "_OrgUnitVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_trails" ADD CONSTRAINT "_OrgUnitVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_trails" ADD CONSTRAINT "_OrgUnitVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_plans" ADD CONSTRAINT "_OrgUnitVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_plans" ADD CONSTRAINT "_OrgUnitVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_parks" ADD CONSTRAINT "_OrgUnitDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_parks" ADD CONSTRAINT "_OrgUnitDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_trails" ADD CONSTRAINT "_OrgUnitDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_trails" ADD CONSTRAINT "_OrgUnitDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_plans" ADD CONSTRAINT "_OrgUnitDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_plans" ADD CONSTRAINT "_OrgUnitDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
