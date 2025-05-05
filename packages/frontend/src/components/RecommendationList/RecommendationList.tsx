import { Product } from "../../types/product.type";

export function RecommendationList({ recommendations }: { recommendations?: Product[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {Array.isArray(recommendations) && !!recommendations.length ? (
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index} className="mb-2">
              {recommendation.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma recomendação encontrada.</p>
      )}
    </div>
  );
}
