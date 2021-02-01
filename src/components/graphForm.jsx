import React from "react";
import { v4 as uuid } from "uuid";

import { GraphsContext } from "../contexts/graphs";
import GraphForm from "./common/graph/form";
import { useFormFields } from "../hooks/index";

const slugify = require("slugify");

const initialFields = {
  title: "",
  description: "",
};
const CreateGraph = ({ handleClose }) => {
  const [fields, setFields, handleChange] = useFormFields(initialFields);
  const { graphs, setGraphs } = React.useContext(GraphsContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const newGraph = {
      ...fields,
      createdAt: new Date(),
      id: uuid(),
      slug: slugify(fields.title, { remove: "_", lower: true, strict: true }),
    };
    await setGraphs([...graphs, newGraph]);
    setFields(initialFields);
    handleClose();
  }

  return (
    <GraphForm
      formTitle="New Graph"
      fields={fields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      actionContent="Create"
    />
  );
};

export default CreateGraph;
