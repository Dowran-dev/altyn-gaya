import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // // 🔍 Find the product category (by title or category field — match your logic!)
    // const category = await prisma.productCategory.findFirst({
    //   where: {
    //     category: data.category,
    //     brandName: data.brandName
    //   }
    // });

    // if (!category) {
    //   return NextResponse.json({ error: 'Category not found' }, { status: 400 });
    // }

    let category = await prisma.productCategory.findFirst({
        where: {
          category: data.category,
          brandName: data.brandName
        }
      });
      
      if (!category) {
        category = await prisma.productCategory.create({
          data: {
            title: data.name,
            description: data.description || 'Автоматически создана',
            image: data.image || '',
            color: data.color || '#000000',
            brandName: data.brandName,
            category: data.category,
            features: data.features || [],
          }
        });
      }
      

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
        category: data.category, // optional string
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
    console.error('[CREATE_PRODUCT_ERROR]', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
