import React from "react";
import Axios from "axios";
import withModalHOC from "../../hocs/withModal";
import { useFormFieldsWithErrors, useFormValid } from "../../hooks";
import { routes } from "../../lib/config/routes/routes";
import ContactForm from "./form/form";

const initialFields = {
  name: "",
  email: "",
  message: "",
};
const initialFieldErrors = {
  nameError: "",
  emailError: "",
  messageError: "",
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formSuccess, setFormSuccess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [fields, setFields, errors, , handleChange] = useFormFieldsWithErrors(
    initialFields,
    initialFieldErrors,
    formSubmitted,
    setFormSubmitted
  );
  const formValid = useFormValid(fields, errors);
  // Creates an instance of a resource type
  const create = (endpoint, instance, successCallback, errorCallback) => {
    Axios.post(endpoint, instance)
      .then((response) => {
        console.log(response);
        if (successCallback) successCallback();
      })
      .catch((error) => {
        console.log(error);
        if (errorCallback) errorCallback();
      });
  };

  // Callback on successful contact creation
  const handleCreateSuccess = () => {
    setFields(initialFields);
    setFormSuccess(true);
  };

  // Callback on unsuccessful contact creation
  const handleCreateError = () => {
    setFormError(true);
  };

  const handleSubmit = (event) => {
    setFormSubmitted(true);
    event.preventDefault();
    if (formValid)
      create(
        routes.api.contacts,
        fields,
        handleCreateSuccess,
        handleCreateError
      );
  };

  return (
    <ContactForm
      fields={fields}
      errors={errors}
      formSuccess={formSuccess}
      formValid={formValid}
      formError={formError}
      formSubmitted={formSubmitted}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default withModalHOC(Contact);
