-- AlterTable
ALTER TABLE "ElectionsPage" ADD COLUMN     "pollingPlaceBody" TEXT,
ADD COLUMN     "pollingPlacesLink" TEXT;

-- CreateIndex
CREATE INDEX "ElectionsPage_pollingPlacesLink_idx" ON "ElectionsPage"("pollingPlacesLink");

-- AddForeignKey
ALTER TABLE "ElectionsPage" ADD CONSTRAINT "ElectionsPage_pollingPlacesLink_fkey" FOREIGN KEY ("pollingPlacesLink") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
