import React from "react";
import uuid from "react-uuid";
import { GraphView, Edge, Node, GraphUtils } from "react-digraph";
import styled from "styled-components";

import { graphConfig } from "../config/graphConfig";
import { graph as graphData } from "../fixtures/graph";

const NODE_KEY = "id";
const { nodeTypes, nodeSubTypes, edgeTypes } = graphConfig;

const GraphWrapper = styled.div`
  width: 100%;
  height: 1000px;
`;

export const Graph = () => {
  const [nodes, setNodes] = React.useState(graphData.nodes);
  const [edges, setEdges] = React.useState(graphData.edges);
  const [selected, setSelected] = React.useState({});
  const graphRef = React.useRef();

  // Get the index of a given node
  const getNodeIndex = (searchNode) =>
    nodes.findIndex((node) => node[NODE_KEY] === searchNode[NODE_KEY]);

  // Get the index of a given edge
  const getEdgeIndex = (searchEdge) =>
    edges.findIndex(
      (edge) =>
        edge.source === searchEdge.source && edge.target === searchEdge.target
    );
  // Get the node corresponding to a given NODE_KEY
  const getNode = (nodeKey) => {
    const searchNode = { [NODE_KEY]: nodeKey };
    const searchIndex = getNodeIndex(searchNode);
    return nodes[searchIndex];
  };
  const handleSelectNode = (node) => {
    setSelected(node);
  };
  const handleSelectEdge = (edge) => {
    setSelected(edge);
  };
  // Appends a new node to nodes
  const handleCreateNode = (x, y, event) => {
    console.log(x, y, event);
    const newNode = {
      id: uuid(),
      title: "",
      type: "position",
      x,
      y,
    };
    setNodes([...nodes, newNode]);
  };
  // Removes a given node from nodes and its edges from edges
  const handleDeleteNode = (node, nodeId, nodeArray) => {
    const newEdges = edges.filter(
      (edge) => edge.source !== node[NODE_KEY] && edge.target !== node[NODE_KEY]
    );
    const newNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(newNodes);
    setEdges(newEdges);
  };

  return (
    <GraphWrapper>
      <GraphView
        ref={graphRef}
        nodeKey={NODE_KEY}
        nodes={nodes}
        edges={edges}
        selected={selected}
        nodeTypes={nodeTypes}
        nodeSubtypes={nodeSubTypes}
        edgeTypes={edgeTypes}
        onSelectNode={handleSelectNode}
        onSelectEdge={handleSelectEdge}
        onCreateNode={handleCreateNode}
        onDeleteNode={handleDeleteNode}
      />
    </GraphWrapper>
  );
};
