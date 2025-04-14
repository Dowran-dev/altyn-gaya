// app/api/admin/stats/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const [totalProducts, totalCategories, totalSubscribers, totalMessages] = await Promise.all([
      prisma.product.count(),
      prisma.productCategory.count(),
      prisma.subscriber.count(),
      prisma.contactMessage.count(),
    ]);

    // Replace with real logic if you want monthly comparison
    const productChange = 12;      // mock: +12% from last month
    const categoryChange = 5;
    const subscriberChange = 0;
    const messageChange = 6;

    return NextResponse.json({
      totalProducts,
      totalCategories,
      totalSubscribers,
      totalMessages,
      productChange,
      categoryChange,
      subscriberChange,
      messageChange,
    });
  } catch (error) {
    console.error('[ADMIN_STATS_ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
