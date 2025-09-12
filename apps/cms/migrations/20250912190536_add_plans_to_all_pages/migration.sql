-- CreateTable
CREATE TABLE "_Board_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_boards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Facility_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_facilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Park_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_parks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParkDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Plan_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_trails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Board_plans_AB_unique" ON "_Board_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_Board_plans_B_index" ON "_Board_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_boards_AB_unique" ON "_PlanVersion_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_boards_B_index" ON "_PlanVersion_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_boards_AB_unique" ON "_PlanDraft_boards"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_boards_B_index" ON "_PlanDraft_boards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardVersion_plans_AB_unique" ON "_BoardVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardVersion_plans_B_index" ON "_BoardVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardDraft_plans_AB_unique" ON "_BoardDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardDraft_plans_B_index" ON "_BoardDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Facility_plans_AB_unique" ON "_Facility_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_Facility_plans_B_index" ON "_Facility_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_facilities_AB_unique" ON "_PlanVersion_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_facilities_B_index" ON "_PlanVersion_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_facilities_AB_unique" ON "_PlanDraft_facilities"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_facilities_B_index" ON "_PlanDraft_facilities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityVersion_plans_AB_unique" ON "_FacilityVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityVersion_plans_B_index" ON "_FacilityVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityDraft_plans_AB_unique" ON "_FacilityDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityDraft_plans_B_index" ON "_FacilityDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Park_plans_AB_unique" ON "_Park_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_Park_plans_B_index" ON "_Park_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_parks_AB_unique" ON "_PlanVersion_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_parks_B_index" ON "_PlanVersion_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_parks_AB_unique" ON "_PlanDraft_parks"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_parks_B_index" ON "_PlanDraft_parks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkVersion_plans_AB_unique" ON "_ParkVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkVersion_plans_B_index" ON "_ParkVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParkDraft_plans_AB_unique" ON "_ParkDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkDraft_plans_B_index" ON "_ParkDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_trails_AB_unique" ON "_Plan_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_trails_B_index" ON "_Plan_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailVersion_plans_AB_unique" ON "_TrailVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailVersion_plans_B_index" ON "_TrailVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailDraft_plans_AB_unique" ON "_TrailDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailDraft_plans_B_index" ON "_TrailDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_plans_AB_unique" ON "_Plan_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_plans_B_index" ON "_Plan_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_plans_AB_unique" ON "_PlanVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_plans_B_index" ON "_PlanVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_plans_AB_unique" ON "_PlanDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_plans_B_index" ON "_PlanDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_trails_AB_unique" ON "_PlanVersion_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_trails_B_index" ON "_PlanVersion_trails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_trails_AB_unique" ON "_PlanDraft_trails"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_trails_B_index" ON "_PlanDraft_trails"("B");

-- AddForeignKey
ALTER TABLE "_Board_plans" ADD CONSTRAINT "_Board_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Board_plans" ADD CONSTRAINT "_Board_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_boards" ADD CONSTRAINT "_PlanVersion_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_boards" ADD CONSTRAINT "_PlanVersion_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_boards" ADD CONSTRAINT "_PlanDraft_boards_A_fkey" FOREIGN KEY ("A") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_boards" ADD CONSTRAINT "_PlanDraft_boards_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_plans" ADD CONSTRAINT "_BoardVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardVersion_plans" ADD CONSTRAINT "_BoardVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_plans" ADD CONSTRAINT "_BoardDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "BoardDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoardDraft_plans" ADD CONSTRAINT "_BoardDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_plans" ADD CONSTRAINT "_Facility_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Facility_plans" ADD CONSTRAINT "_Facility_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_facilities" ADD CONSTRAINT "_PlanVersion_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_facilities" ADD CONSTRAINT "_PlanVersion_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_facilities" ADD CONSTRAINT "_PlanDraft_facilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_facilities" ADD CONSTRAINT "_PlanDraft_facilities_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_plans" ADD CONSTRAINT "_FacilityVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityVersion_plans" ADD CONSTRAINT "_FacilityVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_plans" ADD CONSTRAINT "_FacilityDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "FacilityDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityDraft_plans" ADD CONSTRAINT "_FacilityDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_plans" ADD CONSTRAINT "_Park_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Park_plans" ADD CONSTRAINT "_Park_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_parks" ADD CONSTRAINT "_PlanVersion_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_parks" ADD CONSTRAINT "_PlanVersion_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_parks" ADD CONSTRAINT "_PlanDraft_parks_A_fkey" FOREIGN KEY ("A") REFERENCES "Park"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_parks" ADD CONSTRAINT "_PlanDraft_parks_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_plans" ADD CONSTRAINT "_ParkVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkVersion_plans" ADD CONSTRAINT "_ParkVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_plans" ADD CONSTRAINT "_ParkDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkDraft_plans" ADD CONSTRAINT "_ParkDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_trails" ADD CONSTRAINT "_Plan_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_trails" ADD CONSTRAINT "_Plan_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_plans" ADD CONSTRAINT "_TrailVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailVersion_plans" ADD CONSTRAINT "_TrailVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_plans" ADD CONSTRAINT "_TrailDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailDraft_plans" ADD CONSTRAINT "_TrailDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "TrailDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_plans" ADD CONSTRAINT "_Plan_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_plans" ADD CONSTRAINT "_Plan_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_plans" ADD CONSTRAINT "_PlanVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_plans" ADD CONSTRAINT "_PlanVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_plans" ADD CONSTRAINT "_PlanDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_plans" ADD CONSTRAINT "_PlanDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_trails" ADD CONSTRAINT "_PlanVersion_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_trails" ADD CONSTRAINT "_PlanVersion_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_trails" ADD CONSTRAINT "_PlanDraft_trails_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_trails" ADD CONSTRAINT "_PlanDraft_trails_B_fkey" FOREIGN KEY ("B") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
