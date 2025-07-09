-- CreateTable
CREATE TABLE "Election" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "candidateFilingStartDate" TIMESTAMP(3),
    "candidateFilingDeadline" TIMESTAMP(3),
    "absenteeApplicationDeadline" TIMESTAMP(3),
    "electionOfficialApplicationDeadline" TIMESTAMP(3),
    "electionBrochure" TEXT,
    "result" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Election_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "candidateFilingStartDate" TIMESTAMP(3),
    "candidateFilingDeadline" TIMESTAMP(3),
    "absenteeApplicationDeadline" TIMESTAMP(3),
    "electionOfficialApplicationDeadline" TIMESTAMP(3),
    "electionBrochure" TEXT,
    "result" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publish" TEXT,

    CONSTRAINT "ElectionDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "candidateFilingStartDate" TIMESTAMP(3),
    "candidateFilingDeadline" TIMESTAMP(3),
    "absenteeApplicationDeadline" TIMESTAMP(3),
    "electionOfficialApplicationDeadline" TIMESTAMP(3),
    "electionBrochure" TEXT,
    "result" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "republish" TEXT,

    CONSTRAINT "ElectionVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionsPage" (
    "id" INTEGER NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElectionsPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionResult" (
    "id" TEXT NOT NULL,
    "document" TEXT,
    "isOfficial" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ElectionResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Election_candidateFilingDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_absenteeVotingDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_electionOfficialDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_candidates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_propositions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_electionBallots" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_candidateFilingDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_absenteeVotingDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_electionOfficialDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_candidates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_propositions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_electionBallots" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_candidateFilingDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_absenteeVotingDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_electionOfficialDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_candidates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_propositions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_electionBallots" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Election_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Election_title_key" ON "Election"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Election_slug_key" ON "Election"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Election_result_key" ON "Election"("result");

-- CreateIndex
CREATE UNIQUE INDEX "Election_currentVersion_key" ON "Election"("currentVersion");

-- CreateIndex
CREATE INDEX "Election_owner_idx" ON "Election"("owner");

-- CreateIndex
CREATE INDEX "Election_electionBrochure_idx" ON "Election"("electionBrochure");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionDraft_title_key" ON "ElectionDraft"("title");

-- CreateIndex
CREATE INDEX "ElectionDraft_original_idx" ON "ElectionDraft"("original");

-- CreateIndex
CREATE INDEX "ElectionDraft_owner_idx" ON "ElectionDraft"("owner");

-- CreateIndex
CREATE INDEX "ElectionDraft_electionBrochure_idx" ON "ElectionDraft"("electionBrochure");

-- CreateIndex
CREATE INDEX "ElectionDraft_result_idx" ON "ElectionDraft"("result");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionVersion_title_key" ON "ElectionVersion"("title");

-- CreateIndex
CREATE INDEX "ElectionVersion_original_idx" ON "ElectionVersion"("original");

-- CreateIndex
CREATE INDEX "ElectionVersion_owner_idx" ON "ElectionVersion"("owner");

-- CreateIndex
CREATE INDEX "ElectionVersion_electionBrochure_idx" ON "ElectionVersion"("electionBrochure");

-- CreateIndex
CREATE INDEX "ElectionVersion_result_idx" ON "ElectionVersion"("result");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionsPage_title_key" ON "ElectionsPage"("title");

-- CreateIndex
CREATE INDEX "ElectionResult_document_idx" ON "ElectionResult"("document");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_candidateFilingDocuments_AB_unique" ON "_Election_candidateFilingDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_candidateFilingDocuments_B_index" ON "_Election_candidateFilingDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_absenteeVotingDocuments_AB_unique" ON "_Election_absenteeVotingDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_absenteeVotingDocuments_B_index" ON "_Election_absenteeVotingDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_electionOfficialDocuments_AB_unique" ON "_Election_electionOfficialDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_electionOfficialDocuments_B_index" ON "_Election_electionOfficialDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_candidates_AB_unique" ON "_Election_candidates"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_candidates_B_index" ON "_Election_candidates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_propositions_AB_unique" ON "_Election_propositions"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_propositions_B_index" ON "_Election_propositions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_electionBallots_AB_unique" ON "_Election_electionBallots"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_electionBallots_B_index" ON "_Election_electionBallots"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_candidateFilingDocuments_AB_unique" ON "_ElectionDraft_candidateFilingDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_candidateFilingDocuments_B_index" ON "_ElectionDraft_candidateFilingDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_absenteeVotingDocuments_AB_unique" ON "_ElectionDraft_absenteeVotingDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_absenteeVotingDocuments_B_index" ON "_ElectionDraft_absenteeVotingDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_electionOfficialDocuments_AB_unique" ON "_ElectionDraft_electionOfficialDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_electionOfficialDocuments_B_index" ON "_ElectionDraft_electionOfficialDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_candidates_AB_unique" ON "_ElectionDraft_candidates"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_candidates_B_index" ON "_ElectionDraft_candidates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_propositions_AB_unique" ON "_ElectionDraft_propositions"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_propositions_B_index" ON "_ElectionDraft_propositions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_electionBallots_AB_unique" ON "_ElectionDraft_electionBallots"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_electionBallots_B_index" ON "_ElectionDraft_electionBallots"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_candidateFilingDocuments_AB_unique" ON "_ElectionVersion_candidateFilingDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_candidateFilingDocuments_B_index" ON "_ElectionVersion_candidateFilingDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_absenteeVotingDocuments_AB_unique" ON "_ElectionVersion_absenteeVotingDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_absenteeVotingDocuments_B_index" ON "_ElectionVersion_absenteeVotingDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_electionOfficialDocuments_AB_unique" ON "_ElectionVersion_electionOfficialDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_electionOfficialDocuments_B_index" ON "_ElectionVersion_electionOfficialDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_candidates_AB_unique" ON "_ElectionVersion_candidates"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_candidates_B_index" ON "_ElectionVersion_candidates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_propositions_AB_unique" ON "_ElectionVersion_propositions"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_propositions_B_index" ON "_ElectionVersion_propositions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_electionBallots_AB_unique" ON "_ElectionVersion_electionBallots"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_electionBallots_B_index" ON "_ElectionVersion_electionBallots"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_tags_AB_unique" ON "_Election_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_tags_B_index" ON "_Election_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Election_userGroups_AB_unique" ON "_Election_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_userGroups_B_index" ON "_Election_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_tags_AB_unique" ON "_ElectionDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_tags_B_index" ON "_ElectionDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_userGroups_AB_unique" ON "_ElectionDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_userGroups_B_index" ON "_ElectionDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_tags_AB_unique" ON "_ElectionVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_tags_B_index" ON "_ElectionVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_userGroups_AB_unique" ON "_ElectionVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_userGroups_B_index" ON "_ElectionVersion_userGroups"("B");

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_electionBrochure_fkey" FOREIGN KEY ("electionBrochure") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_result_fkey" FOREIGN KEY ("result") REFERENCES "ElectionResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "ElectionVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Election"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_electionBrochure_fkey" FOREIGN KEY ("electionBrochure") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_result_fkey" FOREIGN KEY ("result") REFERENCES "ElectionResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Election"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_electionBrochure_fkey" FOREIGN KEY ("electionBrochure") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_result_fkey" FOREIGN KEY ("result") REFERENCES "ElectionResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionResult" ADD CONSTRAINT "ElectionResult_document_fkey" FOREIGN KEY ("document") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_candidateFilingDocuments" ADD CONSTRAINT "_Election_candidateFilingDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_candidateFilingDocuments" ADD CONSTRAINT "_Election_candidateFilingDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_absenteeVotingDocuments" ADD CONSTRAINT "_Election_absenteeVotingDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_absenteeVotingDocuments" ADD CONSTRAINT "_Election_absenteeVotingDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_electionOfficialDocuments" ADD CONSTRAINT "_Election_electionOfficialDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_electionOfficialDocuments" ADD CONSTRAINT "_Election_electionOfficialDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_candidates" ADD CONSTRAINT "_Election_candidates_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_candidates" ADD CONSTRAINT "_Election_candidates_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_propositions" ADD CONSTRAINT "_Election_propositions_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_propositions" ADD CONSTRAINT "_Election_propositions_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_electionBallots" ADD CONSTRAINT "_Election_electionBallots_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_electionBallots" ADD CONSTRAINT "_Election_electionBallots_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_candidateFilingDocuments" ADD CONSTRAINT "_ElectionDraft_candidateFilingDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_candidateFilingDocuments" ADD CONSTRAINT "_ElectionDraft_candidateFilingDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_absenteeVotingDocuments" ADD CONSTRAINT "_ElectionDraft_absenteeVotingDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_absenteeVotingDocuments" ADD CONSTRAINT "_ElectionDraft_absenteeVotingDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_electionOfficialDocuments" ADD CONSTRAINT "_ElectionDraft_electionOfficialDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_electionOfficialDocuments" ADD CONSTRAINT "_ElectionDraft_electionOfficialDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_candidates" ADD CONSTRAINT "_ElectionDraft_candidates_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_candidates" ADD CONSTRAINT "_ElectionDraft_candidates_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_propositions" ADD CONSTRAINT "_ElectionDraft_propositions_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_propositions" ADD CONSTRAINT "_ElectionDraft_propositions_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_electionBallots" ADD CONSTRAINT "_ElectionDraft_electionBallots_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_electionBallots" ADD CONSTRAINT "_ElectionDraft_electionBallots_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_candidateFilingDocuments" ADD CONSTRAINT "_ElectionVersion_candidateFilingDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_candidateFilingDocuments" ADD CONSTRAINT "_ElectionVersion_candidateFilingDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_absenteeVotingDocuments" ADD CONSTRAINT "_ElectionVersion_absenteeVotingDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_absenteeVotingDocuments" ADD CONSTRAINT "_ElectionVersion_absenteeVotingDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_electionOfficialDocuments" ADD CONSTRAINT "_ElectionVersion_electionOfficialDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_electionOfficialDocuments" ADD CONSTRAINT "_ElectionVersion_electionOfficialDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_candidates" ADD CONSTRAINT "_ElectionVersion_candidates_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_candidates" ADD CONSTRAINT "_ElectionVersion_candidates_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_propositions" ADD CONSTRAINT "_ElectionVersion_propositions_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_propositions" ADD CONSTRAINT "_ElectionVersion_propositions_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_electionBallots" ADD CONSTRAINT "_ElectionVersion_electionBallots_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_electionBallots" ADD CONSTRAINT "_ElectionVersion_electionBallots_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_tags" ADD CONSTRAINT "_Election_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_tags" ADD CONSTRAINT "_Election_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_userGroups" ADD CONSTRAINT "_Election_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_userGroups" ADD CONSTRAINT "_Election_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_tags" ADD CONSTRAINT "_ElectionDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_tags" ADD CONSTRAINT "_ElectionDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_userGroups" ADD CONSTRAINT "_ElectionDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_userGroups" ADD CONSTRAINT "_ElectionDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_tags" ADD CONSTRAINT "_ElectionVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_tags" ADD CONSTRAINT "_ElectionVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_userGroups" ADD CONSTRAINT "_ElectionVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_userGroups" ADD CONSTRAINT "_ElectionVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
