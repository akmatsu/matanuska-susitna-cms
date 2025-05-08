/*
  Warnings:

  - You are about to drop the column `primaryAction` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `primaryContact` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `_Service_secondaryActions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[currentVersion]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_primaryAction_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_primaryContact_fkey";

-- DropForeignKey
ALTER TABLE "_Service_secondaryActions" DROP CONSTRAINT "_Service_secondaryActions_A_fkey";

-- DropForeignKey
ALTER TABLE "_Service_secondaryActions" DROP CONSTRAINT "_Service_secondaryActions_B_fkey";

-- DropIndex
DROP INDEX "Service_primaryAction_idx";

-- DropIndex
DROP INDEX "Service_primaryContact_idx";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "primaryAction",
DROP COLUMN "primaryContact",
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- DropTable
DROP TABLE "_Service_secondaryActions";

-- CreateTable
CREATE TABLE "ServiceDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "editorNotes" TEXT NOT NULL DEFAULT '',
    "publish" TEXT,

    CONSTRAINT "ServiceDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "editorNotes" TEXT NOT NULL DEFAULT '',
    "republish" TEXT,

    CONSTRAINT "ServiceVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ServiceDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceDraft_title_key" ON "ServiceDraft"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceDraft_slug_key" ON "ServiceDraft"("slug");

-- CreateIndex
CREATE INDEX "ServiceDraft_original_idx" ON "ServiceDraft"("original");

-- CreateIndex
CREATE INDEX "ServiceDraft_owner_idx" ON "ServiceDraft"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceVersion_title_key" ON "ServiceVersion"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceVersion_slug_key" ON "ServiceVersion"("slug");

-- CreateIndex
CREATE INDEX "ServiceVersion_original_idx" ON "ServiceVersion"("original");

-- CreateIndex
CREATE INDEX "ServiceVersion_owner_idx" ON "ServiceVersion"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_communities_AB_unique" ON "_ServiceDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_communities_B_index" ON "_ServiceDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_communities_AB_unique" ON "_ServiceVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_communities_B_index" ON "_ServiceVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_contacts_AB_unique" ON "_ServiceDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_contacts_B_index" ON "_ServiceDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_contacts_AB_unique" ON "_ServiceVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_contacts_B_index" ON "_ServiceVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_facilities_AB_unique" ON "_ServiceDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_facilities_B_index" ON "_ServiceDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_facilities_AB_unique" ON "_ServiceVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_facilities_B_index" ON "_ServiceVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_orgUnits_AB_unique" ON "_ServiceDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_orgUnits_B_index" ON "_ServiceDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_orgUnits_AB_unique" ON "_ServiceVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_orgUnits_B_index" ON "_ServiceVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_parks_AB_unique" ON "_ServiceDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_parks_B_index" ON "_ServiceDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_parks_AB_unique" ON "_ServiceVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_parks_B_index" ON "_ServiceVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_tags_AB_unique" ON "_ServiceDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_tags_B_index" ON "_ServiceDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_userGroups_AB_unique" ON "_ServiceDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_userGroups_B_index" ON "_ServiceDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_trails_AB_unique" ON "_ServiceDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_trails_B_index" ON "_ServiceDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_tags_AB_unique" ON "_ServiceVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_tags_B_index" ON "_ServiceVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_userGroups_AB_unique" ON "_ServiceVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_userGroups_B_index" ON "_ServiceVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_trails_AB_unique" ON "_ServiceVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_trails_B_index" ON "_ServiceVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Service_currentVersion_key" ON "Service"("currentVersion");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "ServiceVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_communities" ADD CONSTRAINT "_ServiceDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_communities" ADD CONSTRAINT "_ServiceDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_communities" ADD CONSTRAINT "_ServiceVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_communities" ADD CONSTRAINT "_ServiceVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_contacts" ADD CONSTRAINT "_ServiceDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_contacts" ADD CONSTRAINT "_ServiceDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_contacts" ADD CONSTRAINT "_ServiceVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_contacts" ADD CONSTRAINT "_ServiceVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_facilities" ADD CONSTRAINT "_ServiceDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_facilities" ADD CONSTRAINT "_ServiceDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_facilities" ADD CONSTRAINT "_ServiceVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_facilities" ADD CONSTRAINT "_ServiceVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_orgUnits" ADD CONSTRAINT "_ServiceDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_orgUnits" ADD CONSTRAINT "_ServiceDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_orgUnits" ADD CONSTRAINT "_ServiceVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_orgUnits" ADD CONSTRAINT "_ServiceVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_parks" ADD CONSTRAINT "_ServiceDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_parks" ADD CONSTRAINT "_ServiceDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_parks" ADD CONSTRAINT "_ServiceVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_parks" ADD CONSTRAINT "_ServiceVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_tags" ADD CONSTRAINT "_ServiceDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_tags" ADD CONSTRAINT "_ServiceDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_userGroups" ADD CONSTRAINT "_ServiceDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_userGroups" ADD CONSTRAINT "_ServiceDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_trails" ADD CONSTRAINT "_ServiceDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_trails" ADD CONSTRAINT "_ServiceDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_tags" ADD CONSTRAINT "_ServiceVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_tags" ADD CONSTRAINT "_ServiceVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_userGroups" ADD CONSTRAINT "_ServiceVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_userGroups" ADD CONSTRAINT "_ServiceVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_trails" ADD CONSTRAINT "_ServiceVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_trails" ADD CONSTRAINT "_ServiceVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
