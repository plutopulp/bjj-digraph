import React from "react";
import uuid from "react-uuid";

import { useKeysPressed, useKeyPressed } from "../hooks/useKeyPressed";
import { GraphContext } from "./graphContext";
import { getEdgeIndex } from "../utils/graphUtils";

const NODE_KEY = "id";

// If any of the following keys are pressed onCreateNode (shift+click), we'll select the
// appropriate node to create
let hotKeys = [
  { key: "p", pressed: false, nodeType: "position" },
  { key: "s", pressed: false, nodeType: "submission" },
  { key: "t", pressed: false, nodeType: "transition" },
  { key: "c", pressed: false, nodeType: "conditional" },
];

export const GraphOpsContext = React.createContext();

export const GraphOpsProvider = ({ children }) => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    selected,
    setSelected,
    copiedNode,
    setCopiedNode,
  } = React.useContext(GraphContext);
  const handleSelectNode = (node) => {
    setSelected(node);
  };

  const handleSelectEdge = (edge) => {
    setSelected(edge);
  };

  // Appends a new node to nodes
  const handleCreateNode = (x, y, type) => {
    const newNode = {
      id: uuid(),
      title: "",
      type,
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

  // Creates an edge between 2 nodes
  const handleCreateEdge = (sourceNode, targetNode) => {
    if (sourceNode !== targetNode) {
      const newEdge = {
        source: sourceNode[NODE_KEY],
        target: targetNode[NODE_KEY],
        type: "emptyEdge",
      };
      setEdges([...edges, newEdge]);
    }
  };

  const handleSwapEdge = (source, target, edge) => {
    const edgeIndex = getEdgeIndex(edge, edges);
    const newEdge = JSON.parse(JSON.stringify(edges[edgeIndex]));
    newEdge.source = source[NODE_KEY];
    newEdge.target = target[NODE_KEY];
    setEdges([
      ...edges.slice(0, edgeIndex),
      newEdge,
      ...edges.slice(edgeIndex + 1),
    ]);
  };

  // Removes a given edge from edges
  const handleDeleteEdge = (edge, newEdges) => {
    setEdges(newEdges);
  };

  const handleCopySelected = () => {
    if (selected.source) {
      console.warn("Can't copy selected edges, try selecting a node instead.");
      return;
    }
    const x = selected.x + 10;
    const y = selected.y + 10;
    setCopiedNode({ ...selected, x, y });
  };

  const handlePasteSelected = (node, mousePosition) => {
    const newNode = {
      ...node,
      id: uuid(),
      x: mousePosition ? mousePosition[0] : node.x,
      y: mousePosition ? mousePosition[1] : node.y,
    };
    setNodes([...nodes, newNode]);
  };

  return (
    <GraphOpsContext.Provider
      value={{
        handleSelectNode,
        handleSelectEdge,
        handleCreateNode,
        handleDeleteNode,
        handleCreateEdge,
        handleSwapEdge,
        handleDeleteEdge,
        handleCopySelected,
        handlePasteSelected,
      }}
    >
      {children}
    </GraphOpsContext.Provider>
  );
};
