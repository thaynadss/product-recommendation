import { SubmitButtonProps } from "./SubmitButton.types";

export function SubmitButton({ text, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`text-white font-bold py-2 px-4 rounded ${
        disabled
          ? "bg-blue-300 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-700"
      }`}
    >
      {text}
    </button>
  );
}
