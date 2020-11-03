import React from "react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

import { GraphContext } from "../contexts/graphContext";
import { getNodeIndex } from "../utils/graphUtils";

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

const NodeEditor = ({ node, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Input
      label="Title"
      type="text"
      name="title"
      value={node.title}
      placeholder="Enter a title"
      onChange={handleChange}
    />
  </Form>
);

export { NodeEditorContainer as NodeEditor };
