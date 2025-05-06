export type PreferencesProps = {
  preferences: string[];
  selectedPreferences?: string[];
  onPreferenceChange: (preferences: string[]) => void;
};
