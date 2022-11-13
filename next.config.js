/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'] } },
  ],
}

module.exports = nextConfig
