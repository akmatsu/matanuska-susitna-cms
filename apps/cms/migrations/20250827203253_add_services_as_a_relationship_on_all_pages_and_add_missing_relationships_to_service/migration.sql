-- CreateTable
CREATE TABLE "_Board_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Service_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_services" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Board_services_AB_unique" ON "_Board_services"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_services_B_index" ON "_Board_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_boards_AB_unique" ON "_ServiceVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_boards_B_index" ON "_ServiceVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_boards_AB_unique" ON "_ServiceDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_boards_B_index" ON "_ServiceDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_services_AB_unique" ON "_BoardVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_services_B_index" ON "_BoardVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_services_AB_unique" ON "_BoardDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_services_B_index" ON "_BoardDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Service_services_AB_unique" ON "_Service_services"("A", "B");

-- CreateIndex
CREATE INDEX "_Service_services_B_index" ON "_Service_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_services_AB_unique" ON "_ServiceVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_services_B_index" ON "_ServiceVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_services_AB_unique" ON "_ServiceDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_services_B_index" ON "_ServiceDraft_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_services_AB_unique" ON "_Plan_services"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_services_B_index" ON "_Plan_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceVersion_plans_AB_unique" ON "_ServiceVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceVersion_plans_B_index" ON "_ServiceVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceDraft_plans_AB_unique" ON "_ServiceDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceDraft_plans_B_index" ON "_ServiceDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_services_AB_unique" ON "_PlanVersion_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_services_B_index" ON "_PlanVersion_services"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_services_AB_unique" ON "_PlanDraft_services"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_services_B_index" ON "_PlanDraft_services"("B");

-- AddForeignKey
ALTER TABLE "_Board_services" ADD CONSTRAINT "_Board_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_services" ADD CONSTRAINT "_Board_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_boards" ADD CONSTRAINT "_ServiceVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_boards" ADD CONSTRAINT "_ServiceVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_boards" ADD CONSTRAINT "_ServiceDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_boards" ADD CONSTRAINT "_ServiceDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_services" ADD CONSTRAINT "_BoardVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_services" ADD CONSTRAINT "_BoardVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_services" ADD CONSTRAINT "_BoardDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_services" ADD CONSTRAINT "_BoardDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_services" ADD CONSTRAINT "_Service_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Service_services" ADD CONSTRAINT "_Service_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_services" ADD CONSTRAINT "_ServiceVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_services" ADD CONSTRAINT "_ServiceVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_services" ADD CONSTRAINT "_ServiceDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_services" ADD CONSTRAINT "_ServiceDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_services" ADD CONSTRAINT "_Plan_services_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_services" ADD CONSTRAINT "_Plan_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_plans" ADD CONSTRAINT "_ServiceVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceVersion_plans" ADD CONSTRAINT "_ServiceVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_plans" ADD CONSTRAINT "_ServiceDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDraft_plans" ADD CONSTRAINT "_ServiceDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_services" ADD CONSTRAINT "_PlanVersion_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_services" ADD CONSTRAINT "_PlanVersion_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_services" ADD CONSTRAINT "_PlanDraft_services_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_services" ADD CONSTRAINT "_PlanDraft_services_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
