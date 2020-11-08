import React from "react";
import PropTypes from "prop-types";
import { graph as graphData } from "../fixtures/graph";

export const GraphContext = React.createContext();

// Context provider for all graph state quantities
export const GraphProvider = ({ children }) => {
  const [nodes, setNodes] = React.useState(graphData.nodes);
  const [edges, setEdges] = React.useState(graphData.edges);
  const [selected, setSelected] = React.useState({});
  const [copiedNode, setCopiedNode] = React.useState({});

  return (
    <GraphContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        selected,
        setSelected,
        copiedNode,
        setCopiedNode,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

GraphProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
