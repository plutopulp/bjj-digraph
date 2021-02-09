import React from "react";
import { GraphContext } from "../../contexts/graph/graph";
import { GraphsContext } from "../../contexts/graphs";
import { routes } from "../../lib/config/routes/routes";

// A hook supplying all resource types for handling API calls
export const useResourceTypes = () => {
  const { nodes, setNodes, edges, setEdges, currentGraphId } = React.useContext(
    GraphContext
  );
  const { graphs, setGraphs } = React.useContext(GraphsContext);

  const resourceTypes = {
    graphs: {
      state: graphs,
      setState: setGraphs,
      endpoints: {
        list: routes.api.graphs.list,
        detail: routes.api.graphs.detail(currentGraphId),
      },
    },
    nodes: {
      state: nodes,
      setState: setNodes,
      endpoints: {
        list: routes.api.nodes(currentGraphId).list,
        detail: routes.api.nodes(currentGraphId).detail,
      },
    },
    edges: {
      state: edges,
      setState: setEdges,
      endpoint: routes.api.edges,
    },
  };

  return resourceTypes;
};
