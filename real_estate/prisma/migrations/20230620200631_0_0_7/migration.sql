/*
  Warnings:

  - You are about to drop the column `chat_sender_id` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `chat_sender_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `chat` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `premissestype` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "chat" DROP CONSTRAINT "chat_realtor_id_fkey";

-- DropForeignKey
ALTER TABLE "chat" DROP CONSTRAINT "chat_user_id_fkey";

-- AlterTable
ALTER TABLE "realtor" DROP COLUMN "chat_sender_id";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "chat_sender_id";

-- DropTable
DROP TABLE "chat";

-- CreateTable
CREATE TABLE "premisses_short_view" (
    "premisses_id" INTEGER NOT NULL,
    "premisses_type_id" INTEGER NOT NULL,
    "media" BYTEA,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "renttype" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "premisses_short_view_premisses_id_key" ON "premisses_short_view"("premisses_id");

-- CreateIndex
CREATE UNIQUE INDEX "premissestype_name_key" ON "premissestype"("name");
