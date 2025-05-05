import { useState } from "react";
import { FormData } from "../types/form.type";

export const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field: string, value: string | string[]) => {
    setFormData({ ...formData, [field]: value });
  };

  return { formData, handleChange };
};
