/*
  Warnings:

  - You are about to drop the column `createDraft` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `createDraft` on the `TestModel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "createDraft",
ADD COLUMN     "makeDrafts" TEXT;

-- AlterTable
ALTER TABLE "TestModel" DROP COLUMN "createDraft",
ADD COLUMN     "makeDrafts" TEXT;
