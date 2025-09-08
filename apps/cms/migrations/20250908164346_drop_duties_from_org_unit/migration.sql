/*
  Warnings:

  - You are about to drop the column `duties` on the `OrgUnit` table. All the data in the column will be lost.
  - You are about to drop the column `duties` on the `OrgUnitDraft` table. All the data in the column will be lost.
  - You are about to drop the column `duties` on the `OrgUnitVersion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrgUnit" DROP COLUMN "duties";

-- AlterTable
ALTER TABLE "OrgUnitDraft" DROP COLUMN "duties";

-- AlterTable
ALTER TABLE "OrgUnitVersion" DROP COLUMN "duties";
