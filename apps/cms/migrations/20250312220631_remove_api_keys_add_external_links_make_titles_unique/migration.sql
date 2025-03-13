/*
  Warnings:

  - You are about to drop the `ApiKey` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `AssemblyDistrict` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Community` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Facility` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `OrgUnit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Park` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Trail` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ApiKey" DROP CONSTRAINT "ApiKey_user_fkey";

-- DropIndex
DROP INDEX "AssemblyDistrict_title_idx";

-- DropIndex
DROP INDEX "Community_title_idx";

-- DropIndex
DROP INDEX "Facility_title_idx";

-- DropIndex
DROP INDEX "Image_title_idx";

-- DropIndex
DROP INDEX "OrgUnit_title_idx";

-- DropIndex
DROP INDEX "Park_title_idx";

-- DropIndex
DROP INDEX "Service_title_idx";

-- DropIndex
DROP INDEX "Trail_title_idx";

-- DropTable
DROP TABLE "ApiKey";

-- CreateTable
CREATE TABLE "ExternalLink" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "ExternalLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExternalLink_title_key" ON "ExternalLink"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalLink_url_key" ON "ExternalLink"("url");

-- CreateIndex
CREATE UNIQUE INDEX "AssemblyDistrict_title_key" ON "AssemblyDistrict"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Community_title_key" ON "Community"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Facility_title_key" ON "Facility"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Image_title_key" ON "Image"("title");

-- CreateIndex
CREATE UNIQUE INDEX "OrgUnit_title_key" ON "OrgUnit"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Park_title_key" ON "Park"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Service_title_key" ON "Service"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Trail_title_key" ON "Trail"("title");
