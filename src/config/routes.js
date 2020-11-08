const serverUrl = process.env.REACT_APP_SERVER_URL;

export const routes = {
  api: {
    accounts: "",
    nodes: serverUrl + "nodes/viewset/",
    edges: serverUrl + "edges/viewset/",
  },
};
