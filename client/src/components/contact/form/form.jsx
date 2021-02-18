import React from "react";
import { Form, Button, Input, TextArea } from "semantic-ui-react";
import { FormContainer, FormSubText, FormTitle } from "../../styles/forms";
import { ErrorMessage, InvalidMessage, SuccessMessage } from "./messages";

const ContactForm = ({
  fields,
  errors,
  formSuccess,
  formError,
  formValid,
  formSubmitted,
  handleSubmit,
  handleChange,
}) => {
  return (
    <FormContainer>
      <FormTitle>Drop us a line</FormTitle>
      <FormSubText>Feel free to get in touch about any queries!</FormSubText>
      <Form
        id="contact-form"
        onSubmit={handleSubmit}
        success={formSuccess}
        error={formError}
      >
        {formSubmitted && (
          <React.Fragment>
            <SuccessMessage show={formSuccess} />
            <InvalidMessage show={!formValid} />
            <ErrorMessage show={formError} />
          </React.Fragment>
        )}
        <Form.Field
          control={Input}
          label="Name"
          type="text"
          name="name"
          error={!errors["nameError"] ? false : errors["nameError"]}
          placeholder="Enter your name"
          required
          value={fields.name}
          onChange={(event) =>
            handleChange(event, {
              errorName: "nameError",
              errorType: "textError",
              minChars: 3,
            })
          }
        />
        <Form.Field
          control={Input}
          label="Email"
          type="text"
          name="email"
          error={!errors["emailError"] ? false : errors["emailError"]}
          placeholder="Enter your email address"
          required
          value={fields.email}
          onChange={(event) =>
            handleChange(event, {
              errorName: "emailError",
              errorType: "emailError",
            })
          }
        />
        <Form.Field
          control={TextArea}
          label="Message"
          type="text"
          name="message"
          error={!errors["messageError"] ? false : errors["messageError"]}
          placeholder="Enter your message"
          required
          value={fields.message}
          onChange={(event) =>
            handleChange(event, {
              errorName: "messageError",
              errorType: "textError",
              minChars: 50,
            })
          }
        />
        <Button type="submit" primary>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
