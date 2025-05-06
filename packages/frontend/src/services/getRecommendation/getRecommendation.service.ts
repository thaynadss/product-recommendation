import { GetRecommendationProps } from "./getRecommendation.types";
import { RECOMMENDATION_TYPE } from "@constants/recommendationType.constant";

export const getRecommendations = ({
  products,
  selectedFeatures,
  selectedPreferences,
  selectedRecommendationType,
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

  if (selectedRecommendationType === RECOMMENDATION_TYPE.SingleProduct) {
    return [recommendations[recommendations.length - 1]];
  }

  return recommendations;
};
