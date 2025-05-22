-- CreateTable
CREATE TABLE "BoardPage" (
    "id" INTEGER NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "body" TEXT,
    "actions" TEXT,
    "vacancyReport" TEXT,
    "applicationForm" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BoardPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BoardPage_documents" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardPage_contacts" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BoardPage_title_key" ON "BoardPage"("title");

-- CreateIndex
CREATE INDEX "BoardPage_owner_idx" ON "BoardPage"("owner");

-- CreateIndex
CREATE INDEX "BoardPage_actions_idx" ON "BoardPage"("actions");

-- CreateIndex
CREATE INDEX "BoardPage_vacancyReport_idx" ON "BoardPage"("vacancyReport");

-- CreateIndex
CREATE INDEX "BoardPage_applicationForm_idx" ON "BoardPage"("applicationForm");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardPage_documents_AB_unique" ON "_BoardPage_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardPage_documents_B_index" ON "_BoardPage_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardPage_contacts_AB_unique" ON "_BoardPage_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardPage_contacts_B_index" ON "_BoardPage_contacts"("B");

-- AddForeignKey
ALTER TABLE "BoardPage" ADD CONSTRAINT "BoardPage_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardPage" ADD CONSTRAINT "BoardPage_actions_fkey" FOREIGN KEY ("actions") REFERENCES "InternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardPage" ADD CONSTRAINT "BoardPage_vacancyReport_fkey" FOREIGN KEY ("vacancyReport") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardPage" ADD CONSTRAINT "BoardPage_applicationForm_fkey" FOREIGN KEY ("applicationForm") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_documents" ADD CONSTRAINT "_BoardPage_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_documents" ADD CONSTRAINT "_BoardPage_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_contacts" ADD CONSTRAINT "_BoardPage_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardPage_contacts" ADD CONSTRAINT "_BoardPage_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
