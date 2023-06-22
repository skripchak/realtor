/*
  Warnings:

  - You are about to drop the `premisses_short_view` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "premisses_short_view";

-- CreateTable
CREATE TABLE "PremissesShortView" (
    "premisses_id" INTEGER NOT NULL,
    "premisses_type_id" INTEGER NOT NULL,
    "media" BYTEA,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "renttype" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PremissesShortView_premisses_id_key" ON "PremissesShortView"("premisses_id");
