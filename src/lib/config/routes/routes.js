const serverUrl = process.env.REACT_APP_SERVER_URL;

// list endpoints for list and create api views
// detail endpoints for read, update and destroy api views

const routes = {
  api: {
    accounts: "",
    graphs: {
      list: serverUrl + "graphs/",
      detail: (graphId) => `${routes.api.graphs.list}${graphId}`,
    },
    nodes: {
      list: (graphId) => `${routes.api.graphs.detail(graphId)}/nodes/`,
      detail: (graphId, nodeId) =>
        `${routes.api.nodes.list(graphId)}${nodeId}/`,
    },
    edges: {
      list: (graphId) => `${routes.api.graphs.detail(graphId)}/edges/`,
      detail: (graphId, edgeId) =>
        `${routes.api.edges.list(graphId)}${edgeId}/`,
    },
  },
};

console.log(routes.api.nodes.detail(182, 1927));
