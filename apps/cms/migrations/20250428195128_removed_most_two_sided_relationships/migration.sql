/*
  Warnings:

  - You are about to drop the column `editorNotes` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the `_Contact_facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_orgUnits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_parks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_publicNotices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_services` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_testModels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_trails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OrgUnit_services` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Tag_testModels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Tag_trails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_user_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_facilities" DROP CONSTRAINT "_Contact_facilities_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_facilities" DROP CONSTRAINT "_Contact_facilities_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_orgUnits" DROP CONSTRAINT "_Contact_orgUnits_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_orgUnits" DROP CONSTRAINT "_Contact_orgUnits_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_parks" DROP CONSTRAINT "_Contact_parks_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_parks" DROP CONSTRAINT "_Contact_parks_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_publicNotices" DROP CONSTRAINT "_Contact_publicNotices_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_publicNotices" DROP CONSTRAINT "_Contact_publicNotices_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_services" DROP CONSTRAINT "_Contact_services_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_services" DROP CONSTRAINT "_Contact_services_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_testModels" DROP CONSTRAINT "_Contact_testModels_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_testModels" DROP CONSTRAINT "_Contact_testModels_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_trails" DROP CONSTRAINT "_Contact_trails_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_trails" DROP CONSTRAINT "_Contact_trails_B_fkey";

-- DropForeignKey
ALTER TABLE "_OrgUnit_services" DROP CONSTRAINT "_OrgUnit_services_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrgUnit_services" DROP CONSTRAINT "_OrgUnit_services_B_fkey";

-- DropForeignKey
ALTER TABLE "_Tag_testModels" DROP CONSTRAINT "_Tag_testModels_A_fkey";

-- DropForeignKey
ALTER TABLE "_Tag_testModels" DROP CONSTRAINT "_Tag_testModels_B_fkey";

-- DropForeignKey
ALTER TABLE "_Tag_trails" DROP CONSTRAINT "_Tag_trails_A_fkey";

-- DropForeignKey
ALTER TABLE "_Tag_trails" DROP CONSTRAINT "_Tag_trails_B_fkey";

-- DropIndex
DROP INDEX "Contact_user_key";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "editorNotes",
DROP COLUMN "user";

-- DropTable
DROP TABLE "_Contact_facilities";

-- DropTable
DROP TABLE "_Contact_orgUnits";

-- DropTable
DROP TABLE "_Contact_parks";

-- DropTable
DROP TABLE "_Contact_publicNotices";

-- DropTable
DROP TABLE "_Contact_services";

-- DropTable
DROP TABLE "_Contact_testModels";

-- DropTable
DROP TABLE "_Contact_trails";

-- DropTable
DROP TABLE "_OrgUnit_services";

-- DropTable
DROP TABLE "_Tag_testModels";

-- DropTable
DROP TABLE "_Tag_trails";

-- CreateTable
CREATE TABLE "TestModelDraft" (
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
    "status" TEXT DEFAULT 'draft',

    CONSTRAINT "TestModelDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Facility_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModel_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModelDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModel_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModelDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModelDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TestModelDraft_title_key" ON "TestModelDraft"("title");

-- CreateIndex
CREATE UNIQUE INDEX "TestModelDraft_slug_key" ON "TestModelDraft"("slug");

-- CreateIndex
CREATE INDEX "TestModelDraft_original_idx" ON "TestModelDraft"("original");

-- CreateIndex
CREATE INDEX "TestModelDraft_owner_idx" ON "TestModelDraft"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_contacts_AB_unique" ON "_Facility_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_contacts_B_index" ON "_Facility_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_contacts_AB_unique" ON "_OrgUnit_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_contacts_B_index" ON "_OrgUnit_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_contacts_AB_unique" ON "_Park_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_contacts_B_index" ON "_Park_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_contacts_AB_unique" ON "_PublicNotice_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_contacts_B_index" ON "_PublicNotice_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_contacts_AB_unique" ON "_Service_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_contacts_B_index" ON "_Service_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_contacts_AB_unique" ON "_Trail_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_contacts_B_index" ON "_Trail_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModel_contacts_AB_unique" ON "_TestModel_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModel_contacts_B_index" ON "_TestModel_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModelDraft_contacts_AB_unique" ON "_TestModelDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModelDraft_contacts_B_index" ON "_TestModelDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_orgUnits_AB_unique" ON "_Service_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_orgUnits_B_index" ON "_Service_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_tags_AB_unique" ON "_Trail_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_tags_B_index" ON "_Trail_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModel_tags_AB_unique" ON "_TestModel_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModel_tags_B_index" ON "_TestModel_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModelDraft_tags_AB_unique" ON "_TestModelDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModelDraft_tags_B_index" ON "_TestModelDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModelDraft_userGroups_AB_unique" ON "_TestModelDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModelDraft_userGroups_B_index" ON "_TestModelDraft_userGroups"("B");

-- AddForeignKey
ALTER TABLE "TestModelDraft" ADD CONSTRAINT "TestModelDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "TestModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestModelDraft" ADD CONSTRAINT "TestModelDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_contacts" ADD CONSTRAINT "_Facility_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_contacts" ADD CONSTRAINT "_Facility_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_contacts" ADD CONSTRAINT "_OrgUnit_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_contacts" ADD CONSTRAINT "_OrgUnit_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_contacts" ADD CONSTRAINT "_Park_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_contacts" ADD CONSTRAINT "_Park_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_contacts" ADD CONSTRAINT "_PublicNotice_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_contacts" ADD CONSTRAINT "_PublicNotice_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_contacts" ADD CONSTRAINT "_Service_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_contacts" ADD CONSTRAINT "_Service_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_contacts" ADD CONSTRAINT "_Trail_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_contacts" ADD CONSTRAINT "_Trail_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModel_contacts" ADD CONSTRAINT "_TestModel_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModel_contacts" ADD CONSTRAINT "_TestModel_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelDraft_contacts" ADD CONSTRAINT "_TestModelDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelDraft_contacts" ADD CONSTRAINT "_TestModelDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModelDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_orgUnits" ADD CONSTRAINT "_Service_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_orgUnits" ADD CONSTRAINT "_Service_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_tags" ADD CONSTRAINT "_Trail_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_tags" ADD CONSTRAINT "_Trail_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModel_tags" ADD CONSTRAINT "_TestModel_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModel_tags" ADD CONSTRAINT "_TestModel_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelDraft_tags" ADD CONSTRAINT "_TestModelDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelDraft_tags" ADD CONSTRAINT "_TestModelDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModelDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelDraft_userGroups" ADD CONSTRAINT "_TestModelDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TestModelDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelDraft_userGroups" ADD CONSTRAINT "_TestModelDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
