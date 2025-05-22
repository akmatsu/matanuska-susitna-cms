-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "meetingSchedule" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "meetingSchedule" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "BoardVersion" ADD COLUMN     "meetingSchedule" TEXT NOT NULL DEFAULT '';
