import React from "react";

// eslint-disable-next-line
const RegExJS = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmailInput = (email) => {
  const emailRegex = RegExp(RegExJS);
  return !emailRegex.test(email) ? "Invalid email address!" : "";
};

const validateTextInput = (text, minChars) => {
  return text.length < minChars
    ? `Entry must be at least ${minChars} characters long!`
    : "";
};

// A hook which handles form field and error changes
export const useFormFieldsWithErrors = (
  initialFields,
  initialErrors,
  formSubmitted,
  setFormSubmitted
) => {
  const [fields, setFields] = React.useState(initialFields);
  const [errors, setErrors] = React.useState(initialErrors);

  const validate = (value, errorProps) => {
    const { errorName, errorType } = errorProps;
    let error = "";
    if (!value) return setErrors({ ...errors, [errorName]: error });
    switch (errorType) {
      case "textError":
        error = validateTextInput(value, errorProps.minChars);
        break;
      case "emailError":
        error = validateEmailInput(value);
        break;
      default:
        throw new Error(`Error type ${errorType} not recognized.`);
    }
    setErrors({ ...errors, [errorName]: error });
  };

  const handleChange = (event, errorProps) => {
    if (formSubmitted) setFormSubmitted(false);
    validate(event.target.value, errorProps);
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return [fields, setFields, errors, setErrors, handleChange];
};
