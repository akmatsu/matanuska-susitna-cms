-- CreateTable
CREATE TABLE "_Event_landingPages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_landingPages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_landingPages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Event_landingPages_AB_unique" ON "_Event_landingPages"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_landingPages_B_index" ON "_Event_landingPages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_landingPages_AB_unique" ON "_EventDraft_landingPages"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_landingPages_B_index" ON "_EventDraft_landingPages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_landingPages_AB_unique" ON "_EventVersion_landingPages"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_landingPages_B_index" ON "_EventVersion_landingPages"("B");

-- AddForeignKey
ALTER TABLE "_Event_landingPages" ADD CONSTRAINT "_Event_landingPages_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_landingPages" ADD CONSTRAINT "_Event_landingPages_B_fkey" FOREIGN KEY ("B") REFERENCES "LandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_landingPages" ADD CONSTRAINT "_EventDraft_landingPages_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_landingPages" ADD CONSTRAINT "_EventDraft_landingPages_B_fkey" FOREIGN KEY ("B") REFERENCES "LandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_landingPages" ADD CONSTRAINT "_EventVersion_landingPages_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_landingPages" ADD CONSTRAINT "_EventVersion_landingPages_B_fkey" FOREIGN KEY ("B") REFERENCES "LandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
