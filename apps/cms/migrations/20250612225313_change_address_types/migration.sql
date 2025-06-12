-- AlterTable
ALTER TABLE "AssemblyDistrict" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "address" DROP DEFAULT;

-- AlterTable
ALTER TABLE "AssemblyDistrictDraft" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "address" DROP DEFAULT;

-- AlterTable
ALTER TABLE "AssemblyDistrictVersion" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "address" DROP DEFAULT;

-- 2) Convert any “bad” addresses to NULL
UPDATE "AssemblyDistrict"
SET address = NULL
WHERE address IS NOT NULL
  AND address NOT IN (SELECT id FROM "Location");

UPDATE "AssemblyDistrictDraft"
SET address = NULL
WHERE address IS NOT NULL
  AND address NOT IN (SELECT id FROM "Location");

UPDATE "AssemblyDistrictVersion"
SET address = NULL
WHERE address IS NOT NULL
  AND address NOT IN (SELECT id FROM "Location");

-- CreateIndex
CREATE INDEX "AssemblyDistrict_address_idx" ON "AssemblyDistrict"("address");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_address_idx" ON "AssemblyDistrictDraft"("address");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_address_idx" ON "AssemblyDistrictVersion"("address");

-- AddForeignKey
ALTER TABLE "AssemblyDistrict" ADD CONSTRAINT "AssemblyDistrict_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
