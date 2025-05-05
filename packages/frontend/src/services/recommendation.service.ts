import { FormData } from "../types/form.type";
import { Product } from "../types/product.type";

type GetRecommendationProps = Omit<FormData, "selectedRecommendationType"> & {
  products: Product[];
};

export const getRecommendations = ({
  products,
  selectedFeatures,
  selectedPreferences,
}: GetRecommendationProps) => {
  const recommendations = products.filter((product) => {
    const hasAnyFeature = selectedFeatures.some((feature) =>
      product.features.includes(feature)
    );
    const hasAnyPreference = selectedPreferences.some((preference) =>
      product.preferences.includes(preference)
    );

    return hasAnyFeature || hasAnyPreference;
  });

  return recommendations;
};
