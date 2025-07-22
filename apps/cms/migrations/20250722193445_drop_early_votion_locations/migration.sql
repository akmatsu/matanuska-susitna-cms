/*
  Warnings:

  - You are about to drop the `_ElectionsPage_earlyVotingLocations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ElectionsPage_earlyVotingLocations" DROP CONSTRAINT "_ElectionsPage_earlyVotingLocations_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionsPage_earlyVotingLocations" DROP CONSTRAINT "_ElectionsPage_earlyVotingLocations_B_fkey";

-- DropTable
DROP TABLE "_ElectionsPage_earlyVotingLocations";
