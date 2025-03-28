import Api from "../config/Api";
import { ProductProps } from "./types";

// const PATH =  process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "http://192.168.102.12:3000";

async function getProducts(): Promise<ProductProps[]> {
  const response = await Api.get(`/assets/data/data.json?${Math.random() * 100 + 1}`);
  
  return response.data;
}

async function getProductById(slug: string) {
  const response = await Api.get(`/product/${slug}`);

  return response.data;
}

export default {
  getProducts,
  getProductById
};