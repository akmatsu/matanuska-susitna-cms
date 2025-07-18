/*
  Warnings:

  - Made the column `electionDate` on table `Election` required. This step will fail if there are existing NULL values in that column.
  - Made the column `electionDate` on table `ElectionDraft` required. This step will fail if there are existing NULL values in that column.
  - Made the column `electionDate` on table `ElectionVersion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Election" ALTER COLUMN "electionDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "ElectionDraft" ALTER COLUMN "electionDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "ElectionVersion" ALTER COLUMN "electionDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "ElectionsPage" ADD COLUMN     "owner" TEXT;

-- CreateTable
CREATE TABLE "_ElectionsPage_userGroups" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionsPage_userGroups_AB_unique" ON "_ElectionsPage_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionsPage_userGroups_B_index" ON "_ElectionsPage_userGroups"("B");

-- CreateIndex
CREATE INDEX "ElectionsPage_owner_idx" ON "ElectionsPage"("owner");

-- AddForeignKey
ALTER TABLE "ElectionsPage" ADD CONSTRAINT "ElectionsPage_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_userGroups" ADD CONSTRAINT "_ElectionsPage_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionsPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_userGroups" ADD CONSTRAINT "_ElectionsPage_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
