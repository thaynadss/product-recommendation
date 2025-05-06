export type FeaturesProps = {
  features: string[];
  selectedFeatures?: string[];
  onFeatureChange: (features: string[]) => void;
};
