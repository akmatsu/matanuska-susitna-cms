-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "linkToPublicOpinionMessage" TEXT,
ADD COLUMN     "linkToResolutions" TEXT;

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "linkToPublicOpinionMessage" TEXT,
ADD COLUMN     "linkToResolutions" TEXT;

-- AlterTable
ALTER TABLE "BoardVersion" ADD COLUMN     "linkToPublicOpinionMessage" TEXT,
ADD COLUMN     "linkToResolutions" TEXT;

-- CreateIndex
CREATE INDEX "Board_linkToResolutions_idx" ON "Board"("linkToResolutions");

-- CreateIndex
CREATE INDEX "Board_linkToPublicOpinionMessage_idx" ON "Board"("linkToPublicOpinionMessage");

-- CreateIndex
CREATE INDEX "BoardDraft_linkToResolutions_idx" ON "BoardDraft"("linkToResolutions");

-- CreateIndex
CREATE INDEX "BoardDraft_linkToPublicOpinionMessage_idx" ON "BoardDraft"("linkToPublicOpinionMessage");

-- CreateIndex
CREATE INDEX "BoardVersion_linkToResolutions_idx" ON "BoardVersion"("linkToResolutions");

-- CreateIndex
CREATE INDEX "BoardVersion_linkToPublicOpinionMessage_idx" ON "BoardVersion"("linkToPublicOpinionMessage");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_linkToResolutions_fkey" FOREIGN KEY ("linkToResolutions") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_linkToPublicOpinionMessage_fkey" FOREIGN KEY ("linkToPublicOpinionMessage") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_linkToResolutions_fkey" FOREIGN KEY ("linkToResolutions") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_linkToPublicOpinionMessage_fkey" FOREIGN KEY ("linkToPublicOpinionMessage") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_linkToResolutions_fkey" FOREIGN KEY ("linkToResolutions") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_linkToPublicOpinionMessage_fkey" FOREIGN KEY ("linkToPublicOpinionMessage") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
