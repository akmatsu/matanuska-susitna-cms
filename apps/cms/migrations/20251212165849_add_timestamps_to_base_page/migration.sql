/*
  Warnings:

  - You are about to drop the column `slug` on the `PolicyDraft` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `PolicyVersion` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PolicyDraft_slug_key";

-- DropIndex
DROP INDEX "PolicyVersion_slug_key";

-- AlterTable
ALTER TABLE "Policy" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PolicyDraft" DROP COLUMN "slug",
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PolicyVersion" DROP COLUMN "slug",
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
