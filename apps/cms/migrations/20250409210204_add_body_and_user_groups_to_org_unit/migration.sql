-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "body" TEXT;

-- CreateTable
CREATE TABLE "_OrgUnit_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_userGroups_AB_unique" ON "_OrgUnit_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_userGroups_B_index" ON "_OrgUnit_userGroups"("B");

-- AddForeignKey
ALTER TABLE "_OrgUnit_userGroups" ADD CONSTRAINT "_OrgUnit_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_userGroups" ADD CONSTRAINT "_OrgUnit_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
