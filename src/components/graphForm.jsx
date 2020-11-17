import React from "react";
import { v4 as uuid } from "uuid";
import { Button, Form } from "semantic-ui-react";
import { GraphsContext } from "../contexts/graphs";
import { useFormFields } from "../hooks/index";
import { FormContainer, FormTitle } from "./styles/forms";

const initialFields = {
  title: "",
  description: "",
};
const GraphFormContainer = () => {
  const [fields, setFields, handleChange] = useFormFields(initialFields);
  const { graphs, setGraphs } = React.useContext(GraphsContext);

  async function handleSubmit(event) {
    event.preventDefault();
    await setGraphs([
      ...graphs,
      { ...fields, createdAt: new Date(), id: uuid() },
    ]);
  }

  return (
    <GraphForm
      fields={fields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

const GraphForm = ({ fields, handleChange, handleSubmit }) => (
  <FormContainer>
    <Form onSubmit={handleSubmit}>
      <FormTitle>New Graph</FormTitle>
      <Form.Input
        label="Title"
        type="text"
        name="title"
        value={fields.title}
        placeholder="Enter a title"
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
      <Button type="submit">Submit</Button>
    </Form>
  </FormContainer>
);

export default GraphFormContainer;
