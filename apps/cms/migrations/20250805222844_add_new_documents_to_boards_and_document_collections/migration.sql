-- CreateTable
CREATE TABLE "_BoardPage_newDocuments" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DocumentCollection_newDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BoardPage_newDocuments_AB_unique" ON "_BoardPage_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardPage_newDocuments_B_index" ON "_BoardPage_newDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DocumentCollection_newDocuments_AB_unique" ON "_DocumentCollection_newDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_DocumentCollection_newDocuments_B_index" ON "_DocumentCollection_newDocuments"("B");

-- AddForeignKey
ALTER TABLE "_BoardPage_newDocuments" ADD CONSTRAINT "_BoardPage_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_newDocuments" ADD CONSTRAINT "_BoardPage_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentCollection_newDocuments" ADD CONSTRAINT "_DocumentCollection_newDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "DocumentCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentCollection_newDocuments" ADD CONSTRAINT "_DocumentCollection_newDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "DocumentListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
