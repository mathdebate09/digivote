-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "election" TEXT NOT NULL,
    "candidate" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);
