-- CreateTable
CREATE TABLE "_Url_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Url_tags_AB_unique" ON "_Url_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Url_tags_B_index" ON "_Url_tags"("B");

-- AddForeignKey
ALTER TABLE "_Url_tags" ADD CONSTRAINT "_Url_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Url_tags" ADD CONSTRAINT "_Url_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Url"("id") ON DELETE CASCADE ON UPDATE CASCADE;
