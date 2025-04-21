import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.productCategory.findMany({
      select: { category: true },
      distinct: ['category'],
    });

    const brands = await prisma.productCategory.findMany({
      select: { brandName: true },
      distinct: ['brandName'],
    });

    return NextResponse.json({
      categories: categories.map(c => c.category),
      brands: brands.map(b => b.brandName),
    });
  } catch (error) {
    console.error('[GET_METADATA_ERROR]', error);
    return NextResponse.json({ error: 'Failed to load metadata' }, { status: 500 });
  }
}
