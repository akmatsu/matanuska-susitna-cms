-- CreateTable
CREATE TABLE "_Plan_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicVersion_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicDraft_plans" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanVersion_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanDraft_topics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Plan_topics_AB_unique" ON "_Plan_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_Plan_topics_B_index" ON "_Plan_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicVersion_plans_AB_unique" ON "_TopicVersion_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicVersion_plans_B_index" ON "_TopicVersion_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicDraft_plans_AB_unique" ON "_TopicDraft_plans"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicDraft_plans_B_index" ON "_TopicDraft_plans"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanVersion_topics_AB_unique" ON "_PlanVersion_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanVersion_topics_B_index" ON "_PlanVersion_topics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanDraft_topics_AB_unique" ON "_PlanDraft_topics"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanDraft_topics_B_index" ON "_PlanDraft_topics"("B");

-- AddForeignKey
ALTER TABLE "_Plan_topics" ADD CONSTRAINT "_Plan_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Plan_topics" ADD CONSTRAINT "_Plan_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_plans" ADD CONSTRAINT "_TopicVersion_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicVersion_plans" ADD CONSTRAINT "_TopicVersion_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_plans" ADD CONSTRAINT "_TopicDraft_plans_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicDraft_plans" ADD CONSTRAINT "_TopicDraft_plans_B_fkey" FOREIGN KEY ("B") REFERENCES "TopicDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_topics" ADD CONSTRAINT "_PlanVersion_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanVersion_topics" ADD CONSTRAINT "_PlanVersion_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_topics" ADD CONSTRAINT "_PlanDraft_topics_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanDraft_topics" ADD CONSTRAINT "_PlanDraft_topics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
