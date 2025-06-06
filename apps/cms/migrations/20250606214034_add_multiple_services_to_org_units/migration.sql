/*
  Warnings:

  - You are about to drop the column `services` on the `OrgUnit` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `OrgUnitDraft` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `OrgUnitVersion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrgUnit" DROP CONSTRAINT "OrgUnit_services_fkey";

-- DropForeignKey
ALTER TABLE "OrgUnitDraft" DROP CONSTRAINT "OrgUnitDraft_services_fkey";

-- DropForeignKey
ALTER TABLE "OrgUnitVersion" DROP CONSTRAINT "OrgUnitVersion_services_fkey";

-- DropIndex
DROP INDEX "OrgUnit_services_idx";

-- DropIndex
DROP INDEX "OrgUnitDraft_services_idx";

-- DropIndex
DROP INDEX "OrgUnitVersion_services_idx";

-- AlterTable
ALTER TABLE "OrgUnit" DROP COLUMN "services";

-- AlterTable
ALTER TABLE "OrgUnitDraft" DROP COLUMN "services";

-- AlterTable
ALTER TABLE "OrgUnitVersion" DROP COLUMN "services";

-- CreateTable
CREATE TABLE "_OrgUnit_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_services_AB_unique" ON "_OrgUnit_services"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_services_B_index" ON "_OrgUnit_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_services_AB_unique" ON "_OrgUnitDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_services_B_index" ON "_OrgUnitDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_services_AB_unique" ON "_OrgUnitVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_services_B_index" ON "_OrgUnitVersion_services"("B");

-- AddForeignKey
ALTER TABLE "_OrgUnit_services" ADD CONSTRAINT "_OrgUnit_services_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_services" ADD CONSTRAINT "_OrgUnit_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_services" ADD CONSTRAINT "_OrgUnitDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_services" ADD CONSTRAINT "_OrgUnitDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_services" ADD CONSTRAINT "_OrgUnitVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_services" ADD CONSTRAINT "_OrgUnitVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
