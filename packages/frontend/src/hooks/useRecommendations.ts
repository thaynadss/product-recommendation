import { useState } from "react";
import { FormData } from "../types/form.type";
import { Product } from "../types/product.type";
import { getRecommendations as recommendationService } from "../services/recommendation.service";

export const useRecommendations = (products: Product[]) => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData: FormData) => {
    return recommendationService({ ...formData, products });
  };

  return { recommendations, getRecommendations, setRecommendations };
};
