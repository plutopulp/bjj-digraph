import React from "react";

import { GraphsContext } from "../../../../../../contexts/graphs";
import withModalHOC from "../../../../../../hocs/withModal";
import { useFormFields } from "../../../../../../hooks";
import GraphForm from "../../../../../common/graph/form";

const slugify = require("slugify");

const EditGraph = ({ id, handleClose }) => {
  const { graphs, setGraphs } = React.useContext(GraphsContext);
  const targetGraph = graphs.find((graph) => graph.id === id);
  const [fields, , handleChange] = useFormFields({
    title: targetGraph.title,
    description: targetGraph.description,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const graphIndex = graphs.findIndex((graph) => graph.id === targetGraph.id);
    const newGraph = {
      ...targetGraph,
      ...fields,
      slug: slugify(fields.title, { remove: "_", lower: true, strict: true }),
    };
    const newGraphs = [
      ...graphs.slice(0, graphIndex),
      newGraph,
      ...graphs.slice(graphIndex + 1),
    ];
    await setGraphs(newGraphs);
    handleClose();
  }

  return (
    <GraphForm
      formTitle="Edit Graph"
      fields={fields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      actionContent="Save"
    />
  );
};

export default withModalHOC(EditGraph);
