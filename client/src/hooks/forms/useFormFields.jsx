import React from "react";

// Hook to update multiple form fields on input change
export const useFormFields = (initialState) => {
  const [fields, setFields] = React.useState(initialState);

  return [
    fields,
    setFields,
    function (event) {
      setFields({ ...fields, [event.target.name]: event.target.value });
    },
  ];
};
