/*
  Warnings:

  - You are about to drop the column `meetingSchedule` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `meetingSchedule` on the `BoardDraft` table. All the data in the column will be lost.
  - You are about to drop the column `meetingSchedule` on the `BoardVersion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Board" DROP COLUMN "meetingSchedule",
ADD COLUMN     "calendarId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "calendarQueryString" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "BoardDraft" DROP COLUMN "meetingSchedule",
ADD COLUMN     "calendarId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "calendarQueryString" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "BoardVersion" DROP COLUMN "meetingSchedule",
ADD COLUMN     "calendarId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "calendarQueryString" TEXT NOT NULL DEFAULT '';
