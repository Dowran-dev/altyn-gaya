import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('[GET_MESSAGES_ERROR]', error);
    return NextResponse.json({ error: 'Failed to load messages' }, { status: 500 });
  }
}
