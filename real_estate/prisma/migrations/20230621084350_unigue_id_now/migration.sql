/*
  Warnings:

  - A unique constraint covering the columns `[liked_premisses_id]` on the table `likedpremisses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[media_id]` on the table `media` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[premisses_id]` on the table `premisses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[premisses_type_id]` on the table `premissestype` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[realtor_id]` on the table `realtor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[review_id]` on the table `review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "likedpremisses_liked_premisses_id_key" ON "likedpremisses"("liked_premisses_id");

-- CreateIndex
CREATE UNIQUE INDEX "media_media_id_key" ON "media"("media_id");

-- CreateIndex
CREATE UNIQUE INDEX "premisses_premisses_id_key" ON "premisses"("premisses_id");

-- CreateIndex
CREATE UNIQUE INDEX "premissestype_premisses_type_id_key" ON "premissestype"("premisses_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "realtor_realtor_id_key" ON "realtor"("realtor_id");

-- CreateIndex
CREATE UNIQUE INDEX "review_review_id_key" ON "review"("review_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_id_key" ON "user"("user_id");
