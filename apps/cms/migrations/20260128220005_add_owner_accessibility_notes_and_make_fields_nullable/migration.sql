-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "accessibilityNotes" TEXT,
ADD COLUMN     "owner" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "editorNotes" DROP NOT NULL,
ALTER COLUMN "editorNotes" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Document_owner_idx" ON "Document"("owner");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
