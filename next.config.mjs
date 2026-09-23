

const nextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [70, 75],
    minimumCacheTTL: 86400,
    remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.shopify.com"
    }]

  }
};

export default nextConfig;
