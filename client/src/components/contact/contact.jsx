import React from "react";
import Axios from "axios";
import withModalHOC from "../../hocs/withModal";
import { useFormFieldsWithErrors, useFormValid } from "../../hooks";
import { routes } from "../../lib/config/routes/routes";
import ContactForm from "./form/form";

const initialFields = {
  name: "",
  subject: "",
  email: "",
  message: "",
};
const initialFieldErrors = {
  nameError: "",
  subjectError: "",
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
      Axios.post(routes.api.contacts, fields)
        .then(() => {
          handleCreateSuccess();
        })
        .catch(() => {
          handleCreateError();
        });
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
