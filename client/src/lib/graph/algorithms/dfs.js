import { getAdjacentNodes } from "../../utils/graph";

// Basic Depth First Search digraph traveral implementation
export const dfs = (nodes, edges, startNodeId) => {
  // Create a deep copy of the nodes and edges
  const newNodes = JSON.parse(JSON.stringify(nodes));
  const newEdges = JSON.parse(JSON.stringify(edges));

  // Find the starting node
  const startNode = newNodes.find((node) => node.id === startNodeId);

  // Initialize all nodes to unvisited
  newNodes.forEach((node) => {
    node.visited = false;
  });

  const dfsRecursive = (node) => {
    node.visited = true;
    console.log(node);
    const adjacentNodes = getAdjacentNodes(newNodes, newEdges, node);
    adjacentNodes.forEach((node) => {
      if (!node.visited) dfsRecursive(node);
    });
  };
  dfsRecursive(startNode);
};
