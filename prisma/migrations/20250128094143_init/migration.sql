-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User', 'Guest');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(22) NOT NULL,
    "lastName" VARCHAR(22) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phoneNumber" VARCHAR(15),
    "passwordEncoded" VARCHAR(255) NOT NULL,
    "gender" "Gender" NOT NULL,
    "hobbies" VARCHAR(255),
    "role" "Role" NOT NULL DEFAULT 'User',
    "imagePath" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
