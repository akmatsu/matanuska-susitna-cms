/*
  Warnings:

  - You are about to drop the column `mapId` on the `Community` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[currentVersion]` on the table `Community` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Community" DROP COLUMN "mapId",
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- CreateTable
CREATE TABLE "CommunityDraft" (
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
    "publish" TEXT,

    CONSTRAINT "CommunityDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityVersion" (
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
    "republish" TEXT,

    CONSTRAINT "CommunityVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CommunityDraft_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "CommunityDraft_original_idx" ON "CommunityDraft"("original");

-- CreateIndex
CREATE INDEX "CommunityDraft_owner_idx" ON "CommunityDraft"("owner");

-- CreateIndex
CREATE INDEX "CommunityVersion_original_idx" ON "CommunityVersion"("original");

-- CreateIndex
CREATE INDEX "CommunityVersion_owner_idx" ON "CommunityVersion"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_districts_AB_unique" ON "_CommunityDraft_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_districts_B_index" ON "_CommunityDraft_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_districts_AB_unique" ON "_CommunityVersion_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_districts_B_index" ON "_CommunityVersion_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_tags_AB_unique" ON "_CommunityDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_tags_B_index" ON "_CommunityDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_userGroups_AB_unique" ON "_CommunityDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_userGroups_B_index" ON "_CommunityDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_contacts_AB_unique" ON "_CommunityDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_contacts_B_index" ON "_CommunityDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_services_AB_unique" ON "_CommunityDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_services_B_index" ON "_CommunityDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_tags_AB_unique" ON "_CommunityVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_tags_B_index" ON "_CommunityVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_userGroups_AB_unique" ON "_CommunityVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_userGroups_B_index" ON "_CommunityVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_contacts_AB_unique" ON "_CommunityVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_contacts_B_index" ON "_CommunityVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_services_AB_unique" ON "_CommunityVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_services_B_index" ON "_CommunityVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Community_currentVersion_key" ON "Community"("currentVersion");

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "CommunityVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_districts" ADD CONSTRAINT "_CommunityDraft_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_districts" ADD CONSTRAINT "_CommunityDraft_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_districts" ADD CONSTRAINT "_CommunityVersion_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_districts" ADD CONSTRAINT "_CommunityVersion_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_tags" ADD CONSTRAINT "_CommunityDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_tags" ADD CONSTRAINT "_CommunityDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_userGroups" ADD CONSTRAINT "_CommunityDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_userGroups" ADD CONSTRAINT "_CommunityDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_contacts" ADD CONSTRAINT "_CommunityDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_contacts" ADD CONSTRAINT "_CommunityDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_services" ADD CONSTRAINT "_CommunityDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_services" ADD CONSTRAINT "_CommunityDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_tags" ADD CONSTRAINT "_CommunityVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_tags" ADD CONSTRAINT "_CommunityVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_userGroups" ADD CONSTRAINT "_CommunityVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_userGroups" ADD CONSTRAINT "_CommunityVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_contacts" ADD CONSTRAINT "_CommunityVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_contacts" ADD CONSTRAINT "_CommunityVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_services" ADD CONSTRAINT "_CommunityVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_services" ADD CONSTRAINT "_CommunityVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
