/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: { unoptimized: true, },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      },
    ],
  }
  // },
  /* experimental: {
    serverActions: true,
  }, */
};

module.exports = nextConfig;
