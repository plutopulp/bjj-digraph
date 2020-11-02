import React from "react";
import { graph as graphData } from "../fixtures/graph";

export const GraphContext = React.createContext();

export const GraphProvider = ({ children }) => {
  const [nodes, setNodes] = React.useState(graphData.nodes);
  const [edges, setEdges] = React.useState(graphData.edges);

  return (
    <GraphContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </GraphContext.Provider>
  );
};
