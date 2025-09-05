-- AlterTable
ALTER TABLE "OrgUnit" ADD COLUMN     "childrenLabel" TEXT NOT NULL DEFAULT 'Divisions',
ADD COLUMN     "duties" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "type" TEXT DEFAULT 'Department',
ALTER COLUMN "showPage" DROP NOT NULL,
ALTER COLUMN "showPage" SET DEFAULT 'yes',
ALTER COLUMN "showPage" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "OrgUnitDraft" ADD COLUMN     "childrenLabel" TEXT NOT NULL DEFAULT 'Divisions',
ADD COLUMN     "duties" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "type" TEXT DEFAULT 'Department',
ALTER COLUMN "showPage" DROP NOT NULL,
ALTER COLUMN "showPage" SET DEFAULT 'yes',
ALTER COLUMN "showPage" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "OrgUnitVersion" ADD COLUMN     "childrenLabel" TEXT NOT NULL DEFAULT 'Divisions',
ADD COLUMN     "duties" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "type" TEXT DEFAULT 'Department',
ALTER COLUMN "showPage" DROP NOT NULL,
ALTER COLUMN "showPage" SET DEFAULT 'yes',
ALTER COLUMN "showPage" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "LandingPage" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "body" TEXT,

    CONSTRAINT "LandingPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LandingPage_title_key" ON "LandingPage"("title");
