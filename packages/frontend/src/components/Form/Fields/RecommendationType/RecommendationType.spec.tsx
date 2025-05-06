import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { RecommendationType } from "./RecommendationType";
import { RECOMMENDATION_TYPE } from "@constants/recommendationType.constant";

describe("RecommendationType Component", () => {
  const mockOnRecommendationTypeChange = jest.fn();

  const sut = () => {
    return render(<RecommendationType onRecommendationTypeChange={mockOnRecommendationTypeChange} />);
  }

  beforeEach(() => {
    mockOnRecommendationTypeChange.mockClear();
  });

  it("should render the component with the correct data", () => {
    sut();

    expect(screen.getByText("Tipo de Recomendação:")).toBeInTheDocument();
    expect(screen.getByLabelText("Produto Único")).toBeInTheDocument();
    expect(screen.getByLabelText("Múltiplos Produtos")).toBeInTheDocument();
  });

  it("should call onRecommendationTypeChange with SingleProduct when 'Produto Único' is selected", () => {
    sut();
    const singleProductRadio = screen.getByLabelText("Produto Único");

    userEvent.click(singleProductRadio);

    expect(mockOnRecommendationTypeChange).toHaveBeenCalledWith(RECOMMENDATION_TYPE.SingleProduct);
  });

  it("should call onRecommendationTypeChange with MultipleProducts when 'Múltiplos Produtos' is selected", () => {
    sut();
    const multipleProductsRadio = screen.getByLabelText("Múltiplos Produtos");

    userEvent.click(multipleProductsRadio);

    expect(mockOnRecommendationTypeChange).toHaveBeenCalledWith(RECOMMENDATION_TYPE.MultipleProducts);
  });
});
