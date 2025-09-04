/*
  Warnings:

  - The `social_media` column on the `Shop` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Shop" ALTER COLUMN "brand_colors" SET DATA TYPE TEXT,
DROP COLUMN "social_media",
ADD COLUMN     "social_media" TEXT[];
