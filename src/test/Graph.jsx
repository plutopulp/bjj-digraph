import React from "react";
import { GraphView } from "react-digraph";
import _ from "lodash";

import GraphConfig, { NODE_KEY } from "./graph-config"; // Configures node/edge types
import { GraphContext } from "../contexts/graph";

const { NodeTypes, NodeSubtypes, EdgeTypes } = GraphConfig;

const GraphViewContainer = () => {
  const graphRef = React.useRef();
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
  } = React.useContext(GraphContext);
  const [copiedNode, setCopiedNode] = React.useState({});
  const [copiedNodes, setCopiedNodes] = React.useState([]);
  const [copiedEdges, setCopiedEdges] = React.useState([]);

  const getNodeIndex = (searchNode, nodes) =>
    nodes.findIndex((node) => node[NODE_KEY] === searchNode[NODE_KEY]);

  const getEdgeIndex = (searchEdge, edges) =>
    edges.findIndex(
      (edge) =>
        edge.source === searchEdge.source && edge.target === searchEdge.target
    );
  const handleSelectNode = (node) => {
    console.log("single node selected");
    setSelected(node);
  };
  const handleSelectEdge = (edge) => {
    setSelected(edge);
  };
  const handleSelect = ({ nodes, edges }) => {
    console.log("multi node selected");
    setSelectedNodes(nodes);
    setSelectedEdges(edges);
  };
  const handleCreateNode = (x, y, nodeType) => {
    const type = Math.random() < 0.25 ? "poly" : "special";
    const newNode = {
      id: Date.now(),
      title: "New Node",
      type,
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

  const handleDeleteNode = (node, nodeId) => {
    const newEdges = edges.filter(
      (edge) => edge.source !== node[NODE_KEY] && edge.target !== node[NODE_KEY]
    );
    const newNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(newNodes);
    setEdges(newEdges);
    setSelected({});
  };

  const handleCreateEdge = (sourceNode, targetNode) => {
    if (sourceNode !== targetNode) {
      const newEdge = {
        id: Date.now(),
        source: sourceNode[NODE_KEY],
        target: targetNode[NODE_KEY],
        type: "emptyEdge",
      };
      setEdges([...edges, newEdge]);
      setSelected(newEdge);
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

  const handleDeleteEdge = (_, newEdges) => {
    setEdges(newEdges);
    setSelected({});
  };

  const handleCopySelected = () => {
    console.log("fired");
    if (selected?.source) {
      console.warn("Can't copy selected edges, try selecting a node instead.");
      return;
    }
    if (selectedNodes.length > 0) {
      setCopiedNodes([...selectedNodes]);
      setCopiedEdges([...selectedEdges]);
    } else setCopiedNode({ ...selected });
  };
  React.useEffect(() => console.log(selectedNodes, copiedNodes));

  const handlePasteSelected = (node, mousePosition) => {
    console.log(copiedNodes);
    if (copiedNodes.length === 0 && !_.isEmpty(copiedNode))
      // Used when allowMultiselect is false
      handlePasteNode(node, mousePosition);
    else if (copiedNodes.length !== 0)
      // Used when allowMultiselect is false
      handlePasteNodes(mousePosition);
  };

  // "Private" method for handling single node paste
  const handlePasteNode = (node, mousePosition) => {
    console.log("paste single node");
    const newNode = {
      ...node,
      id: Date.now(),
      x: mousePosition ? mousePosition[0] : node.x,
      y: mousePosition ? mousePosition[1] : node.y,
    };
    setNodes([...nodes, newNode]);
    setSelected(newNode);
  };

  // "Private" method for handling multiple node paste
  const handlePasteNodes = ([mouseX, mouseY]) => {
    console.log("paste multi node");
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
    const newNodes = copiedNodes.map((copiedNode) => {
      const x = mouseX + (copiedNode.x - cornerX);
      const y = mouseY + (copiedNode.y - cornerY);
      const id = `${copiedNode.id}_${Date.now()}`;

      newIDs[copiedNode.id] = id;

      return {
        ...copiedNode,
        id,
        x,
        y,
      };
    });

    const newEdges = copiedEdges.map((copiedEdge) => {
      return {
        ...copiedEdge,
        source: newIDs[copiedEdge.source],
        target: newIDs[copiedEdge.target],
      };
    });

    setNodes([...nodes, ...newNodes]);
    setEdges([...edges, ...newEdges]);

    setSelectedNodes(newNodes);
    setSelectedEdges(newEdges);
  };

  return (
    <div style={{ height: "1000px" }}>
      <GraphView
        ref={graphRef}
        nodeKey={NODE_KEY}
        nodes={nodes}
        edges={edges}
        selected={selected}
        selectedNodes={selectedNodes}
        selectedEdges={selectedEdges}
        nodeTypes={NodeTypes}
        nodeSubtypes={NodeSubtypes}
        edgeTypes={EdgeTypes}
        allowMultiselect={true}
        onSelectNode={handleSelectNode}
        onSelectEdge={handleSelectEdge}
        onSelect={handleSelect}
        onUpdateNode={handleUpdateNode}
        onCreateNode={handleCreateNode}
        onDeleteNode={handleDeleteNode}
        onCreateEdge={handleCreateEdge}
        onSwapEdge={handleSwapEdge}
        onDeleteEdge={handleDeleteEdge}
        onCopySelected={handleCopySelected}
        onPasteSelected={handlePasteSelected}
      />
    </div>
  );
};

export default GraphViewContainer;
