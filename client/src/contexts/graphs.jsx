import React from "react";
import PropTypes from "prop-types";

export const GraphsContext = React.createContext();

export const GraphsProvider = ({ children }) => {
  const [graphs, setGraphs] = React.useState([]);

  return (
    <GraphsContext.Provider value={{ graphs, setGraphs }}>
      {children}
    </GraphsContext.Provider>
  );
};

GraphsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
