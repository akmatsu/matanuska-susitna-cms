/*
  Warnings:

  - You are about to drop the column `publishAt` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the column `reviewDate` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the column `unpublishAt` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the `TestModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestModelDraft` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestModelVersion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModelDraft_contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModelDraft_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModelDraft_userGroups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModelVersion_contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModelVersion_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModelVersion_userGroups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModel_contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModel_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestModel_userGroups` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestModel" DROP CONSTRAINT "TestModel_currentVersion_fkey";

-- DropForeignKey
ALTER TABLE "TestModel" DROP CONSTRAINT "TestModel_owner_fkey";

-- DropForeignKey
ALTER TABLE "TestModelDraft" DROP CONSTRAINT "TestModelDraft_original_fkey";

-- DropForeignKey
ALTER TABLE "TestModelDraft" DROP CONSTRAINT "TestModelDraft_owner_fkey";

-- DropForeignKey
ALTER TABLE "TestModelVersion" DROP CONSTRAINT "TestModelVersion_original_fkey";

-- DropForeignKey
ALTER TABLE "TestModelVersion" DROP CONSTRAINT "TestModelVersion_owner_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelDraft_contacts" DROP CONSTRAINT "_TestModelDraft_contacts_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelDraft_contacts" DROP CONSTRAINT "_TestModelDraft_contacts_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelDraft_tags" DROP CONSTRAINT "_TestModelDraft_tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelDraft_tags" DROP CONSTRAINT "_TestModelDraft_tags_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelDraft_userGroups" DROP CONSTRAINT "_TestModelDraft_userGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelDraft_userGroups" DROP CONSTRAINT "_TestModelDraft_userGroups_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelVersion_contacts" DROP CONSTRAINT "_TestModelVersion_contacts_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelVersion_contacts" DROP CONSTRAINT "_TestModelVersion_contacts_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelVersion_tags" DROP CONSTRAINT "_TestModelVersion_tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelVersion_tags" DROP CONSTRAINT "_TestModelVersion_tags_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelVersion_userGroups" DROP CONSTRAINT "_TestModelVersion_userGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModelVersion_userGroups" DROP CONSTRAINT "_TestModelVersion_userGroups_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModel_contacts" DROP CONSTRAINT "_TestModel_contacts_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModel_contacts" DROP CONSTRAINT "_TestModel_contacts_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModel_tags" DROP CONSTRAINT "_TestModel_tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModel_tags" DROP CONSTRAINT "_TestModel_tags_B_fkey";

-- DropForeignKey
ALTER TABLE "_TestModel_userGroups" DROP CONSTRAINT "_TestModel_userGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestModel_userGroups" DROP CONSTRAINT "_TestModel_userGroups_B_fkey";

-- AlterTable
ALTER TABLE "Highlight" DROP COLUMN "publishAt",
DROP COLUMN "reviewDate",
DROP COLUMN "unpublishAt";

-- DropTable
DROP TABLE "TestModel";

-- DropTable
DROP TABLE "TestModelDraft";

-- DropTable
DROP TABLE "TestModelVersion";

-- DropTable
DROP TABLE "_TestModelDraft_contacts";

-- DropTable
DROP TABLE "_TestModelDraft_tags";

-- DropTable
DROP TABLE "_TestModelDraft_userGroups";

-- DropTable
DROP TABLE "_TestModelVersion_contacts";

-- DropTable
DROP TABLE "_TestModelVersion_tags";

-- DropTable
DROP TABLE "_TestModelVersion_userGroups";

-- DropTable
DROP TABLE "_TestModel_contacts";

-- DropTable
DROP TABLE "_TestModel_tags";

-- DropTable
DROP TABLE "_TestModel_userGroups";
