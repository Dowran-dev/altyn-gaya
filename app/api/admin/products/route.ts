import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      subtitle: true,
      brandName: true,
      category: true,
      image: true
    }
  });
  return NextResponse.json(products);
}


export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Find the category by its title
    const category = await prisma.productCategory.findFirst({
        where: {
          category: data.category,
          brandName: data.brandName,
        },
      });
      console.log('[CATEGORY_LOOKUP]', data.category, data.brandName);

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 400 });
    }

    // 2. Create the product with categoryId
    const product = await prisma.product.create({
      data: {
        name: data.name,
        subtitle: data.subtitle,
        fullTitle: data.fullTitle,
        description: data.description,
        longDescription: data.longDescription,
        image: data.image,
        color: data.color,
        brandName: data.brandName,
        category: data.category,
        features: data.features,
        directions: data.directions,
        rating: Number(data.rating),
        reviews: Number(data.reviews),
        badge: data.badge,
        categoryId: category.id,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error('[PRODUCT_CREATE_ERROR]', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
