-- AlterTable
ALTER TABLE "BoardPage" ADD COLUMN     "ParliTrainingLink" TEXT;

-- CreateIndex
CREATE INDEX "BoardPage_ParliTrainingLink_idx" ON "BoardPage"("ParliTrainingLink");

-- AddForeignKey
ALTER TABLE "BoardPage" ADD CONSTRAINT "BoardPage_ParliTrainingLink_fkey" FOREIGN KEY ("ParliTrainingLink") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
