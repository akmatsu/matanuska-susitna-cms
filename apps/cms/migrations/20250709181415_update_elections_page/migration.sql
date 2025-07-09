/*
  Warnings:

  - You are about to drop the column `body` on the `ElectionsPage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ElectionsPage" DROP COLUMN "body",
ADD COLUMN     "howElectionsWork" TEXT;
