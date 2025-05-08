-- AlterTable
ALTER TABLE "AssemblyDistrict" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "AssemblyDistrictDraft" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "AssemblyDistrictVersion" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "CommunityDraft" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "CommunityVersion" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "FacilityDraft" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "FacilityVersion" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "OrgUnitDraft" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "OrgUnitVersion" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "ParkDraft" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "ParkVersion" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "primaryAction" TEXT,
ADD COLUMN     "primaryContact" TEXT;

-- AlterTable
ALTER TABLE "ServiceDraft" ADD COLUMN     "primaryAction" TEXT,
ADD COLUMN     "primaryContact" TEXT;

-- AlterTable
ALTER TABLE "ServiceVersion" ADD COLUMN     "primaryAction" TEXT,
ADD COLUMN     "primaryContact" TEXT;

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "TrailDraft" ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "TrailVersion" ADD COLUMN     "actions" TEXT;

-- CreateTable
CREATE TABLE "_AssemblyDistrict_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_documents_AB_unique" ON "_AssemblyDistrict_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_documents_B_index" ON "_AssemblyDistrict_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_documents_AB_unique" ON "_AssemblyDistrictDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_documents_B_index" ON "_AssemblyDistrictDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_documents_AB_unique" ON "_AssemblyDistrictVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_documents_B_index" ON "_AssemblyDistrictVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_documents_AB_unique" ON "_Community_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_documents_B_index" ON "_Community_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_documents_AB_unique" ON "_CommunityDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_documents_B_index" ON "_CommunityDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_documents_AB_unique" ON "_CommunityVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_documents_B_index" ON "_CommunityVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_documents_AB_unique" ON "_Facility_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_documents_B_index" ON "_Facility_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_documents_AB_unique" ON "_FacilityDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_documents_B_index" ON "_FacilityDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_documents_AB_unique" ON "_FacilityVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_documents_B_index" ON "_FacilityVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_documents_AB_unique" ON "_OrgUnit_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_documents_B_index" ON "_OrgUnit_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_documents_AB_unique" ON "_OrgUnitDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_documents_B_index" ON "_OrgUnitDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_documents_AB_unique" ON "_OrgUnitVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_documents_B_index" ON "_OrgUnitVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_documents_AB_unique" ON "_Park_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_documents_B_index" ON "_Park_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_documents_AB_unique" ON "_ParkDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_documents_B_index" ON "_ParkDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_documents_AB_unique" ON "_ParkVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_documents_B_index" ON "_ParkVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_documents_AB_unique" ON "_Service_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_documents_B_index" ON "_Service_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_documents_AB_unique" ON "_ServiceDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_documents_B_index" ON "_ServiceDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_documents_AB_unique" ON "_ServiceVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_documents_B_index" ON "_ServiceVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_documents_AB_unique" ON "_Trail_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_documents_B_index" ON "_Trail_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_documents_AB_unique" ON "_TrailDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_documents_B_index" ON "_TrailDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_documents_AB_unique" ON "_TrailVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_documents_B_index" ON "_TrailVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_secondaryActions_AB_unique" ON "_Service_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_secondaryActions_B_index" ON "_Service_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_secondaryActions_AB_unique" ON "_ServiceDraft_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_secondaryActions_B_index" ON "_ServiceDraft_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_secondaryActions_AB_unique" ON "_ServiceVersion_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_secondaryActions_B_index" ON "_ServiceVersion_secondaryActions"("B");

-- CreateIndex
CREATE INDEX "AssemblyDistrict_actions_idx" ON "AssemblyDistrict"("actions");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_actions_idx" ON "AssemblyDistrictDraft"("actions");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_actions_idx" ON "AssemblyDistrictVersion"("actions");

-- CreateIndex
CREATE INDEX "Community_actions_idx" ON "Community"("actions");

-- CreateIndex
CREATE INDEX "CommunityDraft_actions_idx" ON "CommunityDraft"("actions");

-- CreateIndex
CREATE INDEX "CommunityVersion_actions_idx" ON "CommunityVersion"("actions");

-- CreateIndex
CREATE INDEX "Facility_actions_idx" ON "Facility"("actions");

-- CreateIndex
CREATE INDEX "FacilityDraft_actions_idx" ON "FacilityDraft"("actions");

-- CreateIndex
CREATE INDEX "FacilityVersion_actions_idx" ON "FacilityVersion"("actions");

-- CreateIndex
CREATE INDEX "OrgUnit_actions_idx" ON "OrgUnit"("actions");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_actions_idx" ON "OrgUnitDraft"("actions");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_actions_idx" ON "OrgUnitVersion"("actions");

-- CreateIndex
CREATE INDEX "Park_actions_idx" ON "Park"("actions");

-- CreateIndex
CREATE INDEX "ParkDraft_actions_idx" ON "ParkDraft"("actions");

-- CreateIndex
CREATE INDEX "ParkVersion_actions_idx" ON "ParkVersion"("actions");

-- CreateIndex
CREATE INDEX "Service_primaryAction_idx" ON "Service"("primaryAction");

-- CreateIndex
CREATE INDEX "Service_primaryContact_idx" ON "Service"("primaryContact");

-- CreateIndex
CREATE INDEX "ServiceDraft_primaryAction_idx" ON "ServiceDraft"("primaryAction");

-- CreateIndex
CREATE INDEX "ServiceDraft_primaryContact_idx" ON "ServiceDraft"("primaryContact");

-- CreateIndex
CREATE INDEX "ServiceVersion_primaryAction_idx" ON "ServiceVersion"("primaryAction");

-- CreateIndex
CREATE INDEX "ServiceVersion_primaryContact_idx" ON "ServiceVersion"("primaryContact");

-- CreateIndex
CREATE INDEX "Trail_actions_idx" ON "Trail"("actions");

-- CreateIndex
CREATE INDEX "TrailDraft_actions_idx" ON "TrailDraft"("actions");

-- CreateIndex
CREATE INDEX "TrailVersion_actions_idx" ON "TrailVersion"("actions");

-- AddForeignKey
ALTER TABLE "AssemblyDistrict" ADD CONSTRAINT "AssemblyDistrict_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_documents" ADD CONSTRAINT "_AssemblyDistrict_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_documents" ADD CONSTRAINT "_AssemblyDistrict_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_documents" ADD CONSTRAINT "_AssemblyDistrictDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_documents" ADD CONSTRAINT "_AssemblyDistrictDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_documents" ADD CONSTRAINT "_AssemblyDistrictVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_documents" ADD CONSTRAINT "_AssemblyDistrictVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_documents" ADD CONSTRAINT "_Community_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_documents" ADD CONSTRAINT "_Community_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_documents" ADD CONSTRAINT "_CommunityDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_documents" ADD CONSTRAINT "_CommunityDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_documents" ADD CONSTRAINT "_CommunityVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_documents" ADD CONSTRAINT "_CommunityVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_documents" ADD CONSTRAINT "_Facility_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_documents" ADD CONSTRAINT "_Facility_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_documents" ADD CONSTRAINT "_FacilityDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_documents" ADD CONSTRAINT "_FacilityDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_documents" ADD CONSTRAINT "_FacilityVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_documents" ADD CONSTRAINT "_FacilityVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_documents" ADD CONSTRAINT "_OrgUnit_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_documents" ADD CONSTRAINT "_OrgUnit_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_documents" ADD CONSTRAINT "_OrgUnitDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_documents" ADD CONSTRAINT "_OrgUnitDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_documents" ADD CONSTRAINT "_OrgUnitVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_documents" ADD CONSTRAINT "_OrgUnitVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_documents" ADD CONSTRAINT "_Park_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_documents" ADD CONSTRAINT "_Park_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_documents" ADD CONSTRAINT "_ParkDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_documents" ADD CONSTRAINT "_ParkDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_documents" ADD CONSTRAINT "_ParkVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_documents" ADD CONSTRAINT "_ParkVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_documents" ADD CONSTRAINT "_Service_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_documents" ADD CONSTRAINT "_Service_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_documents" ADD CONSTRAINT "_ServiceDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_documents" ADD CONSTRAINT "_ServiceDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_documents" ADD CONSTRAINT "_ServiceVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_documents" ADD CONSTRAINT "_ServiceVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_documents" ADD CONSTRAINT "_Trail_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_documents" ADD CONSTRAINT "_Trail_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_documents" ADD CONSTRAINT "_TrailDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_documents" ADD CONSTRAINT "_TrailDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_documents" ADD CONSTRAINT "_TrailVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_documents" ADD CONSTRAINT "_TrailVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_secondaryActions" ADD CONSTRAINT "_Service_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_secondaryActions" ADD CONSTRAINT "_Service_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_secondaryActions" ADD CONSTRAINT "_ServiceDraft_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_secondaryActions" ADD CONSTRAINT "_ServiceDraft_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_secondaryActions" ADD CONSTRAINT "_ServiceVersion_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_secondaryActions" ADD CONSTRAINT "_ServiceVersion_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
