/*
  Warnings:

  - You are about to drop the `Environment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `baths` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beds` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Environment" DROP CONSTRAINT "Environment_propertyId_fkey";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "baths" INTEGER NOT NULL,
ADD COLUMN     "beds" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Environment";
