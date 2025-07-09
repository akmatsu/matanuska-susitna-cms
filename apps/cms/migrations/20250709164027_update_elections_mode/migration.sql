/*
  Warnings:

  - You are about to drop the `_ElectionDraft_absenteeVotingDocuments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ElectionDraft_candidates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ElectionDraft_electionOfficialDocuments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ElectionVersion_absenteeVotingDocuments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ElectionVersion_candidates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ElectionVersion_electionOfficialDocuments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Election_absenteeVotingDocuments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Election_candidates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Election_electionOfficialDocuments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ElectionDraft_absenteeVotingDocuments" DROP CONSTRAINT "_ElectionDraft_absenteeVotingDocuments_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionDraft_absenteeVotingDocuments" DROP CONSTRAINT "_ElectionDraft_absenteeVotingDocuments_B_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionDraft_candidates" DROP CONSTRAINT "_ElectionDraft_candidates_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionDraft_candidates" DROP CONSTRAINT "_ElectionDraft_candidates_B_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionDraft_electionOfficialDocuments" DROP CONSTRAINT "_ElectionDraft_electionOfficialDocuments_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionDraft_electionOfficialDocuments" DROP CONSTRAINT "_ElectionDraft_electionOfficialDocuments_B_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_absenteeVotingDocuments" DROP CONSTRAINT "_ElectionVersion_absenteeVotingDocuments_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_absenteeVotingDocuments" DROP CONSTRAINT "_ElectionVersion_absenteeVotingDocuments_B_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_candidates" DROP CONSTRAINT "_ElectionVersion_candidates_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_candidates" DROP CONSTRAINT "_ElectionVersion_candidates_B_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_electionOfficialDocuments" DROP CONSTRAINT "_ElectionVersion_electionOfficialDocuments_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_electionOfficialDocuments" DROP CONSTRAINT "_ElectionVersion_electionOfficialDocuments_B_fkey";

-- DropForeignKey
ALTER TABLE "_Election_absenteeVotingDocuments" DROP CONSTRAINT "_Election_absenteeVotingDocuments_A_fkey";

-- DropForeignKey
ALTER TABLE "_Election_absenteeVotingDocuments" DROP CONSTRAINT "_Election_absenteeVotingDocuments_B_fkey";

-- DropForeignKey
ALTER TABLE "_Election_candidates" DROP CONSTRAINT "_Election_candidates_A_fkey";

-- DropForeignKey
ALTER TABLE "_Election_candidates" DROP CONSTRAINT "_Election_candidates_B_fkey";

-- DropForeignKey
ALTER TABLE "_Election_electionOfficialDocuments" DROP CONSTRAINT "_Election_electionOfficialDocuments_A_fkey";

-- DropForeignKey
ALTER TABLE "_Election_electionOfficialDocuments" DROP CONSTRAINT "_Election_electionOfficialDocuments_B_fkey";

-- AlterTable
ALTER TABLE "Election" ADD COLUMN     "absenteeVotingApplication" TEXT,
ADD COLUMN     "candidates" TEXT,
ADD COLUMN     "earlyVotingStartDate" TIMESTAMP(3),
ADD COLUMN     "electionDate" TIMESTAMP(3),
ADD COLUMN     "electionOfficialApplication" TEXT,
ADD COLUMN     "voterRegistrationDeadline" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ElectionDraft" ADD COLUMN     "absenteeVotingApplication" TEXT,
ADD COLUMN     "candidates" TEXT,
ADD COLUMN     "earlyVotingStartDate" TIMESTAMP(3),
ADD COLUMN     "electionDate" TIMESTAMP(3),
ADD COLUMN     "electionOfficialApplication" TEXT,
ADD COLUMN     "voterRegistrationDeadline" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ElectionVersion" ADD COLUMN     "absenteeVotingApplication" TEXT,
ADD COLUMN     "candidates" TEXT,
ADD COLUMN     "earlyVotingStartDate" TIMESTAMP(3),
ADD COLUMN     "electionDate" TIMESTAMP(3),
ADD COLUMN     "electionOfficialApplication" TEXT,
ADD COLUMN     "voterRegistrationDeadline" TIMESTAMP(3);

-- DropTable
DROP TABLE "_ElectionDraft_absenteeVotingDocuments";

-- DropTable
DROP TABLE "_ElectionDraft_candidates";

-- DropTable
DROP TABLE "_ElectionDraft_electionOfficialDocuments";

-- DropTable
DROP TABLE "_ElectionVersion_absenteeVotingDocuments";

-- DropTable
DROP TABLE "_ElectionVersion_candidates";

-- DropTable
DROP TABLE "_ElectionVersion_electionOfficialDocuments";

-- DropTable
DROP TABLE "_Election_absenteeVotingDocuments";

-- DropTable
DROP TABLE "_Election_candidates";

-- DropTable
DROP TABLE "_Election_electionOfficialDocuments";

-- CreateIndex
CREATE INDEX "Election_absenteeVotingApplication_idx" ON "Election"("absenteeVotingApplication");

-- CreateIndex
CREATE INDEX "Election_electionOfficialApplication_idx" ON "Election"("electionOfficialApplication");

-- CreateIndex
CREATE INDEX "Election_candidates_idx" ON "Election"("candidates");

-- CreateIndex
CREATE INDEX "ElectionDraft_absenteeVotingApplication_idx" ON "ElectionDraft"("absenteeVotingApplication");

-- CreateIndex
CREATE INDEX "ElectionDraft_electionOfficialApplication_idx" ON "ElectionDraft"("electionOfficialApplication");

-- CreateIndex
CREATE INDEX "ElectionDraft_candidates_idx" ON "ElectionDraft"("candidates");

-- CreateIndex
CREATE INDEX "ElectionVersion_absenteeVotingApplication_idx" ON "ElectionVersion"("absenteeVotingApplication");

-- CreateIndex
CREATE INDEX "ElectionVersion_electionOfficialApplication_idx" ON "ElectionVersion"("electionOfficialApplication");

-- CreateIndex
CREATE INDEX "ElectionVersion_candidates_idx" ON "ElectionVersion"("candidates");

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_absenteeVotingApplication_fkey" FOREIGN KEY ("absenteeVotingApplication") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_electionOfficialApplication_fkey" FOREIGN KEY ("electionOfficialApplication") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Election" ADD CONSTRAINT "Election_candidates_fkey" FOREIGN KEY ("candidates") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_absenteeVotingApplication_fkey" FOREIGN KEY ("absenteeVotingApplication") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_electionOfficialApplication_fkey" FOREIGN KEY ("electionOfficialApplication") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionDraft" ADD CONSTRAINT "ElectionDraft_candidates_fkey" FOREIGN KEY ("candidates") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_absenteeVotingApplication_fkey" FOREIGN KEY ("absenteeVotingApplication") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_electionOfficialApplication_fkey" FOREIGN KEY ("electionOfficialApplication") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionVersion" ADD CONSTRAINT "ElectionVersion_candidates_fkey" FOREIGN KEY ("candidates") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
