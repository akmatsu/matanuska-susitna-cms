-- CreateTable
CREATE TABLE "_Document_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Document_userGroups_AB_unique" ON "_Document_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Document_userGroups_B_index" ON "_Document_userGroups"("B");

-- AddForeignKey
ALTER TABLE "_Document_userGroups" ADD CONSTRAINT "_Document_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Document_userGroups" ADD CONSTRAINT "_Document_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
