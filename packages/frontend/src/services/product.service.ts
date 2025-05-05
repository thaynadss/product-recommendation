import axios from "axios";
import { Product } from "../types/product.type";

const baseURL = "http://localhost:3001";

export const getProducts = async () => {
  try {
    const response = await axios.get<Product[]>(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter os produtos:", error);
    throw error;
  }
};
