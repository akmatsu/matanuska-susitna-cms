/*
  Warnings:

  - You are about to drop the `_Election_propositions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ElectionDraft_propositions" DROP CONSTRAINT "_ElectionDraft_propositions_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionDraft_propositions" DROP CONSTRAINT "_ElectionDraft_propositions_B_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_propositions" DROP CONSTRAINT "_ElectionVersion_propositions_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElectionVersion_propositions" DROP CONSTRAINT "_ElectionVersion_propositions_B_fkey";

-- DropForeignKey
ALTER TABLE "_Election_propositions" DROP CONSTRAINT "_Election_propositions_A_fkey";

-- DropForeignKey
ALTER TABLE "_Election_propositions" DROP CONSTRAINT "_Election_propositions_B_fkey";

-- DropTable
DROP TABLE "_Election_propositions";

-- CreateTable
CREATE TABLE "Proposition" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0,
    "document" TEXT,
    "description" TEXT,
    "election" TEXT,

    CONSTRAINT "Proposition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Proposition_order_idx" ON "Proposition"("order");

-- CreateIndex
CREATE INDEX "Proposition_document_idx" ON "Proposition"("document");

-- CreateIndex
CREATE INDEX "Proposition_election_idx" ON "Proposition"("election");

-- AddForeignKey
ALTER TABLE "Proposition" ADD CONSTRAINT "Proposition_document_fkey" FOREIGN KEY ("document") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposition" ADD CONSTRAINT "Proposition_election_fkey" FOREIGN KEY ("election") REFERENCES "Election"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_propositions" ADD CONSTRAINT "_ElectionVersion_propositions_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionVersion_propositions" ADD CONSTRAINT "_ElectionVersion_propositions_B_fkey" FOREIGN KEY ("B") REFERENCES "Proposition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_propositions" ADD CONSTRAINT "_ElectionDraft_propositions_A_fkey" FOREIGN KEY ("A") REFERENCES "ElectionDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElectionDraft_propositions" ADD CONSTRAINT "_ElectionDraft_propositions_B_fkey" FOREIGN KEY ("B") REFERENCES "Proposition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
