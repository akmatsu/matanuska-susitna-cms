-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "address" TEXT,
ADD COLUMN     "body" TEXT;

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "address" TEXT,
ADD COLUMN     "body" TEXT;

-- CreateIndex
CREATE INDEX "Facility_address_idx" ON "Facility"("address");

-- CreateIndex
CREATE INDEX "Trail_address_idx" ON "Trail"("address");

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
