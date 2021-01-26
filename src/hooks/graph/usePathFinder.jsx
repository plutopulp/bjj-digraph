import React from "react";

import { GraphContext } from "../../contexts/graph";

import { getAdjacentNodeIds, IdsToViewNodes } from "../../lib/utils/graph";

// A hook providing path finding methods for a graph
export const usePathFinder = () => {
  const { nodes, edges, setPaths, multiSelect } = React.useContext(
    GraphContext
  );

  // Finds all connecting paths between a start and end node
  const handleConnectingPaths = () => {
    // Extract the node IDs of the view nodes
    // Only use these in the search
    const [startId, endId] = multiSelect.map((node) => node.id);
    const _edges = edges.map((edge) => {
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
      if (id === endId) outputPaths.push(path.map((id) => id));
      else {
        const adjacentNodeIds = getAdjacentNodeIds(id, _edges);
        adjacentNodeIds.forEach((id) => {
          if (!visited.has(id)) dfs(id);
        });
      }
      path.pop();
      visited.delete(id);
    };
    dfs(startId);
    // Convert the ids to nodes
    setPaths(outputPaths.map((path) => IdsToViewNodes(path, nodes)));
  };
  return { handleConnectingPaths };
};
