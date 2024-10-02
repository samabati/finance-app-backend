/*
  Warnings:

  - You are about to drop the column `reccuring` on the `transactions` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `recurring` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "reccuring",
ADD COLUMN     "recurring" BOOLEAN NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE INTEGER;
