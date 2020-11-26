import React from "react";
import { v4 as uuid } from "uuid";
import _ from "lodash";

import { GraphContext } from "../../contexts/graph";
import { getNodeIndex, getEdgeIndex } from "../../lib/utils/graph";

import { NODE_KEY } from "../../lib/config/graph/graphConfig";
import { useKeyPressed } from "../events/useKeyPressed";

// Hook for all graph operation/modification methods
// These methods modify client nodes and edges (react states)
// No server modifications / API calls are made here.

export const useGraphOps = () => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    selected,
    setSelected,
    multiSelect,
    setMultiSelect,
    copiedNode,
    setCopiedNode,
  } = React.useContext(GraphContext);

  // Will probably put this into its own hook, when other hotkeys are defined
  const escapePressed = useKeyPressed("Escape");
  const sKeyPressed = useKeyPressed("s");
  React.useEffect(() => {
    if (escapePressed) {
      setSelected(null);
      setMultiSelect([]);
    }
  }, [escapePressed]);

  const handleSelectNode = (node) => {
    console.log(sKeyPressed);
    if (sKeyPressed) {
      if (multiSelect.find((selectedNode) => selectedNode.id === node.id))
        setMultiSelect(
          multiSelect.filter((selectedNode) => selectedNode.id !== node.id)
        );
      else setMultiSelect([...multiSelect, node]);
    }
    setSelected(node);
  };

  const handleSelectEdge = (edge) => {
    setSelected(edge);
  };

  // Appends a new node to nodes. Expects x and y graph coordinate
  // and nodeType as defined in nodeTypes
  const handleCreateNode = (x, y, nodeType) => {
    const newNode = {
      id: uuid(),
      title: nodeType.typeText,
      type: nodeType.name,
      ..._.omit(nodeType, ["name", "typeText", "shapeId", "shape"]),
      x,
      y,
    };
    setNodes([...nodes, newNode]);
  };
  const handleUpdateNode = (node) => {
    const index = getNodeIndex(node, nodes);
    const newNode = { ...node };
    setNodes([...nodes.slice(0, index), newNode, ...nodes.slice(index + 1)]);
  };

  // Removes a given node from nodes and its connected edges from edges
  const handleDeleteNode = (node, nodeId) => {
    const newEdges = edges.filter(
      (edge) => edge.source !== node[NODE_KEY] && edge.target !== node[NODE_KEY]
    );
    const newNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(newNodes);
    setEdges(newEdges);
    setSelected(null);
  };

  // Creates an edge between 2 nodes
  const handleCreateEdge = (sourceNode, targetNode) => {
    if (sourceNode !== targetNode) {
      const newEdge = {
        id: uuid(),
        source: sourceNode[NODE_KEY],
        target: targetNode[NODE_KEY],
        type: "emptyEdge",
      };
      setEdges([...edges, newEdge]);
    }
  };

  // Changes the target node of an edge
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
  const handleDeleteEdge = (_, newEdges) => {
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

  return {
    handleSelectNode,
    handleSelectEdge,
    handleCreateNode,
    handleUpdateNode,
    handleDeleteNode,
    handleCreateEdge,
    handleSwapEdge,
    handleDeleteEdge,
    handleCopySelected,
    handlePasteSelected,
  };
};
