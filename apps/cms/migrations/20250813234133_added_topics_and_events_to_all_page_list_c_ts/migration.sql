/*
  Warnings:

  - You are about to drop the `_Facility_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OrgUnit_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Park_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Plan_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PublicNotice_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Service_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TopicDraft_districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TopicVersion_districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Topic_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Trail_events` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Facility_events" DROP CONSTRAINT "_Facility_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_Facility_events" DROP CONSTRAINT "_Facility_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_OrgUnit_events" DROP CONSTRAINT "_OrgUnit_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrgUnit_events" DROP CONSTRAINT "_OrgUnit_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_Park_events" DROP CONSTRAINT "_Park_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_Park_events" DROP CONSTRAINT "_Park_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_Plan_events" DROP CONSTRAINT "_Plan_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_Plan_events" DROP CONSTRAINT "_Plan_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_events" DROP CONSTRAINT "_PublicNotice_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_PublicNotice_events" DROP CONSTRAINT "_PublicNotice_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_Service_events" DROP CONSTRAINT "_Service_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_Service_events" DROP CONSTRAINT "_Service_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_TopicDraft_districts" DROP CONSTRAINT "_TopicDraft_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_TopicDraft_districts" DROP CONSTRAINT "_TopicDraft_districts_B_fkey";

-- DropForeignKey
ALTER TABLE "_TopicVersion_districts" DROP CONSTRAINT "_TopicVersion_districts_A_fkey";

-- DropForeignKey
ALTER TABLE "_TopicVersion_districts" DROP CONSTRAINT "_TopicVersion_districts_B_fkey";

-- DropForeignKey
ALTER TABLE "_Topic_events" DROP CONSTRAINT "_Topic_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_Topic_events" DROP CONSTRAINT "_Topic_events_B_fkey";

-- DropForeignKey
ALTER TABLE "_Trail_events" DROP CONSTRAINT "_Trail_events_A_fkey";

-- DropForeignKey
ALTER TABLE "_Trail_events" DROP CONSTRAINT "_Trail_events_B_fkey";

-- DropTable
DROP TABLE "_Facility_events";

-- DropTable
DROP TABLE "_OrgUnit_events";

-- DropTable
DROP TABLE "_Park_events";

-- DropTable
DROP TABLE "_Plan_events";

-- DropTable
DROP TABLE "_PublicNotice_events";

-- DropTable
DROP TABLE "_Service_events";

-- DropTable
DROP TABLE "_TopicDraft_districts";

-- DropTable
DROP TABLE "_TopicVersion_districts";

-- DropTable
DROP TABLE "_Topic_events";

-- DropTable
DROP TABLE "_Trail_events";

-- CreateTable
CREATE TABLE "_TopicVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Topic_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_assemblyDistricts_AB_unique" ON "_TopicVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_assemblyDistricts_B_index" ON "_TopicVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_assemblyDistricts_AB_unique" ON "_TopicDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_assemblyDistricts_B_index" ON "_TopicDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_assemblyDistricts_AB_unique" ON "_EventDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_assemblyDistricts_B_index" ON "_EventDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_assemblyDistricts_AB_unique" ON "_EventVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_assemblyDistricts_B_index" ON "_EventVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_boards_AB_unique" ON "_EventDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_boards_B_index" ON "_EventDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_boards_AB_unique" ON "_EventVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_boards_B_index" ON "_EventVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_communities_AB_unique" ON "_EventDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_communities_B_index" ON "_EventDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_communities_AB_unique" ON "_EventVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_communities_B_index" ON "_EventVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Topic_topics_AB_unique" ON "_Topic_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Topic_topics_B_index" ON "_Topic_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_topics_AB_unique" ON "_TopicVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_topics_B_index" ON "_TopicVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_topics_AB_unique" ON "_TopicDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_topics_B_index" ON "_TopicDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_topics_AB_unique" ON "_Event_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_topics_B_index" ON "_Event_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_services_AB_unique" ON "_Event_services"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_services_B_index" ON "_Event_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_parks_AB_unique" ON "_Event_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_parks_B_index" ON "_Event_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_trails_AB_unique" ON "_Event_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_trails_B_index" ON "_Event_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_facilities_AB_unique" ON "_Event_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_facilities_B_index" ON "_Event_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_orgUnits_AB_unique" ON "_Event_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_orgUnits_B_index" ON "_Event_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_publicNotices_AB_unique" ON "_Event_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_publicNotices_B_index" ON "_Event_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_plans_AB_unique" ON "_Event_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_plans_B_index" ON "_Event_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_topics_AB_unique" ON "_EventDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_topics_B_index" ON "_EventDraft_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_services_AB_unique" ON "_EventDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_services_B_index" ON "_EventDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_parks_AB_unique" ON "_EventDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_parks_B_index" ON "_EventDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_trails_AB_unique" ON "_EventDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_trails_B_index" ON "_EventDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_facilities_AB_unique" ON "_EventDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_facilities_B_index" ON "_EventDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_orgUnits_AB_unique" ON "_EventDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_orgUnits_B_index" ON "_EventDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_publicNotices_AB_unique" ON "_EventDraft_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_publicNotices_B_index" ON "_EventDraft_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_plans_AB_unique" ON "_EventDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_plans_B_index" ON "_EventDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_topics_AB_unique" ON "_EventVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_topics_B_index" ON "_EventVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_services_AB_unique" ON "_EventVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_services_B_index" ON "_EventVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_parks_AB_unique" ON "_EventVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_parks_B_index" ON "_EventVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_trails_AB_unique" ON "_EventVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_trails_B_index" ON "_EventVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_facilities_AB_unique" ON "_EventVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_facilities_B_index" ON "_EventVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_orgUnits_AB_unique" ON "_EventVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_orgUnits_B_index" ON "_EventVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_publicNotices_AB_unique" ON "_EventVersion_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_publicNotices_B_index" ON "_EventVersion_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_plans_AB_unique" ON "_EventVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_plans_B_index" ON "_EventVersion_plans"("B");

-- AddForeignKey
ALTER TABLE "_TopicVersion_assemblyDistricts" ADD CONSTRAINT "_TopicVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_assemblyDistricts" ADD CONSTRAINT "_TopicVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_assemblyDistricts" ADD CONSTRAINT "_TopicDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_assemblyDistricts" ADD CONSTRAINT "_TopicDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_assemblyDistricts" ADD CONSTRAINT "_EventDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_assemblyDistricts" ADD CONSTRAINT "_EventDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_assemblyDistricts" ADD CONSTRAINT "_EventVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_assemblyDistricts" ADD CONSTRAINT "_EventVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_boards" ADD CONSTRAINT "_EventDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_boards" ADD CONSTRAINT "_EventDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_boards" ADD CONSTRAINT "_EventVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_boards" ADD CONSTRAINT "_EventVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_communities" ADD CONSTRAINT "_EventDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_communities" ADD CONSTRAINT "_EventDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_communities" ADD CONSTRAINT "_EventVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_communities" ADD CONSTRAINT "_EventVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_topics" ADD CONSTRAINT "_Topic_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Topic_topics" ADD CONSTRAINT "_Topic_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_topics" ADD CONSTRAINT "_TopicVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_topics" ADD CONSTRAINT "_TopicVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_topics" ADD CONSTRAINT "_TopicDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_topics" ADD CONSTRAINT "_TopicDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_topics" ADD CONSTRAINT "_Event_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_topics" ADD CONSTRAINT "_Event_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_services" ADD CONSTRAINT "_Event_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_services" ADD CONSTRAINT "_Event_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_parks" ADD CONSTRAINT "_Event_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_parks" ADD CONSTRAINT "_Event_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_trails" ADD CONSTRAINT "_Event_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_trails" ADD CONSTRAINT "_Event_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_facilities" ADD CONSTRAINT "_Event_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_facilities" ADD CONSTRAINT "_Event_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_orgUnits" ADD CONSTRAINT "_Event_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_orgUnits" ADD CONSTRAINT "_Event_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_publicNotices" ADD CONSTRAINT "_Event_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_publicNotices" ADD CONSTRAINT "_Event_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_plans" ADD CONSTRAINT "_Event_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_plans" ADD CONSTRAINT "_Event_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_topics" ADD CONSTRAINT "_EventDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_topics" ADD CONSTRAINT "_EventDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_services" ADD CONSTRAINT "_EventDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_services" ADD CONSTRAINT "_EventDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_parks" ADD CONSTRAINT "_EventDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_parks" ADD CONSTRAINT "_EventDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_trails" ADD CONSTRAINT "_EventDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_trails" ADD CONSTRAINT "_EventDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_facilities" ADD CONSTRAINT "_EventDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_facilities" ADD CONSTRAINT "_EventDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_orgUnits" ADD CONSTRAINT "_EventDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_orgUnits" ADD CONSTRAINT "_EventDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_publicNotices" ADD CONSTRAINT "_EventDraft_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_publicNotices" ADD CONSTRAINT "_EventDraft_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_plans" ADD CONSTRAINT "_EventDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_plans" ADD CONSTRAINT "_EventDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_topics" ADD CONSTRAINT "_EventVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_topics" ADD CONSTRAINT "_EventVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_services" ADD CONSTRAINT "_EventVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_services" ADD CONSTRAINT "_EventVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_parks" ADD CONSTRAINT "_EventVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_parks" ADD CONSTRAINT "_EventVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_trails" ADD CONSTRAINT "_EventVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_trails" ADD CONSTRAINT "_EventVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_facilities" ADD CONSTRAINT "_EventVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_facilities" ADD CONSTRAINT "_EventVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_orgUnits" ADD CONSTRAINT "_EventVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_orgUnits" ADD CONSTRAINT "_EventVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_publicNotices" ADD CONSTRAINT "_EventVersion_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_publicNotices" ADD CONSTRAINT "_EventVersion_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_plans" ADD CONSTRAINT "_EventVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_plans" ADD CONSTRAINT "_EventVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
