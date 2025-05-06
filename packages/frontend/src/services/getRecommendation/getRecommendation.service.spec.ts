import { FormData, Product } from "@types";
import { mockProducts } from "@mocks/mockProducts";
import { getRecommendations } from "./getRecommendation.service";

describe("getRecommendations", () => {
  const sut = (formData: FormData) =>
    getRecommendations({
      ...formData,
      products: mockProducts,
    });

  it("should return the correct recommendation for SingleProduct based on selected preferences", () => {
    const formData = {
      selectedPreferences: ["Integração com chatbots"],
      selectedFeatures: ["Chat ao vivo e mensagens automatizadas"],
      selectedRecommendationType: "SingleProduct",
    };
    const recommendations = sut(formData);

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe("RD Conversas");
  });

  it("should return the correct recommendation for MultipleProduct based on selected preferences", () => {
    const formData = {
      selectedPreferences: [
        "Integração fácil com ferramentas de e-mail",
        "Personalização de funis de vendas",
        "Automação de marketing",
      ],
      selectedFeatures: [
        "Rastreamento de interações com clientes",
        "Rastreamento de comportamento do usuário",
      ],
      selectedRecommendationType: "MultipleProducts",
    };
    const recommendations = sut(formData);

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product: Product) => product.name)).toEqual([
      "RD Station CRM",
      "RD Station Marketing",
    ]);
  });

  it("should return only one product for SingleProduct with more than one matching product", () => {
    const formData = {
      selectedPreferences: [
        "Integração fácil com ferramentas de e-mail",
        "Automação de marketing",
      ],
      selectedFeatures: [
        "Rastreamento de interações com clientes",
        "Rastreamento de comportamento do usuário",
      ],
      selectedRecommendationType: "SingleProduct",
    };
    const recommendations = sut(formData);

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe("RD Station Marketing");
  });

  it("should return the last match in case of a tie for SingleProduct", () => {
    const formData = {
      selectedPreferences: [
        "Automação de marketing",
        "Integração com chatbots",
      ],
      selectedRecommendationType: "SingleProduct",
      selectedFeatures: [],
    };
    const recommendations = sut(formData);

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe("RD Conversas");
  });
});
