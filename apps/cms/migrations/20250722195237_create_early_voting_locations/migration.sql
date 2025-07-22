-- CreateTable
CREATE TABLE "EarlyVotingLocation" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL DEFAULT '',
    "address" TEXT,

    CONSTRAINT "EarlyVotingLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EarlyVotingLocation_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionsPage_earlyVotingLocations" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "EarlyVotingLocation_address_idx" ON "EarlyVotingLocation"("address");

-- CreateIndex
CREATE UNIQUE INDEX "_EarlyVotingLocation_hours_AB_unique" ON "_EarlyVotingLocation_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_EarlyVotingLocation_hours_B_index" ON "_EarlyVotingLocation_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionsPage_earlyVotingLocations_AB_unique" ON "_ElectionsPage_earlyVotingLocations"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionsPage_earlyVotingLocations_B_index" ON "_ElectionsPage_earlyVotingLocations"("B");

-- AddForeignKey
ALTER TABLE "EarlyVotingLocation" ADD CONSTRAINT "EarlyVotingLocation_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EarlyVotingLocation_hours" ADD CONSTRAINT "_EarlyVotingLocation_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "EarlyVotingLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EarlyVotingLocation_hours" ADD CONSTRAINT "_EarlyVotingLocation_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_earlyVotingLocations" ADD CONSTRAINT "_ElectionsPage_earlyVotingLocations_A_fkey" FOREIGN KEY ("A") REFERENCES "EarlyVotingLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_earlyVotingLocations" ADD CONSTRAINT "_ElectionsPage_earlyVotingLocations_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionsPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
