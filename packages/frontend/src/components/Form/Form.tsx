import { useForm } from "@hooks/useForm";
import { FormProps } from "./Form.types";
import { SubmitButton } from "./SubmitButton";
import { useProducts } from "@hooks/useProducts";
import { FormEvent, useEffect, useState } from "react";
import { useRecommendations } from "@hooks/useRecommendations";
import { Preferences, Features, RecommendationType } from "./Fields";

export function Form({ onRecommendationsChange }: FormProps) {
  const [disabled, setDisabled] = useState(true);
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "",
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataRecommendations = getRecommendations(formData);

    onRecommendationsChange(dataRecommendations);
  };

  useEffect(() => {
    const { selectedPreferences, selectedFeatures, selectedRecommendationType } = formData;

    if ((!!selectedPreferences?.length || !!selectedFeatures?.length) && selectedRecommendationType) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  return (
    <form
      className="max-w-md md:mx-auto md:p-4 bg-white rounded-lg shadow-d"
      data-testid="recommendation-form"
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
      <SubmitButton text="Obter recomendação" disabled={disabled} />
    </form>
  );
}
