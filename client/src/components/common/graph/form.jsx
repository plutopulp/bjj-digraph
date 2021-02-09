import React from "react";
import { Form, Button } from "semantic-ui-react";
import { FormContainer, FormTitle } from "../../styles/forms";

const GraphForm = ({
  formTitle,
  fields,
  handleChange,
  handleSubmit,
  actionContent,
}) => (
  <FormContainer>
    <Form onSubmit={handleSubmit}>
      <FormTitle>{formTitle}</FormTitle>
      <Form.Input
        label="Title"
        type="text"
        name="title"
        value={fields.title}
        placeholder="Enter a title"
        required
        onChange={handleChange}
      />
      <Form.TextArea
        label="Description"
        type="text"
        name="description"
        value={fields.description}
        placeholder="Enter a description"
        onChange={handleChange}
      />
      <Button type="submit" primary>
        {actionContent}
      </Button>
    </Form>
  </FormContainer>
);

export default GraphForm;
