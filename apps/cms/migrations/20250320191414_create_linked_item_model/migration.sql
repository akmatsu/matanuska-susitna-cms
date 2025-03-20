/*
  Warnings:

  - You are about to drop the column `description` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Highlight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Highlight" DROP COLUMN "description",
DROP COLUMN "link",
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "linkedItem" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" DROP DEFAULT;

-- CreateTable
CREATE TABLE "LinkedItem" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "selectItem" JSONB,

    CONSTRAINT "LinkedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Highlight_linkedItem_idx" ON "Highlight"("linkedItem");

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_linkedItem_fkey" FOREIGN KEY ("linkedItem") REFERENCES "LinkedItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
