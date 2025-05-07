// next.config.ts
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net", "www.techkorm.ru", "termobrest.ru", "images.unsplash.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);