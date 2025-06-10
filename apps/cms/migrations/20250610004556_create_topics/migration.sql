-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publish" TEXT,

    CONSTRAINT "TopicDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "republish" TEXT,

    CONSTRAINT "TopicVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_highlights" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_highlights" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_highlights" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_title_key" ON "Topic"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_slug_key" ON "Topic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_currentVersion_key" ON "Topic"("currentVersion");

-- CreateIndex
CREATE INDEX "Topic_owner_idx" ON "Topic"("owner");

-- CreateIndex
CREATE INDEX "TopicDraft_original_idx" ON "TopicDraft"("original");

-- CreateIndex
CREATE INDEX "TopicDraft_owner_idx" ON "TopicDraft"("owner");

-- CreateIndex
CREATE INDEX "TopicVersion_original_idx" ON "TopicVersion"("original");

-- CreateIndex
CREATE INDEX "TopicVersion_owner_idx" ON "TopicVersion"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_topics_AB_unique" ON "_AssemblyDistrict_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_topics_B_index" ON "_AssemblyDistrict_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_districts_AB_unique" ON "_TopicDraft_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_districts_B_index" ON "_TopicDraft_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_districts_AB_unique" ON "_TopicVersion_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_districts_B_index" ON "_TopicVersion_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_topics_AB_unique" ON "_AssemblyDistrictDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_topics_B_index" ON "_AssemblyDistrictDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_topics_AB_unique" ON "_AssemblyDistrictVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_topics_B_index" ON "_AssemblyDistrictVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_topics_AB_unique" ON "_Board_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_topics_B_index" ON "_Board_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_boards_AB_unique" ON "_TopicDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_boards_B_index" ON "_TopicDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_boards_AB_unique" ON "_TopicVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_boards_B_index" ON "_TopicVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_topics_AB_unique" ON "_BoardDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_topics_B_index" ON "_BoardDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_topics_AB_unique" ON "_BoardVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_topics_B_index" ON "_BoardVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_topics_AB_unique" ON "_Community_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_topics_B_index" ON "_Community_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_communities_AB_unique" ON "_TopicDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_communities_B_index" ON "_TopicDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_communities_AB_unique" ON "_TopicVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_communities_B_index" ON "_TopicVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_topics_AB_unique" ON "_CommunityDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_topics_B_index" ON "_CommunityDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_topics_AB_unique" ON "_CommunityVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_topics_B_index" ON "_CommunityVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_contacts_AB_unique" ON "_Topic_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_contacts_B_index" ON "_Topic_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_contacts_AB_unique" ON "_TopicDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_contacts_B_index" ON "_TopicDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_contacts_AB_unique" ON "_TopicVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_contacts_B_index" ON "_TopicVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_documents_AB_unique" ON "_Topic_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_documents_B_index" ON "_Topic_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_documents_AB_unique" ON "_TopicDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_documents_B_index" ON "_TopicDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_documents_AB_unique" ON "_TopicVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_documents_B_index" ON "_TopicVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_topics_AB_unique" ON "_Facility_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_topics_B_index" ON "_Facility_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_facilities_AB_unique" ON "_TopicDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_facilities_B_index" ON "_TopicDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_facilities_AB_unique" ON "_TopicVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_facilities_B_index" ON "_TopicVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_topics_AB_unique" ON "_FacilityDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_topics_B_index" ON "_FacilityDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_topics_AB_unique" ON "_FacilityVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_topics_B_index" ON "_FacilityVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_userGroups_AB_unique" ON "_Topic_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_userGroups_B_index" ON "_Topic_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_trails_AB_unique" ON "_Topic_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_trails_B_index" ON "_Topic_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_topics_AB_unique" ON "_TrailDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_topics_B_index" ON "_TrailDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_topics_AB_unique" ON "_TrailVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_topics_B_index" ON "_TrailVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_userGroups_AB_unique" ON "_TopicDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_userGroups_B_index" ON "_TopicDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_trails_AB_unique" ON "_TopicDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_trails_B_index" ON "_TopicDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_userGroups_AB_unique" ON "_TopicVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_userGroups_B_index" ON "_TopicVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_trails_AB_unique" ON "_TopicVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_trails_B_index" ON "_TopicVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_highlights_AB_unique" ON "_Topic_highlights"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_highlights_B_index" ON "_Topic_highlights"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_highlights_AB_unique" ON "_TopicDraft_highlights"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_highlights_B_index" ON "_TopicDraft_highlights"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_highlights_AB_unique" ON "_TopicVersion_highlights"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_highlights_B_index" ON "_TopicVersion_highlights"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_actions_AB_unique" ON "_Topic_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_actions_B_index" ON "_Topic_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_actions_AB_unique" ON "_TopicDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_actions_B_index" ON "_TopicDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_actions_AB_unique" ON "_TopicVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_actions_B_index" ON "_TopicVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_topics_AB_unique" ON "_OrgUnit_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_topics_B_index" ON "_OrgUnit_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_orgUnits_AB_unique" ON "_TopicDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_orgUnits_B_index" ON "_TopicDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_orgUnits_AB_unique" ON "_TopicVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_orgUnits_B_index" ON "_TopicVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_topics_AB_unique" ON "_OrgUnitDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_topics_B_index" ON "_OrgUnitDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_topics_AB_unique" ON "_OrgUnitVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_topics_B_index" ON "_OrgUnitVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_topics_AB_unique" ON "_Park_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_topics_B_index" ON "_Park_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_parks_AB_unique" ON "_TopicDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_parks_B_index" ON "_TopicDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_parks_AB_unique" ON "_TopicVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_parks_B_index" ON "_TopicVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_topics_AB_unique" ON "_ParkDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_topics_B_index" ON "_ParkDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_topics_AB_unique" ON "_ParkVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_topics_B_index" ON "_ParkVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_topics_AB_unique" ON "_PublicNotice_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_topics_B_index" ON "_PublicNotice_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_publicNotices_AB_unique" ON "_TopicDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_publicNotices_B_index" ON "_TopicDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_publicNotices_AB_unique" ON "_TopicVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_publicNotices_B_index" ON "_TopicVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_topics_AB_unique" ON "_PublicNoticeDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_topics_B_index" ON "_PublicNoticeDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_topics_AB_unique" ON "_PublicNoticeVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_topics_B_index" ON "_PublicNoticeVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_topics_AB_unique" ON "_Service_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_topics_B_index" ON "_Service_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_services_AB_unique" ON "_TopicDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_services_B_index" ON "_TopicDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_services_AB_unique" ON "_TopicVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_services_B_index" ON "_TopicVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_topics_AB_unique" ON "_ServiceDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_topics_B_index" ON "_ServiceDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_topics_AB_unique" ON "_ServiceVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_topics_B_index" ON "_ServiceVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_tags_AB_unique" ON "_Topic_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_tags_B_index" ON "_Topic_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_tags_AB_unique" ON "_TopicDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_tags_B_index" ON "_TopicDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_tags_AB_unique" ON "_TopicVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_tags_B_index" ON "_TopicVersion_tags"("B");

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "TopicVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicDraft" ADD CONSTRAINT "TopicDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicDraft" ADD CONSTRAINT "TopicDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicVersion" ADD CONSTRAINT "TopicVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicVersion" ADD CONSTRAINT "TopicVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_topics" ADD CONSTRAINT "_AssemblyDistrict_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_topics" ADD CONSTRAINT "_AssemblyDistrict_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_districts" ADD CONSTRAINT "_TopicDraft_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_districts" ADD CONSTRAINT "_TopicDraft_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_districts" ADD CONSTRAINT "_TopicVersion_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_districts" ADD CONSTRAINT "_TopicVersion_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_topics" ADD CONSTRAINT "_AssemblyDistrictDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_topics" ADD CONSTRAINT "_AssemblyDistrictDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_topics" ADD CONSTRAINT "_AssemblyDistrictVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_topics" ADD CONSTRAINT "_AssemblyDistrictVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_topics" ADD CONSTRAINT "_Board_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_topics" ADD CONSTRAINT "_Board_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_boards" ADD CONSTRAINT "_TopicDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_boards" ADD CONSTRAINT "_TopicDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_boards" ADD CONSTRAINT "_TopicVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_boards" ADD CONSTRAINT "_TopicVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_topics" ADD CONSTRAINT "_BoardDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_topics" ADD CONSTRAINT "_BoardDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_topics" ADD CONSTRAINT "_BoardVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_topics" ADD CONSTRAINT "_BoardVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_topics" ADD CONSTRAINT "_Community_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_topics" ADD CONSTRAINT "_Community_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_communities" ADD CONSTRAINT "_TopicDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_communities" ADD CONSTRAINT "_TopicDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_communities" ADD CONSTRAINT "_TopicVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_communities" ADD CONSTRAINT "_TopicVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_topics" ADD CONSTRAINT "_CommunityDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_topics" ADD CONSTRAINT "_CommunityDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_topics" ADD CONSTRAINT "_CommunityVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_topics" ADD CONSTRAINT "_CommunityVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_contacts" ADD CONSTRAINT "_Topic_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_contacts" ADD CONSTRAINT "_Topic_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_contacts" ADD CONSTRAINT "_TopicDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_contacts" ADD CONSTRAINT "_TopicDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_contacts" ADD CONSTRAINT "_TopicVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_contacts" ADD CONSTRAINT "_TopicVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_documents" ADD CONSTRAINT "_Topic_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_documents" ADD CONSTRAINT "_Topic_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_documents" ADD CONSTRAINT "_TopicDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_documents" ADD CONSTRAINT "_TopicDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_documents" ADD CONSTRAINT "_TopicVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_documents" ADD CONSTRAINT "_TopicVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_topics" ADD CONSTRAINT "_Facility_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_topics" ADD CONSTRAINT "_Facility_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_facilities" ADD CONSTRAINT "_TopicDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_facilities" ADD CONSTRAINT "_TopicDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_facilities" ADD CONSTRAINT "_TopicVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_facilities" ADD CONSTRAINT "_TopicVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_topics" ADD CONSTRAINT "_FacilityDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_topics" ADD CONSTRAINT "_FacilityDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_topics" ADD CONSTRAINT "_FacilityVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_topics" ADD CONSTRAINT "_FacilityVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_userGroups" ADD CONSTRAINT "_Topic_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_userGroups" ADD CONSTRAINT "_Topic_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_trails" ADD CONSTRAINT "_Topic_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_trails" ADD CONSTRAINT "_Topic_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_topics" ADD CONSTRAINT "_TrailDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_topics" ADD CONSTRAINT "_TrailDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_topics" ADD CONSTRAINT "_TrailVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_topics" ADD CONSTRAINT "_TrailVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_userGroups" ADD CONSTRAINT "_TopicDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_userGroups" ADD CONSTRAINT "_TopicDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_trails" ADD CONSTRAINT "_TopicDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_trails" ADD CONSTRAINT "_TopicDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_userGroups" ADD CONSTRAINT "_TopicVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_userGroups" ADD CONSTRAINT "_TopicVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_trails" ADD CONSTRAINT "_TopicVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_trails" ADD CONSTRAINT "_TopicVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_highlights" ADD CONSTRAINT "_Topic_highlights_A_fkey" FOREIGN KEY ("A") REFERENCES "Highlight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_highlights" ADD CONSTRAINT "_Topic_highlights_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_highlights" ADD CONSTRAINT "_TopicDraft_highlights_A_fkey" FOREIGN KEY ("A") REFERENCES "Highlight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_highlights" ADD CONSTRAINT "_TopicDraft_highlights_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_highlights" ADD CONSTRAINT "_TopicVersion_highlights_A_fkey" FOREIGN KEY ("A") REFERENCES "Highlight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_highlights" ADD CONSTRAINT "_TopicVersion_highlights_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_actions" ADD CONSTRAINT "_Topic_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_actions" ADD CONSTRAINT "_Topic_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_actions" ADD CONSTRAINT "_TopicDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_actions" ADD CONSTRAINT "_TopicDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_actions" ADD CONSTRAINT "_TopicVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_actions" ADD CONSTRAINT "_TopicVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_topics" ADD CONSTRAINT "_OrgUnit_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_topics" ADD CONSTRAINT "_OrgUnit_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_orgUnits" ADD CONSTRAINT "_TopicDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_orgUnits" ADD CONSTRAINT "_TopicDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_orgUnits" ADD CONSTRAINT "_TopicVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_orgUnits" ADD CONSTRAINT "_TopicVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_topics" ADD CONSTRAINT "_OrgUnitDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_topics" ADD CONSTRAINT "_OrgUnitDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_topics" ADD CONSTRAINT "_OrgUnitVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_topics" ADD CONSTRAINT "_OrgUnitVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_topics" ADD CONSTRAINT "_Park_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_topics" ADD CONSTRAINT "_Park_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_parks" ADD CONSTRAINT "_TopicDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_parks" ADD CONSTRAINT "_TopicDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_parks" ADD CONSTRAINT "_TopicVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_parks" ADD CONSTRAINT "_TopicVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_topics" ADD CONSTRAINT "_ParkDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_topics" ADD CONSTRAINT "_ParkDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_topics" ADD CONSTRAINT "_ParkVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_topics" ADD CONSTRAINT "_ParkVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_topics" ADD CONSTRAINT "_PublicNotice_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_topics" ADD CONSTRAINT "_PublicNotice_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_publicNotices" ADD CONSTRAINT "_TopicDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_publicNotices" ADD CONSTRAINT "_TopicDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_publicNotices" ADD CONSTRAINT "_TopicVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_publicNotices" ADD CONSTRAINT "_TopicVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_topics" ADD CONSTRAINT "_PublicNoticeDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_topics" ADD CONSTRAINT "_PublicNoticeDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_topics" ADD CONSTRAINT "_PublicNoticeVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_topics" ADD CONSTRAINT "_PublicNoticeVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_topics" ADD CONSTRAINT "_Service_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_topics" ADD CONSTRAINT "_Service_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_services" ADD CONSTRAINT "_TopicDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_services" ADD CONSTRAINT "_TopicDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_services" ADD CONSTRAINT "_TopicVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_services" ADD CONSTRAINT "_TopicVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_topics" ADD CONSTRAINT "_ServiceDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_topics" ADD CONSTRAINT "_ServiceDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_topics" ADD CONSTRAINT "_ServiceVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_topics" ADD CONSTRAINT "_ServiceVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_tags" ADD CONSTRAINT "_Topic_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_tags" ADD CONSTRAINT "_Topic_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_tags" ADD CONSTRAINT "_TopicDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_tags" ADD CONSTRAINT "_TopicDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_tags" ADD CONSTRAINT "_TopicVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_tags" ADD CONSTRAINT "_TopicVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
