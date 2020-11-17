const serverUrl = process.env.REACT_APP_SERVER_URL;

// list endpoints for list and create api views
// detail endpoints for read, update and destroy api views

export const routes = {
  pages: {
    home: "",
    about: "about/",
    graphs: {
      list: "/graphs/",
      detail: (graphId) => `/graphs/${graphId}/`,
    },
  },
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
