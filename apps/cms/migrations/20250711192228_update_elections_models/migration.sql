-- AlterTable
ALTER TABLE "Election" ADD COLUMN     "candidatePacketAvailability" TIMESTAMP(3),
ADD COLUMN     "officesToBeFilled" TEXT;

-- AlterTable
ALTER TABLE "ElectionDraft" ADD COLUMN     "candidatePacketAvailability" TIMESTAMP(3),
ADD COLUMN     "officesToBeFilled" TEXT;

-- AlterTable
ALTER TABLE "ElectionVersion" ADD COLUMN     "candidatePacketAvailability" TIMESTAMP(3),
ADD COLUMN     "officesToBeFilled" TEXT;

-- AlterTable
ALTER TABLE "ElectionsPage" ADD COLUMN     "boroughElectionContact" TEXT,
ADD COLUMN     "referendumProcessDocument" TEXT,
ADD COLUMN     "stateElectionContact" TEXT;

-- CreateIndex
CREATE INDEX "ElectionsPage_stateElectionContact_idx" ON "ElectionsPage"("stateElectionContact");

-- CreateIndex
CREATE INDEX "ElectionsPage_boroughElectionContact_idx" ON "ElectionsPage"("boroughElectionContact");

-- CreateIndex
CREATE INDEX "ElectionsPage_referendumProcessDocument_idx" ON "ElectionsPage"("referendumProcessDocument");

-- AddForeignKey
ALTER TABLE "ElectionsPage" ADD CONSTRAINT "ElectionsPage_stateElectionContact_fkey" FOREIGN KEY ("stateElectionContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionsPage" ADD CONSTRAINT "ElectionsPage_boroughElectionContact_fkey" FOREIGN KEY ("boroughElectionContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionsPage" ADD CONSTRAINT "ElectionsPage_referendumProcessDocument_fkey" FOREIGN KEY ("referendumProcessDocument") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
