// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: "standalone",
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "localhost"],
  },
  webpack(config) {
    config.experiments = { topLevelAwait: true, ...config.experiments };
    return config;
  },
  transpilePackages: ["strapi-sdk-js"],
};

export default nextConfig;
