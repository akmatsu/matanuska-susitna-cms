-- CreateTable
CREATE TABLE "Plan" (
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
    "effort" TEXT,
    "autoRedirectToExternalWebsite" INTEGER NOT NULL DEFAULT 0,
    "parent" TEXT,
    "type" TEXT NOT NULL DEFAULT 'legislative',
    "currentDocument" TEXT,
    "draftDocument" TEXT,
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanVersion" (
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
    "effort" TEXT,
    "autoRedirectToExternalWebsite" INTEGER NOT NULL DEFAULT 0,
    "parent" TEXT,
    "type" TEXT NOT NULL DEFAULT 'legislative',
    "currentDocument" TEXT,
    "draftDocument" TEXT,
    "republish" TEXT,

    CONSTRAINT "PlanVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDraft" (
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
    "effort" TEXT,
    "autoRedirectToExternalWebsite" INTEGER NOT NULL DEFAULT 0,
    "parent" TEXT,
    "type" TEXT NOT NULL DEFAULT 'legislative',
    "currentDocument" TEXT,
    "draftDocument" TEXT,
    "publish" TEXT,

    CONSTRAINT "PlanDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "PlanCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDocument" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "precededBy" TEXT,
    "adoptedYear" INTEGER,

    CONSTRAINT "PlanDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
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
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventDraft" (
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
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "publish" TEXT,

    CONSTRAINT "EventDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventVersion" (
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
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "republish" TEXT,

    CONSTRAINT "EventVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Plan_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_code" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_pastDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_components" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_components" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_code" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_code" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_pastDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_pastDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_events" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDocument_document" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Event_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan_title_key" ON "Plan"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_slug_key" ON "Plan"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_currentVersion_key" ON "Plan"("currentVersion");

-- CreateIndex
CREATE INDEX "Plan_owner_idx" ON "Plan"("owner");

-- CreateIndex
CREATE INDEX "Plan_effort_idx" ON "Plan"("effort");

-- CreateIndex
CREATE INDEX "Plan_parent_idx" ON "Plan"("parent");

-- CreateIndex
CREATE INDEX "Plan_currentDocument_idx" ON "Plan"("currentDocument");

-- CreateIndex
CREATE INDEX "Plan_draftDocument_idx" ON "Plan"("draftDocument");

-- CreateIndex
CREATE INDEX "PlanVersion_original_idx" ON "PlanVersion"("original");

-- CreateIndex
CREATE INDEX "PlanVersion_owner_idx" ON "PlanVersion"("owner");

-- CreateIndex
CREATE INDEX "PlanVersion_effort_idx" ON "PlanVersion"("effort");

-- CreateIndex
CREATE INDEX "PlanVersion_parent_idx" ON "PlanVersion"("parent");

-- CreateIndex
CREATE INDEX "PlanVersion_currentDocument_idx" ON "PlanVersion"("currentDocument");

-- CreateIndex
CREATE INDEX "PlanVersion_draftDocument_idx" ON "PlanVersion"("draftDocument");

-- CreateIndex
CREATE INDEX "PlanDraft_original_idx" ON "PlanDraft"("original");

-- CreateIndex
CREATE INDEX "PlanDraft_owner_idx" ON "PlanDraft"("owner");

-- CreateIndex
CREATE INDEX "PlanDraft_effort_idx" ON "PlanDraft"("effort");

-- CreateIndex
CREATE INDEX "PlanDraft_parent_idx" ON "PlanDraft"("parent");

-- CreateIndex
CREATE INDEX "PlanDraft_currentDocument_idx" ON "PlanDraft"("currentDocument");

-- CreateIndex
CREATE INDEX "PlanDraft_draftDocument_idx" ON "PlanDraft"("draftDocument");

-- CreateIndex
CREATE UNIQUE INDEX "PlanDocument_precededBy_key" ON "PlanDocument"("precededBy");

-- CreateIndex
CREATE UNIQUE INDEX "Event_title_key" ON "Event"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Event_currentVersion_key" ON "Event"("currentVersion");

-- CreateIndex
CREATE INDEX "Event_owner_idx" ON "Event"("owner");

-- CreateIndex
CREATE INDEX "EventDraft_original_idx" ON "EventDraft"("original");

-- CreateIndex
CREATE INDEX "EventDraft_owner_idx" ON "EventDraft"("owner");

-- CreateIndex
CREATE INDEX "EventVersion_original_idx" ON "EventVersion"("original");

-- CreateIndex
CREATE INDEX "EventVersion_owner_idx" ON "EventVersion"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_tags_AB_unique" ON "_Plan_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_tags_B_index" ON "_Plan_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_userGroups_AB_unique" ON "_Plan_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_userGroups_B_index" ON "_Plan_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_code_AB_unique" ON "_Plan_code"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_code_B_index" ON "_Plan_code"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_pastDocuments_AB_unique" ON "_Plan_pastDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_pastDocuments_B_index" ON "_Plan_pastDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_components_AB_unique" ON "_PlanVersion_components"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_components_B_index" ON "_PlanVersion_components"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_components_AB_unique" ON "_PlanDraft_components"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_components_B_index" ON "_PlanDraft_components"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_tags_AB_unique" ON "_PlanVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_tags_B_index" ON "_PlanVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_userGroups_AB_unique" ON "_PlanVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_userGroups_B_index" ON "_PlanVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_tags_AB_unique" ON "_PlanDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_tags_B_index" ON "_PlanDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_userGroups_AB_unique" ON "_PlanDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_userGroups_B_index" ON "_PlanDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_code_AB_unique" ON "_PlanVersion_code"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_code_B_index" ON "_PlanVersion_code"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_code_AB_unique" ON "_PlanDraft_code"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_code_B_index" ON "_PlanDraft_code"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_pastDocuments_AB_unique" ON "_PlanVersion_pastDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_pastDocuments_B_index" ON "_PlanVersion_pastDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_pastDocuments_AB_unique" ON "_PlanDraft_pastDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_pastDocuments_B_index" ON "_PlanDraft_pastDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_tags_AB_unique" ON "_Event_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_tags_B_index" ON "_Event_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_userGroups_AB_unique" ON "_Event_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_userGroups_B_index" ON "_Event_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_actions_AB_unique" ON "_Event_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_actions_B_index" ON "_Event_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_events_AB_unique" ON "_Plan_events"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_events_B_index" ON "_Plan_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_events_AB_unique" ON "_PlanVersion_events"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_events_B_index" ON "_PlanVersion_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_events_AB_unique" ON "_PlanDraft_events"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_events_B_index" ON "_PlanDraft_events"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_tags_AB_unique" ON "_EventDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_tags_B_index" ON "_EventDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_userGroups_AB_unique" ON "_EventDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_userGroups_B_index" ON "_EventDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_actions_AB_unique" ON "_EventDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_actions_B_index" ON "_EventDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_tags_AB_unique" ON "_EventVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_tags_B_index" ON "_EventVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_userGroups_AB_unique" ON "_EventVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_userGroups_B_index" ON "_EventVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_actions_AB_unique" ON "_EventVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_actions_B_index" ON "_EventVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_documents_AB_unique" ON "_Plan_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_documents_B_index" ON "_Plan_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_documents_AB_unique" ON "_PlanVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_documents_B_index" ON "_PlanVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_documents_AB_unique" ON "_PlanDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_documents_B_index" ON "_PlanDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDocument_document_AB_unique" ON "_PlanDocument_document"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDocument_document_B_index" ON "_PlanDocument_document"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_documents_AB_unique" ON "_Event_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_documents_B_index" ON "_Event_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_documents_AB_unique" ON "_EventDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_documents_B_index" ON "_EventDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_documents_AB_unique" ON "_EventVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_documents_B_index" ON "_EventVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_actions_AB_unique" ON "_Plan_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_actions_B_index" ON "_Plan_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_actions_AB_unique" ON "_PlanVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_actions_B_index" ON "_PlanVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_actions_AB_unique" ON "_PlanDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_actions_B_index" ON "_PlanDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_contacts_AB_unique" ON "_Plan_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_contacts_B_index" ON "_Plan_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_contacts_AB_unique" ON "_PlanVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_contacts_B_index" ON "_PlanVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_contacts_AB_unique" ON "_PlanDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_contacts_B_index" ON "_PlanDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Event_contacts_AB_unique" ON "_Event_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Event_contacts_B_index" ON "_Event_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventDraft_contacts_AB_unique" ON "_EventDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_EventDraft_contacts_B_index" ON "_EventDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventVersion_contacts_AB_unique" ON "_EventVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_EventVersion_contacts_B_index" ON "_EventVersion_contacts"("B");

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_effort_fkey" FOREIGN KEY ("effort") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_currentDocument_fkey" FOREIGN KEY ("currentDocument") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_draftDocument_fkey" FOREIGN KEY ("draftDocument") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "PlanVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_effort_fkey" FOREIGN KEY ("effort") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_currentDocument_fkey" FOREIGN KEY ("currentDocument") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanVersion" ADD CONSTRAINT "PlanVersion_draftDocument_fkey" FOREIGN KEY ("draftDocument") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_effort_fkey" FOREIGN KEY ("effort") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_currentDocument_fkey" FOREIGN KEY ("currentDocument") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_draftDocument_fkey" FOREIGN KEY ("draftDocument") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDocument" ADD CONSTRAINT "PlanDocument_precededBy_fkey" FOREIGN KEY ("precededBy") REFERENCES "PlanDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "EventVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDraft" ADD CONSTRAINT "EventDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDraft" ADD CONSTRAINT "EventDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventVersion" ADD CONSTRAINT "EventVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventVersion" ADD CONSTRAINT "EventVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_tags" ADD CONSTRAINT "_Plan_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_tags" ADD CONSTRAINT "_Plan_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_userGroups" ADD CONSTRAINT "_Plan_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_userGroups" ADD CONSTRAINT "_Plan_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_code" ADD CONSTRAINT "_Plan_code_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_code" ADD CONSTRAINT "_Plan_code_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_pastDocuments" ADD CONSTRAINT "_Plan_pastDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_pastDocuments" ADD CONSTRAINT "_Plan_pastDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_components" ADD CONSTRAINT "_PlanVersion_components_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_components" ADD CONSTRAINT "_PlanVersion_components_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_components" ADD CONSTRAINT "_PlanDraft_components_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_components" ADD CONSTRAINT "_PlanDraft_components_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_tags" ADD CONSTRAINT "_PlanVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_tags" ADD CONSTRAINT "_PlanVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_userGroups" ADD CONSTRAINT "_PlanVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_userGroups" ADD CONSTRAINT "_PlanVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_tags" ADD CONSTRAINT "_PlanDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_tags" ADD CONSTRAINT "_PlanDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_userGroups" ADD CONSTRAINT "_PlanDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_userGroups" ADD CONSTRAINT "_PlanDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_code" ADD CONSTRAINT "_PlanVersion_code_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_code" ADD CONSTRAINT "_PlanVersion_code_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_code" ADD CONSTRAINT "_PlanDraft_code_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_code" ADD CONSTRAINT "_PlanDraft_code_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_pastDocuments" ADD CONSTRAINT "_PlanVersion_pastDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_pastDocuments" ADD CONSTRAINT "_PlanVersion_pastDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_pastDocuments" ADD CONSTRAINT "_PlanDraft_pastDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_pastDocuments" ADD CONSTRAINT "_PlanDraft_pastDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_tags" ADD CONSTRAINT "_Event_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_tags" ADD CONSTRAINT "_Event_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_userGroups" ADD CONSTRAINT "_Event_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_userGroups" ADD CONSTRAINT "_Event_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_actions" ADD CONSTRAINT "_Event_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_actions" ADD CONSTRAINT "_Event_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_events" ADD CONSTRAINT "_Plan_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_events" ADD CONSTRAINT "_Plan_events_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_events" ADD CONSTRAINT "_PlanVersion_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_events" ADD CONSTRAINT "_PlanVersion_events_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_events" ADD CONSTRAINT "_PlanDraft_events_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_events" ADD CONSTRAINT "_PlanDraft_events_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_tags" ADD CONSTRAINT "_EventDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_tags" ADD CONSTRAINT "_EventDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_userGroups" ADD CONSTRAINT "_EventDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_userGroups" ADD CONSTRAINT "_EventDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_actions" ADD CONSTRAINT "_EventDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_actions" ADD CONSTRAINT "_EventDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_tags" ADD CONSTRAINT "_EventVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_tags" ADD CONSTRAINT "_EventVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_userGroups" ADD CONSTRAINT "_EventVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_userGroups" ADD CONSTRAINT "_EventVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_actions" ADD CONSTRAINT "_EventVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_actions" ADD CONSTRAINT "_EventVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_documents" ADD CONSTRAINT "_Plan_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_documents" ADD CONSTRAINT "_Plan_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_documents" ADD CONSTRAINT "_PlanVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_documents" ADD CONSTRAINT "_PlanVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_documents" ADD CONSTRAINT "_PlanDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_documents" ADD CONSTRAINT "_PlanDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDocument_document" ADD CONSTRAINT "_PlanDocument_document_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDocument_document" ADD CONSTRAINT "_PlanDocument_document_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_documents" ADD CONSTRAINT "_Event_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_documents" ADD CONSTRAINT "_Event_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_documents" ADD CONSTRAINT "_EventDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_documents" ADD CONSTRAINT "_EventDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_documents" ADD CONSTRAINT "_EventVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_documents" ADD CONSTRAINT "_EventVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_actions" ADD CONSTRAINT "_Plan_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_actions" ADD CONSTRAINT "_Plan_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_actions" ADD CONSTRAINT "_PlanVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_actions" ADD CONSTRAINT "_PlanVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_actions" ADD CONSTRAINT "_PlanDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_actions" ADD CONSTRAINT "_PlanDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_contacts" ADD CONSTRAINT "_Plan_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_contacts" ADD CONSTRAINT "_Plan_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_contacts" ADD CONSTRAINT "_PlanVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_contacts" ADD CONSTRAINT "_PlanVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_contacts" ADD CONSTRAINT "_PlanDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_contacts" ADD CONSTRAINT "_PlanDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_contacts" ADD CONSTRAINT "_Event_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_contacts" ADD CONSTRAINT "_Event_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_contacts" ADD CONSTRAINT "_EventDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventDraft_contacts" ADD CONSTRAINT "_EventDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "EventDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_contacts" ADD CONSTRAINT "_EventVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventVersion_contacts" ADD CONSTRAINT "_EventVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "EventVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
