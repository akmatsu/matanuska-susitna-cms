-- CreateTable
CREATE TABLE "Policy" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "body" TEXT,
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolicyVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "body" TEXT,
    "republish" TEXT,

    CONSTRAINT "PolicyVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolicyDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "body" TEXT,
    "publish" TEXT,

    CONSTRAINT "PolicyDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Policy_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Policy_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Policy_policies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyVersion_policies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyDraft_policies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Policy_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Policy_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Policy_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PolicyDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Policy_title_key" ON "Policy"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Policy_currentVersion_key" ON "Policy"("currentVersion");

-- CreateIndex
CREATE INDEX "PolicyVersion_original_idx" ON "PolicyVersion"("original");

-- CreateIndex
CREATE INDEX "PolicyDraft_original_idx" ON "PolicyDraft"("original");

-- CreateIndex
CREATE UNIQUE INDEX "_Policy_tags_AB_unique" ON "_Policy_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Policy_tags_B_index" ON "_Policy_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Policy_userGroups_AB_unique" ON "_Policy_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Policy_userGroups_B_index" ON "_Policy_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Policy_policies_AB_unique" ON "_Policy_policies"("A", "B");

-- CreateIndex
CREATE INDEX "_Policy_policies_B_index" ON "_Policy_policies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyVersion_policies_AB_unique" ON "_PolicyVersion_policies"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyVersion_policies_B_index" ON "_PolicyVersion_policies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyDraft_policies_AB_unique" ON "_PolicyDraft_policies"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyDraft_policies_B_index" ON "_PolicyDraft_policies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyVersion_tags_AB_unique" ON "_PolicyVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyVersion_tags_B_index" ON "_PolicyVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyVersion_userGroups_AB_unique" ON "_PolicyVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyVersion_userGroups_B_index" ON "_PolicyVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyDraft_tags_AB_unique" ON "_PolicyDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyDraft_tags_B_index" ON "_PolicyDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyDraft_userGroups_AB_unique" ON "_PolicyDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyDraft_userGroups_B_index" ON "_PolicyDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Policy_documents_AB_unique" ON "_Policy_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Policy_documents_B_index" ON "_Policy_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyVersion_documents_AB_unique" ON "_PolicyVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyVersion_documents_B_index" ON "_PolicyVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyDraft_documents_AB_unique" ON "_PolicyDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyDraft_documents_B_index" ON "_PolicyDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Policy_actions_AB_unique" ON "_Policy_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Policy_actions_B_index" ON "_Policy_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyVersion_actions_AB_unique" ON "_PolicyVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyVersion_actions_B_index" ON "_PolicyVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyDraft_actions_AB_unique" ON "_PolicyDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyDraft_actions_B_index" ON "_PolicyDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Policy_contacts_AB_unique" ON "_Policy_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Policy_contacts_B_index" ON "_Policy_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyVersion_contacts_AB_unique" ON "_PolicyVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyVersion_contacts_B_index" ON "_PolicyVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PolicyDraft_contacts_AB_unique" ON "_PolicyDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PolicyDraft_contacts_B_index" ON "_PolicyDraft_contacts"("B");

-- AddForeignKey
ALTER TABLE "Policy" ADD CONSTRAINT "Policy_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "PolicyVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyVersion" ADD CONSTRAINT "PolicyVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Policy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyDraft" ADD CONSTRAINT "PolicyDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Policy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_tags" ADD CONSTRAINT "_Policy_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_tags" ADD CONSTRAINT "_Policy_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_userGroups" ADD CONSTRAINT "_Policy_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_userGroups" ADD CONSTRAINT "_Policy_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_policies" ADD CONSTRAINT "_Policy_policies_A_fkey" FOREIGN KEY ("A") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_policies" ADD CONSTRAINT "_Policy_policies_B_fkey" FOREIGN KEY ("B") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_policies" ADD CONSTRAINT "_PolicyVersion_policies_A_fkey" FOREIGN KEY ("A") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_policies" ADD CONSTRAINT "_PolicyVersion_policies_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_policies" ADD CONSTRAINT "_PolicyDraft_policies_A_fkey" FOREIGN KEY ("A") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_policies" ADD CONSTRAINT "_PolicyDraft_policies_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_tags" ADD CONSTRAINT "_PolicyVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PolicyVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_tags" ADD CONSTRAINT "_PolicyVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_userGroups" ADD CONSTRAINT "_PolicyVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PolicyVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_userGroups" ADD CONSTRAINT "_PolicyVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_tags" ADD CONSTRAINT "_PolicyDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PolicyDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_tags" ADD CONSTRAINT "_PolicyDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_userGroups" ADD CONSTRAINT "_PolicyDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PolicyDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_userGroups" ADD CONSTRAINT "_PolicyDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_documents" ADD CONSTRAINT "_Policy_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_documents" ADD CONSTRAINT "_Policy_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_documents" ADD CONSTRAINT "_PolicyVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_documents" ADD CONSTRAINT "_PolicyVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_documents" ADD CONSTRAINT "_PolicyDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_documents" ADD CONSTRAINT "_PolicyDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_actions" ADD CONSTRAINT "_Policy_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_actions" ADD CONSTRAINT "_Policy_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_actions" ADD CONSTRAINT "_PolicyVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_actions" ADD CONSTRAINT "_PolicyVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_actions" ADD CONSTRAINT "_PolicyDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_actions" ADD CONSTRAINT "_PolicyDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_contacts" ADD CONSTRAINT "_Policy_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Policy_contacts" ADD CONSTRAINT "_Policy_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_contacts" ADD CONSTRAINT "_PolicyVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVersion_contacts" ADD CONSTRAINT "_PolicyVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_contacts" ADD CONSTRAINT "_PolicyDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyDraft_contacts" ADD CONSTRAINT "_PolicyDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PolicyDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;
