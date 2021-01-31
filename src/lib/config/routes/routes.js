const serverUrl = process.env.REACT_APP_SERVER_URL;

// list endpoints for list and create api views
// detail endpoints for read, update and destroy api views

export const routes = {
  pages: {
    home: "/",
    test: "/test/",
    about: "/about/",
    graphs: {
      base: "/graphs/",
      get list() {
        return routes.pages.graphs.base;
      },
      detail: (graphId) => `${routes.pages.graphs.base}${graphId}/`,
    },
  },
  api: {
    accounts: "",
    settings: {
      base: serverUrl + "settings/",
      get site() {
        return routes.api.settings.base + "site/";
      },
      get nodes() {
        return routes.api.settings.base + "nodes/";
      },
    },
    userSettings: {
      nodes: {
        base: serverUrl + "user-settings/nodes/",
        get list() {
          return routes.api.userSettings.nodes.base + "list/";
        },
        detail: (nodeId) => `${routes.api.userSettings.nodes.base}${nodeId}/`,
      },
    },
    graphs: {
      list: serverUrl + "graphs/",
      detail: (graphId) => `${routes.api.graphs.list}${graphId}/`,
    },
    nodes: (graphId) => {
      return {
        list: `${routes.api.graphs.detail(graphId)}nodes/`,
        detail: (nodeId) => `${routes.api.nodes(graphId).list}${nodeId}/`,
      };
    },
    edges: (graphId) => {
      return {
        list: `${routes.api.graphs.detail(graphId)}edges/`,
        detail: (edgeId) => `${routes.api.edges(graphId).list}${edgeId}/`,
      };
    },
  },
};
