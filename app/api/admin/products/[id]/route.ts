// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// export async function GET(_: Request, { params }: { params: { id: string } }) {
//   const product = await prisma.product.findUnique({ where: { id: Number(params.id) } });
//   return NextResponse.json(product);
// }

// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//   const data = await req.json();
//   const updated = await prisma.product.update({
//     where: { id: Number(params.id) },
//     data
//   });
//   return NextResponse.json(updated);
// }

// export async function DELETE(_: Request, { params }: { params: { id: string } }) {
//   await prisma.product.delete({ where: { id: Number(params.id) } });
//   return NextResponse.json({ success: true });
// }


import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Утилита для получения ID из URL
function getIdFromUrl(req: NextRequest): number {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  if (!id || isNaN(Number(id))) throw new Error('Invalid ID');
  return Number(id);
}

export async function GET(req: NextRequest) {
  try {
    const id = getIdFromUrl(req);
    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (_error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const id = getIdFromUrl(req);
    const data = await req.json();

    const updated = await prisma.product.update({
      where: { id },
      data
    });

    return NextResponse.json(updated);
  } catch (_error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = getIdFromUrl(req);

    await prisma.product.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (_error) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 400 });
  }
}

