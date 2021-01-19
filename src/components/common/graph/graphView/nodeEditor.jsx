import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";

import { GraphContext } from "../../../../contexts/graph";
import { getNodeIndex } from "../../../../lib/utils/graph";
import { FormContainer, FormTitle } from "../../../styles/forms";
import withModalHOC from "../../../../hocs/withModal";
import { useAPI } from "../../../../hooks";
import { routes } from "../../../../lib/config/routes/routes";

// A modal window for editing a node
const NodeEditorContainer = ({ node }) => {
  const {
    nodes,
    setNodes,
    currentGraphId,
    disableAPI,
    setDisableAPI,
  } = React.useContext(GraphContext);
  const { update } = useAPI();

  // Disable backend API calls while modal is open
  // to avoid calls on every change
  React.useEffect(() => {
    setDisableAPI(true);
    return () => setDisableAPI(false);
  }, []);

  const handleNodeChange = (event) => {
    if (!disableAPI) setDisableAPI(true);
    const nodeIndex = getNodeIndex(node, nodes);
    const { name, value } = event.target;
    const newNode = { ...nodes[nodeIndex], [name]: value };
    const newNodes = [
      ...nodes.slice(0, nodeIndex),
      newNode,
      ...nodes.slice(nodeIndex + 1),
    ];
    setNodes(newNodes);
  };

  // Explicitly call update on submit
  async function handleSubmit(event) {
    event.preventDefault();
    update(routes.api.nodes(currentGraphId).detail(node.id), {
      ...nodes[getNodeIndex(node, nodes)],
    });
    setNodes(nodes);
  }

  return (
    <NodeEditor
      node={nodes[getNodeIndex(node, nodes)]}
      handleChange={handleNodeChange}
      handleSubmit={handleSubmit}
    />
  );
};

NodeEditorContainer.propTypes = {
  node: PropTypes.object.isRequired,
};

const NodeEditor = ({ node, handleChange, handleSubmit }) => (
  <FormContainer>
    <Form onSubmit={handleSubmit}>
      <FormTitle>Edit Node</FormTitle>
      <Form.Input
        label="Title"
        type="text"
        name="title"
        value={node.title}
        placeholder="Enter a title"
        onChange={handleChange}
      />
      <Form.TextArea
        label="Description"
        type="text"
        name="description"
        value={node.description}
        placeholder="Enter a description"
        onChange={handleChange}
      />
      <Form.Input
        label={`Score: ${node.score} `}
        min={-100}
        max={100}
        name="score"
        step={1}
        type="range"
        value={node.score}
        onChange={handleChange}
      />
      <Form.TextArea
        label="Score Rationale"
        type="text"
        name="rationale"
        value={node.rationale}
        placeholder="The rationale behind the chosen score"
        onChange={handleChange}
      />
      <Button type="submit">Save</Button>
    </Form>
  </FormContainer>
);

NodeEditor.propTypes = {
  node: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withModalHOC(NodeEditorContainer);
