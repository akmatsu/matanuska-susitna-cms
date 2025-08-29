/*
  Warnings:

  - You are about to drop the `_PlanDocument_document` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PlanDocument_document" DROP CONSTRAINT "_PlanDocument_document_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlanDocument_document" DROP CONSTRAINT "_PlanDocument_document_B_fkey";

-- AlterTable
ALTER TABLE "PlanDocument" ADD COLUMN     "document" TEXT;

-- DropTable
DROP TABLE "_PlanDocument_document";

-- CreateIndex
CREATE INDEX "PlanDocument_document_idx" ON "PlanDocument"("document");

-- AddForeignKey
ALTER TABLE "PlanDocument" ADD CONSTRAINT "PlanDocument_document_fkey" FOREIGN KEY ("document") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
