import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

import { GraphContext } from "../contexts/graphContext";
import { getNodeIndex } from "../utils/graphUtils";
import { FormContainer, FormTitle } from "./styles/forms";

const NodeEditorContainer = ({ node }) => {
  const { nodes, setNodes } = React.useContext(GraphContext);

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
      <Form.TextArea
        label="Comment"
        type="text"
        name="comment"
        value={node.comment}
        placeholder="Enter any comments"
        onChange={handleChange}
      />
      <Form.Input
        label={`Effectiveness: ${node.efficiency} `}
        min={0}
        max={100}
        name="efficiency"
        step={1}
        type="range"
        value={node.efficiency}
        onChange={handleChange}
      />
      <Form.Input
        label={`Priority: ${node.priority} `}
        min={0}
        max={100}
        name="priority"
        step={1}
        type="range"
        value={node.priority}
        onChange={handleChange}
      />
      <Form.Input
        label={`Proficiency: ${node.proficiency} `}
        min={0}
        max={100}
        name="proficiency"
        step={1}
        type="range"
        value={node.proficiency}
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

export { NodeEditorContainer as NodeEditor };
