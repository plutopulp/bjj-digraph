import React from "react";

// A hook which tracks whether a form is valid
export const useFormValid = (fields, errors) => {
  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    const isFormValid = () => {
      // Form is invalid if not every field is true or not every error is false
      const fieldValues = Object.values(fields);
      const errorValues = Object.values(errors);
      if (!fieldValues.every((value) => value)) return false;
      if (!errorValues.every((value) => !value)) return false;
      return true;
    };
    setFormValid(isFormValid());
  }, [JSON.stringify(errors)]);

  return formValid;
};
