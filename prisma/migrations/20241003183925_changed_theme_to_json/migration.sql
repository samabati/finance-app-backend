/*
  Warnings:

  - Changed the type of `theme` on the `budgets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `theme` on the `pots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "theme",
ADD COLUMN     "theme" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "pots" DROP COLUMN "theme",
ADD COLUMN     "theme" JSONB NOT NULL;
