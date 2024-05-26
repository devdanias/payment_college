/*
  Warnings:

  - Added the required column `teste` to the `CreditCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CreditCard" ADD COLUMN     "teste" TEXT NOT NULL;
