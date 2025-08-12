-- CreateTable
CREATE TABLE "_AssemblyDistrict_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_events_AB_unique" ON "_AssemblyDistrict_events"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_events_B_index" ON "_AssemblyDistrict_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_events_AB_unique" ON "_AssemblyDistrictVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_events_B_index" ON "_AssemblyDistrictVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_events_AB_unique" ON "_AssemblyDistrictDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_events_B_index" ON "_AssemblyDistrictDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_events_AB_unique" ON "_Board_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_events_B_index" ON "_Board_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_events_AB_unique" ON "_BoardVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_events_B_index" ON "_BoardVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_events_AB_unique" ON "_BoardDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_events_B_index" ON "_BoardDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_events_AB_unique" ON "_Community_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_events_B_index" ON "_Community_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_events_AB_unique" ON "_CommunityVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_events_B_index" ON "_CommunityVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_events_AB_unique" ON "_CommunityDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_events_B_index" ON "_CommunityDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_events_AB_unique" ON "_Event_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_events_B_index" ON "_Event_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_events_AB_unique" ON "_Facility_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_events_B_index" ON "_Facility_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_events_AB_unique" ON "_FacilityVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_events_B_index" ON "_FacilityVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_events_AB_unique" ON "_FacilityDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_events_B_index" ON "_FacilityDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_events_AB_unique" ON "_OrgUnit_events"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_events_B_index" ON "_OrgUnit_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_events_AB_unique" ON "_OrgUnitVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_events_B_index" ON "_OrgUnitVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_events_AB_unique" ON "_OrgUnitDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_events_B_index" ON "_OrgUnitDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_events_AB_unique" ON "_Park_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_events_B_index" ON "_Park_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_events_AB_unique" ON "_ParkVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_events_B_index" ON "_ParkVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_events_AB_unique" ON "_ParkDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_events_B_index" ON "_ParkDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_events_AB_unique" ON "_PublicNotice_events"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_events_B_index" ON "_PublicNotice_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_events_AB_unique" ON "_PublicNoticeVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_events_B_index" ON "_PublicNoticeVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_events_AB_unique" ON "_PublicNoticeDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_events_B_index" ON "_PublicNoticeDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_events_AB_unique" ON "_Service_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_events_B_index" ON "_Service_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_events_AB_unique" ON "_ServiceVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_events_B_index" ON "_ServiceVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_events_AB_unique" ON "_ServiceDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_events_B_index" ON "_ServiceDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_events_AB_unique" ON "_Topic_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_events_B_index" ON "_Topic_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_events_AB_unique" ON "_TopicVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_events_B_index" ON "_TopicVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_events_AB_unique" ON "_TopicDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_events_B_index" ON "_TopicDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_events_AB_unique" ON "_Trail_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_events_B_index" ON "_Trail_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_events_AB_unique" ON "_TrailVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_events_B_index" ON "_TrailVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_events_AB_unique" ON "_TrailDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_events_B_index" ON "_TrailDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_events_AB_unique" ON "_EventDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_events_B_index" ON "_EventDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_events_AB_unique" ON "_EventVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_events_B_index" ON "_EventVersion_events"("B");

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_events" ADD CONSTRAINT "_AssemblyDistrict_events_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_events" ADD CONSTRAINT "_AssemblyDistrict_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_events" ADD CONSTRAINT "_AssemblyDistrictVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_events" ADD CONSTRAINT "_AssemblyDistrictVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_events" ADD CONSTRAINT "_AssemblyDistrictDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_events" ADD CONSTRAINT "_AssemblyDistrictDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_events" ADD CONSTRAINT "_Board_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_events" ADD CONSTRAINT "_Board_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_events" ADD CONSTRAINT "_BoardVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_events" ADD CONSTRAINT "_BoardVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_events" ADD CONSTRAINT "_BoardDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_events" ADD CONSTRAINT "_BoardDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_events" ADD CONSTRAINT "_Community_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_events" ADD CONSTRAINT "_Community_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_events" ADD CONSTRAINT "_CommunityVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_events" ADD CONSTRAINT "_CommunityVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_events" ADD CONSTRAINT "_CommunityDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_events" ADD CONSTRAINT "_CommunityDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_events" ADD CONSTRAINT "_Event_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_events" ADD CONSTRAINT "_Event_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_events" ADD CONSTRAINT "_Facility_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_events" ADD CONSTRAINT "_Facility_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_events" ADD CONSTRAINT "_FacilityVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_events" ADD CONSTRAINT "_FacilityVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_events" ADD CONSTRAINT "_FacilityDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_events" ADD CONSTRAINT "_FacilityDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_events" ADD CONSTRAINT "_OrgUnit_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_events" ADD CONSTRAINT "_OrgUnit_events_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_events" ADD CONSTRAINT "_OrgUnitVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_events" ADD CONSTRAINT "_OrgUnitVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_events" ADD CONSTRAINT "_OrgUnitDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_events" ADD CONSTRAINT "_OrgUnitDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_events" ADD CONSTRAINT "_Park_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_events" ADD CONSTRAINT "_Park_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_events" ADD CONSTRAINT "_ParkVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_events" ADD CONSTRAINT "_ParkVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_events" ADD CONSTRAINT "_ParkDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_events" ADD CONSTRAINT "_ParkDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_events" ADD CONSTRAINT "_PublicNotice_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_events" ADD CONSTRAINT "_PublicNotice_events_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_events" ADD CONSTRAINT "_PublicNoticeVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_events" ADD CONSTRAINT "_PublicNoticeVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_events" ADD CONSTRAINT "_PublicNoticeDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_events" ADD CONSTRAINT "_PublicNoticeDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_events" ADD CONSTRAINT "_Service_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_events" ADD CONSTRAINT "_Service_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_events" ADD CONSTRAINT "_ServiceVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_events" ADD CONSTRAINT "_ServiceVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_events" ADD CONSTRAINT "_ServiceDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_events" ADD CONSTRAINT "_ServiceDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_events" ADD CONSTRAINT "_Topic_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_events" ADD CONSTRAINT "_Topic_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_events" ADD CONSTRAINT "_TopicVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_events" ADD CONSTRAINT "_TopicVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_events" ADD CONSTRAINT "_TopicDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_events" ADD CONSTRAINT "_TopicDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_events" ADD CONSTRAINT "_Trail_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_events" ADD CONSTRAINT "_Trail_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_events" ADD CONSTRAINT "_TrailVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_events" ADD CONSTRAINT "_TrailVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_events" ADD CONSTRAINT "_TrailDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_events" ADD CONSTRAINT "_TrailDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_events" ADD CONSTRAINT "_EventDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_events" ADD CONSTRAINT "_EventDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_events" ADD CONSTRAINT "_EventVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_events" ADD CONSTRAINT "_EventVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
