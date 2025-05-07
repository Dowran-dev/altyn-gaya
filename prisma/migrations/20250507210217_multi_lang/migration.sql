/*
  Warnings:

  - You are about to drop the `ProductCategoryTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductDirection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductFeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductCategoryTranslation" DROP CONSTRAINT "ProductCategoryTranslation_productCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDirection" DROP CONSTRAINT "ProductDirection_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFeature" DROP CONSTRAINT "ProductFeature_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "directions" TEXT[],
ADD COLUMN     "features" TEXT[];

-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "features" TEXT[];

-- DropTable
DROP TABLE "ProductCategoryTranslation";

-- DropTable
DROP TABLE "ProductDirection";

-- DropTable
DROP TABLE "ProductFeature";

-- DropTable
DROP TABLE "ProductTranslation";
