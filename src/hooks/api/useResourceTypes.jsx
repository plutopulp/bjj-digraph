import React from "react";
import { GraphContext } from "../../contexts/graph";
import { GraphsContext } from "../../contexts/graphs";
import { routes } from "../../lib/config/routes/routes";

// A hook supplying all resource types for handling API calls
export const useResourceTypes = () => {
  const { nodes, setNodes, edges, setEdges } = React.useContext(GraphContext);
  const { graphs, setGraphs } = React.useContext(GraphsContext);

  const resourceTypes = {
    graphs: {
      state: graphs,
      setState: setGraphs,
      endpoint: routes.api.graphs,
    },
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
