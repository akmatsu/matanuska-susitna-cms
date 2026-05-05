-- CreateTable
CREATE TABLE "_ElectionsPage_tags" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionsPage_tags_AB_unique" ON "_ElectionsPage_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionsPage_tags_B_index" ON "_ElectionsPage_tags"("B");

-- AddForeignKey
ALTER TABLE "_ElectionsPage_tags" ADD CONSTRAINT "_ElectionsPage_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionsPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionsPage_tags" ADD CONSTRAINT "_ElectionsPage_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
