-- CreateEnum
CREATE TYPE "VotingMethod" AS ENUM ('ONLINE', 'POSTAL', 'ABSENTEE', 'OFFLINE');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "Voter" (
    "id" TEXT NOT NULL,
    "votingId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "votingMethod" "VotingMethod" NOT NULL,
    "braille" BOOLEAN NOT NULL,
    "interpreter" BOOLEAN NOT NULL,
    "wheelchair" BOOLEAN NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Voter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voter_votingId_key" ON "Voter"("votingId");
