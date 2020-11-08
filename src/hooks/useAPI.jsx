import React from "react";
import axios from "axios";

import { routes } from "../config/routes";
import { GraphContext } from "../contexts/graph";

const headers = {
  "Content-type": "application/json",
};

// A hook to handle all backend rest api requests
export const useAPI = () => {
  const { nodes, setNodes, edges, setEdges } = React.useContext(GraphContext);
  const [testNodes, setTestNodes] = React.useState([]);

  // Loads all the initial graph nodes into react state
  const loadNodes = () => {
    axios
      .get(routes.api.nodes, headers)
      .then((response) => {
        console.log(response.data);
        setNodes(response.data);
      })
      .catch((error) => console.log(error));
  };
  // Loads all the initial graph edges into react state
  const loadEdges = () => {
    axios
      .get(routes.api.edges, headers)
      .then((response) => {
        console.log(response.data);
        setEdges(response.data);
      })
      .catch((error) => console.log(error));
  };
  return { loadNodes, loadEdges };
};
