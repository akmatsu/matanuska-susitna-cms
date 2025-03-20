/*
  Warnings:

  - You are about to drop the `ExternalLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkedItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Highlight" DROP CONSTRAINT "Highlight_linkedItem_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_primaryAction_fkey";

-- DropForeignKey
ALTER TABLE "_Service_secondaryActions" DROP CONSTRAINT "_Service_secondaryActions_A_fkey";

-- DropTable
DROP TABLE "ExternalLink";

-- DropTable
DROP TABLE "LinkedItem";

-- CreateTable
CREATE TABLE "ExternalLin" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "url" TEXT,

    CONSTRAINT "ExternalLin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternalLink" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "selectItem" JSONB,

    CONSTRAINT "InternalLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Url" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExternalLin_url_idx" ON "ExternalLin"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Url_title_key" ON "Url"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Url_url_key" ON "Url"("url");

-- CreateIndex
CREATE INDEX "Url_owner_idx" ON "Url"("owner");

-- AddForeignKey
ALTER TABLE "ExternalLin" ADD CONSTRAINT "ExternalLin_url_fkey" FOREIGN KEY ("url") REFERENCES "Url"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_linkedItem_fkey" FOREIGN KEY ("linkedItem") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_secondaryActions" ADD CONSTRAINT "_Service_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
