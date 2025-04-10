-- CreateTable
CREATE TABLE "HomePage" (
    "id" INTEGER NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "toolbeltOne" TEXT,
    "toolbeltTwo" TEXT,
    "toolbeltThree" TEXT,
    "toolbeltFour" TEXT,
    "highlightOne" TEXT,
    "highlightTwo" TEXT,
    "highlightThree" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HomePage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PublicNotice_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HomePage_title_key" ON "HomePage"("title");

-- CreateIndex
CREATE INDEX "HomePage_toolbeltOne_idx" ON "HomePage"("toolbeltOne");

-- CreateIndex
CREATE INDEX "HomePage_toolbeltTwo_idx" ON "HomePage"("toolbeltTwo");

-- CreateIndex
CREATE INDEX "HomePage_toolbeltThree_idx" ON "HomePage"("toolbeltThree");

-- CreateIndex
CREATE INDEX "HomePage_toolbeltFour_idx" ON "HomePage"("toolbeltFour");

-- CreateIndex
CREATE INDEX "HomePage_highlightOne_idx" ON "HomePage"("highlightOne");

-- CreateIndex
CREATE INDEX "HomePage_highlightTwo_idx" ON "HomePage"("highlightTwo");

-- CreateIndex
CREATE INDEX "HomePage_highlightThree_idx" ON "HomePage"("highlightThree");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_assemblyDistricts_AB_unique" ON "_PublicNotice_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_assemblyDistricts_B_index" ON "_PublicNotice_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_communities_AB_unique" ON "_PublicNotice_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_communities_B_index" ON "_PublicNotice_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_facilities_AB_unique" ON "_PublicNotice_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_facilities_B_index" ON "_PublicNotice_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_orgUnits_AB_unique" ON "_PublicNotice_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_orgUnits_B_index" ON "_PublicNotice_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_parks_AB_unique" ON "_PublicNotice_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_parks_B_index" ON "_PublicNotice_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_services_AB_unique" ON "_PublicNotice_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_services_B_index" ON "_PublicNotice_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_trails_AB_unique" ON "_PublicNotice_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_trails_B_index" ON "_PublicNotice_trails"("B");

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_toolbeltOne_fkey" FOREIGN KEY ("toolbeltOne") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_toolbeltTwo_fkey" FOREIGN KEY ("toolbeltTwo") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_toolbeltThree_fkey" FOREIGN KEY ("toolbeltThree") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_toolbeltFour_fkey" FOREIGN KEY ("toolbeltFour") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_highlightOne_fkey" FOREIGN KEY ("highlightOne") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_highlightTwo_fkey" FOREIGN KEY ("highlightTwo") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePage" ADD CONSTRAINT "HomePage_highlightThree_fkey" FOREIGN KEY ("highlightThree") REFERENCES "Highlight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_assemblyDistricts" ADD CONSTRAINT "_PublicNotice_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_assemblyDistricts" ADD CONSTRAINT "_PublicNotice_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_communities" ADD CONSTRAINT "_PublicNotice_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_communities" ADD CONSTRAINT "_PublicNotice_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_facilities" ADD CONSTRAINT "_PublicNotice_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_facilities" ADD CONSTRAINT "_PublicNotice_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_orgUnits" ADD CONSTRAINT "_PublicNotice_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_orgUnits" ADD CONSTRAINT "_PublicNotice_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_parks" ADD CONSTRAINT "_PublicNotice_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_parks" ADD CONSTRAINT "_PublicNotice_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_services" ADD CONSTRAINT "_PublicNotice_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_services" ADD CONSTRAINT "_PublicNotice_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_trails" ADD CONSTRAINT "_PublicNotice_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_trails" ADD CONSTRAINT "_PublicNotice_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
