/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/v1/graphql/:path*",
      destination: `${process.env.HASURA_API_ENDPOINT}/:path*`,
    },
  ],
};

module.exports = nextConfig;
