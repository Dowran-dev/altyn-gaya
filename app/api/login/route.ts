import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Fake check — replace with actual logic
  if (username === 'admin' && password === 'password') {
    const response = NextResponse.json({ success: true });

    // ✅ Set authToken cookie
    response.cookies.set('authToken', 'example-auth-token', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
      secure: false, // set to true in production over HTTPS
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
