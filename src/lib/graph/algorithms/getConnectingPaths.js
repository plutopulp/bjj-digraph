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
  // Create an array to store paths
  const path = [];

  const dfsRecursive = (node) => {
    node.visited = true;
    path.push(node);
    if (node.id === endNodeId) console.log(path.map((node) => node.title));
    else {
      const adjacentNodes = getAdjacentNodes(newNodes, newEdges, node);
      adjacentNodes.forEach((node) => {
        if (!node.visited) dfsRecursive(node);
      });
    }
    path.pop();
    node.visited = false;
  };
  dfsRecursive(startNode);
};
