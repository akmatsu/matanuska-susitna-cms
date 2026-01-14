-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "author" TEXT;

-- AlterTable
ALTER TABLE "PostDraft" ADD COLUMN     "author" TEXT;

-- AlterTable
ALTER TABLE "PostVersion" ADD COLUMN     "author" TEXT;

-- CreateIndex
CREATE INDEX "Post_author_idx" ON "Post"("author");

-- CreateIndex
CREATE INDEX "PostDraft_author_idx" ON "PostDraft"("author");

-- CreateIndex
CREATE INDEX "PostVersion_author_idx" ON "PostVersion"("author");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostVersion" ADD CONSTRAINT "PostVersion_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostDraft" ADD CONSTRAINT "PostDraft_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
