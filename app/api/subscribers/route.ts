// app/api/subscribers/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// In a real app, you'd add authentication middleware here
export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: { subscribedAt: 'desc' },
    });

    return NextResponse.json({ subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}