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
const NodeContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.25em;
`;

export const Graph = () => {
  const [nodes, setNodes] = React.useState(graphData.nodes);
  const [edges, setEdges] = React.useState(graphData.edges);
  const [selected, setSelected] = React.useState({});
  const [copiedNode, setCopiedNode] = React.useState({});
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
  //
  const handleSwapEdge = (source, target, edge) => {
    const edgeIndex = getEdgeIndex(edge);
    const newEdge = JSON.parse(JSON.stringify(edges[edgeIndex]));
    newEdge.source = source[NODE_KEY];
    newEdge.target = target[NODE_KEY];
    setEdges([
      ...edges.splice(0, edgeIndex),
      newEdge,
      ...edges.splice(edgeIndex + 1),
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
  const getCustomStyle = (data) => {
    return (
      <foreignObject x="-77" y="-77" width="154" height="154">
        <NodeContentWrapper>
          <span>{data.title} </span>
        </NodeContentWrapper>
      </foreignObject>
    );
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
        onCreateEdge={handleCreateEdge}
        onDeleteNode={handleDeleteNode}
        onDeleteEdge={handleDeleteEdge}
        onSwapEdge={handleSwapEdge}
        onCopySelected={handleCopySelected}
        onPasteSelected={handlePasteSelected}
        on
        renderNodeText={getCustomStyle}
      />
    </GraphWrapper>
  );
};
