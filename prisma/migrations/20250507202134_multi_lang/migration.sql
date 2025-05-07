/*
  Warnings:

  - You are about to drop the column `directions` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `ProductCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "directions",
DROP COLUMN "features";

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "features";

-- CreateTable
CREATE TABLE "ProductCategoryTranslation" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,
    "productCategoryId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductCategoryTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductFeature" (
    "id" SERIAL NOT NULL,
    "feature" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductDirection" (
    "id" SERIAL NOT NULL,
    "direction" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductDirection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTranslation" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "fullTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,

    CONSTRAINT "ProductTranslation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductCategoryTranslation" ADD CONSTRAINT "ProductCategoryTranslation_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeature" ADD CONSTRAINT "ProductFeature_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDirection" ADD CONSTRAINT "ProductDirection_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
