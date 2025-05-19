/*
  Warnings:

  - You are about to drop the column `primaryAction` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `primaryContact` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `primaryAction` on the `BoardDraft` table. All the data in the column will be lost.
  - You are about to drop the column `primaryContact` on the `BoardDraft` table. All the data in the column will be lost.
  - You are about to drop the column `primaryAction` on the `BoardVersion` table. All the data in the column will be lost.
  - You are about to drop the column `primaryContact` on the `BoardVersion` table. All the data in the column will be lost.
  - You are about to drop the `_BoardDraft_secondaryActions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BoardVersion_secondaryActions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Board_secondaryActions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_primaryAction_fkey";

-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_primaryContact_fkey";

-- DropForeignKey
ALTER TABLE "BoardDraft" DROP CONSTRAINT "BoardDraft_primaryAction_fkey";

-- DropForeignKey
ALTER TABLE "BoardDraft" DROP CONSTRAINT "BoardDraft_primaryContact_fkey";

-- DropForeignKey
ALTER TABLE "BoardVersion" DROP CONSTRAINT "BoardVersion_primaryAction_fkey";

-- DropForeignKey
ALTER TABLE "BoardVersion" DROP CONSTRAINT "BoardVersion_primaryContact_fkey";

-- DropForeignKey
ALTER TABLE "_BoardDraft_secondaryActions" DROP CONSTRAINT "_BoardDraft_secondaryActions_A_fkey";

-- DropForeignKey
ALTER TABLE "_BoardDraft_secondaryActions" DROP CONSTRAINT "_BoardDraft_secondaryActions_B_fkey";

-- DropForeignKey
ALTER TABLE "_BoardVersion_secondaryActions" DROP CONSTRAINT "_BoardVersion_secondaryActions_A_fkey";

-- DropForeignKey
ALTER TABLE "_BoardVersion_secondaryActions" DROP CONSTRAINT "_BoardVersion_secondaryActions_B_fkey";

-- DropForeignKey
ALTER TABLE "_Board_secondaryActions" DROP CONSTRAINT "_Board_secondaryActions_A_fkey";

-- DropForeignKey
ALTER TABLE "_Board_secondaryActions" DROP CONSTRAINT "_Board_secondaryActions_B_fkey";

-- DropIndex
DROP INDEX "Board_primaryAction_idx";

-- DropIndex
DROP INDEX "Board_primaryContact_idx";

-- DropIndex
DROP INDEX "BoardDraft_primaryAction_idx";

-- DropIndex
DROP INDEX "BoardDraft_primaryContact_idx";

-- DropIndex
DROP INDEX "BoardVersion_primaryAction_idx";

-- DropIndex
DROP INDEX "BoardVersion_primaryContact_idx";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "primaryAction",
DROP COLUMN "primaryContact",
ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "BoardDraft" DROP COLUMN "primaryAction",
DROP COLUMN "primaryContact",
ADD COLUMN     "actions" TEXT;

-- AlterTable
ALTER TABLE "BoardVersion" DROP COLUMN "primaryAction",
DROP COLUMN "primaryContact",
ADD COLUMN     "actions" TEXT;

-- DropTable
DROP TABLE "_BoardDraft_secondaryActions";

-- DropTable
DROP TABLE "_BoardVersion_secondaryActions";

-- DropTable
DROP TABLE "_Board_secondaryActions";

-- CreateIndex
CREATE INDEX "Board_actions_idx" ON "Board"("actions");

-- CreateIndex
CREATE INDEX "BoardDraft_actions_idx" ON "BoardDraft"("actions");

-- CreateIndex
CREATE INDEX "BoardVersion_actions_idx" ON "BoardVersion"("actions");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
