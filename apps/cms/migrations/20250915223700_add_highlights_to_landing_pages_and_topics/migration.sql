/*
  Warnings:

  - You are about to drop the `_Topic_highlights` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Topic_highlights" DROP CONSTRAINT "_Topic_highlights_A_fkey";

-- DropForeignKey
ALTER TABLE "_Topic_highlights" DROP CONSTRAINT "_Topic_highlights_B_fkey";

-- DropTable
DROP TABLE "_Topic_highlights";

-- CreateTable
CREATE TABLE "_Highlight_landingPages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Highlight_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Highlight_landingPages_AB_unique" ON "_Highlight_landingPages"("A", "B");

-- CreateIndex
CREATE INDEX "_Highlight_landingPages_B_index" ON "_Highlight_landingPages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Highlight_topics_AB_unique" ON "_Highlight_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Highlight_topics_B_index" ON "_Highlight_topics"("B");

-- AddForeignKey
ALTER TABLE "_Highlight_landingPages" ADD CONSTRAINT "_Highlight_landingPages_A_fkey" FOREIGN KEY ("A") REFERENCES "Highlight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Highlight_landingPages" ADD CONSTRAINT "_Highlight_landingPages_B_fkey" FOREIGN KEY ("B") REFERENCES "LandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Highlight_topics" ADD CONSTRAINT "_Highlight_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Highlight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Highlight_topics" ADD CONSTRAINT "_Highlight_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
