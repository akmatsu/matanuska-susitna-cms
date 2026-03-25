-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "directoryExcel" JSONB;

-- AlterTable
ALTER TABLE "BoardDraft" ADD COLUMN     "directoryExcel" JSONB;

-- AlterTable
ALTER TABLE "BoardVersion" ADD COLUMN     "directoryExcel" JSONB;
