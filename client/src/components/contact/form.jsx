import React from "react";
import { Form, Button, Input, TextArea } from "semantic-ui-react";
import { useFormFields } from "../../hooks";
import { FormContainer, FormSubText, FormTitle } from "../styles/forms";

const initialFields = {
  name: null,
  email: null,
  message: null,
};
const initialErrors = {
  nameError: null,
  emailError: null,
  messageError: null,
};

const ContactForm = () => {
  const [fields, setFields, handleChange] = useFormFields(initialFields);
  return (
    <FormContainer>
      <FormTitle>Drop us a line</FormTitle>
      <FormSubText>Feel free to get in touch about any queries!</FormSubText>
      <Form id="contact-form">
        <Form.Field
          control={Input}
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={fields.name}
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          label="Email"
          type="text"
          name="email"
          placeholder="Enter your email address"
          required
          value={fields.email}
          onChange={handleChange}
        />
        <Form.Field
          control={TextArea}
          label="Message"
          type="text"
          name="message"
          placeholder="Enter your message"
          required
          value={fields.message}
          onChange={handleChange}
        />
        <Button type="submit" primary>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
