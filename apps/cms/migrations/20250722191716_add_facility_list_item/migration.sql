-- CreateTable
CREATE TABLE "FacilityListItem" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "facility" TEXT,

    CONSTRAINT "FacilityListItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ElectionsPage_earlyVotingLocations" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "FacilityListItem_facility_idx" ON "FacilityListItem"("facility");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionsPage_earlyVotingLocations_AB_unique" ON "_ElectionsPage_earlyVotingLocations"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionsPage_earlyVotingLocations_B_index" ON "_ElectionsPage_earlyVotingLocations"("B");

-- AddForeignKey
ALTER TABLE "FacilityListItem" ADD CONSTRAINT "FacilityListItem_facility_fkey" FOREIGN KEY ("facility") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_earlyVotingLocations" ADD CONSTRAINT "_ElectionsPage_earlyVotingLocations_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionsPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_earlyVotingLocations" ADD CONSTRAINT "_ElectionsPage_earlyVotingLocations_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
