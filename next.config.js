/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove appDir pois agora é o comportamento padrão no Next.js 13+
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
