/*
  Warnings:

  - Made the column `type` on table `Board` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `BoardDraft` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `BoardVersion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "linkToAgendas" TEXT,
ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "linkToAgendas" TEXT,
ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "BoardVersion" ADD COLUMN     "linkToAgendas" TEXT,
ALTER COLUMN "type" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Board_linkToAgendas_idx" ON "Board"("linkToAgendas");

-- CreateIndex
CREATE INDEX "BoardDraft_linkToAgendas_idx" ON "BoardDraft"("linkToAgendas");

-- CreateIndex
CREATE INDEX "BoardVersion_linkToAgendas_idx" ON "BoardVersion"("linkToAgendas");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_linkToAgendas_fkey" FOREIGN KEY ("linkToAgendas") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_linkToAgendas_fkey" FOREIGN KEY ("linkToAgendas") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_linkToAgendas_fkey" FOREIGN KEY ("linkToAgendas") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
