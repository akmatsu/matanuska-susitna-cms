/*
  Warnings:

  - A unique constraint covering the columns `[currentVersion]` on the table `PublicNotice` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PublicNotice" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- CreateTable
CREATE TABLE "PublicNoticeDraft" (
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
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "urgency" INTEGER NOT NULL DEFAULT 2,
    "effectiveDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "publish" TEXT,

    CONSTRAINT "PublicNoticeDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicNoticeVersion" (
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
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "urgency" INTEGER NOT NULL DEFAULT 2,
    "effectiveDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "republish" TEXT,

    CONSTRAINT "PublicNoticeVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PublicNoticeDraft_title_key" ON "PublicNoticeDraft"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PublicNoticeDraft_slug_key" ON "PublicNoticeDraft"("slug");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_original_idx" ON "PublicNoticeDraft"("original");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_owner_idx" ON "PublicNoticeDraft"("owner");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_actions_idx" ON "PublicNoticeDraft"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "PublicNoticeVersion_title_key" ON "PublicNoticeVersion"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PublicNoticeVersion_slug_key" ON "PublicNoticeVersion"("slug");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_original_idx" ON "PublicNoticeVersion"("original");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_owner_idx" ON "PublicNoticeVersion"("owner");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_actions_idx" ON "PublicNoticeVersion"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_assemblyDistricts_AB_unique" ON "_PublicNoticeDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_assemblyDistricts_B_index" ON "_PublicNoticeDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_assemblyDistricts_AB_unique" ON "_PublicNoticeVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_assemblyDistricts_B_index" ON "_PublicNoticeVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_communities_AB_unique" ON "_PublicNoticeDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_communities_B_index" ON "_PublicNoticeDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_communities_AB_unique" ON "_PublicNoticeVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_communities_B_index" ON "_PublicNoticeVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_contacts_AB_unique" ON "_PublicNoticeDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_contacts_B_index" ON "_PublicNoticeDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_contacts_AB_unique" ON "_PublicNoticeVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_contacts_B_index" ON "_PublicNoticeVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_documents_AB_unique" ON "_PublicNoticeDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_documents_B_index" ON "_PublicNoticeDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_documents_AB_unique" ON "_PublicNoticeVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_documents_B_index" ON "_PublicNoticeVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_facilities_AB_unique" ON "_PublicNoticeDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_facilities_B_index" ON "_PublicNoticeDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_facilities_AB_unique" ON "_PublicNoticeVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_facilities_B_index" ON "_PublicNoticeVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_orgUnits_AB_unique" ON "_PublicNoticeDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_orgUnits_B_index" ON "_PublicNoticeDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_orgUnits_AB_unique" ON "_PublicNoticeVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_orgUnits_B_index" ON "_PublicNoticeVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_parks_AB_unique" ON "_PublicNoticeDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_parks_B_index" ON "_PublicNoticeDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_parks_AB_unique" ON "_PublicNoticeVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_parks_B_index" ON "_PublicNoticeVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_tags_AB_unique" ON "_PublicNoticeDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_tags_B_index" ON "_PublicNoticeDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_userGroups_AB_unique" ON "_PublicNoticeDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_userGroups_B_index" ON "_PublicNoticeDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_services_AB_unique" ON "_PublicNoticeDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_services_B_index" ON "_PublicNoticeDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_trails_AB_unique" ON "_PublicNoticeDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_trails_B_index" ON "_PublicNoticeDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_tags_AB_unique" ON "_PublicNoticeVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_tags_B_index" ON "_PublicNoticeVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_userGroups_AB_unique" ON "_PublicNoticeVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_userGroups_B_index" ON "_PublicNoticeVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_services_AB_unique" ON "_PublicNoticeVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_services_B_index" ON "_PublicNoticeVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_trails_AB_unique" ON "_PublicNoticeVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_trails_B_index" ON "_PublicNoticeVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "PublicNotice_currentVersion_key" ON "PublicNotice"("currentVersion");

-- AddForeignKey
ALTER TABLE "PublicNotice" ADD CONSTRAINT "PublicNotice_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "PublicNoticeVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "PublicNotice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "PublicNotice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_communities" ADD CONSTRAINT "_PublicNoticeDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_communities" ADD CONSTRAINT "_PublicNoticeDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_communities" ADD CONSTRAINT "_PublicNoticeVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_communities" ADD CONSTRAINT "_PublicNoticeVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_contacts" ADD CONSTRAINT "_PublicNoticeDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_contacts" ADD CONSTRAINT "_PublicNoticeDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_contacts" ADD CONSTRAINT "_PublicNoticeVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_contacts" ADD CONSTRAINT "_PublicNoticeVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_documents" ADD CONSTRAINT "_PublicNoticeDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_documents" ADD CONSTRAINT "_PublicNoticeDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_documents" ADD CONSTRAINT "_PublicNoticeVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_documents" ADD CONSTRAINT "_PublicNoticeVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_facilities" ADD CONSTRAINT "_PublicNoticeDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_facilities" ADD CONSTRAINT "_PublicNoticeDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_facilities" ADD CONSTRAINT "_PublicNoticeVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_facilities" ADD CONSTRAINT "_PublicNoticeVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_orgUnits" ADD CONSTRAINT "_PublicNoticeDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_orgUnits" ADD CONSTRAINT "_PublicNoticeDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_orgUnits" ADD CONSTRAINT "_PublicNoticeVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_orgUnits" ADD CONSTRAINT "_PublicNoticeVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_parks" ADD CONSTRAINT "_PublicNoticeDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_parks" ADD CONSTRAINT "_PublicNoticeDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_parks" ADD CONSTRAINT "_PublicNoticeVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_parks" ADD CONSTRAINT "_PublicNoticeVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_tags" ADD CONSTRAINT "_PublicNoticeDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_tags" ADD CONSTRAINT "_PublicNoticeDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_userGroups" ADD CONSTRAINT "_PublicNoticeDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_userGroups" ADD CONSTRAINT "_PublicNoticeDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_services" ADD CONSTRAINT "_PublicNoticeDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_services" ADD CONSTRAINT "_PublicNoticeDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_trails" ADD CONSTRAINT "_PublicNoticeDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_trails" ADD CONSTRAINT "_PublicNoticeDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_tags" ADD CONSTRAINT "_PublicNoticeVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_tags" ADD CONSTRAINT "_PublicNoticeVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_userGroups" ADD CONSTRAINT "_PublicNoticeVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_userGroups" ADD CONSTRAINT "_PublicNoticeVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_services" ADD CONSTRAINT "_PublicNoticeVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_services" ADD CONSTRAINT "_PublicNoticeVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_trails" ADD CONSTRAINT "_PublicNoticeVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_trails" ADD CONSTRAINT "_PublicNoticeVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
