// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for authentication (this is a simplified example)
    // In a real application, you'd verify a session token or JWT
    const isAuthenticated = request.cookies.has('authToken');
    
    if (!isAuthenticated) {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Admin API routes should also be protected
  if (request.nextUrl.pathname.startsWith('/api/subscribers')) {
    const isAuthenticated = request.cookies.has('authToken');
    
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/subscribers/:path*'],
};