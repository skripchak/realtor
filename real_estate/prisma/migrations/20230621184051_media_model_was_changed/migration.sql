/*
  Warnings:

  - You are about to drop the column `media` on the `media` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `father_name` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `rate_by_review` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `rate_number` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `reg_date` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `second_name` on the `realtor` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `realtor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `realtor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number]` on the table `realtor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `file_name` to the `media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `realtor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `realtor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_premisses_id_fkey";

-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_realtor_id_fkey";

-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_user_id_fkey";

-- DropIndex
DROP INDEX "realtor_email_key";

-- AlterTable
ALTER TABLE "media" DROP COLUMN "media",
ADD COLUMN     "file_name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "realtor" DROP COLUMN "email",
DROP COLUMN "father_name",
DROP COLUMN "first_name",
DROP COLUMN "password",
DROP COLUMN "rate_by_review",
DROP COLUMN "rate_number",
DROP COLUMN "reg_date",
DROP COLUMN "second_name",
DROP COLUMN "uid",
ADD COLUMN     "location" VARCHAR(1000) NOT NULL,
ADD COLUMN     "name" VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "realtor_name_key" ON "realtor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "realtor_phone_number_key" ON "realtor"("phone_number");

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_premisses_id_fkey" FOREIGN KEY ("premisses_id") REFERENCES "premisses"("premisses_id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_realtor_id_fkey" FOREIGN KEY ("realtor_id") REFERENCES "realtor"("realtor_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;
