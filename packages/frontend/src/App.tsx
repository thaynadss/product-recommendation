import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Product } from "./types/product.types";
import { RecommendationList } from "./components/RecommendationList/RecommendationList";

export function App() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

 const  handleRecommendations = (recommendations: Product[]) => {
    setRecommendations(recommendations);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-8 md:py-12">
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-center px-12 md:px-0">
        Recomendador de Produtos RD Station
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className="col-span-2 mb-4">
          <p className="text-md md:text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div>
          <Form onRecommendationsChange={handleRecommendations} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}
