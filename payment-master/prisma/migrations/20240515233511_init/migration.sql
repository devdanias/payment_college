/*
  Warnings:

  - Added the required column `testar` to the `CreditCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CreditCard" ADD COLUMN     "testar" TEXT NOT NULL;
