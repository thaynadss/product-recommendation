import { Product } from "@types";

export type FormProps = {
  onRecommendationsChange: (recommendations: Product[]) => void;
};
