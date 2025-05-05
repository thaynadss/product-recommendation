import { useState } from "react";
import { FormData } from "../types/form.type";
import { Product } from "../types/product.type";
import { RECOMMENDATION_TYPE } from "../constants/recommendationType";
import { getRecommendations as recommendationService } from "../services/recommendation.service";

export const useRecommendations = (products: Product[]) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const getRecommendations = ({
    selectedRecommendationType,
    ...props
  }: FormData) => {
    const data = recommendationService({ ...props, products });

    const recommendations =
      selectedRecommendationType === RECOMMENDATION_TYPE.SingleProduct
        ? [data[data.length - 1]]
        : data;

    setRecommendations(recommendations);
    return recommendations;
  };

  return { recommendations, getRecommendations, setRecommendations };
};
