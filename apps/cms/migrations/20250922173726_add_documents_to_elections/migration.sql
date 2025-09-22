-- CreateTable
CREATE TABLE "_Election_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElectionDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Election_documents_AB_unique" ON "_Election_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Election_documents_B_index" ON "_Election_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionVersion_documents_AB_unique" ON "_ElectionVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionVersion_documents_B_index" ON "_ElectionVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElectionDraft_documents_AB_unique" ON "_ElectionDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ElectionDraft_documents_B_index" ON "_ElectionDraft_documents"("B");

-- AddForeignKey
ALTER TABLE "_Election_documents" ADD CONSTRAINT "_Election_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Election_documents" ADD CONSTRAINT "_Election_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_documents" ADD CONSTRAINT "_ElectionVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_documents" ADD CONSTRAINT "_ElectionVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_documents" ADD CONSTRAINT "_ElectionDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_documents" ADD CONSTRAINT "_ElectionDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;
