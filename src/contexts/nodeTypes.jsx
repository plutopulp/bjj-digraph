import React from "react";
import { useAPI } from "../hooks";
import { routes } from "../lib/config/routes/routes";

export const NodeTypesContext = React.createContext();

export const NodeTypesProvider = ({ children }) => {
  const { read } = useAPI();
  const [nodeSettings, setNodeSettings] = React.useState([]);

  React.useEffect(() => {
    read(routes.api.settings.nodes, setNodeSettings);
  }, []);

  React.useEffect(() => console.log(nodeSettings));

  return (
    <NodeTypesContext.Provider
      value={{
        nodeSettings,
        setNodeSettings,
      }}
    >
      {children}
    </NodeTypesContext.Provider>
  );
};
