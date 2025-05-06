import { Checkbox } from "./Checkbox";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Checkbox Component", () => {
  const handleChange = jest.fn();
  const sut = (checked = false) => render(<Checkbox onChange={handleChange} checked={checked}>Test Label</Checkbox>);

  it("should call onChange handler when clicked", () => {
    sut();
    const checkbox = screen.getByRole("checkbox");

    userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should render checkbox as checked when the checked prop is true", () => {
    sut(true);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
  });

  it("should render checkbox as unchecked when the checked prop is false", () => {
    sut();
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
  });
});
