/*
  Warnings:

  - You are about to drop the column `actions` on the `BoardPage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BoardPage" DROP CONSTRAINT "BoardPage_actions_fkey";

-- DropIndex
DROP INDEX "BoardPage_actions_idx";

-- AlterTable
ALTER TABLE "BoardPage" DROP COLUMN "actions";

-- CreateTable
CREATE TABLE "_BoardPage_actions" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BoardPage_actions_AB_unique" ON "_BoardPage_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardPage_actions_B_index" ON "_BoardPage_actions"("B");

-- AddForeignKey
ALTER TABLE "_BoardPage_actions" ADD CONSTRAINT "_BoardPage_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_actions" ADD CONSTRAINT "_BoardPage_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
