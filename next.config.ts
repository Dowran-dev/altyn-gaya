/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.ctfassets.net", "www.techkorm.ru", "termobrest.ru", "evopack.com.ua"], // Разрешаем Next.js загружать изображения с этого домена
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;