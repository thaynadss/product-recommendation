import { Preferences } from "./Preferences";
import userEvent from "@testing-library/user-event";
import { PreferencesProps } from "./Preferences.types";
import { render, screen } from "@testing-library/react";

describe("Preferences Component", () => {
  const mockPreferences = ["Option 1", "Option 2", "Option 3"];
  const mockOnPreferenceChange = jest.fn();

  const sut = (selectedPreferences: string[] = []) => {
    const props: PreferencesProps = {
      preferences: mockPreferences,
      selectedPreferences,
      onPreferenceChange: mockOnPreferenceChange,
    };

    render(<Preferences {...props} />);
  };

  it("should render the preferences list", () => {
    sut();

    mockPreferences.forEach((preference) => {
      expect(screen.getByText(preference)).toBeInTheDocument();
    });
  });

  it("should render checkboxes with correct initial state", () => {
    sut(["Option 1"]);
    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
  });

  it("should call onPreferenceChange with updated preferences when a checkbox is clicked", () => {
    sut();
    const checkbox = screen.getByLabelText("Option 1");

    userEvent.click(checkbox);

    expect(mockOnPreferenceChange).toHaveBeenCalledWith(["Option 1"]);
  });

  it("should remove a preference when a checked checkbox is clicked", () => {
    sut(["Option 1"]);
    const checkbox = screen.getByLabelText("Option 1");

    userEvent.click(checkbox);

    expect(mockOnPreferenceChange).toHaveBeenCalledWith([]);
  });

  it("should add multiple preferences when multiple checkboxes are clicked", () => {
    sut();
    const checkbox1 = screen.getByLabelText("Option 1");
    const checkbox2 = screen.getByLabelText("Option 2");

    userEvent.click(checkbox1);
    userEvent.click(checkbox2);

    expect(mockOnPreferenceChange).toHaveBeenCalledWith(["Option 1", "Option 2"]);
  });

  it("should render the correct number of checkboxes", () => {
    sut();
    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(mockPreferences.length);
  });
});
