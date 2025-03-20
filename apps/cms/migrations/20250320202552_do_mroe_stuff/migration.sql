/*
  Warnings:

  - You are about to drop the `ExternalLin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExternalLin" DROP CONSTRAINT "ExternalLin_url_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_primaryAction_fkey";

-- DropForeignKey
ALTER TABLE "_Service_secondaryActions" DROP CONSTRAINT "_Service_secondaryActions_A_fkey";

-- DropTable
DROP TABLE "ExternalLin";

-- CreateTable
CREATE TABLE "ExternalLink" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "url" TEXT,

    CONSTRAINT "ExternalLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExternalLink_url_idx" ON "ExternalLink"("url");

-- AddForeignKey
ALTER TABLE "ExternalLink" ADD CONSTRAINT "ExternalLink_url_fkey" FOREIGN KEY ("url") REFERENCES "Url"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_secondaryActions" ADD CONSTRAINT "_Service_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
