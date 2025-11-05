-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "fax" TEXT,
ADD COLUMN     "website" TEXT;

-- CreateIndex
CREATE INDEX "Contact_website_idx" ON "Contact"("website");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_website_fkey" FOREIGN KEY ("website") REFERENCES "ExternalLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
