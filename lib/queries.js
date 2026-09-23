import { demoProducts } from "./demo-product";

export const queryKeys = {
  products: ["products"],
  product: (handle) => ["product", handle],
};

// The storefront is in showcase mode, so product screens stay instant without Shopify.
export const productsFetcher = async () => demoProducts;

export const productFetcher = async (handle) =>
  demoProducts.find((product) => product.handle === handle) ?? null;
