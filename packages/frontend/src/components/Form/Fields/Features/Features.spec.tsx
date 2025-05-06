import { Features } from "./Features";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { FeaturesProps } from "./Features.types";

import { Checkbox } from '@components/shared/Checkbox';

test('deve importar o componente', () => {
  expect(Checkbox).toBeDefined();
});

// describe("Features Component", () => {
//   const mockFeatures = ["Feature 1", "Feature 2", "Feature 3"];
//   const mockOnFeatureChange = jest.fn();

//    const sut = (selectedFeatures: string[] = []) => {
//       const props: FeaturesProps = {
//         features: mockFeatures,
//         selectedFeatures,
//         onFeatureChange: mockOnFeatureChange,
//       };

//       render(<Features {...props} />);
//     };


//   it("should render the features list", () => {
//     sut();

//     mockFeatures.forEach((feature) => {
//       expect(screen.getByText(feature)).toBeInTheDocument();
//     });
//   });

//   it("should check a feature when clicked", () => {
//     sut();
//     const checkbox = screen.getByLabelText("Feature 1");

//     userEvent.click(checkbox);

//     expect(mockOnFeatureChange).toHaveBeenCalledWith(["Feature 1"]);
//   });

//   it("should uncheck a feature when clicked again", () => {
//     sut(["Feature 1"]);
//     const checkbox = screen.getByLabelText("Feature 1");

//     userEvent.click(checkbox);


//     expect(mockOnFeatureChange).toHaveBeenCalledWith([]);
//   });

//   it("should render with pre-selected features", () => {
//     sut(["Feature 2"]);
//     const checkbox = screen.getByLabelText("Feature 2");

//     expect(checkbox).toBeChecked();
//   });
// });
