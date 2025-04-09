-- CreateTable
CREATE TABLE "PublicNotice" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "effectiveDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),

    CONSTRAINT "PublicNotice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Contact_publicNotices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PublicNotice_title_key" ON "PublicNotice"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PublicNotice_slug_key" ON "PublicNotice"("slug");

-- CreateIndex
CREATE INDEX "PublicNotice_owner_idx" ON "PublicNotice"("owner");

-- CreateIndex
CREATE INDEX "PublicNotice_actions_idx" ON "PublicNotice"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "_Contact_publicNotices_AB_unique" ON "_Contact_publicNotices"("A", "B");

-- CreateIndex
CREATE INDEX "_Contact_publicNotices_B_index" ON "_Contact_publicNotices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_documents_AB_unique" ON "_PublicNotice_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_documents_B_index" ON "_PublicNotice_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_tags_AB_unique" ON "_PublicNotice_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_tags_B_index" ON "_PublicNotice_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_userGroups_AB_unique" ON "_PublicNotice_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_userGroups_B_index" ON "_PublicNotice_userGroups"("B");

-- AddForeignKey
ALTER TABLE "PublicNotice" ADD CONSTRAINT "PublicNotice_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNotice" ADD CONSTRAINT "PublicNotice_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_publicNotices" ADD CONSTRAINT "_Contact_publicNotices_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact_publicNotices" ADD CONSTRAINT "_Contact_publicNotices_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_documents" ADD CONSTRAINT "_PublicNotice_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_documents" ADD CONSTRAINT "_PublicNotice_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_tags" ADD CONSTRAINT "_PublicNotice_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_tags" ADD CONSTRAINT "_PublicNotice_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_userGroups" ADD CONSTRAINT "_PublicNotice_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_userGroups" ADD CONSTRAINT "_PublicNotice_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
