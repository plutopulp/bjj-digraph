import { NODE_KEY } from "../config/graphConfig";

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
