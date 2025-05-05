import { FormData } from "../types/form.type";
import { Product } from "../types/product.type";

type GetRecommendationProps = FormData & {
  products: Product[];
};

export const getRecommendations = (props: GetRecommendationProps) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */
};
