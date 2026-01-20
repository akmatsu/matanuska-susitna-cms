-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "slug" TEXT NOT NULL DEFAULT '',
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'unpublished',
    "makeDrafts" TEXT,
    "currentVersion" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostVersion" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "republish" TEXT,

    CONSTRAINT "PostVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostDraft" (
    "id" TEXT NOT NULL,
    "original" TEXT,
    "heroImage" TEXT,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "publishAt" TIMESTAMP(3),
    "unpublishAt" TIMESTAMP(3),
    "reviewDate" TIMESTAMP(3),
    "owner" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publish" TEXT,

    CONSTRAINT "PostDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostCategory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "PostCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostImage" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT '',
    "post" TEXT,
    "image" TEXT,
    "order" INTEGER DEFAULT 0,

    CONSTRAINT "PostImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Post_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Post_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Post_categories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_userGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_images" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_categories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_categories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_images" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Post_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Post_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_actions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Post_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostVersion_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostDraft_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_currentVersion_key" ON "Post"("currentVersion");

-- CreateIndex
CREATE INDEX "Post_owner_idx" ON "Post"("owner");

-- CreateIndex
CREATE INDEX "PostVersion_original_idx" ON "PostVersion"("original");

-- CreateIndex
CREATE INDEX "PostVersion_owner_idx" ON "PostVersion"("owner");

-- CreateIndex
CREATE INDEX "PostDraft_original_idx" ON "PostDraft"("original");

-- CreateIndex
CREATE INDEX "PostDraft_owner_idx" ON "PostDraft"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "PostCategory_title_key" ON "PostCategory"("title");

-- CreateIndex
CREATE INDEX "PostImage_post_idx" ON "PostImage"("post");

-- CreateIndex
CREATE INDEX "PostImage_image_idx" ON "PostImage"("image");

-- CreateIndex
CREATE UNIQUE INDEX "_Post_tags_AB_unique" ON "_Post_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_tags_B_index" ON "_Post_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Post_userGroups_AB_unique" ON "_Post_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_userGroups_B_index" ON "_Post_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Post_categories_AB_unique" ON "_Post_categories"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_categories_B_index" ON "_Post_categories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_tags_AB_unique" ON "_PostVersion_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_tags_B_index" ON "_PostVersion_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_userGroups_AB_unique" ON "_PostVersion_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_userGroups_B_index" ON "_PostVersion_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_tags_AB_unique" ON "_PostDraft_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_tags_B_index" ON "_PostDraft_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_userGroups_AB_unique" ON "_PostDraft_userGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_userGroups_B_index" ON "_PostDraft_userGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_images_AB_unique" ON "_PostDraft_images"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_images_B_index" ON "_PostDraft_images"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_categories_AB_unique" ON "_PostVersion_categories"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_categories_B_index" ON "_PostVersion_categories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_categories_AB_unique" ON "_PostDraft_categories"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_categories_B_index" ON "_PostDraft_categories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_images_AB_unique" ON "_PostVersion_images"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_images_B_index" ON "_PostVersion_images"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Post_documents_AB_unique" ON "_Post_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_documents_B_index" ON "_Post_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_documents_AB_unique" ON "_PostVersion_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_documents_B_index" ON "_PostVersion_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_documents_AB_unique" ON "_PostDraft_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_documents_B_index" ON "_PostDraft_documents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Post_actions_AB_unique" ON "_Post_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_actions_B_index" ON "_Post_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_actions_AB_unique" ON "_PostVersion_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_actions_B_index" ON "_PostVersion_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_actions_AB_unique" ON "_PostDraft_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_actions_B_index" ON "_PostDraft_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Post_contacts_AB_unique" ON "_Post_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_contacts_B_index" ON "_Post_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostVersion_contacts_AB_unique" ON "_PostVersion_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PostVersion_contacts_B_index" ON "_PostVersion_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostDraft_contacts_AB_unique" ON "_PostDraft_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_PostDraft_contacts_B_index" ON "_PostDraft_contacts"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_currentVersion_fkey" FOREIGN KEY ("currentVersion") REFERENCES "PostVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostVersion" ADD CONSTRAINT "PostVersion_original_fkey" FOREIGN KEY ("original") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostVersion" ADD CONSTRAINT "PostVersion_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostDraft" ADD CONSTRAINT "PostDraft_original_fkey" FOREIGN KEY ("original") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostDraft" ADD CONSTRAINT "PostDraft_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImage" ADD CONSTRAINT "PostImage_post_fkey" FOREIGN KEY ("post") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImage" ADD CONSTRAINT "PostImage_image_fkey" FOREIGN KEY ("image") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_tags" ADD CONSTRAINT "_Post_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_tags" ADD CONSTRAINT "_Post_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_userGroups" ADD CONSTRAINT "_Post_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_userGroups" ADD CONSTRAINT "_Post_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_categories" ADD CONSTRAINT "_Post_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_categories" ADD CONSTRAINT "_Post_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "PostCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_tags" ADD CONSTRAINT "_PostVersion_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_tags" ADD CONSTRAINT "_PostVersion_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_userGroups" ADD CONSTRAINT "_PostVersion_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_userGroups" ADD CONSTRAINT "_PostVersion_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_tags" ADD CONSTRAINT "_PostDraft_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_tags" ADD CONSTRAINT "_PostDraft_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_userGroups" ADD CONSTRAINT "_PostDraft_userGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_userGroups" ADD CONSTRAINT "_PostDraft_userGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_images" ADD CONSTRAINT "_PostDraft_images_A_fkey" FOREIGN KEY ("A") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_images" ADD CONSTRAINT "_PostDraft_images_B_fkey" FOREIGN KEY ("B") REFERENCES "PostImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_categories" ADD CONSTRAINT "_PostVersion_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "PostCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_categories" ADD CONSTRAINT "_PostVersion_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_categories" ADD CONSTRAINT "_PostDraft_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "PostCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_categories" ADD CONSTRAINT "_PostDraft_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_images" ADD CONSTRAINT "_PostVersion_images_A_fkey" FOREIGN KEY ("A") REFERENCES "PostImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_images" ADD CONSTRAINT "_PostVersion_images_B_fkey" FOREIGN KEY ("B") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_documents" ADD CONSTRAINT "_Post_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_documents" ADD CONSTRAINT "_Post_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_documents" ADD CONSTRAINT "_PostVersion_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_documents" ADD CONSTRAINT "_PostVersion_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_documents" ADD CONSTRAINT "_PostDraft_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_documents" ADD CONSTRAINT "_PostDraft_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_actions" ADD CONSTRAINT "_Post_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_actions" ADD CONSTRAINT "_Post_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_actions" ADD CONSTRAINT "_PostVersion_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_actions" ADD CONSTRAINT "_PostVersion_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_actions" ADD CONSTRAINT "_PostDraft_actions_A_fkey" FOREIGN KEY ("A") REFERENCES "InternalLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_actions" ADD CONSTRAINT "_PostDraft_actions_B_fkey" FOREIGN KEY ("B") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_contacts" ADD CONSTRAINT "_Post_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post_contacts" ADD CONSTRAINT "_Post_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_contacts" ADD CONSTRAINT "_PostVersion_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostVersion_contacts" ADD CONSTRAINT "_PostVersion_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PostVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_contacts" ADD CONSTRAINT "_PostDraft_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostDraft_contacts" ADD CONSTRAINT "_PostDraft_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "PostDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;
