// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: "standalone",
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["images.ctfassets.net", "localhost", "images.unsplash.com", "plus.unsplash.com"],
  },
  webpack(config) {
    config.experiments = { topLevelAwait: true, ...config.experiments };
    return config;
  },
  transpilePackages: ["strapi-sdk-js"],
};

export default nextConfig;
