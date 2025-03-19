/*
  Warnings:

  - You are about to drop the column `externalLink` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the column `internalLink` on the `Highlight` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Highlight` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Highlight" DROP COLUMN "externalLink",
DROP COLUMN "internalLink",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "link" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "Highlight_title_key" ON "Highlight"("title");
