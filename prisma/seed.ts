import { PrismaClient } from '@prisma/client';
import { productsData } from '../data/products';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);
  
  // Clear existing data (optional)
  await prisma.productReview.deleteMany({});
  await prisma.productSize.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.productCategory.deleteMany({});
  
  // Seed product categories and products
  for (const category of productsData) {
    const createdCategory = await prisma.productCategory.create({
      data: {
        title: category.title,
        description: category.description,
        image: category.image,
        color: category.color,
        brandName: category.brandName,
        category: category.category,
        features: category.features,
      },
    });
    
    // Add products for this category
    for (const product of category.products) {
      const createdProduct = await prisma.product.create({
        data: {
          name: product.name,
          subtitle: product.subtitle,
          fullTitle: product.fullTitle,
          description: product.description,
          longDescription: product.longDescription,
          image: product.image,
          color: product.color,
          brandName: product.brandName,
          category: product.category,
          features: product.features,
          directions: product.directions,
          rating: product.rating,
          reviews: product.reviews,
          badge: product.badge || null,
          categoryId: createdCategory.id,
        },
      });
      
      // Add sizes for this product
      for (const size of product.sizes) {
        await prisma.productSize.create({
          data: {
            name: size.name,
            quantity: size.quantity,
            price: size.price,
            productId: createdProduct.id,
          },
        });
      }
      
      // Add reviews for this product
      for (const review of product.reviewsList) {
        await prisma.productReview.create({
          data: {
            author: review.author,
            date: review.date,
            rating: review.rating,
            title: review.title,
            content: review.content,
            productId: createdProduct.id,
          },
        });
      }
    }
  }
  
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });