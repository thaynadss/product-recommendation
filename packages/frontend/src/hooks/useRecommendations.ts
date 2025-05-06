import { useState } from "react";
import { FormData, Product } from "@types";
import { getRecommendations as recommendationService } from "@services/getRecommendation/getRecommendation.service";

export const useRecommendations = (products: Product[]) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const getRecommendations = (props: FormData) => {
    const recommendations = recommendationService({ ...props, products });

    setRecommendations(recommendations);
    return recommendations;
  };

  return { recommendations, getRecommendations, setRecommendations };
};
