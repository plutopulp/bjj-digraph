import { getAdjacentNodes } from "../../utils/graph";

// Returns the shortest path between 2 nodes in a digraph
// as an array of nodes
export const shortestPathBFS = (nodes, edges, startNodeId, endNodeId) => {
  // Create a deep copy of the nodes and edges
  const newNodes = JSON.parse(JSON.stringify(nodes));
  const newEdges = JSON.parse(JSON.stringify(edges));

  // Find the start and end nodes
  const startNode = newNodes.find((node) => node.id === startNodeId);

  // Mark all the nodes as unvisited
  newNodes.forEach((node) => (node.visited = false));

  // Queue of paths
  const queue = [];
  // push 1st path to the queue
  queue.push([startNode]);

  while (queue.length) {
    const path = queue.shift();
    const nextNode = path[path.length - 1];
    if (nextNode.id === endNodeId) return path;
    const adjacentNodes = getAdjacentNodes(newNodes, newEdges, nextNode);
    adjacentNodes.forEach((node) => {
      if (!node.visited) {
        const newPath = [...path];
        newPath.push(node);
        queue.push(newPath);
        node.visited = true;
      }
    });
  }
};
