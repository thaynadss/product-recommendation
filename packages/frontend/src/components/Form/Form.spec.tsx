import { Form } from "./Form";
import { useForm } from "@hooks/useForm";
import { useProducts } from "@hooks/useProducts";
import { useRecommendations } from "@hooks/useRecommendations";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("@hooks/useProducts");
jest.mock("@hooks/useForm");
jest.mock("@hooks/useRecommendations");

describe("Form Component", () => {
  const mockOnRecommendationsChange = jest.fn();

  const sut = () =>
    render(<Form onRecommendationsChange={mockOnRecommendationsChange} />);

  beforeEach(() => {
    jest.clearAllMocks();

    (useProducts as jest.Mock).mockReturnValue({
      preferences: ["Preference 1", "Preference 2"],
      features: ["Feature 1", "Feature 2"],
      products: ["Product 1", "Product 2"],
    });

    (useForm as jest.Mock).mockReturnValue({
      formData: {
        selectedPreferences: [],
        selectedFeatures: [],
        selectedRecommendationType: "",
      },
      handleChange: jest.fn(),
    });

    (useRecommendations as jest.Mock).mockReturnValue({
      getRecommendations: jest.fn().mockReturnValue(["Recommendation 1"]),
    });
  });

  it("should enable submit button when all required fields are filled", () => {
    (useForm as jest.Mock).mockReturnValue({
      formData: {
        selectedPreferences: ["Preference 1"],
        selectedFeatures: ["Feature 1"],
        selectedRecommendationType: "Type 1",
      },
      handleChange: jest.fn(),
    });
    sut();

    expect(
      screen.getByRole("button", { name: "Obter recomendação" })
    ).toBeEnabled();
  });

  it("should call onRecommendationsChange with recommendations on form submit", () => {
    const mockGetRecommendations = jest
      .fn()
      .mockReturnValue(["Recommendation 1"]);
    (useRecommendations as jest.Mock).mockReturnValue({
      getRecommendations: mockGetRecommendations,
    });
    (useForm as jest.Mock).mockReturnValue({
      formData: {
        selectedPreferences: ["Preference 1"],
        selectedFeatures: ["Feature 1"],
        selectedRecommendationType: "Type 1",
      },
      handleChange: jest.fn(),
    });
    sut();

    fireEvent.submit(screen.getByTestId("recommendation-form"));

    expect(mockGetRecommendations).toHaveBeenCalledWith({
      selectedPreferences: ["Preference 1"],
      selectedFeatures: ["Feature 1"],
      selectedRecommendationType: "Type 1",
    });
    expect(mockOnRecommendationsChange).toHaveBeenCalledWith([
      "Recommendation 1",
    ]);
  });

  it("should disable submit button when required fields are not filled", () => {
    (useForm as jest.Mock).mockReturnValue({
      formData: {
        selectedPreferences: [],
        selectedFeatures: [],
        selectedRecommendationType: "",
      },
      handleChange: jest.fn(),
    });
    sut();

    expect(
      screen.getByRole("button", { name: "Obter recomendação" })
    ).toBeDisabled();
  });
});
