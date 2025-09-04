/*
  Warnings:

  - You are about to drop the column `addressId` on the `Shop` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Address_shopId_key";

-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "addressId",
ALTER COLUMN "to_consume" SET DEFAULT false,
ALTER COLUMN "to_delivery" SET DEFAULT false,
ALTER COLUMN "to_pickup" SET DEFAULT false;
