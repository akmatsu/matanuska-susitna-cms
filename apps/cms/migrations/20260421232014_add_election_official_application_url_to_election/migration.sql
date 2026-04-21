-- AlterTable
ALTER TABLE "ElectionsPage" ADD COLUMN     "electionOfficialApplicationUrl" TEXT;

-- CreateIndex
CREATE INDEX "ElectionsPage_electionOfficialApplicationUrl_idx" ON "ElectionsPage"("electionOfficialApplicationUrl");

-- AddForeignKey
ALTER TABLE "ElectionsPage" ADD CONSTRAINT "ElectionsPage_electionOfficialApplicationUrl_fkey" FOREIGN KEY ("electionOfficialApplicationUrl") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
