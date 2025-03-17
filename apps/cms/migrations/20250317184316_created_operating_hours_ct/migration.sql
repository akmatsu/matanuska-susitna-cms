-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "atv" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "biking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "crossCountrySkiing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "difficulty" TEXT,
ADD COLUMN     "dirtBiking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dogWalking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "elevationChange" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "fall" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "frisbeeGolf" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "groomed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hiking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "horsebackRiding" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "length" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mushing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "open" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "running" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "snowMachining" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "snowshoeing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "spring" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "summer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "winter" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "OperatingHour" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "open" TEXT NOT NULL DEFAULT '',
    "close" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "OperatingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Facility_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_hours_AB_unique" ON "_Facility_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_hours_B_index" ON "_Facility_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_hours_AB_unique" ON "_Park_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_hours_B_index" ON "_Park_hours"("B");

-- AddForeignKey
ALTER TABLE "_Facility_hours" ADD CONSTRAINT "_Facility_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_hours" ADD CONSTRAINT "_Facility_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_hours" ADD CONSTRAINT "_Park_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_hours" ADD CONSTRAINT "_Park_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;
