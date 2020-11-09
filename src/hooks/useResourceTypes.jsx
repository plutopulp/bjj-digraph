import React from "react";
import { GraphContext } from "../contexts/graph";
import { routes } from "../config/routes";

// A hook supplying all resource types for handling API calls
export const useResourceTypes = () => {
  const { nodes, setNodes, edges, setEdges } = React.useContext(GraphContext);

  const resourceTypes = {
    nodes: {
      state: nodes,
      setState: setNodes,
      endpoint: routes.api.nodes,
    },
    edges: {
      state: edges,
      setState: setEdges,
      endpoint: routes.api.edges,
    },
  };
  return resourceTypes;
};
