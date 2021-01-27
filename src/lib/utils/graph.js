import { NODE_KEY } from "../config/graph/graphConfig";
import { shapes } from "../config/shapes/shapes";

// Get the index of a given node
export const getNodeIndex = (searchNode, nodes) =>
  nodes.findIndex((node) => node[NODE_KEY] === searchNode[NODE_KEY]);

// Get the index of a given edge
export const getEdgeIndex = (searchEdge, edges) =>
  edges.findIndex(
    (edge) =>
      edge.source === searchEdge.source && edge.target === searchEdge.target
  );

// Get the node with a given id
export const getNode = (id, nodes) => {
  const searchNode = { [NODE_KEY]: id };
  const searchIndex = getNodeIndex(searchNode);
  return nodes[searchIndex];
};

// Checks if an id is in a given node array
export const nodesInclude = (id, nodes) => {
  return nodes === undefined
    ? false
    : nodes.find((node) => id.includes(node.id));
};

// Maps an array of node ids to their respective view nodes
export const IdsToViewNodes = (nodeIds, nodes) =>
  nodeIds.map((id) => nodes.find((node) => node.id === id));

// Get the adjacent nodes of a given node in the digraph
export const getAdjacentNodes = (nodes, edges, node) => {
  const outwardEdges = edges.filter((edge) => edge.source === node.id);
  const adjacentNodeIds = outwardEdges.map((edge) => edge.target);
  return IdsToViewNodes(adjacentNodeIds, nodes);
};

// Get the adjacent node IDs for a given node ID
export const getAdjacentNodeIds = (nodeId, edges) => {
  const outwardEdges = edges.filter((edge) => edge.source === nodeId);
  const adjacentNodeIds = outwardEdges.map((edge) => edge.target);
  return adjacentNodeIds;
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

export const getShape = (shapeId) => {
  return shapes.find((shape) => shape.props.id === shapeId);
};
