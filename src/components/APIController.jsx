import React from "react";
import axios from "axios";

import { routes } from "../config/routes";
import { GraphContext } from "../contexts/graph";

const headers = {
  "Content-type": "application/json",
};

// A component to control all backend rest api requests
export const APIController = () => {
  const { nodes, setNodes, edges, setEdges } = React.useContext(GraphContext);
  const [testNodes, setTestNodes] = React.useState([]);

  React.useEffect(() => {
    loadNodes();
  }, []);
  React.useEffect(() => console.log(nodes, testNodes), [
    testNodes,
    testNodes.length,
  ]);

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
  return null;
};
