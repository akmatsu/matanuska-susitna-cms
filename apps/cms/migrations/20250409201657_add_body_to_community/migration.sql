/*
  Warnings:

  - You are about to drop the column `actionLabel` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `actionUrl` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "body" TEXT;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "actionLabel",
DROP COLUMN "actionUrl";
