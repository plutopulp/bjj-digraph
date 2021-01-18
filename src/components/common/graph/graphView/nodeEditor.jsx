import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";

import { GraphContext } from "../../../../contexts/graph";
import { getNodeIndex } from "../../../../lib/utils/graph";
import { FormContainer, FormTitle } from "../../../styles/forms";
import withModalHOC from "../../../../hocs/withModal";

// A modal window for editing a node
const NodeEditorContainer = ({ node }) => {
  const { nodes, setNodes } = React.useContext(GraphContext);

  // Probably an anti-pattern, but only want form fields to
  // be stored in state on submission, because backend API calls
  // happen automatically on state update. Consider changing this
  const [formFields, setFormFields] = React.useState({ ...node });

  React.useEffect(() => console.log(formFields));

  const handleNodeChange = (event) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
    </Form>
  </FormContainer>
);

NodeEditor.propTypes = {
  node: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withModalHOC(NodeEditorContainer);
