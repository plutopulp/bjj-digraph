const serverUrl = process.env.REACT_APP_SERVER_URL;

// list endpoints for list and create api views
// detail endpoints for read, update and destroy api views

export const routes = {
  pages: {
    home: "/",
    about: "/about/",
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
    nodes: (graphId) => {
      return {
        list: `${routes.api.graphs.detail(graphId)}/nodes/`,
        detail: (nodeId) => `${routes.api.nodes(graphId).list}${nodeId}/`,
      };
    },
    edges: (graphId) => {
      return {
        list: `${routes.api.graphs.detail(graphId)}/edges/`,
        detail: (edgeId) => `${routes.api.edges(graphId).list}${edgeId}/`,
      };
    },
  },
};
