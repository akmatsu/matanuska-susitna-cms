-- CreateTable
CREATE TABLE "_Facility_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_userGroups_AB_unique" ON "_Facility_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_userGroups_B_index" ON "_Facility_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_userGroups_AB_unique" ON "_Park_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_userGroups_B_index" ON "_Park_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_userGroups_AB_unique" ON "_Trail_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_userGroups_B_index" ON "_Trail_userGroups"("B");

-- AddForeignKey
ALTER TABLE "_Facility_userGroups" ADD CONSTRAINT "_Facility_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_userGroups" ADD CONSTRAINT "_Facility_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_userGroups" ADD CONSTRAINT "_Park_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_userGroups" ADD CONSTRAINT "_Park_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_userGroups" ADD CONSTRAINT "_Trail_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_userGroups" ADD CONSTRAINT "_Trail_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
