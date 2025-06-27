-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "directory" TEXT;

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "directory" TEXT;

-- AlterTable
ALTER TABLE "BoardVersion" ADD COLUMN     "directory" TEXT;

-- CreateIndex
CREATE INDEX "Board_directory_idx" ON "Board"("directory");

-- CreateIndex
CREATE INDEX "BoardDraft_directory_idx" ON "BoardDraft"("directory");

-- CreateIndex
CREATE INDEX "BoardVersion_directory_idx" ON "BoardVersion"("directory");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_directory_fkey" FOREIGN KEY ("directory") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardDraft" ADD CONSTRAINT "BoardDraft_directory_fkey" FOREIGN KEY ("directory") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardVersion" ADD CONSTRAINT "BoardVersion_directory_fkey" FOREIGN KEY ("directory") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
