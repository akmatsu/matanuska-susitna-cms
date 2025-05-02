/*
  Warnings:

  - You are about to drop the column `slug` on the `TestModelVersion` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "TestModelVersion_slug_key";

-- DropIndex
DROP INDEX "TestModelVersion_title_key";

-- AlterTable
ALTER TABLE "TestModelVersion" DROP COLUMN "slug";
