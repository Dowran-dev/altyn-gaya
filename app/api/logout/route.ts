import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear the cookie by setting it to empty with maxAge 0
  response.cookies.set('authToken', '', {
    path: '/',
    maxAge: 0,
  });

  return response;
}
