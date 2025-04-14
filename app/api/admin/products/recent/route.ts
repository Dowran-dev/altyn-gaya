import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      take: 5,
      select: {
        id: true,
        name: true,
        subtitle: true,
        updatedAt: true,
        createdAt: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('[RECENT_PRODUCTS_ERROR]', error);
    return NextResponse.json({ error: 'Failed to load recent activity' }, { status: 500 });
  }
}
