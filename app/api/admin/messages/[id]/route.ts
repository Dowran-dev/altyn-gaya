import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.contactMessage.delete({
      where: { id: Number(id) }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[DELETE_MESSAGE_ERROR]', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { replied } = await request.json();

    const updated = await prisma.contactMessage.update({
      where: { id: Number(id) },
      data: { replied },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('[UPDATE_MESSAGE_ERROR]', error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}