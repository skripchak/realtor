-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(45),
    "second_name" VARCHAR(45),
    "father_name" VARCHAR(45),
    "email" VARCHAR(70),
    "phone_number" VARCHAR(13),
    "chat_sender_id" VARCHAR(45),
    "reg_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "password" VARCHAR(256) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "chat" (
    "chat_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "realtor_id" INTEGER,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("chat_id")
);

-- CreateTable
CREATE TABLE "likedpremisses" (
    "liked_premisses_id" SERIAL NOT NULL,
    "premisses_id" INTEGER,
    "user_id" INTEGER,
    "is_viewed" BOOLEAN,
    "liked_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likedpremisses_pkey" PRIMARY KEY ("liked_premisses_id")
);

-- CreateTable
CREATE TABLE "media" (
    "media_id" SERIAL NOT NULL,
    "media" BYTEA,
    "premisses_id" INTEGER,
    "realtor_id" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "media_pkey" PRIMARY KEY ("media_id")
);

-- CreateTable
CREATE TABLE "premisses" (
    "premisses_id" SERIAL NOT NULL,
    "premisses_type_id" INTEGER NOT NULL,
    "realtor_id" INTEGER NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "renttype" VARCHAR(45) NOT NULL,
    "description" VARCHAR(4096) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "room_number" SMALLINT NOT NULL,
    "floor" SMALLINT,
    "square" DOUBLE PRECISION NOT NULL,
    "area_description" VARCHAR(2046) NOT NULL,
    "posting_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DOUBLE PRECISION NOT NULL,
    "isposted" BOOLEAN,
    "available" BOOLEAN,
    "is_verificated" BOOLEAN,

    CONSTRAINT "premisses_pkey" PRIMARY KEY ("premisses_id")
);

-- CreateTable
CREATE TABLE "premissestype" (
    "premisses_type_id" SERIAL NOT NULL,
    "name" VARCHAR(45),
    "description" VARCHAR(1024),
    "media_id" INTEGER,

    CONSTRAINT "premissestype_pkey" PRIMARY KEY ("premisses_type_id")
);

-- CreateTable
CREATE TABLE "realtor" (
    "realtor_id" SERIAL NOT NULL,
    "uid" VARCHAR(200),
    "first_name" VARCHAR(45) NOT NULL,
    "second_name" VARCHAR(45) NOT NULL,
    "father_name" VARCHAR(45) NOT NULL,
    "phone_number" VARCHAR(13) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "password" VARCHAR(256) NOT NULL,
    "chat_sender_id" VARCHAR(45),
    "reg_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "rate_by_review" SMALLINT,
    "rate_number" INTEGER,

    CONSTRAINT "realtor_pkey" PRIMARY KEY ("realtor_id")
);

-- CreateTable
CREATE TABLE "review" (
    "review_id" SERIAL NOT NULL,
    "realtor_id" INTEGER,
    "father_id" INTEGER,
    "user_id" INTEGER,
    "advanteges" VARCHAR(300),
    "disadvantages" VARCHAR(300),
    "body" VARCHAR(1044),
    "rate" SMALLINT,

    CONSTRAINT "review_pkey" PRIMARY KEY ("review_id")
);

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_realtor_id_fkey" FOREIGN KEY ("realtor_id") REFERENCES "realtor"("realtor_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "likedpremisses" ADD CONSTRAINT "likedpremisses_premisses_id_fkey" FOREIGN KEY ("premisses_id") REFERENCES "premisses"("premisses_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likedpremisses" ADD CONSTRAINT "likedpremisses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_premisses_id_fkey" FOREIGN KEY ("premisses_id") REFERENCES "premisses"("premisses_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_realtor_id_fkey" FOREIGN KEY ("realtor_id") REFERENCES "realtor"("realtor_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "premisses" ADD CONSTRAINT "premisses_premisses_type_id_fkey" FOREIGN KEY ("premisses_type_id") REFERENCES "premissestype"("premisses_type_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premisses" ADD CONSTRAINT "premisses_realtor_id_fkey" FOREIGN KEY ("realtor_id") REFERENCES "realtor"("realtor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premissestype" ADD CONSTRAINT "premissestype_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media"("media_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_father_id_fkey" FOREIGN KEY ("father_id") REFERENCES "review"("review_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_realtor_id_fkey" FOREIGN KEY ("realtor_id") REFERENCES "realtor"("realtor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
