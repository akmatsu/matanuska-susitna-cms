/*
  Warnings:

  - You are about to drop the column `highlightOne` on the `HomePage` table. All the data in the column will be lost.
  - You are about to drop the column `highlightThree` on the `HomePage` table. All the data in the column will be lost.
  - You are about to drop the column `highlightTwo` on the `HomePage` table. All the data in the column will be lost.
  - You are about to drop the column `toolbeltFour` on the `HomePage` table. All the data in the column will be lost.
  - You are about to drop the column `toolbeltOne` on the `HomePage` table. All the data in the column will be lost.
  - You are about to drop the column `toolbeltThree` on the `HomePage` table. All the data in the column will be lost.
  - You are about to drop the column `toolbeltTwo` on the `HomePage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_highlightOne_fkey";

-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_highlightThree_fkey";

-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_highlightTwo_fkey";

-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_toolbeltFour_fkey";

-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_toolbeltOne_fkey";

-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_toolbeltThree_fkey";

-- DropForeignKey
ALTER TABLE "HomePage" DROP CONSTRAINT "HomePage_toolbeltTwo_fkey";

-- DropIndex
DROP INDEX "HomePage_highlightOne_idx";

-- DropIndex
DROP INDEX "HomePage_highlightThree_idx";

-- DropIndex
DROP INDEX "HomePage_highlightTwo_idx";

-- DropIndex
DROP INDEX "HomePage_toolbeltFour_idx";

-- DropIndex
DROP INDEX "HomePage_toolbeltOne_idx";

-- DropIndex
DROP INDEX "HomePage_toolbeltThree_idx";

-- DropIndex
DROP INDEX "HomePage_toolbeltTwo_idx";

-- AlterTable
ALTER TABLE "HomePage" DROP COLUMN "highlightOne",
DROP COLUMN "highlightThree",
DROP COLUMN "highlightTwo",
DROP COLUMN "toolbeltFour",
DROP COLUMN "toolbeltOne",
DROP COLUMN "toolbeltThree",
DROP COLUMN "toolbeltTwo";

-- CreateTable
CREATE TABLE "featuredItem" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 1,
    "linkedItem" TEXT,

    CONSTRAINT "featuredItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HomePage_featuredItems" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "featuredItem_order_idx" ON "featuredItem"("order");

-- CreateIndex
CREATE INDEX "featuredItem_linkedItem_idx" ON "featuredItem"("linkedItem");

-- CreateIndex
CREATE UNIQUE INDEX "_HomePage_featuredItems_AB_unique" ON "_HomePage_featuredItems"("A", "B");

-- CreateIndex
CREATE INDEX "_HomePage_featuredItems_B_index" ON "_HomePage_featuredItems"("B");

-- AddForeignKey
ALTER TABLE "featuredItem" ADD CONSTRAINT "featuredItem_linkedItem_fkey" FOREIGN KEY ("linkedItem") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HomePage_featuredItems" ADD CONSTRAINT "_HomePage_featuredItems_A_fkey" FOREIGN KEY ("A") REFERENCES "HomePage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HomePage_featuredItems" ADD CONSTRAINT "_HomePage_featuredItems_B_fkey" FOREIGN KEY ("B") REFERENCES "featuredItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
