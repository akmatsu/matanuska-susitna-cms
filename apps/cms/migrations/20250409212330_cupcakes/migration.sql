/*
  Warnings:

  - You are about to drop the column `groomed` on the `Trail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AssemblyDistrict" ADD COLUMN     "body" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "heroImage" TEXT,
ADD COLUMN     "publishAt" TIMESTAMP(3),
ADD COLUMN     "reviewDate" TIMESTAMP(3),
ADD COLUMN     "unpublishAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Trail" DROP COLUMN "groomed";

-- CreateTable
CREATE TABLE "_AssemblyDistrict_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_tags_AB_unique" ON "_AssemblyDistrict_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_tags_B_index" ON "_AssemblyDistrict_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_userGroups_AB_unique" ON "_AssemblyDistrict_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_userGroups_B_index" ON "_AssemblyDistrict_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_contacts_AB_unique" ON "_AssemblyDistrict_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_contacts_B_index" ON "_AssemblyDistrict_contacts"("B");

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_tags" ADD CONSTRAINT "_AssemblyDistrict_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_tags" ADD CONSTRAINT "_AssemblyDistrict_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_userGroups" ADD CONSTRAINT "_AssemblyDistrict_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_userGroups" ADD CONSTRAINT "_AssemblyDistrict_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_contacts" ADD CONSTRAINT "_AssemblyDistrict_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_contacts" ADD CONSTRAINT "_AssemblyDistrict_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
