/*
  Warnings:

  - You are about to drop the column `slug` on the `TestModelDraft` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `TestModel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "TestModelDraft_slug_key";

-- DropIndex
DROP INDEX "TestModelDraft_title_key";

-- AlterTable
ALTER TABLE "TestModelDraft" DROP COLUMN "slug";

-- CreateIndex
CREATE UNIQUE INDEX "TestModel_title_key" ON "TestModel"("title");
