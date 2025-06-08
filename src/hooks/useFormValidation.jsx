import { useState } from 'react';

export const useFormValidation = (fields) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    for (let field in fields) {
      if (!fields[field]) {
        newErrors[field] = 'This field is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};
