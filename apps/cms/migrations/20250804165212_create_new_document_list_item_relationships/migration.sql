-- CreateTable
CREATE TABLE "DocumentListItem" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "DocumentListItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BoardPage_newContacts" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DocumentListItem_document" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BoardPage_newContacts_AB_unique" ON "_BoardPage_newContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardPage_newContacts_B_index" ON "_BoardPage_newContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_newDocuments_AB_unique" ON "_AssemblyDistrict_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_newDocuments_B_index" ON "_AssemblyDistrict_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_newDocuments_AB_unique" ON "_AssemblyDistrictVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_newDocuments_B_index" ON "_AssemblyDistrictVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_newDocuments_AB_unique" ON "_AssemblyDistrictDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_newDocuments_B_index" ON "_AssemblyDistrictDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_newDocuments_AB_unique" ON "_Board_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_newDocuments_B_index" ON "_Board_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_newDocuments_AB_unique" ON "_BoardVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_newDocuments_B_index" ON "_BoardVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_newDocuments_AB_unique" ON "_BoardDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_newDocuments_B_index" ON "_BoardDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_newDocuments_AB_unique" ON "_Community_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_newDocuments_B_index" ON "_Community_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_newDocuments_AB_unique" ON "_CommunityVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_newDocuments_B_index" ON "_CommunityVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_newDocuments_AB_unique" ON "_CommunityDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_newDocuments_B_index" ON "_CommunityDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DocumentListItem_document_AB_unique" ON "_DocumentListItem_document"("A", "B");

-- CreateIndex
CREATE INDEX "_DocumentListItem_document_B_index" ON "_DocumentListItem_document"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_newDocuments_AB_unique" ON "_Facility_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_newDocuments_B_index" ON "_Facility_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_newDocuments_AB_unique" ON "_FacilityVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_newDocuments_B_index" ON "_FacilityVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_newDocuments_AB_unique" ON "_FacilityDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_newDocuments_B_index" ON "_FacilityDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_newDocuments_AB_unique" ON "_OrgUnit_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_newDocuments_B_index" ON "_OrgUnit_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_newDocuments_AB_unique" ON "_OrgUnitVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_newDocuments_B_index" ON "_OrgUnitVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_newDocuments_AB_unique" ON "_OrgUnitDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_newDocuments_B_index" ON "_OrgUnitDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_newDocuments_AB_unique" ON "_Park_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_newDocuments_B_index" ON "_Park_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_newDocuments_AB_unique" ON "_ParkVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_newDocuments_B_index" ON "_ParkVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_newDocuments_AB_unique" ON "_ParkDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_newDocuments_B_index" ON "_ParkDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_newDocuments_AB_unique" ON "_PublicNotice_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_newDocuments_B_index" ON "_PublicNotice_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_newDocuments_AB_unique" ON "_PublicNoticeVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_newDocuments_B_index" ON "_PublicNoticeVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_newDocuments_AB_unique" ON "_PublicNoticeDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_newDocuments_B_index" ON "_PublicNoticeDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_newDocuments_AB_unique" ON "_Service_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_newDocuments_B_index" ON "_Service_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_newDocuments_AB_unique" ON "_ServiceVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_newDocuments_B_index" ON "_ServiceVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_newDocuments_AB_unique" ON "_ServiceDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_newDocuments_B_index" ON "_ServiceDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_newDocuments_AB_unique" ON "_Topic_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_newDocuments_B_index" ON "_Topic_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_newDocuments_AB_unique" ON "_TopicVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_newDocuments_B_index" ON "_TopicVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_newDocuments_AB_unique" ON "_TopicDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_newDocuments_B_index" ON "_TopicDraft_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_newDocuments_AB_unique" ON "_Trail_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_newDocuments_B_index" ON "_Trail_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_newDocuments_AB_unique" ON "_TrailVersion_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_newDocuments_B_index" ON "_TrailVersion_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_newDocuments_AB_unique" ON "_TrailDraft_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_newDocuments_B_index" ON "_TrailDraft_newDocuments"("B");

-- AddForeignKey
ALTER TABLE "_BoardPage_newContacts" ADD CONSTRAINT "_BoardPage_newContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_newContacts" ADD CONSTRAINT "_BoardPage_newContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_newDocuments" ADD CONSTRAINT "_AssemblyDistrict_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_newDocuments" ADD CONSTRAINT "_AssemblyDistrict_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_newDocuments" ADD CONSTRAINT "_AssemblyDistrictVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_newDocuments" ADD CONSTRAINT "_AssemblyDistrictVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_newDocuments" ADD CONSTRAINT "_AssemblyDistrictDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_newDocuments" ADD CONSTRAINT "_AssemblyDistrictDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_newDocuments" ADD CONSTRAINT "_Board_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_newDocuments" ADD CONSTRAINT "_Board_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_newDocuments" ADD CONSTRAINT "_BoardVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_newDocuments" ADD CONSTRAINT "_BoardVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_newDocuments" ADD CONSTRAINT "_BoardDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_newDocuments" ADD CONSTRAINT "_BoardDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_newDocuments" ADD CONSTRAINT "_Community_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_newDocuments" ADD CONSTRAINT "_Community_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_newDocuments" ADD CONSTRAINT "_CommunityVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_newDocuments" ADD CONSTRAINT "_CommunityVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_newDocuments" ADD CONSTRAINT "_CommunityDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_newDocuments" ADD CONSTRAINT "_CommunityDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentListItem_document" ADD CONSTRAINT "_DocumentListItem_document_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentListItem_document" ADD CONSTRAINT "_DocumentListItem_document_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_newDocuments" ADD CONSTRAINT "_Facility_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_newDocuments" ADD CONSTRAINT "_Facility_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_newDocuments" ADD CONSTRAINT "_FacilityVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_newDocuments" ADD CONSTRAINT "_FacilityVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_newDocuments" ADD CONSTRAINT "_FacilityDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_newDocuments" ADD CONSTRAINT "_FacilityDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_newDocuments" ADD CONSTRAINT "_OrgUnit_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_newDocuments" ADD CONSTRAINT "_OrgUnit_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_newDocuments" ADD CONSTRAINT "_OrgUnitVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_newDocuments" ADD CONSTRAINT "_OrgUnitVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_newDocuments" ADD CONSTRAINT "_OrgUnitDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_newDocuments" ADD CONSTRAINT "_OrgUnitDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_newDocuments" ADD CONSTRAINT "_Park_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_newDocuments" ADD CONSTRAINT "_Park_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_newDocuments" ADD CONSTRAINT "_ParkVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_newDocuments" ADD CONSTRAINT "_ParkVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_newDocuments" ADD CONSTRAINT "_ParkDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_newDocuments" ADD CONSTRAINT "_ParkDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_newDocuments" ADD CONSTRAINT "_PublicNotice_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_newDocuments" ADD CONSTRAINT "_PublicNotice_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_newDocuments" ADD CONSTRAINT "_PublicNoticeVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_newDocuments" ADD CONSTRAINT "_PublicNoticeVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_newDocuments" ADD CONSTRAINT "_PublicNoticeDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_newDocuments" ADD CONSTRAINT "_PublicNoticeDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_newDocuments" ADD CONSTRAINT "_Service_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_newDocuments" ADD CONSTRAINT "_Service_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_newDocuments" ADD CONSTRAINT "_ServiceVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_newDocuments" ADD CONSTRAINT "_ServiceVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_newDocuments" ADD CONSTRAINT "_ServiceDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_newDocuments" ADD CONSTRAINT "_ServiceDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_newDocuments" ADD CONSTRAINT "_Topic_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_newDocuments" ADD CONSTRAINT "_Topic_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_newDocuments" ADD CONSTRAINT "_TopicVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_newDocuments" ADD CONSTRAINT "_TopicVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_newDocuments" ADD CONSTRAINT "_TopicDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_newDocuments" ADD CONSTRAINT "_TopicDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_newDocuments" ADD CONSTRAINT "_Trail_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_newDocuments" ADD CONSTRAINT "_Trail_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_newDocuments" ADD CONSTRAINT "_TrailVersion_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_newDocuments" ADD CONSTRAINT "_TrailVersion_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_newDocuments" ADD CONSTRAINT "_TrailDraft_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_newDocuments" ADD CONSTRAINT "_TrailDraft_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;
