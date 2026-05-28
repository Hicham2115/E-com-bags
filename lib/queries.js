import axios from "axios";

export const queryKeys = {
  products: ["products"],
  product: (handle) => ["product", handle],
};

export const productsFetcher = () =>
  axios.get("/api/products").then((r) => r.data);

export const productFetcher = (handle) =>
  axios.get(`/api/products/${handle}`).then((r) => r.data);
