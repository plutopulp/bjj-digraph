import { getAdjacentNodeIds, IdsToViewNodes } from "../../utils/graph";

export const getConnectingPaths = (
  viewNodes,
  viewEdges,
  startNodeId,
  endNodeId
) => {
  // Extract the node IDs of the view nodes
  // Only use these in the search
  const edges = viewEdges.map((edge) => {
    return {
      id: edge.id,
      source: edge.source,
      target: edge.target,
    };
  });

  // The nodes which have been visited
  const visited = new Set();

  // An array to store a path of nodes
  const path = [];
  // An array to store paths
  const outputPaths = [];

  // A depth first search traversal which pushes
  // all connecting paths to the output
  const dfs = (id) => {
    visited.add(id);
    path.push(id);
    if (id === endNodeId) outputPaths.push(path.map((id) => id));
    else {
      const adjacentNodeIds = getAdjacentNodeIds(id, edges);
      adjacentNodeIds.forEach((id) => {
        if (!visited.has(id)) dfs(id);
      });
    }
    path.pop();
    visited.delete(id);
  };
  dfs(startNodeId);
  // Convert the ids to nodes
  return outputPaths.map((path) => IdsToViewNodes(path, viewNodes));
};
