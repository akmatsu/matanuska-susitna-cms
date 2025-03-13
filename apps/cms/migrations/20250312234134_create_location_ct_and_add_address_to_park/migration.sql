/*
  Warnings:

  - You are about to drop the column `city` on the `Park` table. All the data in the column will be lost.
  - You are about to drop the column `lineOne` on the `Park` table. All the data in the column will be lost.
  - You are about to drop the column `lineTwo` on the `Park` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Park` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Park` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Park" DROP COLUMN "city",
DROP COLUMN "lineOne",
DROP COLUMN "lineTwo",
DROP COLUMN "state",
DROP COLUMN "zip",
ADD COLUMN     "address" TEXT;

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "lineOne" TEXT NOT NULL DEFAULT '',
    "lineTwo" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "state" TEXT NOT NULL DEFAULT 'AK',
    "zip" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_title_key" ON "Location"("title");

-- CreateIndex
CREATE INDEX "Park_address_idx" ON "Park"("address");

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
