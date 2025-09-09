/*
  Warnings:

  - A unique constraint covering the columns `[pageKey]` on the table `PageView` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PageView" ADD COLUMN     "pageKey" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "PageView_pageKey_key" ON "PageView"("pageKey");
