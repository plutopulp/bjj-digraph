import { NODE_KEY } from "../config/graph/graphConfig";

// Get the index of a given node
export const getNodeIndex = (searchNode, nodes) =>
  nodes.findIndex((node) => node[NODE_KEY] === searchNode[NODE_KEY]);

// Get the index of a given edge
export const getEdgeIndex = (searchEdge, edges) =>
  edges.findIndex(
    (edge) =>
      edge.source === searchEdge.source && edge.target === searchEdge.target
  );

// Get the node corresponding to a given NODE_KEY
export const getNode = (nodeKey, nodes) => {
  const searchNode = { [NODE_KEY]: nodeKey };
  const searchIndex = getNodeIndex(searchNode);
  return nodes[searchIndex];
};

// Get the adjacent nodes of a given node in the digraph
export const getAdjacentNodes = (nodes, edges, node) => {
  const outwardEdges = edges.filter((edge) => edge.source === node.id);
  const adjacentNodeIds = outwardEdges.map((edge) => edge.target);
  const adjacentNodes = adjacentNodeIds.map((nodeId) => {
    return nodes.find((node) => node.id === nodeId);
  });
  return adjacentNodes;
};

export const getNodeSize = (xlinkRef) => {
  // get width and height defined on def element
  const defSvgNodeElement = xlinkRef
    ? document.querySelector(`defs>${xlinkRef}`)
    : null;
  const nodeWidthAttr = defSvgNodeElement
    ? defSvgNodeElement.getAttribute("width")
    : 0;
  const nodeHeightAttr = defSvgNodeElement
    ? defSvgNodeElement.getAttribute("height")
    : 0;
  const width = parseInt(nodeWidthAttr, 10);
  const height = parseInt(nodeHeightAttr, 10);

  return { width, height };
};
