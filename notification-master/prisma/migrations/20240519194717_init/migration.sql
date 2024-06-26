-- CreateEnum
CREATE TYPE "MailType" AS ENUM ('orderConfirmation', 'paymentConfirmation');

-- CreateTable
CREATE TABLE "Mail" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "mailDestination" TEXT NOT NULL,
    "mailConfirmation" TEXT NOT NULL,
    "mailType" "MailType" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mail_pkey" PRIMARY KEY ("id")
);
