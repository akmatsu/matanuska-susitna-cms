/*
  Warnings:

  - You are about to drop the `_EventDraft_landingPages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventVersion_landingPages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Event_landingPages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventDraft_landingPages" DROP CONSTRAINT "_EventDraft_landingPages_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventDraft_landingPages" DROP CONSTRAINT "_EventDraft_landingPages_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventVersion_landingPages" DROP CONSTRAINT "_EventVersion_landingPages_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventVersion_landingPages" DROP CONSTRAINT "_EventVersion_landingPages_B_fkey";

-- DropForeignKey
ALTER TABLE "_Event_landingPages" DROP CONSTRAINT "_Event_landingPages_A_fkey";

-- DropForeignKey
ALTER TABLE "_Event_landingPages" DROP CONSTRAINT "_Event_landingPages_B_fkey";

-- DropTable
DROP TABLE "_EventDraft_landingPages";

-- DropTable
DROP TABLE "_EventVersion_landingPages";

-- DropTable
DROP TABLE "_Event_landingPages";
