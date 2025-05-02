/*
  Warnings:

  - You are about to drop the column `status` on the `TestModelDraft` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[currentVersion]` on the table `TestModel` will be added. If there are existing duplicate values, this will fail.
  - Made the column `status` on table `TestModel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TestModel" ADD COLUMN     "currentVersion" TEXT,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "TestModelDraft" DROP COLUMN "status";

-- CreateTable
CREATE TABLE "TestModelVersion" (
    "id" TEXT NOT NULL,
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
    "original" TEXT,

    CONSTRAINT "TestModelVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TestModelVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModelVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModelVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TestModelVersion_title_key" ON "TestModelVersion"("title");

-- CreateIndex
CREATE UNIQUE INDEX "TestModelVersion_slug_key" ON "TestModelVersion"("slug");

-- CreateIndex
CREATE INDEX "TestModelVersion_owner_idx" ON "TestModelVersion"("owner");

-- CreateIndex
CREATE INDEX "TestModelVersion_original_idx" ON "TestModelVersion"("original");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModelVersion_contacts_AB_unique" ON "_TestModelVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModelVersion_contacts_B_index" ON "_TestModelVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModelVersion_tags_AB_unique" ON "_TestModelVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModelVersion_tags_B_index" ON "_TestModelVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModelVersion_userGroups_AB_unique" ON "_TestModelVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModelVersion_userGroups_B_index" ON "_TestModelVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "TestModel_currentVersion_key" ON "TestModel"("currentVersion");

-- AddForeignKey
ALTER TABLE "TestModel" ADD CONSTRAINT "TestModel_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "TestModelVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestModelVersion" ADD CONSTRAINT "TestModelVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestModelVersion" ADD CONSTRAINT "TestModelVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "TestModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelVersion_contacts" ADD CONSTRAINT "_TestModelVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelVersion_contacts" ADD CONSTRAINT "_TestModelVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModelVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelVersion_tags" ADD CONSTRAINT "_TestModelVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelVersion_tags" ADD CONSTRAINT "_TestModelVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModelVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelVersion_userGroups" ADD CONSTRAINT "_TestModelVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TestModelVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModelVersion_userGroups" ADD CONSTRAINT "_TestModelVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
