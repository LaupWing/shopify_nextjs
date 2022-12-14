/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ["external-content.duckduckgo.com", "cdn.shopify.com"]
   },
}

module.exports = nextConfig
