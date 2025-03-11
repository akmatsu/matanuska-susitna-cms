-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "park" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Park" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Park_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trail" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "park" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Contact_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Contact_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Contact_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Tag_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Facility_slug_key" ON "Facility"("slug");

-- CreateIndex
CREATE INDEX "Facility_title_idx" ON "Facility"("title");

-- CreateIndex
CREATE INDEX "Facility_owner_idx" ON "Facility"("owner");

-- CreateIndex
CREATE INDEX "Facility_park_idx" ON "Facility"("park");

-- CreateIndex
CREATE UNIQUE INDEX "Park_slug_key" ON "Park"("slug");

-- CreateIndex
CREATE INDEX "Park_title_idx" ON "Park"("title");

-- CreateIndex
CREATE INDEX "Park_owner_idx" ON "Park"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "Trail_slug_key" ON "Trail"("slug");

-- CreateIndex
CREATE INDEX "Trail_title_idx" ON "Trail"("title");

-- CreateIndex
CREATE INDEX "Trail_owner_idx" ON "Trail"("owner");

-- CreateIndex
CREATE INDEX "Trail_park_idx" ON "Trail"("park");

-- CreateIndex
CREATE UNIQUE INDEX "_Contact_facilities_AB_unique" ON "_Contact_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_Contact_facilities_B_index" ON "_Contact_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Contact_parks_AB_unique" ON "_Contact_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_Contact_parks_B_index" ON "_Contact_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Contact_trails_AB_unique" ON "_Contact_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Contact_trails_B_index" ON "_Contact_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_tags_AB_unique" ON "_Facility_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_tags_B_index" ON "_Facility_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_services_AB_unique" ON "_Facility_services"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_services_B_index" ON "_Facility_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_tags_AB_unique" ON "_Park_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_tags_B_index" ON "_Park_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_services_AB_unique" ON "_Park_services"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_services_B_index" ON "_Park_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_trails_AB_unique" ON "_Service_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_trails_B_index" ON "_Service_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Tag_trails_AB_unique" ON "_Tag_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Tag_trails_B_index" ON "_Tag_trails"("B");

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_facilities" ADD CONSTRAINT "_Contact_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_facilities" ADD CONSTRAINT "_Contact_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_parks" ADD CONSTRAINT "_Contact_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_parks" ADD CONSTRAINT "_Contact_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_trails" ADD CONSTRAINT "_Contact_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_trails" ADD CONSTRAINT "_Contact_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_tags" ADD CONSTRAINT "_Facility_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_tags" ADD CONSTRAINT "_Facility_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_services" ADD CONSTRAINT "_Facility_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_services" ADD CONSTRAINT "_Facility_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_tags" ADD CONSTRAINT "_Park_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_tags" ADD CONSTRAINT "_Park_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_services" ADD CONSTRAINT "_Park_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_services" ADD CONSTRAINT "_Park_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_trails" ADD CONSTRAINT "_Service_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_trails" ADD CONSTRAINT "_Service_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Tag_trails" ADD CONSTRAINT "_Tag_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Tag_trails" ADD CONSTRAINT "_Tag_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
