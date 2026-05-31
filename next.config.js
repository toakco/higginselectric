/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/higginselectric",
  assetPrefix: "/higginselectric",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/higginselectric",
  },
};
module.exports = nextConfig;
