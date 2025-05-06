import { FormData, Product } from "@types";

export type GetRecommendationProps = FormData & {
  products: Product[];
};
