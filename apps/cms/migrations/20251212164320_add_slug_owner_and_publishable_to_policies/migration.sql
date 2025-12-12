/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Policy` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `PolicyDraft` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `PolicyVersion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Policy" ADD COLUMN     "owner" TEXT,
ADD COLUMN     "publishAt" TIMESTAMP(3),
ADD COLUMN     "reviewDate" TIMESTAMP(3),
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "unpublishAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PolicyDraft" ADD COLUMN     "owner" TEXT,
ADD COLUMN     "publishAt" TIMESTAMP(3),
ADD COLUMN     "reviewDate" TIMESTAMP(3),
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "unpublishAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PolicyVersion" ADD COLUMN     "owner" TEXT,
ADD COLUMN     "publishAt" TIMESTAMP(3),
ADD COLUMN     "reviewDate" TIMESTAMP(3),
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "unpublishAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Policy_slug_key" ON "Policy"("slug");

-- CreateIndex
CREATE INDEX "Policy_owner_idx" ON "Policy"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyDraft_slug_key" ON "PolicyDraft"("slug");

-- CreateIndex
CREATE INDEX "PolicyDraft_owner_idx" ON "PolicyDraft"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyVersion_slug_key" ON "PolicyVersion"("slug");

-- CreateIndex
CREATE INDEX "PolicyVersion_owner_idx" ON "PolicyVersion"("owner");

-- AddForeignKey
ALTER TABLE "Policy" ADD CONSTRAINT "Policy_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyVersion" ADD CONSTRAINT "PolicyVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyDraft" ADD CONSTRAINT "PolicyDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
