/*
  Warnings:

  - A unique constraint covering the columns `[currentVersion]` on the table `AssemblyDistrict` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AssemblyDistrict" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- CreateTable
CREATE TABLE "AssemblyDistrictDraft" (
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
    "photo" TEXT,
    "memberName" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT,
    "phone" TEXT,
    "fax" TEXT,
    "termStart" TIMESTAMP(3),
    "termEnd" TIMESTAMP(3),
    "publish" TEXT,

    CONSTRAINT "AssemblyDistrictDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssemblyDistrictVersion" (
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
    "photo" TEXT,
    "memberName" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT,
    "phone" TEXT,
    "fax" TEXT,
    "termStart" TIMESTAMP(3),
    "termEnd" TIMESTAMP(3),
    "republish" TEXT,

    CONSTRAINT "AssemblyDistrictVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_original_idx" ON "AssemblyDistrictDraft"("original");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_owner_idx" ON "AssemblyDistrictDraft"("owner");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_photo_idx" ON "AssemblyDistrictDraft"("photo");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_original_idx" ON "AssemblyDistrictVersion"("original");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_owner_idx" ON "AssemblyDistrictVersion"("owner");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_photo_idx" ON "AssemblyDistrictVersion"("photo");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_tags_AB_unique" ON "_AssemblyDistrictDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_tags_B_index" ON "_AssemblyDistrictDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_userGroups_AB_unique" ON "_AssemblyDistrictDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_userGroups_B_index" ON "_AssemblyDistrictDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_contacts_AB_unique" ON "_AssemblyDistrictDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_contacts_B_index" ON "_AssemblyDistrictDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_tags_AB_unique" ON "_AssemblyDistrictVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_tags_B_index" ON "_AssemblyDistrictVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_userGroups_AB_unique" ON "_AssemblyDistrictVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_userGroups_B_index" ON "_AssemblyDistrictVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_contacts_AB_unique" ON "_AssemblyDistrictVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_contacts_B_index" ON "_AssemblyDistrictVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "AssemblyDistrict_currentVersion_key" ON "AssemblyDistrict"("currentVersion");

-- AddForeignKey
ALTER TABLE "AssemblyDistrict" ADD CONSTRAINT "AssemblyDistrict_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "AssemblyDistrict"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_photo_fkey" FOREIGN KEY ("photo") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "AssemblyDistrict"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_photo_fkey" FOREIGN KEY ("photo") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_tags" ADD CONSTRAINT "_AssemblyDistrictDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_tags" ADD CONSTRAINT "_AssemblyDistrictDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_userGroups" ADD CONSTRAINT "_AssemblyDistrictDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_userGroups" ADD CONSTRAINT "_AssemblyDistrictDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_contacts" ADD CONSTRAINT "_AssemblyDistrictDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_contacts" ADD CONSTRAINT "_AssemblyDistrictDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_tags" ADD CONSTRAINT "_AssemblyDistrictVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_tags" ADD CONSTRAINT "_AssemblyDistrictVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_userGroups" ADD CONSTRAINT "_AssemblyDistrictVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_userGroups" ADD CONSTRAINT "_AssemblyDistrictVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_contacts" ADD CONSTRAINT "_AssemblyDistrictVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_contacts" ADD CONSTRAINT "_AssemblyDistrictVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
