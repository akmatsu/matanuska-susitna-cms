-- CreateTable
CREATE TABLE "Board" (
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
    "primaryAction" TEXT,
    "primaryContact" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT DEFAULT 'board',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardDraft" (
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
    "primaryAction" TEXT,
    "primaryContact" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT DEFAULT 'board',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "publish" TEXT,

    CONSTRAINT "BoardDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardVersion" (
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
    "primaryAction" TEXT,
    "primaryContact" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT DEFAULT 'board',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "republish" TEXT,

    CONSTRAINT "BoardVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Board_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Board_title_key" ON "Board"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Board_slug_key" ON "Board"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Board_currentVersion_key" ON "Board"("currentVersion");

-- CreateIndex
CREATE INDEX "Board_owner_idx" ON "Board"("owner");

-- CreateIndex
CREATE INDEX "Board_primaryAction_idx" ON "Board"("primaryAction");

-- CreateIndex
CREATE INDEX "Board_primaryContact_idx" ON "Board"("primaryContact");

-- CreateIndex
CREATE INDEX "BoardDraft_original_idx" ON "BoardDraft"("original");

-- CreateIndex
CREATE INDEX "BoardDraft_owner_idx" ON "BoardDraft"("owner");

-- CreateIndex
CREATE INDEX "BoardDraft_primaryAction_idx" ON "BoardDraft"("primaryAction");

-- CreateIndex
CREATE INDEX "BoardDraft_primaryContact_idx" ON "BoardDraft"("primaryContact");

-- CreateIndex
CREATE INDEX "BoardVersion_original_idx" ON "BoardVersion"("original");

-- CreateIndex
CREATE INDEX "BoardVersion_owner_idx" ON "BoardVersion"("owner");

-- CreateIndex
CREATE INDEX "BoardVersion_primaryAction_idx" ON "BoardVersion"("primaryAction");

-- CreateIndex
CREATE INDEX "BoardVersion_primaryContact_idx" ON "BoardVersion"("primaryContact");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_boards_AB_unique" ON "_AssemblyDistrict_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_boards_B_index" ON "_AssemblyDistrict_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_districts_AB_unique" ON "_BoardDraft_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_districts_B_index" ON "_BoardDraft_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_districts_AB_unique" ON "_BoardVersion_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_districts_B_index" ON "_BoardVersion_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_boards_AB_unique" ON "_AssemblyDistrictDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_boards_B_index" ON "_AssemblyDistrictDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_boards_AB_unique" ON "_AssemblyDistrictVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_boards_B_index" ON "_AssemblyDistrictVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_tags_AB_unique" ON "_Board_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_tags_B_index" ON "_Board_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_userGroups_AB_unique" ON "_Board_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_userGroups_B_index" ON "_Board_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_secondaryActions_AB_unique" ON "_Board_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_secondaryActions_B_index" ON "_Board_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_documents_AB_unique" ON "_Board_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_documents_B_index" ON "_Board_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_contacts_AB_unique" ON "_Board_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_contacts_B_index" ON "_Board_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Board_communities_AB_unique" ON "_Board_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_communities_B_index" ON "_Board_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_boards_AB_unique" ON "_CommunityDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_boards_B_index" ON "_CommunityDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_boards_AB_unique" ON "_CommunityVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_boards_B_index" ON "_CommunityVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_tags_AB_unique" ON "_BoardDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_tags_B_index" ON "_BoardDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_userGroups_AB_unique" ON "_BoardDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_userGroups_B_index" ON "_BoardDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_secondaryActions_AB_unique" ON "_BoardDraft_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_secondaryActions_B_index" ON "_BoardDraft_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_documents_AB_unique" ON "_BoardDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_documents_B_index" ON "_BoardDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_contacts_AB_unique" ON "_BoardDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_contacts_B_index" ON "_BoardDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_communities_AB_unique" ON "_BoardDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_communities_B_index" ON "_BoardDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_tags_AB_unique" ON "_BoardVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_tags_B_index" ON "_BoardVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_userGroups_AB_unique" ON "_BoardVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_userGroups_B_index" ON "_BoardVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_secondaryActions_AB_unique" ON "_BoardVersion_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_secondaryActions_B_index" ON "_BoardVersion_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_documents_AB_unique" ON "_BoardVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_documents_B_index" ON "_BoardVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_contacts_AB_unique" ON "_BoardVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_contacts_B_index" ON "_BoardVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_communities_AB_unique" ON "_BoardVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_communities_B_index" ON "_BoardVersion_communities"("B");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "BoardVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_boards" ADD CONSTRAINT "_AssemblyDistrict_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_boards" ADD CONSTRAINT "_AssemblyDistrict_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_districts" ADD CONSTRAINT "_BoardDraft_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_districts" ADD CONSTRAINT "_BoardDraft_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_districts" ADD CONSTRAINT "_BoardVersion_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_districts" ADD CONSTRAINT "_BoardVersion_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_boards" ADD CONSTRAINT "_AssemblyDistrictDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_boards" ADD CONSTRAINT "_AssemblyDistrictDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_boards" ADD CONSTRAINT "_AssemblyDistrictVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_boards" ADD CONSTRAINT "_AssemblyDistrictVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_tags" ADD CONSTRAINT "_Board_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_tags" ADD CONSTRAINT "_Board_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_userGroups" ADD CONSTRAINT "_Board_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_userGroups" ADD CONSTRAINT "_Board_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_secondaryActions" ADD CONSTRAINT "_Board_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_secondaryActions" ADD CONSTRAINT "_Board_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_documents" ADD CONSTRAINT "_Board_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_documents" ADD CONSTRAINT "_Board_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_contacts" ADD CONSTRAINT "_Board_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_contacts" ADD CONSTRAINT "_Board_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_communities" ADD CONSTRAINT "_Board_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_communities" ADD CONSTRAINT "_Board_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_boards" ADD CONSTRAINT "_CommunityDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_boards" ADD CONSTRAINT "_CommunityDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_boards" ADD CONSTRAINT "_CommunityVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_boards" ADD CONSTRAINT "_CommunityVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_tags" ADD CONSTRAINT "_BoardDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_tags" ADD CONSTRAINT "_BoardDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_userGroups" ADD CONSTRAINT "_BoardDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_userGroups" ADD CONSTRAINT "_BoardDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_secondaryActions" ADD CONSTRAINT "_BoardDraft_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_secondaryActions" ADD CONSTRAINT "_BoardDraft_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_documents" ADD CONSTRAINT "_BoardDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_documents" ADD CONSTRAINT "_BoardDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_contacts" ADD CONSTRAINT "_BoardDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_contacts" ADD CONSTRAINT "_BoardDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_communities" ADD CONSTRAINT "_BoardDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_communities" ADD CONSTRAINT "_BoardDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_tags" ADD CONSTRAINT "_BoardVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_tags" ADD CONSTRAINT "_BoardVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_userGroups" ADD CONSTRAINT "_BoardVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_userGroups" ADD CONSTRAINT "_BoardVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_secondaryActions" ADD CONSTRAINT "_BoardVersion_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_secondaryActions" ADD CONSTRAINT "_BoardVersion_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_documents" ADD CONSTRAINT "_BoardVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_documents" ADD CONSTRAINT "_BoardVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_contacts" ADD CONSTRAINT "_BoardVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_contacts" ADD CONSTRAINT "_BoardVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_communities" ADD CONSTRAINT "_BoardVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_communities" ADD CONSTRAINT "_BoardVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;
