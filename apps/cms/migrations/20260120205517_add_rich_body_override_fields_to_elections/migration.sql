-- AlterTable
ALTER TABLE "Election" ADD COLUMN     "absenteeVotingBody" TEXT,
ADD COLUMN     "candidateBody" TEXT,
ADD COLUMN     "electionOfficialBody" TEXT,
ADD COLUMN     "voterInfoBody" TEXT;

-- AlterTable
ALTER TABLE "ElectionDraft" ADD COLUMN     "absenteeVotingBody" TEXT,
ADD COLUMN     "candidateBody" TEXT,
ADD COLUMN     "electionOfficialBody" TEXT,
ADD COLUMN     "voterInfoBody" TEXT;

-- AlterTable
ALTER TABLE "ElectionVersion" ADD COLUMN     "absenteeVotingBody" TEXT,
ADD COLUMN     "candidateBody" TEXT,
ADD COLUMN     "electionOfficialBody" TEXT,
ADD COLUMN     "voterInfoBody" TEXT;
