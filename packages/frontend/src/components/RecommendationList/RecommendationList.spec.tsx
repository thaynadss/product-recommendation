import { Product } from "@types";
import { render, screen } from "@testing-library/react";
import { RecommendationList } from "./RecommendationList";

describe("RecommendationList Component", () => {
  const sut = (products?: Partial<Product>[]) => render(<RecommendationList recommendations={products as Product[]} />);

  it("should render the title correctly", () => {
    sut()

    expect(screen.getByText("Lista de Recomendações:")).toBeInTheDocument();
  });

  it("should render a message when no recommendations are provided", () => {
    sut()

    expect(screen.getByText("Nenhuma recomendação encontrada.")).toBeInTheDocument();
  });

  it("should render a list of recommendations when provided", () => {
    const recommendations = [
      { name: "Recommendation 1" },
      { name: "Recommendation 2" },
    ];
    sut(recommendations);
    const listItems = screen.getAllByRole("listitem");

    expect(screen.getByText("Recommendation 1")).toBeInTheDocument();
    expect(screen.getByText("Recommendation 2")).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });
});
