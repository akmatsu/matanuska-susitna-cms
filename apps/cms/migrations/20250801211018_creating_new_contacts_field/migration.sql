-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "address" TEXT;

-- CreateTable
CREATE TABLE "ContactListItem" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0,
    "contact" TEXT,

    CONSTRAINT "ContactListItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_newContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "ContactListItem_contact_idx" ON "ContactListItem"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_newContacts_AB_unique" ON "_AssemblyDistrict_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_newContacts_B_index" ON "_AssemblyDistrict_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_newContacts_AB_unique" ON "_AssemblyDistrictVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_newContacts_B_index" ON "_AssemblyDistrictVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_newContacts_AB_unique" ON "_AssemblyDistrictDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_newContacts_B_index" ON "_AssemblyDistrictDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_newContacts_AB_unique" ON "_Board_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_newContacts_B_index" ON "_Board_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_newContacts_AB_unique" ON "_BoardVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_newContacts_B_index" ON "_BoardVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_newContacts_AB_unique" ON "_BoardDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_newContacts_B_index" ON "_BoardDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_newContacts_AB_unique" ON "_Community_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_newContacts_B_index" ON "_Community_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_newContacts_AB_unique" ON "_CommunityVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_newContacts_B_index" ON "_CommunityVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_newContacts_AB_unique" ON "_CommunityDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_newContacts_B_index" ON "_CommunityDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_newContacts_AB_unique" ON "_Facility_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_newContacts_B_index" ON "_Facility_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_newContacts_AB_unique" ON "_FacilityVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_newContacts_B_index" ON "_FacilityVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_newContacts_AB_unique" ON "_FacilityDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_newContacts_B_index" ON "_FacilityDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_newContacts_AB_unique" ON "_OrgUnit_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_newContacts_B_index" ON "_OrgUnit_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_newContacts_AB_unique" ON "_OrgUnitVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_newContacts_B_index" ON "_OrgUnitVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_newContacts_AB_unique" ON "_OrgUnitDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_newContacts_B_index" ON "_OrgUnitDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_newContacts_AB_unique" ON "_Park_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_newContacts_B_index" ON "_Park_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_newContacts_AB_unique" ON "_ParkVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_newContacts_B_index" ON "_ParkVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_newContacts_AB_unique" ON "_ParkDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_newContacts_B_index" ON "_ParkDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_newContacts_AB_unique" ON "_PublicNotice_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_newContacts_B_index" ON "_PublicNotice_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_newContacts_AB_unique" ON "_PublicNoticeVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_newContacts_B_index" ON "_PublicNoticeVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_newContacts_AB_unique" ON "_PublicNoticeDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_newContacts_B_index" ON "_PublicNoticeDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_newContacts_AB_unique" ON "_Service_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_newContacts_B_index" ON "_Service_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_newContacts_AB_unique" ON "_ServiceVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_newContacts_B_index" ON "_ServiceVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_newContacts_AB_unique" ON "_ServiceDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_newContacts_B_index" ON "_ServiceDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_newContacts_AB_unique" ON "_Topic_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_newContacts_B_index" ON "_Topic_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_newContacts_AB_unique" ON "_TopicVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_newContacts_B_index" ON "_TopicVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_newContacts_AB_unique" ON "_TopicDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_newContacts_B_index" ON "_TopicDraft_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_newContacts_AB_unique" ON "_Trail_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_newContacts_B_index" ON "_Trail_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_newContacts_AB_unique" ON "_TrailVersion_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_newContacts_B_index" ON "_TrailVersion_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_newContacts_AB_unique" ON "_TrailDraft_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_newContacts_B_index" ON "_TrailDraft_newContacts"("B");

-- CreateIndex
CREATE INDEX "Contact_address_idx" ON "Contact"("address");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactListItem" ADD CONSTRAINT "ContactListItem_contact_fkey" FOREIGN KEY ("contact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_newContacts" ADD CONSTRAINT "_AssemblyDistrict_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_newContacts" ADD CONSTRAINT "_AssemblyDistrict_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_newContacts" ADD CONSTRAINT "_AssemblyDistrictVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_newContacts" ADD CONSTRAINT "_AssemblyDistrictVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_newContacts" ADD CONSTRAINT "_AssemblyDistrictDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_newContacts" ADD CONSTRAINT "_AssemblyDistrictDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_newContacts" ADD CONSTRAINT "_Board_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_newContacts" ADD CONSTRAINT "_Board_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_newContacts" ADD CONSTRAINT "_BoardVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_newContacts" ADD CONSTRAINT "_BoardVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_newContacts" ADD CONSTRAINT "_BoardDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_newContacts" ADD CONSTRAINT "_BoardDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_newContacts" ADD CONSTRAINT "_Community_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_newContacts" ADD CONSTRAINT "_Community_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_newContacts" ADD CONSTRAINT "_CommunityVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_newContacts" ADD CONSTRAINT "_CommunityVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_newContacts" ADD CONSTRAINT "_CommunityDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_newContacts" ADD CONSTRAINT "_CommunityDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_newContacts" ADD CONSTRAINT "_Facility_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_newContacts" ADD CONSTRAINT "_Facility_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_newContacts" ADD CONSTRAINT "_FacilityVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_newContacts" ADD CONSTRAINT "_FacilityVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_newContacts" ADD CONSTRAINT "_FacilityDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_newContacts" ADD CONSTRAINT "_FacilityDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_newContacts" ADD CONSTRAINT "_OrgUnit_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_newContacts" ADD CONSTRAINT "_OrgUnit_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_newContacts" ADD CONSTRAINT "_OrgUnitVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_newContacts" ADD CONSTRAINT "_OrgUnitVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_newContacts" ADD CONSTRAINT "_OrgUnitDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_newContacts" ADD CONSTRAINT "_OrgUnitDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_newContacts" ADD CONSTRAINT "_Park_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_newContacts" ADD CONSTRAINT "_Park_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_newContacts" ADD CONSTRAINT "_ParkVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_newContacts" ADD CONSTRAINT "_ParkVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_newContacts" ADD CONSTRAINT "_ParkDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_newContacts" ADD CONSTRAINT "_ParkDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_newContacts" ADD CONSTRAINT "_PublicNotice_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_newContacts" ADD CONSTRAINT "_PublicNotice_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_newContacts" ADD CONSTRAINT "_PublicNoticeVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_newContacts" ADD CONSTRAINT "_PublicNoticeVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_newContacts" ADD CONSTRAINT "_PublicNoticeDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_newContacts" ADD CONSTRAINT "_PublicNoticeDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_newContacts" ADD CONSTRAINT "_Service_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_newContacts" ADD CONSTRAINT "_Service_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_newContacts" ADD CONSTRAINT "_ServiceVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_newContacts" ADD CONSTRAINT "_ServiceVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_newContacts" ADD CONSTRAINT "_ServiceDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_newContacts" ADD CONSTRAINT "_ServiceDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_newContacts" ADD CONSTRAINT "_Topic_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_newContacts" ADD CONSTRAINT "_Topic_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_newContacts" ADD CONSTRAINT "_TopicVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_newContacts" ADD CONSTRAINT "_TopicVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_newContacts" ADD CONSTRAINT "_TopicDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_newContacts" ADD CONSTRAINT "_TopicDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_newContacts" ADD CONSTRAINT "_Trail_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_newContacts" ADD CONSTRAINT "_Trail_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_newContacts" ADD CONSTRAINT "_TrailVersion_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_newContacts" ADD CONSTRAINT "_TrailVersion_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_newContacts" ADD CONSTRAINT "_TrailDraft_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_newContacts" ADD CONSTRAINT "_TrailDraft_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;