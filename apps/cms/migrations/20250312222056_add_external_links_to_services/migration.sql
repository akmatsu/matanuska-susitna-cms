-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "primaryAction" TEXT;

-- CreateTable
CREATE TABLE "_Service_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Service_secondaryActions_AB_unique" ON "_Service_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_secondaryActions_B_index" ON "_Service_secondaryActions"("B");

-- CreateIndex
CREATE INDEX "Service_primaryAction_idx" ON "Service"("primaryAction");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_secondaryActions" ADD CONSTRAINT "_Service_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_secondaryActions" ADD CONSTRAINT "_Service_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
