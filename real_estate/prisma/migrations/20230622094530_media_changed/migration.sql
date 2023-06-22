-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_realtor_id_fkey";

-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_user_id_fkey";

-- AlterTable
ALTER TABLE "media" ADD COLUMN     "file_name_orig" VARCHAR(255) NOT NULL DEFAULT 'None';

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_realtor_id_fkey" FOREIGN KEY ("realtor_id") REFERENCES "realtor"("realtor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
