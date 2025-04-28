/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `DocumentCollection` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DocumentCollection" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "TestModel" (
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
    "status" TEXT DEFAULT 'draft',

    CONSTRAINT "TestModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Contact_testModels" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Tag_testModels" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TestModel_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TestModel_title_key" ON "TestModel"("title");

-- CreateIndex
CREATE UNIQUE INDEX "TestModel_slug_key" ON "TestModel"("slug");

-- CreateIndex
CREATE INDEX "TestModel_owner_idx" ON "TestModel"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "_Contact_testModels_AB_unique" ON "_Contact_testModels"("A", "B");

-- CreateIndex
CREATE INDEX "_Contact_testModels_B_index" ON "_Contact_testModels"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Tag_testModels_AB_unique" ON "_Tag_testModels"("A", "B");

-- CreateIndex
CREATE INDEX "_Tag_testModels_B_index" ON "_Tag_testModels"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestModel_userGroups_AB_unique" ON "_TestModel_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TestModel_userGroups_B_index" ON "_TestModel_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentCollection_title_key" ON "DocumentCollection"("title");

-- AddForeignKey
ALTER TABLE "TestModel" ADD CONSTRAINT "TestModel_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_testModels" ADD CONSTRAINT "_Contact_testModels_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_testModels" ADD CONSTRAINT "_Contact_testModels_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Tag_testModels" ADD CONSTRAINT "_Tag_testModels_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Tag_testModels" ADD CONSTRAINT "_Tag_testModels_B_fkey" FOREIGN KEY ("B") REFERENCES "TestModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModel_userGroups" ADD CONSTRAINT "_TestModel_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TestModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestModel_userGroups" ADD CONSTRAINT "_TestModel_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
