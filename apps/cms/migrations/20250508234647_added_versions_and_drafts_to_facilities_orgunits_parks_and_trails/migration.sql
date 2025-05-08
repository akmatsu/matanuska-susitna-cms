/*
  Warnings:

  - You are about to drop the `_Service_orgUnits` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[currentVersion]` on the table `Facility` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `OrgUnit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Park` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Trail` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_Service_orgUnits" DROP CONSTRAINT "_Service_orgUnits_A_fkey";

-- DropForeignKey
ALTER TABLE "_Service_orgUnits" DROP CONSTRAINT "_Service_orgUnits_B_fkey";

-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "services" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- DropTable
DROP TABLE "_Service_orgUnits";

-- CreateTable
CREATE TABLE "FacilityDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "park" TEXT,
    "publish" TEXT,

    CONSTRAINT "FacilityDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilityVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "park" TEXT,
    "republish" TEXT,

    CONSTRAINT "FacilityVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgUnitDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "showPage" BOOLEAN NOT NULL DEFAULT true,
    "services" TEXT,
    "parent" TEXT,
    "publish" TEXT,

    CONSTRAINT "OrgUnitDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgUnitVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "showPage" BOOLEAN NOT NULL DEFAULT true,
    "services" TEXT,
    "parent" TEXT,
    "republish" TEXT,

    CONSTRAINT "OrgUnitVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publish" TEXT,

    CONSTRAINT "ParkDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "republish" TEXT,

    CONSTRAINT "ParkVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "open" BOOLEAN NOT NULL DEFAULT false,
    "summer" BOOLEAN NOT NULL DEFAULT false,
    "fall" BOOLEAN NOT NULL DEFAULT false,
    "winter" BOOLEAN NOT NULL DEFAULT false,
    "spring" BOOLEAN NOT NULL DEFAULT false,
    "hiking" BOOLEAN NOT NULL DEFAULT false,
    "biking" BOOLEAN NOT NULL DEFAULT false,
    "horsebackRiding" BOOLEAN NOT NULL DEFAULT false,
    "crossCountrySkiing" BOOLEAN NOT NULL DEFAULT false,
    "snowshoeing" BOOLEAN NOT NULL DEFAULT false,
    "frisbeeGolf" BOOLEAN NOT NULL DEFAULT false,
    "dogWalking" BOOLEAN NOT NULL DEFAULT false,
    "running" BOOLEAN NOT NULL DEFAULT false,
    "snowMachining" BOOLEAN NOT NULL DEFAULT false,
    "atv" BOOLEAN NOT NULL DEFAULT false,
    "dirtBiking" BOOLEAN NOT NULL DEFAULT false,
    "mushing" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" TEXT,
    "length" TEXT NOT NULL DEFAULT '',
    "elevationChange" TEXT NOT NULL DEFAULT '',
    "park" TEXT,
    "publish" TEXT,

    CONSTRAINT "TrailDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "open" BOOLEAN NOT NULL DEFAULT false,
    "summer" BOOLEAN NOT NULL DEFAULT false,
    "fall" BOOLEAN NOT NULL DEFAULT false,
    "winter" BOOLEAN NOT NULL DEFAULT false,
    "spring" BOOLEAN NOT NULL DEFAULT false,
    "hiking" BOOLEAN NOT NULL DEFAULT false,
    "biking" BOOLEAN NOT NULL DEFAULT false,
    "horsebackRiding" BOOLEAN NOT NULL DEFAULT false,
    "crossCountrySkiing" BOOLEAN NOT NULL DEFAULT false,
    "snowshoeing" BOOLEAN NOT NULL DEFAULT false,
    "frisbeeGolf" BOOLEAN NOT NULL DEFAULT false,
    "dogWalking" BOOLEAN NOT NULL DEFAULT false,
    "running" BOOLEAN NOT NULL DEFAULT false,
    "snowMachining" BOOLEAN NOT NULL DEFAULT false,
    "atv" BOOLEAN NOT NULL DEFAULT false,
    "dirtBiking" BOOLEAN NOT NULL DEFAULT false,
    "mushing" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" TEXT,
    "length" TEXT NOT NULL DEFAULT '',
    "elevationChange" TEXT NOT NULL DEFAULT '',
    "park" TEXT,
    "republish" TEXT,

    CONSTRAINT "TrailVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FacilityDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_children" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_children" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "FacilityDraft_original_idx" ON "FacilityDraft"("original");

-- CreateIndex
CREATE INDEX "FacilityDraft_owner_idx" ON "FacilityDraft"("owner");

-- CreateIndex
CREATE INDEX "FacilityDraft_address_idx" ON "FacilityDraft"("address");

-- CreateIndex
CREATE INDEX "FacilityDraft_park_idx" ON "FacilityDraft"("park");

-- CreateIndex
CREATE INDEX "FacilityVersion_original_idx" ON "FacilityVersion"("original");

-- CreateIndex
CREATE INDEX "FacilityVersion_owner_idx" ON "FacilityVersion"("owner");

-- CreateIndex
CREATE INDEX "FacilityVersion_address_idx" ON "FacilityVersion"("address");

-- CreateIndex
CREATE INDEX "FacilityVersion_park_idx" ON "FacilityVersion"("park");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_original_idx" ON "OrgUnitDraft"("original");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_owner_idx" ON "OrgUnitDraft"("owner");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_services_idx" ON "OrgUnitDraft"("services");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_parent_idx" ON "OrgUnitDraft"("parent");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_original_idx" ON "OrgUnitVersion"("original");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_owner_idx" ON "OrgUnitVersion"("owner");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_services_idx" ON "OrgUnitVersion"("services");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_parent_idx" ON "OrgUnitVersion"("parent");

-- CreateIndex
CREATE INDEX "ParkDraft_original_idx" ON "ParkDraft"("original");

-- CreateIndex
CREATE INDEX "ParkDraft_owner_idx" ON "ParkDraft"("owner");

-- CreateIndex
CREATE INDEX "ParkDraft_address_idx" ON "ParkDraft"("address");

-- CreateIndex
CREATE INDEX "ParkVersion_original_idx" ON "ParkVersion"("original");

-- CreateIndex
CREATE INDEX "ParkVersion_owner_idx" ON "ParkVersion"("owner");

-- CreateIndex
CREATE INDEX "ParkVersion_address_idx" ON "ParkVersion"("address");

-- CreateIndex
CREATE INDEX "TrailDraft_original_idx" ON "TrailDraft"("original");

-- CreateIndex
CREATE INDEX "TrailDraft_owner_idx" ON "TrailDraft"("owner");

-- CreateIndex
CREATE INDEX "TrailDraft_address_idx" ON "TrailDraft"("address");

-- CreateIndex
CREATE INDEX "TrailDraft_park_idx" ON "TrailDraft"("park");

-- CreateIndex
CREATE INDEX "TrailVersion_original_idx" ON "TrailVersion"("original");

-- CreateIndex
CREATE INDEX "TrailVersion_owner_idx" ON "TrailVersion"("owner");

-- CreateIndex
CREATE INDEX "TrailVersion_address_idx" ON "TrailVersion"("address");

-- CreateIndex
CREATE INDEX "TrailVersion_park_idx" ON "TrailVersion"("park");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_contacts_AB_unique" ON "_FacilityDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_contacts_B_index" ON "_FacilityDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_contacts_AB_unique" ON "_FacilityVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_contacts_B_index" ON "_FacilityVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_contacts_AB_unique" ON "_OrgUnitDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_contacts_B_index" ON "_OrgUnitDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_contacts_AB_unique" ON "_OrgUnitVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_contacts_B_index" ON "_OrgUnitVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_contacts_AB_unique" ON "_ParkDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_contacts_B_index" ON "_ParkDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_contacts_AB_unique" ON "_ParkVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_contacts_B_index" ON "_ParkVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_contacts_AB_unique" ON "_TrailDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_contacts_B_index" ON "_TrailDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_contacts_AB_unique" ON "_TrailVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_contacts_B_index" ON "_TrailVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_facilities_AB_unique" ON "_ParkDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_facilities_B_index" ON "_ParkDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_facilities_AB_unique" ON "_ParkVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_facilities_B_index" ON "_ParkVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_tags_AB_unique" ON "_FacilityDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_tags_B_index" ON "_FacilityDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_userGroups_AB_unique" ON "_FacilityDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_userGroups_B_index" ON "_FacilityDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_hours_AB_unique" ON "_FacilityDraft_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_hours_B_index" ON "_FacilityDraft_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_services_AB_unique" ON "_FacilityDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_services_B_index" ON "_FacilityDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_tags_AB_unique" ON "_FacilityVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_tags_B_index" ON "_FacilityVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_userGroups_AB_unique" ON "_FacilityVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_userGroups_B_index" ON "_FacilityVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_hours_AB_unique" ON "_FacilityVersion_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_hours_B_index" ON "_FacilityVersion_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_services_AB_unique" ON "_FacilityVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_services_B_index" ON "_FacilityVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_children_AB_unique" ON "_OrgUnitDraft_children"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_children_B_index" ON "_OrgUnitDraft_children"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_children_AB_unique" ON "_OrgUnitVersion_children"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_children_B_index" ON "_OrgUnitVersion_children"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_tags_AB_unique" ON "_OrgUnitDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_tags_B_index" ON "_OrgUnitDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_userGroups_AB_unique" ON "_OrgUnitDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_userGroups_B_index" ON "_OrgUnitDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_tags_AB_unique" ON "_OrgUnitVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_tags_B_index" ON "_OrgUnitVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_userGroups_AB_unique" ON "_OrgUnitVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_userGroups_B_index" ON "_OrgUnitVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_hours_AB_unique" ON "_ParkDraft_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_hours_B_index" ON "_ParkDraft_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_hours_AB_unique" ON "_ParkVersion_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_hours_B_index" ON "_ParkVersion_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_tags_AB_unique" ON "_ParkDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_tags_B_index" ON "_ParkDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_userGroups_AB_unique" ON "_ParkDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_userGroups_B_index" ON "_ParkDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_services_AB_unique" ON "_ParkDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_services_B_index" ON "_ParkDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_trails_AB_unique" ON "_ParkDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_trails_B_index" ON "_ParkDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_tags_AB_unique" ON "_ParkVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_tags_B_index" ON "_ParkVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_userGroups_AB_unique" ON "_ParkVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_userGroups_B_index" ON "_ParkVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_services_AB_unique" ON "_ParkVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_services_B_index" ON "_ParkVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_trails_AB_unique" ON "_ParkVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_trails_B_index" ON "_ParkVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_services_AB_unique" ON "_TrailDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_services_B_index" ON "_TrailDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_services_AB_unique" ON "_TrailVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_services_B_index" ON "_TrailVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_tags_AB_unique" ON "_TrailDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_tags_B_index" ON "_TrailDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_tags_AB_unique" ON "_TrailVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_tags_B_index" ON "_TrailVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_userGroups_AB_unique" ON "_TrailDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_userGroups_B_index" ON "_TrailDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_userGroups_AB_unique" ON "_TrailVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_userGroups_B_index" ON "_TrailVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Facility_currentVersion_key" ON "Facility"("currentVersion");

-- CreateIndex
CREATE UNIQUE INDEX "OrgUnit_currentVersion_key" ON "OrgUnit"("currentVersion");

-- CreateIndex
CREATE INDEX "OrgUnit_services_idx" ON "OrgUnit"("services");

-- CreateIndex
CREATE UNIQUE INDEX "Park_currentVersion_key" ON "Park"("currentVersion");

-- CreateIndex
CREATE UNIQUE INDEX "Trail_currentVersion_key" ON "Trail"("currentVersion");

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "FacilityVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_services_fkey" FOREIGN KEY ("services") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "OrgUnitVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_services_fkey" FOREIGN KEY ("services") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_parent_fkey" FOREIGN KEY ("parent") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_services_fkey" FOREIGN KEY ("services") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_parent_fkey" FOREIGN KEY ("parent") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "ParkVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "TrailVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Trail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Trail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_contacts" ADD CONSTRAINT "_FacilityDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_contacts" ADD CONSTRAINT "_FacilityDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_contacts" ADD CONSTRAINT "_FacilityVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_contacts" ADD CONSTRAINT "_FacilityVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_contacts" ADD CONSTRAINT "_OrgUnitDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_contacts" ADD CONSTRAINT "_OrgUnitDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_contacts" ADD CONSTRAINT "_OrgUnitVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_contacts" ADD CONSTRAINT "_OrgUnitVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_contacts" ADD CONSTRAINT "_ParkDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_contacts" ADD CONSTRAINT "_ParkDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_contacts" ADD CONSTRAINT "_ParkVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_contacts" ADD CONSTRAINT "_ParkVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_contacts" ADD CONSTRAINT "_TrailDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_contacts" ADD CONSTRAINT "_TrailDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_contacts" ADD CONSTRAINT "_TrailVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_contacts" ADD CONSTRAINT "_TrailVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_facilities" ADD CONSTRAINT "_ParkDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_facilities" ADD CONSTRAINT "_ParkDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_facilities" ADD CONSTRAINT "_ParkVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_facilities" ADD CONSTRAINT "_ParkVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_tags" ADD CONSTRAINT "_FacilityDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_tags" ADD CONSTRAINT "_FacilityDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_userGroups" ADD CONSTRAINT "_FacilityDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_userGroups" ADD CONSTRAINT "_FacilityDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_hours" ADD CONSTRAINT "_FacilityDraft_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_hours" ADD CONSTRAINT "_FacilityDraft_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_services" ADD CONSTRAINT "_FacilityDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_services" ADD CONSTRAINT "_FacilityDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_tags" ADD CONSTRAINT "_FacilityVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_tags" ADD CONSTRAINT "_FacilityVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_userGroups" ADD CONSTRAINT "_FacilityVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_userGroups" ADD CONSTRAINT "_FacilityVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_hours" ADD CONSTRAINT "_FacilityVersion_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_hours" ADD CONSTRAINT "_FacilityVersion_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_services" ADD CONSTRAINT "_FacilityVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_services" ADD CONSTRAINT "_FacilityVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_children" ADD CONSTRAINT "_OrgUnitDraft_children_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_children" ADD CONSTRAINT "_OrgUnitDraft_children_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_children" ADD CONSTRAINT "_OrgUnitVersion_children_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_children" ADD CONSTRAINT "_OrgUnitVersion_children_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_tags" ADD CONSTRAINT "_OrgUnitDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_tags" ADD CONSTRAINT "_OrgUnitDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_userGroups" ADD CONSTRAINT "_OrgUnitDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_userGroups" ADD CONSTRAINT "_OrgUnitDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_tags" ADD CONSTRAINT "_OrgUnitVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_tags" ADD CONSTRAINT "_OrgUnitVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_userGroups" ADD CONSTRAINT "_OrgUnitVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_userGroups" ADD CONSTRAINT "_OrgUnitVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_hours" ADD CONSTRAINT "_ParkDraft_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_hours" ADD CONSTRAINT "_ParkDraft_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_hours" ADD CONSTRAINT "_ParkVersion_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_hours" ADD CONSTRAINT "_ParkVersion_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_tags" ADD CONSTRAINT "_ParkDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_tags" ADD CONSTRAINT "_ParkDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_userGroups" ADD CONSTRAINT "_ParkDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_userGroups" ADD CONSTRAINT "_ParkDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_services" ADD CONSTRAINT "_ParkDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_services" ADD CONSTRAINT "_ParkDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_trails" ADD CONSTRAINT "_ParkDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_trails" ADD CONSTRAINT "_ParkDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_tags" ADD CONSTRAINT "_ParkVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_tags" ADD CONSTRAINT "_ParkVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_userGroups" ADD CONSTRAINT "_ParkVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_userGroups" ADD CONSTRAINT "_ParkVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_services" ADD CONSTRAINT "_ParkVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_services" ADD CONSTRAINT "_ParkVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_trails" ADD CONSTRAINT "_ParkVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_trails" ADD CONSTRAINT "_ParkVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_services" ADD CONSTRAINT "_TrailDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_services" ADD CONSTRAINT "_TrailDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_services" ADD CONSTRAINT "_TrailVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_services" ADD CONSTRAINT "_TrailVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_tags" ADD CONSTRAINT "_TrailDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_tags" ADD CONSTRAINT "_TrailDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_tags" ADD CONSTRAINT "_TrailVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_tags" ADD CONSTRAINT "_TrailVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_userGroups" ADD CONSTRAINT "_TrailDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_userGroups" ADD CONSTRAINT "_TrailDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_userGroups" ADD CONSTRAINT "_TrailVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_userGroups" ADD CONSTRAINT "_TrailVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
