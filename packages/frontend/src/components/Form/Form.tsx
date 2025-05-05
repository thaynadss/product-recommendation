// Form.js

import { FormEvent, useEffect } from "react";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "../../hooks/useForm";
import { useProducts } from "../../hooks/useProducts";
import { useRecommendations } from "../../hooks/useRecommendations";
import { Preferences, Features, RecommendationType } from "./Fields";

export function Form() {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "",
  });

  const { getRecommendations, recommendations } = useRecommendations(products);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    /**
     * Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações
     */
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange("selectedPreferences", selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange("selectedFeatures", selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange("selectedRecommendationType", selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}
