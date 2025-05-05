import { Checkbox } from "../../shared/Checkbox";

interface RecommendationTypeProps {
  onRecommendationTypeChange: (type: string) => void;
}

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
          value="SingleProduct"
          onChange={() => onRecommendationTypeChange("SingleProduct")}
        >
          Produto Único
        </Checkbox>
        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          onChange={() => onRecommendationTypeChange("MultipleProducts")}
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}
