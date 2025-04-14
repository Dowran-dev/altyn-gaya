import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('[CONTACT_FORM_PAYLOAD]', body);

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const saved = await prisma.contactMessage.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone ?? null,
        subject: body.subject ?? null,
        message: body.message,
        replied: false,
      },
    });

    return NextResponse.json({ success: true, saved });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('[CONTACT_MESSAGE_ERROR]', error.message);
    } else {
      console.error('[CONTACT_MESSAGE_ERROR]', error);
    }

    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
