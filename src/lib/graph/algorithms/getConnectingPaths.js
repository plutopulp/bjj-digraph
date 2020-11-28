import { getAdjacentNodes } from "../../utils/graph";

export const getConnectingPaths = (nodes, edges, startNodeId, endNodeId) => {
  // Create a deep copy of the nodes and edges
  const newNodes = JSON.parse(JSON.stringify(nodes));
  const newEdges = JSON.parse(JSON.stringify(edges));

  // Find the starting node
  const startNode = newNodes.find((node) => node.id === startNodeId);

  // Initialize all nodes to unvisited
  newNodes.forEach((node) => {
    node.visited = false;
  });
  // Create an array to store a path of nodes
  const path = [];
  // Create an array to store paths
  const outputPaths = [];

  const dfs = (node) => {
    node.visited = true;
    path.push(node);
    if (node.id === endNodeId) outputPaths.push(path.map((node) => node));
    else {
      const adjacentNodes = getAdjacentNodes(newNodes, newEdges, node);
      adjacentNodes.forEach((node) => {
        if (!node.visited) dfs(node);
      });
    }
    path.pop();
    node.visited = false;
  };
  dfs(startNode);
  return outputPaths;
};
