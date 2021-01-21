import React from "react";
import { v4 as uuid } from "uuid";

import { GraphContext } from "../../contexts/graph";
import { getNodeIndex, getEdgeIndex } from "../../lib/utils/graph";

import { NODE_KEY } from "../../lib/config/graph/graphConfig";
import { useKeyPressed } from "../events/useKeyPressed";

// Hook for all graph operation/modification methods
// These methods modify client nodes, edges etc.. (react states)
// No server requests / API calls are made here.

export const useGraphOps = () => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    selected,
    setSelected,
    selectedNodes,
    setSelectedNodes,
    selectedEdges,
    setSelectedEdges,
    multiSelect,
    setMultiSelect,
    setPaths,
    copiedNode,
    setCopiedNode,
    copiedNodes,
    setCopiedNodes,
    copiedEdges,
    setCopiedEdges,
  } = React.useContext(GraphContext);

  // Will probably put this into its own hook, when other hotkeys are defined
  const escapePressed = useKeyPressed("Escape");
  const sKeyPressed = useKeyPressed("s");
  React.useEffect(() => {
    if (escapePressed) {
      setSelected(null);
      setMultiSelect([]);
      setPaths([]);
      setSelectedEdges([]);
      setSelectedNodes([]);
    }
  }, [escapePressed]);

  // Selecting single node at a time
  const handleSelectNode = (node) => {
    if (sKeyPressed) {
      if (multiSelect.find((selectedNode) => selectedNode.id === node.id))
        setMultiSelect(
          multiSelect.filter((selectedNode) => selectedNode.id !== node.id)
        );
      else setMultiSelect([...multiSelect, node]);
    }
    setSelected(node);
  };

  // Selecting single edge at a time
  const handleSelectEdge = (edge) => {
    setSelected(edge);
  };

  // Selecting multiple items at a time
  // Annoying... both onSelect and onSelectNode get called
  // when clicking on a node. Can't just get rid of onSelectNode
  // because delete method couple to selected behind the scene
  const handleSelect = ({ nodes, edges }) => {
    // Ensure only selected populated when clicking on an item
    if (nodes.length > 1) setSelectedNodes(nodes);
    if (edges.length > 1) setSelectedEdges(edges);
  };

  // Appends a new node to nodes. Expects x and y graph coordinate
  // and nodeType as defined in nodeTypes
  const handleCreateNode = (x, y, nodeType) => {
    const newNode = {
      id: uuid(),
      title: nodeType.typeText,
      type: nodeType.name,
      nodeType: nodeType.name,
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
    console.log(selectedNodes);
    if (selected.source) {
      console.warn("Can't copy selected edges, try selecting a node instead.");
      return;
    }
    if (selectedNodes !== null) {
      setCopiedNodes([...selectedNodes]);
      setCopiedEdges([...selectedEdges]);
    } else setCopiedNode({ ...selected });
  };

  // Pastes the selected item(s) to mouse position
  const handlePasteSelected = (node, mousePosition) => {
    console.log(node, mousePosition);
    if (copiedNodes === null && copiedNode !== null)
      // Used when allowMultiselect is false
      handleSingleNodePaste(node, mousePosition);
    else if (copiedNodes !== null)
      // Used when allowMultiselect is false
      handleMultiNodePaste(mousePosition);
  };

  // "Private" method for handling single node paste
  const handleSingleNodePaste = (node, mousePosition) => {
    const newNode = {
      ...node,
      id: uuid(),
      x: mousePosition ? mousePosition[0] : node.x,
      y: mousePosition ? mousePosition[1] : node.y,
    };
    setNodes([...nodes, newNode]);
    setSelected(newNode);
  };

  // "Private" method for handling multiple node paste
  const handleMultiNodePaste = ([mouseX, mouseY]) => {
    let cornerX, cornerY;
    copiedNodes.forEach((copiedNode) => {
      // find left-most node and record x position
      if (cornerX == null || copiedNode.x < cornerX) cornerX = copiedNode.x;

      // find top-most node and record y position
      if (cornerY == null || copiedNode.y < cornerY) cornerY = copiedNode.y;
    });
    // Keep track of the mapping of old IDs to new IDs
    // so we can recreate the edges
    const newIDs = {};

    // Every node position is relative to the top and left-most corner
    copiedNodes.forEach((copiedNode) => {
      const x = mouseX + (copiedNode.x - cornerX);
      const y = mouseY + (copiedNode.y - cornerY);
      handleCreateNode(x, y, copiedNode.nodeType);
    });
    const newEdges = copiedEdges.map((copiedEdge) => {
      return {
        ...copiedEdge,
        source: newIDs[copiedEdge.source],
        target: newIDs[copiedEdge.target],
      };
    });
  };

  return {
    handleSelectNode,
    handleSelectEdge,
    handleSelect,
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
