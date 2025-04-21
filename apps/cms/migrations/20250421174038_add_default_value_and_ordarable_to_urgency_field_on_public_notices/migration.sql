/*
  Warnings:

  - Made the column `urgency` on table `PublicNotice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PublicNotice" ALTER COLUMN "urgency" SET NOT NULL;
