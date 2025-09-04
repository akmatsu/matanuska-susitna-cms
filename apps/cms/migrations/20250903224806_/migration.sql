-- AlterTable
ALTER TABLE "Highlight" ADD COLUMN     "owner" TEXT,
ADD COLUMN     "priority" INTEGER DEFAULT 4;

-- CreateTable
CREATE TABLE "_Highlight_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Highlight_userGroups_AB_unique" ON "_Highlight_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Highlight_userGroups_B_index" ON "_Highlight_userGroups"("B");

-- CreateIndex
CREATE INDEX "Highlight_owner_idx" ON "Highlight"("owner");

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Highlight_userGroups" ADD CONSTRAINT "_Highlight_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Highlight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Highlight_userGroups" ADD CONSTRAINT "_Highlight_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
