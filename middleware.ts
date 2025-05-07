import createMiddleware from 'next-intl/middleware';

// Create and export the middleware configuration
export default createMiddleware({
  locales: ['ru', 'en', 'tr'],
  defaultLocale: 'ru',
  localePrefix: 'always'
});

// Export the matcher configuration
export const config = {
  matcher: [
    '/', // Match root path
    '/(ru|en|tr)/:path*', // Match all paths with locale prefix
    '/((?!api|_next|_vercel|.*\\.).*)' // Exclude system paths
  ]
};