import { getAdjacentNodes } from "../../utils/graph";

// Basic Breadth first search traversal of a digraph

export const bfs = (nodes, edges, startNodeId) => {
  // Create a deep copy of the nodes and edges
  const newNodes = JSON.parse(JSON.stringify(nodes));
  const newEdges = JSON.parse(JSON.stringify(edges));

  // Find the starting node
  const startNode = newNodes.find((node) => node.id === startNodeId);

  // Mark all the nodes as unvisited
  newNodes.forEach((node) => (node.visited = false));

  // Create a queue of nodes to visit
  const queue = [];

  startNode.visited = true;
  queue.push(startNode);
  while (queue.length) {
    const nextNode = queue.shift();
    const adjacentNodes = getAdjacentNodes(newNodes, newEdges, nextNode);
    adjacentNodes.forEach((node) => {
      if (!node.visited) {
        queue.push(node);
        node.visited = true;
      }
    });
  }
};
