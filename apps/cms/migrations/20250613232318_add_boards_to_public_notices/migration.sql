-- CreateTable
CREATE TABLE "_PublicNotice_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_boards_AB_unique" ON "_PublicNotice_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_boards_B_index" ON "_PublicNotice_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_boards_AB_unique" ON "_PublicNoticeDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_boards_B_index" ON "_PublicNoticeDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_boards_AB_unique" ON "_PublicNoticeVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_boards_B_index" ON "_PublicNoticeVersion_boards"("B");

-- AddForeignKey
ALTER TABLE "_PublicNotice_boards" ADD CONSTRAINT "_PublicNotice_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_boards" ADD CONSTRAINT "_PublicNotice_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_boards" ADD CONSTRAINT "_PublicNoticeDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_boards" ADD CONSTRAINT "_PublicNoticeDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_boards" ADD CONSTRAINT "_PublicNoticeVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_boards" ADD CONSTRAINT "_PublicNoticeVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
