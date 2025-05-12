/*
  Warnings:

  - You are about to drop the column `mapId` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `editorNotes` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `publishAt` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the column `reviewDate` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the column `unpublishAt` on the `Highlight` table. All the data in the column will be lost.
  - You are about to drop the `_Contact_facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_orgUnits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_parks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_publicNotices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_services` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Contact_trails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OrgUnit_services` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Tag_trails` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[currentVersion]` on the table `AssemblyDistrict` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Community` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `DocumentCollection` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Facility` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `OrgUnit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Park` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `PublicNotice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[currentVersion]` on the table `Trail` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_user_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_facilities" DROP CONSTRAINT "_Contact_facilities_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_facilities" DROP CONSTRAINT "_Contact_facilities_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_orgUnits" DROP CONSTRAINT "_Contact_orgUnits_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_orgUnits" DROP CONSTRAINT "_Contact_orgUnits_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_parks" DROP CONSTRAINT "_Contact_parks_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_parks" DROP CONSTRAINT "_Contact_parks_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_publicNotices" DROP CONSTRAINT "_Contact_publicNotices_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_publicNotices" DROP CONSTRAINT "_Contact_publicNotices_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_services" DROP CONSTRAINT "_Contact_services_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_services" DROP CONSTRAINT "_Contact_services_B_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_trails" DROP CONSTRAINT "_Contact_trails_A_fkey";

-- DropForeignKey
ALTER TABLE "_Contact_trails" DROP CONSTRAINT "_Contact_trails_B_fkey";

-- DropForeignKey
ALTER TABLE "_OrgUnit_services" DROP CONSTRAINT "_OrgUnit_services_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrgUnit_services" DROP CONSTRAINT "_OrgUnit_services_B_fkey";

-- DropForeignKey
ALTER TABLE "_Tag_trails" DROP CONSTRAINT "_Tag_trails_A_fkey";

-- DropForeignKey
ALTER TABLE "_Tag_trails" DROP CONSTRAINT "_Tag_trails_B_fkey";

-- DropIndex
DROP INDEX "Contact_user_key";

-- AlterTable
ALTER TABLE "AssemblyDistrict" ADD COLUMN     "actions" TEXT,
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Community" DROP COLUMN "mapId",
ADD COLUMN     "actions" TEXT,
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "editorNotes",
DROP COLUMN "user";

-- AlterTable
ALTER TABLE "DocumentCollection" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "actions" TEXT,
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Highlight" DROP COLUMN "publishAt",
DROP COLUMN "reviewDate",
DROP COLUMN "unpublishAt";

-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "actions" TEXT,
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "services" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "actions" TEXT,
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "PublicNotice" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "actions" TEXT,
ADD COLUMN     "currentVersion" TEXT,
ADD COLUMN     "makeDrafts" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpublished';

-- DropTable
DROP TABLE "_Contact_facilities";

-- DropTable
DROP TABLE "_Contact_orgUnits";

-- DropTable
DROP TABLE "_Contact_parks";

-- DropTable
DROP TABLE "_Contact_publicNotices";

-- DropTable
DROP TABLE "_Contact_services";

-- DropTable
DROP TABLE "_Contact_trails";

-- DropTable
DROP TABLE "_OrgUnit_services";

-- DropTable
DROP TABLE "_Tag_trails";

-- CreateTable
CREATE TABLE "AssemblyDistrictDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "photo" TEXT,
    "memberName" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT,
    "phone" TEXT,
    "fax" TEXT,
    "termStart" TIMESTAMP(3),
    "termEnd" TIMESTAMP(3),
    "publish" TEXT,

    CONSTRAINT "AssemblyDistrictDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssemblyDistrictVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "photo" TEXT,
    "memberName" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT,
    "phone" TEXT,
    "fax" TEXT,
    "termStart" TIMESTAMP(3),
    "termEnd" TIMESTAMP(3),
    "republish" TEXT,

    CONSTRAINT "AssemblyDistrictVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publish" TEXT,

    CONSTRAINT "CommunityDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "republish" TEXT,

    CONSTRAINT "CommunityVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilityDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "park" TEXT,
    "publish" TEXT,

    CONSTRAINT "FacilityDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilityVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "park" TEXT,
    "republish" TEXT,

    CONSTRAINT "FacilityVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgUnitDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "showPage" BOOLEAN NOT NULL DEFAULT true,
    "services" TEXT,
    "parent" TEXT,
    "publish" TEXT,

    CONSTRAINT "OrgUnitDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgUnitVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "showPage" BOOLEAN NOT NULL DEFAULT true,
    "services" TEXT,
    "parent" TEXT,
    "republish" TEXT,

    CONSTRAINT "OrgUnitVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publish" TEXT,

    CONSTRAINT "ParkDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "republish" TEXT,

    CONSTRAINT "ParkVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicNoticeDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "urgency" INTEGER NOT NULL DEFAULT 2,
    "effectiveDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "publish" TEXT,

    CONSTRAINT "PublicNoticeDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicNoticeVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "urgency" INTEGER NOT NULL DEFAULT 2,
    "effectiveDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "republish" TEXT,

    CONSTRAINT "PublicNoticeVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "primaryAction" TEXT,
    "primaryContact" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "editorNotes" TEXT NOT NULL DEFAULT '',
    "publish" TEXT,

    CONSTRAINT "ServiceDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "primaryAction" TEXT,
    "primaryContact" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "editorNotes" TEXT NOT NULL DEFAULT '',
    "republish" TEXT,

    CONSTRAINT "ServiceVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "open" BOOLEAN NOT NULL DEFAULT false,
    "summer" BOOLEAN NOT NULL DEFAULT false,
    "fall" BOOLEAN NOT NULL DEFAULT false,
    "winter" BOOLEAN NOT NULL DEFAULT false,
    "spring" BOOLEAN NOT NULL DEFAULT false,
    "hiking" BOOLEAN NOT NULL DEFAULT false,
    "biking" BOOLEAN NOT NULL DEFAULT false,
    "horsebackRiding" BOOLEAN NOT NULL DEFAULT false,
    "crossCountrySkiing" BOOLEAN NOT NULL DEFAULT false,
    "snowshoeing" BOOLEAN NOT NULL DEFAULT false,
    "frisbeeGolf" BOOLEAN NOT NULL DEFAULT false,
    "dogWalking" BOOLEAN NOT NULL DEFAULT false,
    "running" BOOLEAN NOT NULL DEFAULT false,
    "snowMachining" BOOLEAN NOT NULL DEFAULT false,
    "atv" BOOLEAN NOT NULL DEFAULT false,
    "dirtBiking" BOOLEAN NOT NULL DEFAULT false,
    "mushing" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" TEXT,
    "length" TEXT NOT NULL DEFAULT '',
    "elevationChange" TEXT NOT NULL DEFAULT '',
    "park" TEXT,
    "publish" TEXT,

    CONSTRAINT "TrailDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "open" BOOLEAN NOT NULL DEFAULT false,
    "summer" BOOLEAN NOT NULL DEFAULT false,
    "fall" BOOLEAN NOT NULL DEFAULT false,
    "winter" BOOLEAN NOT NULL DEFAULT false,
    "spring" BOOLEAN NOT NULL DEFAULT false,
    "hiking" BOOLEAN NOT NULL DEFAULT false,
    "biking" BOOLEAN NOT NULL DEFAULT false,
    "horsebackRiding" BOOLEAN NOT NULL DEFAULT false,
    "crossCountrySkiing" BOOLEAN NOT NULL DEFAULT false,
    "snowshoeing" BOOLEAN NOT NULL DEFAULT false,
    "frisbeeGolf" BOOLEAN NOT NULL DEFAULT false,
    "dogWalking" BOOLEAN NOT NULL DEFAULT false,
    "running" BOOLEAN NOT NULL DEFAULT false,
    "snowMachining" BOOLEAN NOT NULL DEFAULT false,
    "atv" BOOLEAN NOT NULL DEFAULT false,
    "dirtBiking" BOOLEAN NOT NULL DEFAULT false,
    "mushing" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" TEXT,
    "length" TEXT NOT NULL DEFAULT '',
    "elevationChange" TEXT NOT NULL DEFAULT '',
    "park" TEXT,
    "republish" TEXT,

    CONSTRAINT "TrailVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AssemblyDistrict_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_districts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_assemblyDistricts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AssemblyDistrictVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Community_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNotice_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnit_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_secondaryActions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_children" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_children" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_orgUnits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrgUnitVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_hours" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublicNoticeVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Trail_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_original_idx" ON "AssemblyDistrictDraft"("original");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_owner_idx" ON "AssemblyDistrictDraft"("owner");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_actions_idx" ON "AssemblyDistrictDraft"("actions");

-- CreateIndex
CREATE INDEX "AssemblyDistrictDraft_photo_idx" ON "AssemblyDistrictDraft"("photo");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_original_idx" ON "AssemblyDistrictVersion"("original");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_owner_idx" ON "AssemblyDistrictVersion"("owner");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_actions_idx" ON "AssemblyDistrictVersion"("actions");

-- CreateIndex
CREATE INDEX "AssemblyDistrictVersion_photo_idx" ON "AssemblyDistrictVersion"("photo");

-- CreateIndex
CREATE INDEX "CommunityDraft_original_idx" ON "CommunityDraft"("original");

-- CreateIndex
CREATE INDEX "CommunityDraft_owner_idx" ON "CommunityDraft"("owner");

-- CreateIndex
CREATE INDEX "CommunityDraft_actions_idx" ON "CommunityDraft"("actions");

-- CreateIndex
CREATE INDEX "CommunityVersion_original_idx" ON "CommunityVersion"("original");

-- CreateIndex
CREATE INDEX "CommunityVersion_owner_idx" ON "CommunityVersion"("owner");

-- CreateIndex
CREATE INDEX "CommunityVersion_actions_idx" ON "CommunityVersion"("actions");

-- CreateIndex
CREATE INDEX "FacilityDraft_original_idx" ON "FacilityDraft"("original");

-- CreateIndex
CREATE INDEX "FacilityDraft_owner_idx" ON "FacilityDraft"("owner");

-- CreateIndex
CREATE INDEX "FacilityDraft_actions_idx" ON "FacilityDraft"("actions");

-- CreateIndex
CREATE INDEX "FacilityDraft_address_idx" ON "FacilityDraft"("address");

-- CreateIndex
CREATE INDEX "FacilityDraft_park_idx" ON "FacilityDraft"("park");

-- CreateIndex
CREATE INDEX "FacilityVersion_original_idx" ON "FacilityVersion"("original");

-- CreateIndex
CREATE INDEX "FacilityVersion_owner_idx" ON "FacilityVersion"("owner");

-- CreateIndex
CREATE INDEX "FacilityVersion_actions_idx" ON "FacilityVersion"("actions");

-- CreateIndex
CREATE INDEX "FacilityVersion_address_idx" ON "FacilityVersion"("address");

-- CreateIndex
CREATE INDEX "FacilityVersion_park_idx" ON "FacilityVersion"("park");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_original_idx" ON "OrgUnitDraft"("original");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_owner_idx" ON "OrgUnitDraft"("owner");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_actions_idx" ON "OrgUnitDraft"("actions");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_services_idx" ON "OrgUnitDraft"("services");

-- CreateIndex
CREATE INDEX "OrgUnitDraft_parent_idx" ON "OrgUnitDraft"("parent");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_original_idx" ON "OrgUnitVersion"("original");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_owner_idx" ON "OrgUnitVersion"("owner");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_actions_idx" ON "OrgUnitVersion"("actions");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_services_idx" ON "OrgUnitVersion"("services");

-- CreateIndex
CREATE INDEX "OrgUnitVersion_parent_idx" ON "OrgUnitVersion"("parent");

-- CreateIndex
CREATE INDEX "ParkDraft_original_idx" ON "ParkDraft"("original");

-- CreateIndex
CREATE INDEX "ParkDraft_owner_idx" ON "ParkDraft"("owner");

-- CreateIndex
CREATE INDEX "ParkDraft_actions_idx" ON "ParkDraft"("actions");

-- CreateIndex
CREATE INDEX "ParkDraft_address_idx" ON "ParkDraft"("address");

-- CreateIndex
CREATE INDEX "ParkVersion_original_idx" ON "ParkVersion"("original");

-- CreateIndex
CREATE INDEX "ParkVersion_owner_idx" ON "ParkVersion"("owner");

-- CreateIndex
CREATE INDEX "ParkVersion_actions_idx" ON "ParkVersion"("actions");

-- CreateIndex
CREATE INDEX "ParkVersion_address_idx" ON "ParkVersion"("address");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_original_idx" ON "PublicNoticeDraft"("original");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_owner_idx" ON "PublicNoticeDraft"("owner");

-- CreateIndex
CREATE INDEX "PublicNoticeDraft_actions_idx" ON "PublicNoticeDraft"("actions");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_original_idx" ON "PublicNoticeVersion"("original");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_owner_idx" ON "PublicNoticeVersion"("owner");

-- CreateIndex
CREATE INDEX "PublicNoticeVersion_actions_idx" ON "PublicNoticeVersion"("actions");

-- CreateIndex
CREATE INDEX "ServiceDraft_original_idx" ON "ServiceDraft"("original");

-- CreateIndex
CREATE INDEX "ServiceDraft_owner_idx" ON "ServiceDraft"("owner");

-- CreateIndex
CREATE INDEX "ServiceDraft_primaryAction_idx" ON "ServiceDraft"("primaryAction");

-- CreateIndex
CREATE INDEX "ServiceDraft_primaryContact_idx" ON "ServiceDraft"("primaryContact");

-- CreateIndex
CREATE INDEX "ServiceVersion_original_idx" ON "ServiceVersion"("original");

-- CreateIndex
CREATE INDEX "ServiceVersion_owner_idx" ON "ServiceVersion"("owner");

-- CreateIndex
CREATE INDEX "ServiceVersion_primaryAction_idx" ON "ServiceVersion"("primaryAction");

-- CreateIndex
CREATE INDEX "ServiceVersion_primaryContact_idx" ON "ServiceVersion"("primaryContact");

-- CreateIndex
CREATE INDEX "TrailDraft_original_idx" ON "TrailDraft"("original");

-- CreateIndex
CREATE INDEX "TrailDraft_owner_idx" ON "TrailDraft"("owner");

-- CreateIndex
CREATE INDEX "TrailDraft_actions_idx" ON "TrailDraft"("actions");

-- CreateIndex
CREATE INDEX "TrailDraft_address_idx" ON "TrailDraft"("address");

-- CreateIndex
CREATE INDEX "TrailDraft_park_idx" ON "TrailDraft"("park");

-- CreateIndex
CREATE INDEX "TrailVersion_original_idx" ON "TrailVersion"("original");

-- CreateIndex
CREATE INDEX "TrailVersion_owner_idx" ON "TrailVersion"("owner");

-- CreateIndex
CREATE INDEX "TrailVersion_actions_idx" ON "TrailVersion"("actions");

-- CreateIndex
CREATE INDEX "TrailVersion_address_idx" ON "TrailVersion"("address");

-- CreateIndex
CREATE INDEX "TrailVersion_park_idx" ON "TrailVersion"("park");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrict_documents_AB_unique" ON "_AssemblyDistrict_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrict_documents_B_index" ON "_AssemblyDistrict_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_districts_AB_unique" ON "_CommunityDraft_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_districts_B_index" ON "_CommunityDraft_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_districts_AB_unique" ON "_CommunityVersion_districts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_districts_B_index" ON "_CommunityVersion_districts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_assemblyDistricts_AB_unique" ON "_PublicNoticeDraft_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_assemblyDistricts_B_index" ON "_PublicNoticeDraft_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_assemblyDistricts_AB_unique" ON "_PublicNoticeVersion_assemblyDistricts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_assemblyDistricts_B_index" ON "_PublicNoticeVersion_assemblyDistricts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_tags_AB_unique" ON "_AssemblyDistrictDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_tags_B_index" ON "_AssemblyDistrictDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_userGroups_AB_unique" ON "_AssemblyDistrictDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_userGroups_B_index" ON "_AssemblyDistrictDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_documents_AB_unique" ON "_AssemblyDistrictDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_documents_B_index" ON "_AssemblyDistrictDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictDraft_contacts_AB_unique" ON "_AssemblyDistrictDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictDraft_contacts_B_index" ON "_AssemblyDistrictDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_tags_AB_unique" ON "_AssemblyDistrictVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_tags_B_index" ON "_AssemblyDistrictVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_userGroups_AB_unique" ON "_AssemblyDistrictVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_userGroups_B_index" ON "_AssemblyDistrictVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_documents_AB_unique" ON "_AssemblyDistrictVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_documents_B_index" ON "_AssemblyDistrictVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssemblyDistrictVersion_contacts_AB_unique" ON "_AssemblyDistrictVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_AssemblyDistrictVersion_contacts_B_index" ON "_AssemblyDistrictVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Community_documents_AB_unique" ON "_Community_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Community_documents_B_index" ON "_Community_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_communities_AB_unique" ON "_PublicNoticeDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_communities_B_index" ON "_PublicNoticeDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_communities_AB_unique" ON "_PublicNoticeVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_communities_B_index" ON "_PublicNoticeVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_communities_AB_unique" ON "_ServiceDraft_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_communities_B_index" ON "_ServiceDraft_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_communities_AB_unique" ON "_ServiceVersion_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_communities_B_index" ON "_ServiceVersion_communities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_tags_AB_unique" ON "_CommunityDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_tags_B_index" ON "_CommunityDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_userGroups_AB_unique" ON "_CommunityDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_userGroups_B_index" ON "_CommunityDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_documents_AB_unique" ON "_CommunityDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_documents_B_index" ON "_CommunityDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_contacts_AB_unique" ON "_CommunityDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_contacts_B_index" ON "_CommunityDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityDraft_services_AB_unique" ON "_CommunityDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityDraft_services_B_index" ON "_CommunityDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_tags_AB_unique" ON "_CommunityVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_tags_B_index" ON "_CommunityVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_userGroups_AB_unique" ON "_CommunityVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_userGroups_B_index" ON "_CommunityVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_documents_AB_unique" ON "_CommunityVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_documents_B_index" ON "_CommunityVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_contacts_AB_unique" ON "_CommunityVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_contacts_B_index" ON "_CommunityVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityVersion_services_AB_unique" ON "_CommunityVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityVersion_services_B_index" ON "_CommunityVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_contacts_AB_unique" ON "_Facility_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_contacts_B_index" ON "_Facility_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_contacts_AB_unique" ON "_FacilityDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_contacts_B_index" ON "_FacilityDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_contacts_AB_unique" ON "_FacilityVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_contacts_B_index" ON "_FacilityVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_contacts_AB_unique" ON "_OrgUnit_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_contacts_B_index" ON "_OrgUnit_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_contacts_AB_unique" ON "_OrgUnitDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_contacts_B_index" ON "_OrgUnitDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_contacts_AB_unique" ON "_OrgUnitVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_contacts_B_index" ON "_OrgUnitVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_contacts_AB_unique" ON "_Park_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_contacts_B_index" ON "_Park_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_contacts_AB_unique" ON "_ParkDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_contacts_B_index" ON "_ParkDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_contacts_AB_unique" ON "_ParkVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_contacts_B_index" ON "_ParkVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNotice_contacts_AB_unique" ON "_PublicNotice_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNotice_contacts_B_index" ON "_PublicNotice_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_contacts_AB_unique" ON "_PublicNoticeDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_contacts_B_index" ON "_PublicNoticeDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_contacts_AB_unique" ON "_PublicNoticeVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_contacts_B_index" ON "_PublicNoticeVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_contacts_AB_unique" ON "_Service_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_contacts_B_index" ON "_Service_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_contacts_AB_unique" ON "_ServiceDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_contacts_B_index" ON "_ServiceDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_contacts_AB_unique" ON "_ServiceVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_contacts_B_index" ON "_ServiceVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_contacts_AB_unique" ON "_Trail_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_contacts_B_index" ON "_Trail_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_contacts_AB_unique" ON "_TrailDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_contacts_B_index" ON "_TrailDraft_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_contacts_AB_unique" ON "_TrailVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_contacts_B_index" ON "_TrailVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_documents_AB_unique" ON "_Facility_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_documents_B_index" ON "_Facility_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_documents_AB_unique" ON "_FacilityDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_documents_B_index" ON "_FacilityDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_documents_AB_unique" ON "_FacilityVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_documents_B_index" ON "_FacilityVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnit_documents_AB_unique" ON "_OrgUnit_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnit_documents_B_index" ON "_OrgUnit_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_documents_AB_unique" ON "_OrgUnitDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_documents_B_index" ON "_OrgUnitDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_documents_AB_unique" ON "_OrgUnitVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_documents_B_index" ON "_OrgUnitVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_documents_AB_unique" ON "_Park_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_documents_B_index" ON "_Park_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_documents_AB_unique" ON "_ParkDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_documents_B_index" ON "_ParkDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_documents_AB_unique" ON "_ParkVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_documents_B_index" ON "_ParkVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_documents_AB_unique" ON "_PublicNoticeDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_documents_B_index" ON "_PublicNoticeDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_documents_AB_unique" ON "_PublicNoticeVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_documents_B_index" ON "_PublicNoticeVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_documents_AB_unique" ON "_Service_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_documents_B_index" ON "_Service_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_documents_AB_unique" ON "_ServiceDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_documents_B_index" ON "_ServiceDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_documents_AB_unique" ON "_ServiceVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_documents_B_index" ON "_ServiceVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_documents_AB_unique" ON "_Trail_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_documents_B_index" ON "_Trail_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_documents_AB_unique" ON "_TrailDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_documents_B_index" ON "_TrailDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_documents_AB_unique" ON "_TrailVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_documents_B_index" ON "_TrailVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_secondaryActions_AB_unique" ON "_ServiceDraft_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_secondaryActions_B_index" ON "_ServiceDraft_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_secondaryActions_AB_unique" ON "_ServiceVersion_secondaryActions"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_secondaryActions_B_index" ON "_ServiceVersion_secondaryActions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_facilities_AB_unique" ON "_ParkDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_facilities_B_index" ON "_ParkDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_facilities_AB_unique" ON "_ParkVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_facilities_B_index" ON "_ParkVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_facilities_AB_unique" ON "_PublicNoticeDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_facilities_B_index" ON "_PublicNoticeDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_facilities_AB_unique" ON "_PublicNoticeVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_facilities_B_index" ON "_PublicNoticeVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_facilities_AB_unique" ON "_ServiceDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_facilities_B_index" ON "_ServiceDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_facilities_AB_unique" ON "_ServiceVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_facilities_B_index" ON "_ServiceVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_tags_AB_unique" ON "_FacilityDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_tags_B_index" ON "_FacilityDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_userGroups_AB_unique" ON "_FacilityDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_userGroups_B_index" ON "_FacilityDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_hours_AB_unique" ON "_FacilityDraft_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_hours_B_index" ON "_FacilityDraft_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_services_AB_unique" ON "_FacilityDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_services_B_index" ON "_FacilityDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_tags_AB_unique" ON "_FacilityVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_tags_B_index" ON "_FacilityVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_userGroups_AB_unique" ON "_FacilityVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_userGroups_B_index" ON "_FacilityVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_hours_AB_unique" ON "_FacilityVersion_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_hours_B_index" ON "_FacilityVersion_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_services_AB_unique" ON "_FacilityVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_services_B_index" ON "_FacilityVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_children_AB_unique" ON "_OrgUnitDraft_children"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_children_B_index" ON "_OrgUnitDraft_children"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_children_AB_unique" ON "_OrgUnitVersion_children"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_children_B_index" ON "_OrgUnitVersion_children"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_orgUnits_AB_unique" ON "_PublicNoticeDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_orgUnits_B_index" ON "_PublicNoticeDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_orgUnits_AB_unique" ON "_PublicNoticeVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_orgUnits_B_index" ON "_PublicNoticeVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_orgUnits_AB_unique" ON "_ServiceDraft_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_orgUnits_B_index" ON "_ServiceDraft_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_orgUnits_AB_unique" ON "_ServiceVersion_orgUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_orgUnits_B_index" ON "_ServiceVersion_orgUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_tags_AB_unique" ON "_OrgUnitDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_tags_B_index" ON "_OrgUnitDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitDraft_userGroups_AB_unique" ON "_OrgUnitDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitDraft_userGroups_B_index" ON "_OrgUnitDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_tags_AB_unique" ON "_OrgUnitVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_tags_B_index" ON "_OrgUnitVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgUnitVersion_userGroups_AB_unique" ON "_OrgUnitVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgUnitVersion_userGroups_B_index" ON "_OrgUnitVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_hours_AB_unique" ON "_ParkDraft_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_hours_B_index" ON "_ParkDraft_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_hours_AB_unique" ON "_ParkVersion_hours"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_hours_B_index" ON "_ParkVersion_hours"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_parks_AB_unique" ON "_PublicNoticeDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_parks_B_index" ON "_PublicNoticeDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_parks_AB_unique" ON "_PublicNoticeVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_parks_B_index" ON "_PublicNoticeVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_parks_AB_unique" ON "_ServiceDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_parks_B_index" ON "_ServiceDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_parks_AB_unique" ON "_ServiceVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_parks_B_index" ON "_ServiceVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_tags_AB_unique" ON "_ParkDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_tags_B_index" ON "_ParkDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_userGroups_AB_unique" ON "_ParkDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_userGroups_B_index" ON "_ParkDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_services_AB_unique" ON "_ParkDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_services_B_index" ON "_ParkDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_trails_AB_unique" ON "_ParkDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_trails_B_index" ON "_ParkDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_tags_AB_unique" ON "_ParkVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_tags_B_index" ON "_ParkVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_userGroups_AB_unique" ON "_ParkVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_userGroups_B_index" ON "_ParkVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_services_AB_unique" ON "_ParkVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_services_B_index" ON "_ParkVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_trails_AB_unique" ON "_ParkVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_trails_B_index" ON "_ParkVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_tags_AB_unique" ON "_PublicNoticeDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_tags_B_index" ON "_PublicNoticeDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_userGroups_AB_unique" ON "_PublicNoticeDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_userGroups_B_index" ON "_PublicNoticeDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_services_AB_unique" ON "_PublicNoticeDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_services_B_index" ON "_PublicNoticeDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeDraft_trails_AB_unique" ON "_PublicNoticeDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeDraft_trails_B_index" ON "_PublicNoticeDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_tags_AB_unique" ON "_PublicNoticeVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_tags_B_index" ON "_PublicNoticeVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_userGroups_AB_unique" ON "_PublicNoticeVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_userGroups_B_index" ON "_PublicNoticeVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_services_AB_unique" ON "_PublicNoticeVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_services_B_index" ON "_PublicNoticeVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublicNoticeVersion_trails_AB_unique" ON "_PublicNoticeVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicNoticeVersion_trails_B_index" ON "_PublicNoticeVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_services_AB_unique" ON "_TrailDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_services_B_index" ON "_TrailDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_services_AB_unique" ON "_TrailVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_services_B_index" ON "_TrailVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_tags_AB_unique" ON "_ServiceDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_tags_B_index" ON "_ServiceDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_userGroups_AB_unique" ON "_ServiceDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_userGroups_B_index" ON "_ServiceDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_trails_AB_unique" ON "_ServiceDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_trails_B_index" ON "_ServiceDraft_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_tags_AB_unique" ON "_ServiceVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_tags_B_index" ON "_ServiceVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_userGroups_AB_unique" ON "_ServiceVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_userGroups_B_index" ON "_ServiceVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_trails_AB_unique" ON "_ServiceVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_trails_B_index" ON "_ServiceVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Trail_tags_AB_unique" ON "_Trail_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Trail_tags_B_index" ON "_Trail_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_tags_AB_unique" ON "_TrailDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_tags_B_index" ON "_TrailDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_tags_AB_unique" ON "_TrailVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_tags_B_index" ON "_TrailVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_userGroups_AB_unique" ON "_TrailDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_userGroups_B_index" ON "_TrailDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_userGroups_AB_unique" ON "_TrailVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_userGroups_B_index" ON "_TrailVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "AssemblyDistrict_currentVersion_key" ON "AssemblyDistrict"("currentVersion");

-- CreateIndex
CREATE INDEX "AssemblyDistrict_actions_idx" ON "AssemblyDistrict"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "Community_currentVersion_key" ON "Community"("currentVersion");

-- CreateIndex
CREATE INDEX "Community_actions_idx" ON "Community"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentCollection_title_key" ON "DocumentCollection"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Facility_currentVersion_key" ON "Facility"("currentVersion");

-- CreateIndex
CREATE INDEX "Facility_actions_idx" ON "Facility"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "OrgUnit_currentVersion_key" ON "OrgUnit"("currentVersion");

-- CreateIndex
CREATE INDEX "OrgUnit_actions_idx" ON "OrgUnit"("actions");

-- CreateIndex
CREATE INDEX "OrgUnit_services_idx" ON "OrgUnit"("services");

-- CreateIndex
CREATE UNIQUE INDEX "Park_currentVersion_key" ON "Park"("currentVersion");

-- CreateIndex
CREATE INDEX "Park_actions_idx" ON "Park"("actions");

-- CreateIndex
CREATE UNIQUE INDEX "PublicNotice_currentVersion_key" ON "PublicNotice"("currentVersion");

-- CreateIndex
CREATE UNIQUE INDEX "Service_currentVersion_key" ON "Service"("currentVersion");

-- CreateIndex
CREATE UNIQUE INDEX "Trail_currentVersion_key" ON "Trail"("currentVersion");

-- CreateIndex
CREATE INDEX "Trail_actions_idx" ON "Trail"("actions");

-- AddForeignKey
ALTER TABLE "AssemblyDistrict" ADD CONSTRAINT "AssemblyDistrict_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrict" ADD CONSTRAINT "AssemblyDistrict_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "AssemblyDistrict"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictDraft" ADD CONSTRAINT "AssemblyDistrictDraft_photo_fkey" FOREIGN KEY ("photo") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "AssemblyDistrict"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyDistrictVersion" ADD CONSTRAINT "AssemblyDistrictVersion_photo_fkey" FOREIGN KEY ("photo") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "CommunityVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityDraft" ADD CONSTRAINT "CommunityDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityVersion" ADD CONSTRAINT "CommunityVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "FacilityVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityDraft" ADD CONSTRAINT "FacilityDraft_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityVersion" ADD CONSTRAINT "FacilityVersion_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_services_fkey" FOREIGN KEY ("services") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnit" ADD CONSTRAINT "OrgUnit_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "OrgUnitVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_services_fkey" FOREIGN KEY ("services") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitDraft" ADD CONSTRAINT "OrgUnitDraft_parent_fkey" FOREIGN KEY ("parent") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_services_fkey" FOREIGN KEY ("services") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUnitVersion" ADD CONSTRAINT "OrgUnitVersion_parent_fkey" FOREIGN KEY ("parent") REFERENCES "OrgUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "ParkVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkDraft" ADD CONSTRAINT "ParkDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkVersion" ADD CONSTRAINT "ParkVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNotice" ADD CONSTRAINT "PublicNotice_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "PublicNoticeVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "PublicNotice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeDraft" ADD CONSTRAINT "PublicNoticeDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "PublicNotice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicNoticeVersion" ADD CONSTRAINT "PublicNoticeVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "ServiceVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDraft" ADD CONSTRAINT "ServiceDraft_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_primaryAction_fkey" FOREIGN KEY ("primaryAction") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_primaryContact_fkey" FOREIGN KEY ("primaryContact") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "TrailVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Trail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailDraft" ADD CONSTRAINT "TrailDraft_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Trail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_address_fkey" FOREIGN KEY ("address") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailVersion" ADD CONSTRAINT "TrailVersion_park_fkey" FOREIGN KEY ("park") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_documents" ADD CONSTRAINT "_AssemblyDistrict_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrict_documents" ADD CONSTRAINT "_AssemblyDistrict_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_districts" ADD CONSTRAINT "_CommunityDraft_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_districts" ADD CONSTRAINT "_CommunityDraft_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_districts" ADD CONSTRAINT "_CommunityVersion_districts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_districts" ADD CONSTRAINT "_CommunityVersion_districts_B_fkey" FOREIGN KEY ("B") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeDraft_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeDraft_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeVersion_assemblyDistricts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrict"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_assemblyDistricts" ADD CONSTRAINT "_PublicNoticeVersion_assemblyDistricts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_tags" ADD CONSTRAINT "_AssemblyDistrictDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_tags" ADD CONSTRAINT "_AssemblyDistrictDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_userGroups" ADD CONSTRAINT "_AssemblyDistrictDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_userGroups" ADD CONSTRAINT "_AssemblyDistrictDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_documents" ADD CONSTRAINT "_AssemblyDistrictDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_documents" ADD CONSTRAINT "_AssemblyDistrictDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_contacts" ADD CONSTRAINT "_AssemblyDistrictDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictDraft_contacts" ADD CONSTRAINT "_AssemblyDistrictDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_tags" ADD CONSTRAINT "_AssemblyDistrictVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_tags" ADD CONSTRAINT "_AssemblyDistrictVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_userGroups" ADD CONSTRAINT "_AssemblyDistrictVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_userGroups" ADD CONSTRAINT "_AssemblyDistrictVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_documents" ADD CONSTRAINT "_AssemblyDistrictVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_documents" ADD CONSTRAINT "_AssemblyDistrictVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_contacts" ADD CONSTRAINT "_AssemblyDistrictVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "AssemblyDistrictVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssemblyDistrictVersion_contacts" ADD CONSTRAINT "_AssemblyDistrictVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_documents" ADD CONSTRAINT "_Community_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Community_documents" ADD CONSTRAINT "_Community_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_communities" ADD CONSTRAINT "_PublicNoticeDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_communities" ADD CONSTRAINT "_PublicNoticeDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_communities" ADD CONSTRAINT "_PublicNoticeVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_communities" ADD CONSTRAINT "_PublicNoticeVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_communities" ADD CONSTRAINT "_ServiceDraft_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_communities" ADD CONSTRAINT "_ServiceDraft_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_communities" ADD CONSTRAINT "_ServiceVersion_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_communities" ADD CONSTRAINT "_ServiceVersion_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_tags" ADD CONSTRAINT "_CommunityDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_tags" ADD CONSTRAINT "_CommunityDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_userGroups" ADD CONSTRAINT "_CommunityDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_userGroups" ADD CONSTRAINT "_CommunityDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_documents" ADD CONSTRAINT "_CommunityDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_documents" ADD CONSTRAINT "_CommunityDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_contacts" ADD CONSTRAINT "_CommunityDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_contacts" ADD CONSTRAINT "_CommunityDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_services" ADD CONSTRAINT "_CommunityDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityDraft_services" ADD CONSTRAINT "_CommunityDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_tags" ADD CONSTRAINT "_CommunityVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_tags" ADD CONSTRAINT "_CommunityVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_userGroups" ADD CONSTRAINT "_CommunityVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_userGroups" ADD CONSTRAINT "_CommunityVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_documents" ADD CONSTRAINT "_CommunityVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_documents" ADD CONSTRAINT "_CommunityVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_contacts" ADD CONSTRAINT "_CommunityVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_contacts" ADD CONSTRAINT "_CommunityVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_services" ADD CONSTRAINT "_CommunityVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "CommunityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityVersion_services" ADD CONSTRAINT "_CommunityVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_contacts" ADD CONSTRAINT "_Facility_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_contacts" ADD CONSTRAINT "_Facility_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_contacts" ADD CONSTRAINT "_FacilityDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_contacts" ADD CONSTRAINT "_FacilityDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_contacts" ADD CONSTRAINT "_FacilityVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_contacts" ADD CONSTRAINT "_FacilityVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_contacts" ADD CONSTRAINT "_OrgUnit_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_contacts" ADD CONSTRAINT "_OrgUnit_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_contacts" ADD CONSTRAINT "_OrgUnitDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_contacts" ADD CONSTRAINT "_OrgUnitDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_contacts" ADD CONSTRAINT "_OrgUnitVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_contacts" ADD CONSTRAINT "_OrgUnitVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_contacts" ADD CONSTRAINT "_Park_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_contacts" ADD CONSTRAINT "_Park_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_contacts" ADD CONSTRAINT "_ParkDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_contacts" ADD CONSTRAINT "_ParkDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_contacts" ADD CONSTRAINT "_ParkVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_contacts" ADD CONSTRAINT "_ParkVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_contacts" ADD CONSTRAINT "_PublicNotice_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNotice_contacts" ADD CONSTRAINT "_PublicNotice_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_contacts" ADD CONSTRAINT "_PublicNoticeDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_contacts" ADD CONSTRAINT "_PublicNoticeDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_contacts" ADD CONSTRAINT "_PublicNoticeVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_contacts" ADD CONSTRAINT "_PublicNoticeVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_contacts" ADD CONSTRAINT "_Service_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_contacts" ADD CONSTRAINT "_Service_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_contacts" ADD CONSTRAINT "_ServiceDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_contacts" ADD CONSTRAINT "_ServiceDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_contacts" ADD CONSTRAINT "_ServiceVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_contacts" ADD CONSTRAINT "_ServiceVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_contacts" ADD CONSTRAINT "_Trail_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_contacts" ADD CONSTRAINT "_Trail_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_contacts" ADD CONSTRAINT "_TrailDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_contacts" ADD CONSTRAINT "_TrailDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_contacts" ADD CONSTRAINT "_TrailVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_contacts" ADD CONSTRAINT "_TrailVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_documents" ADD CONSTRAINT "_Facility_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_documents" ADD CONSTRAINT "_Facility_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_documents" ADD CONSTRAINT "_FacilityDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_documents" ADD CONSTRAINT "_FacilityDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_documents" ADD CONSTRAINT "_FacilityVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_documents" ADD CONSTRAINT "_FacilityVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_documents" ADD CONSTRAINT "_OrgUnit_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnit_documents" ADD CONSTRAINT "_OrgUnit_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_documents" ADD CONSTRAINT "_OrgUnitDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_documents" ADD CONSTRAINT "_OrgUnitDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_documents" ADD CONSTRAINT "_OrgUnitVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_documents" ADD CONSTRAINT "_OrgUnitVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_documents" ADD CONSTRAINT "_Park_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_documents" ADD CONSTRAINT "_Park_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_documents" ADD CONSTRAINT "_ParkDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_documents" ADD CONSTRAINT "_ParkDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_documents" ADD CONSTRAINT "_ParkVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_documents" ADD CONSTRAINT "_ParkVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_documents" ADD CONSTRAINT "_PublicNoticeDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_documents" ADD CONSTRAINT "_PublicNoticeDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_documents" ADD CONSTRAINT "_PublicNoticeVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_documents" ADD CONSTRAINT "_PublicNoticeVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_documents" ADD CONSTRAINT "_Service_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_documents" ADD CONSTRAINT "_Service_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_documents" ADD CONSTRAINT "_ServiceDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_documents" ADD CONSTRAINT "_ServiceDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_documents" ADD CONSTRAINT "_ServiceVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_documents" ADD CONSTRAINT "_ServiceVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_documents" ADD CONSTRAINT "_Trail_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_documents" ADD CONSTRAINT "_Trail_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_documents" ADD CONSTRAINT "_TrailDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_documents" ADD CONSTRAINT "_TrailDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_documents" ADD CONSTRAINT "_TrailVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_documents" ADD CONSTRAINT "_TrailVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_secondaryActions" ADD CONSTRAINT "_ServiceDraft_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_secondaryActions" ADD CONSTRAINT "_ServiceDraft_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_secondaryActions" ADD CONSTRAINT "_ServiceVersion_secondaryActions_A_fkey" FOREIGN KEY ("A") REFERENCES "ExternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_secondaryActions" ADD CONSTRAINT "_ServiceVersion_secondaryActions_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_facilities" ADD CONSTRAINT "_ParkDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_facilities" ADD CONSTRAINT "_ParkDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_facilities" ADD CONSTRAINT "_ParkVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_facilities" ADD CONSTRAINT "_ParkVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_facilities" ADD CONSTRAINT "_PublicNoticeDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_facilities" ADD CONSTRAINT "_PublicNoticeDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_facilities" ADD CONSTRAINT "_PublicNoticeVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_facilities" ADD CONSTRAINT "_PublicNoticeVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_facilities" ADD CONSTRAINT "_ServiceDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_facilities" ADD CONSTRAINT "_ServiceDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_facilities" ADD CONSTRAINT "_ServiceVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_facilities" ADD CONSTRAINT "_ServiceVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_tags" ADD CONSTRAINT "_FacilityDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_tags" ADD CONSTRAINT "_FacilityDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_userGroups" ADD CONSTRAINT "_FacilityDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_userGroups" ADD CONSTRAINT "_FacilityDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_hours" ADD CONSTRAINT "_FacilityDraft_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_hours" ADD CONSTRAINT "_FacilityDraft_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_services" ADD CONSTRAINT "_FacilityDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_services" ADD CONSTRAINT "_FacilityDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_tags" ADD CONSTRAINT "_FacilityVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_tags" ADD CONSTRAINT "_FacilityVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_userGroups" ADD CONSTRAINT "_FacilityVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_userGroups" ADD CONSTRAINT "_FacilityVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_hours" ADD CONSTRAINT "_FacilityVersion_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_hours" ADD CONSTRAINT "_FacilityVersion_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_services" ADD CONSTRAINT "_FacilityVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_services" ADD CONSTRAINT "_FacilityVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_children" ADD CONSTRAINT "_OrgUnitDraft_children_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_children" ADD CONSTRAINT "_OrgUnitDraft_children_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_children" ADD CONSTRAINT "_OrgUnitVersion_children_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_children" ADD CONSTRAINT "_OrgUnitVersion_children_B_fkey" FOREIGN KEY ("B") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_orgUnits" ADD CONSTRAINT "_PublicNoticeDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_orgUnits" ADD CONSTRAINT "_PublicNoticeDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_orgUnits" ADD CONSTRAINT "_PublicNoticeVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_orgUnits" ADD CONSTRAINT "_PublicNoticeVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_orgUnits" ADD CONSTRAINT "_ServiceDraft_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_orgUnits" ADD CONSTRAINT "_ServiceDraft_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_orgUnits" ADD CONSTRAINT "_ServiceVersion_orgUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_orgUnits" ADD CONSTRAINT "_ServiceVersion_orgUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_tags" ADD CONSTRAINT "_OrgUnitDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_tags" ADD CONSTRAINT "_OrgUnitDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_userGroups" ADD CONSTRAINT "_OrgUnitDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitDraft_userGroups" ADD CONSTRAINT "_OrgUnitDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_tags" ADD CONSTRAINT "_OrgUnitVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_tags" ADD CONSTRAINT "_OrgUnitVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_userGroups" ADD CONSTRAINT "_OrgUnitVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "OrgUnitVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgUnitVersion_userGroups" ADD CONSTRAINT "_OrgUnitVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_hours" ADD CONSTRAINT "_ParkDraft_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_hours" ADD CONSTRAINT "_ParkDraft_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_hours" ADD CONSTRAINT "_ParkVersion_hours_A_fkey" FOREIGN KEY ("A") REFERENCES "OperatingHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_hours" ADD CONSTRAINT "_ParkVersion_hours_B_fkey" FOREIGN KEY ("B") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_parks" ADD CONSTRAINT "_PublicNoticeDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_parks" ADD CONSTRAINT "_PublicNoticeDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_parks" ADD CONSTRAINT "_PublicNoticeVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_parks" ADD CONSTRAINT "_PublicNoticeVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_parks" ADD CONSTRAINT "_ServiceDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_parks" ADD CONSTRAINT "_ServiceDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_parks" ADD CONSTRAINT "_ServiceVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_parks" ADD CONSTRAINT "_ServiceVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_tags" ADD CONSTRAINT "_ParkDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_tags" ADD CONSTRAINT "_ParkDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_userGroups" ADD CONSTRAINT "_ParkDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_userGroups" ADD CONSTRAINT "_ParkDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_services" ADD CONSTRAINT "_ParkDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_services" ADD CONSTRAINT "_ParkDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_trails" ADD CONSTRAINT "_ParkDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_trails" ADD CONSTRAINT "_ParkDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_tags" ADD CONSTRAINT "_ParkVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_tags" ADD CONSTRAINT "_ParkVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_userGroups" ADD CONSTRAINT "_ParkVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_userGroups" ADD CONSTRAINT "_ParkVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_services" ADD CONSTRAINT "_ParkVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_services" ADD CONSTRAINT "_ParkVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_trails" ADD CONSTRAINT "_ParkVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_trails" ADD CONSTRAINT "_ParkVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_tags" ADD CONSTRAINT "_PublicNoticeDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_tags" ADD CONSTRAINT "_PublicNoticeDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_userGroups" ADD CONSTRAINT "_PublicNoticeDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_userGroups" ADD CONSTRAINT "_PublicNoticeDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_services" ADD CONSTRAINT "_PublicNoticeDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_services" ADD CONSTRAINT "_PublicNoticeDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_trails" ADD CONSTRAINT "_PublicNoticeDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeDraft_trails" ADD CONSTRAINT "_PublicNoticeDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_tags" ADD CONSTRAINT "_PublicNoticeVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_tags" ADD CONSTRAINT "_PublicNoticeVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_userGroups" ADD CONSTRAINT "_PublicNoticeVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_userGroups" ADD CONSTRAINT "_PublicNoticeVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_services" ADD CONSTRAINT "_PublicNoticeVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_services" ADD CONSTRAINT "_PublicNoticeVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_trails" ADD CONSTRAINT "_PublicNoticeVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PublicNoticeVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicNoticeVersion_trails" ADD CONSTRAINT "_PublicNoticeVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_services" ADD CONSTRAINT "_TrailDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_services" ADD CONSTRAINT "_TrailDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_services" ADD CONSTRAINT "_TrailVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_services" ADD CONSTRAINT "_TrailVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_tags" ADD CONSTRAINT "_ServiceDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_tags" ADD CONSTRAINT "_ServiceDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_userGroups" ADD CONSTRAINT "_ServiceDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_userGroups" ADD CONSTRAINT "_ServiceDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_trails" ADD CONSTRAINT "_ServiceDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_trails" ADD CONSTRAINT "_ServiceDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_tags" ADD CONSTRAINT "_ServiceVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_tags" ADD CONSTRAINT "_ServiceVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_userGroups" ADD CONSTRAINT "_ServiceVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_userGroups" ADD CONSTRAINT "_ServiceVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_trails" ADD CONSTRAINT "_ServiceVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_trails" ADD CONSTRAINT "_ServiceVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_tags" ADD CONSTRAINT "_Trail_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Trail_tags" ADD CONSTRAINT "_Trail_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_tags" ADD CONSTRAINT "_TrailDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_tags" ADD CONSTRAINT "_TrailDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_tags" ADD CONSTRAINT "_TrailVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_tags" ADD CONSTRAINT "_TrailVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_userGroups" ADD CONSTRAINT "_TrailDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_userGroups" ADD CONSTRAINT "_TrailDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_userGroups" ADD CONSTRAINT "_TrailVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_userGroups" ADD CONSTRAINT "_TrailVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
