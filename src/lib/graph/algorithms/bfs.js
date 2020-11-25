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
  console.log("Start");
  while (queue.length) {
    const nextNode = queue.shift();
    console.log(nextNode);

    const outwardEdges = newEdges.filter((edge) => edge.source === nextNode.id);
    const adjacentNodeIds = outwardEdges.map((edge) => edge.target);
    const adjacentNodes = adjacentNodeIds.map((nodeId) => {
      return newNodes.find((node) => node.id === nodeId);
    });
    adjacentNodes.forEach((node) => {
      if (!node.visited) {
        queue.push(node);
        node.visited = true;
      }
    });
  }
};
