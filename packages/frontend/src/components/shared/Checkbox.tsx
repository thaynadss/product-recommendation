import { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" {...props} />
      <span className="ml-2">{children}</span>
    </label>
  );
}

