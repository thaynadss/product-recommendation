import { Checkbox } from "@components/shared/Checkbox";
import { RecommendationTypeProps } from "./RecommendationType.types";
import { RECOMMENDATION_TYPE } from "@constants/recommendationType.constant";


export function RecommendationType({
  onRecommendationTypeChange,
}: RecommendationTypeProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex flex-col gap-2">
        <Checkbox
          type="radio"
          name="recommendationType"
          value={RECOMMENDATION_TYPE.SingleProduct}
          onChange={() => onRecommendationTypeChange(RECOMMENDATION_TYPE.SingleProduct)}
        >
          Produto Único
        </Checkbox>
        <Checkbox
          type="radio"
          name="recommendationType"
          value={RECOMMENDATION_TYPE.MultipleProducts}
          onChange={() => onRecommendationTypeChange(RECOMMENDATION_TYPE.MultipleProducts)}
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}
